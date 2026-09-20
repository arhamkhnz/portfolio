import { useEffect, useRef } from "react";

import Matter from "matter-js";

import { TechStackData, type TechStackItem } from "../../_data/tech-stack-data";

const SCENE_HEIGHT = 240;
const BOUNDARY_THICKNESS = 80;
const BODY_RADIUS = 20;
const ICON_SIZE = BODY_RADIUS * 2;

const FALLBACK_ICON_COLOR = "F7F8FA";

type MouseWithHandlers = Matter.Mouse & {
  mousedown: EventListener;
  mousemove: EventListener;
  mouseup: EventListener;
  mousewheel: EventListener;
};

function removeMouseListeners(mouse: MouseWithHandlers) {
  const { element } = mouse;

  element.removeEventListener("mousemove", mouse.mousemove);
  element.removeEventListener("mousedown", mouse.mousedown);
  element.removeEventListener("mouseup", mouse.mouseup);
  element.removeEventListener("wheel", mouse.mousewheel);
  element.removeEventListener("touchmove", mouse.mousemove);
  element.removeEventListener("touchstart", mouse.mousedown);
  element.removeEventListener("touchend", mouse.mouseup);
}

function isDarkIconColor(hex: string) {
  const normalizedHex = hex.length === 3 ? hex.replace(/(.)/g, "$1$1") : hex;
  const red = Number.parseInt(normalizedHex.slice(0, 2), 16);
  const green = Number.parseInt(normalizedHex.slice(2, 4), 16);
  const blue = Number.parseInt(normalizedHex.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return brightness < 48;
}

function normalizeIconSize(svg: string) {
  return svg.replace(/<svg\b([^>]*)>/, (_, attributes: string) => {
    const normalizedAttributes = attributes.replace(/\s(?:width|height)=(?:"[^"]*"|'[^']*')/g, "");

    return `<svg${normalizedAttributes} width="${ICON_SIZE}" height="${ICON_SIZE}">`;
  });
}

function createIconTexture(data: TechStackItem) {
  const { icon } = data;
  const usesCurrentColor = icon.svg.includes("currentColor");
  const visibleSvg = icon.svg.replaceAll("currentColor", `#${FALLBACK_ICON_COLOR}`);
  const monochromeSvg = icon.variants.mono;
  const svg =
    isDarkIconColor(icon.hex) && !usesCurrentColor && monochromeSvg
      ? monochromeSvg.replace("<svg ", `<svg fill="#${FALLBACK_ICON_COLOR}" `)
      : visibleSvg;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(normalizeIconSize(svg))}`;
}

export default function TechStack() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) return;

    const engine = Matter.Engine.create();
    const runner = Matter.Runner.create();
    const pixelRatio = window.devicePixelRatio || 1;
    let width = Math.max(scene.clientWidth, 1);

    const render = Matter.Render.create({
      element: scene,
      engine,
      options: {
        width,
        height: SCENE_HEIGHT,
        wireframes: false,
        background: "transparent",
      },
    });

    Matter.Render.setPixelRatio(render, pixelRatio);

    const ground = Matter.Bodies.rectangle(
      width / 2,
      SCENE_HEIGHT + BOUNDARY_THICKNESS / 2,
      width,
      BOUNDARY_THICKNESS,
      {
        isStatic: true,
        render: { fillStyle: "#080808" },
      },
    );
    const wallLeft = Matter.Bodies.rectangle(
      -BOUNDARY_THICKNESS / 2,
      SCENE_HEIGHT / 2,
      BOUNDARY_THICKNESS,
      SCENE_HEIGHT,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
      },
    );
    const wallRight = Matter.Bodies.rectangle(
      width + BOUNDARY_THICKNESS / 2,
      SCENE_HEIGHT / 2,
      BOUNDARY_THICKNESS,
      SCENE_HEIGHT,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
      },
    );
    const roof = Matter.Bodies.rectangle(width / 2, -BOUNDARY_THICKNESS / 2, width, BOUNDARY_THICKNESS, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    const shapes = TechStackData.map((data) =>
      Matter.Bodies.circle(Math.random() * width, Math.random() * SCENE_HEIGHT, BODY_RADIUS, {
        restitution: 0.8,
        render: {
          sprite: {
            texture: createIconTexture(data),
            xScale: 1,
            yScale: 1,
          },
        },
      }),
    );

    Matter.Composite.add(engine.world, [ground, wallLeft, wallRight, roof, ...shapes]);

    const mouse = Matter.Mouse.create(render.canvas) as MouseWithHandlers;
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    // Matter.js 0.20 binds `wheel`; removing it lets the page scroll over the canvas.
    mouse.element.removeEventListener("wheel", mouse.mousewheel);

    Matter.Composite.add(engine.world, mouseConstraint);

    const keepShapesInBounds = () => {
      shapes.forEach((shape) => {
        if (
          shape.position.x < 0 ||
          shape.position.x > width ||
          shape.position.y < 0 ||
          shape.position.y > SCENE_HEIGHT
        ) {
          Matter.Body.setPosition(shape, {
            x: Math.random() * width,
            y: Math.random() * SCENE_HEIGHT,
          });
          Matter.Body.setVelocity(shape, { x: 0, y: 0 });
        }
      });
    };

    Matter.Events.on(engine, "beforeUpdate", keepShapesInBounds);

    const handleResize = () => {
      const nextWidth = Math.max(scene.clientWidth, 1);

      if (nextWidth === width) return;

      const horizontalScale = nextWidth / width;
      Matter.Body.scale(ground, horizontalScale, 1);
      Matter.Body.scale(roof, horizontalScale, 1);
      width = nextWidth;

      Matter.Render.setSize(render, width, SCENE_HEIGHT);
      Matter.Body.setPosition(ground, {
        x: width / 2,
        y: SCENE_HEIGHT + BOUNDARY_THICKNESS / 2,
      });
      Matter.Body.setPosition(roof, { x: width / 2, y: -BOUNDARY_THICKNESS / 2 });
      Matter.Body.setPosition(wallRight, {
        x: width + BOUNDARY_THICKNESS / 2,
        y: SCENE_HEIGHT / 2,
      });
    };

    window.addEventListener("resize", handleResize);

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Events.off(engine, "beforeUpdate", keepShapesInBounds);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      removeMouseListeners(mouse);
      Matter.Mouse.clearSourceEvents(mouse);
      Matter.Composite.clear(engine.world, false, true);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return <div ref={sceneRef} className="h-60 w-full" />;
}

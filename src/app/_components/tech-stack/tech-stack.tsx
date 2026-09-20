import { useEffect, useRef } from "react";

import Matter from "matter-js";

import { TechStackData } from "../../_data/tech-stack-data";

// Define the base path for the textures
const basePath = `${process.env.NEXT_PUBLIC_ASSET_URL}/images/technologies/`;

export default function TechStack() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(Matter.Runner.create());

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const pixelRatio = window.devicePixelRatio || 1;

    // Function to determine the appropriate scale factor based on the browser
    const getScaleFactor = () => {
      const baseScale = 0.25;
      // Check for Safari or Instagram in-app browser
      if ((userAgent.includes("safari") && !userAgent.includes("chrome")) || userAgent.includes("instagram")) {
        // Adjust for Safari and iPhone on high-resolution displays
        return baseScale * (15 / pixelRatio);
      } else {
        // Standard scale for other browsers
        return baseScale;
      }
    };

    let width = scene.clientWidth;
    const height = 240;

    // Create renderer
    const render = Matter.Render.create({
      element: scene,
      engine: engineRef.current,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Set initial canvas dimensions and pixel ratio
    render.canvas.style.width = "100%";
    render.canvas.style.height = `${height}px`;
    Matter.Render.setPixelRatio(render, pixelRatio);

    // Ground and walls
    const ground = Matter.Bodies.rectangle(width / 2, height + 40, width, 80, {
      isStatic: true,
      render: { fillStyle: "#080808" },
    });
    const wallLeft = Matter.Bodies.rectangle(-40, height / 2, 80, height, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });
    const wallRight = Matter.Bodies.rectangle(width + 40, height / 2, 80, height, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });
    const roof = Matter.Bodies.rectangle(width / 2, -40, width, 80, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    const createCircle = (x: number, y: number, radius: number, texture: string) => {
      const scaleFactor = getScaleFactor();
      return Matter.Bodies.circle(x, y, radius, {
        restitution: 0.8,
        render: {
          sprite: {
            texture: texture,
            xScale: scaleFactor,
            yScale: scaleFactor,
          },
        },
      });
    };

    const shapes = TechStackData.map((data) => {
      const texture = `${basePath}${data.fileName}`;
      return createCircle(Math.random() * width, Math.random() * height, 20, texture);
    });

    Matter.World.add(engineRef.current.world, [ground, wallLeft, wallRight, roof, ...shapes]);

    // Mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engineRef.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    // Remove mouse wheel events to allow scrolling
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Matter.World.add(engineRef.current.world, mouseConstraint);

    // Ensure shapes stay within bounds
    Matter.Events.on(engineRef.current, "beforeUpdate", () => {
      shapes.forEach((shape) => {
        if (shape.position.x < 0 || shape.position.x > width || shape.position.y < 0 || shape.position.y > height) {
          Matter.Body.setPosition(shape, {
            x: Math.random() * width,
            y: Math.random() * height,
          });
          Matter.Body.setVelocity(shape, { x: 0, y: 0 });
        }
      });
    });

    // Handle resizing dynamically
    const handleResize = () => {
      width = scene.clientWidth;

      render.options.width = width;
      render.bounds.max.x = width;
      render.bounds.max.y = height;

      render.canvas.width = width * pixelRatio;
      render.canvas.height = height * pixelRatio;

      Matter.Render.setPixelRatio(render, pixelRatio);

      // Update positions of walls and ground
      Matter.Body.setPosition(ground, { x: width / 2, y: height + 40 });
      Matter.Body.setPosition(wallRight, { x: width + 40, y: height / 2 });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    Matter.Runner.run(runnerRef.current, engineRef.current);
    Matter.Render.run(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runnerRef.current);
      Matter.World.clear(engineRef.current.world);
      Matter.Engine.clear(engineRef.current);
      render.canvas.remove();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        width: "100%",
        height: "240px",
        border: "none",
        padding: "0",
        margin: "0",
        outline: "none",
      }}
    />
  );
}

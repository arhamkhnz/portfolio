import type { IconModule } from "@thesvg/icons";
import angular from "@thesvg/icons/angular";
import astro from "@thesvg/icons/astro";
import aws from "@thesvg/icons/aws";
import azureDevops from "@thesvg/icons/azure-azure-devops";
import csharp from "@thesvg/icons/csharp";
import css from "@thesvg/icons/css";
import docker from "@thesvg/icons/docker";
import dotnet from "@thesvg/icons/dotnet";
import express from "@thesvg/icons/express";
import firebase from "@thesvg/icons/firebase";
import git from "@thesvg/icons/git";
import ionic from "@thesvg/icons/ionic";
import javascript from "@thesvg/icons/javascript";
import laravel from "@thesvg/icons/laravel";
import mongodb from "@thesvg/icons/mongodb";
import mysql from "@thesvg/icons/mysql";
import nextdotjs from "@thesvg/icons/nextdotjs";
import nodedotjs from "@thesvg/icons/nodedotjs";
import php from "@thesvg/icons/php";
import postgresql from "@thesvg/icons/postgresql";
import postman from "@thesvg/icons/postman";
import react from "@thesvg/icons/react";
import tailwindcss from "@thesvg/icons/tailwindcss";
import threedotjs from "@thesvg/icons/threedotjs";
import typescript from "@thesvg/icons/typescript";
import vercel from "@thesvg/icons/vercel";
import vuedotjs from "@thesvg/icons/vuedotjs";
import wix from "@thesvg/icons/wix";
import wordpress from "@thesvg/icons/wordpress";

export type TechStackItem = {
  name: string;
  icon: IconModule;
};

export const TechStackData: TechStackItem[] = [
  { name: "React", icon: react },
  { name: "Angular", icon: angular },
  { name: "Vue", icon: vuedotjs },
  { name: "Node.js", icon: nodedotjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "C#", icon: csharp },
  { name: "Docker", icon: docker },
  { name: ".NET", icon: dotnet },
  { name: "Express", icon: express },
  { name: "Git", icon: git },
  { name: "Ionic", icon: ionic },
  { name: "Laravel", icon: laravel },
  { name: "Next.js", icon: nextdotjs },
  { name: "AWS", icon: aws },
  { name: "PHP", icon: php },
  { name: "Postman", icon: postman },
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "Three.js", icon: threedotjs },
  { name: "Vercel", icon: vercel },
  { name: "Astro", icon: astro },
  { name: "Azure DevOps", icon: azureDevops },
  { name: "Firebase", icon: firebase },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "WordPress", icon: wordpress },
  { name: "Wix", icon: wix },
  { name: "CSS", icon: css },
];

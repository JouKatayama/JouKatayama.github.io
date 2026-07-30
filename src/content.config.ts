import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      category: z.enum(["remind", "project", "community", "research"]),
      status: z.enum(["recruiting", "ongoing", "completed", "planned"]),
      audience: z.array(z.string()),
      featured: z.boolean().default(false),
      publishedAt: z.coerce.date(),
      startAt: z.coerce.date().optional(),
      endAt: z.coerce.date().optional(),
      image: image().optional(),
      externalUrl: z.url().optional(),
      draft: z.boolean().default(false),
    }),
});

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(180),
      category: z.enum([
        "remind",
        "ai-career",
        "organization",
        "people-analytics",
        "youth",
        "wellbeing",
        "report",
      ]),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      author: z.string().default("キャリアキャンパス"),
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.enum(["event", "recruitment", "activity", "media", "organization"]),
    publishedAt: z.coerce.date(),
    externalUrl: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, insights, news };

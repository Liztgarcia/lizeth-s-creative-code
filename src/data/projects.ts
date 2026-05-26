export type ProjectCategory = "Creative Code" | "Hardware" | "Data & AI" | "QA";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  /** Image or video URL. Drop files in `public/projects/` and reference as `/projects/file.jpg` */
  media?: string;
  mediaType?: "image" | "video";
  /** External link opened in new tab when "View" is clicked */
  link: string;
  /** Optional code/github link */
  code?: string;
  tags?: string[];
}

// Edit this list to add your own projects.
export const projects: Project[] = [
  {
    title: "Generative Type Garden",
    category: "Creative Code",
    description:
      "p5.js sketch that grows typographic flora from live keyboard input. Built as a meditation on testing edge-cases visually.",
    media: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    mediaType: "image",
    link: "https://github.com/liztgarcia",
    code: "https://github.com/liztgarcia",
    tags: ["p5.js", "creative coding"],
  },
  {
    title: "Ambient Mood Lamp",
    category: "Hardware",
    description:
      "ESP32-driven lamp that reacts to room sound and time of day. Custom PCB, 3D-printed shade, WLED firmware fork.",
    media: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    mediaType: "image",
    link: "https://github.com/liztgarcia",
    code: "https://github.com/liztgarcia",
    tags: ["ESP32", "PCB", "3D print"],
  },
  {
    title: "AI Test Case Generator",
    category: "Data & AI",
    description:
      "Machine learning model that generates test cases from requirements using NLP and pattern recognition.",
    media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    mediaType: "image",
    link: "https://github.com/Liztgarcia",
    code: "https://github.com/Liztgarcia",
    tags: ["NLP", "ML", "pattern recognition", "QA"],
  },
  {
    title: "Playwright Test Suite Kit",
    category: "QA",
    description:
      "Reusable Playwright + TypeScript scaffolding with visual diff, accessibility, and API contract checks baked in.",
    media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    mediaType: "image",
    link: "https://github.com/liztgarcia",
    code: "https://github.com/liztgarcia",
    tags: ["Playwright", "TypeScript", "CI"],
  },
];

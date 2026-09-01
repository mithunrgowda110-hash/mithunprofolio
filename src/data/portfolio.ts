/**
 * EDIT THIS FILE to update your portfolio content.
 * Nothing here is fabricated — placeholders stay until you fill them in.
 */

export const profile = {
  name: "MITHUN C R",
  headline:
    "NATIONAL WRESTLER | DEVELOPER | PROBLEM SOLVER | TECHNOLOGY ENTHUSIAST",
  intro:
    "Combining the discipline of a national wrestler with the creativity of a technology enthusiast, I build applications, websites and innovative digital solutions.",
  tagline: "DISCIPLINE FROM THE MAT, CREATIVITY FROM TECHNOLOGY.",
  /** Replace /images/profile.jpg with your passport-size photo (same filename). */
  photo: "/images/profile.jpg",
  /** Put your PDF at public/resume.pdf to enable the download button. */
  resumeUrl: "/resume.pdf",
};

export const contact = {
  email: "[ADD MY EMAIL]",
  linkedin: "[ADD MY LINKEDIN URL]",
  instagram: "[ADD MY INSTAGRAM ID]",
  phone: "[ADD MY CONTACT NUMBER]",
  github: "[ADD MY GITHUB URL]",
};

export const isPlaceholder = (value: string) =>
  value.trim().startsWith("[") && value.trim().endsWith("]");

export const about = [
  "I am a student driven by two things: technology and sport. On the mat I compete as a national-level wrestler; at the desk I write code, build websites and applications, and explore artificial intelligence and machine learning.",
  "Wrestling taught me discipline, consistency and the habit of showing up every single day. Competition taught me teamwork, leadership and how to stay calm when the pressure is highest. I bring exactly that mindset to engineering problems — break it down, drill the fundamentals, iterate until it works.",
  "I am currently deepening my skills in Python, web development and applied machine learning, and I am looking for opportunities where curiosity, discipline and problem solving matter.",
];

export type Skill = { name: string; level: "Advanced" | "Proficient" | "Growing"; note: string };

export const skills: Skill[] = [
  { name: "Python", level: "Advanced", note: "Scripting, automation, data & AI work" },
  { name: "HTML", level: "Advanced", note: "Semantic, accessible markup" },
  { name: "CSS", level: "Advanced", note: "Modern layouts, animation, theming" },
  { name: "JavaScript", level: "Proficient", note: "Interactive, dynamic interfaces" },
  { name: "Web Development", level: "Proficient", note: "End-to-end site building" },
  { name: "App Development", level: "Proficient", note: "Cross-platform application basics" },
  { name: "Problem Solving", level: "Advanced", note: "Algorithmic and logical thinking" },
  { name: "Artificial Intelligence", level: "Growing", note: "Concepts, tooling, applied AI" },
  { name: "Machine Learning", level: "Growing", note: "Models, datasets, experimentation" },
  { name: "Programming", level: "Proficient", note: "Multiple major languages" },
  { name: "Responsive Web Design", level: "Advanced", note: "Mobile, tablet and desktop" },
];

export type Achievement = {
  icon: string;
  title: string;
  detail: string;
  meta: string;
};

/** EDITABLE: add exact medals, competition names, dates and awards here. */
export const achievements: Achievement[] = [
  {
    icon: "🏆",
    title: "National-level Wrestling",
    detail: "Competed at national level in wrestling.",
    meta: "[Add competition name, medal and date]",
  },
  {
    icon: "💻",
    title: "Programming & Technology",
    detail: "Building skills across Python, JavaScript and core computer science.",
    meta: "[Add details]",
  },
  {
    icon: "🌐",
    title: "Website Development",
    detail: "Designing and shipping responsive websites.",
    meta: "[Add details]",
  },
  {
    icon: "📱",
    title: "Application Development",
    detail: "Developing applications from idea to working product.",
    meta: "[Add details]",
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    detail: "Consistent practice in logic, algorithms and debugging.",
    meta: "[Add details]",
  },
  {
    icon: "🤖",
    title: "AI / ML Interest & Projects",
    detail: "Exploring machine learning models and intelligent applications.",
    meta: "[Add details]",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

/**
 * EDITABLE: add certificates here after placing images in public/certificates/.
 * Nothing is invented — the gallery shows an empty state until you add entries.
 */
export const certificates: Certificate[] = [];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

/** EDITABLE: add your real projects here. */
export const projects: Project[] = [];

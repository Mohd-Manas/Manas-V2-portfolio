import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { resumeData } from "@/data/resume";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Code, Terminal, Settings } from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiWordpress,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiFigma,
} from "@icons-pack/react-simple-icons";

type IconComponent = React.ComponentType<{
  className?: string;
  color?: string;
  size?: number | string;
}>;

type IconConfig = {
  icon: IconComponent | typeof Terminal;
  color: string;
};

const getIconConfig = (skill: string): IconConfig => {
  const iconMap: Record<string, IconConfig> = {
    "React.js": { icon: SiReact, color: "#61DAFB" },
    "React Native": { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "WordPress": { icon: SiWordpress, color: "#21759B" },
    HTML: { icon: SiHtml5, color: "#E34F26" },
    CSS: { icon: SiCss, color: "#1572B6" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    PHP: { icon: SiPhp, color: "#777BB4" },
    "MySQL Server": { icon: SiMysql, color: "#4479A1" },
    MongoDB: { icon: SiMongodb, color: "#47A248" },
    cPanel: { icon: Settings, color: "#FF6C2C" },
    Git: { icon: Code, color: "#F05032" },
    GitHub: { icon: SiGithub, color: "#181717" },
    Postman: { icon: SiPostman, color: "#FF6C37" },
    Figma: { icon: SiFigma, color: "#F24E1E" },
  };

  return iconMap[skill] || { icon: Terminal, color: "currentColor" };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <SectionHeading
        title="Technical Toolkit"
        subtitle="A comprehensive grid of the technologies, frameworks, and tools I use to build robust digital solutions."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10"
      >
        {resumeData.skills.map((skill) => {
          const config = getIconConfig(skill);
          const Icon = config.icon;

          let iconColor = config.color;
          if (skill === "GitHub" || skill === "Next.js") {
            iconColor = isDark ? "#FFFFFF" : "#000000";
          }

          return (
            <motion.div 
              key={skill} 
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group cursor-pointer h-full"
            >
              <div
                className={cn(
                  "relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[2.5rem] bg-card/95 border border-border/80 transition-all duration-300 backdrop-blur-md h-full shadow-lg",
                  "hover:border-primary/50 hover:shadow-glow-lg"
                )}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mb-6 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                  <Icon className="w-full h-full aspect-square" color={iconColor} />
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors text-center tracking-wide">
                  {skill}
                </span>
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{ backgroundColor: config.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

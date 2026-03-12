import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';

type Project = (typeof resumeData.projects)[number] & {
  image?: any; // StaticImageData | string
};

interface ProjectCardProps {
  project: Project;
  idx: number;
}

function ProjectCard({ project, idx }: ProjectCardProps) {
  // Handle both imported images (StaticImageData) and string paths
  const bg = (project.image as any)?.src ?? project.image ?? '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="flex justify-center w-full"
    >
      <Card className="w-full max-w-md lg:max-w-none h-full overflow-hidden border-border/80 bg-card/95 backdrop-blur-md hover:border-primary/60 transition-all duration-500 group shadow-lg hover:shadow-primary/5 flex flex-col rounded-[2rem]">
        <div
          className="aspect-[16/10] bg-secondary/40 overflow-hidden relative group-hover:bg-secondary/50 transition-colors"
          style={{
            backgroundImage: bg ? `url(${bg})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-all duration-700 transform group-hover:scale-105">
            <Layers size={140} className="text-primary" />
          </div>
          <div className="absolute top-6 left-6 z-20">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-10 h-10 rounded-xl bg-background/80 backdrop-blur-xl flex items-center justify-center border border-white/20 text-primary shadow-lg"
            >
              <Code2 size={20} />
            </motion.div>
          </div>
          <div className="absolute bottom-6 left-6 z-20 right-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-primary/20 text-primary border-primary/30 font-bold text-[9px] uppercase tracking-widest backdrop-blur-md px-2.5 py-0.5 shadow-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <CardContent className="p-6 md:p-8 flex-grow">
          <h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-primary transition-colors text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="text-foreground/90 font-medium text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          <ul className="space-y-3 mb-2">
            {project.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="text-xs text-muted-foreground flex items-start gap-3 leading-relaxed group/item"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1.5 group-hover/item:bg-primary transition-colors" />
                {bullet}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="p-6 md:p-8 pt-0 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 h-11 inline-flex items-center justify-center gap-2 text-xs font-bold bg-secondary hover:bg-secondary/80 text-foreground rounded-xl transition-all border border-border/80"
          >
            <Github size={16} />
            Code
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 h-11 inline-flex items-center justify-center gap-2 text-xs font-bold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-md shadow-primary/20"
          >
            <ExternalLink size={16} />
            Live
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="End-to-end applications developed with a focus on performance and scalability."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {resumeData.projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project as Project} idx={idx} />
        ))}
      </div>
    </section>
  );
}

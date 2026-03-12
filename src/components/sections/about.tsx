import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading 
        title="About Me" 
        subtitle="Bridging the gap between software development and IT infrastructure."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card className="h-full border-white/10 glass-dark">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {resumeData.profile.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Born in</div>
                  <div className="font-semibold text-foreground">Sri Lanka</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Languages</div>
                  <div className="font-semibold text-foreground">Tamil, English</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Key Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            {
              icon: MapPin,
              color: "text-blue-500",
              bg: "bg-blue-500/15",
              label: "Location",
              value: resumeData.profile.location
            },
            {
              icon: Briefcase,
              color: "text-orange-500",
              bg: "bg-orange-500/15",
              label: "Experience",
              value: `${resumeData.profile.yearsOfExperience} Years`
            },
            {
              icon: Code,
              color: "text-purple-500",
              bg: "bg-purple-500/15",
              label: "Main Stack",
              value: "JavaScript, React JS, React Native & PHP"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-1 p-8 rounded-[2.5rem] border border-border/80 bg-card/95 backdrop-blur-md shadow-soft flex items-center gap-6 hover:border-primary/50 hover:shadow-glow-lg transition-all group cursor-default"
            >
              <div
                className={`w-16 h-16 rounded-[1.5rem] ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-sm`}
              >
                <item.icon size={32} />
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground uppercase font-black tracking-[0.2em] mb-1">
                  {item.label}
                </div>
                <div className="font-black text-foreground text-xl tracking-tight">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
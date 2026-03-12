import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
export function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className="w-full bg-card/95 border-t border-border/60 py-16 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left space-y-2">
            <p className="text-foreground font-black text-2xl tracking-tighter uppercase">{resumeData.profile.name}</p>
            <p className="text-primary font-extrabold text-sm tracking-[0.2em] uppercase italic opacity-80">Full-Stack Developer & IT Officer</p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { icon: Github, label: "GitHub", href: resumeData.socials.github, color: isDark ? "hover:text-white" : "hover:text-black" },
              { icon: Linkedin, label: "LinkedIn", href: resumeData.socials.linkedin, color: "hover:text-blue-500" },
              { icon: Mail, label: "Email", href: `mailto:${resumeData.socials.email}`, color: "hover:text-primary" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground transition-all duration-300 shadow-md",
                  "hover:bg-card hover:scale-110 hover:shadow-xl",
                  social.color
                )}
                aria-label={social.label}
              >
                <social.icon size={26} />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black uppercase tracking-[0.3em] text-primary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Built with React & Tailwind
            </div> */}
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-border/20 text-center flex flex-col md:flex-row justify-between items-center gap-6 opacity-80">
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Mohammed Manas. Crafted for excellence.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
             <span className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</span>
             <span className="cursor-pointer hover:text-primary transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
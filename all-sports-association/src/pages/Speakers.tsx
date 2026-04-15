import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const speakers = [
  { name: "Tom Glavine", role: "MLB Hall of Famer", year: "2022 Keynote Speaker" },
  { name: "Rocky Bleier", role: "NFL Legend & Vietnam Veteran", year: "Past Speaker" },
  { name: "Kirk Herbstreit", role: "ESPN College Football Analyst", year: "Past Speaker" },
  { name: "Alex Hawkins", role: "NFL Player & Broadcaster", year: "Past Speaker" },
  { name: "Roy Firestone", role: "ESPN Sports Broadcaster", year: "Past Speaker" },
  { name: "Don Sutton", role: "MLB Hall of Famer", year: "Past Speaker" },
];

export default function Speakers() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Legacy of Excellence
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-8">
              Keynote <br />
              <span className="text-emerald">Speakers</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our banquet has been graced by some of the most legendary figures in sports history.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass dark:glass-dark p-8 rounded-[2rem] text-center hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <User className="text-emerald" size={40} />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{speaker.role}</p>
                <Badge variant="outline" className="border-navy/20 text-navy/60 dark:text-white/60">{speaker.year}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

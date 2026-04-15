import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, Users, Star, ShieldCheck, Trophy, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const awardCategories = [
  {
    title: "Scholastic Athlete",
    description: "Honoring the top male and female student-athletes from local high schools.",
    winners: [
      { name: "Sophie Broutin", school: "Niceville High School", year: "2025" },
      { name: "Titus Thornell", school: "Choctaw High School", year: "2024" },
      { name: "Lauren Bage", school: "Choctaw High School", year: "2024" },
    ]
  },
  {
    title: "Special Olympian",
    description: "Celebrating athletic excellence and determination in Special Olympics.",
    winners: [
      { name: "Michael Embry", sport: "Special Olympic Athlete", year: "2025" },
      { name: "Shane Patty", sport: "Special Olympic Athlete", year: "2024" }
    ]
  },
  {
    title: "Collegiate",
    description: "Recognizing outstanding achievement at the collegiate level.",
    winners: [
      { name: "Lilly Chouinard", sport: "Female Collegiate", year: "2025" },
      { name: "Jaden Voisin", school: "University of South Alabama", year: "2025" },
      { name: "Liliana Fernandez", school: "Tulsa University", year: "2024" },
      { name: "Azareye’h Thomas", school: "Florida State University", year: "2024" }
    ]
  },
  {
    title: "Professional",
    description: "Recognizing outstanding achievement at the professional level.",
    winners: [
      { name: "Rece Hinds", team: "Cincinnati Reds", year: "2025" },
      { name: "Juanyeh Thomas", team: "Dallas Cowboys", year: "2024" }
    ]
  },
  {
    title: "Amateur",
    description: "Honoring excellence in amateur athletics.",
    winners: [
      { name: "Cam Farrah", sport: "Amateur Athlete", year: "2025" },
      { name: "Blake Orr", sport: "Amateur Athlete", year: "2024" }
    ]
  },
  {
    title: "Taylor Haugen Trophy",
    description: "Presented to the area athlete who best demonstrates the qualities of Taylor Haugen.",
    winners: [
      { name: "Emery Hagan", school: "Local High School", year: "2025" },
      { name: "Garrison LeMire", school: "Niceville High School", year: "2024" }
    ]
  },
  {
    title: "Colonel Al Byrne Award",
    description: "The highest honor bestowed by the All Sports Association.",
    winners: [
      { name: "Howard Hill", sport: "Community Leader", year: "2025" }
    ]
  }
];

export default function Awards() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Honoring Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8">
              Recognizing Our <br />
              <span className="text-emerald">Local Legends</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Each year, the All Sports Association honors the finest athletes in Northwest Florida across multiple categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {awardCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass dark:glass-dark p-10 rounded-[2.5rem] border-none shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mb-8">
                  <Trophy className="text-emerald" size={32} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-navy dark:text-white mb-4">{category.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{category.description}</p>
                
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40 dark:text-white/40">2025 Winners</p>
                  {category.winners.map((winner) => (
                    <div key={winner.name} className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/5 rounded-2xl">
                      <div>
                        <p className="font-bold text-navy dark:text-white">{winner.name}</p>
                        <p className="text-sm text-muted-foreground">{winner.school || winner.team || winner.sport}</p>
                      </div>
                      <Badge variant="outline" className="border-emerald/30 text-emerald">{winner.year}</Badge>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wuerffel Trophy Spotlight */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-emerald text-white mb-6">Premier Award</Badge>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">The <span className="text-emerald">Wuerffel</span> Trophy</h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Named after 1996 Heisman Trophy winner Danny Wuerffel, this award is presented annually in Fort Walton Beach to the FBS player who best combines exemplary community service with athletic achievement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald hover:bg-emerald/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl">
                  Visit Official Site
                </Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-lg font-bold">
                  About Danny Wuerffel
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square glass-dark p-8 rounded-[3rem] border border-white/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" 
                  alt="Wuerffel Trophy" 
                  className="w-full h-full object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

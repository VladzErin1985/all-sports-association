import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Michael Embry – 2025 Special Olympic Athlete Award Winner",
    date: "March 14, 2025",
    excerpt: "The winner of the prestigious All Sports Association Special Olympics Athlete of the Year award is Michael Embry. Michael was an early participant in the Special Olympics program in Richardson, Texas, where he played soccer...",
    category: "Special Olympian"
  },
  {
    title: "Sophia Broutin – 2025 Female Scholastic Award Winner",
    date: "March 12, 2025",
    excerpt: "Sophia Broutin, a senior at Niceville High School, is the All Sports female scholastic award winner for 2025. Sophie grew up playing soccer, but started playing volleyball in middle school...",
    category: "Scholastic"
  },
  {
    title: "Lilly Chouinard – 2025 Female Collegiate Award Winner",
    date: "March 6, 2025",
    excerpt: "The All Sports Association is pleased to name Lilly Chouinard as our Female Collegiate Award winner. Lilly started taking gymnastics at age 3, and began competing at age 5...",
    category: "Collegiate"
  },
  {
    title: "Rece Hinds – 2025 Professional Award Winner",
    date: "March 6, 2025",
    excerpt: "Niceville native Rece Hinds is a professional baseball outfielder for the Cincinnati Reds. He made his Major League Baseball (MLB) debut in 2024. Hinds grew up in Niceville, and attended Niceville High School...",
    category: "Professional"
  },
  {
    title: "Cam Farrah – 2025 Amateur Award Winner",
    date: "March 5, 2025",
    excerpt: "The All Sports Association is proud to name Cameron “Cam” Farrah as our Amateur Award winner. Farrah graduated cum laude in three years from Tulane University in 2022 after her incredible high school career...",
    category: "Amateur"
  },
  {
    title: "Jaden Voisin – 2025 Male Collegiate Winner",
    date: "March 5, 2025",
    excerpt: "Crestview’s own Jaden Voisen is the All Sports Association Male Collegiate Athlete of the Year. Jason had an amazing collegiate career with the University of South Alabama playing football for the Jaguars...",
    category: "Collegiate"
  },
  {
    title: "Shane Patty – 2024 Special Olympic Athlete Award Winner",
    date: "March 15, 2024",
    excerpt: "The winner of the prestigious All Sports Association Special Olympics athlete of the year award is Shane Patty. This follows his recent selection as the Area 1 (Northwest Florida Region) Special Olympics athlete of the year for 2023...",
    category: "Special Olympian"
  },
  {
    title: "Titus Thornell – 2024 Male Scholastic Award Winner",
    date: "March 15, 2024",
    excerpt: "Titus Thornell, a Choctaw High School senior, is the recipient of the All Sports Scholastic Award. Titus is an outstanding student athlete who excelled during his high school career...",
    category: "Scholastic"
  },
  {
    title: "Ladd Mcconkey – 2023 Wuerfell Trophy Winner",
    date: "March 15, 2024",
    excerpt: "University of Georgia wide receiver Ladd McConkey is the 2023 recipient of the Wuerffel Trophy, which is awarded to the Football Bowl Subdivision football player who best combines exemplary community service...",
    category: "Wuerffel Trophy"
  },
  {
    title: "Lauren Bage – 2024 Female Scholastic Award Winner",
    date: "March 15, 2024",
    excerpt: "Lauren, a Choctaw High School senior, participated in cross-country, flag football, and weightlifting. She was the 2023 Defensive MVP on the State Runner-up Flag Football Team...",
    category: "Scholastic"
  },
  {
    title: "Liliana Fernandez – 2024 Female Collegiate Award Winner",
    date: "March 15, 2024",
    excerpt: "The All Sports Association is honored to name Liliana Fernandez as the Female Collegiate Award winner. The Tulsa University Hurricane senior is a four-year letter winner...",
    category: "Collegiate"
  },
  {
    title: "Garrison LeMire – 2024 Taylor Haugen Trophy Winner",
    date: "March 15, 2024",
    excerpt: "This year’s Taylor Haugen Trophy winner is Garrison LeMire, a senior at Niceville High School. Garrison’s primary sport is lacrosse, “the fastest sport on two feet.”",
    category: "Taylor Haugen"
  },
  {
    title: "Juanyeh Thomas – 2024 Professional Award Winner",
    date: "March 15, 2024",
    excerpt: "Walton and Niceville High School standout Juanyeh Thomas continues to make his presence known on the gridiron following a stand-out career at Georgia Tech...",
    category: "Professional"
  },
  {
    title: "Blake Orr – 2024 Amateur Award Winner",
    date: "March 15, 2024",
    excerpt: "The All Sports Association is proud to name Blake Orr as our Amateur Award winner. The Niceville High School alumnus is a sophomore on the Florida International University Track team...",
    category: "Amateur"
  },
  {
    title: "Azareye’h Thomas – 2024 Male Collegiate Winner",
    date: "March 15, 2024",
    excerpt: "Florida State University defensive star Azareye’h Thomas is the All Sports Association Male Collegiate Award winner. As a freshman defensive back, Thomas saw action in 11 games...",
    category: "Collegiate"
  }
];

export default function News() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Latest Updates
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8">
              News & <br />
              <span className="text-emerald">Announcements</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass dark:glass-dark p-10 rounded-[2.5rem] hover:shadow-2xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-emerald/10 text-emerald border-none">{item.category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar size={14} /> {item.date}
                </span>
              </div>
              <h3 className="text-3xl font-heading font-bold text-navy dark:text-white mb-4 group-hover:text-emerald transition-colors">{item.title}</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{item.excerpt}</p>
              <Button variant="ghost" className="p-0 h-auto text-navy dark:text-white hover:text-emerald group/btn">
                Read Full Story <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

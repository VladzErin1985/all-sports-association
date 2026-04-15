import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const videos = [
  { title: "2025 Awards Banquet Highlights", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
  { title: "Supporting Local Youth Athletics", duration: "2:15", thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" },
  { title: "Summer Golf Tournament 2024", duration: "4:20", thumbnail: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800" },
];

export default function Videos() {
  return (
    <div className="flex flex-col">
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Action & Impact
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8">
              Video <br />
              <span className="text-emerald">Archive</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-emerald text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform">
                      <Play fill="currentColor" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-6 bg-navy/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white group-hover:text-emerald transition-colors">{video.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

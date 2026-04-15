import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Ticket, Trophy, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Events() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Premier Events
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-8">
              Join Us in <br />
              <span className="text-emerald">Making a Difference</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our annual events help fund numerous worthwhile sports organizations and charitable causes in Northwest Florida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Annual Awards Banquet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-6 border-navy/20 text-navy dark:text-emerald">February Event</Badge>
              <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-6">Annual Awards Banquet</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Held each February at the Destin-Fort Walton Beach Convention Center, our premier annual event honors top High School, Collegiate, Amateur, Professional, and Special Olympic athletes plus community supporters.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-navy dark:text-white font-medium">
                  <Calendar className="text-emerald" size={20} />
                  <span>Every February</span>
                </div>
                <div className="flex items-center gap-4 text-navy dark:text-white font-medium">
                  <MapPin className="text-emerald" size={20} />
                  <span>Destin-Fort Walton Beach Convention Center</span>
                </div>
              </div>
              <Button className="bg-navy text-white rounded-full px-8 py-6 h-auto text-lg font-bold">
                Learn More About Banquet
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" alt="Awards Banquet" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Golf Tournament */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <Badge variant="outline" className="mb-6 border-navy/20 text-navy dark:text-emerald">July Event</Badge>
              <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-6">2026 Golf Tournament</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The 2026 All Sports Association Golf Tournament will be held on Saturday, July 25th, 2026 at Emerald Bay. This annual summer tradition is a key fundraiser for our local youth athletics.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-navy dark:text-white font-medium">
                  <Calendar className="text-emerald" size={20} />
                  <span>Saturday, July 25th, 2026</span>
                </div>
                <div className="flex items-center gap-4 text-navy dark:text-white font-medium">
                  <MapPin className="text-emerald" size={20} />
                  <span>Emerald Bay Golf Club</span>
                </div>
              </div>
              <Button className="bg-emerald text-white rounded-full px-8 py-6 h-auto text-lg font-bold">
                Register for Tournament
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1000" alt="Golf Tournament" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

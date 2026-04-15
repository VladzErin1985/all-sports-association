import React from "react";
import { motion } from "motion/react";
import { Users, History, Target, Award, ShieldCheck, Heart, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
              Our Story
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-8">
              Supporting Local <br />
              <span className="text-emerald">Youth Sports</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Since 1970, the All Sports Association has brought together the finest athletes in Northwest Florida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-16 md:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-8">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                "Since 1970 the All Sports Association has brought together the finest athletes in Northwest Florida. Through the efforts of our annual banquet & summer golf tournament, we help fund numerous worthwhile sports organizations & charitable causes. Our primary beneficiaries are the Boys & Girls Club of the Emerald Coast, Special Olympics Florida- Okaloosa, Eleanor J. Johnson Youth Center and Okaloosa Walton FCA."
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center shrink-0">
                    <Trophy className="text-emerald" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy dark:text-white mb-2">Founded in 1970</h4>
                    <p className="text-muted-foreground">Established by Colonel Al Byrne to celebrate athletic excellence and support youth programs.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-navy/5 dark:bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Users className="text-navy dark:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy dark:text-white mb-2">100+ Members</h4>
                    <p className="text-muted-foreground">A dedicated group of volunteers committed to the Northwest Florida community.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald/20 to-navy/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity -z-10" />
              <div className="glass dark:glass-dark p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] relative overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-10">
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-emerald/20 ring-offset-4 ring-offset-background">
                      <img
                        src="/President_Jearl_McCall.jpeg"
                        alt="Jearl McCall"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '12px' }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Trophy size={20} />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <Badge variant="outline" className="mb-3 border-emerald/30 text-emerald font-bold tracking-widest uppercase text-[10px]">
                      President 2025–2026
                    </Badge>
                    <h3 className="text-4xl font-heading font-black text-navy dark:text-white mb-2">Jearl McCall</h3>
                    <p className="text-emerald font-medium tracking-tight">All Sports Association</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-emerald/10 select-none">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V12C21.017 15.3137 18.3307 18 15.017 18H14.017V21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C5.91243 8 5.017 7.10457 5.017 6V3H12.017V12C12.017 15.3137 9.33071 18 6.017 18H5.017V21Z" /></svg>
                  </div>
                  <p className="text-xl italic text-navy/80 dark:text-white/80 leading-relaxed pl-8 relative z-10">
                    "On behalf of our 100 + members, I welcome everyone to our 57th year of the All Sports Association. As a local product of this area, I am truly honored and humbled to serve as President for 2025 – 2026. In the past 10 years, the All Sports Association’s diligent volunteers have raised well over 2 million dollars for our local youth athletics."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-navy/5 dark:bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our organization and our commitment to the community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Community Focus", desc: "We are deeply rooted in Fort Walton Beach and dedicated to its youth." },
              { icon: Award, title: "Excellence", desc: "We celebrate and encourage the highest standards of athletic achievement." },
              { icon: ShieldCheck, title: "Integrity", desc: "We operate with transparency and accountability in all our efforts." },
              { icon: Users, title: "Inclusivity", desc: "We support sports programs for all children, including Special Olympics." },
              { icon: Heart, title: "Passion", desc: "Our volunteers and members are driven by a genuine love for sports." },
              { icon: ShieldCheck, title: "Legacy", desc: "We honor our history while building a brighter future for the next generation." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass dark:glass-dark border-none shadow-xl hover:shadow-2xl transition-all rounded-3xl p-8 h-full group">
                  <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <value.icon className="text-emerald" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

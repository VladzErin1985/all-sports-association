import * as React from "react";
import { motion } from "motion/react";
import { Trophy, Users, Heart, Star, ArrowRight, Calendar, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const stats = [
  { label: "Raised for Youth", value: "$2M+", icon: Heart },
  { label: "Dedicated Volunteers", value: "100+", icon: Users },
  { label: "Athletes Supported", value: "Thousands", icon: Trophy },
  { label: "Years of Impact", value: "57", icon: Star },
];

const events = [
  {
    title: "2026 Golf Tournament",
    date: "Saturday, July 25th, 2026",
    location: "Emerald Bay",
    description: "Join us for our annual summer golf tournament to support local youth athletics.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    tag: "Upcoming Event"
  },
  {
    title: "Annual Awards Banquet",
    date: "Each February",
    location: "Destin-Fort Walton Beach Convention Center",
    description: "Honoring top High School, Collegiate, Amateur, Professional, and Special Olympic athletes.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    tag: "Annual Event"
  }
];

const winners = [
  { name: "Michael Embry", award: "2025 Special Olympic Athlete Award", bio: "Celebrating athletic excellence and determination." },
  { name: "Sophie Broutin", award: "2025 Female Scholastic Award", bio: "Niceville High School, volleyball standout." },
  { name: "Rece Hinds", award: "2025 Professional Award", bio: "Cincinnati Reds standout athlete." },
];

const beneficiaries = [
  { name: "Boys & Girls Club", logo: "https://picsum.photos/seed/bgc/200/200" },
  { name: "Special Olympics Florida", logo: "https://picsum.photos/seed/special/200/200" },
  { name: "Eleanor J. Johnson Youth Center", logo: "https://picsum.photos/seed/youth/200/200" },
  { name: "Okaloosa Walton FCA", logo: "https://picsum.photos/seed/fca/200/200" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/ASA-AWARD-WINNER.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,30,0.50)', zIndex: 0 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center" style={{ paddingTop: 'clamp(80px, 15vw, 200px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="font-heading font-black text-white mb-4 leading-[0.9] tracking-tighter" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
              ALL SPORTS <br />
              <span className="text-white">ASSOCIATION</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl text-white font-bold max-w-3xl mx-auto mb-8 md:mb-12" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
              Supporting Local Youth Sports Programs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-4 sm:px-0">
              <Link to="/donate" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-emerald hover:bg-emerald/90 text-white rounded-full px-10 md:px-12 py-6 md:py-8 text-lg md:text-xl font-black shadow-2xl shadow-emerald/40 group active:scale-95 transition-all">
                  Donate Now
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/events" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-xl rounded-full px-10 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold active:scale-95 transition-all">
                  Our Events
                </Button>
              </Link>
            </div>

            {/* Hero Stats - Glass Style */}
            <div className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-12 p-5 md:p-8 glass dark:glass-dark rounded-[2rem] md:rounded-[2.5rem] w-fit mx-auto border-white/20">
              {stats.map((stat) => (
                <React.Fragment key={stat.label}>
                  <div className="text-center px-4">
                    <h4 className="text-4xl font-black text-navy dark:text-white mb-1">{stat.value}</h4>
                    <p className="text-[11px] text-navy/60 dark:text-white/60 uppercase tracking-[0.2em] font-black">{stat.label}</p>
                  </div>
                  {stat !== stats[stats.length - 1] && (
                    <div className="hidden sm:block w-px h-12 bg-navy/10 dark:bg-white/10" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* President's Message */}
      <section className="py-16 md:py-32 px-4 bg-off-white dark:bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 ring-8 ring-emerald/10 ring-offset-8 ring-offset-background">
                <img
                  src="/President_Jearl_McCall.jpeg"
                  alt="President Jearl McCall"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald/10 rounded-full blur-3xl -z-0" />
              <div className="absolute top-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-2xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-navy text-white px-4 py-1">President's Welcome</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-8">Jearl McCall</h2>
              <p className="text-2xl font-light italic text-navy/80 dark:text-white/80 leading-relaxed mb-10 relative">
                <span className="text-6xl text-emerald/20 absolute -top-10 -left-6 font-serif">"</span>
                On behalf of our 100 + members, I welcome everyone to our 57th year of the All Sports Association. As a local product of this area, I am truly honored and humbled to serve as President for 2025 – 2026. In the past 10 years, the All Sports Association’s diligent volunteers have raised well over 2 million dollars for our local youth athletics.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-emerald" />
                <span className="font-bold text-navy dark:text-white uppercase tracking-widest">President 2025–2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 md:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <Badge variant="outline" className="mb-4 border-navy/20 text-navy dark:text-emerald">Upcoming Events</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white">Join Us in Making a Difference</h2>
            </div>
            <Link to="/events">
              <Button variant="ghost" className="text-navy dark:text-white hover:text-emerald group">
                View All Events <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] glass dark:glass-dark hover:shadow-2xl transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden m-4 rounded-2xl">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-navy/5 text-navy dark:text-emerald border-none">{event.tag}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} /> {event.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-navy dark:text-white mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-navy/60 dark:text-white/60">{event.location}</span>
                    <Button variant="outline" className="rounded-full group-hover:bg-navy group-hover:text-white transition-colors border-navy/20">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Winners Highlight */}
      <section className="py-16 md:py-32 bg-navy/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-emerald text-white">2025 Award Winners</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-white">Celebrating Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <motion.div
                key={winner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass dark:glass-dark p-8 rounded-3xl border-none shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-navy/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald/10 transition-colors">
                  <Award className="text-emerald" size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{winner.name}</h3>
                <p className="text-emerald font-medium text-sm mb-4 uppercase tracking-wider">{winner.award}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{winner.bio}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/awards">
              <Button variant="link" className="text-navy dark:text-white hover:text-emerald">
                View All 2025 Winners <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="py-16 md:py-32 bg-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Who We Support</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Your contributions directly impact these incredible organizations and the thousands of youth they serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {beneficiaries.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6 group"
              >
                <div className="w-32 h-32 bg-white rounded-full p-4 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <span className="text-center font-medium text-white/80 group-hover:text-emerald transition-colors">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-navy to-navy/90 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/10 rounded-full -ml-20 -mb-20 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to make an impact?</h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Whether you join as a member, become a sponsor, or make a one-time donation, your support helps us continue our mission of supporting local youth sports.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/donate">
                    <Button size="lg" className="bg-emerald hover:bg-emerald/90 text-white rounded-full px-8">
                      Donate Now
                    </Button>
                  </Link>
                  <Link to="/members">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                      Become a Member
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="shrink-0">
                <div className="w-48 h-48 border-4 border-white/10 rounded-full flex items-center justify-center p-4">
                  <div className="w-full h-full border-4 border-emerald/30 rounded-full flex items-center justify-center p-4">
                    <Trophy size={64} className="text-emerald" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

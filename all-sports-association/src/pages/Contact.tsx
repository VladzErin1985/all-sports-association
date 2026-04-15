import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Get In Touch
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-8">
              We'd Love to <br />
              <span className="text-emerald">Hear From You</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Have questions about our events, membership, or how to get involved? Reach out to us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-8">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-emerald/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-emerald" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy dark:text-white mb-2">Email Us</h4>
                    <p className="text-lg text-muted-foreground">AllSports850@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-navy/5 dark:bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-navy dark:text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy dark:text-white mb-2">Mailing Address</h4>
                    <p className="text-lg text-muted-foreground">
                      All Sports Association<br />
                      P.O. Box 2591<br />
                      Fort Walton Beach, FL 32549
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-10 glass dark:glass-dark rounded-[2.5rem]">
                <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Follow Our Impact</h4>
                <p className="text-muted-foreground mb-6">Stay updated with our latest news, event announcements, and community stories.</p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald transition-colors">
                    <span className="font-bold">f</span>
                  </div>
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald transition-colors">
                    <span className="font-bold">in</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass dark:glass-dark p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full bg-white/50 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full bg-white/50 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-white/50 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider">Message</label>
                  <textarea rows={5} className="w-full bg-white/50 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full bg-emerald hover:bg-emerald/90 text-white rounded-full py-8 text-xl font-bold shadow-xl shadow-emerald/20">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

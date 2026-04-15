import * as React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Star, Award, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sponsorTiers = [
  {
    name: "Platinum",
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    sponsors: [
      { name: "First National Bank", logo: "https://picsum.photos/seed/bank/300/150", desc: "Proudly serving the Emerald Coast since 1955." },
      { name: "Eglin Federal Credit Union", logo: "https://picsum.photos/seed/creditunion/300/150", desc: "Major supporter of local youth and community programs." },
      { name: "Okaloosa County", logo: "https://picsum.photos/seed/county/300/150", desc: "Supporting local recreation and tourism." },
    ]
  },
  {
    name: "Gold",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    sponsors: [
      { name: "City of Fort Walton Beach", logo: "https://picsum.photos/seed/city/300/150", desc: "Our home city and primary partner." },
      { name: "Destin-Fort Walton Beach", logo: "https://picsum.photos/seed/destin/300/150", desc: "Promoting our beautiful area and its sports legacy." },
      { name: "FiveChannels", logo: "https://picsum.photos/seed/marketing/300/150", desc: "Official Web Design and Marketing partner." },
    ]
  },
  {
    name: "Silver",
    color: "text-slate-300",
    bg: "bg-slate-300/10",
    sponsors: [
      { name: "Emerald Coast Realty", logo: "https://picsum.photos/seed/realty/300/150" },
      { name: "Coastal Health", logo: "https://picsum.photos/seed/health/300/150" },
      { name: "FWB Law Group", logo: "https://picsum.photos/seed/law/300/150" },
      { name: "Harbor Marina", logo: "https://picsum.photos/seed/marina/300/150" },
    ]
  }
];

const benefits = [
  { tier: "Platinum", price: "$10,000+", perks: ["Logo on all event banners", "Full page ad in banquet program", "10 VIP Banquet tickets", "Social media spotlight monthly"] },
  { tier: "Gold", price: "$5,000+", perks: ["Logo on website", "Half page ad in banquet program", "6 Banquet tickets", "Social media spotlight quarterly"] },
  { tier: "Silver", price: "$2,500+", perks: ["Name on website", "Quarter page ad in banquet program", "4 Banquet tickets", "Mention in annual report"] },
];

export default function Sponsors() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 mb-12 md:mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 bg-emerald/10 text-emerald border-none px-4 py-1">Our Partners</Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-navy dark:text-white mb-8">
              Thank You to Our <br /><span className="text-emerald">Community Sponsors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is made possible through the generous support of local businesses and organizations who believe in the power of youth sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Grid */}
      <section className="px-4 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {sponsorTiers.map((tier, idx) => (
            <div key={tier.name}>
              <div className="flex items-center gap-4 mb-12">
                <h2 className={tier.color + " text-3xl font-heading font-bold"}>{tier.name} Sponsors</h2>
                <div className="h-px bg-border flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: sIdx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <Card className="glass dark:glass-dark border-none shadow-lg hover:shadow-2xl transition-all rounded-[2rem] overflow-hidden">
                      <div className="aspect-[2/1] bg-white/50 dark:bg-black/20 flex items-center justify-center p-8 overflow-hidden">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <CardContent className="p-8">
                        <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-2">{sponsor.name}</h3>
                        {sponsor.desc && <p className="text-sm text-muted-foreground mb-4">{sponsor.desc}</p>}
                        <Button variant="ghost" className="p-0 h-auto text-emerald hover:text-emerald/80 flex items-center gap-2">
                          Visit Website <ExternalLink size={14} />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 md:py-32 bg-navy text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Become a Sponsor</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Invest in the future of our community. Choose the sponsorship level that best fits your organization's goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((level, i) => (
              <motion.div
                key={level.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 p-8 rounded-[2rem] h-full flex flex-col">
                  <h3 className="text-2xl font-heading font-bold mb-2">{level.tier} Level</h3>
                  <p className="text-emerald text-3xl font-bold mb-8">{level.price}</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {level.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-white/70 text-sm">
                        <ShieldCheck className="text-emerald shrink-0" size={18} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-navy hover:bg-emerald hover:text-white transition-colors rounded-xl h-12">
                    Become a {level.tier} Sponsor
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-6">Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            We'd love to discuss how your business can partner with the All Sports Association to support local youth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-navy text-white rounded-full px-10">
              Contact Our Team
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10">
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, Star, ArrowRight, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const platinumSponsors = [
  { name: "Mary Esther Bingo", desc: "Proud platinum supporter of youth athletics in Northwest Florida." },
  { name: "David Scott Lee", desc: "Dedicated to making a lasting difference in our local sports community." },
  { name: "The Margaret Finkel Foundation", desc: "Investing in the next generation of athletes and community leaders." },
];

const goldSponsors = [
  "Eglin Federal Credit Union",
  "Emerald Coast Vacation",
  "RealJoy",
  "Elite Cabinet",
  "Renovation Flooring",
  "Costa Enterprises",
  "Michles & Booth Law Firm",
  "Destin Health and Fitness Club",
  "Patrick Endodontics",
  "Saltwater Restaurants",
  "United Healthcare",
  "Advanced Fire Protection",
  "Coy Browning Law Firm",
  "Jacob & Titan Technologies",
  "Premier Properties Group",
  "Schmuker Advisors",
  "The Shops at Wright Plaza",
  "AVCON",
  "Boys & Girls Clubs of the Emerald Coast",
  "CDP Stucco of Northwest Florida Inc.",
  "Mathews Mathews LLP",
  "Realty House",
  "Step One",
  "FBNT Bank",
  "Safe Harbor Emerald Coast",
  "Community Bank",
];

const corporateSponsors = [
  "Anchors Smith Grimsley",
  "FPL",
  "KBR",
  "Petermann",
  "United Fidelity Bank",
  "Valparaiso Coca-Cola",
  "Cox",
  "Emerald Coast Association of Realtors",
  "Jay Odom Group",
  "Boomer",
  "Bryan Pest Control",
  "Lewis Bear Company",
  "Orthopaedic Associates P.A.",
  "Galati",
  "COLSA",
  "Emerald ENT",
  "ERA American Realty",
  "Holiday Builders",
  "JDF",
  "Okaloosa Gas District",
  "United Community",
  "Bay Area Awards",
  "Brannon and Brannon Personal Injury Attorneys",
  "Friendship Veterinary Clinic",
  "Regions",
  "Chelco",
  "CWR Contracting",
  "FWB Housing Authority",
  "Freedom Dental",
  "Gulf Coast Facial Oral Surgery",
  "Merrill",
  "Power South Energy Cooperative",
];

const sponsorBenefits = [
  {
    tier: "Platinum",
    price: "$10,000+",
    color: "text-slate-300",
    border: "border-slate-300/30",
    accent: "bg-slate-300/10",
    perks: [
      "Logo on all event banners & signage",
      "Full page ad in banquet program",
      "10 VIP Banquet tickets",
      "Social media spotlight monthly",
      "Speaking opportunity at annual banquet",
    ],
  },
  {
    tier: "Gold",
    price: "$5,000+",
    color: "text-amber-400",
    border: "border-amber-400/30",
    accent: "bg-amber-400/10",
    perks: [
      "Logo prominently displayed on website",
      "Half page ad in banquet program",
      "6 Banquet tickets",
      "Social media spotlight quarterly",
    ],
  },
  {
    tier: "Corporate",
    price: "$1,000+",
    color: "text-emerald",
    border: "border-emerald/30",
    accent: "bg-emerald/10",
    perks: [
      "Name listed on website",
      "Quarter page ad in banquet program",
      "4 Banquet tickets",
      "Mention in annual report",
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Our Partners
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-8">
              Thank You to Our<br />
              <span className="text-emerald">Community Sponsors</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              For over 55 years, generous local businesses and organizations have made our mission possible —
              funding youth sports programs, charitable causes, and unforgettable community events across Northwest Florida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Star className="text-slate-300 shrink-0" size={28} />
            <h2 className="text-3xl font-heading font-bold text-slate-400 dark:text-slate-300 whitespace-nowrap">
              Platinum Sponsors
            </h2>
            <div className="h-px bg-border flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor, i) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass dark:glass-dark border border-slate-300/20 shadow-xl hover:shadow-2xl transition-all rounded-[2rem] overflow-hidden h-full">
                  <div className="h-2 bg-gradient-to-r from-slate-300 via-white to-slate-400" />
                  <CardContent className="p-8 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-slate-300/10 rounded-2xl flex items-center justify-center">
                      <Star className="text-slate-400" size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-navy dark:text-white">{sponsor.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{sponsor.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-16 md:py-24 px-4 bg-amber-50/40 dark:bg-amber-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <ShieldCheck className="text-amber-400 shrink-0" size={28} />
            <h2 className="text-3xl font-heading font-bold text-amber-500 dark:text-amber-400 whitespace-nowrap">
              Gold Sponsors
            </h2>
            <div className="h-px bg-border flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {goldSponsors.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i % 9) * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-amber-200/60 dark:border-amber-400/10 shadow-sm hover:shadow-md hover:border-amber-300 dark:hover:border-amber-400/30 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="font-semibold text-navy dark:text-white text-sm group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Sponsors */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Heart className="text-emerald shrink-0" size={28} />
            <h2 className="text-3xl font-heading font-bold text-emerald whitespace-nowrap">
              Corporate Sponsors
            </h2>
            <div className="h-px bg-border flex-grow" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {corporateSponsors.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (i % 12) * 0.03 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-border hover:border-emerald/40 hover:shadow-sm transition-all group">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                  <span className="text-sm text-navy dark:text-white font-medium leading-tight group-hover:text-emerald transition-colors">
                    {name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor — Benefits */}
      <section className="py-16 md:py-32 bg-navy text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <Badge className="mb-6 bg-emerald text-white px-6 py-2 text-sm font-bold tracking-widest uppercase">
              Partner With Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Become a Sponsor</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Invest in the future of our community. Your support funds youth sports programs,
              Special Olympics, and charitable causes throughout Northwest Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorBenefits.map((level, i) => (
              <motion.div
                key={level.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-white/5 border ${level.border} p-8 rounded-[2rem] h-full flex flex-col hover:bg-white/10 transition-colors`}>
                  <h3 className={`text-2xl font-heading font-bold mb-2 ${level.color}`}>{level.tier}</h3>
                  <p className="text-3xl font-bold text-white mb-8">{level.price}</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {level.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-white/70 text-sm">
                        <ShieldCheck className="text-emerald shrink-0 mt-0.5" size={16} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-navy hover:bg-emerald hover:text-white transition-colors rounded-xl h-12 font-bold">
                      Become a {level.tier} Sponsor
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We'd love to discuss how your business can partner with the All Sports Association
              to support local youth and make a lasting impact in Northwest Florida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald text-white hover:bg-emerald/90 rounded-full px-10 h-14 text-base font-bold shadow-lg shadow-emerald/20">
                  <Mail size={18} className="mr-2" />
                  Contact Our Team
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base font-bold border-navy/20 dark:border-white/20 text-navy dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white/10">
                  Make a Donation
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

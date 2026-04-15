import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ShieldCheck, CreditCard, Calendar, ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const donationAmounts = [
  { amount: 25, label: "Supporter", impact: "Provides basic equipment for one young athlete." },
  { amount: 50, label: "Teammate", impact: "Covers registration fees for a local youth program." },
  { amount: 100, label: "MVP", impact: "Funds a full scholarship for a seasonal sport." },
  { amount: 250, label: "Champion", impact: "Supports a team's travel and tournament costs." },
];

export default function Donate() {
  const [step, setStep] = React.useState(1);
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(null);
  const [customAmount, setCustomAmount] = React.useState("");
  const [isMonthly, setIsMonthly] = React.useState(false);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-off-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Impact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-emerald/10 text-emerald border-none px-4 py-1">Support Our Mission</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy dark:text-white mb-8 leading-tight">
            Your Gift Changes <span className="text-emerald">Lives</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Every dollar donated to the All Sports Association goes directly toward supporting youth sports programs, providing scholarships, and ensuring every child in our community has the chance to play.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                <Trophy className="text-emerald" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-2">100% Local Impact</h3>
                <p className="text-muted-foreground">Your donation stays right here in Fort Walton Beach and Okaloosa County.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                <ShieldCheck className="text-navy dark:text-emerald" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-2">Secure & Transparent</h3>
                <p className="text-muted-foreground">We are a registered 501(c)(3) non-profit with the highest standards of financial accountability.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-navy rounded-[2.5rem] text-white overflow-hidden relative">
            <p className="text-lg font-medium mb-2 relative z-10">"The support from ASA allowed my son to join the soccer league when we were struggling. It meant the world to him."</p>
            <p className="text-emerald font-bold relative z-10">— Local Parent</p>
            <Heart className="absolute -bottom-10 -right-10 text-white/5" size={180} />
          </div>
        </motion.div>

        {/* Right Side: Donation Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-32"
        >
          <Card className="glass dark:glass-dark border-none shadow-2xl rounded-[3rem] overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Stepper */}
              <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-colors duration-500",
                      step >= s ? "bg-navy text-white" : "bg-white dark:bg-white/10 text-muted-foreground border border-border"
                    )}
                  >
                    {step > s ? <CheckCircle2 size={20} /> : s}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center">
                      <h2 className="text-2xl font-heading font-bold text-navy dark:text-white mb-2">Select Amount</h2>
                      <p className="text-muted-foreground">Choose how much you'd like to contribute</p>
                    </div>

                    <div className="flex p-1 bg-muted rounded-xl mb-8">
                      <button 
                        onClick={() => setIsMonthly(false)}
                        className={cn("flex-1 py-2 rounded-lg text-sm font-medium transition-all", !isMonthly ? "bg-white dark:bg-white/10 shadow-sm" : "text-muted-foreground")}
                      >
                        One-time
                      </button>
                      <button 
                        onClick={() => setIsMonthly(true)}
                        className={cn("flex-1 py-2 rounded-lg text-sm font-medium transition-all", isMonthly ? "bg-white dark:bg-white/10 shadow-sm" : "text-muted-foreground")}
                      >
                        Monthly
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {donationAmounts.map((item) => (
                        <button
                          key={item.amount}
                          onClick={() => { setSelectedAmount(item.amount); setCustomAmount(""); }}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all text-left group",
                            selectedAmount === item.amount 
                              ? "border-navy bg-navy/5 dark:bg-white/5" 
                              : "border-border hover:border-navy/30"
                          )}
                        >
                          <span className="block text-2xl font-bold text-navy dark:text-white mb-1">${item.amount}</span>
                          <span className="block text-xs font-medium text-emerald uppercase tracking-wider mb-2">{item.label}</span>
                          <span className="block text-[10px] text-muted-foreground leading-tight">{item.impact}</span>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Label>Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input 
                          type="number" 
                          placeholder="Enter amount" 
                          className="pl-8 h-14 rounded-xl text-lg"
                          value={customAmount}
                          onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={handleNext} 
                      disabled={!selectedAmount && !customAmount}
                      className="w-full bg-navy hover:bg-navy/90 text-white h-14 rounded-xl text-lg group"
                    >
                      Continue to Details <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <h2 className="text-2xl font-heading font-bold text-navy dark:text-white mb-2">Your Details</h2>
                      <p className="text-muted-foreground">Tell us a bit about yourself</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input placeholder="John" className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input placeholder="Doe" className="h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label>Designation (Optional)</Label>
                      <select className="w-full h-12 rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option>General Fund (Most Needed)</option>
                        <option>Banquet Program Ad</option>
                        <option>Banquet Sponsorship</option>
                        <option>Banquet Table</option>
                        <option>Club Events</option>
                        <option>Dues</option>
                        <option>Golf Tournament Summer</option>
                        <option>Golf Tournament Member Guest</option>
                        <option>Golf Tournament Raffle</option>
                        <option>In Kind</option>
                        <option>Merchandise</option>
                        <option>Poker Run</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" onClick={handleBack} className="flex-1 h-14 rounded-xl">Back</Button>
                      <Button onClick={handleNext} className="flex-[2] bg-navy text-white h-14 rounded-xl">Review & Pay</Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center">
                      <h2 className="text-2xl font-heading font-bold text-navy dark:text-white mb-2">Review & Pay</h2>
                      <p className="text-muted-foreground">Securely complete your donation</p>
                    </div>

                    <div className="bg-muted p-6 rounded-2xl space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Donation Amount</span>
                        <span className="font-bold text-navy dark:text-white">${selectedAmount || customAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Frequency</span>
                        <span className="font-bold text-navy dark:text-white">{isMonthly ? "Monthly" : "One-time"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Designation</span>
                        <span className="font-bold text-navy dark:text-white">General Fund</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Card Number</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                          <Input placeholder="0000 0000 0000 0000" className="pl-12 h-12 rounded-xl" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Expiry</Label>
                          <Input placeholder="MM/YY" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label>CVC</Label>
                          <Input placeholder="123" className="h-12 rounded-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={handleBack} className="flex-1 h-14 rounded-xl">Back</Button>
                      <Button className="flex-[2] bg-emerald hover:bg-emerald/90 text-white h-14 rounded-xl text-lg shadow-lg shadow-emerald/20">
                        Complete Donation
                      </Button>
                    </div>

                    <p className="text-[10px] text-center text-muted-foreground">
                      By clicking "Complete Donation", you agree to our terms of service and privacy policy. Your payment is securely processed via Stripe.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

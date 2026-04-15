import * as React from "react";
import { motion } from "motion/react";
import { ShieldCheck, LogIn, UserPlus, Key, CreditCard, Calendar, Award, History, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Members() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <MemberDashboard />;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-off-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-navy/10 text-navy dark:text-emerald border-none px-4 py-1">Member Portal</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy dark:text-white mb-8 leading-tight">
            Welcome Back to the <span className="text-emerald">Association</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Access your membership benefits, manage event tickets, and view your impact history all in one place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: CreditCard, title: "Easy Dues", desc: "Quickly pay your annual membership dues." },
              { icon: Calendar, title: "Event Access", desc: "Priority booking for banquets and tournaments." },
              { icon: Award, title: "Member Perks", desc: "Exclusive discounts and community recognition." },
              { icon: History, title: "Impact History", desc: "Track your contributions and their impact." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <item.icon className="text-emerald" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy dark:text-white">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass dark:glass-dark border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-navy/5 dark:bg-white/5 p-1 rounded-none h-14">
                <TabsTrigger value="login" className="rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-white/10 data-[state=active]:shadow-none">Login</TabsTrigger>
                <TabsTrigger value="register" className="rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-white/10 data-[state=active]:shadow-none">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-navy/5 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LogIn className="text-navy dark:text-emerald" size={32} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-navy dark:text-white">Member Login</h2>
                  <p className="text-muted-foreground">Enter your credentials to access your portal</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="name@example.com" className="rounded-xl h-12" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <button type="button" className="text-xs text-emerald hover:underline">Forgot password?</button>
                    </div>
                    <Input id="password" type="password" className="rounded-xl h-12" required />
                  </div>
                  <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white rounded-xl h-12 text-lg shadow-lg shadow-navy/20">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-navy/5 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="text-navy dark:text-emerald" size={32} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-navy dark:text-white">Join the Association</h2>
                  <p className="text-muted-foreground">Become a member and start making an impact</p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first">First Name</Label>
                      <Input id="first" placeholder="John" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last">Last Name</Label>
                      <Input id="last" placeholder="Doe" className="rounded-xl h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email Address</Label>
                    <Input id="reg-email" type="email" placeholder="name@example.com" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Password</Label>
                    <Input id="reg-password" type="password" className="rounded-xl h-12" />
                  </div>
                  <Button className="w-full bg-emerald hover:bg-emerald/90 text-white rounded-xl h-12 text-lg shadow-lg shadow-emerald/20 mt-4">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function MemberDashboard() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-heading font-bold text-navy dark:text-white mb-2">Hello, John Doe</h1>
            <p className="text-muted-foreground">Member since 2022 • <span className="text-emerald font-medium">Active Status</span></p>
          </div>
          <Button className="bg-navy text-white rounded-full px-8">
            Pay 2026 Dues
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="glass dark:glass-dark border-none shadow-xl rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center">
                <CreditCard className="text-emerald" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg">Membership</h3>
            </div>
            <p className="text-3xl font-heading font-bold text-navy dark:text-white mb-1">Platinum</p>
            <p className="text-sm text-muted-foreground">Expires Dec 31, 2026</p>
          </Card>

          <Card className="glass dark:glass-dark border-none shadow-xl rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-navy/10 rounded-2xl flex items-center justify-center">
                <Calendar className="text-navy dark:text-emerald" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg">Event Tickets</h3>
            </div>
            <p className="text-3xl font-heading font-bold text-navy dark:text-white mb-1">2 Active</p>
            <p className="text-sm text-muted-foreground">Next: Awards Banquet</p>
          </Card>

          <Card className="glass dark:glass-dark border-none shadow-xl rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center">
                <Heart className="text-emerald" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg">Total Impact</h3>
            </div>
            <p className="text-3xl font-heading font-bold text-navy dark:text-white mb-1">$1,250</p>
            <p className="text-sm text-muted-foreground">Lifetime contributions</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="glass dark:glass-dark border-none shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="font-heading">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {[
                { title: "Awards Banquet Ticket", date: "Oct 12, 2025", amount: "-$150.00", type: "Event" },
                { title: "Annual Membership Dues", date: "Jan 05, 2025", amount: "-$250.00", type: "Dues" },
                { title: "Summer Golf Donation", date: "Jul 20, 2024", amount: "-$500.00", type: "Donation" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-navy/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                      <History size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-navy dark:text-white">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.date} • {item.type}</p>
                    </div>
                  </div>
                  <span className="font-bold text-navy dark:text-white">{item.amount}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-navy text-white border-none shadow-xl rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold mb-4">Exclusive Member Benefit</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                As a Platinum member, you have early access to the 2026 Awards Banquet seating selection. Secure your preferred table today!
              </p>
              <Button className="bg-emerald hover:bg-emerald/90 text-white rounded-full px-8">
                Select Seating
              </Button>
            </div>
            <Award className="absolute -bottom-10 -right-10 text-white/5" size={240} />
          </Card>
        </div>
      </div>
    </div>
  );
}

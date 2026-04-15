import * as React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Mail, Lock, ArrowRight, UserPlus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function MemberPortal() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Design only, no backend
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-2xl text-white mb-4 shadow-xl">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl font-heading font-black text-navy dark:text-white mb-2">Member Portal</h1>
          <p className="text-slate-600 dark:text-slate-400">Welcome back! Please enter your details.</p>
        </div>

        <Card className="glass dark:glass-dark border-white/20 shadow-2xl overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-navy dark:text-white">Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your member account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="pl-10 bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="px-0 font-normal text-xs text-emerald hover:text-emerald/80">
                    Forgot password?
                  </Button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    className="pl-10 bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400"
                >
                  Remember me for 30 days
                </label>
              </div>
              <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white h-12 rounded-xl mt-2">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6">
            <div className="text-sm text-center text-slate-600 dark:text-slate-400 mb-4">
              Don't have an account?{" "}
              <Button variant="link" className="p-0 h-auto font-bold text-emerald hover:text-emerald/80">
                Contact ASA to join
              </Button>
            </div>
            <div className="flex items-center gap-2 p-3 bg-emerald/10 text-emerald rounded-lg text-xs">
              <Info size={16} className="shrink-0" />
              <p>Member portal access is restricted to All Sports Association members and partners.</p>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 bg-emerald/10 text-emerald rounded-xl flex items-center justify-center mb-3">
              <UserPlus size={20} />
            </div>
            <h3 className="font-bold text-navy dark:text-white mb-1">Become a Member</h3>
            <p className="text-xs text-slate-500">Join our community and help support local youth sports.</p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 bg-navy/10 text-navy rounded-xl flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-navy dark:text-white mb-1">Partner Portal</h3>
            <p className="text-xs text-slate-500">Corporate partners can manage their sponsorship here.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

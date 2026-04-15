import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trophy, Heart, Users, Calendar, Award, ShieldCheck, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Events", href: "/events" },
    { name: "Awards", href: "/awards" },
    { name: "Photos", href: "/photos" },
    { name: "Videos", href: "/videos" },
    { name: "News", href: "/news" },
    { name: "Speakers", href: "/speakers" },
    { name: "Member Portal", href: "/member-portal" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const showSolidNavbar = isScrolled || !isHomePage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showSolidNavbar 
          ? "bg-navy/95 backdrop-blur-xl shadow-2xl py-2 border-b border-white/10" 
          : "bg-transparent py-6"
      )}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Logo — far LEFT */}
        <div style={{ flex: '0 0 auto' }}>
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden border border-navy/10">
              <img
                src="https://www.allsportsassociation.com/wp-content/uploads/2022/02/cropped-ASA-Logo-FINAL-2.png"
                alt="All Sports Association Logo"
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl leading-none tracking-tight text-white">ALL SPORTS</span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-emerald">Association</span>
            </div>
          </Link>
        </div>

        {/* Nav links — CENTERED (desktop only) */}
        <nav className="hidden xl:flex" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '4px' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 rounded-full text-[13px] font-black uppercase tracking-wider transition-all duration-300 relative group whitespace-nowrap antialiased",
                location.pathname === item.href
                  ? "text-emerald"
                  : "text-white hover:text-emerald"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald transition-all duration-300",
                location.pathname === item.href ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
              )} />
            </Link>
          ))}
        </nav>

        {/* Right — dark mode + Donate (desktop) / hamburger (mobile) */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Desktop right actions */}
          <div className="hidden xl:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-white hover:bg-white/10"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          {/* Mobile controls */}
          <div className="xl:hidden flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full text-white">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "w-12 h-12 rounded-2xl transition-colors",
                showSolidNavbar
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>

      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[59] bg-black/50 xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Side drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-[60] h-full xl:hidden flex flex-col"
              style={{ width: '280px', background: '#0a1628', overflowY: 'auto' }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src="https://www.allsportsassociation.com/wp-content/uploads/2022/02/cropped-ASA-Logo-FINAL-2.png"
                      alt="ASA"
                      className="w-full h-full object-contain p-0.5"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-heading font-black text-lg text-white">ASA</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', padding: '4px 8px' }}
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col p-5 gap-1 flex-grow">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-colors",
                      location.pathname === item.href
                        ? "text-emerald bg-white/5"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Donate button */}
              <div className="p-5 border-t border-white/10 shrink-0">
                <Link to="/donate" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-emerald text-white h-12 rounded-full text-sm font-bold shadow-lg shadow-emerald/20">
                    Donate Now →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

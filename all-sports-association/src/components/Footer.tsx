import { Trophy, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
              <img 
                src="https://www.allsportsassociation.com/wp-content/uploads/2022/02/cropped-ASA-Logo-FINAL-2.png" 
                alt="All Sports Association Logo" 
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none">ALL SPORTS</span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-emerald">Association</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Supporting local youth sports programs since 1970 in Fort Walton Beach, Florida. A dedicated 501(c)(3) non-profit.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 text-white/60">
            <li><Link to="/about" className="hover:text-emerald transition-colors">About Us</Link></li>
            <li><Link to="/events" className="hover:text-emerald transition-colors">Our Events</Link></li>
            <li><Link to="/awards" className="hover:text-emerald transition-colors">Awards</Link></li>
            <li><Link to="/sponsors" className="hover:text-emerald transition-colors">Sponsors</Link></li>
            <li><Link to="/member-portal" className="hover:text-emerald transition-colors">Member Portal</Link></li>
            <li><Link to="/photos" className="hover:text-emerald transition-colors">Photos</Link></li>
            <li><Link to="/videos" className="hover:text-emerald transition-colors">Videos</Link></li>
            <li><Link to="/news" className="hover:text-emerald transition-colors">News</Link></li>
            <li><Link to="/speakers" className="hover:text-emerald transition-colors">Speakers</Link></li>
            <li><Link to="/contact" className="hover:text-emerald transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-emerald shrink-0" />
              <span>P.O. Box 102,<br />Fort Walton Beach, FL 32549</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-emerald shrink-0" />
              <a href="mailto:info@allsportsassociation.com" className="hover:text-emerald transition-colors">info@allsportsassociation.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
          <p className="text-white/60 text-sm mb-4">Join our newsletter to receive updates on events and impact.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald transition-colors"
            />
            <button className="bg-emerald hover:bg-emerald/90 text-white font-bold py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© 2026 All Sports Association. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

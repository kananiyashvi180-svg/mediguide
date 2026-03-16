import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Heart size={18} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-white">MediGuide</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              India's most trusted platform for finding nearby hospitals and expert healthcare guidance.
            </p>
            <div className="flex gap-3">
              {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Find Hospitals', to: '/hospitals' },
                { label: 'Map View', to: '/map' },
                { label: 'Saved Hospitals', to: '/saved' },
                { label: 'Dashboard', to: '/dashboard' },
                { label: 'Profile', to: '/profile' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2.5">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Cancer Care', 'General Medicine'].map(s => (
                <li key={s}>
                  <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">Ahmedabad, Gujarat, India 380001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <span className="text-slate-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <span className="text-slate-400 text-sm">support@mediguide.in</span>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Emergency Helpline</p>
              <p className="text-lg font-bold text-red-400">108</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">© 2025 MediGuide. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

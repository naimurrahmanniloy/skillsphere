"use client";
import { Share2, AtSign, ArrowUp } from "lucide-react";
import { BsDribbble, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#F0F4FA] text-[#5B5E6B] pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-[#005BC5] font-bold text-2xl tracking-tight">
              SkillSphere
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Defining the new standard for digital learning through editorial
              curation and technical excellence.
            </p>
            <div className="flex items-center gap-4 text-[#0052D4]">
              <button className="hover:scale-110 transition-transform cursor-pointer">
                <Share2 size={20} />
              </button>
              <button className="hover:scale-110 transition-transform cursor-pointer">
                <AtSign size={20} />
              </button>
            </div>
          </div>

          {/* Platform Column */}
          <div className="space-y-6">
            <h3 className="text-[#1A1B22] text-[11px] font-bold uppercase tracking-widest">
              Platform
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-[#0052D4] transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0052D4] transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0052D4] transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="text-[#1A1B22] text-[11px] font-bold uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-[#0052D4] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0052D4] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0052D4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h3 className="text-[#1A1B22] text-[11px] font-bold uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#0052D4] transition-colors group"
              >
                <LiaLinkedin
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />{" "}
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#0052D4] transition-colors group"
              >
                <BsTwitter
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />{" "}
                X (Twitter)
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#0052D4] transition-colors group"
              >
                <FaFacebook
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />{" "}
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#0052D4] transition-colors group"
              >
                <BsDribbble
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />{" "}
                Dribbble
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dashed border-[#B0B2BE] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#8E919E]">
            © 2024 SkillSphere. The Digital Curator.
          </p>

          <div className="flex items-center gap-8 text-xs font-bold">
            <button className="text-[#0052D4] hover:underline">
              English (US)
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#1A1B22] transition-colors group"
            >
              Back to top
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

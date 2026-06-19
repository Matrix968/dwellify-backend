import { useState } from "react";
import { 
  Building2, 
  Users2, 
  ShieldCheck, 
  Target, 
  MapPin, 
  Briefcase, 
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";
import teamBg from "../assets/bg-image10.jpg"; 
import officeImg from "../assets/bg-image.jpg"; 
import { Link } from "react-router-dom";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const values = [
    {
      icon: <ShieldCheck className="text-blue-500" size={24} />,
      title: "Radical Authentication",
      desc: "We stand entirely against the industry norm of 'ghost listing' baiting. Every single square foot indexed across our platform is physically cross-verified by onsite operators before it ever surfaces on an end-user's device pipeline."
    },
    {
      icon: <Users2 className="text-amber-500" size={24} />,
      title: "Agent Accountability",
      desc: "Brokers on Dwellify aren't independent agents operating without supervision; they are community-vetted neighborhood advisors subject to continuous transparent rating models governed entirely by real tenant performance data."
    },
    {
      icon: <Target className="text-blue-500" size={24} />,
      title: "Sovereign Data Controls",
      desc: "Your personal financial documentation, security records, and structural verification forms belong to you. We utilize localized encryption parameters to ensure zero third-party profile distribution without explicit operational sign-offs."
    }
  ];

  const milestones = [
    { year: "2022", title: "The Initial Spark", desc: "Dwellify was conceptualized in a cramped metropolitan co-working space following a string of real estate deposit scams suffered by our co-founders. We swore to design a completely un-hackable, verified matching process." },
    { year: "2024", title: "10,000 Verified Leases", desc: "Our platform scaled radically across major domestic coastal hubs, expanding structural integration vectors into native mobile applications and eliminating outdated rental paperwork models permanently." },
    { year: "2026", title: "Universal Expansion Phase", desc: "Presently processing thousands of high-tier community placements daily. We continue to introduce algorithmic layout analysis tooling and automated underwriting integrations to maximize placement efficiency." }
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ==========================================
          HERO & NARRATIVE INTRODUCTION
          ========================================== */}
      <div 
        className="relative w-full pt-32 pb-24 px-6 sm:px-12 md:px-24 bg-cover bg-center border-b border-white/5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url(${teamBg})`,
        }}
      >
        <div className="max-w-5xl mx-auto space-y-6 relative z-10 text-center lg:text-left">
          <h3 className="text-blue-400 border border-blue-600/30 bg-blue-600/5 w-fit px-4 rounded-full py-1.5 font-mono text-xs tracking-widest uppercase font-bold mx-auto lg:mx-0">
            Behind The Ecosystem
          </h3>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            We Are Re-Engineering <br /> The Urban Rental <span className="text-blue-600">Paradigm</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            The traditional residential search matrix is broken—polluted by fraudulent broker networks, legacy software layer bottlenecks, and phantom inventory. Dwellify was established to build an authoritative, high-trust playground where verified property providers seamlessly link with high-value tenants.
          </p>
          <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-8 text-left max-w-xl mx-auto lg:mx-0 grid grid-cols-3">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">99.8%</p>
              <p className="text-[10px] sm:text-xs text-neutral-500 font-mono uppercase tracking-wider">Verified Audits</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-500">140k+</p>
              <p className="text-[10px] sm:text-xs text-neutral-500 font-mono uppercase tracking-wider">Active Renters</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">24hr</p>
              <p className="text-[10px] sm:text-xs text-neutral-500 font-mono uppercase tracking-wider">Agent Response</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          INTERACTIVE MISSION & VISION PANEL
          ========================================== */}
      <div className="w-full bg-neutral-950 py-20 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex gap-2 border-b border-white/5 pb-2">
              <button 
                onClick={() => setActiveTab("mission")}
                className={`pb-2 text-xs font-mono uppercase tracking-widest transition cursor-pointer font-bold ${activeTab === "mission" ? "text-blue-500 border-b-2 border-blue-600" : "text-neutral-500 hover:text-white"}`}
              >
                Our Core Mission
              </button>
              <button 
                onClick={() => setActiveTab("vision")}
                className={`pb-2 text-xs font-mono uppercase tracking-widest transition cursor-pointer font-bold ml-6 ${activeTab === "vision" ? "text-blue-500 border-b-2 border-blue-600" : "text-neutral-500 hover:text-white"}`}
              >
                Our Long-Term Vision
              </button>
            </div>

            {activeTab === "mission" ? (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-bold text-white">Protecting consumers from systemic transactional friction.</h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Our daily operational priority is simple: provide a premium software layer that automates the verification loop. By removing duplicate data scraping loops, we give both parties access to an uncorrupted stream of residential data metrics.
                </p>
                <blockquote className="border-l-2 border-blue-600 pl-4 text-xs font-mono text-neutral-500 italic">
                  "Speed means absolutely nothing if the property listing data is engineered on top of outdated pricing lies."
                </blockquote>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-xl font-bold text-white">Setting a global standard for distributed lease matching.</h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  We look forward toward an interconnected real estate universe where international transition adjustments happen within minutes. By linking cross-border escrow vectors with native hardware mapping pipelines, moving to a new city becomes a friction-free experience.
                </p>
                <blockquote className="border-l-2 border-amber-500 pl-4 text-xs font-mono text-neutral-500 italic">
                  "An integrated world requires spatial transparency that standard classification systems completely fail to provide."
                </blockquote>
              </div>
            )}
          </div>

          {/* Right Graphical Marketing Image Grid */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative bg-neutral-900 group">
              <img 
                src={officeImg} 
                alt="Dwellify modern design ecosystem environment workspace" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Headquarters Hub</h4>
                  <p className="text-[10px] text-neutral-400 font-light font-mono">Operating digitally across top global metropolises</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          THE TIMELINE HISTORY TRACK
          ========================================== */}
      <div className="w-full bg-black py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-2 max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Our Evolution Journey</h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              From a regional validation tool into a highly trusted digital consumer architecture network. Take a look at our foundational track record metrics.
            </p>
          </div>

          {/* Vertical Stack Track */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {milestones.map((item, index) => (
              <div key={index} className="relative p-6 bg-neutral-950 border border-white/5 rounded-2xl space-y-4 hover:border-blue-600/20 transition group">
                <span className="text-4xl font-black font-mono block text-neutral-800 group-hover:text-blue-600/30 transition duration-300">
                  {item.year}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {index < 2 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 text-neutral-800 hidden md:block">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          CORE CORPORATE CORE VALUES
          ========================================== */}
      <div className="w-full bg-neutral-950 py-24 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-2 mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">The Principles That Guide Our Code</h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              We operate under an inflexible tier of architectural safeguards designed to prioritize individual transaction safety above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-3 hover:bg-neutral-900/40 transition">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] flex items-center justify-center border border-white/5">
                  {val.icon}
                </div>
                <h3 className="text-sm font-bold text-white pt-2">{val.title}</h3>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          MINIMAL FOUNDATION CAREER FOOTER
          ========================================== */}
      <footer className="w-full bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mx-auto text-blue-500">
            <Briefcase size={18} />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Want to join our global validation fleet?</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md mx-auto">
              We are constantly seeking brilliant interface designers, low-latency system architects, and localized community inspectors to accelerate spatial integrity globally.
            </p>
          </div>
          <Link to="/careers" className="bg-neutral-900 border border-white/10 hover:border-blue-600/50 hover:bg-neutral-800 text-white font-mono text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-xl transition cursor-pointer">
            View Engineering Roles
          </Link>
          <p className="text-[10px] text-neutral-600 font-mono pt-4">© {new Date().getFullYear()} Dwellify Operations Group. Equal Opportunity Housing Architecture Specialist.</p>
        </div>
      </footer>

    </div>
  );
}
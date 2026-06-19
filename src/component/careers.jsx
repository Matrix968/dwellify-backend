import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Heart, 
  Rocket, 
  Search, 
  ArrowUpRight,
  Code2,
  Cpu,
  Fingerprint
} from "lucide-react";
import careersBg from "../assets/bg-image10.jpg"; 

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const perks = [
    {
      icon: <Cpu className="text-blue-500" size={22} />,
      title: "State-of-the-Art Gear & Tech Allocations",
      desc: "Every team member receives an annual premium hardware stipend. Choose your own deployment setup, localized computing environments, multi-display configurations, and access custom neural automation tools designed to minimize daily structural friction."
    },
    {
      icon: <Fingerprint className="text-amber-500" size={22} />,
      title: "Asynchronous Sovereign Operations",
      desc: "We prioritize deep-work cycles and finished deliverables over superficial performance tracking or constant corporate syncs. Set your own chronological operational window and work from wherever you achieve optimal flow states."
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={22} />,
      title: "Elite Medical & Life Security Layers",
      desc: "Comprehensive worldwide health insurance portfolios, mental wellness tracking allowances, and structural retirement matchings. We build a bulletproof structural safety net around you so you can focus strictly on creative execution."
    }
  ];

  const positions = [
    {
      title: "Senior Core Infrastructure Engineer",
      dept: "Engineering",
      location: "Remote (US / Europe)",
      type: "Full-Time",
      desc: "Architect low-latency indexing micro-modules capable of scraping and validating thousands of concurrent real estate parameters every second. Optimize decentralized data ledgers to prevent unauthorized listing data manipulation."
    },
    {
      title: "Lead UI/UX Spatial Product Designer",
      dept: "Design",
      location: "Hybrid (New York, NY)",
      type: "Full-Time",
      desc: "Re-imagine how individuals interact with physical floor plans. Translate raw geographical telemetry and 3D point-of-view data frames into highly fluid, scannable mobile screen interactions."
    },
    {
      title: "Regional Verification Protocol Director",
      dept: "Operations",
      location: "Onsite (London, UK)",
      type: "Full-Time",
      desc: "Govern the physical audit teams operating within premium metropolitan complexes. Enforce zero-tolerance data-integrity standards across local agencies and eliminate unauthorized ghost listing footprints."
    },
    {
      title: "Distributed Cryptographic Systems Architect",
      dept: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      desc: "Design secure, end-to-end encrypted tenant communications protocols and digital escrow frameworks. Guard sensitive consumer financial records utilizing advanced multi-tier security layers."
    },
    {
      title: "Growth Marketing Analytics Specialist",
      dept: "Growth",
      location: "Remote (US)",
      type: "Contract / Full-Time",
      desc: "Deconstruct localized behavioral engagement funnels to accelerate acquisition performance. Deploy data-driven content architectures that target prospective high-value tenants and agents."
    }
  ];

  const filteredPositions = positions.filter((job) => {
    const matchesDept = selectedDepartment === "All" || job.dept === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ==========================================
          HERO & CULTURAL STATEMENT
          ========================================== */}
      <div 
        className="relative w-full pt-32 pb-24 px-6 sm:px-12 md:px-24 bg-cover bg-center border-b border-white/5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url(${careersBg})`,
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6 text-center relative z-10">
          <h3 className="text-blue-400 border border-blue-600/30 bg-blue-600/5 w-fit px-4 rounded-full py-1.5 font-mono text-xs tracking-widest uppercase font-bold mx-auto">
            Join The Validation Fleet
          </h3>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Build The Future Of <br /> Spatial Trust Systems
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We are looking for uncompromised systems developers, meticulous interface creators, and intense operations managers dedicated to sweeping away structural fraud within the global real estate economy. If you prefer high-autonomy environments to typical corporate box-ticking, you belong with us.
          </p>
          <div className="pt-2">
            <a href="#openings" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/10">
              Explore Active Openings <Briefcase size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ==========================================
          PERKS & CULTURAL METRICS
          ========================================== */}
      <div className="w-full bg-neutral-950 py-24 px-6 sm:px-12 md:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-2 mb-16 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">How We Support Your Velocity</h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              We look after our distributed builders with high-tier logistical support channels, structured wellness pathways, and zero pointless administrative drag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="p-6 bg-white/[0.01] border border-white/5 rounded-3xl space-y-4 hover:border-blue-600/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-base font-bold text-white pt-1">{perk.title}</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          INTERACTIVE JOB FILTER HUB
          ========================================== */}
      <div id="openings" className="w-full bg-black py-24 px-6 sm:px-12 md:px-24">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header & Internal Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Current Openings</h2>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Showing {filteredPositions.length} position vectors</p>
            </div>
            
            {/* Filter Tools Layer */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={14} />
                <input 
                  type="text"
                  placeholder="Filter keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-neutral-900 border border-white/10 text-xs px-9 py-2 rounded-xl focus:outline-none focus:border-blue-600 w-48 transition text-white"
                />
              </div>

              {["All", "Engineering", "Design", "Operations", "Growth"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-xl font-mono text-[10px] uppercase font-bold tracking-wider border cursor-pointer transition ${selectedDepartment === dept ? "bg-blue-600 border-blue-600 text-white" : "bg-neutral-900/50 border-white/5 text-neutral-400 hover:text-white"}`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Opening Listings Render Loop */}
          <div className="space-y-4">
            {filteredPositions.length > 0 ? (
              filteredPositions.map((job, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-neutral-950 border border-white/5 hover:border-blue-600/30 rounded-2xl flex flex-col md:flex-row justify-between gap-6 transition group"
                >
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-600/10 border border-blue-600/20 text-blue-400">
                        {job.dept}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-500">
                        <MapPin size={12} /> {job.location}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 ml-2">
                        <Clock size={12} /> {job.type}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition duration-200">
                      {job.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                      {job.desc}
                    </p>
                  </div>

                  <div className="flex items-start md:items-center shrink-0">
                    <button className="flex items-center gap-2 bg-neutral-900 border border-white/10 hover:border-blue-600/50 group-hover:bg-blue-600 group-hover:text-white text-neutral-300 font-mono text-[10px] uppercase font-bold tracking-wider px-4 py-2.5 rounded-xl transition cursor-pointer">
                      Apply Vector <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center border border-dashed border-white/5 rounded-2xl bg-neutral-950/40">
                <Terminal className="mx-auto text-neutral-700 mb-2" size={24} />
                <p className="text-xs font-mono text-neutral-500">No matching open profiles matched your active tracking flags.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ==========================================
          SPECULATIVE APPLICATION INTERACTION
          ========================================== */}
      <div className="w-full bg-neutral-950 py-20 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Don't see your technical vector listed?</h2>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            We are always tracking exceptional algorithmic operators, multi-lingual data compliance experts, and performance specialists. Drop your unified curriculum vitae data framework straight into our general assessment pipeline.
          </p>
          <div className="inline-flex border border-dashed border-white/10 p-4 rounded-xl bg-black/40 w-full items-center justify-between text-left">
            <div>
              <p className="text-xs font-bold text-white">General Speculative Evaluation</p>
              <p className="text-[10px] text-neutral-500 font-mono mt-0.5">processing window ~ 48 hours</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg cursor-pointer transition">
              Transmit Portfolio
            </button>
          </div>
          <p className="text-[10px] text-neutral-600 font-mono pt-4">
            Dwellify is committed to equal professional consideration paths regardless of background, origin, or physical coordinates.
          </p>
        </div>
      </div>

    </div>
  );
}
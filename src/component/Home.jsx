import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  LocationEdit,
  HomeIcon,
  Tag,
  ArrowBigDown,
  ArrowBigUp,
  User2,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import bg from "../assets/bg-image10.jpg";
import img from "../assets/bg-image.jpg";
import img2 from "../assets/bg-image2.jpg";
import img3 from "../assets/bg-image3.jpg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openArrow, setOpenArrow] = useState(false);
  const [openArrow2, setOpenArrow2] = useState(false);
  const [openArrow3, setOpenArrow3] = useState(false);

  // ✅ Fixed Tailwind Compilation by storing direct, full class variants inside the object
  const container = [
    {
      tittle: "Connect with trusted agent",
      desc: "Browse and connect with professional agent near you. chat, ask questions, and get help finding the perfect apartment.",
      img: img3,
      textColor: "text-blue-500",
      borderColor: "group-hover:border-blue-500/60",
      icon: <User2 size={22} />
    },
    {
      tittle: "Discover verified apartment",
      desc: "Explore verified listings detailed information, and accurate prices. find apartments that match your needs and budget.",
      img: img,
      textColor: "text-amber-500",
      borderColor: "group-hover:border-amber-500/60",
      icon: <HomeIcon size={22} />
    },
    {
      tittle: "Easy communication & faster decisions",
      desc: "Message agents directly in-app, schedule viewings, and get quick responses.",
      img: img2,
      textColor: "text-blue-500",
      borderColor: "group-hover:border-blue-500/60",
      icon: <MessageSquare size={22} />
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? container.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === container.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-blue-500 selection:text-white">
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <div
        className="bgImage w-full min-h-[550px] md:min-h-[650px] bg-cover bg-center flex items-center pt-24 pb-28 md:pb-40 px-6 sm:px-12 md:px-24 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
        }}
      >
        <div className="max-w-4xl relative z-10 space-y-6">
          <h3 className="text-blue-400 border border-blue-500/30 bg-blue-500/5 w-fit px-4 rounded-full py-1.5 font-mono text-xs tracking-widest uppercase font-bold">
            Find, Connect, Move in.
          </h3>
          <h1 className="text-4xl capitalize sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
            Find Your <br className="sm:inline" /> Perfect Apartment{" "}
            <br className="sm:inline" /> With{" "}
            <span className="text-blue-500">Dwellify</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-lg">
            Dwellify connects you with trusted agents and verified listings,
            making it easy to find the right apartment that fits your lifestyle
            and budget.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white font-bold tracking-wide text-sm capitalize cursor-pointer hover:bg-blue-400 active:scale-[0.98] transition duration-200 px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20">
              Find an apartment
            </button>
            <button className="flex gap-3 items-center bg-white hover:bg-neutral-100 font-medium rounded-xl text-black px-6 transition cursor-pointer">
              <PlayCircle size={20} /> How it works
            </button>
          </div>

          {/* FLOATING FILTER ROW */}
          <div className="absolute rounded-2xl font-bold bg-white top-[115%] left-0 grid grid-cols-4 gap-6 items-center p-4 text-black shadow-2xl z-20 min-w-[800px] max-w-5xl hidden lg:grid">
            <div className="flex items-center justify-between border-r border-neutral-200 pr-4">
              <div className="flex items-center gap-3">
                <LocationEdit size={28} className="text-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Location</h4>
                  <p className="text-[11px] text-neutral-500 font-normal mt-0.5">Choose Location</p>
                </div>
              </div>
              <button onClick={() => setOpenArrow(!openArrow)} className="text-neutral-400 hover:text-neutral-900 cursor-pointer transition">
                {openArrow ? <ArrowBigUp size={16} /> : <ArrowBigDown size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between border-r border-neutral-200 pr-4">
              <div className="flex items-center gap-3">
                <HomeIcon size={24} className="text-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Property Type</h4>
                  <p className="text-[11px] text-neutral-500 font-normal mt-0.5">Any</p>
                </div>
              </div>
              <button onClick={() => setOpenArrow2(!openArrow2)} className="text-neutral-400 hover:text-neutral-900 cursor-pointer transition">
                {openArrow2 ? <ArrowBigUp size={16} /> : <ArrowBigDown size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between border-r border-neutral-200 pr-4">
              <div className="flex items-center gap-3">
                <Tag size={24} className="text-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Price Range</h4>
                  <p className="text-[11px] text-neutral-500 font-normal mt-0.5">Any</p>
                </div>
              </div>
              <button onClick={() => setOpenArrow3(!openArrow3)} className="text-neutral-400 hover:text-neutral-900 cursor-pointer transition">
                {openArrow3 ? <ArrowBigUp size={16} /> : <ArrowBigDown size={16} />}
              </button>
            </div>

            <div className="pl-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 w-full text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer shadow-md shadow-blue-500/10">
                Search Listings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          FEATURES CAROUSEL SECTION
          ========================================== */}
      <div className="w-full bg-neutral-950 pt-32 pb-24 border-t border-white/5">
        <div className="text-center relative space-y-4 max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight capitalize">
            Why choose <span className="text-blue-500">Dwellify</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            Dwellify makes apartment hunting simple by connecting you with the
            right people, verified listings, and smart tools—all in one place.
          </p>
        </div>

        {/* CAROUSEL TRACK WRAPPER */}
        <div className="w-full max-w-6xl mx-auto px-6 relative">
          <div className="overflow-hidden lg:overflow-visible w-full">
            <div
              className="flex transition-transform duration-500 ease-out lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:transform-none"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {container.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white/[0.01] border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 w-full shrink-0 lg:w-auto ${
                    index === 2 ? "lg:col-span-2 xl:col-span-1 lg:max-w-[50%] xl:max-w-none mx-auto lg:w-full" : ""
                  }`}
                >
                  <div className="space-y-5">
                    {/* ✅ FIXED: Correct statically parsed text layout template classes string mapped here */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-700 shadow-lg ${item.textColor}`}>
                      {item.icon}
                    </div>

                    {/* TEXT INFO CONTAINER */}
                    <div className="space-y-3">
                      {/* ✅ FIXED: Underline dynamically switches color matching your configuration map logic on hover */}
                      <div className={`flex items-center gap-2 border-b border-white/10 pb-3 transition-colors duration-300 ${item.borderColor}`}>
                        <span className="text-[10px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-0.5 rounded-md font-bold">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-200">
                          {item.tittle}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* MEDIA IMAGE CONTAINER CARD */}
                  <div className="relative overflow-hidden aspect-[4/3] rounded-2xl border border-white/5 bg-neutral-900">
                    <img
                      src={item.img}
                      alt={item.tittle}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DISPLAY CONTROLS BELOW LAPTOP VIEWPORTS */}
          <div className="flex justify-center items-center gap-4 mt-10 lg:hidden">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition text-white cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {container.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-blue-500" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition text-white cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="md:flex border py-3 border-blue-500/10 justify-around mt-10 rounded-xl bg-blue-500/10 items-center hidden">
            <ShieldCheck className="w-30 bg-center bg-cover rounded-xl text-blue-600" size={108}/>
            <div className="max-w-sm">
              <h1 className="font-black ">A safer why to find your next home</h1>
              <p>At Dwellify, we verify agents and listings to ensure you have a secure and transparent apartment search experience from start to finish.</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
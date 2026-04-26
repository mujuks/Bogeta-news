import { useState } from "react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "News", "Politics", "Business", "Sports", "Entertainment", "Lifestyle", "Opinion"];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* 🔴 TOP BAR - Citizen Style with Green */}
      <div className="bg-gradient-to-r from-red-600 via-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="font-bold hidden sm:inline">
              {new Date().toLocaleDateString("en-KE", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-bold bg-white/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              LIVE
            </span>
            <a href="#" className="hover:text-gray-200 transition hidden sm:inline">Advertise</a>
            <a href="#" className="hover:text-gray-200 transition hidden sm:inline">Contact</a>
          </div>
        </div>
      </div>

      {/* 🔵 MAIN HEADER - Citizen Style */}
      <header className="bg-white border-b-4 border-blue-900 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="BNN254" className="h-12 md:h-16 w-auto object-contain" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, idx) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`px-4 py-2 rounded font-bold text-sm uppercase tracking-wide transition-all ${
                    idx === 0 
                      ? "bg-gradient-to-r from-red-600 to-green-600 text-white shadow-md" 
                      : "text-blue-900 hover:bg-green-50 hover:text-green-600"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-900 to-green-700 hover:from-blue-800 hover:to-green-600 text-white px-4 py-2 rounded font-bold text-sm transition shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                Search
              </button>
              <button 
                className="lg:hidden p-2 text-blue-900 hover:bg-green-50 rounded"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item, idx) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`block px-4 py-3 rounded font-bold uppercase text-sm ${
                    idx === 0 ? "bg-gradient-to-r from-red-600 to-green-600 text-white" : "text-blue-900 hover:bg-green-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 🔴 BREAKING NEWS - Citizen Style with Green */}
      <div className="bg-gradient-to-r from-red-600 via-red-600 to-green-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 flex items-center">
          <span className="bg-blue-900 font-black text-sm px-4 py-3 whitespace-nowrap z-10 border-r-2 border-green-500">
            BREAKING
          </span>
          <div className="flex-1 overflow-hidden py-2.5 pl-4">
            <div className="animate-marquee whitespace-nowrap text-sm font-bold">
              🚨 Parliament passes landmark digital tax bill • Heavy floods disrupt Nairobi-Mombasa highway • Harambee Stars secure AFCON berth • Kenyan shilling strengthens to 132/USD
            </div>
          </div>
        </div>
      </div>

      {/* 🟡 MAIN CONTENT */}
      <main className="container mx-auto px-4 py-6">

        {/* HERO SECTION - Citizen Grid Style */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {/* Main Story */}
          <div className="lg:col-span-2 relative group cursor-pointer">
            <div className="relative overflow-hidden rounded">
              <img 
                src="https://images.unsplash.com/photo-1504711432869-6d6549298492?auto=format&fit=crop&w=1200&q=80" 
                alt="Main story" 
                className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-gradient-to-r from-red-600 to-green-600 text-white text-xs font-bold px-3 py-1 rounded uppercase shadow-lg">Politics</span>
                <h1 className="text-white text-2xl md:text-4xl font-black mt-3 leading-tight">
                  Major Policy Shift: What It Means for Kenya's Economy
                </h1>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                  Full breakdown of economic impact, citizen reactions, and expert analysis as the government unveils sweeping reforms.
                </p>
                <span className="text-gray-300 text-xs mt-2 block flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  12 mins ago
                </span>
              </div>
            </div>
          </div>

          {/* Side Stories */}
          <div className="space-y-4">
            {[
              { title: "Parliament approves digital services tax amid public debate", cat: "Politics", time: "2 hrs ago", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80" },
              { title: "Nairobi Stock Exchange rallies on foreign investor confidence", cat: "Business", time: "3 hrs ago", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a72216a3?auto=format&fit=crop&w=400&q=80" },
              { title: "Health ministry launches nationwide vaccination campaign", cat: "Health", time: "5 hrs ago", img: "https://images.unsplash.com/photo-1584983385324-4904122169c8?auto=format&fit=crop&w=400&q=80" }
            ].map((story, i) => (
              <div key={i} className="flex gap-3 group cursor-pointer p-2 rounded hover:bg-green-50 transition">
                <div className="w-24 h-20 shrink-0 overflow-hidden rounded border-2 border-green-500/30">
                  <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <span className="text-green-600 text-xs font-bold uppercase">{story.cat}</span>
                  <h3 className="font-bold text-sm hover:text-blue-800 transition line-clamp-2">{story.title}</h3>
                  <span className="text-gray-400 text-xs">{story.time}</span>
                </div>
              </div>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-900 to-green-700 hover:from-blue-800 hover:to-green-600 text-white py-3 rounded font-bold text-sm transition shadow-md">
              Watch Live
            </button>
          </div>
        </div>

        {/* ⚖️ COURT & JUSTICE - Citizen Style with Green */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 border-b-4 border-gradient-to-r from-red-600 to-green-600 pb-2">
            <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-green-600 rounded"></div>
            <h2 className="text-xl font-black text-blue-900 uppercase">Court & Justice</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative group cursor-pointer">
              <div className="relative overflow-hidden rounded">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" alt="Court" className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-xs font-bold px-3 py-1 rounded">High Court</span>
                  <h3 className="text-white text-xl font-bold mt-2">
                    High Court Upholds Digital Services Tax, Orders Review
                  </h3>
                  <span className="text-gray-300 text-xs mt-1 block">45 mins ago</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { title: "ECI petitions hearing scheduled for next Tuesday", court: "Supreme Court", time: "1 hr ago" },
                { title: "Corruption trial adjourned for defense review", court: "Anti-Corruption", time: "2 hrs ago" },
                { title: "Environmental ruling halts construction project", court: "Environment", time: "3 hrs ago" },
                { title: "Labor court rules for healthcare workers", court: "Employment", time: "5 hrs ago" }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-r from-green-50 to-white p-3 rounded border-l-4 border-green-600 hover:shadow-md cursor-pointer transition">
                  <span className="text-blue-900 text-xs font-bold uppercase">{item.court}</span>
                  <h4 className="font-bold text-sm mt-1 hover:text-green-600 transition">{item.title}</h4>
                  <span className="text-gray-400 text-xs">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 📰 LATEST NEWS - Citizen Grid with Green */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 border-b-4 border-gradient-to-r from-red-600 to-green-600 pb-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-green-600 rounded"></div>
              <h2 className="text-xl font-black text-blue-900 uppercase">Latest News</h2>
            </div>
            <a href="#" className="text-green-600 font-bold text-sm hover:underline flex items-center gap-1">
              View All 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Central Bank holds rates steady at 11.5%", cat: "Economy", time: "15 mins ago", live: false },
              { title: "Tech startups secure $20M in regional funding", cat: "Technology", time: "42 mins ago", live: false },
              { title: "Traffic alert: Mombasa Road disruption", cat: "Breaking", time: "Just now", live: true },
              { title: "Nairobi Film Festival announces lineup", cat: "Culture", time: "1 hr ago", live: false },
              { title: "County governors demand delayed funds", cat: "Politics", time: "2 hrs ago", live: false },
              { title: "Weather: Heavy rains expected this weekend", cat: "Weather", time: "3 hrs ago", live: false }
            ].map((article, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded overflow-hidden hover:shadow-lg hover:border-green-400 transition cursor-pointer group">
                <div className="relative">
                  <img src={`https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=400&q=80`} alt={article.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
                  {article.live && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">LIVE</span>
                  )}
                  <span className={`absolute top-2 right-2 text-xs font-bold px-3 py-1 rounded-full text-white shadow-md ${
                    article.cat === "Breaking" ? "bg-gradient-to-r from-red-600 to-red-500" : 
                    article.cat === "Economy" ? "bg-gradient-to-r from-blue-600 to-green-600" : 
                    "bg-gradient-to-r from-blue-900 to-green-700"
                  }`}>
                    {article.cat}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base hover:text-green-600 transition line-clamp-2">{article.title}</h3>
                  <span className="text-gray-400 text-xs mt-2 block flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {article.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📺 TRENDING + NEWSLETTER */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 border-b-4 border-gradient-to-r from-red-600 to-green-600 pb-2">
              <div className="w-2 h-8 bg-gradient-to-b from-red-600 to-green-600 rounded"></div>
              <h2 className="text-xl font-black text-blue-900 uppercase">Trending Now</h2>
            </div>
            <div className="space-y-4">
              {[
                { rank: 1, title: "Parliament debates new tax proposals", reads: "12.4K", cat: "Politics" },
                { rank: 2, title: "Flash floods alert: Rift Valley counties", reads: "9.8K", cat: "Weather" },
                { rank: 3, title: "County governors unite on delayed funds", reads: "7.2K", cat: "Politics" },
                { rank: 4, title: "Schools reopen with new safety protocols", reads: "6.1K", cat: "Education" }
              ].map((item) => (
                <div key={item.rank} className="flex gap-4 items-start group cursor-pointer pb-4 border-b border-gray-200 last:border-0 hover:bg-green-50 p-2 rounded transition">
                  <span className="text-3xl font-black text-gray-300 group-hover:text-green-600 transition w-10 text-center">{item.rank}</span>
                  <div className="flex-1">
                    <span className="text-green-600 text-xs font-bold uppercase">{item.cat}</span>
                    <h3 className="font-bold text-lg group-hover:text-blue-800 transition">{item.title}</h3>
                    <span className="text-gray-400 text-xs">{item.reads} reads</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-green-900 text-white p-6 rounded shadow-xl border-t-4 border-green-500">
            <h3 className="font-black text-xl mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Stay Informed
            </h3>
            <p className="text-gray-300 text-sm mb-4">Get the day's top stories delivered to your inbox.</p>
            <form className="space-y-3">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded bg-white/10 border border-green-400/30 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-green-400" />
              <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-bold py-2 rounded text-sm transition shadow-lg">
                Subscribe Now
              </button>
            </form>
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs font-bold mb-3 text-green-400">Follow BNN254</p>
              <div className="flex gap-3">
                {["facebook", "twitter", "youtube", "instagram"].map((social) => (
                  <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition border border-green-400/30">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {social === "facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>}
                      {social === "twitter" && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>}
                      {social === "youtube" && <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/>}
                      {social === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/></>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* 🔵 FOOTER - Citizen Style with Green */}
      <footer className="bg-gradient-to-b from-blue-950 via-blue-900 to-green-900 text-white mt-12 border-t-4 border-gradient-to-r from-red-600 via-blue-600 to-green-600">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="BNN254" className="h-12 w-auto object-contain mb-4 brightness-200" />
              <p className="text-gray-400 text-sm">Kenya's trusted source for breaking news and in-depth analysis.</p>
              <div className="flex gap-2 mt-4">
                <span className="text-xs text-green-400 font-bold">ACCURATE</span>
                <span className="text-gray-600">|</span>
                <span className="text-xs text-blue-400 font-bold">CREDIBLE</span>
                <span className="text-gray-600">|</span>
                <span className="text-xs text-red-400 font-bold">IMPACTFUL</span>
              </div>
            </div>
            {[
              { title: "Sections", links: ["News", "Politics", "Business", "Sports", "Entertainment"] },
              { title: "Company", links: ["About Us", "Careers", "Contact", "Advertise"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookie Policy"] }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-green-400 uppercase text-sm mb-4 border-b-2 border-green-600 pb-2">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} BNN254 Media Network. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
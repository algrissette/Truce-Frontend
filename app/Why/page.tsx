"use client";

import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";

export default function Why() {
    const organizations = [
        {
            name: "Black in Fashion Council",
            description: "Championing equity, diversity, and inclusion in the fashion industry by providing mentorship, resources, and opportunities for Black designers, models, and creative professionals.",
            link: "https://www.blackinfashioncouncil.com/about"
        },
        {
            name: "The bail project",
            description: "Rich or poor, we are entitled to equal justice. But bail creates a two-tier system: One for people with money, and one for everyone else. The Bail Project pays bail for those in need – for free. At the same time, we are working to take money out of justice. Our mission is to create a fairer system, one that truly treats people as innocent until proven otherwise.",
            link: "https://bailproject.org/"
        },
        {
            name: "NBJC",
            description: "Black LGBTQ+/SGL Americans represent a significant subset of Black families with 3.7 percent of all Black Americans (more than one million people) identifying as LGBTQ+/SGL (Williams Institute; 2013). The challenges facing the community are compounded, in part, by the stigma and marginalization that attend social constructions of race, normative gender, and sexuality. In an effort to empower Black LGBTQ+/SGL people and their families, NBJC prioritized three policy pillars in 2023:",
            link: "https://nbjc.org/nbjc-donate/"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
            <NavBar font="sans" color="#ffffff" />

            {/* Subtle space dots background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="flex-1 md:flex relative z-10">
                {/* Left Side - Donation Info */}
                <div className="w-full md:w-1/2 px-20 py-24 flex flex-col">
                    {/* Title */}
                    <h1 className="text-7xl font-extralight text-white tracking-wider mb-20">
                        DONATE<br />
                        <span className="border-b-2 border-white/80 pb-2 inline-block">HERE</span>
                    </h1>

                    {/* Organizations */}
                    <div className="space-y-14">
                        {organizations.map((org, index) => (
                            <div
                                key={index}
                                className="border-l-2 border-white/20 pl-8 py-4 hover:border-white/70 transition-all duration-500 group"
                            >
                                <h2 className="text-2xl font-light text-white mb-4 tracking-wide transition-all duration-300">
                                    {org.name}
                                </h2>
                                <p className="text-sm text-white/65 leading-relaxed mb-6 font-light max-w-md">
                                    {org.description}
                                </p>
                                <a
                                    href={org.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-white/80 hover:text-white text-sm tracking-widest font-light border-b border-white/40 hover:border-white transition-all duration-300 pb-1"
                                >
                                    DONATE →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Photo Collage */}
                <div className="hidden md:block w-1/2 relative py-24 pr-20 flex items-center justify-center">
                    <div className="relative w-full max-w-2xl" style={{ aspectRatio: '3/4' }}>
                        {/* First Photo - Top Left */}
                        <div className="absolute top-0 left-0 w-3/5 h-3/5 z-20 overflow-hidden rounded-sm border border-white/10 shadow-2xl shadow-black/50">
                            <img
                                src="/Media/Images/WhyImg2.jpg"
                                alt="Fashion portfolio 1"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Second Photo - Bottom Right with Green Repeating Borders */}
                        <div className="hidden md:block absolute bottom-0 right-0 w-3/5 h-3/5 z-10">
                            {/* Repeating green borders - extended and varied */}
                            {/* Repeating green borders */}
                            <div className="absolute inset-0 rounded-sm border-2 border-[#00ff88]/30"></div>
                            <div className="absolute -inset-2 rounded-sm border-2 border-[#00ff88]/20"></div>
                            <div className="absolute -inset-5 rounded-sm border border-[#00ff88]/15"></div>
                            <div className="absolute -inset-20 rounded-sm border border-[#00ff88]/10"></div>
                            <div className="absolute -inset-35 rounded-sm border border-[#00ff88]/5"></div>

                            {/* Actual photo */}
                            <div className="relative w-full h-full overflow-hidden rounded-sm border border-white/10 shadow-2xl shadow-black/50 bg-[#13131a]">
                                <img
                                    src="/Media/Images/WhyImg.jpg"
                                    alt="Fashion portfolio 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
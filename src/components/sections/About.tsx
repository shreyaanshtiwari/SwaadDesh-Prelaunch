import React from 'react';
import Image from 'next/image';

export const About = () => {
    return (
        <section id="about" className="py-0 lg:py-16 relative overflow-hidden border-b-[4px] border-[#d4af37] bg-[#fffcf5]">
            {/* Soft decorative background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(128,0,32,0.04)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-0 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* Mobile Background Overlay */}
                    <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
                        <Image
                            src="/heritage_palace.png"
                            alt="Majestic Indian Heritage Architecture"
                            fill
                            className="object-cover opacity-15 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/98 via-[#fef5e7]/90 to-[#fdfbf7]/98 mix-blend-overlay"></div>
                    </div>

                    {/* Left: Royal Typography & Content */}
                    <div className="space-y-8 order-2 lg:order-1 relative z-10 flex flex-col py-8 px-4 lg:py-0 lg:px-0">
                        {/* Decorative watermark */}
                        <div className="absolute top-[-40px] left-0 text-[180px] text-[#d4af37] opacity-[0.06] font-heading select-none pointer-events-none leading-none hidden lg:block">
                            S
                        </div>

                        <div className="space-y-5 relative z-10">
                            <span className="inline-block text-[#b8860b] font-bold tracking-[4px] uppercase text-sm border-b border-[#d4af37]/40 pb-2 drop-shadow-none">
                                The Royal Legacy
                            </span>
                            <h2 className="text-4xl md:text-[48px] lg:text-[60px] font-black text-[#4a0404] font-heading leading-tight drop-shadow-sm">
                                A Heritage of <br />
                                <i className="text-[#800020] font-light">Endless Flavors</i>
                            </h2>
                            <div className="royal-separator !ml-0 hidden lg:block"></div>
                        </div>

                        <div className="space-y-6 text-[#5d4037] text-lg leading-relaxed font-body relative z-10 drop-shadow-none">
                            <p className="text-[#4a0404] font-semibold text-xl xl:text-2xl italic font-heading border-l-4 border-[#d4af37] pl-4">
                                "Preserving the culinary jewels of India's glorious past, meant to be experienced, not just tasted."
                            </p>
                            <p>
                                SwaadDesh was born from a profound nostalgia for majestic feasts. In a fast-paced modern world, the true essence of traditional delicacies is often lost. We journey across magnificent regions to uncover age-old recipes lost to time.
                            </p>
                        </div>

                        {/* Heritage Journey Timeline */}
                        <div className="py-4 relative z-10">
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#d4af37]/40 before:to-transparent">

                                {/* Step 1 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-white text-[#8f0f0d] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-[#fef5e7] transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-[#ffffff] to-[#fffcf5] p-4 rounded-xl border border-[#d4af37]/20 shadow-[0_4px_15px_rgba(212,175,55,0.05)]">
                                        <h4 className="font-bold text-[#4a0404] font-heading">Crafted by Regional Artisans</h4>
                                        <p className="text-sm text-[#5d4037] mt-1">Our delicacies are painstakingly prepared using authentic, slow-cooking techniques of the past.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-white text-[#8f0f0d] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-[#fef5e7] transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-[#ffffff] to-[#fffcf5] p-4 rounded-xl border border-[#d4af37]/20 shadow-[0_4px_15px_rgba(212,175,55,0.05)]">
                                        <h4 className="font-bold text-[#4a0404] font-heading">Perfectly Quality Checked</h4>
                                        <p className="text-sm text-[#5d4037] mt-1">Every batch is rigorously inspected by our experts to ensure uncompromised heritage quality.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d4af37] bg-white text-[#8f0f0d] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-[#fef5e7] transition-colors duration-300">
                                        <span className="text-xl">👑</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-[#ffffff] to-[#fffcf5] p-4 rounded-xl border border-[#d4af37]/20 shadow-[0_4px_15px_rgba(212,175,55,0.05)]">
                                        <h4 className="font-bold text-[#4a0404] font-heading">Delivered to your Doorstep</h4>
                                        <p className="text-sm text-[#5d4037] mt-1">Experience the pure essence of Indian royalty, securely packaged and delivered to you.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white border border-[#d4af37] shadow-sm flex items-center justify-center backdrop-blur-none">
                                <span className="text-xl">👑</span>
                            </div>
                            <div>
                                <span className="block font-heading font-bold text-[#4a0404] text-lg drop-shadow-none">Authentic</span>
                                <span className="text-sm text-[#8b6914] uppercase tracking-widest text-[10px] font-bold">100% Traditional</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white border border-[#d4af37] shadow-sm flex items-center justify-center backdrop-blur-none">
                                <span className="text-xl">🌿</span>
                            </div>
                            <div>
                                <span className="block font-heading font-bold text-[#4a0404] text-lg drop-shadow-none">Pure</span>
                                <span className="text-sm text-[#8b6914] uppercase tracking-widest text-[10px] font-bold">Native Ingredients</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Indian Arch Royal Visuals (Hidden on Mobile) */}
                    <div className="relative h-[400px] md:h-[650px] w-full flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0 hidden lg:flex">
                        {/* The Royal Arch (Mehrab style) */}
                        <div className="relative w-[85%] h-[90%] bg-gradient-to-br from-[#ffffff] to-[#fff8eb] p-4 rounded-t-full shadow-[0_20px_60px_rgba(107,10,9,0.12)] border border-[#d4af37]/40 z-10 group">

                            {/* Inner Arch Image */}
                            <div className="relative w-full h-full rounded-t-full overflow-hidden border-[6px] border-[#fef5e7] border-b-0 shadow-inner">
                                <Image
                                    src="/heritage_palace.png"
                                    alt="Majestic Indian Heritage Architecture"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#4a0404]/10 via-transparent to-[#4a0404]/80 opacity-60"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

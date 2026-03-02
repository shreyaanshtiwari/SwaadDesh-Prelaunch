import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/sections/Footer';
import { productStories } from '@/data/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pre-launch Collection | SwaadDesh',
    description: 'Explore our authentic, handcrafted regional delicacies curated for the grand launch.',
};

export default function ProductsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fffcf5]">


            {/* Page Hero - Matching Homepage Aesthetic */}
            <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-8 lg:pt-32 lg:pb-12 overflow-hidden bg-[#2b0202] border-b-[6px] border-[#d4af37]">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/herobackground.png"
                        alt="Royal Texture"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4a0404]/80 via-[#2b0202]/60 to-[#2b0202]"></div>

                    {/* Glowing Orbs for Luxury Feel */}
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(128,0,32,0.3)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none"></div>
                </div>

                {/* Content Container */}
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 px-4">
                    {/* Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-black/40 border border-[#d4af37]/40 backdrop-blur-md px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.1)]">
                            <span className="text-[#ffd700] text-sm md:text-base">✨</span>
                            <span className="text-[#fef5e7] text-sm md:text-base font-bold tracking-[3px] uppercase font-heading">
                                The Heritage Collection
                            </span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-[60px] font-black leading-[1.1] md:leading-[1.05] text-[#fef5e7] font-heading drop-shadow-xl">
                            Authentic Flavors, <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#b8860b]">
                                Reborn.
                            </span>
                        </h1>
                        <p className="text-[#e6d5c3] text-base sm:text-lg font-body font-light leading-relaxed max-w-2xl mx-auto">
                            Discover 5 carefully curated culinary jewels from across India, coming soon to your doorstep.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pt-6 pb-2 md:pt-10 md:pb-4 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10 mt-4 lg:mt-6">
                        {productStories.map((product) => (
                            <div key={product.id} className="relative group flex h-full">
                                {/* Decorative Dotted Frame (Outer) */}
                                <div className="absolute inset-[-4px] sm:inset-[-8px] border-[2px] border-[#d4af37] border-dashed rounded-[16px] sm:rounded-[20px] opacity-40 z-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-80"></div>

                                <div className="relative z-10 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2b0202] to-[#4a0404] border-[1px] border-[#d4af37]/40 shadow-[0_20px_60px_rgba(107,10,9,0.12)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)] flex flex-col hover:-translate-y-2 pb-0 sm:pb-6">
                                    {/* Regal Corner Ornaments */}
                                    <div className="absolute top-0 left-0 w-4 h-4 sm:w-8 sm:h-8 border-t border-l border-[#d4af37]/60 m-2 sm:m-3 z-20 pointer-events-none"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 sm:w-8 sm:h-8 border-t border-r border-[#d4af37]/60 m-2 sm:m-3 z-20 pointer-events-none"></div>

                                    {/* Soft Glow */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>

                                    <div className="relative h-40 sm:h-56 lg:h-72 w-full bg-[#fdfbf7] shrink-0 overflow-hidden flex items-center justify-center p-3 sm:p-4 border-b border-[#d4af37]/30">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.05)_100%)] pointer-events-none z-10"></div>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-3 sm:p-4 group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] drop-shadow-xl sm:drop-shadow-2xl z-0"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center p-4 sm:px-4 sm:pt-6 sm:pb-2">
                                        <span className="text-[9px] sm:text-[10px] font-bold tracking-[3px] text-[#ffd700] uppercase mb-1 sm:mb-2 opacity-80">
                                            {product.origin}
                                        </span>
                                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#fef5e7] mb-1 sm:mb-2 font-heading drop-shadow-md group-hover:text-[#ffd700] transition-colors duration-500">{product.name}</h3>
                                        <p className="text-[#e6d5c3]/60 font-light leading-relaxed text-[11px] sm:text-sm line-clamp-2 max-w-md mx-auto mb-2">{product.description}</p>

                                        <p className="text-[#ffd700] font-heading italic text-[11px] md:text-sm mt-3 opacity-90">"{product.tagline}"</p>

                                        <div className="hidden sm:block mt-8 px-5 py-2 border border-[#d4af37]/40 text-[#ffd700] text-[10px] sm:text-xs font-bold uppercase tracking-[2px] rounded-full group-hover:bg-[#d4af37]/10 transition-colors duration-300 w-max mx-auto group-hover:opacity-0">
                                            Hover to uncover legacy
                                        </div>
                                    </div>

                                    {/* Legacy Content Overlay - Absolute positioning within the card */}
                                    <div className="absolute inset-[0%] bg-gradient-to-t from-[#1a0101] via-[#2b0202]/98 to-[#4a0404]/98 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-30 p-3 sm:p-6 lg:p-8 flex flex-col text-[#fdfbf7] pointer-events-none group-hover:pointer-events-auto rounded-2xl overflow-hidden border-[1px] border-[#d4af37]/40">
                                        <div className="relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100 flex flex-col h-full pointer-events-auto">
                                            <div className="hidden sm:block absolute top-0 right-0 text-[#ffd700] opacity-10 transform -rotate-12 scale-150 pointer-events-none translate-x-4 -translate-y-4">
                                                ⚜️
                                            </div>
                                            <h4 className="flex justify-center items-center gap-1 sm:gap-2 text-[#ffd700] font-bold uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-xs lg:text-sm mb-2 sm:mb-4 border-b border-[#d4af37]/30 pb-2 sm:pb-3">
                                                <span className="hidden sm:inline">👑</span> The Royal Legacy
                                            </h4>
                                            <div className="overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-[#d4af37]/80 scrollbar-track-transparent flex-1 pb-2 sm:pb-4 flex flex-col items-center text-center">
                                                <h3 className="text-xs sm:text-xl font-bold text-[#fef5e7] mb-1 sm:mb-3 font-heading drop-shadow-md">{product.name}</h3>
                                                <p className="text-[9px] sm:text-sm leading-snug sm:leading-relaxed italic text-[#fef5e7] whitespace-pre-line px-1 sm:px-2">
                                                    {product.history}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-10 md:py-12 bg-gradient-to-br from-[#fdfbf7] to-[#f4ecd8] border-t border-[#d4af37]/30 text-center px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black text-[#4a0404] font-heading">
                        Craving These Delicacies?
                    </h2>
                    <p className="text-[#8b6914] text-base md:text-lg font-heading italic px-4">
                        Join our exclusive waitlist today and be the first to experience the true taste of India when we launch.
                    </p>
                    <Link href="/#early-access" className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#8f0f0d] to-[#6b0a09] text-[#ffd700] font-bold tracking-[2px] uppercase rounded-full shadow-[0_10px_30px_rgba(143,15,13,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 border border-[#d4af37]/50 text-sm sm:text-base">
                        Join the Waitlist
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

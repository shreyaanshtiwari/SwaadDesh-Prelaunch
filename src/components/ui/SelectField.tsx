'use client';

import React, { useState, useRef, useEffect } from 'react';

type SelectFieldProps = {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (e: { target: { name?: string; value: string } }) => void;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};

export const SelectField: React.FC<SelectFieldProps> = ({
    label,
    error,
    options,
    value,
    onChange,
    name,
    placeholder = "Select an option",
    disabled = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const selectedOption = options.find(opt => opt.value === value);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Manage body scroll based on hover state of the open dropdown
    useEffect(() => {
        const scrollableContent = containerRef.current?.querySelector('.max-h-60');
        
        const handleWheel = (e: WheelEvent) => {
            if (isOpen && scrollableContent) {
                // Check if scroll is needed for the dropdown itself
                const isScrollable = scrollableContent.scrollHeight > scrollableContent.clientHeight;
                
                if (isScrollable) {
                    // Manually scroll the dropdown content
                    scrollableContent.scrollTop += e.deltaY;
                }
                
                // Always prevent the main page from scrolling while hovering the dropdown
                e.preventDefault();
            }
        };

        const menuElement = containerRef.current?.querySelector('.dropdown-menu');
        if (menuElement && isOpen) {
            // We use the window listener when hovering the menu to ensure we catch all wheel events
            menuElement.addEventListener('mouseenter', () => {
                window.addEventListener('wheel', handleWheel, { passive: false });
            });
            menuElement.addEventListener('mouseleave', () => {
                window.removeEventListener('wheel', handleWheel);
            });
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    return (
        <div 
            className={`w-full space-y-2 group ${className} ${isOpen ? 'relative z-[1000]' : 'relative z-0'}`} 
            ref={containerRef}
        >
            {label && (
                <label className="text-[13px] font-bold uppercase tracking-[1px] text-[#8b6914] ml-1 group-focus-within:text-[#d4af37] transition-colors">
                    {label}
                </label>
            )}
            
            <div className="relative">
                {/* Trigger Button */}
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={`flex h-[52px] w-full items-center justify-between rounded-xl border-2 px-4 py-2 text-sm transition-all duration-300 focus:outline-none shadow-sm
                        ${isOpen ? 'border-[#d4af37] ring-4 ring-[#d4af37]/10' : 'border-[#d4af37]/60'}
                        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-[#d4af37] hover:shadow-md'}
                        ${error ? 'border-red-500 ring-red-500/10' : ''}
                        bg-white
                    `}
                    suppressHydrationWarning
                >
                    <span className={`font-medium ${selectedOption ? 'text-[#4a0404]' : 'text-[#5d4037]/60'}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    
                    <svg 
                        className={`h-4 w-4 text-[#d4af37] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="dropdown-menu absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-[#d4af37]/30 bg-white shadow-[0_10px_40px_rgba(212,175,55,0.2)] backdrop-blur-sm animate-in fade-in zoom-in duration-200 origin-top" style={{ overscrollBehavior: 'contain' }}>
                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-[#d4af37]/10
                                        ${value === option.value ? 'bg-[#d4af37]/20 text-[#4a0404] font-bold' : 'text-[#5d4037]'}
                                    `}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-[#d4af37]/5 pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            </div>

            {error && <p className="text-xs font-semibold text-red-600 ml-1">{error}</p>}

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d4af3740;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d4af3760;
                }
            `}</style>
        </div>
    );
};

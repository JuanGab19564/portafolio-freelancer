import React, { useState, useEffect } from 'react';

const PRESETS = [
    '#2f81f7', // Blue (Default)
    '#e85d04', // Orange
    '#d00000', // Red
    '#8338ec', // Purple
    '#06d6a0', // Teal
];

export default function ColorPicker() {
    const [color, setColor] = useState('#2f81f7');

    useEffect(() => {
        document.documentElement.style.setProperty('--accent', color);
    }, [color]);

    return (
        <div className="p-6 bg-surface/80 backdrop-blur rounded-2xl border border-secondary/20 shadow-2xl max-w-md w-full mx-auto transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--accent)]"></span>
                    Theme Control
                </h3>
                <span className="text-xs font-mono text-secondary px-2 py-1 rounded bg-background border border-secondary/10">
                    SYSTEM_V1
                </span>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
                        Accent Color Profile
                    </label>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {PRESETS.map((preset) => (
                            <button
                                key={preset}
                                onClick={() => setColor(preset)}
                                className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm ${color === preset ? 'border-primary ring-2 ring-primary/20 scale-110 shadow-[0_0_15px_var(--accent)]' : 'border-transparent hover:border-secondary/40'
                                    }`}
                                style={{ backgroundColor: preset }}
                                aria-label={`Select color ${preset}`}
                            />
                        ))}
                        <div className="relative group">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-12 h-12 rounded-xl opacity-0 absolute inset-0 cursor-pointer z-10"
                            />
                            <div className="w-12 h-12 rounded-xl border-2 border-dashed border-secondary/40 flex items-center justify-center bg-transparent group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                                <span className="text-xl text-secondary group-hover:text-accent">+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-secondary/10 flex justify-between items-center text-sm bg-background/50 p-3 rounded-lg">
                    <span className="text-secondary font-medium">HEX Value</span>
                    <span className="font-mono text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20">
                        {color}
                    </span>
                </div>
            </div>
        </div>
    );
}

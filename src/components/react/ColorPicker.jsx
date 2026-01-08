import React, { useState, useEffect } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState('#2f81f7');

    useEffect(() => {
        document.documentElement.style.setProperty('--accent', color);
    }, [color]);

    return (
        <div className="p-4 bg-surface rounded-lg border border-secondary/20 shadow-lg max-w-xs w-full">
            <label className="block text-sm font-medium mb-2 text-secondary">
                Color de Acento
            </label>
            <div className="flex items-center gap-4">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-10 w-full rounded cursor-pointer bg-transparent"
                />
                <span className="font-mono text-sm">{color}</span>
            </div>
        </div>
    );
}

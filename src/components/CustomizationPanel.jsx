// src/components/CustomizationPanel.jsx
import React, {useEffect} from 'react';

function CustomizationPanel({customizationOptions, setCustomizationOptions, templateStyle}) {
    useEffect(() => {
        // Update customization options when the template changes
        setCustomizationOptions((prevOptions) => ({
            ...prevOptions,
            ...templateStyle,
        }));
    }, [templateStyle]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCustomizationOptions({
            ...customizationOptions,
            [name]: value,
        });
    };

    return (
        <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Customize Your Signature</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Font Style */}
                <div>
                    <label className="block font-medium">Font Style</label>
                    <select
                        name="fontStyle"
                        value={customizationOptions.fontStyle}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                    </select>
                </div>
                {/* Font Size */}
                <div>
                    <label className="block font-medium">Font Size</label>
                    <input
                        type="number"
                        name="fontSize"
                        value={customizationOptions.fontSize}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        min="10"
                        max="18"
                    />
                </div>
                {/* Font Color */}
                <div>
                    <label className="block font-medium">Font Color</label>
                    <input
                        type="color"
                        name="fontColor"
                        value={customizationOptions.fontColor}
                        onChange={handleChange}
                        className="w-full h-10 border p-1 rounded"
                    />
                </div>
                {/* Layout */}
                <div>
                    <label className="block font-medium">Layout</label>
                    <select
                        name="layout"
                        value={customizationOptions.layout}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>
                {/* Primary Color */}
                <div>
                    <label className="block font-medium">Primary Color</label>
                    <input
                        type="color"
                        name="primaryColor"
                        value={customizationOptions.primaryColor}
                        onChange={handleChange}
                        className="w-full h-10 border p-1 rounded"
                    />
                </div>
                {/* Background Color */}
                <div>
                    <label className="block font-medium">Background Color</label>
                    <input
                        type="color"
                        name="backgroundColor"
                        value={customizationOptions.backgroundColor}
                        onChange={handleChange}
                        className="w-full h-10 border p-1 rounded"
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomizationPanel;

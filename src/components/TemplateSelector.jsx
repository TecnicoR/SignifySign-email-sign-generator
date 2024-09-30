// src/components/TemplateSelector.jsx
import React from 'react';
import templates from '../templates';

function TemplateSelector({selectedTemplate, setSelectedTemplate}) {
    return (
        <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Select a Template</h2>
            <div className="flex space-x-4 overflow-x-auto">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`p-2 border rounded cursor-pointer ${
                            selectedTemplate === template.id ? 'border-blue-500' : 'border-transparent'
                        }`}
                        onClick={() => setSelectedTemplate(template.id)}
                    >
                        <img
                            src={`/templates/template1.png`}
                            alt={template.name}
                            className="w-32 h-32 object-cover"
                        />
                        <p className="text-center mt-2">{template.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TemplateSelector;

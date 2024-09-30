// src/components/ExportOptions.jsx
import React from 'react';
import * as htmlToImage from 'html-to-image';

import {saveAs} from 'file-saver';
import copy from 'clipboard-copy';

function ExportOptions({userData, customizationOptions}) {
    const handleCopyHTML = () => {
        const signature = document.querySelector('#signature-preview').innerHTML;
        copy(signature)
            .then(() => alert('HTML code copied to clipboard!'))
            .catch((err) => alert('Failed to copy HTML code.'));
    };

    const handleDownloadImage = () => {
        const node = document.getElementById('signature-preview');
        htmlToImage
            .toPng(node)
            .then((dataUrl) => {
                saveAs(dataUrl, 'email-signature.png');
            })
            .catch((error) => {
                console.error('Could not generate image', error);
            });
    };

    return (
        <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Export Options</h2>
            <button
                onClick={handleCopyHTML}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
                Copy HTML Code
            </button>
            <button
                onClick={handleDownloadImage}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Download as Image
            </button>
            <div className="mt-4">
                <h3 className="font-semibold mb-2">Instructions:</h3>
                <p>1. Click "Copy HTML Code" to copy your signature.</p>
                <p>2. Open your email client settings and paste the signature.</p>
            </div>
        </div>
    );
}

export default ExportOptions;

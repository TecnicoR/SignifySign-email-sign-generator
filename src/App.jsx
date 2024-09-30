// src/App.jsx
import React, {useState} from 'react';
import InputForm from './components/InputForm';
import TemplateSelector from './components/TemplateSelector';
import CustomizationPanel from './components/CustomizationPanel';
import SignaturePreview from './components/SignaturePreview';
import ExportOptions from './components/ExportOptions';
import templates from './templates';

function App() {
    const [userData, setUserData] = useState({
        name: '',
        jobTitle: '',
        companyName: '',
        emailAddress: '',
        phoneNumber: '',
        websiteURL: '',
        socialLinks: {
            linkedin: '',
            twitter: '',
            facebook: '',
            instagram: '',
        },
        profileImage: null,
    });

    const [selectedTemplateId, setSelectedTemplateId] = useState(null);

    const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);

    const [customizationOptions, setCustomizationOptions] = useState({
        fontStyle: 'Arial',
        fontSize: 14,
        fontColor: '#000000',
        layout: 'horizontal',
        primaryColor: '#000000',
        backgroundColor: '#FFFFFF',
    });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">SignifySign - Email Signature Generator</h1>
            <InputForm userData={userData} setUserData={setUserData}/>
            <TemplateSelector selectedTemplate={selectedTemplateId} setSelectedTemplate={setSelectedTemplateId}/>
            {selectedTemplate && (
                <>
                    <CustomizationPanel
                        customizationOptions={customizationOptions}
                        setCustomizationOptions={setCustomizationOptions}
                        templateStyle={selectedTemplate.style}
                    />
                    <SignaturePreview
                        userData={userData}
                        customizationOptions={customizationOptions}
                        selectedTemplate={selectedTemplate}
                    />
                    <ExportOptions userData={userData} customizationOptions={customizationOptions}/>
                </>
            )}
        </div>
    );
}

export default App;

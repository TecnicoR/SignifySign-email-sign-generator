// src/components/SignaturePreview.jsx
import React from 'react';
import {motion} from 'framer-motion';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

function SignaturePreview({userData, customizationOptions, selectedTemplate}) {
    const {
        name,
        jobTitle,
        companyName,
        emailAddress,
        phoneNumber,
        websiteURL,
        socialLinks,
        profileImage,
    } = userData;

    const {
        fontStyle,
        fontSize,
        fontColor,
        primaryColor,
        backgroundColor,
    } = customizationOptions;

    const socialMediaIcons = [
        {icon: FaLinkedin, url: socialLinks.linkedin},
        {icon: FaTwitter, url: socialLinks.twitter},
        {icon: FaFacebook, url: socialLinks.facebook},
        {icon: FaInstagram, url: socialLinks.instagram},
    ];

    // Build the signature components based on the selected template
    const components = selectedTemplate.components;

    const renderComponent = (componentName) => {
        switch (componentName) {
            case 'profileImage':
                return (
                    profileImage && (
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-16 h-16 rounded-full mr-4 mb-4"
                        />
                    )
                );
            case 'name':
                return (
                    <p
                        style={{fontFamily: fontStyle, fontSize: `${fontSize}px`, color: fontColor}}
                        className="font-bold"
                    >
                        {name}
                    </p>
                );
            case 'jobTitle':
                return (
                    <p
                        style={{fontFamily: fontStyle, fontSize: `${fontSize - 2}px`, color: fontColor}}
                    >
                        {jobTitle}
                    </p>
                );
            case 'companyName':
                return (
                    <p
                        style={{fontFamily: fontStyle, fontSize: `${fontSize - 2}px`, color: fontColor}}
                    >
                        {companyName}
                    </p>
                );
            case 'emailAddress':
                return (
                    <p
                        style={{fontFamily: fontStyle, fontSize: `${fontSize - 2}px`, color: fontColor}}
                    >
                        Email: {emailAddress}
                    </p>
                );
            case 'phoneNumber':
                return (
                    phoneNumber && (
                        <p
                            style={{fontFamily: fontStyle, fontSize: `${fontSize - 2}px`, color: fontColor}}
                        >
                            Phone: {phoneNumber}
                        </p>
                    )
                );
            case 'websiteURL':
                return (
                    websiteURL && (
                        <p
                            style={{fontFamily: fontStyle, fontSize: `${fontSize - 2}px`, color: fontColor}}
                        >
                            Website: {websiteURL}
                        </p>
                    )
                );
            case 'socialLinks':
                return (
                    <div className="flex space-x-2 mt-2">
                        {socialMediaIcons.map(
                            ({icon: Icon, url}, index) =>
                                url && (
                                    <a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{color: primaryColor}}
                                    >
                                        <Icon size={20}/>
                                    </a>
                                )
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Signature Preview</h2>
            <div
                id="signature-preview"
                className="border p-4 rounded"
                style={{backgroundColor: backgroundColor || 'transparent'}}
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className={`flex ${
                        selectedTemplate.layout === 'vertical' ? 'flex-col' : 'flex-row'
                    } items-center`}
                >
                    {components.map((componentName, index) => (
                        <div key={index} className="mb-2">
                            {renderComponent(componentName)}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default SignaturePreview;

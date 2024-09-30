// src/components/InputForm.jsx
import React from 'react';

function InputForm({userData, setUserData}) {
    const handleChange = (e) => {
        const {name, value} = e.target;

        if (name in userData.socialLinks) {
            setUserData({
                ...userData,
                socialLinks: {
                    ...userData.socialLinks,
                    [name]: value,
                },
            });
        } else {
            setUserData({
                ...userData,
                [name]: value,
            });
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData({
                    ...userData,
                    profileImage: reader.result,
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert('File size must be less than 5 MB');
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="block font-medium">Name*</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                {/* Job Title */}
                <div>
                    <label className="block font-medium">Job Title*</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={userData.jobTitle}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                {/* Company Name */}
                <div>
                    <label className="block font-medium">Company Name*</label>
                    <input
                        type="text"
                        name="companyName"
                        value={userData.companyName}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                {/* Email Address */}
                <div>
                    <label className="block font-medium">Email Address*</label>
                    <input
                        type="email"
                        name="emailAddress"
                        value={userData.emailAddress}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                {/* Phone Number */}
                <div>
                    <label className="block font-medium">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                {/* Website URL */}
                <div>
                    <label className="block font-medium">Website URL</label>
                    <input
                        type="url"
                        name="websiteURL"
                        value={userData.websiteURL}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                {/* Social Media Links */}
                {/* LinkedIn */}
                <div>
                    <label className="block font-medium">LinkedIn</label>
                    <input
                        type="url"
                        name="linkedin"
                        value={userData.socialLinks.linkedin}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                {/* Twitter */}
                <div>
                    <label className="block font-medium">Twitter</label>
                    <input
                        type="url"
                        name="twitter"
                        value={userData.socialLinks.twitter}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                {/* Facebook */}
                <div>
                    <label className="block font-medium">Facebook</label>
                    <input
                        type="url"
                        name="facebook"
                        value={userData.socialLinks.facebook}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                {/* Instagram */}
                <div>
                    <label className="block font-medium">Instagram</label>
                    <input
                        type="url"
                        name="instagram"
                        value={userData.socialLinks.instagram}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                {/* Profile Image */}
                <div>
                    <label className="block font-medium">Profile Photo or Company Logo</label>
                    <input
                        type="file"
                        accept=".png,.jpeg,.jpg,.svg"
                        onChange={handleImageUpload}
                        className="w-full border p-2 rounded"
                    />
                </div>
            </div>
        </div>
    );
}

export default InputForm;

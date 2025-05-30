"use client";
import { useState } from 'react';

export default function SignatureBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Create the HTML signature
    let signatureHTML = '';
    
    if (selectedTemplate === 'modern') {
      signatureHTML = `
        <div style="font-family: Arial, sans-serif;">
          <div style="font-weight: bold; font-size: 18px; color: #111827;">${formData.name}</div>
          <div style="color: #2563eb; font-weight: 500;">${formData.title}</div>
          <div style="color: #374151;">${formData.company}</div>
          <div style="padding-top: 12px; font-size: 14px;">
            ${formData.email ? `<div>📧 <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a></div>` : ''}
            ${formData.phone ? `<div>📱 <a href="tel:${formData.phone}" style="color: #374151; text-decoration: none;">${formData.phone}</a></div>` : ''}
            ${formData.website ? `<div>🌐 <a href="${formData.website}" style="color: #2563eb; text-decoration: none;">${formData.website}</a></div>` : ''}
            ${formData.linkedin ? `<div>💼 <a href="${formData.linkedin}" style="color: #2563eb; text-decoration: none;">LinkedIn</a></div>` : ''}
          </div>
        </div>
      `;
    } else if (selectedTemplate === 'classic') {
      signatureHTML = `
        <div style="font-family: Arial, sans-serif; border-left: 4px solid #2563eb; padding-left: 16px;">
          <div style="font-weight: bold; font-size: 18px;">${formData.name}</div>
          <div style="color: #4b5563; font-style: italic;">${formData.title}</div>
          <div style="color: #4b5563;">${formData.company}</div>
          <div style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            ${formData.email ? `<div>Email: <a href="mailto:${formData.email}" style="color: #2563eb;">${formData.email}</a></div>` : ''}
            ${formData.phone ? `<div>Phone: <a href="tel:${formData.phone}" style="color: #4b5563;">${formData.phone}</a></div>` : ''}
            ${formData.website ? `<div>Web: <a href="${formData.website}" style="color: #2563eb;">${formData.website}</a></div>` : ''}
          </div>
        </div>
      `;
    } else {
      signatureHTML = `
        <table cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif;">
          <tr>
            <td style="padding-right: 15px; border-right: 2px solid #e5e7eb;">
              <div style="font-weight: bold; font-size: 16px; color: #1f2937;">${formData.name}</div>
              <div style="color: #2563eb; font-size: 14px;">${formData.title}</div>
              <div style="color: #6b7280; font-size: 14px;">${formData.company}</div>
            </td>
            <td style="padding-left: 15px; font-size: 13px;">
              ${formData.email ? `<div style="margin-bottom: 4px;"><a href="mailto:${formData.email}" style="color: #4b5563; text-decoration: none;">${formData.email}</a></div>` : ''}
              ${formData.phone ? `<div style="margin-bottom: 4px;"><a href="tel:${formData.phone}" style="color: #4b5563; text-decoration: none;">${formData.phone}</a></div>` : ''}
              ${formData.website ? `<div><a href="${formData.website}" style="color: #2563eb; text-decoration: none;">${formData.website}</a></div>` : ''}
            </td>
          </tr>
        </table>
      `;
    }
    
    // Copy to clipboard
    navigator.clipboard.writeText(signatureHTML).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Create Your Email Signature</h1>
        <p className="text-gray-600 mt-2">Build a professional signature in seconds</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900">✨ Pro Tip</h3>
            <p className="text-blue-800 text-sm mt-1">
              Add your LinkedIn URL to increase profile views by 37%
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Your Details</h2>
          
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          
          <input
            type="text"
            placeholder="Job Title *"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          
          <input
            type="text"
            placeholder="Company *"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            required
          />
          
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          
          <input
            type="url"
            placeholder="Website"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.website}
            onChange={(e) => setFormData({...formData, website: e.target.value})}
          />
          
          <input
            type="url"
            placeholder="LinkedIn URL"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.linkedin}
            onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
          />

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Choose Template:</h3>
            <div className="space-y-2">
              {['modern', 'classic', 'minimal'].map((template) => (
                <label key={template} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="template"
                    value={template}
                    checked={selectedTemplate === template}
                    onChange={(e) => setSelectedTemplate(e.target.value)}
                    className="mr-3"
                  />
                  <span className="capitalize">{template}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
          <div className="bg-white p-6 rounded border min-h-[200px]">
            {selectedTemplate === 'modern' ? (
              <div className="space-y-1">
                <div className="font-bold text-xl text-gray-900">{formData.name || 'Your Name'}</div>
                <div className="text-blue-600 font-medium">{formData.title || 'Your Title'}</div>
                <div className="text-gray-700">{formData.company || 'Your Company'}</div>
                <div className="pt-3 space-y-1 text-sm">
                  {formData.email && <div>📧 <a href={`mailto:${formData.email}`} className="text-blue-600 hover:underline">{formData.email}</a></div>}
                  {formData.phone && <div>📱 <a href={`tel:${formData.phone}`} className="text-gray-700">{formData.phone}</a></div>}
                  {formData.website && <div>🌐 <a href={formData.website} className="text-blue-600 hover:underline">{formData.website}</a></div>}
                  {formData.linkedin && <div>💼 <a href={formData.linkedin} className="text-blue-600 hover:underline">LinkedIn</a></div>}
                </div>
              </div>
            ) : selectedTemplate === 'classic' ? (
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="font-bold text-lg">{formData.name || 'Your Name'}</div>
                <div className="text-gray-600 italic">{formData.title || 'Your Title'}</div>
                <div className="text-gray-600">{formData.company || 'Your Company'}</div>
                <div className="mt-2 text-sm text-gray-500">
                  {formData.email && <div>Email: <a href={`mailto:${formData.email}`} className="text-blue-600">{formData.email}</a></div>}
                  {formData.phone && <div>Phone: <a href={`tel:${formData.phone}`} className="text-gray-600">{formData.phone}</a></div>}
                  {formData.website && <div>Web: <a href={formData.website} className="text-blue-600">{formData.website}</a></div>}
                </div>
              </div>
            ) : (
                <table cellPadding="0" cellSpacing="0" style={{fontFamily: 'Arial, sans-serif'}}>
                <tbody>
                  <tr>
                    <td style={{paddingRight: '15px', borderRight: '2px solid #e5e7eb'}}>
                      {/* ... rest of the content ... */}
                    </td>
                    <td style={{paddingLeft: '15px', fontSize: '13px'}}>
                      {/* ... rest of the content ... */}
                    </td>
                  </tr>
                </tbody>
              </table>

            )}
          </div>
          
          <button 
            onClick={copyToClipboard}
            disabled={!formData.name || !formData.title || !formData.company}
            className={`w-full mt-6 py-3 rounded-lg transition font-semibold ${
              formData.name && formData.title && formData.company
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {copied ? '✓ Copied to Clipboard!' : 'Copy Signature to Clipboard'}
          </button>
          
          {copied && (
            <p className="text-green-600 text-sm text-center mt-2">
              Now paste it into your email client's signature settings!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
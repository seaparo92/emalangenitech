import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIframeKey(prev => prev + 1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3 className="text-xl font-bold text-[#00343C]">Contact Us</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 overflow-auto">
          <iframe
            key={iframeKey}
            src="https://forms.zohopublic.com/specconholdings/form/SpecConContactUs/formperma/W2FcrfBkYxsiSHgo6Ad6BZtdlQrfBJpHeA9mHtTq6nk"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 'none', display: 'block', minHeight: '600px' }}
            title="Contact Form"
          />
        </div>
      </div>
    </div>
  );
};

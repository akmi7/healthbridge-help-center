import React from 'react';
import Script from 'next/script';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      
      {/* 1. Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
        <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">
          HealthBridge Care System
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
          Patient Help Centre
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Welcome to the HealthBridge external support portal. Click below to launch our secure Agentforce assistant and review your lab results.
        </p>

        {/* 2. "Chat with Us" Button */}
        <button 
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).embedded_svc) {
              (window as any).embedded_svc.bootstrapChat();
            } else {
              alert("Agentforce chat client is initializing. Please try again in a moment.");
            }
          }}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          Chat with Us
        </button>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        <p>&copy; 2026 HealthBridge Care. Hosted completely outside Salesforce infrastructure.</p>
      </footer>

      {/* 3. Embedded Service Script Placeholder */}
      <Script 
        src="https://YOUR_SALESFORCE_ORG_URL/embeddedservice/5.0/esw.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

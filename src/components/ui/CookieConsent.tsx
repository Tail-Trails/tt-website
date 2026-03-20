import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const STORAGE_KEY = "tt_cookie_consent";

function loadGtag(id: string) {
  if (!id) return;
  if (document.querySelector(`script[data-gtag="${id}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.setAttribute("data-gtag", id);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // @ts-ignore - forward arguments to the dataLayer
    window.dataLayer!.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

const CookieConsent: React.FC = () => {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const v = localStorage.getItem(STORAGE_KEY);
    setConsent(v);
    if (v === "granted") {
      const id = (import.meta.env as any).VITE_GA_ID as string | undefined;
      if (id) loadGtag(id);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted");
    setConsent("granted");
    const id = (import.meta.env as any).VITE_GA_ID as string | undefined;
    if (id) loadGtag(id);
  }

  function deny() {
    localStorage.setItem(STORAGE_KEY, "denied");
    setConsent("denied");
  }

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      <div className="pointer-events-auto bento-card rounded-lg p-2 md:p-3 w-full max-w-[18rem] md:max-w-xs flex items-center gap-2 md:gap-3 shadow-sm text-xs">
        <div className="text-xs text-text-secondary text-center md:text-left flex-1 leading-tight">
          We use cookies for analytics.
        </div>

        <div className="flex items-center gap-2 md:gap-2">
          <button
            onClick={accept}
            className="bg-brand hover:bg-brand-light text-bg-primary px-2 py-1 rounded-full text-xs font-medium transition-all"
          >
            Yes
          </button>
          <button
            onClick={deny}
            className="border border-border-subtle text-text-muted bg-transparent px-2 py-1 rounded-full text-xs transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

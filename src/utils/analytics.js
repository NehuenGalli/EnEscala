export const ANALYTICS_CONFIG = {
  gtmId: import.meta.env.VITE_GTM_ID || '',
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || '',
};

export const initDataLayer = () => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
};

export const pushDataLayerEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;
  initDataLayer();
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

const appendScript = ({ id, src, inlineCode }) => {
  if (typeof document === 'undefined' || document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.async = true;

  if (src) {
    script.src = src;
  }

  if (inlineCode) {
    script.text = inlineCode;
  }

  document.head.appendChild(script);
};

const loadGoogleTagManager = (gtmId) => {
  if (!gtmId) return;
  initDataLayer();
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
  appendScript({
    id: 'google-tag-manager',
    src: `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`,
  });
};

const loadGoogleAnalytics = (measurementId) => {
  if (!measurementId || ANALYTICS_CONFIG.gtmId) return;

  appendScript({
    id: 'google-analytics',
    src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`,
  });

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });
};

const loadMetaPixel = (pixelId) => {
  if (!pixelId || window.fbq) return;

  !(function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)})(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

export const loadMarketingScripts = () => {
  if (typeof window === 'undefined') return;

  loadGoogleTagManager(ANALYTICS_CONFIG.gtmId);
  loadGoogleAnalytics(ANALYTICS_CONFIG.gaMeasurementId);
  loadMetaPixel(ANALYTICS_CONFIG.metaPixelId);
  pushDataLayerEvent('marketing_scripts_loaded');
};

export const trackPageView = (path, title) => {
  if (typeof window === 'undefined') return;

  pushDataLayerEvent('page_view', {
    page_path: path,
    page_title: title,
  });

  if (window.gtag && ANALYTICS_CONFIG.gaMeasurementId) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }

  if (window.fbq && ANALYTICS_CONFIG.metaPixelId) {
    window.fbq('track', 'PageView');
  }
};

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  pushDataLayerEvent(eventName, params);

  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackContactIntent = (method, source) => {
  trackEvent('contact_intent', {
    contact_method: method,
    contact_source: source,
  });

  if (window.fbq && ANALYTICS_CONFIG.metaPixelId) {
    window.fbq('track', 'Contact', {
      contact_method: method,
      contact_source: source,
    });
  }
};

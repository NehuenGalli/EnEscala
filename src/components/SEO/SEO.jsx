import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG, getCanonicalUrl } from '../../config/siteConfig';

/**
 * Helper para crear o actualizar un elemento <meta>
 */
const setMetaTag = (attrName, attrValue, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

/**
 * Helper para crear o actualizar un elemento <link>
 */
const setLinkTag = (rel, href) => {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

/**
 * Componente dinámico de SEO para SPA
 */
export default function SEO({
  title,
  description,
  image,
  type = 'website',
  schema,
}) {
  const location = useLocation();

  const finalTitle = title
    ? (title.includes(SITE_CONFIG.siteName) ? title : `${title} | ${SITE_CONFIG.siteName}`)
    : SITE_CONFIG.defaultTitle;

  const finalDescription = description || SITE_CONFIG.defaultDescription;
  const canonicalUrl = getCanonicalUrl(location.pathname);
  
  // Si la imagen es relativa o importada de Vite, resolvemos la URL absoluta
  const getAbsoluteImageUrl = (img) => {
    if (!img) return `${(typeof window !== 'undefined' ? window.location.origin : SITE_CONFIG.siteUrl)}/FondoServicios.jpeg`;
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    const base = (typeof window !== 'undefined' ? window.location.origin : SITE_CONFIG.siteUrl);
    const cleanImg = img.startsWith('/') ? img : `/${img}`;
    return `${base}${cleanImg}`;
  };

  const finalImage = getAbsoluteImageUrl(image);

  useEffect(() => {
    // 1. Title
    document.title = finalTitle;

    // 2. Meta tags estándar
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'robots', 'index, follow');
    setLinkTag('canonical', canonicalUrl);

    // 3. Open Graph (Facebook, WhatsApp, LinkedIn)
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('property', 'og:site_name', SITE_CONFIG.siteName);
    setMetaTag('property', 'og:locale', SITE_CONFIG.locale);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalImage);

    // 5. Schema.org JSON-LD
    let scriptTag = document.querySelector('script#structured-data-schema');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'structured-data-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Limpieza opcional al desmontar
    };
  }, [finalTitle, finalDescription, canonicalUrl, finalImage, type, schema]);

  return null;
}

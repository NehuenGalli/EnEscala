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
  imageWidth,
  imageHeight,
  imageType,
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
    if (!img) return `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultSocialImage}`;
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    const cleanImg = img.startsWith('/') ? img : `/${img}`;
    return `${SITE_CONFIG.siteUrl}${cleanImg}`;
  };

  const finalImage = getAbsoluteImageUrl(image);
  const usesDefaultImage = !image;
  const finalImageWidth = imageWidth || (usesDefaultImage ? SITE_CONFIG.defaultSocialImageWidth : null);
  const finalImageHeight = imageHeight || (usesDefaultImage ? SITE_CONFIG.defaultSocialImageHeight : null);
  const finalImageType = imageType || (usesDefaultImage ? SITE_CONFIG.defaultSocialImageType : null);
  const finalSchema = schema
    ? {
        ...schema,
        ...((schema.image || image) ? { image: getAbsoluteImageUrl(schema.image || image) } : {}),
      }
    : null;
  const schemaJson = finalSchema ? JSON.stringify(finalSchema) : null;

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
    setMetaTag('property', 'og:image:secure_url', finalImage);
    if (finalImageWidth) setMetaTag('property', 'og:image:width', String(finalImageWidth));
    if (finalImageHeight) setMetaTag('property', 'og:image:height', String(finalImageHeight));
    if (finalImageType) setMetaTag('property', 'og:image:type', finalImageType);
    setMetaTag('property', 'og:image:alt', `${SITE_CONFIG.siteName} - arquitectura y dirección de obra`);
    setMetaTag('property', 'og:site_name', SITE_CONFIG.siteName);
    setMetaTag('property', 'og:locale', SITE_CONFIG.locale);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalImage);
    setMetaTag('name', 'twitter:image:alt', `${SITE_CONFIG.siteName} - arquitectura y dirección de obra`);

    // 5. Schema.org JSON-LD
    let scriptTag = document.querySelector('script#structured-data-schema');
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'structured-data-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = schemaJson;
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Limpieza opcional al desmontar
    };
  }, [finalTitle, finalDescription, canonicalUrl, finalImage, finalImageWidth, finalImageHeight, finalImageType, type, schemaJson]);

  return null;
}

/**
 * Configuración global de SEO y metadata para En Escala Arquitectura.
 * Cuando tengas tu dominio definitivo, solo actualizás `siteUrl` en este archivo.
 */
export const SITE_CONFIG = {
  // Dominio de producción (actualizar al conectar el dominio definitivo)
  siteUrl: 'https://enescalaarquitectura.com',
  
  siteName: 'En Escala Arquitectura',
  defaultTitle: 'En Escala Arquitectura | Estudio de Arquitectura y Dirección de Obra',
  defaultDescription: 'Estudio de arquitectura especializado en anteproyecto, diseño, construcción y dirección de obra. Arquitectura residencial y comercial en Buenos Aires.',
  
  locale: 'es_AR',
  ogType: 'website',
  
  contact: {
    phone: '+54 9 11 6522-9301',
    rawPhone: '5491165229301',
    email: 'estudioenescala@gmail.com',
    addressLocality: 'Buenos Aires',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
    instagram: 'https://www.instagram.com/en_escala_/',
    instagramHandle: '@en_escala_'
  },

  architects: [
    { name: 'Maximiliano Gallitelli', role: 'Arquitecto Co-fundador' },
    { name: 'Rodolfo Diez', role: 'Arquitecto Co-fundador' }
  ],

  serviceAreas: [
    'Quilmes',
    'Berazategui',
    'Hudson',
    'Brandsen',
    'La Plata',
    'CABA',
    'Gran Buenos Aires',
    'Argentina'
  ]
};

/**
 * Obtiene la URL canónica absoluta para una ruta dada
 */
export const getCanonicalUrl = (pathname = '') => {
  const base = (typeof window !== 'undefined' && window.location.origin) 
    ? window.location.origin 
    : SITE_CONFIG.siteUrl;
  
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${cleanPath === '/' ? '' : cleanPath}`;
};

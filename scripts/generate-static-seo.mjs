import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = 'https://reelarquitectura.com.ar';
const siteName = 'Reel Arquitectura';
const socialImage = `${siteUrl}/portas_busquedas_resultado.webp`;
const socialImageWidth = 1200;
const socialImageHeight = 630;
const socialImageType = 'image/webp';
const today = new Date().toISOString().slice(0, 10);

const projectImages = {
  'Casa-LAN': 'BRUNO 1_20260106_092228_resultado',
  'Casa-Gorosito': 'MARCELO 1_IMG-20241008-WA0003_resultado',
  'Casa-Rodriguez': 'CARLOS 1 WP_20160328_001_resultado',
  'Casa-SIRI': 'JOEL 1_20220221_130727_resultado',
  'Casa-VNQ': 'VNQ 1 20250903_135746_resultado',
  'Casa-GYG': 'GYG 1_20260603_093144_resultado',
  'Casa-GUACCI': 'LUCAS 1 _20260527_130007_resultado',
  'Casa-KOVACH': 'RICARDO NQ 1_20231211_112559_resultado',
};

const serviceImages = {
  'anteproyecto-y-documentacion': 'Anteproyecto',
  'direccion-de-obra': 'FOTO DIRECCIÓN_20250728_154246 F_resultado',
  'construccion-y-remodelacion': 'FOTO CONSTRUCCIÓN_20250207_102618 F_resultado',
  'analisis-de-costos': 'Foto ANÁLISIS DE COSTOS F_resultado',
  'tramites-de-habilitaciones': 'Foto TRÁMITES Y HABILITACIONES F_resultado',
  'diseno-interior-y-mobiliarios': 'Foto DISEÑO INTERIOR Y MOBILIARIOS_resultado',
};

const serviceAreas = [
  'Quilmes',
  'Berazategui',
  'Hudson',
  'Brandsen',
  'La Plata',
  'CABA',
  'Gran Buenos Aires',
  'Argentina',
];

const routes = [
  {
    path: '/',
    title: `${siteName} | Estudio de Arquitectura y Dirección de Obra`,
    description:
      'Reel Arquitectura. Estudio especializado en diseño, proyecto, construcción, remodelación y dirección de obra en AMBA, Buenos Aires.',
    priority: '1.0',
    changefreq: 'weekly',
    imageWidth: socialImageWidth,
    imageHeight: socialImageHeight,
    imageType: socialImageType,
    schema: {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ArchitecturalFirm'],
      name: siteName,
      description:
        'Estudio de arquitectura especializado en anteproyecto, diseño, construcción, remodelación y dirección de obra en AMBA, Buenos Aires.',
      url: siteUrl,
      telephone: '+54 9 11 6522-9301',
      email: 'reelarquitectura@gmail.com',
      image: socialImage,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'AMBA',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
      },
      areaServed: serviceAreas.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
      founder: [
        {
          '@type': 'Person',
          name: 'Maximiliano Gallitelli',
          jobTitle: 'Arquitecto Co-fundador',
        },
        {
          '@type': 'Person',
          name: 'Rodolfo Diez',
          jobTitle: 'Arquitecto Co-fundador',
        },
      ],
      sameAs: ['https://www.instagram.com/reelArquitectura/'],
    },
  },
  {
    path: '/proyectos',
    title: `Todos los Proyectos | Portafolio de Obras | ${siteName}`,
    description:
      'Explorá el archivo completo de obras y proyectos de Reel Arquitectura: viviendas, remodelaciones, piscinas y dirección de obra en Buenos Aires.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/politica-de-privacidad',
    title: `Política de privacidad y cookies | ${siteName}`,
    description:
      'Información sobre privacidad, cookies, analítica, publicidad y datos de contacto en el sitio web de Reel Arquitectura.',
    priority: '0.3',
    changefreq: 'yearly',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Política de privacidad y cookies',
      description:
        'Información sobre privacidad, cookies, analítica y contacto en el sitio web de Reel Arquitectura.',
      url: `${siteUrl}/politica-de-privacidad`,
      publisher: {
        '@type': 'ArchitecturalFirm',
        name: siteName,
        email: 'reelarquitectura@gmail.com',
        url: siteUrl,
      },
    },
  },
  ...[
    ['Casa-LAN', 'Casa LAN', 'Proyecto y Dirección de Obra', 'Ampliación y remodelación de galería en Nuevo Quilmes, partido de Quilmes. Proyecto y dirección de obra por Reel Arquitectura.'],
    ['Casa-Gorosito', 'Casa Gorosito', 'Proyecto y Dirección de Obra', 'Vivienda de fin de semana en Campos de Roca II, Brandsen. Proyecto residencial y dirección de obra por Reel Arquitectura.'],
    ['Casa-Rodriguez', 'Casa Rodríguez', 'Proyecto y Dirección de Obra', 'Vivienda de 290 m2 en Nuevo Quilmes con detalles de calidad interior y piscina climatizada.'],
    ['Casa-SIRI', 'Casa SIRI', 'Proyecto y Dirección de Obra', 'Vivienda desarrollada en una planta en Nuevo Quilmes, con espacios abiertos hacia la mejor iluminación natural.'],
    ['Casa-VNQ', 'Casa VNQ', 'Proyecto y Dirección de Obra', 'Vivienda de carácter inglés frente al lago en Nuevo Quilmes, con proyecto y dirección de obra de Reel Arquitectura.'],
    ['Casa-GYG', 'Casa GYG', 'Proyecto y Dirección de Obra', 'Casa residencial en Hudson, Berazategui, organizada en una planta con cuatro dormitorios y espacios sociales integrados.'],
    ['Casa-GUACCI', 'Casa GUACCI', 'Proyecto y Dirección de Obra', 'Ampliación y obra residencial en La Reserva de Hudson, Berazategui, con diseño racionalista e integrado a la vivienda existente.'],
    ['Casa-KOVACH', 'Piscina Kovach', 'Proyecto y Dirección de Obra', 'Proyecto y construcción de pileta de natación con solarium y cascada en Nuevo Quilmes.'],
  ].map(([slug, title, type, description]) => ({
    path: `/proyecto/${slug}`,
    title: `${title} | ${type} | ${siteName}`,
    description,
    priority: '0.8',
    changefreq: 'monthly',
    imageAsset: projectImages[slug],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: title,
      description,
      creator: {
        '@type': 'ArchitecturalFirm',
        name: siteName,
      },
      url: `${siteUrl}/proyecto/${slug}`,
      image: socialImage,
    },
  })),
  ...[
    ['anteproyecto-y-documentacion', 'Anteproyecto y Documentación de Obra', 'Diseñamos tu proyecto con planos 2D, renders 3D y documentación técnica para ejecutar la obra.'],
    ['direccion-de-obra', 'Dirección de Obra', 'Acompañamos la obra, coordinando, administrando y supervisando calidad, costos y tiempos de ejecución.'],
    ['construccion-y-remodelacion', 'Construcción y Remodelación', 'Ejecución integral de obra nueva, refacciones, ampliaciones y pequeñas obras en Buenos Aires.'],
    ['analisis-de-costos', 'Análisis de Costos', 'Cómputos, presupuestos y análisis económico para planificar la inversión de cada etapa de obra.'],
    ['tramites-de-habilitaciones', 'Trámites de Habilitaciones', 'Gestión de habilitaciones, permisos y documentación ante organismos municipales y provinciales.'],
    ['diseno-interior-y-mobiliarios', 'Diseño Interior y Mobiliarios', 'Diseño de espacios interiores y mobiliarios funcionales mediante planos, renders y asesoramiento profesional.'],
  ].map(([slug, title, description]) => ({
    path: `/servicio/${slug}`,
    title: `${title} | Servicios de Arquitectura | ${siteName}`,
    description,
    priority: '0.8',
    changefreq: 'monthly',
    imageAsset: serviceImages[slug],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description,
      provider: {
        '@type': 'ArchitecturalFirm',
        name: siteName,
        telephone: '+54 9 11 6522-9301',
        email: 'reelarquitectura@gmail.com',
        url: siteUrl,
      },
      areaServed: serviceAreas.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
      url: `${siteUrl}/servicio/${slug}`,
      image: socialImage,
    },
  })),
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const canonicalFor = (routePath) => `${siteUrl}${routePath === '/' ? '' : routePath}`;

const assetUrlFor = (filename) => `${siteUrl}/assets/${encodeURIComponent(filename)}`;

const resolveRouteImages = async (distDir) => {
  const assetsDir = path.join(distDir, 'assets');
  const assetNames = await readdir(assetsDir);

  for (const route of routes) {
    if (!route.imageAsset) {
      route.image = socialImage;
      continue;
    }

    const builtImage = assetNames.find(
      (assetName) => assetName.startsWith(route.imageAsset) && assetName.endsWith('.webp')
    );

    if (!builtImage) {
      throw new Error(`No built social image found for ${route.path}: ${route.imageAsset}`);
    }

    route.image = assetUrlFor(builtImage);

    if (route.schema) {
      route.schema.image = route.image;
    }
  }
};

const stripManagedHeadTags = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>/gi, '')
    .replace(/\s*<meta\s+name="description"[\s\S]*?>/gi, '')
    .replace(/\s*<meta\s+name="robots"[\s\S]*?>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[\s\S]*?>/gi, '')
    .replace(/\s*<meta\s+(?:property|name)="(?:og:[^"]+|twitter:[^"]+)"[\s\S]*?>/gi, '')
    .replace(/\s*<script\s+id="structured-data-schema"[\s\S]*?<\/script>/gi, '');

const renderMeta = (route) => {
  const canonical = canonicalFor(route.path);
  const routeImage = route.image || socialImage;
  const imageMetadata = [
    `  <meta property="og:image:secure_url" content="${routeImage}" />`,
    route.imageWidth ? `  <meta property="og:image:width" content="${route.imageWidth}" />` : '',
    route.imageHeight ? `  <meta property="og:image:height" content="${route.imageHeight}" />` : '',
    route.imageType ? `  <meta property="og:image:type" content="${route.imageType}" />` : '',
  ].filter(Boolean);
  const schema = route.schema
    ? `  <script id="structured-data-schema" type="application/ld+json">${JSON.stringify(route.schema)}</script>\n`
    : '';

  return [
    `  <title>${escapeHtml(route.title)}</title>`,
    `  <meta name="description" content="${escapeHtml(route.description)}" />`,
    '  <meta name="robots" content="index, follow" />',
    `  <link rel="canonical" href="${canonical}" />`,
    '  <meta property="og:type" content="website" />',
    `  <meta property="og:site_name" content="${siteName}" />`,
    '  <meta property="og:locale" content="es_AR" />',
    `  <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `  <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `  <meta property="og:url" content="${canonical}" />`,
    `  <meta property="og:image" content="${routeImage}" />`,
    ...imageMetadata,
    `  <meta property="og:image:alt" content="${siteName} - arquitectura y dirección de obra" />`,
    '  <meta name="twitter:card" content="summary_large_image" />',
    `  <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `  <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `  <meta name="twitter:image" content="${routeImage}" />`,
    `  <meta name="twitter:image:alt" content="${siteName} - arquitectura y dirección de obra" />`,
    schema.trimEnd(),
  ]
    .filter(Boolean)
    .join('\n');
};

const applyRouteMeta = (html, route) => {
  const stripped = stripManagedHeadTags(html);
  const meta = renderMeta(route);

  if (/<head>\s*<meta\s+charset="UTF-8"\s*\/?>/i.test(stripped)) {
    return stripped.replace(
      /(<head>\s*<meta\s+charset="UTF-8"\s*\/?>)/i,
      `$1\n${meta}`
    );
  }

  return stripped.replace(/<head>/i, `<head>\n${meta}`);
};

const writeRouteHtml = async (distDir, html, route) => {
  const routeHtml = applyRouteMeta(html, route);
  const targetDir =
    route.path === '/'
      ? distDir
      : path.join(distDir, ...route.path.split('/').filter(Boolean));

  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, 'index.html'), routeHtml);

  if (route.path !== '/') {
    const htmlFile = path.join(distDir, `${route.path.slice(1)}.html`);
    await mkdir(path.dirname(htmlFile), { recursive: true });
    await writeFile(htmlFile, routeHtml);
  }
};

const renderSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${canonicalFor(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const distDir = path.resolve('dist');
const html = await readFile(path.join(distDir, 'index.html'), 'utf8');

await resolveRouteImages(distDir);
await Promise.all(routes.map((route) => writeRouteHtml(distDir, html, route)));
await writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap());

console.log(`Generated static SEO HTML for ${routes.length} routes.`);

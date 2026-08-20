// Helper dynamically importing all images by folder using Vite's import.meta.glob
const lanImages = import.meta.glob('../assets/Images/ObraLAN/*.webp', { eager: true, import: 'default' });
const gorositoImages = import.meta.glob('../assets/Images/ObraGOROSITO/*.webp', { eager: true, import: 'default' });
const rodriguezImages = import.meta.glob('../assets/Images/ObraRODRIGUEZ/*.webp', { eager: true, import: 'default' });
const siriImages = import.meta.glob('../assets/Images/ObraSIRI/*.webp', { eager: true, import: 'default' });
const vnqImages = import.meta.glob('../assets/Images/ObraVNQ/*.webp', { eager: true, import: 'default' });
const gygImages = import.meta.glob('../assets/Images/ObraGYG/*.webp', { eager: true, import: 'default' });
const guacciImages = import.meta.glob('../assets/Images/ObraGUACCI/*.webp', { eager: true, import: 'default' });
const kovachImages = import.meta.glob('../assets/Images/ObraKOVACH/*.webp', { eager: true, import: 'default' });

const extractImageNumber = (path) => {
  const filename = path.split('/').pop() || '';
  const match = filename.match(/^[^\d]*(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

// Ordena estrictamente las imágenes según la numeración de los archivos (1, 2, 3, ... 10, 11, etc.)
const getImages = (globResult) => {
  return Object.entries(globResult)
    .sort(([pathA], [pathB]) => {
      const numA = extractImageNumber(pathA);
      const numB = extractImageNumber(pathB);
      if (numA !== numB) return numA - numB;
      return pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' });
    })
    .map(([, mod]) => mod);
};

export const projects = [
  {
    id: 1,
    slug: 'Casa-LAN',
    title: 'Casa LAN',
    category: 'Residencial',
    type: 'Proyecto y Dirección de Obra',
    year: '2025',
    area: '25.00 m²',
    location: 'Barrio Cerrado “Nuevo Quilmes”, partido de Quilmes',
    fullDescription: 'La premisa para este proyecto era ampliar una galería frecuentemente utilizada para fechas festivas y que por sus dimensiones estaba quedando chica, y hacerlo con los propietarios viviendo en el lugar. El proyecto contempló agrandar apenas 1 metro todo el ancho de la galería, pero remodelar todo el espacio. Aparte de incluir un baño para uso exterior, se tuvo que cambiar piso, cielorrasos, iluminación, instalaciones, generar una mesada de trabajo y reestructurar todo el sector de parrilla, terminando por circunscribir todo el espacio con un cerramiento vidriado plegable. Para generar la convivencia de ese espacio con el exterior y la pileta, la idea fue no obstruir las vistas hacia ella, lo que llevó como respuesta de diseño desmaterializar el ángulo hacia ese sector, y con la finalidad de adecuar lo ampliado con el resto de la vivienda, se pintaron y revistieron todas las superficies restantes de la misma.',
    featured: false,
    image: getImages(lanImages)[0] || null,
    gallery: getImages(lanImages),
  },
  {
    id: 2,
    slug: 'Casa-Gorosito',
    title: 'Casa Gorosito',
    category: 'Comercial',
    type: 'Proyecto y Dirección de Obra',
    year: '2021',
    area: 'Sin cubierta: 52.50 m2, Cubierta: 168.20 m2',
    location: 'Barrio cerrado “Campos de Roca II”, partido de Brandsen',
    fullDescription:
      'Implantada sobre un amplio terreno en un club de campo y con el propósito de ser usada sólo los fines de semana, la vivienda Gorosito desarrolla su programa en una sola planta y organiza los espacios públicos en sentido transversal al terreno con la finalidad de generar un diálogo constante con el parque y la gran piscina.',
    featured: true,
    image: getImages(gorositoImages)[0] || null,
    gallery: getImages(gorositoImages),
  },
  {
    id: 3,
    slug: 'Casa-Rodriguez',
    title: 'Casa Rodriguez',
    category: 'Residencial',
    type: 'Proyecto y Dirección de Obra',
    year: '2015',
    area: 'Sin cubierta: 3.61 m², Cubierta: 290.28 m2',
    location: 'Barrio Cerrado “Nuevo Quilmes”, partido de Quilmes',
    fullDescription:
      'Los 290 m2 de la Vivienda Rodríguez se organizan en dos plantas comunicadas por una escalera visible desde ambos niveles y que se abre hacia el hall de entrada. Austeridad exterior y detalles de calidad interior caracterizan la estética de esta vivienda que se complementa con una piscina climatizada. ',
    featured: true,
    image: getImages(rodriguezImages)[0] || null,
    gallery: getImages(rodriguezImages),
  },
  {
    id: 4,
    slug: 'Casa-SIRI',
    title: 'Casa SIRI',
    category: 'Comercial',
    type: 'Proyecto y Dirección de Obra',
    year: '2019',
    area: 'Sin cubierta: 10.46 m², Cubierta: 180.71 m2',
    location: 'Barrio Cerrado “Nuevo Quilmes”, partido de Quilmes',
    fullDescription:
      'Simpleza y rapidez de ejecución fueron dos premisas elementales a la hora de arrancar con este proyecto. Desarrollada en una sola planta, los espacios públicos de esta vivienda fueron abiertos hacia las zonas con mejor iluminación natural, concentrando la parte privada en un ala que intenta invadir lo menos posible el fondo del terreno, pero que dialoga con este a través de la habitación en suite. El pórtico de acceso rompe la tranquilidad de la fachada y toma importancia con el revestimiento de piedra colocado a modo de murete.',
    featured: false,
    image: getImages(siriImages)[0] || null,
    gallery: getImages(siriImages),
  },
  {
    id: 5,
    slug: 'Casa-VNQ',
    title: 'Casa VNQ',
    category: 'Residencial',
    type: 'Proyecto y Dirección de Obra',
    year: '2024',
    area: 'Sin cubierta: 3.08 m², Cubierta: 394.47 m2',
    location: 'Barrio Cerrado “Nuevo Quilmes”, partido de Quilmes',
    fullDescription:
      '“Quiero estar acá y sentirme en Londres”. Esas fueron las primeras palabras de la propietaria que dieron puntapié a este diseño de vivienda. Con el lago como paisaje natural de fondo, la casa de grandes dimensiones de espacios públicos, dialoga constantemente con él, abriendo grandes ventanales hacia ese sector. La piedra es la protagonista en todas las fachadas, que, con los techos quebrados de gran pendiente, la carpintería de vidrio repartido, los trabajos de zinguería y elementos ornamentales terminan de dar el carácter inglés a toda la edificación.',
    featured: true,
    image: getImages(vnqImages)[0] || null,
    gallery: getImages(vnqImages),
  },
  {
    id: 6,
    slug: 'Casa-GYG',
    title: 'Casa GYG',
    category: 'Residencial',
    type: 'Proyecto y Dirección de Obra',
    year: '2025',
    area: 'Sin cubierta: 2.16 m², Cubierta: 177.82 m2',
    location: 'Barrio Elcano, Pueblos del Plata, Hudson, partido de Berazategui.',
    fullDescription:
      'Con el condicionante de una superficie en planta baja limitada según reglamento, la casa G y G concentra en una sola planta un programa bastante amplio si tenemos en cuenta sus 4 dormitorios, dos de los cuales se organizan en suite, y a su cocina con isla que complementa un comedor principal y una galería. El ambiente público restante, el estar, se comunica con el exterior a través de un gran ventanal en altura, ya que tanto este ambiente como el comedor comparten la gran espacialidad que les dan sus 3.70 m de altura.',
    featured: false,
    image: getImages(gygImages)[0] || null,
    gallery: getImages(gygImages),
  },
  {
    id: 7,
    slug: 'Casa-GUACCI',
    title: 'Casa GUACCI',
    category: 'Residencial',
    type: 'Proyecto y Dirección de Obra',
    year: '2025',
    area: 'Sin cubierta: 5.00 m², Cubierta: 65.25 m2',
    location: 'Barrio “La Reserva de Hudson”, partido de Berazategui',
    fullDescription: 'El gran compromiso de la ejecución de la obra de esta vivienda, era trabajar con la familia viviendo en la planta baja, por ende, se tuvo un cuidado exhaustivo para poder llevar a cabo todas las tareas de la manera menos invasiva posible. La idea del diseño, era darle movimiento y dinamismo a todo el conjunto, e integrarlo armoniosamente con la vivienda existente. De esta manera se planteó un diseño de vivienda racionalista, que contempla diversos volúmenes que contrastan entre sí por planos, cortes de colores y alturas.',
    featured: false,
    image: getImages(guacciImages)[0] || null,
    gallery: getImages(guacciImages),
  },
  {
    id: 8,
    slug: 'Casa-KOVACH',
    title: 'Piscina Kovach',
    category: 'Residencial',
    type: 'Proyecto y Dirección de Obra',
    year: '2023',
    area: 'Espejo de agua: 25.00 m2, Solarium: 14.00 m2',
    location: 'Barrio Cerrado “Nuevo Quilmes”, partido de Quilmes',
    fullDescription: 'El encargo de los propietarios se centró en la construcción de una pileta de natación para construir en el patio de la vivienda existente así de esa manera, aprovechar más su uso en época de verano. De hormigón armado revestida en venecitas como características constructivas fundamentales, la pileta se complementa con un solárium y una cascada a modo de cortina de fondo para toda la construcción.',
    featured: false,
    image: getImages(kovachImages)[1] || null,
    gallery: getImages(kovachImages),
  },
];

// Contenido institucional de Alva.
// Fuente única y válida: brochure "ALVA para WEB.pdf" + brief del cliente.
// No se agrega ni inventa información que no figure en esas fuentes.

export const siteMeta = {
  name: 'Alva',
  fullName: 'Alva Creative House',
  tagline: 'Ideas que nos mueven',
  description:
    'Alva es una agencia de comunicación y publicidad. Unimos estrategia y creatividad para que las cosas pasen: campañas de sensibilización, cambio cultural y comunicación institucional para instituciones públicas y empresas privadas.',
  email: 'hola@alva.com.uy',
  url: 'https://www.alva.com.uy',
  locality: 'Montevideo',
  country: 'Uruguay',
  countryCode: 'UY',
};

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/alvacreativehouse/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/alva-creative-house/', icon: 'linkedin' },
  { label: 'Cómo llegar', href: 'https://maps.app.goo.gl/XViATwjrgytNvF6V6', icon: 'pin' },
] as const;

export const feedbackForm = {
  label: 'Quejas y sugerencias',
  href: 'https://forms.gle/85VVtDg6hEgjxaZu9',
};

export const nav = [
  { label: 'Alva', href: '#alva' },
  { label: 'Mirada', href: '#mirada' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencia', href: '#experiencia-proyectos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  kicker: 'Ideas que nos mueven',
  headline: 'Hacemos cosas distintas porque vemos las cosas distinto.',
  sub: 'Una agencia de comunicación y publicidad. Unimos estrategia y creatividad para que las cosas pasen.',
  repeatWord: 'Alva',
};

export const experience = {
  heading: 'Experiencia',
  points: [
    {
      figure: '+10',
      label: 'años',
      text: 'Más de 10 años trabajando con instituciones públicas y empresas privadas.',
    },
    {
      figure: '01',
      label: 'Claridad',
      text: 'Capacidad de traducir lo técnico en mensajes claros.',
    },
    {
      figure: '02',
      label: 'Especialización',
      text: 'Especialistas en campañas de sensibilización y cambio cultural.',
    },
    {
      figure: '03',
      label: 'Temas complejos',
      text: 'Experiencia en sostenibilidad, género, salud y energía.',
    },
  ],
};

export const mirada = {
  heading: 'Nuestra mirada',
  purposeLabel: 'Nuestro propósito',
  purpose: 'Acelerar los cambios culturales que las personas, las organizaciones y el planeta necesitan.',
  intro: 'En todo lo que hacemos integramos estas tres dimensiones:',
  items: [
    {
      name: 'Mirada social',
      text: 'Ponemos a las personas en el centro.',
    },
    {
      name: 'Mirada de género y diversidad',
      text: 'Comunicamos de forma inclusiva.',
    },
    {
      name: 'Mirada sostenible',
      text: 'Pensamos en el impacto de lo que hacemos.',
    },
  ],
};

export const whyAlva = {
  heading: '¿Por qué Alva?',
  items: [
    {
      name: 'Estrategia y creatividad',
      text: 'Trabajamos con una base estratégica que asegura que cada acción tenga sentido, medición y resultados concretos. Es comunicación pensada para funcionar.',
    },
    {
      name: 'Mirada integrada',
      text: 'Combina comunicación, sostenibilidad e inclusión en un mismo enfoque. Eso permite construir marcas relevantes hoy, alineadas con los cambios culturales.',
    },
    {
      name: 'Equipo sólido y con experiencia',
      text: 'Un equipo multidisciplinario con experiencia en campañas de alcance nacional, proyectos complejos y clientes diversos. Capacidad real de ejecutar, adaptarse y sostener procesos en el tiempo.',
    },
  ],
};

export const services = {
  heading: 'Servicios',
  groups: [
    {
      name: 'Pensamos',
      items: [
        'Estrategia de marca',
        'Posicionamiento',
        'Campañas 360',
        'Conceptos creativos',
        'Planes de medios',
        'Comunicación interna y cultura',
        'Propósito, sostenibilidad e impacto',
      ],
    },
    {
      name: 'Creamos',
      items: [
        'Experiencias de marca',
        'Identidad visual y branding',
        'Diseño',
        'Contenidos y narrativas',
        'Piezas para diferentes medios y formatos',
      ],
    },
    {
      name: 'Activamos',
      items: [
        'Producción audiovisual',
        'Producción gráfica',
        'Activaciones y stands',
        'Eventos y BTL',
        'Lanzamientos',
        'Alianzas y acciones especiales',
        'Cobertura de eventos',
      ],
    },
    {
      name: 'Optimizamos',
      items: [
        'Estrategia de contenidos digitales',
        'Campañas digitales',
        'Gestión de redes sociales',
        'Performance y optimización',
        'Influencers / creators',
        'Analítica y medición',
        'Informes y seguimiento',
      ],
    },
  ],
};

export const awards = {
  heading: 'Reconocimientos',
  text: 'Trabajamos para crear campañas inteligentes, eficientes y que obtengan buenos resultados. Los premios no son un objetivo, pero si los conseguimos, los disfrutamos junto a los clientes.',
};

export const team = {
  heading: 'Hacemos que las cosas pasen.',
  intro:
    'Somos una agencia del tamaño justo para que quienes lideran la organización también estén involucrados en el día a día de la cuenta.',
  description:
    'Combinamos creatividad con contenido técnico. Un equipo multidisciplinario, con alto nivel de formación, que garantiza la calidad y profundidad de lo que hacemos. El trabajo en equipo es parte de nuestra forma de hacer, incorporando los talentos de la agencia y del equipo de la organización cliente.',
};

export const contact = {
  heading: '¿Empezamos?',
  cta: 'Hablemos',
  mailto: `mailto:${siteMeta.email}`,
};

export const projectsSection = {
  heading: 'Experiencia y proyectos',
  intro:
    'Un espacio en construcción para mostrar los casos de Alva: campañas de comunicación, sensibilización y cambio cultural con instituciones públicas y empresas privadas.',
};

export const belongsSection = {
  heading: 'Pertenencias y redes',
};

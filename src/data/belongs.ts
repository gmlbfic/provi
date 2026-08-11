// Organizaciones y redes de las que Alva forma parte (brochure, "Somos
// parte de" / carpeta "PARTE DE" del zip de logos).

export interface BelongLogo {
  slug: string;
  name: string;
}

export const belongs: BelongLogo[] = [
  { slug: 'ati', name: 'ATI · Unión Agencias de Triple Impacto' },
  { slug: 'circulo', name: 'El Círculo' },
  { slug: 'pacto-global', name: 'Pacto Global Red Uruguay' },
  { slug: 'business-ambition', name: 'Business Ambition' },
  { slug: 'cdu', name: 'CDU' },
  { slug: 'cempre', name: 'CEMPRE' },
  { slug: 'science-based-targets', name: 'Science Based Targets' },
  { slug: 'womens-enpowerment', name: "Women's Empowerment Principles" },
];

const logoModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/belongs/*.png',
  { eager: true }
);

export function getBelongLogo(slug: string, variant: 'black' | 'white' = 'black') {
  const mod = logoModules[`../assets/belongs/${slug}-${variant}.png`];
  return mod?.default;
}

// Selección de clientes para la sección "Clientes".
// Fuente: logos entregados por Alva (carpeta "ALVA" del zip de logos),
// que coinciden con las páginas "Experiencia con marcas, empresas privadas
// y organizaciones" y "Experiencia con organismos e instituciones públicas"
// del brochure institucional.
//
// Reglas del brief:
// - Máximo 10 logos por categoría.
// - No hay prioridad explícita del cliente para el excedente, así que la
//   selección queda centralizada acá: alterná `active` a `true`/`false`
//   o reordená las filas para cambiar qué se muestra, sin tocar componentes.
// - Si activás más de 10 en una categoría, el componente igual corta en 10
//   (se respeta el orden de este archivo).

export interface ClientLogo {
  slug: string;
  name: string;
  active: boolean;
}

export const MAX_PER_CATEGORY = 10;

// Marcas, empresas privadas y organizaciones
export const privateClients: ClientLogo[] = [
  { slug: 'nestle', name: 'Nestlé', active: true },
  { slug: 'warner', name: 'Warner Bros', active: true },
  { slug: 'mc-donalds', name: "McDonald's", active: true },
  { slug: 'decathlon', name: 'Decathlon', active: true },
  { slug: 'pernod', name: 'Pernod Ricard', active: true },
  { slug: 'gerdau', name: 'Gerdau', active: true },
  { slug: 'salus', name: 'Salus', active: true },
  { slug: 'suat', name: 'SUAT', active: true },
  { slug: 'heritage', name: 'Banque Heritage', active: true },
  { slug: 'la-pasiva', name: 'La Pasiva', active: true },
  { slug: 'braglia', name: 'Braglia', active: false },
  { slug: 'carve', name: 'Carve', active: false },
  { slug: 'carve-deportiva', name: 'Carve Deportiva', active: false },
  { slug: 'casa-zorrilla', name: 'Casa Zorrilla', active: false },
  { slug: 'chscv', name: 'Comisión Honoraria para la Salud Cardiovascular', active: false },
  { slug: 'montecarlo', name: 'Montecarlo TV', active: false },
  { slug: 'nespresso', name: 'Nespresso', active: false },
  { slug: 'onu-mujeres', name: 'ONU Mujeres', active: false },
  { slug: 'radiocero-1015', name: 'Radiocero 101.5', active: false },
  { slug: 'radiocero-1043', name: 'Radiocero 104.3', active: false },
  { slug: 'eyecue', name: 'Eyecue', active: false },
  { slug: 'wb-dispel', name: 'WB Dispel', active: false },
];

// Organismos e instituciones públicas
export const publicClients: ClientLogo[] = [
  { slug: 'miem', name: 'Ministerio de Industria, Energía y Minería', active: true },
  { slug: 'eficiencia', name: 'Eficiencia Energética', active: true },
  { slug: 'inmujeres', name: 'Instituto Nacional de las Mujeres', active: true },
  { slug: 'plan-vale', name: 'Plan Vale Uruguay', active: true },
  { slug: 'anii', name: 'ANII', active: true },
  { slug: 'im', name: 'Intendencia de Montevideo', active: true },
];

const logoModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/clients/*.png',
  { eager: true }
);

export function getClientLogo(slug: string, variant: 'black' | 'white' = 'black') {
  const mod = logoModules[`../assets/clients/${slug}-${variant}.png`];
  return mod?.default;
}

// Casos de éxito / proyectos de Alva.
//
// Cómo agregar un caso real:
// 1. Poné la foto en src/assets/projects/ con el mismo nombre que el "slug"
//    del caso (ej: slug "campana-mides" → src/assets/projects/campana-mides.jpg,
//    también sirven .png o .webp).
// 2. Completá category, name, client, description y (opcional) link.
// 3. Cambiá active a true. El bloque deja de mostrarse como placeholder y
//    pasa a mostrar el caso real, sin tocar ningún componente.
//
// Mientras un caso tenga active: false, se muestra como "Caso en
// preparación" — nunca se inventa contenido para completar un slot vacío.
// El orden del array es el orden en que aparecen en la web (hasta 8).

export interface Project {
  slug: string;
  active: boolean;
  category: string;
  name: string;
  client: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  { slug: 'caso-01', active: false, category: '', name: '', client: '', description: '' },
  { slug: 'caso-02', active: false, category: '', name: '', client: '', description: '' },
  { slug: 'caso-03', active: false, category: '', name: '', client: '', description: '' },
  { slug: 'caso-04', active: false, category: '', name: '', client: '', description: '' },
  { slug: 'caso-05', active: false, category: '', name: '', client: '', description: '' },
  { slug: 'caso-06', active: false, category: '', name: '', client: '', description: '' },
];

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projects/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

export function getProjectImage(slug: string) {
  const match = Object.entries(imageModules).find(([path]) =>
    path.includes(`/${slug}.`)
  );
  return match?.[1]?.default;
}

/**
 * Metadatos SEO centralizados por licencia y ciudades objetivo.
 * Usar en páginas de licencia, hubs locales y schema markup.
 */

export interface CiudadSeo {
  slug: string;
  name: string;
  state: string;
  intro: string;
}

export interface LicenciaSeoMeta {
  homoclave: string;
  /** Meta title (Layout añade | Perscon) */
  title: string;
  description: string;
  /** Variante corta para H1 si el nombre oficial es muy largo */
  h1?: string;
  keywords: string[];
}

export const CIUDADES_SEO: CiudadSeo[] = [
  {
    slug: 'cdmx',
    name: 'Ciudad de México',
    state: 'CDMX',
    intro:
      'La CDMX concentra el mayor número de establecimientos médicos privados del país. COFEPRIS federal gestiona licencias sanitarias para clínicas, hospitales y centros de diagnóstico en todas las alcaldías.',
  },
  {
    slug: 'monterrey',
    name: 'Monterrey',
    state: 'Nuevo León',
    intro:
      'Monterrey y el área metropolitana de Nuevo León tienen alta demanda de licencias COFEPRIS para hospitales, clínicas de especialidad y centros de imagen diagnóstica en expansión.',
  },
  {
    slug: 'guadalajara',
    name: 'Guadalajara',
    state: 'Jalisco',
    intro:
      'Guadalajara es uno de los polos hospitalarios más importantes del occidente de México. Los trámites COFEPRIS para obra nueva, remodelación y operación siguen los mismos requisitos federales.',
  },
  {
    slug: 'puebla',
    name: 'Puebla',
    state: 'Puebla',
    intro:
      'En Puebla y su zona conurbada crecen clínicas, laboratorios y unidades de hemodiálisis que requieren licencia sanitaria federal antes de operar legalmente.',
  },
  {
    slug: 'queretaro',
    name: 'Querétaro',
    state: 'Querétaro',
    intro:
      'Querétaro destaca por inversión en infraestructura de salud privada. El Permiso Sanitario de Construcción y las licencias de funcionamiento COFEPRIS son requisitos previos a la apertura.',
  },
];

export const LICENCIAS_SEO: Record<string, LicenciaSeoMeta> = {
  'permiso-construccion': {
    homoclave: 'COFEPRIS-05-033',
    title: 'Permiso Sanitario de Construcción COFEPRIS 2026 | Requisitos y Trámite',
    description:
      'Tramita el Permiso Sanitario de Construcción COFEPRIS (homoclave 05-033) para clínicas, hospitales y laboratorios en México. Requisitos, tiempos y asesoría especializada.',
    h1: 'Permiso Sanitario de Construcción COFEPRIS',
    keywords: [
      'permiso sanitario de construcción COFEPRIS',
      'permiso COFEPRIS construcción clínica',
      'COFEPRIS-05-033',
      'permiso construcción hospital',
    ],
  },
  'licencia-actos-quirurgicos': {
    homoclave: 'COFEPRIS-05-034',
    title: 'Licencia Actos Quirúrgicos COFEPRIS 2026 | Requisitos y Trámite',
    description:
      'Obtén la licencia COFEPRIS para actos quirúrgicos y obstétricos (homoclave 05-034). Requisitos NOM-016, tiempos, costos de derechos y gestión integral del trámite en México.',
    h1: 'Licencia COFEPRIS para Actos Quirúrgicos y Obstétricos',
    keywords: [
      'licencia actos quirúrgicos COFEPRIS',
      'licencia quirófano COFEPRIS',
      'COFEPRIS-05-034',
      'licencia sanitaria cirugía México',
    ],
  },
  'licencia-radiacion': {
    homoclave: 'COFEPRIS-05-024-A',
    title: 'Licencia Rayos X y Radiación COFEPRIS 2026 | Requisitos',
    description:
      'Licencia sanitaria COFEPRIS para rayos X, tomografía y equipos de radiación (homoclave 05-024-A). Requisitos NOM-229, blindajes, tiempos y asesoría en México.',
    h1: 'Licencia COFEPRIS para Fuentes de Radiación Médica',
    keywords: [
      'licencia rayos x COFEPRIS',
      'licencia radiación COFEPRIS',
      'COFEPRIS-05-024-A',
      'licencia tomografía COFEPRIS',
    ],
  },
  'licencia-sanguinea': {
    homoclave: 'COFEPRIS-09-025-A',
    title: 'Licencia Banco de Sangre COFEPRIS 2026 | Requisitos y Trámite',
    description:
      'Licencia sanitaria COFEPRIS para bancos de sangre (homoclave 09-025-A). Requisitos NOM-253, documentación, tiempos y asesoría para obtener la autorización en México.',
    h1: 'Licencia COFEPRIS para Bancos de Sangre',
    keywords: [
      'licencia banco de sangre COFEPRIS',
      'COFEPRIS-09-025-A',
      'licencia sanitaria transfusión',
      'banco de sangre requisitos COFEPRIS',
    ],
  },
  'licencia-transfusion-hospitalaria': {
    homoclave: 'COFEPRIS-09-025-E',
    title: 'Licencia Transfusión Hospitalaria COFEPRIS 2026 | Requisitos',
    description:
      'Licencia COFEPRIS para servicios de transfusión hospitalaria (homoclave 09-025-E). Requisitos, costos de derechos, tiempos y gestión del trámite ante COFEPRIS en México.',
    h1: 'Licencia COFEPRIS de Transfusión Hospitalaria',
    keywords: [
      'licencia transfusión hospitalaria COFEPRIS',
      'COFEPRIS-09-025-E',
      'servicio transfusión hospital COFEPRIS',
      'licencia sanitaria hospital transfusión',
    ],
  },
  'licencia-hemodialisis': {
    homoclave: 'COFEPRIS-05-123-A',
    title: 'Licencia Hemodiálisis COFEPRIS 2026 | Requisitos y Trámite',
    description:
      'Licencia sanitaria COFEPRIS para centros y unidades de hemodiálisis (homoclave 05-123-A). Requisitos NOM-003, documentación, tiempos y asesoría especializada en México.',
    h1: 'Licencia COFEPRIS para Servicios de Hemodiálisis',
    keywords: [
      'licencia hemodiálisis COFEPRIS',
      'COFEPRIS-05-123-A',
      'licencia centro de diálisis',
      'unidad renal COFEPRIS',
    ],
  },
};

export function getLicenciaSeo(slug: string): LicenciaSeoMeta | undefined {
  return LICENCIAS_SEO[slug];
}

export function getCiudad(slug: string): CiudadSeo | undefined {
  return CIUDADES_SEO.find((c) => c.slug === slug);
}

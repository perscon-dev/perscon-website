/**
 * Metadatos SEO centralizados por licencia y ciudades objetivo.
 * Usar en páginas de licencia, hubs locales y schema markup.
 */

export interface CiudadSeo {
  slug: string;
  name: string;
  state: string;
  intro: string;
  /** Municipios o zonas donde atendemos establecimientos */
  zonas: string[];
  /** Slug de un caso de éxito real en la zona (opcional) */
  casoSlug?: string;
}

export interface LicenciaSeoMeta {
  homoclave: string;
  /** Meta title sin marca (Layout añade " | Perscon"); ≤ 50 caracteres */
  title: string;
  description: string;
  /** Variante corta para H1 si el nombre oficial es muy largo */
  h1?: string;
  keywords: string[];
}

function ciudad(
  slug: string,
  name: string,
  state: string,
  zonas: string[],
  extra = '',
  casoSlug?: string,
): CiudadSeo {
  const ambito = name === state ? name : `${name} y ${state}`;
  return {
    slug,
    name,
    state,
    zonas,
    casoSlug,
    intro: `${extra ? extra + ' ' : ''}Te asesoramos para tramitar licencias sanitarias COFEPRIS en ${ambito}: clínicas, hospitales, bancos de sangre, centros de hemodiálisis y establecimientos con fuentes de radiación. La licencia es un trámite federal, con los mismos requisitos en todo el país.`,
  };
}

export const CIUDADES_SEO: CiudadSeo[] = [
  ciudad('cdmx', 'Ciudad de México', 'CDMX', ['Cuauhtémoc', 'Miguel Hidalgo', 'Benito Juárez', 'Coyoacán', 'Álvaro Obregón', 'Tlalpan', 'Gustavo A. Madero', 'Iztapalapa'], 'La Ciudad de México se divide en 16 alcaldías y atendemos establecimientos en cualquiera de ellas.'),
  ciudad('monterrey', 'Monterrey', 'Nuevo León', ['Monterrey', 'San Pedro Garza García', 'San Nicolás de los Garza', 'Guadalupe', 'Apodaca', 'General Escobedo', 'Santa Catarina']),
  ciudad('guadalajara', 'Guadalajara', 'Jalisco', ['Guadalajara', 'Zapopan', 'San Pedro Tlaquepaque', 'Tonalá', 'Tlajomulco de Zúñiga', 'El Salto']),
  ciudad('puebla', 'Puebla', 'Puebla', ['Puebla', 'San Andrés Cholula', 'San Pedro Cholula', 'Cuautlancingo', 'Amozoc']),
  ciudad('queretaro', 'Querétaro', 'Querétaro', ['Querétaro', 'Corregidora', 'El Marqués', 'San Juan del Río']),
  ciudad('tijuana', 'Tijuana', 'Baja California', ['Tijuana', 'Playas de Rosarito', 'Tecate']),
  ciudad('merida', 'Mérida', 'Yucatán', ['Mérida', 'Kanasín', 'Umán', 'Progreso', 'Valladolid']),
  ciudad('leon', 'León', 'Guanajuato', ['León', 'Silao de la Victoria', 'Irapuato', 'San Francisco del Rincón', 'Purísima del Rincón']),
  ciudad('guanajuato', 'Guanajuato', 'Guanajuato', ['Guanajuato capital', 'Irapuato', 'Celaya', 'Salamanca', 'San Miguel de Allende', 'Silao de la Victoria']),
  ciudad('cancun', 'Cancún', 'Quintana Roo', ['Cancún', 'Playa del Carmen', 'Puerto Morelos', 'Tulum', 'Isla Mujeres', 'Cozumel']),
  ciudad('juarez', 'Ciudad Juárez', 'Chihuahua', ['Ciudad Juárez'], 'Ciudad Juárez es ciudad fronteriza con El Paso, Texas.'),
  ciudad('sonora', 'Hermosillo', 'Sonora', ['Hermosillo', 'Guaymas', 'Cajeme (Ciudad Obregón)', 'Nogales', 'San Luis Río Colorado']),
  ciudad('sinaloa', 'Culiacán', 'Sinaloa', ['Culiacán', 'Mazatlán', 'Ahome (Los Mochis)', 'Navolato'], '', 'licencia-clinica-munich'),
  ciudad('chihuahua', 'Chihuahua', 'Chihuahua', ['Chihuahua', 'Cuauhtémoc', 'Delicias', 'Hidalgo del Parral']),
  ciudad('coahuila', 'Saltillo', 'Coahuila', ['Saltillo', 'Ramos Arizpe', 'Torreón', 'Monclova', 'Piedras Negras']),
  ciudad('tamaulipas', 'Tampico', 'Tamaulipas', ['Tampico', 'Ciudad Madero', 'Altamira', 'Reynosa', 'Matamoros', 'Ciudad Victoria', 'Nuevo Laredo']),
  ciudad('toluca', 'Toluca', 'Estado de México', ['Toluca', 'Metepec', 'Zinacantepec', 'Lerma', 'San Mateo Atenco']),
  ciudad('estado-de-mexico', 'Estado de México', 'Estado de México', ['Naucalpan de Juárez', 'Ecatepec de Morelos', 'Tlalnepantla de Baz', 'Cuautitlán Izcalli', 'Huixquilucan', 'Nezahualcóyotl'], '', 'permiso-construccion-unidad-hemodialisis-estado-de-mexico'),
];

export const LICENCIAS_SEO: Record<string, LicenciaSeoMeta> = {
  'permiso-construccion': {
    homoclave: 'COFEPRIS-05-033',
    title: 'Permiso Sanitario de Construcción COFEPRIS',
    description:
      'Permiso sanitario de construcción de establecimientos médicos (homoclave 05-033) para clínicas, hospitales y laboratorios. Requisitos y consulta gratuita.',
    h1: 'Permiso Sanitario de Construcción de Establecimientos Médicos',
    keywords: [
      'permiso sanitario de construcción COFEPRIS',
      'permiso COFEPRIS construcción clínica',
      'COFEPRIS-05-033',
      'permiso construcción hospital',
    ],
  },
  'licencia-actos-quirurgicos': {
    homoclave: 'COFEPRIS-05-034',
    title: 'Licencia Sanitaria COFEPRIS para Actos Quirúrgicos',
    description:
      'Licencia COFEPRIS para clínicas y hospitales con actos quirúrgicos y obstétricos (homoclave 05-034): requisitos NOM-016 y acompañamiento. Consulta gratuita.',
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
    title: 'Licencia Sanitaria Fuentes de Radiación COFEPRIS',
    description:
      'Licencia sanitaria COFEPRIS para rayos X, tomografía y equipos de radiación (homoclave 05-024-A): requisitos NOM-229 y acompañamiento. Consulta gratuita.',
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
    title: 'Licencia Sanitaria Banco de Sangre COFEPRIS',
    description:
      'Licencia sanitaria COFEPRIS para bancos de sangre (homoclave 09-025-A): requisitos NOM-253, documentación y acompañamiento en el trámite. Consulta gratuita.',
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
    title: 'Licencia de Transfusión Sanguínea COFEPRIS',
    description:
      'Licencia COFEPRIS-09-025-E para servicios de transfusión sanguínea hospitalaria: requisitos, documentación y acompañamiento en el trámite. Consulta gratuita.',
    h1: 'Licencia COFEPRIS de Transfusión Sanguínea Hospitalaria',
    keywords: [
      'licencia transfusión hospitalaria COFEPRIS',
      'COFEPRIS-09-025-E',
      'servicio transfusión hospital COFEPRIS',
      'licencia sanitaria hospital transfusión',
    ],
  },
  'licencia-hemodialisis': {
    homoclave: 'COFEPRIS-05-123-A',
    title: 'Licencia Sanitaria Hemodiálisis COFEPRIS',
    description:
      'Licencia sanitaria COFEPRIS para unidades de hemodiálisis (homoclave 05-123-A): requisitos NOM-003, documentación y acompañamiento. Consulta gratuita.',
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

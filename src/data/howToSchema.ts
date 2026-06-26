/**
 * HowTo Schema Data - Procesos COFEPRIS
 * Proporciona guías paso a paso para trámites regulatorios
 */

export const howToCofeprisSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://www.perscon.com.mx/#howto-cofepris",
  name: "Cómo obtener una licencia sanitaria COFEPRIS",
  description: "Guía completa del proceso de solicitud de licencia sanitaria ante COFEPRIS en México",
  image: {
    "@type": "ImageObject",
    url: "https://www.perscon.com.mx/og/og-default.webp",
  },
  estimatedDuration: "P60D",
  totalTime: "P60D",
  yield: {
    "@type": "HowToItem",
    name: "Licencia Sanitaria COFEPRIS",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Preparación de documentación",
      text: "Reunir toda la documentación requerida según el tipo de establecimiento: planos arquitectónicos, especificaciones técnicas, comprobante de propiedad o arrendamiento, y datos del responsable sanitario.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Verificación de cumplimiento normativo",
      text: "Asegurar que el proyecto cumple con NOM-001-SSA1 (condiciones sanitarias), NOM-002-SSA1 (sistemas de agua potable) y otras normas aplicables según el tipo de establecimiento.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Registro en sistema COFEPRIS",
      text: "Crear cuenta en el portal de COFEPRIS (sistema SAAUT) y capturar los datos del proyecto, establecimiento y responsables técnicos.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Presentación de solicitud",
      text: "Enviar la solicitud electrónica con toda la documentación digitalizada a través del portal SAAUT o entregar documentos en oficinas de COFEPRIS según la jurisdicción.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Inspección y verificación",
      text: "Personal de COFEPRIS realiza inspección del establecimiento para verificar cumplimiento de especificaciones técnicas y normas sanitarias. Plazo: hasta 30 días hábiles.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Resolución final",
      text: "COFEPRIS emite resolución aprobando la licencia sanitaria válida por 5 años. Si hay observaciones, se puede presentar plan de correcciones y reinspección.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "Portal SAAUT de COFEPRIS",
      url: "https://www.gob.mx/cofepris",
    },
    {
      "@type": "HowToTool",
      name: "Norma Oficial Mexicana NOM-001-SSA1",
    },
    {
      "@type": "HowToTool",
      name: "Asesoría especializada en regulación sanitaria",
    },
  ],
};

export const howToPermisoSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://www.perscon.com.mx/#howto-permiso",
  name: "Cómo obtener un permiso de construcción para establecimiento médico",
  description: "Proceso paso a paso para obtener permisos de construcción ante autoridades municipales en México",
  estimatedDuration: "P90D",
  totalTime: "P90D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Evaluación del proyecto",
      text: "Análisis de especificaciones de proyecto, ubicación y reglamentos municipales aplicables.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Tramitación municipal",
      text: "Presentación de solicitud y planos en municipio correspondiente, cumpliendo requisitos de alineamiento, construcción y sanitarios.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Inspecciones técnicas",
      text: "Autoridades municipales inspeccionan avance de obra verificando cumplimiento de planos y normatividad.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Licencia de terminación",
      text: "Solicitud de licencia final tras completar obra, con inspección final de autoridades.",
      image: "https://www.perscon.com.mx/og/og-default.webp",
    },
  ],
};

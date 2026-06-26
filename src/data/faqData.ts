export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const faqs: FaqItem[] = [
  {
    pregunta: '¿Qué es una licencia sanitaria COFEPRIS y cuándo la necesito?',
    respuesta:
      'Una licencia sanitaria COFEPRIS es la autorización oficial que emite la Comisión Federal para la Protección contra Riesgos Sanitarios para que un establecimiento médico opere legalmente en México. La necesitas si tu establecimiento realiza actos quirúrgicos, utiliza equipos de radiación diagnóstica, opera un banco de sangre o presta servicios de hemodiálisis. Sin ella, COFEPRIS puede ordenar la clausura del establecimiento.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda un trámite de licencia sanitaria ante COFEPRIS?',
    respuesta:
      'Los tiempos varían según el tipo de licencia y la complejidad del establecimiento. En general, los trámites toman entre 30 y 90 días hábiles desde la presentación del expediente. El factor más importante que retrasa los trámites es la documentación incompleta o con errores. Con Perscon, preparamos el expediente completo antes de presentarlo para eliminar observaciones y reducir tiempos.',
  },
  {
    pregunta: '¿Qué pasa si opero mi establecimiento médico sin licencia COFEPRIS?',
    respuesta:
      'Operar sin la licencia sanitaria correspondiente es una infracción grave a la Ley General de Salud. Las consecuencias incluyen multas de hasta 20,000 veces el salario mínimo, clausura temporal o definitiva del establecimiento, y responsabilidad penal en casos graves. COFEPRIS realiza verificaciones aleatorias y puede actuar ante denuncias de terceros.',
  },
  {
    pregunta: '¿Cuánto cuesta la asesoría de Perscon para un trámite COFEPRIS?',
    respuesta:
      'El costo de nuestra asesoría depende del tipo de licencia, la complejidad del establecimiento y el estado actual de la documentación. Ofrecemos una consulta inicial gratuita donde evaluamos tu caso y te damos una propuesta clara sin costos ocultos. Los derechos gubernamentales ante COFEPRIS son adicionales y varían según el trámite.',
  },
  {
    pregunta: '¿Pueden gestionar el trámite si mi establecimiento está fuera de la CDMX?',
    respuesta:
      'Sí. Gestionamos trámites en toda la República Mexicana. COFEPRIS tiene oficinas regionales en los principales estados y también recibe trámites de forma centralizada. Atendemos establecimientos en CDMX, Monterrey, Guadalajara, Puebla, Querétaro, Mérida y otras ciudades.',
  },
  {
    pregunta: '¿Necesito el Permiso Sanitario de Construcción si ya tengo el establecimiento construido?',
    respuesta:
      'Depende. El Permiso Sanitario de Construcción es obligatorio para construcciones nuevas, ampliaciones y remodelaciones significativas. Si tu establecimiento fue construido o remodelado sin este permiso, existen procedimientos de regularización ante COFEPRIS. Te asesoramos para determinar si aplica a tu situación y cómo proceder.',
  },
  {
    pregunta: '¿La licencia sanitaria tiene vigencia o necesita renovarse?',
    respuesta:
      'Las licencias sanitarias COFEPRIS para establecimientos médicos no tienen fecha de vencimiento fija, pero sí requieren actualización ante cambios importantes: ampliación de servicios, nuevos equipos, cambio de responsable sanitario, cambio de domicilio o modificaciones en la infraestructura. Te asesoramos sobre las obligaciones posteriores a la obtención de la licencia.',
  },
  {
    pregunta: '¿Qué normas técnicas debo cumplir para una clínica quirúrgica?',
    respuesta:
      'Las clínicas quirúrgicas deben cumplir con múltiples normas: NOM-001-SSA1 (condiciones sanitarias), NOM-002-SSA1 (sistemas de agua potable), NOM-025-SSA2 (iluminación y ruido), NOM-006-SSA2 (equipos médicos), entre otras. Nuestro equipo de ingenieros verifica que tus instalaciones cumplan con todas las especificaciones técnicas requeridas.',
  },
  {
    pregunta: '¿Cuál es el proceso paso a paso para obtener una licencia COFEPRIS?',
    respuesta:
      'El proceso incluye: (1) Preparación de documentación completa, (2) Diseño técnico que cumpla normas, (3) Registro en portal SAAUT, (4) Presentación de solicitud, (5) Inspección por COFEPRIS, (6) Trámite de observaciones (si aplica), (7) Emisión de licencia. Perscon te acompaña en cada paso garantizando cumplimiento.',
  },
  {
    pregunta: '¿Qué es un Responsable Sanitario y cuál es su rol?',
    respuesta:
      'El Responsable Sanitario es un profesional de la salud (médico, químico farmacéutico o enfermero) designado por el establecimiento para garantizar el cumplimiento de regulaciones sanitarias. Es la figura legal ante COFEPRIS y responsable de supervisar que se mantengan las condiciones sanitarias. Debe contar con cédula profesional vigente.',
  },
  {
    pregunta: '¿Qué establecimientos médicos necesitan licencia para radiación?',
    respuesta:
      'Todo establecimiento que utilice equipos de rayos X, tomografía, medicina nuclear o radioterapia requiere licencia específica para radiación. Esto incluye hospitales, clínicas, consultorios con rayos X, y laboratorios con fuentes radiactivas. La licencia requiere cumplimiento especial de normas de seguridad radiológica (NOM-020-SSA2).',
  },
  {
    pregunta: '¿Cuál es la diferencia entre Licencia Sanitaria y Permiso de Funcionamiento?',
    respuesta:
      'La Licencia Sanitaria COFEPRIS es a nivel federal y autoriza operación de servicios regulados. El Permiso de Funcionamiento municipal es a nivel local. Ambos son necesarios. COFEPRIS es quien regula servicios médicos específicos (quirúrgicos, radiología, bancos de sangre). Tu municipio regula el funcionamiento general del comercio/servicios en su territorio.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.respuesta,
    },
  })),
};
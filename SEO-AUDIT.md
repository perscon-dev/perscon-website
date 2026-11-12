# Auditoría SEO on-page — perscon.com.mx

Fecha: 2026-11-11 · Alcance: 42 páginas generadas por Astro (se auditó el HTML de `dist/` y el código fuente).

## Resumen ejecutivo

1. Base técnica sólida: `lang="es-MX"`, canonical, Open Graph, Twitter Cards, JSON-LD (Organization, WebSite, BreadcrumbList, FAQPage, HowTo) ya existen; 5 páginas de licencia tenían un segundo H1 dentro del contenido .md (corregido).
2. Problema más extendido: **20 páginas (15 ciudades, Casos de éxito y 3 de Proyectos) muestran el título con "| Perscon | Perscon"** y 20+ títulos pasan de 60 caracteres; casi todas las meta descriptions pasan de 160 (las 15 páginas de ciudad llegan a 233).
3. Las 6 páginas de licencia usan como H1 el nombre oficial del trámite ("Solicitud de Licencia Sanitaria para Establecimientos en que se practiquen…"), no la palabra clave; el H1 SEO ya existe en `licenciasSeo.ts` pero no se usa.
4. Hay contradicciones de rastreo: `/requisitos` (canonical sin slash) vs. sitemap `/requisitos/`; `privacidad` y `terminos` están en el sitemap pero bloqueadas en robots.txt; `terminos` no recibe ningún enlace interno.
5. Datos que requieren confirmación del cliente antes de tocarse (ver sección "Preguntas"): fechas inventadas en el schema, dirección/`priceRange` de Organization, direcciones de "delegaciones COFEPRIS" en las páginas de ciudad y cifras "+150 / 0 rechazadas".

## Tabla de hallazgos

Impacto: A = alto, M = medio, B = bajo. Líneas referidas al código antes de los cambios.

| # | Página | Problema | Imp. | Archivo:línea |
|---|--------|----------|------|---------------|
| 1 | Casos de éxito, Proyectos (3), 15 ciudades (20 páginas) | Título duplicado "… \| Perscon \| Perscon": la página ya incluye la marca y el Layout la vuelve a añadir | A | [Layout.astro:58](src/layouts/Layout.astro#L58); [casos-exito/index.astro:55](src/pages/casos-exito/index.astro#L55); [proyectos/index.astro:85](src/pages/proyectos/index.astro#L85); [ejecutivos/index.astro:73](src/pages/proyectos/ejecutivos/index.astro#L73); [obra/index.astro:77](src/pages/proyectos/obra/index.astro#L77); [ciudad/[ciudad].astro:27](src/pages/licencias-cofepris/ciudad/[ciudad].astro#L27) |
| 2 | 6 licencias, Home, Licencias, Requisitos, Guía, Proyectos | Títulos de 63–80 caracteres (se truncan en SERP); "2026" repetido en el título; palabra clave no siempre al inicio | A | [licenciasSeo.ts:520-585](src/data/licenciasSeo.ts#L520); [index.astro:12](src/pages/index.astro#L12); páginas listadas arriba |
| 3 | 6 licencias | H1 = nombre oficial largo (`data.nombre`); el H1 corto con keyword (`seo.h1`) solo se usa en og:title | A | [LicenciaHero.astro:80-83](src/components/licencias/LicenciaHero.astro#L80); [licencias-cofepris/[slug].astro:127](src/pages/licencias-cofepris/[slug].astro#L127) |
| 4 | Casi todas | Meta descriptions > 160 caracteres (licencias 158–173, guía 192, ejecutivos 195, obra 193, ciudades 213–233); varias sin llamada a la acción | A | cada página (`description=`); [ciudad/[ciudad].astro:28](src/pages/licencias-cofepris/ciudad/[ciudad].astro#L28) |
| 5 | /requisitos | Canonical y breadcrumb sin slash final (`/requisitos`) mientras el sitio y el sitemap usan `/requisitos/` | A | [requisitos/index.astro:149-150](src/pages/requisitos/index.astro#L149) |
| 6 | /privacidad, /terminos | Bloqueadas en robots.txt pero incluidas en sitemap (señal contradictoria; con Disallow Google no puede leer un noindex) | A | [public/robots.txt:8-9](public/robots.txt#L8); [astro.config.mjs](astro.config.mjs) |
| 7 | robots.txt | `Crawl-delay: 5` (Google lo ignora, Bing lo respeta y ralentiza el rastreo); archivo duplicado idéntico en `src/pages/robots.txt` | M | [public/robots.txt:12](public/robots.txt#L12); [src/pages/robots.txt](src/pages/robots.txt) |
| 8 | Licencias (6) | Schema `Article` con `datePublished: "2025-01-01"` (fecha inventada) y `dateModified` = fecha del build (cambia en cada deploy) | M | [licencias-cofepris/[slug].astro:164-165, 264-265](src/pages/licencias-cofepris/[slug].astro#L164) |
| 9 | Licencias (6) | `estimatedDuration: P60D` calculado con `parseInt("60 días hábiles")` (días naturales, y sugiere un plazo cierto); `availability: InStock` no aplica a un servicio | M | [licencias-cofepris/[slug].astro:216-220](src/pages/licencias-cofepris/[slug].astro#L216) |
| 10 | Todas | Encabezados del footer son `<h2>` ("Licencias COFEPRIS", "Empresa", "Recursos", "Cobertura Nacional"): ensucian el esquema de cada página | M | [Footer.astro:323,378,404,430](src/components/layout/Footer.astro#L323) |
| 11 | 15 ciudades | "Ciudad, Estado" repite el nombre cuando coinciden (p. ej. "Estado de México, Estado de México", "Puebla, Puebla"); 15 páginas casi idénticas (≈ 700 palabras de plantilla) | M | [ciudad/[ciudad].astro:28](src/pages/licencias-cofepris/ciudad/[ciudad].astro#L28) |
| 12 | /terminos | Página huérfana: ningún enlace interno | M | [Footer.astro](src/components/layout/Footer.astro) |
| 13 | /recursos/costos-tramites-cofepris | Solo 1 enlace interno entrante (desde /recursos/) | B | [LicenciaEnlaces.astro](src/components/licencias/LicenciaEnlaces.astro) |
| 14 | Casos de éxito | `<img>` sin `width`/`height`; el CSS ya reserva el espacio (`h-52`, contenedor `h-69`), por lo que no hay CLS real | B | [CasosExitoCard.astro:45](src/components/casos-exito/CasosExitoCard.astro#L45); [casos-exito/[slug].astro:229](src/pages/casos-exito/[slug].astro#L229) |
| 15 | Navbar / Footer | Logo con `alt="Perscon logo"` (poco descriptivo) y `width/height=36` que no corresponde a la imagen | B | [Navbar.astro:112](src/components/layout/Navbar.astro#L112); [Footer.astro:171](src/components/layout/Footer.astro#L171) |
| 16 | /nosotros | Meta description con cifras "+150 licencias obtenidas. 0 rechazadas" — afirmación absoluta no verificable y cercana a promesa de resultado | M | [nosotros/index.astro:44](src/pages/nosotros/index.astro#L44) |
| 17 | Todas | Organization: `address` con datos que parecen erróneos ("Lote Teléfo", localidad/estado invertidos), `priceRange: "$$$"`, `foundingDate`, `geo`, `sameAs` sin verificar | M | [Layout.astro:97-149](src/layouts/Layout.astro#L97) |
| 18 | 15 ciudades | Cada intro cita una "Delegación COFEPRIS" con dirección; varias parecen no corresponder a oficinas reales (p. ej. "Col. San Juan del Río" en Querétaro). Riesgo de información falsa | A | [licenciasSeo.ts:25-122](src/data/licenciasSeo.ts#L25) |
| 19 | Casos de éxito | Títulos largos (63–67) y sin palabra clave transaccional; son contenido real del cliente (no se tocan) | B | [content/casos-exito/*.md](src/content/casos-exito) |
| 20 | Todas | Fuentes: `Archivo`/`Archivo Narrow` se declaran en CSS pero no se cargan (no hay `@font-face` ni `<link>`); se muestra `system-ui`. Sin impacto en rendimiento, pero revisar si el diseño esperaba esas fuentes | B | [global.css:9-10](src/styles/global.css#L9) |
| 21 | Todas | GTM se inyecta con script inline asíncrono al inicio de `<head>`: no bloquea el render. Sin hallazgos | — | [Layout.astro:233](src/layouts/Layout.astro#L233) |
| 22 | Despliegue | `public/` publica `Dockerfile` y `favicon.zip` (visibles en producción) | B | [public/Dockerfile](public/Dockerfile), [public/favicon.zip](public/favicon.zip) |
| 24 | robots.txt | `Sitemap: …/sitemap.xml` apunta a una URL que **no existe**: el integrador genera `sitemap-index.xml` | A | [public/robots.txt:4](public/robots.txt#L4) |
| 25 | 404, /privacidad, /terminos, /requisitos | `<main>` anidado dentro del `<main>` del Layout (HTML inválido, dos landmarks main) | M | [404.astro:11](src/pages/404.astro#L11); [privacidad.astro:12](src/pages/privacidad.astro#L12); [terminos.astro:12](src/pages/terminos.astro#L12); [requisitos/index.astro:228](src/pages/requisitos/index.astro#L228) |
| 26 | Todas | `<iframe>` de GTM (noscript) sin `title` | B | [Layout.astro:301](src/layouts/Layout.astro#L301) |
| 23 | Sitemap | Sin `lastmod`; `priority`/`changefreq` son ignorados por Google (sin impacto) | B | [astro.config.mjs](astro.config.mjs) |

### Verificado sin hallazgos
- `<html lang="es-MX">`, `viewport`, favicons y manifest presentes en todas las páginas.
- Canonical, og:title/description/image/url y twitter:card en las 42 páginas (excepto el problema #5).
- 1 solo H1 en cada página; sin saltos H1→H3 dentro del contenido principal (solo el footer, #10).
- Todas las imágenes tienen `alt`; imágenes fuera de pantalla con `loading="lazy"`.
- JSON-LD parsea sin errores; FAQPage en /preguntas-frecuentes/ y en `responsable-sanitario`, HowTo en la guía, BreadcrumbList en todas.
- Sin enlaces internos rotos; slugs en minúsculas con guiones.
- No hay fuentes externas ni CSS/JS externo bloqueante.

## Correcciones priorizadas

**Alto (se aplican)**
1. Evitar el sufijo duplicado en `<title>` y reescribir títulos (≤ 60 caracteres con marca, keyword al inicio, sin "2026").
2. Reescribir meta descriptions (≤ 160) con beneficio real y CTA ("consulta gratuita", "revisión previa del expediente"), sin promesas de aprobación ni plazos.
3. H1 de licencias = `seo.h1` (keyword), conservando el nombre oficial visible en el texto de la página.
4. Canonical y breadcrumb de `/requisitos/` con slash final.
5. robots.txt/sitemap coherentes (y `Sitemap:` apuntando a `sitemap-index.xml`): privacidad y términos rastreables con `noindex, follow` y fuera del sitemap; sin `Crawl-delay`; eliminar el duplicado `src/pages/robots.txt`.

**Medio (se aplican)**
6. Quitar del schema las fechas inventadas/de build, el plazo calculado y `InStock`.
7. Footer: `<h2>` → `<p>` con las mismas clases (diseño idéntico).
8. Ciudades: evitar "X, X" en la descripción.
9. Enlazar `/terminos/` en el footer y `/recursos/costos-tramites-cofepris/` desde los recursos relacionados de cada licencia.
10. `width`/`height` en imágenes de casos de éxito; `alt` descriptivo del logo.
11. Quitar las cifras de la meta description de /nosotros/ (la cifra visible en la página queda pendiente de confirmación).

**Bajo (pendiente, no aplicado)**
- Errores de accesibilidad/HTML restantes: `aria-label` en elementos sin rol, `<div>` dentro de `<button>`, `<figcaption>` dentro de `<blockquote>`, espacios en teléfonos sin `&nbsp;`.

**Pendiente de decisión del cliente (no se tocó)**
12. Dirección, `priceRange`, `foundingDate`, `geo`, `sameAs` del schema Organization.
13. Direcciones de "Delegación COFEPRIS" en las 15 ciudades; valorar fusionar/reducir páginas de ciudad (contenido plantilla) o enriquecerlas con contenido real.
14. Cifras visibles (+150 licencias, 0 rechazadas, plazos y multas en FAQ/guía), homoclaves y NOM citadas: confirmar con la fuente oficial.
15. Fechas reales de publicación/actualización para reintroducir `datePublished`/`dateModified`.
16. Retirar `Dockerfile` y `favicon.zip` de `public/`; decidir si cargar Archivo / Archivo Narrow.

## Palabras clave
No se contó con herramientas de volumen de búsqueda (Search Console, Ahrefs, etc.); la asignación siguiente parte de las keywords del brief y de la intención de cada página, y conviene validarla con datos reales:

| Página | Keyword principal |
|---|---|
| Home | licencia sanitaria COFEPRIS para clínicas |
| /licencias-cofepris/ | licencias sanitarias COFEPRIS |
| licencia-actos-quirurgicos | licencia sanitaria actos quirúrgicos COFEPRIS |
| licencia-radiacion | licencia sanitaria fuentes de radiación |
| licencia-sanguinea | licencia sanitaria banco de sangre |
| licencia-hemodialisis | licencia sanitaria hemodiálisis |
| permiso-construccion | permiso sanitario de construcción COFEPRIS |
| /guia-tramites-cofepris/ | trámites COFEPRIS |
| /ciudad/* | licencia sanitaria COFEPRIS en {ciudad} |

## Actualización tras decisiones del cliente
- **Páginas de ciudad: se conservan (decisión revertida)**. Search Console muestra demanda real por ciudad (p. ej. "cofepris puebla" 119 impresiones, querétaro 59, mérida 53, cancún 42, monterrey 43, toluca 30, culiacán 28, león/guanajuato 50, tijuana 19). Se restauraron las 16 páginas con título/descripción corregidos y **sin las direcciones de "Delegación COFEPRIS"** (no verificadas). Pendiente: contenido propio y verificable por ciudad para evitar plantilla repetida.
- **Organization**: se quitaron dirección, geo, horario, `priceRange`, `foundingDate` y LinkedIn. Queda teléfono, correo, `areaServed: México` y Facebook (`facebook.com/perscon.mx`, el mismo del footer del sitio).
- **Cifras**: "+150 / +50 licencias" unificado a "+15"; se retiró "0 licencias rechazadas" (reemplazada por "Gratis · Consulta inicial").
- **Pendiente de confirmar**: "-40% reducción de tiempos" (licencias-page/stats.astro) y "Años en el sector" (+10 en Nosotros vs +5 en Home) son inconsistentes o sin respaldo.
- **Ciudades (diferenciación)**: sin datos de casos locales, cada página ahora tiene lista de municipios/zonas atendidas, FAQ visible (coincide con el FAQPage del schema; se retiró el rango "45–90 días"), texto sin direcciones de delegaciones, y la de Sinaloa enlaza al caso real de Mazatlán. Nuevas páginas: Toluca y Guanajuato (18 en total). Pendiente: contenido local verificable (casos, particularidades) cuando exista.
- **Años en el sector**: unificado a "+5" (Home y Nosotros).
- **Consultas reales de Search Console**: título/H1/descripción de transfusión ("transfusión sanguínea", COFEPRIS-09-025-E), permiso de construcción ("establecimientos médicos"), `/licencias-cofepris/` ("listado") y `/requisitos/` ("requisitos COFEPRIS") ajustados.
- **Dato a revisar**: el caso "Planos Clínica Munich" tiene ciudad y estado "Por definir".
- **Captación**: nueva página `/asesoria-licencias-sanitarias/` (por situación: abrir, actualizar, atender requerimiento; por tipo de licencia; qué incluye, sin garantías de resultado ni plazos). Bloque CTA (consulta gratuita + WhatsApp) al final del contenido de cada licencia (antes solo en hero y sidebar).
- **Artículos**: colección `articulos` + plantilla `/recursos/[slug]/`, listados automáticamente en `/recursos/`. Dos borradores (`borrador: true`, fuera de build y sitemap) con información tomada solo de contenido ya existente en el sitio; pendientes de aprobación.
- **Por confirmar**: la guía muestra "30–90 días hábiles" y "100% Gestionado" en su resumen.

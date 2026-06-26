/**
 * src/content/config.ts
 */

import { defineCollection, z } from 'astro:content';

const licenciasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string().max(90),
    description: z.string().max(160),
    textoCofepris: z.string(),
    nombre:      z.string(),
    norma:       z.string().optional(),
    tiempo:      z.string(),
    orden:       z.number(),
    aplica:      z.array(z.string()),
    requisitos:  z.array(z.string()),

    faq: z.array(z.object({
      pregunta:  z.string(),
      respuesta: z.string(),
    })).optional(),

    ogImage:  z.string().optional(),
    noindex:  z.boolean().default(false),
  }),
});

const casosExitoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string().max(70),
    description: z.string().max(160),
    empresa:     z.string(),
    sector:      z.enum([
      'cirugia-ambulatoria',
      'banco-de-sangre',
      'proyecto-obra',
      'proyecto-ejecutivo',
    ]),
    sectorLabel: z.string(),             
    ciudad:      z.string(),
    estado:      z.string(),
    imagen:      z.string(),
    tramite:     z.string(),            
    homoclave:   z.string().optional(), 
 
    reto:        z.string(),             
    solucion:    z.string(),           
    resultado:   z.string(),             
    metricas: z.array(z.object({
      valor:    z.string(),              
      etiqueta: z.string(),       
    })).min(2).max(3),
    testimonioTexto:  z.string().optional(),
    testimonioNombre: z.string().optional(),
    testimonioCargo:  z.string().optional(),
    featured:  z.boolean().default(false),
    orden:     z.number().default(99),
    ogImage:   z.string().optional(),
    noindex:   z.boolean().default(false),
  }),
});

export const collections = {
  licencias: licenciasCollection,
  'casos-exito': casosExitoCollection,
};
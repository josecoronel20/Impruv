

export interface CasoExito {
  slug: string
  url: string
  cliente: string
  industria: string
  fecha_de_inicio: string
  img_sitio_web: string
  leads_promedio_mensual_inicial: number
  contexto: string
  problemas: string[]
  objetivo: string[]
  estrategia: string[]
  solucion: string[]
  resultados_ultimo_mes: {
    clicks: number
    CTR: string
    conversiones: number
    tasa_conversion: string
    CPA_promedio: string
    inversion_mensual: string
  }
  impacto_negocio: string[]
  testimonio: {
    nombre: string
    cargo: string
    frase: string
  }
}

export const casosExito: CasoExito[] = [
  {
    slug: "arenadosLucho",
    url: "https://arenadoslucho.com",
    cliente: "Arenados Lucho",
    industria: "Preparación de superficies industriales",
    fecha_de_inicio: "2025-12-28",
    img_sitio_web:"/images/imagesProjects/arenadosLuchoScreenshot.png",
    contexto: "Empresa con trayectoria técnica pero sin posicionamiento digital. Dependía de contratistas habituales y no generaba demanda directa.",
    leads_promedio_mensual_inicial: 10,
    
    problemas: [
      "No contaba con presencia digital profesional ni canal propio de captación",
      "Dependía casi exclusivamente de contratistas habituales",
      "Recibía principalmente proyectos pequeños y esporádicos",
      "Ingresos inestables y sin previsibilidad mensual",
      "No tenía medición ni sistema estructurado de generación de oportunidades"
    ],
    
    objetivo: [
      "Aumentar el volumen de consultas de proyectos industriales",
      "Acceder a clientes de mayor envergadura",
      "Lograr un flujo constante y previsible de oportunidades",
      "Fortalecer la percepción profesional frente a empresas grandes"
    ],
    
    estrategia: [
      "Construir un canal propio de captación digital",
      "Reorientar el posicionamiento hacia el segmento industrial",
      "Captar demanda activa con intención de contratación",
      "Optimizar la experiencia digital para maximizar conversiones",
      "Implementar un sistema de medición para evaluar rendimiento"
    ],
    
    solucion: [
      "Desarrollo de sitio web profesional enfocado en conversión industrial",
      "Creación de landing pages específicas por servicio",
      "Implementación de campañas en Google Ads segmentadas por intención de búsqueda",
      "Optimización SEO para términos industriales relevantes",
      "Configuración de tracking de conversiones y formularios optimizados"
    ]
,    
    resultados_ultimo_mes: {
        clicks: 308        ,
        CTR: "10.04%",
        conversiones: 34,
        tasa_conversion: "7.14%",
        CPA_promedio: "ARS 8.235",
        inversion_mensual: "ARS 280.000"
 
    },
    
    impacto_negocio: [
      "Mayor volumen de consultas industriales",
      "Reducción de dependencia de contratistas habituales",
      "Pipeline de proyectos más previsible",
      "Mejor percepción de marca frente a empresas grandes"
    ],
    
    testimonio: {
      nombre: "Fabiana",
      cargo: "Administrativa",
      frase: "Pasamos de depender del boca a boca a recibir consultas constantes de empresas industriales."
    }
  }
]

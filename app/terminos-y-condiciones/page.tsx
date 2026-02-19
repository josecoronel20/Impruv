export const metadata = {
  title: "Términos y Condiciones | impruv Marketing",
  description:
    "Términos y condiciones de uso de los servicios de impruv Marketing. Lee nuestros términos antes de utilizar nuestros servicios.",
}

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
              Términos y Condiciones
            </h1>
            <p className="text-base text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Al acceder y utilizar el sitio web de impruv Marketing ("nosotros", "nuestro" o "la empresa") y nuestros
                servicios, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de
                estos términos, no debes utilizar nuestros servicios.
              </p>
              <p className="text-base text-foreground leading-[1.75]">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor
                inmediatamente después de su publicación en esta página. Es tu responsabilidad revisar periódicamente estos
                términos para estar al tanto de cualquier cambio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">2. Descripción del Servicio</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                impruv Marketing es una agencia de marketing digital que ofrece los siguientes servicios:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Diseño y desarrollo de sitios web orientados a conversión</li>
                <li>Gestión de campañas de Google Ads</li>
                <li>Consultoría en marketing digital y estrategias de captación</li>
                <li>Análisis y optimización de sitios web y campañas publicitarias</li>
                <li>Otros servicios relacionados con marketing digital según se acuerde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">3. Uso del Sitio Web</h2>
              <h3 className="text-xl font-semibold mb-3">3.1. Uso Permitido</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Puedes utilizar nuestro sitio web únicamente para fines legales y de acuerdo con estos términos. Está
                prohibido:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Utilizar el sitio de manera que viole cualquier ley o regulación aplicable</li>
                <li>Intentar acceder a áreas no autorizadas del sitio o sistemas relacionados</li>
                <li>Interferir o interrumpir el funcionamiento del sitio</li>
                <li>Transmitir virus, malware o código malicioso</li>
                <li>Realizar ingeniería inversa o intentar extraer el código fuente</li>
                <li>Utilizar robots, scripts automatizados o métodos similares sin autorización</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2. Contenido del Usuario</h3>
              <p className="text-base text-foreground leading-[1.75]">
                Al proporcionar información a través de nuestros formularios o comunicaciones, garantizas que la
                información es precisa, completa y no infringe derechos de terceros. Nos reservamos el derecho de
                rechazar o eliminar cualquier contenido que consideremos inapropiado o que viole estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Contratación de Servicios</h2>
              <h3 className="text-xl font-semibold mb-3">4.1. Propuesta y Aceptación</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                La contratación de nuestros servicios se realiza mediante:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75] mb-4">
                <li>Envío de una solicitud de cotización o consulta</li>
                <li>Revisión y aceptación de nuestra propuesta comercial</li>
                <li>Firma de contrato o acuerdo de servicios (si aplica)</li>
                <li>Pago según los términos acordados</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2. Precios y Pagos</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Los precios de nuestros servicios se establecen en cada propuesta comercial y pueden variar según el
                alcance del proyecto. Los términos de pago se especificarán en el acuerdo correspondiente. Todos los
                precios están expresados en la moneda indicada y pueden estar sujetos a impuestos aplicables.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3. Plazos y Entregables</h3>
              <p className="text-base text-foreground leading-[1.75]">
                Los plazos de entrega y los entregables específicos se establecerán en cada propuesta o contrato. Nos
                esforzamos por cumplir con los plazos acordados, pero no garantizamos tiempos específicos salvo que se
                establezca explícitamente en el acuerdo escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Obligaciones del Cliente</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Al contratar nuestros servicios, el cliente se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Proporcionar información precisa, completa y actualizada</li>
                <li>Colaborar de manera oportuna en el desarrollo del proyecto</li>
                <li>Proporcionar acceso necesario a sistemas, cuentas y recursos requeridos</li>
                <li>Realizar los pagos según los términos acordados</li>
                <li>Revisar y aprobar entregables en los plazos establecidos</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>No utilizar nuestros servicios para actividades ilegales o fraudulentas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Propiedad Intelectual</h2>
              <h3 className="text-xl font-semibold mb-3">6.1. Contenido del Sitio</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Todo el contenido del sitio web, incluyendo pero no limitado a textos, gráficos, logos, imágenes,
                software y código, es propiedad de impruv Marketing o sus licenciantes y está protegido por leyes de
                propiedad intelectual.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.2. Trabajos Realizados</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Respecto a los trabajos realizados para el cliente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>
                  Una vez completado el pago total, el cliente recibirá los derechos de uso del trabajo entregado según
                  lo acordado en el contrato
                </li>
                <li>
                  Nos reservamos el derecho de utilizar trabajos realizados (sin información confidencial) como ejemplos
                  en nuestro portafolio y materiales promocionales
                </li>
                <li>
                  Cualquier herramienta, metodología o conocimiento propietario utilizado en la prestación del servicio
                  permanece como nuestra propiedad intelectual
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                En la máxima medida permitida por la ley:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75] mb-4">
                <li>
                  No garantizamos resultados específicos de nuestras campañas o servicios. Los resultados pueden variar
                  según múltiples factores fuera de nuestro control
                </li>
                <li>
                  No seremos responsables por daños indirectos, incidentales, especiales o consecuentes derivados del
                  uso de nuestros servicios
                </li>
                <li>
                  Nuestra responsabilidad total no excederá el monto total pagado por el cliente por los servicios en
                  cuestión durante los últimos 12 meses
                </li>
                <li>
                  No garantizamos la disponibilidad ininterrumpida o libre de errores de nuestro sitio web o servicios
                </li>
              </ul>
              <p className="text-base text-foreground leading-[1.75]">
                El cliente es responsable de mantener copias de seguridad de su información y contenido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">8. Confidencialidad</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Nos comprometemos a mantener la confidencialidad de la información proporcionada por el cliente que sea
                marcada como confidencial o que, por su naturaleza, deba ser tratada como tal. Esta obligación de
                confidencialidad:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Se mantendrá vigente durante la prestación del servicio y después de su finalización</li>
                <li>
                  No se aplica a información que sea de dominio público, que recibamos de terceros sin restricciones, o
                  que debamos divulgar por requerimiento legal
                </li>
                <li>
                  Permite el uso de información agregada y anonimizada para fines de análisis y mejora de servicios
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">9. Cancelación y Terminación</h2>
              <h3 className="text-xl font-semibold mb-3">9.1. Cancelación por el Cliente</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                El cliente puede cancelar un servicio con un aviso previo según lo establecido en el contrato
                correspondiente. En caso de cancelación:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75] mb-4">
                <li>Se facturarán los servicios ya prestados hasta la fecha de cancelación</li>
                <li>Los pagos realizados por adelantado pueden estar sujetos a reembolso según los términos del contrato</li>
                <li>El cliente seguirá siendo responsable de los pagos pendientes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">9.2. Terminación por Nuestra Parte</h3>
              <p className="text-base text-foreground leading-[1.75]">
                Podemos terminar o suspender servicios inmediatamente si el cliente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Incumple estos términos o el contrato de servicios</li>
                <li>No realiza los pagos en los plazos acordados</li>
                <li>Utiliza nuestros servicios para actividades ilegales</li>
                <li>Realiza acciones que puedan dañar nuestra reputación o negocio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">10. Modificaciones del Servicio</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios
                en cualquier momento, con o sin previo aviso. No seremos responsables ante ti o terceros por cualquier
                modificación, suspensión o discontinuación de los servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">11. Enlaces a Terceros</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan solo
                para tu conveniencia. No tenemos control sobre el contenido de estos sitios y no asumimos responsabilidad
                por ellos. El acceso a sitios de terceros es bajo tu propio riesgo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">12. Indemnización</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Aceptas indemnizar y eximir de responsabilidad a impruv Marketing, sus afiliados, directores, empleados y
                agentes de cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos
                (incluyendo honorarios legales) que surjan de tu uso de nuestros servicios, violación de estos términos,
                o violación de cualquier derecho de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">13. Ley Aplicable y Jurisdicción</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de Argentina, sin dar efecto a
                cualquier principio de conflictos de leyes. Cualquier disputa relacionada con estos términos o nuestros
                servicios será sometida a la jurisdicción exclusiva de los tribunales competentes de Argentina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">14. Disposiciones Generales</h2>
              <h3 className="text-xl font-semibold mb-3">14.1. Acuerdo Completo</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Estos términos, junto con nuestra Política de Privacidad y cualquier contrato específico de servicios,
                constituyen el acuerdo completo entre tú y impruv Marketing respecto al uso de nuestros servicios.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">14.2. Divisibilidad</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Si alguna disposición de estos términos se considera inválida o inaplicable, las disposiciones restantes
                permanecerán en pleno vigor y efecto.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">14.3. Renuncia</h3>
              <p className="text-base text-foreground leading-[1.75]">
                El hecho de que no ejerzamos algún derecho o disposición de estos términos no constituirá una renuncia a
                tal derecho o disposición.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">15. Contacto</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos a través de:
              </p>
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <p className="text-base text-foreground leading-[1.75] mb-2">
                  <strong>impruv Marketing</strong>
                </p>
                <p className="text-base text-foreground leading-[1.75] mb-2">
                  Email:{" "}
                  <a
                    href="mailto:contacto@impruv.com"
                    className="text-primary hover:underline"
                  >
                    contacto@impruv.com
                  </a>
                </p>
                <p className="text-base text-foreground leading-[1.75]">
                  Puedes también utilizar nuestro{" "}
                  <a href="/contacto" className="text-primary hover:underline">
                    formulario de contacto
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

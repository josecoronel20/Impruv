export const metadata = {
  title: "Política de Privacidad | impruv Marketing",
  description:
    "Política de privacidad de impruv Marketing. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6 leading-[1.3]">
              Política de Privacidad
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Introducción</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                En impruv Marketing ("nosotros", "nuestro" o "la empresa"), nos comprometemos a proteger tu privacidad.
                Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información
                personal cuando utilizas nuestro sitio web y servicios.
              </p>
              <p className="text-base text-foreground leading-[1.75]">
                Al acceder o utilizar nuestro sitio web, aceptas las prácticas descritas en esta política. Si no estás
                de acuerdo con esta política, por favor no utilices nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">2. Información que Recopilamos</h2>
              <h3 className="text-xl font-semibold mb-3">2.1. Información que nos proporcionas</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75] mb-4">
                <li>Completas formularios de contacto en nuestro sitio web</li>
                <li>Te comunicas con nosotros por correo electrónico o teléfono</li>
                <li>Solicitas información sobre nuestros servicios</li>
                <li>Te suscribes a nuestro boletín informativo</li>
              </ul>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Esta información puede incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de la empresa o proyecto</li>
                <li>Sitio web</li>
                <li>Cualquier otra información que elijas proporcionar</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2. Información recopilada automáticamente</h3>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Cuando visitas nuestro sitio web, recopilamos automáticamente cierta información sobre tu dispositivo y
                tu uso del sitio, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Referencias de sitios web</li>
                <li>Fecha y hora de acceso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">3. Uso de la Información</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Responder a tus consultas y solicitudes</li>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
                <li>Personalizar tu experiencia en nuestro sitio web</li>
                <li>Analizar el uso del sitio y mejorar su funcionalidad</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Cookies y Tecnologías Similares</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Las cookies
                son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
              </p>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Recordar tus preferencias</li>
                <li>Analizar el tráfico y uso del sitio</li>
                <li>Mejorar la funcionalidad del sitio</li>
              </ul>
              <p className="text-base text-foreground leading-[1.75] mt-4">
                Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta
                que deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Compartir Información</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes
                circunstancias:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>
                  <strong>Proveedores de servicios:</strong> Podemos compartir información con proveedores de servicios
                  que nos ayudan a operar nuestro negocio (por ejemplo, servicios de hosting, análisis web)
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> Podemos divulgar información si es requerido por ley o para
                  proteger nuestros derechos legales
                </li>
                <li>
                  <strong>Con tu consentimiento:</strong> Podemos compartir información con tu consentimiento explícito
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Seguridad de los Datos</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método
                de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar
                una seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">7. Tus Derechos</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-[1.75]">
                <li>Acceder a tu información personal</li>
                <li>Rectificar información inexacta o incompleta</li>
                <li>Solicitar la eliminación de tu información personal</li>
                <li>Oponerte al procesamiento de tu información</li>
                <li>Solicitar la limitación del procesamiento</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="text-base text-foreground leading-[1.75] mt-4">
                Para ejercer estos derechos, puedes contactarnos a través de la información de contacto proporcionada
                al final de esta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">8. Retención de Datos</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
                Cuando ya no necesitemos tu información, la eliminaremos de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">9. Enlaces a Terceros</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las
                prácticas de privacidad o el contenido de estos sitios externos. Te recomendamos revisar las políticas de
                privacidad de cualquier sitio web que visites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">10. Menores de Edad</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información
                personal de menores. Si descubrimos que hemos recopilado información de un menor sin el consentimiento
                de los padres, tomaremos medidas para eliminar esa información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">11. Cambios a esta Política</h2>
              <p className="text-base text-foreground leading-[1.75]">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cualquier cambio
                publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Te
                recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos tu
                información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">12. Contacto</h2>
              <p className="text-base text-foreground leading-[1.75] mb-4">
                Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el
                tratamiento de tu información personal, puedes contactarnos a través de:
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

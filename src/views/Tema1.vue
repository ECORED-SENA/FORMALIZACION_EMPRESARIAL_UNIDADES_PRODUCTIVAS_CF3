<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Responsabilidades de las unidades productivas
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4(data-aos="fade-left")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                br
                br
                p En este apartado se exponen los temas referentes a la conceptualización del comerciante, las normas de los establecimientos comerciales, los derechos y deberes de los comerciantes.
                br
                br
            .col-lg-4
              figure
                img(src='@/assets/curso/img1.svg', style="width: auto").m-auto
    separador.mb-5
    #t_1_1
    .titulo-segundo
      h2 1.1 Comerciantes
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p Antes de entrar en detalle con las responsabilidades de las unidades productivas es necesario apropiarse del término que bajo la norma se establece para aquellas personas que consolidan una sociedad comercial, quienes pueden ejercer el comercio y quienes están inhabilitados para ejercer esta actividad. Este término es el de comerciante, según lo establecido en el Código de Comercio:
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Los comerciantes son personas que profesionalmente se ocupan en alguna de las actividades que la ley considera mercantiles. La calidad de comerciante se adquiere, aunque la actividad mercantil se ejerza por medio de apoderado, intermediario o interpuesta persona.
            i.fas.fa-quote-right
            p.d-flex.justify-content-center.mt-3 #[b Decreto 410 – Art. 10, 1971]

      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img2.svg', style="width: auto").m-auto
    p.mb-5 Por otra parte, toda persona que tenga la capacidad para contratar y obligarse es hábil para ejercer el comercio según las leyes comunes y, de la misma forma, todas aquellas que bajo las mismas leyes sean incapaces serán inhábiles para ejercer actividades comerciales. También es importante resaltar que los menores de edad habilitados podrán ejercer actividades de comercio y en el caso contrario, ellos deberán tener una autorización de sus representantes legales.
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
        h2.text-center.mb-4 Se considera que una persona se encuentra ejerciendo el comercio cuando:
        ul.lista-ul.ms-5
          li
            i.fas.fa-angle-right(style="color: #FEB62B")
            | Está inscrito en el registro mercantil.
          li
            i.fas.fa-angle-right(style="color: #FEB62B")
            | Tiene un establecimiento comercial abierto.
          li
            i.fas.fa-angle-right(style="color: #FEB62B")
            | Cuando por cualquier medio se anuncia al público.
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen')
        h2.text-center.mb-4 En cuanto a las que son inhábiles para ejercer el comercio están:
        ul.lista-ul.ms-5
          li
            i.fas.fa-angle-right
            | Comerciantes declarados en quiebra (hasta que obtengan su rehabilitación).
          li
            i.fas.fa-angle-right
            | Funcionarios de entidades oficiales y semioficiales (dependerá de sus funciones).
          li
            i.fas.fa-angle-right
            | Personas impedidas judicialmente para ejercer actividades comerciales.
    .row.justify-content-center(data-aos="fade-left")
      .col-8.p-4.bg-color1
        .color1
          p.mb-0 Las personas inhábiles que ejerzan la actividad comercial serán sancionadas por el juez civil del circuito del domicilio del infractor.
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Normas para los establecimientos comerciales
    p.mb-5 En este apartado es importante tener presente que en la Ley 232 de 1995 se establecen las normas para el funcionamiento de los establecimientos comerciales. Es preciso decir que ninguna autoridad podrá exigir licencia o permiso de funcionamiento para la apertura, según lo establecido en el Artículo 515 del Código de Comercio, y también se pueden observar las obligaciones que deben cumplir los establecimientos abiertos al público como se indica en el siguiente gráfico interactivo:
    .tarjeta.tarjeta--boton.p-4.mb-5
      PasosB.color-acento-contenido
        .row.align-items-center.mt-4
          .col-lg-6.order-2
            figure
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen')
          .col-lg-6.bg-color2.order-1
            .color2
              p.mb-0 Cumplir todas las normas referentes al uso del suelo, horario, ubicación, intensidad auditiva y destinación expedida por la autoridad competente (puede solicitar la expedición del concepto ante la entidad de planeación).
        .row.align-items-center.mt-4
          .col-lg-6.mb-4.mb-lg-0.bg-color2.ms-3
            .color2
              p.mb-0 Cumplimiento de las condiciones sanitarias (Ley 9 de 1979 y demás normas vigentes).
          .col-lg-5
            figure
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
        .row.align-items-center.mt-4
          .col-lg-6.order-2
            figure
              img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen')
          .col-lg-6.bg-color2.order-1
            .color2
              p.mb-0 Pagos por derechos de autor por obras musicales a las autoridades según lo establecido en la Ley 23 de 1982 y demás normas competentes.
        .row.align-items-center.mt-4
          .col-lg-6.mb-4.mb-lg-0.bg-color2.ms-3
            .color2
              p.mb-0 Matricula mercantil vigente de la Cámara de Comercio según la jurisdicción.
          .col-lg-5
            figure(style="margin-bottom: -24px;")
              img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
        .row.align-items-center.mt-4
          .col-lg-6.order-2
            figure
              img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
          .col-lg-6.bg-color2
            .color2.order-1
              p.mb-0 Comunicar sobre la apertura del establecimiento a las entidades territoriales como la oficina de planeación (Decreto 1879, Art. 4, 2008).
    .row.justify-content-center(data-aos="fade-left")
      .col-8.p-4.bg-color1
        .color1
          p.mb-0 Es importante resaltar que las autoridades policivas podrán verificar el cumplimiento de estos requisitos. El alcalde también es una figura pública que está en la potestad de actuar con quien no cumpla con los requisitos según lo establecido en el Código Contencioso Administrativo.
    .row.justify-content-center(data-aos="fade-left")
      .col-8.p-4.bg-color1
        .color1
          p.mb-0 A su vez, es de mencionar que aquellos servidores públicos que soliciten requisitos no previstos o autorizados por el legislador estarán incurriendo en una falta gravísima y sancionable, según lo establecido en el #[b Código Único Disciplinario].
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Deberes del comerciante
    p.mb-4 También conocidos como las obligaciones de los comerciantes establecidas en el Artículo 19 del Código de Comercio; dichos deberes son:
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img12.svg' style="position: absolute; max-width: 60%; left: 30px" alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Inscribirse o matricularse en el registro mercantil.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img13.svg' style="position: absolute; max-width: 60%; left: 30px" alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Inscribir en el registro mercantil todos los actos, libros y documentos (según lo establezca la norma) y llevar la contabilidad.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img14.svg' style="position: absolute; max-width: 60%; left: 30px" alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Llevar y conservar la correspondencia y demás documentos relacionados con sus negocios o actividades.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img15.svg' style="position: absolute; max-width: 60%; left: 30px" alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Denunciar ante el juez competente la cesación en el pago corriente de sus obligaciones mercantiles y abstenerse de ejecutar actos de competencia desleal.
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img11.svg', style="width: auto").m-auto
    separador.mb-5
    #t_1_4
    .titulo-segundo
      h2 1.4	Derechos del comerciante
    p.mb-4 De la misma forma como las unidades productivas, sociedades comerciales o empresarios deben cumplir con ciertos requisitos y deberes según lo planteado en el Código de Comercio, también adquieren derechos que les permite exigir en calidad de comerciante. Algunos de estos derechos son:
    .row.align-items-center.justify-content-center
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img16.svg', style="width: auto").m-auto
      .col-lg-6
        ul.lista-ul
          li
            i.fas.fa-angle-right(style="color: #0059D6")
            | La protección de su razón social o enseña comercial a nivel nacional (Registro Único Empresarial – RUE).
          li
            i.fas.fa-angle-right(style="color: #0059D6")
            | El acceso a programas de apoyo empresarial, estos pueden ser a nivel regional, nacional e internacional (microcréditos, etc.).
          li
            i.fas.fa-angle-right(style="color: #0059D6")
            | Efectuar funciones de reconocimiento fiscal, tributario y financiero a través del Registro Único Tributario (RUT).
          li
            i.fas.fa-angle-right(style="color: #0059D6")
            | Reconocimiento bancario expedido por la Cámara de Comercio (certificado de existencia y representación legal).
          li
            i.fas.fa-angle-right(style="color: #0059D6")
            | Facilidad de créditos bancarios y acceso al servicio público.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Obligaciones laborales y ambientales de las unidades productivas
    .row.justify-content-center(data-aos="fade-left").mb-5
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Ahora, se exponen las normativas vigentes de acuerdo con la legislación nacional, referente a las obligaciones laborales que se generan a partir de un acuerdo contractual entre los empleadores y trabajadores. Aquí se pueden identificar las obligaciones especiales del empleador respecto al trabajador y a las obligaciones ambientales de las unidades productivas.
            .col-lg-4
              figure
                img(src='@/assets/curso/img17.svg', style="width: auto").m-auto
    #t_2_1
    .titulo-segundo
      h2 2.1	Normatividad laboral en Colombia
    p.mb-5 De acuerdo con la legislación nacional sobre los derechos civiles, entre estos el derecho al trabajo contemplado en el Artículo 25 de la Constitución Política de Colombia (1991), también se encuentran otros cuerpos normativos que están encaminados a los derechos y deberes de los empleadores en Colombia, por ejemplo:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Artículo 13 de la Constitución Política de Colombia (CPC)").align-items-center
        .col-md-6.mb-4.mb-md-0
          p De los derechos fundamentales se parte del principio de igualdad y es de resaltar lo contemplado en el Artículo 13 de 1991, en el que “todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica”. 
          p.mb-0 Según lo anterior, toda persona independientemente de su nacionalidad tiene derecho al mismo trato y los empleadores deben cumplir con las mismas obligaciones laborales que una persona nacional, es decir, el empleador deberá realizar el registro de sus trabajadores extranjeros mediante el Ministerio del Trabajo por medio de la plataforma de Registro Único de Trabajadores Extranjeros – RUTEC.
        .col-md-6
          figure
            img(src='@/assets/curso/img18.svg', style="width: auto;").m-auto
      div(titulo="Artículo 25 de la Constitución Política de Colombia")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p De los derechos fundamentales se parte del derecho al trabajo contemplado en la Constitución Política de la siguiente forma: “el trabajo es un derecho y una obligación social y goza, en todas sus modalidades, de la especial protección del Estado. Toda persona tiene derecho a un trabajo en condiciones dignas y justas” (CPC, 1991).
            p.mb-0 A esto se suma el Artículo 26 en el que se menciona que toda persona es libre de escoger profesión u oficio, que se puede organizar y puede obtener títulos de idoneidad. Y se destaca la inspección y vigilancia por parte de las autoridades competentes para el ejercicio de las actividades profesionales.
          .col-md-6
            figure
              img(src='@/assets/curso/img19.svg', style="width: auto;").m-auto
      div(titulo="Código Sustantivo del Trabajo")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Su objetivo principal es el de lograr justicia en las relaciones que surgen entre empleadores y trabajadores, a raíz de una coordinación económica y equilibrio social. Para entrar en más detalle sobre la norma puede ingresar al siguiente enlace:
            a.anexo.mb-4.mb-lg-0(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Código Sustantivo del Trabajo
          .col-md-6
            figure
              img(src='@/assets/curso/img20.svg', style="width: auto;").m-auto
      div(titulo="Decreto 2351 de 1965")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En este decreto se encuentra lo referente a las conceptualizaciones sobre los representantes del empleador y solidaridad, se determina a partir de empleadores que tengan sucursales, la modalidad de contratistas independientes, la modalidad de simple intermediario y la responsabilidad solidaria. 
            p.mb-0 Del anterior decreto se conceptualiza al representante del empleador como el que ejerza funciones de dirección o administración, tales como directores, gerentes, administradores, síndicos o liquidadores, mayordomos y capitanes de barco, y quienes ejercitan actos de representación con la aquiescencia expresa o tácita del empleador.
          .col-md-6
            figure
              img(src='@/assets/curso/img21.svg', style="width: auto;").m-auto
      div(titulo="Ley 50 de 1990")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Esta ley introduce reformas al Código Sustantivo del Trabajo y se dictan otras disposiciones. En su Artículo 1° modifica el Artículo 23 del Código y menciona los elementos esenciales para la contratación mediante tres elementos: 
            p La actividad personal del trabajador, es decir, realizada por sí mismo.
            p.mb-0 La continuada subordinación o dependencia del trabajador respecto del empleador, que lo faculta para exigir el cumplimiento de órdenes, en cualquier momento, en cuanto al modo, tiempo o cantidad de trabajo, e imponer reglamentos, la cual debe mantenerse por todo el tiempo de duración del contrato. Todo ello sin que afecte el honor, la dignidad y los derechos mínimos del trabajador en concordancia con los tratados o convenios internacionales que sobre derechos humanos relativos a la materia obliguen al país; y un salario como retribución del servicio.
          .col-md-6
            figure
              img(src='@/assets/curso/img22.svg', style="width: auto;").m-auto
      div(titulo="Ley 100 de 1993")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Esta ley contempla o crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones. Desde la conceptualización de seguridad social integral contemplada en la norma se entiende como “el conjunto de instituciones, normas y procedimientos, de que dispone la persona y la comunidad para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad” (Ley 100 de 1993). 
            p.mb-4 Para mayor conocimiento de la norma acceda al siguiente enlace:
            a.anexo.mb-4.mb-lg-0(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Ley 100 de 1993
          .col-md-6
            figure
              img(src='@/assets/curso/img23.svg', style="width: auto;").m-auto
      div(titulo="Ley 797 de 2003")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En esta ley se reforman algunas disposiciones del sistema general de pensiones previstas en la Ley 100 de 1993 y se adoptan disposiciones sobre los Regímenes Pensionales exceptuados y especiales.
            p.mb-4 Para mayor amplitud de conocimiento sobre la norma puede acceder al siguiente enlace:
            a.anexo.mb-4.mb-lg-0(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0797_2003.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web]. Ley 797 de 2003
          .col-md-6
            figure
              img(src='@/assets/curso/img24.svg', style="width: auto;").m-auto
    separador.mb-5
    #t_2_2
    .titulo-segundo
      h2 2.2 Obligaciones especiales del empleador
    p.mb-5 Están contempladas en el Artículo 57 del Código Sustancioso del Trabajo, en el que se estipula lo siguiente:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="l")
          .row.align-items-center
            .col-md-4.mb-4.mb-md-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/img25.svg', style="width: auto;").m-auto
            .col-md-8
              p Poner a disposición de los trabajadores los instrumentos adecuados y las materias primas necesarias para la realización de las labores, proporcionando espacios apropiados y elementos adecuados de protección contra los accidentes y enfermedades profesionales, que garanticen la seguridad y la salud de los empleados.
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              p.text-start Prestar los primeros auxilios en caso de accidente o de enfermedad, pagar la remuneración pactada en las condiciones, períodos y lugares convenidos, guardar absoluto respeto a la dignidad personal del trabajador, a sus creencias y sentimientos, y conceder al trabajador las licencias reconocidas por la ley.
            .col-md-4
              figure(data-aos="fade-up")
                img(src='@/assets/curso/img26.svg', style="width: auto;").m-auto
          .row.align-items-center
            .col-md-4.mb-4.mb-md-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/img27.svg', style="width: auto;").m-auto
            .col-md-8
              p Al finalizar el contrato deberá dar al trabajador la certificación en que conste el tiempo de servicio, la índole de la labor y el salario devengado, e igualmente, si el trabajador lo solicita, hacerle practicar el examen sanitario y darle certificación sobre el particular, si al ingreso o durante la permanencia en el trabajo hubiere sido sometido a un examen médico.
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              p.text-start Pagar al trabajador los gastos razonables de venida y de regreso, si para prestar sus servicios lo hizo cambiar de residencia, salvo si la terminación del contrato se origina por culpa o voluntad del trabajador y, cumplir el reglamento y mantener el orden, la moralidad y el respeto a las leyes.
            .col-md-4
              figure(data-aos="fade-up")
                img(src='@/assets/curso/img28.svg', style="width: auto;").m-auto
          .row.align-items-center
            .col-md-4.mb-4.mb-md-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/img29.svg', style="width: auto;").m-auto
            .col-md-8
              p Conceder al trabajador en caso de fallecimiento de su cónyuge, compañero o compañera permanente o de un familiar hasta el grado segundo de consanguinidad, primero de afinidad y primero civil, una licencia remunerada por luto de cinco (5) días hábiles, cualquiera sea su modalidad de contratación o de vinculación laboral.
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              p.text-start Conceder en forma oportuna a la trabajadora en estado de embarazo, la licencia remunerada consagrada en el numeral 1 del Artículo 236, de forma tal que empiece a disfrutarla de manera obligatoria una semana antes o dos semanas antes de la fecha probable del parto, según decisión de la futura madre conforme al certificado médico al que se refiere el numeral 3 del citado Artículo 236.
            .col-md-4
              figure(data-aos="fade-up")
                img(src='@/assets/curso/img30.svg', style="width: auto;").m-auto
        .tarjeta.color-primario.p-3(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/img31.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Obligaciones especiales del empleador   [ Código Sustancioso del Trabajo]
                  p.text-small Para ampliar los conocimientos sobre la norma puede acceder  al siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo_pr001.html" target="_blank")
                    span Ver
                    i.fas.fa-link(style="color: #12263F !important;")
    separador.mb-5
    #t_2_3
    .titulo-segundo
      h2 2.3 Prestaciones sociales, seguridad social y otros beneficios contractuales
    p.mb-5 Además de las obligaciones salariales, el empleador debe cumplir con otros aspectos importantes que establece la norma ante las prestaciones sociales, seguridad social y otros beneficios contractuales, tal como se muestra en el siguiente gráfico interactivo:
    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="28%" y="14%")
        p.mb-0 Las empresas pueden realizar contratos de trabajo y estos pueden ser de término fijo o indefinido de acuerdo con la duración, a su vez pueden pactarse de manera verbal o escrita. Es de resaltar que una vinculación laboral por medio de contrato genera al empleador el pago de una serie de obligaciones.
      .tarjeta.color-acento-botones.p-3(x="22%" y="50%")
        p Deberá realizar el pago de las prestaciones sociales y aportes parafiscales.
        p.mb-0 En las prestaciones sociales se encuentran beneficios como la prima de trabajo, las cesantías, los intereses a las cesantías y las vacaciones. Estos deberán ser liquidados y pagados por el empleador y está contemplado en los Artículos 186 y 306 del Código Sustantivo del Trabajo y la Ley 50 de 1990.
      .tarjeta.color-acento-botones.p-3(x="27%" y="86%")
        p Según lo contemplado en la Ley 100 de 1993, el empleador estará obligado a afiliar y pagar la seguridad social y los parafiscales a cada trabajador. Es preciso mencionar que el no cumplimiento de la norma puede acarrear una sanción por parte de UGPP y del Ministerio del Trabajo, demandas laborales y rechazo del pago de incapacidades médicas.
        p.mb-0 Aquí es importante tener en cuenta el Decreto 558 de 2020 que se estableció mediante el marco de emergencia sanitaria causada por el Covid-19.
      .tarjeta.color-acento-botones.p-3(x="74%" y="14%")
        p Según lo establecido en el Artículo 230 el empleador debe cancelar la dotación cada cuatrimestre (abril, agosto, diciembre) a aquellos trabajadores que devengan hasta dos salarios mínimos. Estos deberán incluir a trabajadores que lleven hasta el momento tres meses de trabajo. 
        p.mb-0 Por otra parte, es importante mencionar que la dotación no hace referencia a elementos de protección personal puesto que son diferentes, la primera está sujeta al salario del trabajador y la segunda se debe proveer sin excepción alguna.
      .tarjeta.color-acento-botones.p-3(x="80%" y="50%")
        p Referente al auxilio de transporte, los trabajadores que devengan hasta dos salarios mínimos tendrán derecho a este auxilio. Es importante mencionar que el empleador no está obligado a pagar cuando se superan los dos salarios mínimos o cuando el trabajador no tiene la obligación de desplazarse (ejemplo: teletrabajo, autorización de licencias, incapacidad y vacaciones), lo cual está ratificado por el Concepto 02EE2020410600000024952 del 10-04-2020.
      .tarjeta.color-acento-botones.p-3(x="74%" y="86%")
        p.mb-0 En cuanto a la incapacidad médica se pueden identificar dos tipos: de origen laboral o de origen común, esto es importante identificarlo, pues dependiendo de la incapacidad se indica el responsable del pago y el valor a liquidar.  Es importante resaltar que el empleador está obligado a incluir en la nómina los valores de la incapacidad sin haber recibido el reembolso por parte de la Empresa Prestadora de Salud (EPS), pues no se puede dejar sin pago al trabajador.
    separador.mb-5
    #t_2_4
    .titulo-segundo
      h2 2.4 Normatividad ambiental
    p En función de las obligaciones ambientales que deben cumplir las empresas se encuentran enmarcadas desde la parte normativa por medio de diferentes leyes que buscan la prevención de impactos al medio ambiente; ante esta necesidad surge la Norma ISO 14001 en cumplimiento de la legislación ambiental. 
    p.mb-5 Finalmente, se mencionan algunas leyes ambientales que se deberán tener presentes al momento de consolidar una unidad productiva.
    .row.align-items-start
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img33.svg', style="width: auto;").m-auto
      .col-lg-6
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Registro Cámara de Comercio")
            .col-12
              p.mb-0 Deberá solicitar los formularios de inscripción, dependiendo del tipo de empresa o sociedad comercial. 
          .row(numero="2" titulo="Realizar inscripción del RUT")
            .col-12
              p Se debe registrar en el Registro Único Tributario (RUT) y obtener el NIT o Número de Identificación Tributaria, esto se realiza en la DIAN para tramitar en la Cámara de Comercio.
          .row(numero="3" titulo="Elaborar documento de constitución")
            .col-12
              p.mb-0 Se puede realizar minuta ante notario y esta será revisada y aprobada, o también por medio de documento privado (Art. 22 Ley 1014 de 2006) según el Decreto 4463 de 2006.
          .row(numero="4" titulo="Diligenciar formulario de registro único empresarial")
            .col-12
              p Aquí se debe diligenciar toda la información del Registro Mercantil y de las entidades encargadas, entre los trámites se tienen:
              ul.lista-ul
                li
                  i.fas.fa-angle-right(style="color: #0059D6")
                  | Registro del establecimiento comercial (pueden ser los que quieran).
                li
                  i.fas.fa-angle-right(style="color: #0059D6")
                  | Adquirir la Matrícula Mercantil de su unidad productiva.
                li
                  i.fas.fa-angle-right(style="color: #0059D6")
                  | Certificado de existencia y representación legal (Matrícula Mercantil).
                li
                  i.fas.fa-angle-right(style="color: #0059D6")
                  | Cancelar derechos correspondientes de la Cámara de Comercio y solicitar el registro de libros exigidos por la ley.
                li
                  i.fas.fa-angle-right(style="color: #0059D6")
                  | Matrícula de Industria y Comercio ante la Secretaría de Hacienda Municipal.
              p.mb-0 Una vez constituida la unidad productiva se notifica a los entes de vigilancia y control de su registro.

</template>

<script>
export default {
  name: 'Tema2',
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

export default {
  global: {
    componenteFormativo:
      'Control, seguimiento y obligaciones legales de unidades productivas',
    descripcionCurso:
      'Los temas tratados en este componente de formación permiten identificar y conocer en primer lugar, las responsabilidades laborales y en segundo lugar, las obligaciones laborales y ambientales de las unidades productivas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Responsabilidades de las unidades productivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Comerciantes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normas para los establecimientos comerciales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Deberes del comerciante',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Derechos del comerciante',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Obligaciones laborales y ambientales de las unidades productivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normatividad laboral en Colombia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Obligaciones especiales del empleador',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Prestaciones sociales, seguridad social y otros beneficios contractuales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Normatividad ambiental',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Código Sustantivo del Trabajo (C.S.T.). Junio 7 de 1951 (Colombia). ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const]. Art. 13. 20 de julio  de 1991 (Colombia). ',
      link:
        'http://www.secretariasenado.gov.co/index.php/constitucion-politica',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const]. Art. 25. 20 de julio de 1991 (Colombia).',
    },
    {
      referencia:
        'Decreto 2351 de 1965. [Presidente de la República de Colombia]. Por el cual se hacen unas reformas al Código Sustantivo del Trabajo. Septiembre 4 de 1965. ',
      link: 'https://norcolombia.ucoz.com/DECRETOS/DECRETO_2351_DE_1965.pdf',
    },
    {
      referencia:
        'Ley 50 de 1990. Por la cual se introducen reformas al Código Sustantivo del Trabajo y se dictan otras disposiciones. Diciembre 28 de 1990. DO. N° 39618. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=281',
    },
    {
      referencia:
        'Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. N° 41148. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html',
    },
    {
      referencia:
        'Ley 797 de 2003. Por la cual se reforman algunas disposiciones del sistema general de pensiones previsto en la Ley 100 de 1993 y se adoptan disposiciones sobre los Regímenes Pensionales exceptuados y especiales. Enero 29 de 2003. DO. N° 45079. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0797_2003.html',
    },
  ],
  glosario: [
    {
      termino: 'Comerciante',
      significado:
        'persona que comercia y a quien son aplicables las especiales leyes mercantiles. ',
    },
    {
      termino: 'Obligaciones',
      significado:
        'vínculo que sujeta a hacer o abstenerse de hacer algo, establecido por precepto de ley, por voluntario otorgamiento o por derivación recta de ciertos actos.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'capacidad existente en todo sujeto activo de derecho para reconocer y aceptar las consecuencias de un hecho realizado libremente.',
    },
  ],
  complementario: [
    {
      texto:
        'Constitución Política de Colombia [Const]. Art. 13. 20 de julio  de 1991 (Colombia).',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/index.php/constitucion-politica',
    },
    {
      texto:
        'Código Sustantivo del Trabajo (C.S.T.). Junio 7 de 1951 (Colombia).',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      texto:
        'Decreto 2351 de 1965. [Presidente de la República de Colombia]. Por el cual se hacen unas reformas al Código Sustantivo del Trabajo. Septiembre 4 de 1965.',
      tipo: 'Página web',
      link: 'https://norcolombia.ucoz.com/DECRETOS/DECRETO_2351_DE_1965.pdf',
    },
    {
      texto:
        'Ley 50 de 1990. Por la cual se introducen reformas al Código Sustantivo del Trabajo y se dictan otras disposiciones. Diciembre 28 de 1990. DO. N° 39618.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=281',
    },
    {
      texto:
        'Ley 100 de 1993. Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. N° 41148.',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html',
    },
    {
      texto:
        'Ley 797 de 2003. Por la cual se reforman algunas disposiciones del sistema general de pensiones previsto en la Ley 100 de 1993 y se adoptan disposiciones sobre los Regímenes Pensionales exceptuados y especiales. Enero 29 de 2003. DO. N° 45079.',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0797_2003.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria de la Empresa y los Servicios - CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Oscar Guevara',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y metrología - Regional Bogotá',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Arévalo',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

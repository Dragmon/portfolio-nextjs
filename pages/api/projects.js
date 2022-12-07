export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name_project: 'Konfío - Gestión',
      url_name_project: 'konfio-gestion',
      url_images:
        'https://myimages.carlosgperez.com/portfolio/projects/gestion.png',
      project_images: [
        {
          id: 1,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/gestion_home.png',
          name_images: 'Gestión Home',
        },
        {
          id: 2,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/gestion_factura.png',
          name_images: 'Gestión Factura',
        },
        {
          id: 3,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/gestion_facturas.png',
          name_images: 'Gestión Facturas',
        },
      ],
      description:
        'Gestionix es la empresa que adquirió Konfío para integrar su sistema de ERP, para ofrecer a sus usuarios una plataforma que le permita administrar sus actividades del día a día, convirtiéndose en el sistema Konfío Gestión./Este sistema fue desarrollado por Gestionix con las tecnologías de .NET, JavaScript, jQuery y VueJS, al ser adquirida por Konfío se realiza el proceso para integrar la plataforma a los servicios que ofrece Konfío e iniciar una migración al stack tecnológico de Konfío.',
      link: 'https://konfio.mx/sistema-erp/',
      technologies: [
        { name: 'JavaScript' },
        { name: 'jQuery' },
        { name: 'VueJs' },
        { name: 'ReactJs' },
        { name: 'React Router' },
        { name: 'Github' },
        { name: 'GitLab' },
      ],
      repository: '',
    },
    {
      id: 2,
      name_project: 'Babysitter',
      url_name_project: 'babysitter',
      url_images:
        'https://myimages.carlosgperez.com/portfolio/projects/babysitter.png',
      project_images: [
        {
          id: 1,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/babysitter_home.png',
          name_images: 'Babysitter Home',
        },
      ],
      description:
        'Proyecto de Platzi Master en equipo para desarrollar una aplicación web la cual permita la contratación de una niñera en base a la ubicación del usuario.',
      link: 'https://babysitter-project.vercel.app/',
      technologies: [
        { name: 'ReactJs' },
        { name: 'React Router' },
        { name: 'JavaScript' },
        { name: 'Auth0' },
        { name: 'Firebase' },
        { name: 'Eslint' },
        { name: 'Prettier' },
        { name: 'Standar Js' },
        { name: 'Husky' },
        { name: 'Vercel' },
      ],
      repository: 'https://github.com/Dragmon/front-babysitter',
    },
    {
      id: 3,
      name_project: 'Televisa Connect',
      url_name_project: 'connect',
      url_images:
        'https://myimages.carlosgperez.com/portfolio/projects/app_connect.png',
      project_images: [
        {
          id: 1,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/app_connect_home.png',
          name_images: 'Connect Home',
        },
      ],
      description:
        'Aplicación móvil, desarrollada para cubrir las necesidades del personal de Televisa, para sus actividades del día a día./ Esta aplicación cuenta con las funcionalidades de notificación, buscador, apertura de contenido y videos',
      technologies: [
        { name: 'ReactJs' },
        { name: 'React Native' },
        { name: 'JavaScript' },
      ],
      link: '',
      repository: 'https://github.com/Dragmon/app-connect',
    },
    {
      id: 4,
      name_project: 'Televisa Networks',
      url_name_project: 'televisa',
      url_images:
        'https://myimages.carlosgperez.com/portfolio/projects/televisa.png',
      project_images: [
        {
          id: 1,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/televisa_home.png',
          name_images: 'Televisa Home',
        },
      ],
      description:
        'Sitio web creado para mostrar lo más relevante de la programación disponible para los clientes de Televisa.',
      technologies: [
        { name: 'Wordpress' },
        { name: 'HTML' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
      ],
      link: 'https://televisa-networks.com/',
      repository: '',
    },
    {
      id: 5,
      name_project: 'Abilia',
      url_name_project: 'abilia',
      url_images:
        'https://myimages.carlosgperez.com/portfolio/projects/abilia.png',
      project_images: [
        {
          id: 1,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/abilia_home.png',
          name_images: 'Abilia Home',
        },
      ],
      description:
        'Sitio web que muestra a los usuarios las actividades de la empresa, sus objetivos y la información correspondiente a cada una de sus unidades disponibles.',
      link: 'https://www.abilia.mx/',
      technologies: [
        { name: 'Hubspot' },
        { name: 'HTML' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
      ],
      repository: '',
    },
    {
      id: 6,
      name_project: 'Marhnos',
      url_name_project: 'marhnos',
      url_images:
        'https://myimages.carlosgperez.com/portfolio/projects/marhnos.png',
      project_images: [
        {
          id: 1,
          url_images:
            'https://myimages.carlosgperez.com/portfolio/projects/marhnos_home.png',
          name_images: 'Marhnos Home',
        },
      ],
      description:
        'Sitio web que muestra a los usuarios las actividades de la empresa, sus objetivos y la información correspondiente a cada una de sus unidades disponibles.',
      link: 'https://marhnoshabitat.mx/',
      technologies: [
        { name: 'Hubspot' },
        { name: 'HTML' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
      ],
      repository: '',
    },
  ]);
}

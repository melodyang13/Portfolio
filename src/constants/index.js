export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Pathora.AI - Capstone Project',
      desc: 'PWA | Front End Developer and UI/UX Designer',
      subdesc:
        'A Progressive Web Application for Classifying Microscopic Skin Cancer Images using YOLOv8 , developed using MERN Stack ',
      href: '/currentlyunavailable.html',  // TODO: add link
      texture: 'textures/project/project1.mp4',
      logo: 'assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: 'assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Node.js',
          path: 'assets/node.svg',
        },
        {
          id: 4,
          name: 'MonogoDB',
          path: 'assets/mongo.svg',
        },
        {
          id: 5,
          name: 'Big Three',
          path: 'assets/bigthree.svg',
        },
      ],
    },
    {
      title: 'Web Technologies: phHits',
      desc: 'Video Streaming Website | Front End Developer',
      subdesc:
        'Made use of Figma to design the interface and used HTML, CSS , and JS to create the front-end module',
      href: 'https://melodyang13.github.io/phHits', //TODO: add link
      texture: 'textures/project/project2.mp4',
      logo: 'assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: 'assets/spotlight2.png',
      tags: [
       
        {
          id: 1,
          name: 'Node.js',
          path: 'assets/node.svg',
        },
        {
          id: 2,
          name: 'Big Three',
          path: 'assets/bigthree.svg',
        },
        {
          id: 3,
          name: 'PHP',
          path: 'assets/php.svg',
        },
        {
          id: 4,
          name: 'MySQL',
          path: 'assets/sql.svg',
        },
        {
          id: 5,
          name: 'Figma',
          path: 'assets/figma.svg',
        },
      ],
    },
    {
      title: 'Wordy Game',
      desc: 'Java Application | Developer and UI Designer',
      subdesc:
        'A multi-player spelling game, where the player with the longest word wins ',
      href: 'https://github.com/melodyang13/wordygame',
      texture: 'textures/project/project3.mp4',
      logo: 'assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#0d0149',
        background:
          'linear-gradient(0deg, #0d0149, #3f307b), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid #3f307b',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: 'assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Java',
          path: 'assets/java.svg',
        },
        {
          id: 2,
          name: 'Python',
          path: 'assets/python.svg',
        },
        {
          id: 3,
          name: 'SQL',
          path: 'assets/sql.svg',
        },
        {
          id: 4,
          name: 'WAMP',
          path: 'assets/wamp.png',
        },
        {
          id: 5,
          name: 'Figma',
          path: 'assets/figma.svg',
        },
        {
          id: 6,
          name: 'Canva',
          path: 'assets/canva.svg',
        },
      ],
    },
    {
      title: 'Lucida',
      desc: ' Java Application | Developer',
      subdesc:
        'An employee attendance monitoring system that tracks the status of employees in real-time',
      href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
      texture: 'textures/project/project4.mp4',
      logo: 'assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: 'assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Java',
          path: 'assets/java.svg',
        },
        {
          id: 2,
          name: 'Figma',
          path: 'assets/figma.svg',
        },
      ],
    },
    {
      title: 'SLU SAMCIS Organizations',
      desc: 'Website| Web Developer and UI UX Designer',
      subdesc:
        'Website that details about the school organizations available in SLU SAMCIS, Used HTML and CSS to create a visually appealing and user-friendly interface.',
      href: 'https://melodyang13.github.io/sluorgs/',
      texture: 'textures/project/project5.mp4',
      logo: 'assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: 'assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Big Three',
          path: 'assets/bigthree.svg',
        },
        {
          id: 2,
          name: 'Figma',
          path: 'assets/figma.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'TJ Broz Laundry Shop',
      pos: 'Front End Developer',
      duration: 'Jun - Aug 2024',
      title: "Loyalty Point System Web Application that allows customers to collect stickers for a free laundry service. Made use of React, HTML, CSS, and JavaScript to create a functional and user-friendly interface.",
      icon: 'assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'G&C Real Estate Services',
      pos: 'UI Designer',
      duration: 'Jun - Jul 2024',
      title: "Real Estate Services Web App Design. Made use of Figma to create a visually appealing and user-friendly interface.",
      icon: 'assets/figma.svg',
      animation: 'salute',
    },
  ];
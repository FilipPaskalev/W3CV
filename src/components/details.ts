import ICourses from '../interfaces/iCourses';
import IDegree from '../interfaces/iDegree';

export namespace DETAILS {
  export const PERSONAL = {
    NAME: {
      FIRST: 'FIRSTNAME',
      FAMILY: 'SECONDNAME'
    },
    PHONE_NUMBER: '+44 1234 567 899',
    EMAIL: 'paskalevfilip@gmail.com',
    ADDRESS: {
      STREET: 'STREETNAME',
      TOWN: 'Birmingham',
      POSTCODE: 'POSTCODE'
    },
    AGE: 'AGE',
    PROFESSION: 'Software developer'
  };

  export const SOCIAL = {
    FACEBOOK: 'https://www.facebook.com/FilipPaskalev/',
    LINKEDIN: 'https://www.linkedin.com/in/filip-paskalev-645a38203/',
    GITHUB: 'https://github.com/FilipPaskalev'
  };

  export const SKILLS = {
    TECHNOLOGIES_SKILLS: [
      'Object Orientated Programming and OO design',
      'Knowledge of web development and mobile applications',
      'Knowledge in design patterns',
      'Database design & implementation',
      'Understanding SDLC',
      'Analytical and methodological thinking',
      'Able to work as a member of a team or independently',
      'Strong problem-solving skills',
      'Agile'
    ],
    TECHNICAL_SKILLS: [
      'Java',
      'TypeScript',
      'JavaScript',
      'JavaFX',
      'FormsFX',
      'ControlsFX',
      'React Native',
      'Redux',
      'React Navigation',
      'XML',
      'XSD',
      'XSLT',
      'FXML',
      'JSX',
      'Autodesk Maya',
      'Photoshop',
      'AdobeXD',
      'PL/SQL',
      'SQL',
      'HTML5',
      'CSS3',
      'LESS',
      '3D modelling',
      'Git',
      'Bash'
    ],
    SOFT_SKILLS: [],
    OTHER_SKILLS: []
  };

  export const DEGREE: IDegree[] = [
    {
      degree: 'Masters',
      subject: 'MSc Advanced Computer Science',
      institute: 'Birmingham City University',
      location: 'Birmingham, UK',
      grade: 'Merit',
      courses: [
        'Research Methods and Project Management',
        'Advanced Data Science with Python',
        'Advanced Mobile Computing with React Native & Mongo DB',
        'Semantic Web and Knowledge Engineering',
        'Service Oriented Architecture with Java & C#',
        'Advanced Databases with Oracle DB'
      ]
    },
    {
      degree: 'Bachelor',
      subject: 'Bachelor at Counteraction to crime and public order protection',
      institute: 'University of Varna "Chernorizec Hrabur"',
      location: 'Varna, Bulgaria',
      grade: '2:1',
      courses: ['Crime and maintaining public order', 'Specialising in Criminal Law']
    },
    {
      degree: 'College',
      subject: 'Software Development Certification',
      institute: 'College "Harmonia"',
      location: 'Sofia, Bulgaria',
      grade: 'First-class',
      courses: ['Basics of C++', 'HTML & CSS', 'Basics of Prolog', 'Designing a database with Access']
    },
    {
      degree: 'High school',
      subject: 'Foreign Languages Secondary School',
      institute: 'Alexander S. Pushkin',
      location: 'Varna, Bulgaria',
      grade: 'Good',
      courses: ['Russian language', 'English language', 'Information technology']
    }
  ];

  export const COURSES: ICourses[] = [
    {
      year: 2017,
      name: '3D Animation for the Gaming Industry Modeling and Texturing Part 3',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description:
        '3D sculpting, animation, and texturing of realistic, humanoid cartoon characters, also techniques for optimizing and importing them into game engines.'
    },
    {
      year: 2017,
      name: '3D Animation for the Gaming Industry Modeling and Texturing Part 2',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description: 'Advanced skills in modelling and animating of more complex organic and humanoid characters.'
    },
    {
      year: 2016,
      name: '3D Animation fr the Gaming Industry Modeling and Texturing Part 1',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description: 'Basic skills of models and animation of 3D cartoon characters and the environment.'
    },
    {
      year: 2016,
      name: 'Java OOP Advanced',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description:
        'Builds on the OOP Basics with Java course, relying primarily on best practices in the object-oriented programming paradigm and their implementation in the Java environment.'
    },
    {
      year: 2016,
      name: 'Java Advanced',
      institution: 'Software university "Softuni",',
      location: 'Sofia, Bulgaria',
      description: 'Working with the Java language at a level above the initial level.'
    },
    {
      year: 2016,
      name: 'MySQL Basics',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description: '' //TODO add description
    },
    {
      year: 2015,
      name: 'Java OOP Basics',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description: 'Develop skills for working with entry-level Java classes and objects.'
    },
    {
      year: 2015,
      name: 'Teamwork and Personal Skills',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description: '' //TODO add description
    },
    {
      year: 2015,
      name: 'Programming Basic',
      institution: 'Software university "Softuni"',
      location: 'Sofia, Bulgaria',
      description: '' //TODO add description
    },
    {
      year: 2015,
      name: 'Web Basic',
      institution: 'Telerik Academy',
      location: 'Sofia, Bulgaria',
      description: '' //TODO add description
    },
    {
      year: 2011,
      name: 'English language',
      institution: 'Birmingham Metropolitan College',
      location: 'Birmingham, UK',
      description: '' //TODO add description
    }
  ];
}

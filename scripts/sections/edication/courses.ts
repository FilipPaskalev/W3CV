interface ICourses {
  year: number
  name: string
  institution: string
  location: string
  description: string
}

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
]

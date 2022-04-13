interface IDegree {
  degree: string
  subject: string
  institute: string
  location: string
  grade: string
  courses: string[]
}

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
]

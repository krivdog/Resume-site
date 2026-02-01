// Centralized resume data: customize this file with your information
const resume = {
  header: {
    name: 'Brandon Krivitz',
    title: 'Software Engineer'
  },
  summary: 'Resourceful and driven Software Engineer with over 3 years of experience designing, developing, and maintaining full-stack applications. Proven ability to lead architecture modernization efforts, optimize backend performance, and deliver scalable solutions using modern web technologies and cloud-native tooling. Known for rapidly solving complex production issues, driving down system latency, and improving engineering workflows. Magna Cum Laude graduate with a B.S. in Computer Science from Arizona State University.',
  experience: [
    {
      role: 'Software Engineer',
      company: 'BI WORLDWIDE',
      dates: 'Jul 2024 - Present',
      description: 'Promoted from Associate Software Engineer after one year of full-time performance. Co-led development of a cache-first content management system (CMS) using Node.js, Express.js, PostgreSQL, Redis, and Docker; reduced response times by 80% as validated by custom K6 performance tests. Engineered a GitLab bot service for change-management and release approvals, automating stakeholder notifications and issue tracking. Built dynamic HTML email templating tools using MJML-React and Node.js. Diagnosed and resolved production outages using AWS RDS insights and Grafana/Prometheus logs, optimizing SQL queries and reducing CPU load. Contributed to observability and debugging across environments using Linkerd and CloudWatch.'
    },
    {
      role: 'Associate Software Engineer',
      company: 'BI WORLDWIDE',
      dates: 'Aug 2023 - Jul 2024',
      description: 'Spearheaded migration of internal admin web applications to a micro-frontend architecture using Webpack Module Federation and later Rspack. Built and deployed a parent shell application to host federated micro frontends and authored internal migration documentation. Developed scalable full-stack applications and REST APIs using Node.js, React.js, and Express; participated in sprint planning and cross-team design discussions.'
    },
    {
      role: 'Software Engineering Intern',
      company: 'BI WORLDWIDE',
      dates: 'May 2022 - Aug 2023',
      description: 'Developed internal dashboards and customer-facing applications in an Agile team using Docker, React.js, and Kubernetes. Led implementation of WCAG-compliant accessibility improvements and contributed to CI/CD pipelines and backend API development in AWS environments.'
    },
    {
      role: 'Software Development Intern',
      company: 'Hexagon Metrology',
      dates: 'Jun 2021 - Aug 2021',
      description: 'Developed custom C# and SQL-based tools and CAD/CAM plugins. Designed executable installers and implemented a background-scanning application to improve file directory searches and setup efficiency.'
    }
  ],
  skills: {
    languages: [ 'JavaScript (Node.js)', 'Python', 'C#', 'Java', 'C++', 'Swift' ],
    frameworks: [ 'React.js', 'MJML', 'Express.js', 'Webpack', 'Rspack' ],
    tools: [ 'Git', 'Docker', 'Kubernetes', 'AWS (RDS, CloudWatch)', 'Redis', 'Prometheus', 'Grafana', 'Linkerd', 'Postman' ],
    databases: [ 'PostgreSQL', 'SQL' ],
    concepts: [ 'Microservices', 'CI/CD', 'Performance Optimization', 'CMS', 'Observability', 'Email Rendering', 'Agile/Scrum' ]
  },
  education: [
    {
      school: 'Arizona State University',
      degree: 'B.S. in Computer Science (Software Engineering focus), Minor in Business',
      dates: 'May 2023',
      details: 'Magna Cum Laude | GPA: 3.76 | New American University Scholar'
    },
    {
      school: 'Universitat Autònoma de Barcelona (ISA Abroad)',
      degree: 'Study Abroad Program',
      dates: 'Spring 2022',
      details: 'Spanish Language, Business, and Culture'
    }
  ],
  contact: {
    email: 'bkrivitz@proton.me',
    linkedin: 'https://www.linkedin.com/in/brandon-k-234816197/',
    github: 'https://github.com/krivdog'
  }
};

export default resume;

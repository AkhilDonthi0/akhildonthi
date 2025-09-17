import React from "react";

function App() {
  const resumeData = {
    name: "Akhil Donthi",
    location: "Montgomery, Alabama, United States",
    phone: "+1 3344406014",
    email: "donthiakhil0@gmail.com",
    links: {
      linkedin: "https://linkedin.com/in/akhil-d-672a32151",
      github: "https://github.com/AkhilDonthi0",
      portfolio: "https://akhildonthi0.github.io/akhildonthi",
    },
    summary:
      "Highly skilled Backend Developer with expertise in building robust backend systems, RESTful APIs, and enterprise-grade applications. Proficient in Java, Spring Boot, and modern software engineering practices, with a track record of delivering scalable, secure, and high-performance solutions. Experienced in designing microservices architectures, optimizing database interactions, and automating CI/CD pipelines. Recognized for strong problem-solving, debugging, and collaboration skills.",
    education: [
      {
        school: "Auburn University at Montgomery",
        degree: "Masters in Management Information Systems",
        gpa: "3.60",
        period: "May 2023 - Dec 2024",
        coursework: [
          "System Design and Architecture",
          "Information Security and Assurance",
          "Enterprise Resource Planning (ERP)",
          "Data Analytics and Visualization",
          "Leading Innovation and Technology Management",
        ],
        projectHighlight:
          "Secure Route – UI/UX in Figma, DB schema, technical design to enhance road safety.",
      },
      {
        school: "Vaagdevi Engineering College",
        degree: "BTech in Computer Science",
        gpa: "N/A",
        period: "Aug 2016 - Sep 2020",
      },
    ],
    experience: [
      {
        title: "Backend Developer",
        company: "Virtusa Consulting Services Private Limited",
        location: "Chennai",
        period: "Jan 2019 - Mar 2023",
        highlights: [
          "Architected high-performance RESTful APIs with Java & Spring Boot.",
          "Engineered unit & integration tests (JUnit, Mockito) with >90% coverage.",
          "Optimized Couchbase queries, improving performance by 50%.",
          "Led debugging & root cause analysis, reducing downtime by 40%.",
          "Mentored junior developers & drove agile practices.",
          "Integrated Kafka for real-time, event-driven architectures.",
        ],
      },
    ],
    projects: [
      {
        name: "Space Inventory Management (SIM)",
        client: "British Telecommunications",
        period: "2019 - 2023",
        details: [
          "Developed classification-based REST APIs for SIM v2.",
          "Optimized SQL queries & indexing for millions of records.",
          "Implemented JUnit test coverage for continuous integration.",
          "Delivered features like RBAC, import/export, notifications.",
        ],
        technologies: ["Spring Boot", "REST APIs", "Couchbase", "Kafka", "Docker"],
      },
      {
        name: "Secure Route",
        type: "Masters Project",
        period: "Jun 2023 - Aug 2023",
        details: [
          "Designed UI/UX in Figma to identify accident-prone areas.",
          "Created DB schema & technical design documentation.",
          "Outlined marketing strategy & revenue model.",
        ],
        technologies: ["Figma", "System Design", "DB Schema"],
      },
      {
        name: "Online Quiz App",
        type: "Training Project",
        period: "2019",
        details: [
          "Built Spring Boot backend for quiz management.",
          "Developed schema & backend services for publishing quizzes.",
        ],
        technologies: ["Spring Boot", "Hibernate", "MySQL"],
      },
    ],
    skills: {
      languages: ["Java", "SQL", "PL/SQL", "Python", "NoSQL", "JavaScript", "C", "C++"],
      frameworks: ["Spring Boot", "Hibernate", "Maven", "Kafka", "JUnit", "Mockito"],
      databases: ["MySQL", "Couchbase", "Oracle"],
      tools: ["Postman", "Git", "Docker", "Figma", "Jenkins", "Cisco Networking"],
      development: ["Microservices", "System Design", "Debugging", "REST APIs", "CI/CD"],
    },
    certifications: [
      "Oracle Certified Associate, Java SE 8 Programmer",
      "Cisco Certified Networking Professional (CCNP)",
      "DIAT Certified Information Assurance Professional",
      "DevOps Beginners to Advanced",
      "DevOps CI/CD",
    ],
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{resumeData.name}</h1>
        <p className="text-gray-700">
          {resumeData.location} | {resumeData.phone} | {resumeData.email}
        </p>
        <p className="text-blue-600">
          <a href={resumeData.links.linkedin}>LinkedIn</a> |{" "}
          <a href={resumeData.links.github}>GitHub</a> |{" "}
          <a href={resumeData.links.portfolio}>Portfolio</a>
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p>{resumeData.summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold">{edu.school}</h3>
            <p>{edu.degree} • {edu.period}</p>
            {edu.gpa && <p>GPA: {edu.gpa}</p>}
            {edu.coursework && <p>Coursework: {edu.coursework.join(", ")}</p>}
            {edu.projectHighlight && <p className="italic">{edu.projectHighlight}</p>}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        {resumeData.experience.map((job, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold">{job.title} - {job.company}</h3>
            <p>{job.location} • {job.period}</p>
            <ul className="list-disc list-inside">
              {job.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        {resumeData.projects.map((proj, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold">{proj.name}</h3>
            <p>{proj.type || proj.client} • {proj.period}</p>
            <ul className="list-disc list-inside">
              {proj.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
            <p className="text-sm text-gray-600">Tech: {proj.technologies.join(", ")}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <p><strong>Languages:</strong> {resumeData.skills.languages.join(", ")}</p>
        <p><strong>Frameworks:</strong> {resumeData.skills.frameworks.join(", ")}</p>
        <p><strong>Databases:</strong> {resumeData.skills.databases.join(", ")}</p>
        <p><strong>Tools:</strong> {resumeData.skills.tools.join(", ")}</p>
        <p><strong>Development:</strong> {resumeData.skills.development.join(", ")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          {resumeData.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 {resumeData.name}
      </footer>
    </div>
  );
}

export default App;

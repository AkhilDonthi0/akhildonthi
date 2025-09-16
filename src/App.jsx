import { useState } from 'react';
import './App.css';

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-indigo-600 mb-2 border-b pb-1">{title}</h2>
      <div className="pl-2 text-gray-800 space-y-1">{children}</div>
    </div>
  );
}

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto animate-fade-in">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">Akhil Donthi</h1>
        <p className="text-lg mt-2 text-gray-700">Software Engineer | Java | Spring Boot | REST APIs</p>
      </header>

      <Section title="Summary">
        <p>
          Results-driven Software Engineer with expertise in Java, Spring Boot, and RESTful APIs. Proven ability to develop scalable, high-performance microservices solutions and deliver robust, mission-critical applications. Adept at leveraging agile methodologies and collaborating with cross-functional teams to drive efficiency and seamless integration of backend systems.
        </p>
      </Section>

      <Section title="Work Experience">
        <p><strong>Virtusa Consulting Services Private Limited</strong><br />Backend Developer (Apr 2021 - Mar 2023)</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Engineered and developed **RESTful APIs** using **Java** and **Spring Boot** to integrate microservices and ensure scalable, high-performance applications.</li>
          <li>Crafted and executed comprehensive **JUnit** tests to validate API reliability, supporting agile and **CI/CD**-driven development practices.</li>
          <li>Resolved complex bugs through targeted debugging and problem-solving, significantly enhancing application performance and system stability.</li>
          <li>Optimized **Couchbase** database queries to boost data retrieval efficiency, reducing response times and improving overall system functionality.</li>
          <li>Collaborated in agile development cycles by refining data classifications and engaging in thorough code reviews to elevate engineering standards.</li>
        </ul>
      </Section>

      <Section title="Education">
        <p><strong>Auburn University at Montgomery</strong><br />Masters in Management Information Systems (May 2023 – Dec 2024)</p>
        <p><strong>Vaagdevi Engineering College</strong><br />BTech in Computer Science (Aug 2016 - Sep 2020)</p>
      </Section>

      <Section title="Technical Skills">
        <ul className="list-disc list-inside">
          <li><strong>Programming Languages:</strong> Java, SQL, PL/SQL, Python</li>
          <li><strong>Frameworks & Technologies:</strong> Spring Boot, Hibernate, RESTful APIs, Maven, Kafka, JUnit, Mockito</li>
          <li><strong>Databases:</strong> SQL, MySQL, NoSQL, Couchbase</li>
          <li><strong>Tools:</strong> Postman, Git, Docker, Figma, CI/CD, Jenkins, Cisco Networking</li>
          <li><strong>Development & Testing:</strong> Eclipse, STS, Visual Studio Code, Tomcat, JUnit, Mockito, Maven</li>
          <li><strong>Other:</strong> GNS3, Packet Tracer</li>
          <li><strong>Development Practices:</strong> Object-oriented Programming, Backend Development, Microservices, Software Development, Agile Methodologies</li>
        </ul>
      </Section>

      <Section title="Projects">
        <ul className="list-disc list-inside space-y-3">
          <li>
            <p className="font-semibold">Space Inventory Management (SIM)</p>
            <p className="text-sm text-gray-600">British Telecommunications | Dec 2021 - Mar 2023</p>
            <p className="text-sm">As an Associate Developer, I helped build the upgraded SIM application. My work focused on developing and refining classifications, creating and testing APIs for record management (create, update, delete), and optimizing database queries for improved efficiency. I also wrote **JUnit** tests and debugged the codebase to ensure system stability. This web application manages legacy records for British Telecommunications, including features for file versioning, role-based access control, and efficient searching.</p>
          </li>
          <li>
            <p className="font-semibold">Online Quiz</p>
            <p className="text-sm text-gray-600">Jun 2021 - Aug 2021</p>
            <p className="text-sm">Developed a simple quiz application using **Spring Boot**, **Hibernate**, and **MySQL**. My responsibilities as Team Leader included designing the database schema and building the backend services to handle quiz creation, participation, and score tracking. This project was a learning initiative to practice full-stack development concepts.</p>
          </li>
          <li>
            <p className="font-semibold">Secure Route</p>
            <p className="text-sm text-gray-600">Jun 2023 - Aug 2023</p>
            <p className="text-sm">Designed the UI/UX using **Figma** and created a comprehensive database schema for an application aimed at enhancing road safety. The project's design includes features to identify accident-prone areas, provide real-time hazard alerts, and promote community involvement to improve road conditions. This was a technical design project for my master's program.</p>
          </li>
          <li>
            <p className="font-semibold">Efficient Network Design by Using IP Subnetting</p>
            <p className="text-sm text-gray-600">Sep 2019 - Jan 2020</p>
            <p className="text-sm">As Team Leader, I designed and configured a virtual network using **Cisco Packet Tracer**, implementing **IP Subnetting** and routing protocols. The project demonstrated the use of Variable Length Subnet Masking (VLSM) to create multiple manageable networks from a single large IP network, ensuring efficient use of IP addresses.</p>
          </li>
        </ul>
      </Section>

      <Section title="Certifications">
        <ul className="list-disc list-inside">
          <li>Oracle Certified Associate, Java SE 8 Programmer</li>
          <li>Cisco Certified Networking Professional</li>
          <li>DIAT Certified Information Assurance Professional</li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>Email: donthiakhil0@gmail.com</p>
        <p>Phone: +1 3344406014</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/akhil-d-672a32151" target="_blank" className="text-blue-600 underline">linkedin.com/in/akhil-d-672a32151</a></p>
        <p>GitHub: <a href="https://github.com/your-github-profile" target="_blank" className="text-blue-600 underline">github.com/your-github-profile</a></p>
      </Section>

      <footer className="text-center text-sm text-gray-400 mt-10">
        <p>© 2025 Akhil Donthi</p>
      </footer>
    </div>
  );
}

export default App;
'use client';
import React from "react";
import Image from 'next/image';

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-800/90 shadow flex justify-center gap-4 py-3 px-2 backdrop-blur-sm">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            className="text-gray-200 font-medium px-4 py-2 rounded-md border border-gray-700 bg-gray-800 hover:bg-teal-500 transition-all text-sm md:text-base"
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="pt-28 max-w-6xl mx-auto px-6 space-y-28">
        {/* About */}
       <section id="about" className="flex flex-col items-center text-center min-h-[60vh]">
  <Image
    src="/devops_image.webp"
    alt="DevOps Banner"
    width={240}
    height={240}
    className="rounded-full shadow-lg mb-8"
  />
  <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
    Uma Maheswari S
  </h1>
  <p className="text-2xl md:text-3xl text-teal-400 mb-6">
    DevOps & Cloud Engineer | Trivandrum, Kerala
  </p>
  <p className="text-gray-300 max-w-3xl mb-6">
    Enthusiastic and diligent engineering graduate with a passion for DevOps and cloud technologies.
    Skilled in Linux, CI/CD, AWS, containerization, scripting, automation, and deployment through hands-on projects.
  </p>
  <div className="mt-3 text-gray-400 text-base md:text-lg ">
    <p>📞 9074656719 | ✉️ umamaheswaris9074@gmail.com</p>
    <p>
      🔗 <a href="https://linkedin.com/in/umamaheswariiis/" target="_blank" rel="noreferrer" className="text-teal-400 underline">LinkedIn</a> |
      <a href="https://github.com/UmaMahiii/" target="_blank" rel="noreferrer" className="text-gray-200 underline ml-2">GitHub</a>
    </p>
  </div>
</section>




        {/* Education */}
        <section id="education" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">🎓 Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-teal-400 mt-1">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>

              <div>
                <h3 className="font-semibold text-lg text-white">Lovely Professional University, Punjab (2020–2025)</h3>
                <p className="text-gray-300">Dual Degree: BCA Hons + MCA — CGPA: 7.65</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-teal-400 mt-1">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>

              <div>
                <h3 className="font-semibold text-lg text-white">Govt. Girls Higher Secondary School (2018–2020)</h3>
                <p className="text-gray-300">12th with Science — Percentage: 73.6%</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-teal-400 mt-1">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>

              <div>
                <h3 className="font-semibold text-lg text-white">Shree Vidhyadhiraja School (2017–2018)</h3>
                <p className="text-gray-300">10th with Science — Percentage: 95%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">💻 Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-xl transition flex flex-col md:flex-row gap-4">
              <img src="/jenkins-icon.svg" alt="Jenkins" className="w-25 h-25 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">Automated CI/CD Pipeline | Jenkins/SonarQube</h3>
                <p className="text-gray-300 text-sm mb-2">Aug 2025 - Sep 2025 | Jenkins, SonarQube, Git, Bash</p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Designed multi-stage Jenkins pipeline for automated build, testing, and deployment.</li>
                  <li>Configured SonarQube Webhook for quality gates.</li>
                  <li>Managed Jenkins Agents for scalable performance.</li>
                  <li>Automated artifact deployment using Bash scripts.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-xl transition flex flex-col md:flex-row gap-4">
              <img src="/aws.svg" alt="AWS" className="w-20 h-20 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">Cloud Re-Architecture: PaaS/SaaS Migration | AWS</h3>
                <p className="text-gray-300 text-sm mb-2">Aug 2025 - Sep 2025 | AWS RDS, ElastiCache, ELB, ASG, CloudWatch</p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Migrated IaaS app to fully managed AWS PaaS/SaaS.</li>
                  <li>Configured Elastic Beanstalk with ELB & Auto Scaling Group.</li>
                  <li>Integrated CloudWatch monitoring for performance tracking.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-xl transition flex flex-col md:flex-row gap-4">
              <img src="/aws.svg" alt="AWS" className="w-20 h-20 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-white">Multi-Tier Application Migration | AWS</h3>
                <p className="text-gray-300 text-sm mb-2">July 2025 - Aug 2025 | EC2, ELB, S3, Tomcat</p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Lift & Shift migration to AWS EC2 instances.</li>
                  <li>Automated deployment via Bash scripts and S3.</li>
                  <li>Configured secure networking with Route 53 and IAM Roles.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">📜 Certifications</h2>
          <ul className="space-y-4 list-disc ml-5 text-gray-300">
            <li>DevOps Beginners to Advance — Udemy (In Progress)</li>
            <li>IBM Summer Training — Data Science, Allsoft Solutions Pvt Ltd (June 2024)</li>
            <li>Game Design & Development with Unity 2020 Specialization — Coursera</li>
            <li>Python for Beginners — Coursera (May 2022)</li>
          </ul>
        </section>

        {/* Achievements */}
        <section id="achievements" className="scroll-mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">🏆 Achievements</h2>
  <ul className="space-y-4 list-disc ml-5 text-gray-300">
    <li>Patent Approval: Hybrid Energy Highways integrating Wind, Solar, and Microbial Technology.</li>
    <li>Approved by LPU Intellectual Property Cell as part of a group project.</li>
    <li>Integrated IoT for real-time monitoring and system oversight.</li>
  </ul>
</section>


        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">💼 Experience</h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
            <h3 className="font-semibold text-lg mb-2 text-white">Digital Marketing Intern | Quizzario Pvt Ltd (Jan 2023 - June 2023)</h3>
            <ul className="list-disc ml-5 text-gray-300">
              <li>Created content for company blogs and social media (Facebook, Instagram, LinkedIn, Twitter).</li>
              <li>Designed graphics using Canva and Adobe Suite, and assisted in video content creation.</li>
              <li>Performed keyword research and analysis using SEMrush and Google Keyword Planner.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">🛠️ Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-1">Cloud & AWS</h3>
              <p>AWS EC2, S3, RDS, ElastiCache, ELB, ASG, VPC, Route 53, CloudWatch, Lambda</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">CI/CD & Automation</h3>
              <p>Jenkins, Git/GitHub, Bash, Maven, CI/CD Concepts</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Containers & IaC</h3>
              <p>Docker, Kubernetes, Terraform (In Progress)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">OS & Databases</h3>
              <p>Linux (Amazon Linux 2023), MySQL, MariaDB, Tomcat, Java, Python</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex justify-center items-center gap-2">✉️ Contact</h2>
          <button
            onClick={() => (window.location = "mailto:umamaheswaris9074@gmail.com")}
            className="bg-teal-500 hover:bg-teal-400 text-white rounded-md px-8 py-3 font-semibold shadow-md border border-teal-600 transition"
          >
            Email Me
          </button>
        </section>
      </div>
    </div>
  );
}

import React from 'react';

const resumeData = {
  name: 'Amol Lokhande',
  title: 'DevOps Engineer | Cloud Enthusiast',
  summary: 'Results-driven DevOps Engineer with experience in cloud infrastructure, automation, and CI/CD pipelines. Passionate about building scalable solutions and optimizing workflows.',
  education: [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Savitribai Phule Pune University',
      year: '2019 – 2023',
    },
  ],
  experience: [
    {
      role: 'DevOps Engineer',
      company: 'Tata Consultancy Services',
      period: '2023 – Present',
      details: [
        'Implemented CI/CD pipelines using Jenkins and GitHub Actions.',
        'Managed Kubernetes clusters and automated deployments.',
        'Worked with AWS and Azure cloud services.'
      ],
    },
    {
      role: 'Cloud Intern',
      company: 'Infosys',
      period: '2022 – 2023',
      details: [
        'Assisted in cloud migration projects.',
        'Automated infrastructure provisioning with Terraform.'
      ],
    },
  ],
  skills: [
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD', 'Git', 'Python', 'Shell Scripting'
  ],
  certifications: [
    'AWS Certified Solutions Architect – Associate',
    'Certified Kubernetes Administrator (CKA)',
    'Microsoft Certified: Azure Fundamentals',
  ],
};

const Resume: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-['Inter','Poppins',sans-serif] py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/10 rounded-xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#007BFF]">{resumeData.name}</h1>
            <h2 className="text-lg font-medium text-[#38bdf8] mt-1">{resumeData.title}</h2>
          </div>
          <a
            href="/assets/resume.pdf"
            download
            className="mt-4 md:mt-0 inline-block bg-[#007BFF] hover:bg-[#2563eb] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:ring-offset-2"
          >
            Download PDF
          </a>
        </div>
        <p className="mb-8 text-base text-[#cbd5e1]">{resumeData.summary}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">Education</h3>
            <ul>
              {resumeData.education.map((edu, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-bold">{edu.degree}</span><br />
                  <span>{edu.school}</span> <span className="text-[#94a3b8]">({edu.year})</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-[#38bdf8] mt-6 mb-2">Certifications</h3>
            <ul>
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="mb-1 list-disc list-inside">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">Experience</h3>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="font-bold">{exp.role}</div>
                <div className="text-[#94a3b8]">{exp.company} | {exp.period}</div>
                <ul className="list-disc list-inside ml-4 mt-1">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
            <h3 className="text-xl font-semibold text-[#38bdf8] mt-6 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, idx) => (
                <span key={idx} className="bg-[#1e293b] text-[#38bdf8] px-3 py-1 rounded-full text-sm font-medium shadow hover:scale-105 hover:bg-[#0f172a] transition-transform duration-200 cursor-pointer">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 
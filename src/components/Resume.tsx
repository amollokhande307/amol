import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.13, type: 'spring', stiffness: 180, damping: 18 },
  }),
};

const Resume: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-['Inter','Poppins',sans-serif] py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/10 rounded-xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#007BFF]">{resumeData.name}</h1>
            <h2 className="text-lg font-medium text-[#38bdf8] mt-1">{resumeData.title}</h2>
          </div>
          <motion.a
            href="/assets/resume.pdf"
            download
            className={`mt-4 md:mt-0 inline-block resume-btn ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setClicked(false); }}
            onMouseDown={() => setClicked(true)}
            onMouseUp={() => setClicked(false)}
            whileTap={{ scale: 0.93 }}
          >
            <motion.span
              className="inline-block mr-2 align-middle"
              animate={hovered ? { rotateY: 180 } : { rotateY: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'inline-block', perspective: 400 }}
            >
              <Download className="w-5 h-5" />
            </motion.span>
            <span className="align-middle transition-all duration-200">
              {hovered ? '✅ Ready!' : '📄 Download'}
            </span>
          </motion.a>
        </div>
        <p className="mb-8 text-base text-[#cbd5e1]">{resumeData.summary}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="resume-card"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
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
          </motion.div>
          <motion.div
            className="resume-card"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
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
          </motion.div>
        </div>
        <style>{`
          .resume-btn {
            background: #007BFF;
            color: #fff;
            font-weight: 600;
            border-radius: 0.5rem;
            padding: 0.5rem 1.5rem;
            box-shadow: 0 2px 8px #007BFF33;
            border: 2px solid #007BFF;
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.2s, border 0.2s, background 0.2s, transform 0.15s;
          }
          .resume-btn.hovered {
            border: 2px solid #38bdf8;
            box-shadow: 0 0 16px 4px #38bdf8, 0 2px 8px #007BFF33;
            background: #2563eb;
            animation: pulseBorder 1.2s infinite;
          }
          .resume-btn.clicked {
            transform: scale(0.95);
          }
          @keyframes pulseBorder {
            0% { box-shadow: 0 0 0 0 #38bdf8; }
            70% { box-shadow: 0 0 0 8px #38bdf822; }
            100% { box-shadow: 0 0 0 0 #38bdf8; }
          }
          .resume-card {
            background: rgba(30, 41, 59, 0.18);
            border-radius: 1rem;
            box-shadow: 0 2px 16px #19376d22;
            padding: 2rem 1.5rem;
            margin-bottom: 1rem;
            transition: box-shadow 0.2s, background 0.2s;
          }
          .resume-card:hover {
            background: rgba(56, 189, 248, 0.08);
            box-shadow: 0 0 24px 4px #38bdf8;
            animation: cardPulse 0.7s;
          }
          @keyframes cardPulse {
            0% { box-shadow: 0 0 0 0 #38bdf8; }
            70% { box-shadow: 0 0 0 12px #38bdf822; }
            100% { box-shadow: 0 0 0 0 #38bdf8; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Resume; 
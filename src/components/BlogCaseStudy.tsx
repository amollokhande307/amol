import React, { useRef, useEffect, useState } from 'react';

// Custom hook for Intersection Observer
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const blogPosts = [
  {
    title: 'TCS × Kubernetes: Case Study',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_tcs-kubernetes-case-study-enterprise-scale-activity-7348546271445450752-eFMh',
  },
  {
    title: 'Why Netflix Uses AWS',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_case-netflix-aws-activity-7348998616750927872-1xbL',
  },
  {
    title: 'Why Big Companies Use Linux',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_vimal-vimal-linuxworld-activity-7349371583548813312-SDTG',
  },
  {
    title: 'Change the Logo in Linux',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linux-customization-linuxtheming-activity-7350335733989097472-LRVD',
  },
  {
    title: 'What Happens on Ctrl+C / Ctrl+Z?',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linux-unix-systemprogramming-activity-7350135860282978305-zwXv',
  },
  {
    title: 'Why Companies Use Docker',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_docker-devops-casestudy-activity-7350180961893937152-7ZUc',
  },
  {
    title: '5 GUI Programs in Linux',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linuxworld-linuxworld-vimaldagasir-activity-7350222519255085058-r--y',
  },
  {
    title: 'More Terminals & GUI Interfaces',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linuxworld-vimaldagasir-terminalpower-activity-7350331958012297216-Ys3V',
  },
  {
    title: 'Change Any Linux App Icon',
    url: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linux-customization-desktoptheming-activity-7349663811089371136-Ajrd',
  },
];

export const BlogCaseStudy: React.FC = () => (
  <section className="py-20 bg-[#f7f7f7] dark:bg-[#222]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="section-title">Blog &amp; Case Study</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogPosts.map((post) => {
          const [ref, inView] = useInView();
          return (
            <a
              key={post.title}
              ref={ref}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block blog-card text-[#222] dark:text-white font-poppins text-lg font-semibold ${inView ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ borderRadius: 12 }}
            >
              {post.title}
            </a>
          );
        })}
      </div>
    </div>
  </section>
); 
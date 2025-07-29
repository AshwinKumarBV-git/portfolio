import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Spline from '@splinetool/react-spline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm Ashwin 👋",
        "AI/ML Engineer",
        "Flutter Developer",
        "GATE Aspirant"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Email',
      icon: <MdEmail className="w-6 h-6" />,
      url: 'mailto:your.email@example.com',
    },
  ] as const;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/3ff7b617-2fe9-46c7-8e06-b6d7c382f4db/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 backdrop-blur-sm">
            <span ref={el}></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 backdrop-blur-sm">
            Passionate about creating innovative solutions and learning new technologies.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 backdrop-blur-sm">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
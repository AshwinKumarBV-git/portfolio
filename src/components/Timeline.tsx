import { FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa';

interface TimelineItem {
  id: number;
  type: 'education' | 'project' | 'achievement';
  title: string;
  date: string;
  description: string;
  link?: string;
}

const Timeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'Your University Name',
      date: '2020 - 2024',
      description: 'Bachelor of Technology in Computer Science',
    },
    {
      id: 2,
      type: 'project',
      title: 'Project Name',
      date: 'Jan 2023',
      description: 'Description of your significant project and its impact',
      link: 'https://github.com/yourusername/project',
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Achievement Title',
      date: 'Dec 2022',
      description: 'Description of your achievement or certification',
      link: 'https://certificate-link.com',
    },
    // Add more timeline items as needed
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <FaGraduationCap className="w-6 h-6" />;
      case 'project':
        return <FaCode className="w-6 h-6" />;
      case 'achievement':
        return <FaTrophy className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-blue-600 dark:text-blue-400">
                      {getIcon(item.type)}
                    </span>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Circle dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
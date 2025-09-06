import { education } from '@/data';
import { Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic background and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {edu.institution}
              </p>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{edu.period}</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{edu.location}</span>
              </div>

              {edu.coursework && (
                <div className="mt-4">
                  <div className="flex items-center text-gray-900 dark:text-gray-200 mb-2">
                    <BookOpen size={16} className="mr-2" />
                    <span className="font-medium">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
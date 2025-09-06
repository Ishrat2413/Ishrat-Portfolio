import { skills, languages } from '@/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Languages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with and languages I speak
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {language.name}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      {language.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${
                          language.level === 'Fluent'
                            ? '100%'
                            : language.level === 'Intermediate'
                            ? '70%'
                            : '40%'
                        }`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
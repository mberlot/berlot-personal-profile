import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Job Title 1",
      company: "Company Name 1",
      date: "Jan 2020 - Dec 2021",
      description: "Job description 1",
    },
    {
      title: "Job Title 2",
      company: "Company Name 2",
      date: "Jan 2018 - Dec 2019",
      description: "Job description 2",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="mx-auto max-w-4xl">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`flex items-start ${index % 2 === 0 ? "mb-8" : "mb-12"}`}
        >
          <div className="flex-shrink-0 w-14">
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            <div className="h-full border border-indigo-600"></div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium">{experience.title}</h4>
            <p className="text-gray-600">
              {experience.company} | {experience.date}
            </p>
            <p className="mt-2 text-gray-700">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;

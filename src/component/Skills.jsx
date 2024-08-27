import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the styles

const skills = [
  { name: "HTML", percentage: 90, color: "#F16529" },
  { name: "CSS", percentage: 80, color: "#264de4" },
  { name: "JavaScript", percentage: 75, color: "#F7DF1E" },
  { name: "Bootstrap", percentage: 70, color: "#563d7c" },
  { name: "Tailwind", percentage: 85, color: "#06B6D4" },
  { name: "React", percentage: 80, color: "#61DBFB" },
];

const Skills = () => {
  return (
    <section className="p-6 md:p-12 my-6 w-full bg-gray-100" id="skills">
      <h2 className="text-4xl font-bold text-center mb-8">
        Sk<span className="text-blue-500">ill</span>s
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-[145px] h-[145px]">
              <CircularProgressbar
                value={skill.percentage}
                text={skill.name}
                styles={buildStyles({
                  textColor: skill.color,
                  pathColor: skill.color,
                  trailColor: "#d6d6d6",
                  strokeWidth: 50, // Maximum thickness of the circular bar
                  textSize: "12px", // Adjust the size of the text inside the circle
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

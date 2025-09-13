const skills = [
  { name: "HTML", proficiency: "Advance" },
  { name: "CSS", proficiency: "Intermediate" },
  { name: "JavaScript", proficiency: "Intermediate" },
];

const formattedSkills = skills.map(skill => `${skill.name} (${skill.proficiency})`);

const grid = document.getElementById("skill-grid");

formattedSkills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "skill-card";
  div.textContent = skill;
  grid.appendChild(div);
});
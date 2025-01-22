s// You can dynamically update the skill progress if needed
const skills = {
  "software-dev": 90,
  "python": 85,
  "html": 80,
  "css": 75,
  "js": 70,
};

Object.keys(skills).forEach(skill => {
  document.getElementById(skill).value = skills[skill];
});

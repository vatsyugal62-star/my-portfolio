const fs = require('fs');
const path = require('path');

const portfolioProjectsPath = path.join(__dirname, '../portfolio/src/data/projects.ts');
const oldFolioProjectsPath = path.join(__dirname, 'projects-data.js');

let projectsTsStr = fs.readFileSync(portfolioProjectsPath, 'utf8');
let portfolioProjectsStr = projectsTsStr.substring(projectsTsStr.indexOf('export const projects = ') + 24, projectsTsStr.lastIndexOf('];') + 1);
let portfolioProjects = eval(`(${portfolioProjectsStr})`);

let oldProjectsJs = fs.readFileSync(oldFolioProjectsPath, 'utf8');
let match = oldProjectsJs.match(/const PROJECTS_DATA = (\[[\s\S]*?\]);\n/);
if (match) {
  let oldProjects = eval(`(${match[1]})`);
  
  oldProjects.forEach(oldP => {
    let matchingNewP = portfolioProjects.find(newP => (newP.img && newP.img.endsWith(oldP.img)) || (newP.carousel && newP.carousel.endsWith(oldP.carousel)));
    if (matchingNewP) {
      oldP.title = matchingNewP.title;
      oldP.pov = matchingNewP.pov;
      if (matchingNewP.desc) oldP.desc = matchingNewP.desc;
      if (matchingNewP.subtitle) oldP.subtitle = matchingNewP.subtitle;
    }
  });

  let newProjectsDataStr = JSON.stringify(oldProjects, null, 2);
  oldProjectsJs = oldProjectsJs.replace(match[1], newProjectsDataStr);
  fs.writeFileSync(oldFolioProjectsPath, oldProjectsJs);
  console.log("Updated projects-data.js successfully");
}

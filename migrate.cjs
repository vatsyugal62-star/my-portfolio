const fs = require('fs');
const path = require('path');

// 1. Update titles and POVs in projects-data.js
const portfolioProjectsPath = path.join(__dirname, '../portfolio/src/data/projects.ts');
const oldFolioProjectsPath = path.join(__dirname, 'projects-data.js');
const indexHtmlPath = path.join(__dirname, 'index.html');
const archiveHtmlPath = path.join(__dirname, 'archive.html');

let projectsTsStr = fs.readFileSync(portfolioProjectsPath, 'utf8');

// Extract the array from projects.ts
let portfolioProjectsStr = projectsTsStr.substring(projectsTsStr.indexOf('export const projects = ') + 24, projectsTsStr.lastIndexOf('];') + 1);
// Evaluate safely
let portfolioProjects = [];
try {
  portfolioProjects = eval(`(${portfolioProjectsStr})`);
} catch (e) {
  console.log("Eval fallback");
  portfolioProjects = eval(portfolioProjectsStr.replace(/export const projects = /g, ''));
}

let oldProjectsJs = fs.readFileSync(oldFolioProjectsPath, 'utf8');
// Update the old array based on matching images
portfolioProjects.forEach(newP => {
  if (!newP.imgSrc) return;
  // imgSrc is like "./essentials/media_...jpg"
  // old img is like "essentials/media_...jpg"
  let imgMatchName = newP.imgSrc.replace('./', '');
  
  // Find project in oldProjectsJs that has this image
  // It's a string replace. It's safer to parse, update, and rewrite, but projects-data.js has const SERVICES_DATA and const PROJECTS_DATA.
});

// Since parsing oldProjectsJs as an AST is hard, let's just use string replacement on oldProjectsJs
portfolioProjects.forEach(newP => {
  if (!newP.imgSrc) return;
  let imgName = newP.imgSrc.replace('./', '');
  
  // Find the block in oldProjectsJs that contains this img
  // We can use a regex to capture the object containing img: "..."
  // This is tricky. Let's do it by reading ALL_PROJECTS via eval if possible.
});

// Actually, we can isolate PROJECTS_DATA from oldProjectsJs
let match = oldProjectsJs.match(/const PROJECTS_DATA = (\[[\s\S]*?\]);\n/);
if (match) {
  let oldProjects = eval(`(${match[1]})`);
  
  oldProjects.forEach(oldP => {
    let matchingNewP = portfolioProjects.find(newP => newP.img && newP.img.endsWith(oldP.img) || newP.carousel && newP.carousel.endsWith(oldP.carousel));
    if (matchingNewP) {
      oldP.title = matchingNewP.title;
      oldP.pov = matchingNewP.pov;
      if (matchingNewP.desc) oldP.desc = matchingNewP.desc;
      if (matchingNewP.subtitle) oldP.subtitle = matchingNewP.subtitle;
    }
  });

  // Re-serialize PROJECTS_DATA
  let newProjectsDataStr = JSON.stringify(oldProjects, null, 2);
  // Remove quotes around keys for better readability if desired, but JSON is fine for JS
  oldProjectsJs = oldProjectsJs.replace(match[1], newProjectsDataStr);
  fs.writeFileSync(oldFolioProjectsPath, oldProjectsJs);
  console.log("Updated projects-data.js with new titles and POVs");
}

// 2. Change "best works" to "selected artpieces"
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
indexHtml = indexHtml.replace(/<h2 class="section-heading"><em>best works<\/em><\/h2>/, '<h2 class="section-heading"><em>selected artpieces</em></h2>');

// 3. Change best works projects to all 17 projects.
// Replace the contents of <div class="flagship-grid">
let flagshipGridStart = indexHtml.indexOf('<div class="flagship-grid">');
let flagshipGridEnd = indexHtml.indexOf('</div>', indexHtml.indexOf('</article>', flagshipGridStart)) + 6; 
// actually the closing div of flagship-grid is after the last article
let endOfGrid = indexHtml.indexOf('</section>', flagshipGridStart);
let gridContent = indexHtml.substring(flagshipGridStart, endOfGrid);

let newGridHtml = `<div class="flagship-grid">\n`;
portfolioProjects.forEach((p, idx) => {
  let imgPath = p.img ? p.img.replace('./', '') : (p.carousel ? p.carousel.replace('./', '') : '');
  newGridHtml += `
          <article class="flagship-item ${idx % 2 !== 0 ? 'reverse' : ''}">
            <div class="flagship-media" onclick="openLightboxById('${p.id}')" data-cursor="VIEW">
              <img src="${imgPath}" alt="${p.title}" loading="lazy">
              <div class="media-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                ${p.category}
              </div>
              <button class="carousel-cta-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                Inspect Project
              </button>
            </div>
            <div class="flagship-text">
              <div class="flagship-num">— ${(idx+1).toString().padStart(2, '0')} / ${p.category}</div>
              <h3 class="flagship-title">${p.title}</h3>
              <div class="flagship-subtitle">${p.subtitle || p.category}</div>
              <div class="flagship-pov-box">
                <div class="pov-label">✦ Designer's POV</div>
                <p>${p.pov}</p>
              </div>
              <div class="flagship-actions">
                <button class="btn-primary" onclick="openLightboxById('${p.id}')" data-cursor="EXPAND">
                  Preview Project ↗
                </button>
              </div>
            </div>
          </article>
`;
});
newGridHtml += `        </div>\n      </div>\n`;

indexHtml = indexHtml.replace(gridContent, newGridHtml);

// 4. Move Archive to archive.html
let archiveSectionStart = indexHtml.indexOf('<section class="works-section" id="works">');
let archiveSectionEnd = indexHtml.indexOf('</section>', archiveSectionStart) + 10;
let archiveSection = indexHtml.substring(archiveSectionStart, archiveSectionEnd);

// Replace archive section in indexHtml with a button
let archiveBtnHtml = `
    <section class="section" style="text-align: center; padding: 6rem 0;">
      <div class="page-container">
        <a href="archive.html" class="btn-primary" style="display: inline-block; padding: 1rem 3rem; font-size: 1.2rem; letter-spacing: 2px;">
          Complete archives
        </a>
      </div>
    </section>
`;

indexHtml = indexHtml.replace(archiveSection, archiveBtnHtml);

fs.writeFileSync(indexHtmlPath, indexHtml);

// Create archive.html
let archivePageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Archive - YUGAL</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="theme-dark">
  <main>
    <div style="padding: 2rem;">
      <a href="index.html" class="btn-primary" style="display: inline-block; padding: 0.8rem 1.5rem; font-size: 0.9rem; margin-bottom: 2rem;">← Back to Home</a>
    </div>
    ${archiveSection}
  </main>
  
  <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Project Details">
    <button class="lightbox-close" id="lightbox-close" aria-label="Close Modal">✕</button>
    <div class="lightbox-content">
      <div class="lightbox-media" id="lightbox-media"></div>
      <div class="lightbox-info">
        <div class="lightbox-category" id="lightbox-category"></div>
        <h2 class="lightbox-title" id="lightbox-title"></h2>
        <div class="lightbox-desc" id="lightbox-desc"></div>
        <div class="lightbox-pov">
          <div class="pov-label">✦ Designer's POV</div>
          <p id="lightbox-pov-text"></p>
        </div>
      </div>
    </div>
  </div>
  
  <script src="projects-data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
`;

fs.writeFileSync(archiveHtmlPath, archivePageHtml);
console.log("Completed all tasks.");

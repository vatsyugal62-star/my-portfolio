const fs = require('fs');
const path = require('path');

const portfolioProjectsPath = path.join(__dirname, '../portfolio/src/data/projects.ts');
const indexHtmlPath = path.join(__dirname, 'index.html');

let projectsTsStr = fs.readFileSync(portfolioProjectsPath, 'utf8');

let portfolioProjectsStr = projectsTsStr.substring(projectsTsStr.indexOf('export const projects = ') + 24, projectsTsStr.lastIndexOf('];') + 1);
let portfolioProjects = eval(`(${portfolioProjectsStr})`);

const excludedIds = [
  "yak-and-brew",
  "lays-rebrand",
  "travel-magazine",
  "poster-02",
  "social-post-01"
];

const featuredWorksRaw = portfolioProjects.filter(work => work.featured && !excludedIds.includes(work.id));
const topIds = ["poster-06", "social-chess"];
const featuredWorks = [...featuredWorksRaw].sort((a, b) => {
  const aIsTop = topIds.includes(a.id);
  const bIsTop = topIds.includes(b.id);
  if (aIsTop && !bIsTop) return -1;
  if (!aIsTop && bIsTop) return 1;
  return 0;
}).slice(0, 8); // Should be 6 items based on the user's mention

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

let flagshipGridStart = indexHtml.indexOf('<div class="flagship-grid">');
let endOfGrid = indexHtml.indexOf('</section>', flagshipGridStart);
let gridContent = indexHtml.substring(flagshipGridStart, endOfGrid);

let newGridHtml = `<div class="flagship-grid">\n`;
featuredWorks.forEach((p, idx) => {
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
fs.writeFileSync(indexHtmlPath, indexHtml);

console.log("Updated Selected Artpieces to only the 6 featured works!");

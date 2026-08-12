import { portfolioDB } from './database/portfolioDB.js';
import { renderHero } from './modules/hero.js';
import { renderAbout } from './modules/about.js';
import { renderProjects, initProjectFilter } from './modules/projects.js';
document.addEventListener("DOMContentLoaded", () => {
  // Render Hero Section from portfolioDB data
  renderHero(portfolioDB.hero);
  // Render About Section
  renderAbout(portfolioDB.about); 

  // Render projects grid & setup filter event listeners
  renderProjects(portfolioDB.projects);
  initProjectFilter(portfolioDB.projects,"top-rated");
});
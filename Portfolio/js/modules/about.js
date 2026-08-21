export function renderAbout(aboutData) {
  const container = document.getElementById("about");
  if (!container || !aboutData) return;

  // Build string using template literals and Array.map()
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: Info & Bio -->
        <div class="lg:col-span-5 space-y-6">
            <div>
                <h2 class="text-4xl font-bold theme-text-primary tracking-tight">
                    ${aboutData.titleMain} <span class="theme-text-gradient">${aboutData.titleHighlight}</span>
                </h2>
                <div class="w-12 h-1 theme-btn-primary rounded-full mt-2"></div>
            </div>

            <p class="theme-text-secondary leading-relaxed text-sm md:text-base">
                ${aboutData.bio}
            </p>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-4 pt-2">
                ${aboutData.stats.map(stat => `
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 theme-icon-box rounded-xl flex items-center justify-center flex-shrink-0">
                            <i data-lucide="${stat.icon}" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold theme-text-primary leading-none">${stat.value}</h3>
                            <p class="text-xs theme-text-light mt-1">${stat.label}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Call to Action Button -->
            <div class="pt-4">
                <a href="${aboutData.ctas.href}" class="${aboutData.ctas.classes}">
                    <span>${aboutData.ctas.text}</span>
                    <i data-lucide="${aboutData.ctas.icon}" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>
        </div>

        <!-- Right Column: Service Cards Grid -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            ${aboutData.services.map(service => `
                <div class="theme-bg-card p-6 rounded-2xl border theme-border theme-shadow space-y-3">
                    <div class="w-12 h-12 theme-icon-box rounded-xl flex items-center justify-center">
                        <i data-lucide="${service.icon}" class="w-6 h-6"></i>
                    </div>
                    <h3 class="font-bold theme-text-primary text-base">${service.title}</h3>
                    <p class="text-xs theme-text-secondary leading-relaxed">${service.description}</p>
                </div>
            `).join('')}
        </div>
    </div>
  `;

  // Parse and render Lucide icons dynamically
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}



export function renderStatsCounter(statsData) {
  const countUpData = document.getElementById("countUp-section");
  if (!countUpData || !statsData) {
    return;
  }
  countUpData.innerHTML = `
  <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-(theme-border)">

        ${statsData.map(stat => `
          <div class="flex flex-col items-center text-center pt-4 sm:pt-0">
          <div class="w-12 h-12 rounded-full theme-icon-box flex items-center justify-center mb-3">
            <i class="fa-solid fa-code text-base text-[var(--primary)]"></i>
          </div>
          <span class="text-3xl sm:text-4xl font-extrabold theme-text-primary tracking-tight" data-target="${stat.value}"
            data-suffix="${stat.suffix}">${stat.value}</span>
          <span class="text-xs font-medium theme-text-secondary mt-1">${stat.label}</span>
        </div>
        `).join('')}
       
      </div>
  `;
  //  Counter Animation via IntersectionObserver
  const statsCounter = document.querySelectorAll('[data-target]');
  statsCounter.forEach((counter) => {
    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix;
    const duration = 2000;
    const startTime = performance.now();
    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;

      let progress = elapsedTime / duration;

      // Prevent progress from going above 1
      progress = Math.min(progress, 1);
      // Calculate current number
      const currentValue = Math.floor(target * progress);
      // Update HTML
      counter.textContent = `${currentValue}${suffix}`;
      // Continue animation
      if (progress < 1) {

        requestAnimationFrame(updateCounter);

      } else {

        // Make sure final value is exact
        counter.textContent = `${target}${suffix}`;

      }
    }
    requestAnimationFrame(updateCounter);
  })
}

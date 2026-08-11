export function renderHero(heroData) {
  const container = document.getElementById("home");
  const skeleton = document.getElementById("hero-skeleton");

  if (!container || !heroData) return;

  // Build Hero Section HTML String
  container.innerHTML = `
    <section id="hero-section"
        class="mt-7 flex flex-col gap-6 w-full lg:max-w-2xl relative z-10 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
        
        <div class="inline-flex items-center gap-2 theme-text-secondary font-semibold rounded-full theme-bg-card px-4 py-1.5 text-xs sm:text-sm border theme-border shadow-sm">
            ${heroData.greeting}
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl theme-text-primary font-extrabold tracking-tight leading-none">
            ${heroData.titleMain}
            <span class="theme-text-gradient">${heroData.titleGradient}</span>
        </h1>

        <p class="theme-text-secondary text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed">
            ${heroData.bio}
        </p>

        <!-- Dynamic Action Buttons -->
        <div class="flex flex-wrap gap-4 justify-center lg:justify-start w-full mt-2">
            ${heroData.ctas.map(cta => `
              <a href="${cta.href}" class="${cta.classes}">
                ${cta.text}
              </a>
            `).join('')}
        </div>

        <!-- Dynamic Stats Section -->
        <div class="flex flex-wrap items-center justify-center gap-12 mt-4 pt-6 border-t theme-border px-4">
            ${heroData.stats.map(stat => `
              <div class="flex flex-col items-start">
                  <div id="${stat.id}-val" class="text-3xl md:text-3xl font-black theme-text-primary tracking-tight">
                      ${stat.value}
                  </div>
                  <div id="${stat.id}-lab" class="theme-text-light text-[10px] font-black uppercase tracking-[0.2em] mt-1 opacity-80 whitespace-nowrap">
                      ${stat.label}
                  </div>
              </div>
            `).join('')}
        </div>
    </section>

    <!-- Image Card Section -->
    <section id="hero-pic"
        class="w-full lg:max-w-xl flex justify-center order-1 lg:order-2 relative select-none perspective-[1000px]">
        <div class="relative w-64 h-64 sm:w-80 lg:h-96 lg:w-96 rounded-3xl p-6 flex theme-bg-card items-center justify-center border theme-border theme-shadow backdrop-blur-xs animate-[spin_8s_linear_infinite] hover:[animation-play-state:paused] hover:shadow-[0_20px_50px_rgba(182,122,53,0.35)] transition-shadow duration-500 cursor-pointer group">
            <div class="absolute inset-4 rounded-2xl bg-slate-900/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-inner">
                <img src="${heroData.image.src}" class="w-72 h-72 object-cover rounded-2xl" alt="${heroData.image.alt}" />
            </div>

            <!-- Ambient Glow Elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-amber-500/20 blur-xl animate-pulse"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-amber-600/20 blur-xl animate-pulse"></div>
        </div>
    </section>
  `;

  // Hide Skeleton & Show Content
  if (skeleton){
    skeleton.classList.add("hidden");
    container.classList.remove("hidden");
  } 
}
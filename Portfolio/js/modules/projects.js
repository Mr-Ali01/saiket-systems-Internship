export function renderProjects(projectList) {
    const container = document.getElementById("project-card");
    if(!container || !projectList) {
        return;
    }
    if(projectList.length ===0){
        container.innerHTML = `<p class="col-span-full theme-text-secondary py-8">No projects found in this category.</p>`;
    }

    container.innerHTML = projectList.map(project =>`
        <div id="${project.id}"
        data-category="${project.category}"
        data-top="${project.isTopRated}"
        class="project-cards w-80 border theme-border theme-bg-card rounded-2xl flex flex-col gap-3 hover:-translate-y-2 duration-300 transition-all theme-shadow p-3">
        
        <!-- Image & Top Rated Badge -->
        <div class="relative h-48 overflow-hidden rounded-xl">
            <img src="${project.image}" class="w-full h-full animate-scroll-image" alt="${project.title}" />
            ${project.isTopRated ? `
                <div class="absolute top-3 left-3 z-30 flex items-center justify-center gap-1.5 px-3 py-1 rounded-full theme-btn-primary">
                    <span class="w-2 h-2 rounded-full bg-stone-900"></span>
                    <span class="font-bold text-[10px] tracking-wider uppercase">TOP RATED</span>
                </div>
            ` : ''}
        </div>

        <!-- Tech Stack Tags -->
        <div class="flex gap-2 items-center px-1">
            ${project.technologies.map(tech => `
                <span class="theme-bg-secondary theme-text-primary p-1 px-2 font-semibold text-[13px] rounded border theme-border">${tech}</span>
            `).join('')}
        </div>

        <!-- Title & Description -->
        <div class="px-1">
            <h1 class="text-lg font-bold theme-text-primary">${project.title}</h1>
            <p class="text-xs theme-text-secondary mt-1 leading-relaxed">
                ${project.description}
            </p>
        </div>

        <!-- Action Links -->
        <div class="px-1 mt-2 flex gap-3 items-center justify-center">
            <a class="flex-1 text-center py-2 font-semibold text-xs border theme-border rounded-xl theme-btn-primary" href="${project.liveUrl}">Live Demo</a>
            <a class="flex-1 text-center py-2 font-semibold text-xs border theme-border rounded-xl theme-bg-secondary theme-text-primary" href="${project.codeUrl}">Source Code</a>
        </div>
    </div>`).join('');
}

export function initProjectFilter(allProject){
    const filterContainer = document.getElementById("project-filters");
    if(!filterContainer){
        return;
    }
    // console.log(filterContainer);

    
    filterContainer.addEventListener("click", (e)=>{
        const button = e.target.closest("[data-filter]");
        if(!button){
            return;
        }
        const filterCategory = button.getAttribute("data-filter");
        // Highlight Active Filter Button
        const buttons = filterContainer.querySelectorAll("[data-filter]");
        buttons.forEach(btn => {
            btn.className ="btn-state cursor-pointer theme-bg-card border theme-border theme-text-primary p-2 text-center font-semibold text-sm rounded-xl";
        });
        button.className = "btn-state cursor-pointer theme-btn-primary p-2 text-center font-semibold text-sm rounded-xl";

        // Filter Logic using Array.prototype.filter()
        let filteredProjects =[];
        if(filterCategory === "top-rated") {
            filteredProjects = allProject.filter(p => p.isTopRated === true);
        } else {
            filteredProjects = allProject.filter(p=> p.category === filterCategory);
        }
        // Re-render grid with filtered list
        renderProjects(filteredProjects);
    });
}
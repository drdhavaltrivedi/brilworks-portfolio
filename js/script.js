document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');
    const searchInput = document.getElementById('search-input');
    let searchQuery = '';

    // Render Project Cards
    const renderProjects = (items) => {
        grid.innerHTML = '';
        if (items.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 6rem 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.2;">🔍</div>
                    <h3 style="margin-bottom: 0.5rem; opacity: 0.8;">No matching results</h3>
                    <p style="color: var(--text-secondary);">Try searching for a different domain or project name.</p>
                </div>
            `;
            return;
        }

        items.forEach((project, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="card-domain">${project.domain}</div>
                <h3 class="card-title">${project.name}</h3>
                <p class="card-desc">${project.description}</p>
                <div class="card-footer">
                    <a href="${project.url === '#' ? 'javascript:void(0)' : project.url}" 
                       target="${project.url === '#' ? '_self' : '_blank'}" 
                       rel="noopener noreferrer" 
                       class="view-btn"
                       style="${project.url === '#' ? 'opacity: 0.5; cursor: not-allowed !important;' : ''}">
                        ${project.url === '#' ? 'Case Study Coming Soon' : 'View Case Study'}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    const updateView = () => {
        let filtered = projects;
        
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(q) || 
                p.domain.toLowerCase().includes(q) || 
                p.description.toLowerCase().includes(q)
            );
        }

        renderProjects(filtered);
    };

    // Listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            updateView();
        });
    }

    // Initial render
    updateView();

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');
    const searchInput = document.getElementById('search-input');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const navbar = document.getElementById('navbar');

    let searchQuery = '';
    let currentTab = 'all';

    // Navbar scroll state
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    // Intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Render Project Cards
    const renderProjects = (items) => {
        grid.innerHTML = '';

        if (items.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <h3>No matching results</h3>
                    <p>Try a different domain, industry, or project name.</p>
                </div>`;
            return;
        }

        items.forEach((project, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.animationDelay = `${Math.min(index * 0.045, 0.5)}s`;

            const isDisabled = project.url === '#';
            const aiBadge = project.isAI ? `<span class="card-badge">AI</span>` : '';

            card.innerHTML = `
                <div class="card-color-bar" style="background: ${project.color}"></div>
                <div class="card-body">
                    <div class="card-top">
                        <span class="card-domain">${project.domain}</span>
                        ${aiBadge}
                    </div>
                    <h3 class="card-title">${project.name}</h3>
                    <p class="card-desc">${project.description}</p>
                    <div class="card-footer">
                        <a href="${isDisabled ? 'javascript:void(0)' : project.url}"
                           ${!isDisabled ? `target="_blank" rel="noopener noreferrer"` : ''}
                           class="view-btn"
                           ${isDisabled ? 'style="opacity:0.4; cursor:not-allowed; pointer-events:none;"' : ''}>
                            ${isDisabled ? 'Case Study Coming Soon' : 'View Case Study'}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>`;
            grid.appendChild(card);
        });
    };

    const updateView = () => {
        let filtered = projects;
        if (currentTab === 'ai') filtered = filtered.filter(p => p.isAI);
        else if (currentTab === 'core') filtered = filtered.filter(p => !p.isAI);

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

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            updateView();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', e => {
            searchQuery = e.target.value;
            updateView();
        });
    }

    updateView();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

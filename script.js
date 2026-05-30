/* Improved site script
   - preserves preloader and avatar click
   - adds smooth scrolling, active nav highlighting
   - adds intersection reveal + stagger
   - dynamically creates floating tech icons and project filters
*/

// Helper: safe query
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Preloader handling (keep existing behavior)
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => { preloader.style.display = 'none'; }, 900);
  }, 900);
});

// DOM ready initializers
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll behavior
  try { document.documentElement.style.scrollBehavior = 'smooth'; } catch (e) {}

  // Mobile menu toggle (id: mobile-menu-toggle expected)
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Avatar playful toggle (preserve images)
  const avatar = document.getElementById('avatar-img');
  if (avatar) {
    avatar.addEventListener('click', () => {
      try {
        avatar.src = avatar.src.includes('img/2x2.png') ? 'img/shy1.png' : 'img/2x2.png';
      } catch (e) {}
    });
  }

  // Floating tech icons (non-intrusive decorative elements)
  (function createFloatingIcons(){
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const icons = [ ['K','k'], ['🤖','a'], ['🛠️','s'], ['💾','db'] ];
    icons.forEach((pair, i)=>{
      const el = document.createElement('div');
      el.className = `float-icon small ${pair[1]}`;
      el.textContent = pair[0];
      el.setAttribute('aria-hidden','true');
      el.style.pointerEvents = 'none';
      hero.appendChild(el);
    });
  })();

  // IntersectionObserver for reveal animations and active nav
  const sections = $$('main section');
  const navLinksAll = $$('a[href^="#"]');

  const onIntersect = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = navLinksAll.find(a => a.getAttribute('href') === `#${id}`);
      if (entry.isIntersecting) {
        // reveal children with stagger
        const children = $$('.reveal', entry.target).length ? $$('.reveal', entry.target) : Array.from(entry.target.children);
        children.forEach((c, idx) => { setTimeout(()=> c.classList.add('in-view'), idx*60); });
        if (link) { navLinksAll.forEach(a=>a.classList.remove('active')); link.classList.add('active'); }
      }
    });
  };
  const sectionObserver = new IntersectionObserver(onIntersect, { threshold: 0.35 });
  sections.forEach(s => { s.classList.add('reveal'); sectionObserver.observe(s); });

  // Apply reveal class to common content blocks for nicer stagger
  ['.project-card', '.timeline-card', '.cert-item', '.about-card', '.skill-card'].forEach(sel => {
    $$(sel).forEach((el, idx) => { el.classList.add('reveal', `stagger-${(idx%3)+1}`); });
  });

  // Create project filter bar from existing project labels
  (function projectFilters(){
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    const grid = projectsSection.querySelector('.project-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.project-card'));
    const labels = Array.from(new Set(cards.map(c => (c.querySelector('.project-label')||{textContent:''}).textContent.trim()))).filter(Boolean);
    if (labels.length < 2) return; // no need to show filter
    const bar = document.createElement('div');
    bar.className = 'project-filter';
    const allBtn = document.createElement('button'); allBtn.textContent = 'All'; allBtn.classList.add('active'); bar.appendChild(allBtn);
    allBtn.addEventListener('click', ()=>{ bar.querySelectorAll('button').forEach(b=>b.classList.remove('active')); allBtn.classList.add('active'); cards.forEach(c=>c.style.display='block'); });
    labels.forEach(lbl => {
      const b = document.createElement('button'); b.textContent = lbl; bar.appendChild(b);
      b.addEventListener('click', ()=>{
        bar.querySelectorAll('button').forEach(x=>x.classList.remove('active')); b.classList.add('active');
        cards.forEach(c=>{
          const cardLabel = (c.querySelector('.project-label')||{textContent:''}).textContent.trim();
          c.style.display = (cardLabel === lbl) ? 'block' : 'none';
        });
      });
    });
    // insert bar after section header
    const header = projectsSection.querySelector('.section-header');
    header && header.parentNode.insertBefore(bar, header.nextSibling);
  })();

  // Active nav sticky behavior (small visual change)
  const topNav = document.querySelector('.navbar');
  const navObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e => topNav && topNav.classList.toggle('scrolled', !e.isIntersecting));
  });
  const heroEl = document.querySelector('.hero') || document.querySelector('header') || document.querySelector('main');
  if (heroEl && topNav) navObserver.observe(heroEl);

  // Smooth in-page anchor behavior fallback
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        navLinks && navLinks.classList.remove('active');
        menuToggle && menuToggle.classList.remove('active');
      }
    });
  });

});
    

document.addEventListener('DOMContentLoaded', () => {

/* ===== MENU HAMBURGER ===== */
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => navLinks.classList.toggle('show'));

/* ===== TOOLTIP LINKS ===== */
    const links = document.querySelectorAll('nav a[data-tooltip]');
    links.forEach(link => {
    const id = link.dataset.tooltip;
    const tooltip = document.getElementById(id);
    
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if(isTouchDevice){
        link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelectorAll('.tooltip-box').forEach(t=>t.style.display='none');
        tooltip.style.display = tooltip.style.display==='block'?'none':'block';
    });
    } else {
        link.addEventListener('mouseenter', ()=>{ tooltip.style.display='block'; });
        link.addEventListener('mouseleave', ()=>{ tooltip.style.display='none'; });
    }
    });

/* ===== ANIMAÇÃO DAS CAIXAS ===== */
    const caixas = document.querySelectorAll('.caixa');
    const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    }
    });
    }, {threshold:0.5});
    caixas.forEach(c=>observer.observe(c));

/* ===== TOOLTIP DAS IMAGENS ===== */
    caixas.forEach(caixa=>{
    const tooltip = caixa.querySelector('.tooltip');
    caixa.addEventListener('mouseenter',()=>{ tooltip.style.visibility='visible'; tooltip.style.opacity='1'; tooltip.style.transform='scale(1.1)'; });
    caixa.addEventListener('mouseleave',()=>{ tooltip.style.visibility='hidden'; tooltip.style.opacity='0'; tooltip.style.transform='scale(1)'; });
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // ? MENU HAMBÚRGUER
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => navLinks.classList.toggle('show'));

    // ? Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // ? ANIMAÇÃO DAS CAIXAS (Intersection Observer) =====
    const caixas = document.querySelectorAll('.caixa');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    caixas.forEach(c => observer.observe(c));

    // ? MODAL DOS PETS 
    const petCaixas = document.querySelectorAll('.caixa[data-pet]');
    const modais = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // ? Abrir modal ao clicar na caixa
    petCaixas.forEach(caixa => {
        caixa.addEventListener('click', () => {
            const petName = caixa.dataset.pet;
            const modal = document.getElementById(`modal-${petName}`);
            if (modal) {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // ? Fechar modal ao clicar no X
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ? Fechar modal ao clicar fora do conteúdo
    modais.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    });

});
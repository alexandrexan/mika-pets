document.addEventListener('DOMContentLoaded', () => {

    // ? MENU HAMBÚRGUER
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');

    toggle.setAttribute(
            'aria-expanded',
            menu.classList.contains('open')
        );
    });

    // ? Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
        menu.classList.remove('open');
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

    // ? BOTÃO VOLTAR AO TOPO
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
    });

    btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });

    // ? FORMULÁRIO DE NEWSLETTER
    const form = document.getElementById('news-form');
    const msg = document.querySelector('.news-msg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

    msg.textContent = 'E-mail cadastrado com sucesso!';
    msg.classList.add('show');
    
    form.reset();

    setTimeout(() => {
    msg.textContent = '';
    msg.classList.remove('show');
    }, 2000);
    });

    // ? Implementa scroll spy manual.
    // ? Sincroniza o menu com a rolagem da página.
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, footer');

    window.addEventListener('scroll', () => {
        let pos = window.scrollY + 120;

    sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        links.forEach(l => l.classList.remove('active'));
        document
            .querySelector(`.nav-links a[href="#${sec.id}"]`)
            ?.classList.add('active');
        }
        });
    });

    // ? Destaque de seção ao clicar no menu
    const menuLinks = document.querySelectorAll('.nav-links a');

    menuLinks.forEach(link => {
    link.addEventListener('click', () => {
    const id = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(id);

    if (!section) return;

    section.classList.add('section-highlight');

    setTimeout(() => {
        section.classList.remove('section-highlight');
    }, 1200);
    }, 300);
    });
});
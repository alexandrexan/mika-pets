document.addEventListener('DOMContentLoaded', () => {
    const caixas = document.querySelectorAll('.caixa');

    caixas.forEach(caixa => {
        const tooltip = caixa.querySelector('.tooltip');

        caixa.addEventListener('mouseenter', () => {
            // Adiciona a classe que anima a entrada do tooltip
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'scale(1.1)';
        });

        caixa.addEventListener('mouseleave', () => {
            // Remove a classe para esconder o tooltip
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const caixas = document.querySelectorAll('.caixa');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a animação ocorrer apenas uma vez
            }
        });
    }, {
        threshold: 0.5 // A animação começa quando 50% do elemento está visível
    });

    caixas.forEach(caixa => {
        observer.observe(caixa);
    });
});     
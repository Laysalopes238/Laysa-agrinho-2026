// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todas as seções que queremos animar
    const sections = document.querySelectorAll('.animate-box');

    // Configurações do Intersection Observer
    const options = {
        threshold: 0.15, // Ativa a animação quando 15% da seção estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    // Cria o observador que adiciona a classe 'appear' do CSS
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, options);

    // Aplica o observador a cada uma das seções
    sections.forEach(section => {
        observer.observe(section);
    });
});

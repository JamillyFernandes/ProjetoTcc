document.addEventListener("DOMContentLoaded", function () {
    // Selecionar todos os links da navbar
    const navLinks = document.querySelectorAll(".nav-link");
    const sectionContent = document.querySelector("#content"); // A seção que será atualizada

    // Guardar o conteúdo inicial da seção
    const initialContent = sectionContent.innerHTML;

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar o comportamento padrão

            // Obter o ID correspondente ao href do link
            const targetId = link.getAttribute("href").substring(1); // Remove o '#' do href

            if (targetId === "inicio") {
                // Restaurar o conteúdo inicial
                sectionContent.innerHTML = initialContent;
            } else {
                // Procurar a div correspondente
                const targetDiv = document.querySelector(`.${targetId}`);

                if (targetDiv) {
                    // Substituir o conteúdo da seção pelo conteúdo da div correspondente
                    sectionContent.innerHTML = targetDiv.innerHTML;
                }
            }
        });
    });
});

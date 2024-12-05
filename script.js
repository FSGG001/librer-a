document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#menu li");
    const dynamicImage = document.getElementById("dynamicImage");
    const dynamicText = document.getElementById("dynamicText");
    const dynamicTitle = document.getElementById("dynamicTitle");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            // Actualizar selección activa
            menuItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");

            // Cambiar contenido dinámico
            dynamicImage.src = item.dataset.image;
            dynamicText.textContent = item.dataset.text;
            dynamicTitle.textContent = item.dataset.title;
        });
    });
});

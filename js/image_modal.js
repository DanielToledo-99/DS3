// ./js/image_modal.js
(function () {
  const modal = document.getElementById("ds3-image-modal");
  const modalImg = document.getElementById("ds3-modal-image");
  const closeBtn = modal?.querySelector(".ds3-modal__close");

  if (!modal || !modalImg || !closeBtn) {
    // Si no existe el modal en esta página, no hacemos nada.
    return;
  }

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "Imagen ampliada";
    modal.classList.add("is-open");
    document.body.classList.add("ds3-modal-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("ds3-modal-open");
    modal.setAttribute("aria-hidden", "true");

    // Limpieza para evitar parpadeo al reabrir
    modalImg.src = "";
  }

  // Click en cualquier imagen marcada con data-zoom
  document.addEventListener("click", function (e) {
    const img = e.target.closest("img[data-zoom]");
    if (!img) return;

    openModal(img.src, img.alt);
  });

  // Cerrar con X
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeModal();
  });

  // Cerrar si haces click fuera de la imagen
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();

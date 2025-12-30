(function () {
  const openBtn = document.getElementById("openMobileMenu");
  const closeBtn = document.getElementById("closeMobileMenu");
  const drawer = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");

  if (!openBtn || !closeBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    overlay.hidden = false;
    openBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { overlay.hidden = true; }, 200);
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

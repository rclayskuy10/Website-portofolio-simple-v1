// Toggle mobile menu visibility
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden-mobile")) {
    mobileMenu.classList.remove("hidden-mobile");
    mobileMenu.classList.add("block-mobile");
  } else {
    mobileMenu.classList.remove("block-mobile");
    mobileMenu.classList.add("hidden-mobile");
  }
});

// Handle active state for navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust the value to match your navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });

  var typed = new Typed("#text", {
    strings: ["Bachelor of Computer Science (B.C.S)"],
    typeSpeed: 100,      // Perkecil kecepatan mengetik agar lebih halus
    backSpeed: 50,       // Perkecil kecepatan menghapus agar lebih smooth
    backDelay: 500,      // Tambahkan jeda saat selesai mengetik sebelum menghapus
    startDelay: 300,     // Tambahkan jeda sebelum mulai mengetik
    loop: true,          // Aktifkan loop
    showCursor: false,   // Menyembunyikan kursor
  });  
});

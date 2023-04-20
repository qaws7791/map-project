if (typeof window === "undefined") {
  // Server-side code
  console.log("server");
} else {
  // Browser-side code
  console.log("client");
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
  };
}

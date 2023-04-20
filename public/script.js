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

function handleCredentialResponse(response) {
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = decodeJwtResponse(response.credential);

  console.log("ID: " + responsePayload.sub);
  console.log("Full Name: " + responsePayload.name);
  console.log("Given Name: " + responsePayload.given_name);
  console.log("Family Name: " + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
}

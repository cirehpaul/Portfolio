window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 2500); 

  const avatar = document.getElementById("avatar-img");

  avatar.addEventListener("click", () => {
   
    if (avatar.src.includes("img/2x2.png")) {
      avatar.src = "img/shy1.png"; 
    } else {
      avatar.src = "img/2x2.png";
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active"); // Toggle the 'active' class on the nav-links
  });
});


});
    

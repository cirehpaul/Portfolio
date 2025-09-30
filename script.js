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

});
    

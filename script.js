// ======================
// Smooth Scroll
// ======================
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", function (e) {
   
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ======================
// Navbar Background on Scroll
// ======================
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#383848";
    navbar.style.transition = "0.3s";
  } else {
    navbar.style.background = "transparent";
  }
});

// ======================
// Book Table Button Alert
// ======================
const bookBtn = document.querySelector(".btn-primary");
if (bookBtn) {
  bookBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("✅ Table booked successfully!");
  });
}

// ======================
// Gallery Hover Effect (Zoom)
// ======================
const images = document.querySelectorAll("#gallery img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "0.3s";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// ======================
// Contact Form Validation
// ======================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();

    if (name === "" || email === "" || subject === "") {
      e.preventDefault();
      alert("❌ Please fill all required fields!");
    } else {
      alert("✅ Message sent successfully!");
    }
  });
}

// ======================
// Reveal Elements on Scroll
// ======================
const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  revealElements.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "0.6s";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    }
  });
});
// ======================
// Loading Screen
// ======================
window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.innerText = "Loading...";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.background = "#000";
  loader.style.color = "#fff";
  loader.style.display = "flex";
  loader.style.justifyContent = "center";
  loader.style.alignItems = "center";
  loader.style.fontSize = "30px";
  loader.style.zIndex = "9999";

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

const currentPage=window.location.pathname;
const navbar=document.getElementById("navbar");
if(!currentPage.includes("index.html")&&currentPage !=="/"){
  navbar.style.background="#383848"
}
const lightSection=document.querySelectorAll("#about,#menu,#contact");
window.addEventListener("scroll",()=>{
  let islight=false;
  lightSection.forEach(section=>{
    const rect=section.getBoundingClientRect();
    if(rect.top<=100 && rect.bottom >= 100){islight = true}});
  if (islight){
    navbar.style.background="#383848";
  }
  else{
    navbar.style.background="transparent";
  }
  })
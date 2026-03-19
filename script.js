
const ContactForm = document.querySelector("#contact-form");
const ContactBtn = document.querySelector(".btn-submit");
const ContactResult = document.querySelector("#contact-result");
const ham = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");
const body = document.querySelector("body");
const openBtn = document.querySelector(".book-now");
const container = document.querySelector(".container");
const card1 = document.querySelector(".card");
const login = document.querySelector(".login");
const card2 = document.querySelector(".second-card");
const form = document.querySelector(".register-form");
const year = document.querySelector(".upto-date");
const currentYear = new Date().getFullYear();
const navbar = document.querySelector(".nav-bar");
const scrolltop = document.querySelector(".scroll-to-top");
const order = document.querySelector(".shop-now");
const menuContainers = document.querySelectorAll(".menu-flex");
const section = document.querySelectorAll("section");
const nav_link = document.querySelectorAll(".nav-link");
const RegisterBtn = document.querySelector(".Register");
const checkbox = document.querySelector(".Checking");
const InputValue = document.querySelectorAll(".input");
const userProfilecontainer = document.querySelector(".user-profile ");
const navProfile = document.querySelector(".nav-userprofile");
year.textContent = `©${currentYear} Haven Roaster`;
const user_container = document.querySelector("#user_profile_name")

const ICONS = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,

  error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,

  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,

  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
};






RegisterBtn.addEventListener("click", (e) => {
  let data = {};
  e.preventDefault();
  const InputValuecheck = [...InputValue].every(
    (input) => input.value.trim() !== "",
  );
  if (!InputValuecheck) {
    alert("Fill all fields" ,"warning");
    return;
  }
  InputValue.forEach((input) => {
    data[input.id] = input.value.trim();
  });
  if (data.password !== data["confirm-password"] ) {
    alert("Password not match","warning");
    return;
  }
  if(!checkbox.checked){
    alert("checkbox is not checked","warning")
    return
  }

   openBtn.style.display = "none";
  navProfile.style.display = "block";
  container.classList.remove("hidden");
  card2.classList.remove("show");
});

ham.addEventListener("click", () => {
  navItems.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navItems.classList.remove("active");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navItems.classList.remove("active");
    userProfilecontainer.classList.remove("active");
  }
});
document.addEventListener("click", (e) => {
  console.log(e.target);
  if (navItems.classList.contains("active") && !ham.contains(e.target)) {
    navItems.classList.remove("active");
  }
});

openBtn.addEventListener("click", () => {
  container.classList.add("hidden");
  card1.classList.add("show");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    container.classList.remove("hidden");
    card2.classList.remove("show");
    form.reset();
  }
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    container.classList.remove("hidden");
    card2.classList.remove("show");
    form.reset();
  }
});
login.addEventListener("click", () => {
  card1.classList.remove("show");
  card2.classList.add("show");
});

// navbar scroll effect

window.addEventListener("scroll", () => {
  const scrollheight = window.scrollY;
  const navheight = navbar.getBoundingClientRect().height;
  if (scrollheight > navheight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  if (scrollheight > 500) {
    scrolltop.style.display = "block";
  } else {
    scrolltop.style.display = "none";
  }
});
scrolltop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

menuContainers.forEach((event) => {
  event.addEventListener("click", (event) => {
    const card = event.target.closest(".menu-card");
    if (!card) return;
    card1.classList.add("show");
    container.classList.add("hidden");
  });
});
order.addEventListener("click", (e) => {
  e.preventDefault();
  card1.classList.add("show");
  container.classList.add("hidden");
});

// nav-active state
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      nav_link.forEach((link) => {
        link.classList.toggle(
          "nav-active",
          link.getAttribute("href") === `#${id}`,
        );
      });
    });
  },
  { threshold: 0.6 },
);
section.forEach((observe) => observer.observe(observe));





navProfile.addEventListener("click", (e) => {
  userProfilecontainer.classList.add("active");
});
document.addEventListener("click", (e) => {
  if (
    userProfilecontainer.classList.contains("active") &&
    !userProfilecontainer.contains(e.target) &&
    !navProfile.contains(e.target)
  ) {
    userProfilecontainer.classList.remove("active");
  }
});
//
// Contact form logic

ContactForm.addEventListener("submit", async (e) => {
  console.log("Form submission intercepted!");
  e.preventDefault();
  const formData = new FormData(ContactForm);
  const ContactBtn = ContactForm.querySelector('button[type="submit"]');
  const originalText = ContactBtn.innerHTML;
  ContactBtn.disabled = true;
  ContactBtn.innerHTML = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      ContactResult.textContent = "Success! Message sent.";
      ContactResult.style.color = "green";
      alert("Your form has been submited", "success");
      ContactForm.reset();
      setTimeout(() => {
        ContactResult.textContent = "";
        ContactResult.style.color = "";
      }, 3000);
    } else {
      ContactResult.textContent = data.message || "Submission failed.";
      ContactResult.style.color = "red";
      setTimeout(() => {
        ContactResult.textContent = "";
        ContactResult.style.color = "";
      }, 3000);
    }
  } catch (error) {
    ContactResult.textContent = "Network error occurred.";
    ContactResult.style.color = "red";
  } finally {
    ContactBtn.disabled = false;
    ContactBtn.innerHTML = originalText;
  }
});

const alertContainer = document.querySelector("#alert-container");
function alert(message, type = "error", duration = 4000) {
  const div = document.createElement("div");
  div.className = `alert-toast ${type}`;

  div.innerHTML = `
  
    <span class="alert-msg">${message}</span>
      <div class="alert-icon">${ICONS[type]}</div>
  `;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      div.classList.add("show");
    });
  });
  alertContainer.appendChild(div);
  setTimeout(() => {
    div.classList.remove("show");
  }, duration);
}

const canvas = document.getElementById("profileCanvas");
const ctx = canvas.getContext("2d");
const fileInput = document.getElementById("pic_change");
const defaultImg = new Image();
defaultImg.onload = () => {
  canvas.width = 150;
  canvas.height = 150;
  ctx.drawImage(defaultImg, 0, 0, canvas.width, canvas.height);
};
defaultImg.src = "assects/profile_picture.jpg";
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(img.src);
  };
  img.src = URL.createObjectURL(file);
    navProfile.src=URL.createObjectURL(file);

});


// to add review
const Reviewform = document.querySelector(".review-form");
// const reviewsubmitBtn = document.querySelector("")
Reviewform.addEventListener("submit",(e)=>{
  e.preventDefault()
  const reviewContainer = document.querySelector(".carousel-track")
  const reviewData = new FormData(Reviewform);
  const data = Object.fromEntries(reviewData);
  const article = document.createElement("article");
  const img = new Image();
  const p1 = document.createElement("p")
  const p2 = document.createElement("p")
  article.className = "review-card"
  img.className = "review-photo"
  p1.className = "review-name"
  p2.className = "review-comment"
  
const fileInput = Reviewform.querySelector(".form-input1");
const file = fileInput.files[0];

if (file) {
  img.src = URL.createObjectURL(file); 
} else {
  img.src = "assects.profile_picture.jpg"; 
}
  p1.textContent = `${data.name}`
  p2.textContent = `"${data.review}"`
  article.append(img,p1,p2);
  reviewContainer.appendChild(article);
  Reviewform.reset();

})

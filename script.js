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
const user_container = document.querySelector("#user_profile_name");
const Reviewform = document.querySelector(".review-form");
const label = document.querySelector(".form-input1");
const title = document.querySelector(".review-form-title");
const canvas = document.getElementById("profileCanvas");
const ctx = canvas.getContext("2d");
const fileInput = document.getElementById("pic_change");
const chooseeFile = document.querySelector("#file");
const alertContainer = document.querySelector("#alert-container");

const ICONS = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,

  error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,

  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,

  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
};
const username = document.getElementById("user-display");
const useremail = document.getElementById("user-email-display");
let userData = JSON.parse(localStorage.getItem("allUsers")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  showProfile();
  if (username) username.textContent = currentUser["user-name"];
  if (useremail) useremail.textContent = currentUser.email;
}

document.querySelector(".logout").addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("currentUser");
  openBtn.style.display = "block";
  navProfile.style.display = "none";
  userProfilecontainer.classList.remove("active");

  alert("See you later! 👋", "info");
});

const secondLogin = document.querySelector(".second-login");

secondLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const loginUserName = document.querySelector(".login-username").value.trim();
  const loginpassword = document.querySelector(".login-password").value.trim();
  const FindPerson = userData.find(
    (user) =>
      user["user-name"] === loginUserName && user.password === loginpassword,
  );
  if (FindPerson) {
    localStorage.setItem("currentUser", JSON.stringify(FindPerson));
    showProfile();
    username.textContent = FindPerson["user-name"];
    useremail.textContent = FindPerson.email;
    ToRemoveRegister();
    alert(`Welcome back ${FindPerson["user-name"]}!`, "success");
  } else {
    alert("Invalid username or password", "error");
  }
});

RegisterBtn.addEventListener("click", (e) => {
  let data = {};
  e.preventDefault();
  const InputValuecheck = [...InputValue].every(
    (input) => input.value.trim() !== "",
  );
  if (!InputValuecheck) {
    alert("Fill all fields", "warning");
    return;
  }
  InputValue.forEach((input) => {
    data[input.id] = input.value.trim();
  });
  if (data["user-name"].length < 4) {
    alert("User name must contain atlest 4 letter ", "warning");
    return;
  }
  const isDuplicate = userData.some((user) => user.email === data.email);
  if (isDuplicate) {
    alert("This email is already registered!", "warning");
    return;
  }

  if (!data.email.includes("@")) {
    alert("Please enter valid email", "warning");
    return;
  }

  if (
    !data.email.includes(".") ||
    data.email.lastIndexOf(".") < data.email.indexOf("@")
  ) {
    alert("Please enter a valid domain (e.g., .com)", "warning");
    return;
  }
  if (data.password.length < 4) {
    alert("Password must be atlest 4 letter ");
    return;
  }
  if (data.password !== data["confirm-password"]) {
    alert("Password not match", "warning");
    return;
  }
  if (!checkbox.checked) {
    alert("checkbox is not checked", "warning");
    return;
  }

  showProfile();
  ToRemoveRegister();
  alert("Yayyyyyyyyyyyyy u did well😏", "success");
  form.reset();
  userData.push(data);
  if (username) username.textContent = data["user-name"];
  if (useremail) useremail.textContent = data.email;
  localStorage.setItem("allUsers", JSON.stringify(userData));
  localStorage.setItem("currentUser", JSON.stringify(data));
  console.log(userData);
});
function showProfile() {
  openBtn.style.display = "none";
  navProfile.style.display = "block";
}
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
  if (navItems.classList.contains("active") && !ham.contains(e.target)) {
    navItems.classList.remove("active");
  }
});

openBtn.addEventListener("click", () => {
  Toregister();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    ToRemoveRegister();
    form.reset();
  }
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    ToRemoveRegister();
    form.reset();
  }
});
login.addEventListener("click", () => {
  card1.classList.remove("show");
  card2.classList.add("show");
});
function ToRemoveRegister() {
  container.classList.remove("hidden");
  card1.classList.remove("show");
  card2.classList.remove("show");
}

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
    if (navProfile.style.display === "block") return;
    Toregister();
  });
});
order.addEventListener("click", (e) => {
  e.preventDefault();
  if (navProfile.style.display === "block") return;
  Toregister();
});

function Toregister() {
  card1.classList.add("show");
  container.classList.add("hidden");
}

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

// createing a simple toast
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

// Changing the profile_picture

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
  navProfile.src = URL.createObjectURL(file);
});

// Adding review

Reviewform.addEventListener("submit", (e) => {
  e.preventDefault();
  const reviewContainer = document.querySelector(".carousel-track");
  const carousel = document.querySelector(".carousel-dots");
  const reviewData = new FormData(Reviewform);
  const data = Object.fromEntries(reviewData);
  const article = document.createElement("article");
  const img = new Image();
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const span = document.createElement("span");
  article.className = "review-card";
  img.className = "review-photo";
  p1.className = "review-name";
  p2.className = "review-comment";
  span.className = "dot";

  const fileInput = Reviewform.querySelector("#file");
  const file = fileInput.files[0];

  if (file) {
    img.src = URL.createObjectURL(file);
  } else {
    img.src = "assects/profile_picture.jpg";
  }
  p1.textContent = `${data.name}`;
  p2.textContent = `"${data.review}"`;
  article.append(img, p1, p2);
  reviewContainer.appendChild(article);
  carousel.appendChild(span);
  label.textContent = `Plz select an image `;
  title.textContent = ` Want to add another review 😎`;
  alert("your review is successfully submited 🫡", "success");
  Reviewform.reset();
});
// For changing the design of label

chooseeFile.addEventListener("change", (e) => {
  const file = chooseeFile.files[0];
  if (!file) return (label.textContent = `choosee a fking file`);

  label.textContent = `Image is chosen🫡`;
  alert("image is successfully chosen🫡", "success");
});

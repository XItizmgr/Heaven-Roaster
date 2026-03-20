const espressoBased = [
  {
    name: "Classic Espresso",
    description: "Strong, rich aromatic shot.",
    price: "Rs 420",
    image: "assects/classic_expresso.jpg"
  },
  {
    name: "Americano",
    description: "Smooth espresso with water.",
    price: "Rs 400",
    image: "assects/Americano.jpg"
  },
  {
    name: "Cappuccino",
    description: "Balanced espresso creamy foam.",
    price: "Rs 300",
    image: "assects/cappucchino.jpg"
  },
  {
    name: "Caramel Latte",
    description: "Sweet caramel milk blend.",
    price: "Rs 300",
    image: "assects/caramel_latte.jpg"
  }
];

const coldAndIced = [
  {
    name: "Iced Mocha",
    description: "Chocolate espresso served chilled.",
    price: "Rs 620",
    image: "assects/iced_latte.jpg"
  },
  {
    name: "Cold Brew",
    description: "18-hour slow-steeped perfection.",
    price: "Rs 500",
    image: "assects/nitrro.png"
  },
  {
    name: "Vanilla Iced Latte",
    description: "Espresso infused vanilla notes.",
    price: "Rs 400",
    image: "assects/Iced_Vanilla_Almond_Milk_Latte_5_Minutes_-_Chasety.jpg"
  },
  {
    name: "Hazelnut Frappe",
    description: "Blended creamy hazelnut delight.",
    price: "Rs 520",
    image: "assects/Hazelnut_Latte.jpg"
  }
];
const smallTreats = [
  {
    name: "Classic Churros",
    description: "Crispy dough with chocolate dip.",
    price: "Rs 350",
    image: "assects/Churros.jpg",
  },
  {
    name: "Kawaii Donuts",
    description: "Artisanal donuts with fruit glaze.",
    price: "Rs 220",
    image: "assects/kawaii_donuts.jpg",
  },
  {
    name: "Oreo Cake Pops",
    description: "Bite-sized chocolate Oreo treats.",
    price: "Rs 150",
    image: "assects/oreo_cake_pop.jpg",
  },
  {
    name: "Sea Salt Choco Cookies",
    description: "Soft cookies with sea salt.",
    price: "Rs 120",
    image: "assects/chocolate_chip_cookies.jpg",
  },
];
const cakesAndLoaves = [
  {
    name: "Black Velvet Cake",
    description: "Dramatic cocoa with smooth frosting.",
    price: "Rs 460",
    image: "assects/Black_velvet_cake.jpg",
  },
  {
    name: "Rich Chocolate Loaf",
    description: "Moist loaf with cheese frosting.",
    price: "Rs 320",
    image:
      "assects/Rich_Chocolate_Loaf_Cake_with_Baileys_Original_Irish_Cream_Cream_Cheese_Frosting.jpg",
  },
  {
    name: "Dora Cake",
    description: "Honey pancakes with Nutella filling.",
    price: "Rs 180",
    image: "assects/Doracake.jpg",
  },
  {
    name: "Amandina Modernizata",
    description: "Layered chocolate and caramel cake.",
    price: "Rs 450",
    image: "assects/Amandina_modernizata.jpg",
  },
];
const premiumSpecialties = [
  {
    name: "Chocolate Tiramisu",
    description: "Espresso ladyfingers with mascarpone cream.",
    price: "Rs 420",
    image: "assects/Chocolate_Tiramisu.jpg",
  },
  {
    name: "Espresso Martini Tiramisu",
    description: "Coffee forward twist on classic.",
    price: "Rs 480",
    image: "assects/Espresso_Martini_Tiramisu_.jpg",
  },
  {
    name: "Japanese Cake Roll",
    description: "Light sponge with whipped cream.",
    price: "Rs 380",
    image: "assects/Japanese_Cake_Roll.jpg",
  },
  {
    name: "Mocha Brownie Ice Cream Cake",
    description: "Fudgy brownie with mocha ice cream.",
    price: "Rs 550",
    image: "assects/Mocha_Brownie_Ice_Cream_Cake_.jpg",
  },
];
const espresso = document.getElementById("espresso");
const cold = document.getElementById("cold-iced");
const smallbites = document.getElementById("smallbites");
const cakes = document.getElementById("cakes");
const premium = document.getElementById("premium");
espressoBased.forEach(item => TocreateMenuItems(item,espresso));
coldAndIced.forEach(item => TocreateMenuItems(item, cold));
smallTreats.forEach(item => TocreateMenuItems(item, smallbites));
cakesAndLoaves.forEach(item => TocreateMenuItems(item, cakes));
premiumSpecialties.forEach(item => TocreateMenuItems(item, premium));


function TocreateMenuItems(item ,container) {
const card = document.createElement("article");
  card.className = "menu-card";
  card.innerHTML = `
    <div class="menu-img-wrapper">
      <img src="${item.image}" alt="${item.name}" class="menu-img">
    </div>
    <div class="menu-info">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <span class="price">${item.price}</span>
  `;
   container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
  const productArray = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

  const productSelect = document.getElementById("productName");

  productArray.forEach((product) => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

if (window.location.pathname.includes("review.html")) {
  let reviewCount = localStorage.getItem("reviewCount");
  reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
  localStorage.setItem("reviewCount", reviewCount);
  document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You have submitted ${reviewCount} reviews.</p>`;}
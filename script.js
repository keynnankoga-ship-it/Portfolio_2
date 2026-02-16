// Fade-in animation on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.style.opacity = 1;
  });
});

// Filter
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".work-item");
const searchInput = document.getElementById("searchInput");

if(buttons){
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    items.forEach(item => {
      item.style.display =
        filter === "all" || item.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});
}

if(searchInput){
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  items.forEach(item => {
    item.style.display =
      item.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
  });
});
}

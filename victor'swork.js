const trigger = document.getElementById("trigger");
const modal = document.getElementById("modal");

trigger.addEventListener("mouseenter", () => {
   modal.style.display = "block";
});

modal.addEventListener("mouseleave", () => {
   modal.style.display = "none";
});
let leaf = document.getElementById("leaf");
let handleft = document.getElementById("handleft");
let handright = document.getElementById("handright");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  handright.style.top = value * -1.1 + "px";
  handright.style.left = value * 1.1 + "px";

  handleft.style.top = value * 0.3 + "px";
  handleft.style.left = value * -1.1 + "px";
});

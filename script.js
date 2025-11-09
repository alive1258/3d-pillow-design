const pillow = document.getElementById("pillow");
const shadow = document.querySelector(".floor-shadow");

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = e.clientX / innerWidth - 0.5;
  const y = e.clientY / innerHeight - 0.5;

  const rotateY = x * 360;
  const rotateX = y * -180;

  pillow.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

  // Scale shadow
  const scale = 1 + Math.abs(x * 0.2);
  shadow.style.transform = `translateX(-50%) scale(${scale})`;
});

document.addEventListener("mouseleave", () => {
  pillow.style.transform = `rotateY(0deg) rotateX(0deg)`;
  shadow.style.transform = `translateX(-50%) scale(1)`;
});

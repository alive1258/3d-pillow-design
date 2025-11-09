const pillow = document.getElementById("pillow");
const shadow = document.querySelector(".floor-shadow");

let isDragging = false;
let previousX = 0;
let rotationDirection = 0; // -1 = left, 1 = right
let currentRotationY = 0;
let spinInterval = null;

document.addEventListener("mousedown", (e) => {
  isDragging = true;
  previousX = e.clientX;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  rotationDirection = 0;
  clearInterval(spinInterval);
  spinInterval = null;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - previousX;
  previousX = e.clientX;

  // Determine direction
  if (deltaX > 0) rotationDirection = 1; // right
  else if (deltaX < 0) rotationDirection = -1; // left
  else return;

  // Start spinning if not already
  if (!spinInterval) {
    spinInterval = setInterval(() => {
      currentRotationY += rotationDirection * 2; // rotation speed

      if (currentRotationY > 360) currentRotationY -= 360;
      if (currentRotationY < 0) currentRotationY += 360;

      pillow.style.transform = `rotateY(${currentRotationY}deg)`;

      // Shadow depth based on rotation
      const scale =
        1 + Math.abs(Math.sin((currentRotationY * Math.PI) / 180)) * 0.15;
      shadow.style.transform = `translateX(-50%) scale(${scale})`;
    }, 16); // ~60fps
  }
});

document.addEventListener("mouseleave", () => {
  isDragging = false;
  rotationDirection = 0;
  clearInterval(spinInterval);
  spinInterval = null;
});

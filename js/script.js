const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let posX = 0,
  posY = 0; // Cursor position
let targetX = 0,
  targetY = 0; // Target position for smooth chasing
const speed = 0.1; // Adjust for smoother chasing (0.1 = slow, 1 = fast)

window.addEventListener("mousemove", (e) => {
  posX = e.clientX;
  posY = e.clientY;

  // Move the small dot instantly
  cursorDot.style.transform = `translate(${posX - 2.5}px, ${posY - 2.5}px)`;
});

// Smooth chase effect for outline
function animateCursor() {
  // Interpolation formula: moves `targetX` and `targetY` closer to `posX` and `posY`
  targetX += (posX - targetX) * speed;
  targetY += (posY - targetY) * speed;

  cursorOutline.style.transform = `translate(${targetX - 15}px, ${
    targetY - 15
  }px)`;

  requestAnimationFrame(animateCursor);
}

animateCursor(); // Start the animation loop

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15,
      ease: "power2.out"
    });
  });
});

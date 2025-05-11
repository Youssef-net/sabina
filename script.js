document.addEventListener("DOMContentLoaded", function () {
  const birthDate = new Date("2023-10-27");
  const now = new Date();
  const diff = now - birthDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("age").textContent = `نونة عمرها ${days} يوم و ${hours} ساعة 💖`;
});
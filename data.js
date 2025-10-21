const TOURS_DATA = [
  {
    title: "Adventure Bali",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    desc: "Rasakan sensasi petualangan menakjubkan di Ubud, rafting di Sungai Ayung, dan jeep sunrise Batur.",
    price: "Mulai dari Rp 450.000"
  },
  {
    title: "Cultural Journey",
    img: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135",
    desc: "Nikmati budaya khas Bali melalui tari tradisional, pura bersejarah, dan upacara adat.",
    price: "Mulai dari Rp 350.000"
  },
  {
    title: "Relaxation Package",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Nikmati spa eksklusif, pantai pasir putih, dan sunset dinner romantis di Jimbaran.",
    price: "Mulai dari Rp 500.000"
  },
  {
    title: "Nature Escape",
    img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    desc: "Kunjungi air terjun indah, hutan tropis, dan kebun kopi yang menenangkan jiwa.",
    price: "Mulai dari Rp 400.000"
  }
];

const CONTACTS = [
  { name: "Admin 1", number: "62895365282575" },
  { name: "Admin 2", number: "6281333678890" }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".tour-grid");
  TOURS_DATA.forEach(tour => {
    const card = document.createElement("div");
    card.classList.add("tour-card");
    card.innerHTML = `
      <img src="${tour.img}" alt="${tour.title}">
      <h3>${tour.title}</h3>
      <p>${tour.desc}</p>
      <p class="price">${tour.price}</p>
    `;
    container.appendChild(card);
  });

  const waBtn = document.createElement("a");
  waBtn.href = `https://wa.me/${CONTACTS[0].number}`;
  waBtn.classList.add("whatsapp-float");
  waBtn.innerHTML = `<i class="fab fa-whatsapp"></i>`;
  waBtn.title = "Chat via WhatsApp";
  document.body.appendChild(waBtn);
});

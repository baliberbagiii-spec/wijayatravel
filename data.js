const TOURS_DATA = [
  { id: "tanah-lot", title: "Tanah Lot", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90", desc: "Pura laut ikonik Bali yang menakjubkan, tempat sempurna menikmati matahari terbenam.", price: "Mulai dari Rp 250.000" },
  { id: "uluwatu", title: "Uluwatu Temple", img: "https://images.unsplash.com/photo-1582661701514-4b8a3c2d9d7a", desc: "Pura di tebing tinggi dengan pemandangan laut spektakuler dan pertunjukan Kecak Dance.", price: "Mulai dari Rp 300.000" },
  { id: "tegallalang", title: "Tegallalang Rice Terrace", img: "https://images.unsplash.com/photo-1549887534-3db1bd59dcca", desc: "Pemandangan sawah bertingkat yang memukau di Ubud, spot foto paling terkenal di Bali.", price: "Mulai dari Rp 200.000" },
  { id: "batur", title: "Mount Batur Sunrise", img: "https://images.unsplash.com/photo-1562774053-701939374585", desc: "Nikmati pendakian sunrise menakjubkan di Gunung Batur dengan pemandangan danau.", price: "Mulai dari Rp 450.000" },
  { id: "monkey-forest", title: "Ubud Monkey Forest", img: "https://images.unsplash.com/photo-1535546024669-d9dcf7e73e2d", desc: "Hutan lindung dengan ratusan monyet liar dan candi-candi kuno di tengah pepohonan hijau.", price: "Mulai dari Rp 180.000" },
  { id: "nusa-penida", title: "Nusa Penida", img: "https://images.unsplash.com/photo-1546484959-fdebae3f9f22", desc: "Pulau eksotis dengan pantai bertebing tinggi dan air jernih, cocok untuk snorkeling.", price: "Mulai dari Rp 600.000" },
  { id: "kuta", title: "Kuta Beach", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Pantai paling terkenal di Bali untuk berselancar dan menikmati sunset yang indah.", price: "Mulai dari Rp 150.000" },
  { id: "tirta-empul", title: "Tirta Empul Temple", img: "https://images.unsplash.com/photo-1600353061541-1e9a71f8c7b9", desc: "Pura suci dengan kolam air suci tempat wisatawan dapat melakukan penyucian diri.", price: "Mulai dari Rp 220.000" },
  { id: "besakih", title: "Besakih Temple", img: "https://images.unsplash.com/photo-1600185366306-b70dfc5d02f1", desc: "Pura terbesar dan tertua di Bali, dikenal sebagai 'Mother Temple' di lereng Gunung Agung.", price: "Mulai dari Rp 280.000" },
  { id: "lovina", title: "Lovina Dolphin Tour", img: "https://images.unsplash.com/photo-1584395630827-860eee694d7b", desc: "Wisata melihat lumba-lumba di laut lepas Lovina, dengan sunrise yang menakjubkan.", price: "Mulai dari Rp 400.000" }
];

const ADMIN_NUMBER = "62895365282575";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".tour-grid");
  if (grid) {
    TOURS_DATA.forEach(t => {
      const card = document.createElement("div");
      card.classList.add("tour-card");
      card.innerHTML = `<img src="${t.img}" alt="${t.title}"><h3>${t.title}</h3><p>${t.desc}</p><p class='price'>${t.price}</p>`;
      card.addEventListener("click", () => {
        window.location.href = `detail.html?tour=${t.id}`;
      });
      grid.appendChild(card);
    });
  }

  // Detail page logic
  const params = new URLSearchParams(window.location.search);
  const tourId = params.get("tour");
  if (tourId) {
    const tour = TOURS_DATA.find(t => t.id === tourId);
    if (tour) {
      document.getElementById("tourImage").src = tour.img;
      document.getElementById("tourTitle").textContent = tour.title;
      document.getElementById("tourDesc").textContent = tour.desc;
      document.getElementById("tourPrice").textContent = tour.price;
      document.getElementById("waLink").href = `https://wa.me/${ADMIN_NUMBER}?text=Halo%20Wijaya%20Tour,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(tour.title)}`;
    }
  }
});

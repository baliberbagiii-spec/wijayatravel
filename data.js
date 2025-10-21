const TOURS_DATA = [
  { title: "Tanah Lot", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90", desc: "Pura laut ikonik Bali yang menakjubkan, tempat sempurna menikmati matahari terbenam.", price: "Mulai dari Rp 250.000" },
  { title: "Uluwatu Temple", img: "https://images.unsplash.com/photo-1582661701514-4b8a3c2d9d7a", desc: "Pura di tebing tinggi dengan pemandangan laut spektakuler dan pertunjukan Kecak Dance.", price: "Mulai dari Rp 300.000" },
  { title: "Tegallalang Rice Terrace", img: "https://images.unsplash.com/photo-1549887534-3db1bd59dcca", desc: "Pemandangan sawah bertingkat yang memukau di Ubud, spot foto paling terkenal di Bali.", price: "Mulai dari Rp 200.000" },
  { title: "Mount Batur Sunrise", img: "https://images.unsplash.com/photo-1562774053-701939374585", desc: "Nikmati pendakian sunrise menakjubkan di Gunung Batur dengan pemandangan danau.", price: "Mulai dari Rp 450.000" },
  { title: "Ubud Monkey Forest", img: "https://images.unsplash.com/photo-1535546024669-d9dcf7e73e2d", desc: "Hutan lindung dengan ratusan monyet liar dan candi-candi kuno di tengah pepohonan hijau.", price: "Mulai dari Rp 180.000" },
  { title: "Nusa Penida", img: "https://images.unsplash.com/photo-1546484959-fdebae3f9f22", desc: "Pulau eksotis dengan pantai bertebing tinggi dan air jernih, cocok untuk snorkeling.", price: "Mulai dari Rp 600.000" },
  { title: "Kuta Beach", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Pantai paling terkenal di Bali untuk berselancar dan menikmati sunset yang indah.", price: "Mulai dari Rp 150.000" },
  { title: "Tirta Empul Temple", img: "https://images.unsplash.com/photo-1600353061541-1e9a71f8c7b9", desc: "Pura suci dengan kolam air suci tempat wisatawan dapat melakukan penyucian diri.", price: "Mulai dari Rp 220.000" },
  { title: "Besakih Temple", img: "https://images.unsplash.com/photo-1600185366306-b70dfc5d02f1", desc: "Pura terbesar dan tertua di Bali, dikenal sebagai 'Mother Temple' di lereng Gunung Agung.", price: "Mulai dari Rp 280.000" },
  { title: "Lovina Dolphin Tour", img: "https://images.unsplash.com/photo-1584395630827-860eee694d7b", desc: "Wisata melihat lumba-lumba di laut lepas Lovina, dengan sunrise yang menakjubkan.", price: "Mulai dari Rp 400.000" }
];

const TESTIMONI = [
  { name: "Dewi - Jakarta", text: "Pelayanan luar biasa! Semua itinerary tertata rapi dan pemandu sangat ramah." },
  { name: "Rifky - Bandung", text: "Perjalanan ke Uluwatu sangat menyenangkan. Pemandangannya luar biasa indah!" },
  { name: "Sinta - Surabaya", text: "Suka banget dengan tur ke Nusa Penida! Pantainya keren banget!" },
  { name: "Andi - Makassar", text: "Tim Wijaya Tour sangat profesional dan komunikatif. Sangat direkomendasikan!" }
];

const CONTACTS = [{ name: "Admin", number: "62895365282575" }];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".tour-grid");
  TOURS_DATA.forEach((tour, index) => {
    const card = document.createElement("div");
    card.classList.add("tour-card");
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `
      <img src="${tour.img}" alt="${tour.title}">
      <h3>${tour.title}</h3>
      <p>${tour.desc}</p>
      <p class="price">${tour.price}</p>
    `;
    card.addEventListener("click", () => {
      alert(`Detail Wisata: ${tour.title}\n\n${tour.desc}\nHarga: ${tour.price}`);
    });
    container.appendChild(card);
  });

  // Testimoni Slider
  const slider = document.querySelector(".testimoni-slider");
  TESTIMONI.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("testi-card");
    card.innerHTML = `<p>"${t.text}"</p><h4>— ${t.name}</h4>`;
    slider.appendChild(card);
  });

  setInterval(() => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 4000);

  // Floating WhatsApp button
  const waBtn = document.createElement("a");
  waBtn.href = `https://wa.me/${CONTACTS[0].number}`;
  waBtn.classList.add("whatsapp-float");
  waBtn.innerHTML = `<i class="fab fa-whatsapp"></i>`;
  waBtn.title = "Hubungi Kami di WhatsApp";
  document.body.appendChild(waBtn);
});

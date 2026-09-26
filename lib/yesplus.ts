// Yes Plus — cleaning products brand of Gurudev Enterprises,
// a sister concern of Chitra Printers. Images are cut from
// yesplus_cleaning_template.jpeg; swap in studio shots when available.

export type YesPlusProduct = {
  name: string;
  desc: string;
  image: string;
};

export const yesPlusProducts: YesPlusProduct[] = [
  { name: "Hand Wash", desc: "Gentle, fragrant liquid hand wash for everyday hygiene.", image: "/assets/yesplus/hand-wash.webp" },
  { name: "Glass Cleaner", desc: "Streak-free shine for glass, mirrors and household surfaces.", image: "/assets/yesplus/glass-cleaner.webp" },
  { name: "Dish Wash", desc: "Lemon-fresh dish wash that cuts through grease.", image: "/assets/yesplus/dish-wash.webp" },
  { name: "Toilet Cleaner", desc: "Thick formula that removes stains and leaves bowls sparkling.", image: "/assets/yesplus/toilet-cleaner.webp" },
  { name: "Liquid Detergent", desc: "Liquid laundry detergent for bright, fresh clothes.", image: "/assets/yesplus/liquid-detergent.webp" },
  { name: "Tiles Cleaner", desc: "Lifts tough dirt and hard-water marks from floors and tiles.", image: "/assets/yesplus/tiles-cleaner.webp" },
  { name: "Metaglow", desc: "Copper and brass shiner gel that restores the glow.", image: "/assets/yesplus/metaglow.webp" },
  { name: "Rust Remover", desc: "Multipurpose spray that loosens rust and protects metal.", image: "/assets/yesplus/rust-remover.webp" },
  { name: "Lens Cleaner", desc: "Safe, quick-drying spray for spectacles and lenses.", image: "/assets/yesplus/lens-cleaner.webp" },
  { name: "Laptop / LED / Mobile Cleaner", desc: "Screen cleaner for laptops, TVs, monitors and phones.", image: "/assets/yesplus/screen-cleaner.webp" },
  { name: "Room Freshener", desc: "Long-lasting floral fragrance for homes and offices.", image: "/assets/yesplus/room-freshener.webp" },
  { name: "Car Wash", desc: "Rich-foam car shampoo for a clean, glossy finish.", image: "/assets/yesplus/car-wash.webp" },
];

export const yesPlusEnquiryUrl =
  "https://wa.me/919767742598?text=" +
  encodeURIComponent("Hello, I would like to enquire about Yes Plus cleaning products.");

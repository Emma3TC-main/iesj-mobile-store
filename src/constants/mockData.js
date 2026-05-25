export const products = [
  {
    id: 1,
    name: "RTX 4070",
    category: "GPU",
    brand: "NVIDIA",
    description:
      "Tarjeta gráfica NVIDIA ideal para gaming en 1440p y creación de contenido.",
    price: 3200,
    stock: 5,
    rating: 4.8,
    featured: true,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
  },

  {
    id: 2,
    name: "Ryzen 7 7800X",
    category: "CPU",
    brand: "AMD",
    description:
      "Procesador AMD Ryzen de alto rendimiento para gaming y multitarea.",
    price: 1800,
    stock: 10,
    rating: 4.9,
    featured: true,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },

  {
    id: 3,
    name: "Intel Core i7-14700K",
    category: "CPU",
    brand: "Intel",
    description:
      "Procesador Intel de última generación optimizado para productividad.",
    price: 2100,
    stock: 8,
    rating: 4.7,
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },

  {
    id: 4,
    name: "RTX 4090",
    category: "GPU",
    brand: "NVIDIA",
    description:
      "GPU flagship para gaming extremo, IA y renderizado profesional.",
    price: 7800,
    stock: 3,
    rating: 5,
    featured: true,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
  },

  {
    id: 5,
    name: "SSD Samsung 990 Pro 2TB",
    category: "Storage",
    brand: "Samsung",
    description: "Unidad SSD NVMe Gen4 ultrarrápida para gaming y edición.",
    price: 950,
    stock: 15,
    rating: 4.9,
    featured: false,
    image: "https://images.unsplash.com/photo-1591799265444-d66432b91588",
  },

  {
    id: 6,
    name: "Corsair Vengeance RGB 32GB",
    category: "RAM",
    brand: "Corsair",
    description:
      "Memoria RAM DDR5 RGB de alto rendimiento para setups premium.",
    price: 720,
    stock: 12,
    rating: 4.8,
    featured: false,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186",
  },

  {
    id: 7,
    name: "ASUS ROG Strix B650",
    category: "Motherboard",
    brand: "ASUS",
    description: "Placa madre gaming compatible con Ryzen serie 7000.",
    price: 1200,
    stock: 6,
    rating: 4.7,
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },

  {
    id: 8,
    name: "Logitech G Pro X",
    category: "Peripherals",
    brand: "Logitech",
    description:
      "Headset gamer profesional con sonido envolvente y micrófono Blue VO!CE.",
    price: 520,
    stock: 18,
    rating: 4.6,
    featured: false,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  },

  {
    id: 9,
    name: "Razer Huntsman V3",
    category: "Peripherals",
    brand: "Razer",
    description: "Teclado mecánico gamer RGB con switches ópticos.",
    price: 650,
    stock: 14,
    rating: 4.7,
    featured: false,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },

  {
    id: 10,
    name: "LG UltraGear 27 OLED",
    category: "Monitor",
    brand: "LG",
    description:
      "Monitor OLED 240Hz diseñado para esports y gaming competitivo.",
    price: 3400,
    stock: 4,
    rating: 4.9,
    featured: true,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
  },

  {
    id: 11,
    name: "HyperX Pulsefire Haste",
    category: "Peripherals",
    brand: "HyperX",
    description: "Mouse ultraligero optimizado para shooters competitivos.",
    price: 220,
    stock: 20,
    rating: 4.5,
    featured: false,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },

  {
    id: 12,
    name: "NZXT H9 Flow",
    category: "Case",
    brand: "NZXT",
    description:
      "Case premium con excelente flujo de aire y diseño minimalista.",
    price: 780,
    stock: 7,
    rating: 4.8,
    featured: false,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },

  {
    id: 13,
    name: "Corsair RM850x",
    category: "Power Supply",
    brand: "Corsair",
    description: "Fuente de poder 850W 80 Plus Gold totalmente modular.",
    price: 690,
    stock: 11,
    rating: 4.9,
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },

  {
    id: 14,
    name: "Steam Deck OLED",
    category: "Gaming",
    brand: "Valve",
    description: "Consola portátil para PC gaming con pantalla OLED.",
    price: 2600,
    stock: 5,
    rating: 4.9,
    featured: true,
    image: "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd",
  },

  {
    id: 15,
    name: "MacBook Pro M3",
    category: "Laptop",
    brand: "Apple",
    description:
      "Laptop profesional con chip Apple Silicon M3 para desarrollo y edición.",
    price: 8200,
    stock: 3,
    rating: 5,
    featured: true,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  },
];

export const users = [
  {
    id: 1,
    name: "Administrador",
    email: "admin@test.com",
    password: "123456",
    role: "admin",
  },

  {
    id: 2,
    name: "Emma Torres",
    email: "emma@test.com",
    password: "123456",
    role: "customer",
  },

  {
    id: 3,
    name: "Carlos Vega",
    email: "carlos@test.com",
    password: "123456",
    role: "customer",
  },
];



// Inverse map to easily look up the allergen by its number
const allergensInverseMap = {
  1: 'Gluten',
  2: 'Crustaceos',
  3: 'Huevo',
  4: 'Pescado',
  5: 'Cacahuetes',
  6: 'Soja',
  7: 'Lacteos',
  8: 'Frutos cascara',
  9: 'Apio',
  10: 'Mostaza',
  11: 'Sesamo',
  12: 'Sulfitos',
  13: 'Altramuces',
  14: 'Moluscos'
};

// Full Kindergarten Menu Data (Weeks 1 to 8)
const menuData = [
  // --- SEMANA 1 ---
  {
    day: "Lunes", week: 1,
    menu: ["Potaje de garbanzos con patata y zanahoria", "Tortilla de espinacas", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo"]
  },
  {
    day: "Martes", week: 1,
    menu: ["Crema de verduras (con patata)", "Pollo en doradillo con tomate y pepino", "Fruta natural", "Pan integral"],
    allergens: ["Gluten"]
  },
  {
    day: "Miércoles", week: 1,
    menu: ["Macarrones (integrales) con salsa de tomate y carne de pollo", "Croquetas de bacalao con cogollos", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado", "Lacteos"]
  },
  {
    day: "Jueves", week: 1,
    menu: ["Albóndigas en salsa con champiñones y patatas", "Judías con jamón", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Sulfitos"]
  },
  {
    day: "Viernes", week: 1,
    menu: ["Arroz a la cubana con tortilla francesa", "Merluza a la plancha y ensalada", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado"]
  },

  // --- SEMANA 2 ---
  {
    day: "Lunes", week: 2,
    menu: ["Lentejas con patata y zanahoria", "Empanadillas de atún con canónigos", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado"]
  },
  {
    day: "Martes", week: 2,
    menu: ["Sopa de verduras y estrellitas", "Tortilla de patatas cocidas y pepino", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo"]
  },
  {
    day: "Miércoles", week: 2,
    menu: ["Fideos (integrales) con pescado (calamar, caella y langostinos)", "Guisantes con jamón", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Crustaceos", "Pescado", "Lacteos"]
  },
  {
    day: "Jueves", week: 2,
    menu: ["Arroz caldoso con verduras", "Pollo al ajillo con ensalada de maíz", "Fruta natural", "Pan integral"],
    allergens: ["Gluten"]
  },
  {
    day: "Viernes", week: 2,
    menu: ["Estofado de patatas con pollo, alcachofas y zanahoria", "Queso fresco y tomate", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Lacteos"]
  },

  // --- SEMANA 3 ---
  {
    day: "Lunes", week: 3,
    menu: ["Potaje de habichuelas con patata y zanahoria", "Rabas de calamar empanadas al horno con cherrys y maíz", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado", "Moluscos"]
  },
  {
    day: "Martes", week: 3,
    menu: ["Macarrones con pollo y tomate", "Tortilla de calabacín y cebolla", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo"]
  },
  {
    day: "Miércoles", week: 3,
    menu: ["Albóndigas en caldo de pollo y jamón", "Picadillo con atún", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado", "Lacteos"]
  },
  {
    day: "Jueves", week: 3,
    menu: ["Crema de verduras", "Caella en salsa con patatas cocidas", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Pescado"]
  },
  {
    day: "Viernes", week: 3,
    menu: ["Arroz (integral) tres delicias", "Lomo adobado con zanahoria", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Lacteos"]
  },

  // --- SEMANA 4 ---
  {
    day: "Lunes", week: 4,
    menu: ["Cocido con patata y zanahoria", "Croquetas de pollo con canónigos y maíz", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Lacteos"]
  },
  {
    day: "Martes", week: 4,
    menu: ["Tirabuzones con atún y tomate", "Tortilla de york con pepino", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Pescado"]
  },
  {
    day: "Miércoles", week: 4,
    menu: ["Sopa de picadillo (fideos integrales, huevo y jamón)", "Filete de pez espada al horno con ajo y perejil", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado", "Lacteos"]
  },
  {
    day: "Jueves", week: 4,
    menu: ["Estofado de patatas con pollo, zanahoria y alcachofas", "Ensalada completa (lechuga, tomate, huevo, queso fresco y aceitunas)", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Lacteos"]
  },
  {
    day: "Viernes", week: 4,
    menu: ["Arroz caldoso con verduras (champiñones, judías y zanahoria)", "Pinchitos de pollo con picadillo", "Fruta natural", "Pan"],
    allergens: ["Gluten"]
  },

  // --- SEMANA 5 ---
  {
    day: "Lunes", week: 5,
    menu: ["Potaje de habichuelas con patata y zanahoria", "Merluza en salsa verde con guisantes", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Pescado"]
  },
  {
    day: "Martes", week: 5,
    menu: ["Crema de verduras", "Pollo en salsa y patatas al horno", "Fruta natural", "Pan integral"],
    allergens: ["Gluten"]
  },
  {
    day: "Miércoles", week: 5,
    menu: ["Fideos (integrales) guisados de pescado", "Tortilla paisana", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado", "Lacteos"]
  },
  {
    day: "Jueves", week: 5,
    menu: ["Patatas a lo pobre con cebolla, pimiento y jamón", "Flamenquín al horno con cogollos", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Lacteos"]
  },
  {
    day: "Viernes", week: 5,
    menu: ["Arroz a la cubana con tomate y tortilla francesa", "Salchichas de cerdo hervidas al vino y ensalada", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Sulfitos"]
  },

  // --- SEMANA 6 ---
  {
    day: "Lunes", week: 6,
    menu: ["Lentejas con patata y zanahoria", "Bacalao al horno con pepino", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Pescado"]
  },
  {
    day: "Martes", week: 6,
    menu: ["Albóndigas en salsa con patata", "Queso fresco y tomate en rodajas con especias", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Lacteos"]
  },
  {
    day: "Miércoles", week: 6,
    menu: ["Macarrones (integrales) con verduras y tomate", "Pollo en doradillo con canónigos y cherrys", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Lacteos"]
  },
  {
    day: "Jueves", week: 6,
    menu: ["Arroz tres delicias", "Croquetas de merluza y gambas con ensalada", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Crustaceos", "Huevo", "Pescado", "Lacteos"]
  },
  {
    day: "Viernes", week: 6,
    menu: ["Estofado de patatas con choco, zanahoria y alcachofas", "Revuelto de champiñones", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Moluscos"]
  },

  // --- SEMANA 7 ---
  {
    day: "Lunes", week: 7,
    menu: ["Potaje de garbanzos con patatas, acelgas y zanahoria", "Hamburguesa de pollo con canónigos y cherrys", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Sulfitos"]
  },
  {
    day: "Martes", week: 7,
    menu: ["Crema de verduras", "Pescado al horno con patata asadas y brócoli", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Pescado"]
  },
  {
    day: "Miércoles", week: 7,
    menu: ["Espaguetis (integrales) con verduras, salsa tomate y queso rallado", "Filete de pollo a la plancha con judías verdes", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Lacteos"]
  },
  {
    day: "Jueves", week: 7,
    menu: ["Arroz con verduras", "Varitas de merluza con ensalada", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Pescado"]
  },
  {
    day: "Viernes", week: 7,
    menu: ["Lentejas con zanahoria", "Filetes de lomo adobado con picadillo", "Fruta natural", "Pan"],
    allergens: ["Gluten"]
  },

  // --- SEMANA 8 ---
  {
    day: "Lunes", week: 8,
    menu: ["Cocido con patatas y judías", "Bacalao al horno con tomate en rodajas", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Pescado"]
  },
  {
    day: "Martes", week: 8,
    menu: ["Sopa de verduras con fideos integrales", "Albóndigas en salsa de tomate y patata cocida", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo"]
  },
  {
    day: "Miércoles", week: 8,
    menu: ["Estofado de patatas, pollo, judías y zanahoria", "Huevos rellenos", "Yogur natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado", "Lacteos"]
  },
  {
    day: "Jueves", week: 8,
    menu: ["Arroz (integral) 3 delicias", "Hamburguesa de ternera con lechuga", "Fruta natural", "Pan integral"],
    allergens: ["Gluten", "Huevo", "Soja"]
  },
  {
    day: "Viernes", week: 8,
    menu: ["Fideos de pescado", "Ensalada completa", "Fruta natural", "Pan"],
    allergens: ["Gluten", "Huevo", "Pescado"]
  }
];

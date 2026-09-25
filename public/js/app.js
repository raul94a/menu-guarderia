document.addEventListener("DOMContentLoaded", () => {
  const weekSelectorContainer = document.getElementById("week-selector");
  const menuGridContainer = document.getElementById("menu-grid");

  // State to track the currently selected week
  let currentWeek = 1;

  // Map Spanish day names to the CSS classes we created in Step 2
  const dayColorClass = {
    "Lunes": "bg-lunes",
    "Martes": "bg-martes",
    "Miércoles": "bg-miercoles",
    "Jueves": "bg-jueves",
    "Viernes": "bg-viernes"
  };

  // 1. Render the week selection buttons
  function renderWeekSelector() {
    weekSelectorContainer.innerHTML = "";
    
    // Create 8 buttons since we have 8 weeks of data
    for (let i = 1; i <= 8; i++) {
      const btn = document.createElement("button");
      btn.className = `week-btn ${i === currentWeek ? "active" : ""}`;
      btn.textContent = `Semana ${i}`;
      
      // Update state and re-render on click
      btn.addEventListener("click", () => {
        currentWeek = i;
        renderWeekSelector(); 
        renderMenu();         
      });
      
      weekSelectorContainer.appendChild(btn);
    }
  }

  // 2. Render the menu grid for the selected week
  function renderMenu() {
    menuGridContainer.innerHTML = "";
    
    // Filter the global menuData (from data.js) to only show the current week
    const weekData = menuData.filter(day => day.week === currentWeek);

    weekData.forEach(dayInfo => {
      const dayCard = document.createElement("div");
      dayCard.className = "day-card";

      // Fallback to Lunes color if mapping fails
      const headerClass = dayColorClass[dayInfo.day] || "bg-lunes"; 

      // Build HTML for menu items
      const menuItemsHtml = dayInfo.menu
        .map(item => `<li class="menu-item">${item}</li>`)
        .join("");

      // Build HTML for allergen tags
      const allergensHtml = dayInfo.allergens.length > 0 
        ? dayInfo.allergens.map(allergen => `<span class="allergen-tag">${allergen}</span>`).join("")
        : `<span class="allergen-tag">Sin alérgenos</span>`;

      // Inject the template literal into the card
      dayCard.innerHTML = `
        <div class="day-header ${headerClass}">
          <h2>${dayInfo.day}</h2>
        </div>
        <div class="menu-content">
          <ul class="menu-list">
            ${menuItemsHtml}
          </ul>
          <div class="allergens-section">
            <h3 class="allergens-title">Alérgenos</h3>
            <div class="allergens-wrapper">
              ${allergensHtml}
            </div>
          </div>
        </div>
      `;
      
      menuGridContainer.appendChild(dayCard);
    });
  }

  // Initialize the app
  renderWeekSelector();
  renderMenu();
});
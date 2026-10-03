document.addEventListener("DOMContentLoaded", () => {
  const MENU_WEEKS = 8
  const START_WEEK_MENU = 37
  const weekSelectorContainer = document.getElementById("week-selector");
  const menuGridContainer = document.getElementById("menu-grid");

  const getWeekNumber = (d = new Date()) => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  };

  let weekDelta = getWeekNumber() - START_WEEK_MENU;
  let currentWeek = weekDelta % MENU_WEEKS;
 
  const dayColorClass = {
    "Lunes": "bg-lunes",
    "Martes": "bg-martes",
    "Miércoles": "bg-miercoles",
    "Jueves": "bg-jueves",
    "Viernes": "bg-viernes"
  };

  function renderWeekSelector() {
    weekSelectorContainer.innerHTML = "";

    for (let i = 1; i <= 8; i++) {
      const btn = document.createElement("button");
      btn.className = `week-btn ${i === currentWeek ? "active" : ""}`;
      btn.textContent = `Semana ${i}`;

      btn.addEventListener("click", () => {
        currentWeek = i;
        renderWeekSelector();
        renderMenu();
      });

      weekSelectorContainer.appendChild(btn);
    }
  }

  function renderMenu() {
    menuGridContainer.innerHTML = "";

    const weekData = menuData.filter(day => day.week === currentWeek);

    weekData.forEach(dayInfo => {
      const dayCard = document.createElement("div");
      dayCard.className = "day-card";

      const headerClass = dayColorClass[dayInfo.day] || "bg-lunes";

      const menuItemsHtml = dayInfo.menu
        .map(item => `<li class="menu-item">${item}</li>`)
        .join("");

      const allergensHtml = dayInfo.allergens.length > 0
        ? dayInfo.allergens.map(allergen => `<span class="allergen-tag">${allergen}</span>`).join("")
        : `<span class="allergen-tag">Sin alérgenos</span>`;

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
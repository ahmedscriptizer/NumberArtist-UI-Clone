document.addEventListener("DOMContentLoaded", () => {
  // Generic dropdown handler
  function initDropdown(btnId, menuId, selectedId) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    const selectedText = document.getElementById(selectedId);
    const items = menu.querySelectorAll(".dropdown-item");

    // Toggle dropdown
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = menu.classList.contains("active");

      // Close all dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((m) => {
        m.classList.remove("active");
      });
      document.querySelectorAll(".dropdown-button").forEach((b) => {
        b.classList.remove("active");
      });

      // Toggle current dropdown
      if (!isActive) {
        menu.classList.add("active");
        btn.classList.add("active");
      }
    });

    // Select item
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();

        // Remove selected class from all items
        items.forEach((i) => i.classList.remove("selected"));

        // Add selected class to clicked item
        item.classList.add("selected");

        // Update button text
        selectedText.textContent = item.textContent.trim();

        // Close dropdown
        menu.classList.remove("active");
        btn.classList.remove("active");
      });
    });
  }

  // Initialize dropdowns
  initDropdown("countryBtn", "countryMenu", "selectedCountry");
  initDropdown("langBtn", "langMenu", "selectedLang");

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active");
    });
    document.querySelectorAll(".dropdown-button").forEach((btn) => {
      btn.classList.remove("active");
    });
  });
});

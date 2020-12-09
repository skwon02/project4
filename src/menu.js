(function() {
    // Get the menu container
    const nav = document.querySelector(".js-toggle-menu");
    // Within that, identify specific elements
    const trigger = nav.querySelector(".js-toggle-trigger");
    const target = trigger.getAttribute("aria-controls");
    const menu = document.getElementById(target);
  
    // Add ARIA attributes to button
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Toggle site menu");
    trigger.onclick = () => {
      toggleMenu(event.currentTarget);
    };
  
    const toggleMenu = trigger => {
      // Cast the state as a boolean (it starts out as a string)
      let expanded = trigger.getAttribute("aria-expanded") === "true" || false;
  
      // Switch the state
      trigger.setAttribute("aria-expanded", !expanded);
    };
  })();
  
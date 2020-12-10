// In this script, only one accordion section can be open at a time
(function() {
    // Get the accordion container
    const accordion = document.querySelector(".js-accordion");
    // Within that, identify the headings
    const headings = accordion.querySelectorAll("h2");
  
    // The content toggle function
    const toggleContent = (trigger) => {
      // Identify the content
      const wrapper = trigger.parentNode.nextElementSibling;
  
      // Identify if any accordion sections are currenlty open
      const nowOpen = accordion.querySelector('[aria-expanded="true"]');
  
      // Cast the state as a boolean (it starts out as a string)
      let expanded = trigger.getAttribute("aria-expanded") === "true" || false;
  
      // If this section isn't expanded AND another section is, close the open section
      if (!expanded && nowOpen) {
        // Identify the content for the open section
        const nowOpenContent = nowOpen.parentNode.nextElementSibling;
        nowOpen.setAttribute("aria-expanded", false);
        nowOpenContent.setAttribute("hidden", true);
      }
  
      // Switch the state
      trigger.setAttribute("aria-expanded", !expanded);
      // Switch the content's visibility
      wrapper.hidden = expanded;
    };
  
    for (let heading of headings) {
      // Create button element
      const trigger = document.createElement("button");
      trigger.setAttribute("type", "button");
      trigger.setAttribute("aria-expanded", false);
      trigger.classList.add("u-button-reset");
      
      // Create icon
      const svgIcon = '<svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><rect class="vert" height="8" width="2" y="1" x="4"/><rect height="2" width="8" y="4" x="1"/></svg>';
  
      // Add original heading and icon to button
      trigger.innerHTML = heading.innerText + svgIcon;
  
      heading.innerHTML = ""; // Clear out current heading
      heading.appendChild(trigger);
    
      // Identify the content and hide it
      const wrapper = heading.nextElementSibling;
      wrapper.setAttribute("hidden", true);
  
      trigger.onclick = () => {
        toggleContent(event.currentTarget);
      };
    }
  })();
  
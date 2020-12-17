(function() {
    // Create labels for buttons
    // Because these labels are used in the JS logic below,
    // we add the here vs in the markup
    const playLabel = "Play";
    const pauseLabel = "Pause";
    const prevLabel = "Previous";
    const nextLabel = "Next";
  
    // Get the slideshow container
    const slideshow = document.querySelector(".js-slide");
  
    // Within that, identify the slides and create an array of slides
    const slides = slideshow.querySelectorAll(".js-slide-items > li");
    const slidesArray = Array.from(slides);
    const numSlides = slidesArray.length;
  
    // Identify the two nav components
    const actions = slideshow.querySelector(".js-slide-actions");
    const nav = slideshow.querySelector(".js-slide-nav");
  
    // Identify the specific action buttons
    const toggle = actions.querySelector(".js-slide-toggle");
    const prev = actions.querySelector(".js-slide-prev");
    const next = actions.querySelector(".js-slide-next");
  
    // and the toggle-able pause/play icons
    const play = toggle.querySelector(".js-play");
    const pause = toggle.querySelector(".js-pause");
  
    // Identify the individual nav items
    const navItems = nav.querySelectorAll("li");
    const navItemsArray = Array.from(navItems);
  
    // Create variables for current slide, slide item indexes, slideshow timer
    let currentSlide, oldIndex, newIndex, slideShowTimer;
  
    // Set new slide
    const setSlide = (oldIndex, newIndex) => {
      // Hide the current slide
      slidesArray[oldIndex].setAttribute("hidden", true);
      slidesArray[oldIndex].removeAttribute("aria-current");
  
      // Instead the current slide should be based on our newIndex
      slidesArray[newIndex].removeAttribute("hidden");
      slidesArray[newIndex].setAttribute("aria-current", true);
  
      // Update the navItems too
      navItems[oldIndex].removeAttribute("aria-current");
      navItems[newIndex].setAttribute("aria-current", true);    
    }
  
    // Identify old and new slides
    const updateSlide = (direction = nextLabel) => {
      currentSlide = slideshow.querySelector("[aria-current]");
      oldIndex = slidesArray.indexOf(currentSlide);
  
      if (direction === prevLabel) {
        if (oldIndex === 0) {
          // We're already on the first slide,
          // so identify the last slide as our new target
          newIndex = numSlides - 1;
        } else {
          // Go backwards by one
          newIndex = oldIndex - 1;
        }
      } else {
        if (oldIndex === numSlides - 1) {
          // We're already on the last slide,
          // so identify the first slide as our new target
          newIndex = 0;
        } else {
          // Go forward by one
          newIndex = oldIndex + 1;
        }
      }
  
      setSlide(oldIndex, newIndex);
    }
  
    const startSlideshow = () => {
      updateSlide(nextLabel); // Move to the next slide
      slideShowTimer = setTimeout(startSlideshow, 4000); // Repeat every 4s
    }
  
    // Toggle between play/pause
    toggle.onclick = () => {
      // Cast current label as a boolean
      let currentLabel = toggle.getAttribute("aria-label");
      let slideshowPlaying = currentLabel === pauseLabel;
  
      if (slideshowPlaying) {
        // Toggle which icon is showing
        pause.style.display = "none";
        play.style.display = "";
        // Update the button label
        toggle.setAttribute("aria-label", playLabel);
        // Undo the setTimeout in the startSlideshow function
        clearTimeout(slideShowTimer); 
      } else {
        // Toggle which icon is showing
        pause.style.display = "";
        play.style.display = "none";
        // Update the button label
        toggle.setAttribute("aria-label", pauseLabel);
        // Run the slideshow
        startSlideshow();
      }
    }
  
    // Handle prev/next click actions
    prev.onclick = () => updateSlide(prevLabel);
    next.onclick = () => updateSlide(nextLabel);
  
    // Handle navItem click action
    navItemsArray.forEach(function(navButton) {
      navButton.onclick = () => {
        currentSlide = slideshow.querySelector("[aria-current]");
        oldIndex = slidesArray.indexOf(currentSlide);
        newIndex = navItemsArray.indexOf(event.currentTarget);
        setSlide(oldIndex, newIndex);
      }
    });
  
    // Reveal the nav items
    actions.removeAttribute("hidden");
    nav.removeAttribute("hidden");
  
    // Hide the slides
    slidesArray.forEach(function(slide, i) {
      slide.setAttribute("hidden", true);
    });
  
    // Add semantics to action buttons
    toggle.setAttribute("aria-label", playLabel);
    prev.setAttribute("aria-label", prevLabel);
    next.setAttribute("aria-label", nextLabel);
  
    // Initially reveal the first slide and hide the pause button
    slidesArray[0].removeAttribute("hidden");
    slidesArray[0].setAttribute("aria-current", true);
    navItems[0].setAttribute("aria-current", true);
    pause.style.display = "none";
  
  })();
  
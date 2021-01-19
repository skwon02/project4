(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    (function() {
      // Reference the package to handle the focus trap
      const a11yFocusTrap = require("a11y-focus-trap");
      
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
    
    },{"a11y-focus-trap":2}],2:[function(require,module,exports){
    const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const tabKeycode = 9;
    
    var container;
    var lastFocusedElement;
    var containerFirstFocusable;
    var containerLastFocusable;
    
    exports.trapFocus = function(containerElement, lastFocused) {
        container = containerElement;
        lastFocusedElement = lastFocused;
        var containerFocusable = container.querySelectorAll(focusableElementsSelector);
        containerFirstFocusable = containerFocusable[0];
        containerLastFocusable = containerFocusable[containerFocusable.length - 1];
        containerFirstFocusable.focus();
        
        container.addEventListener('keydown', loopFocus);
    }
    
    exports.unTrapFocus = function() {
        container.removeEventListener('keydown', loopFocus);
        lastFocusedElement.focus();
    };
    
    function loopFocus(event) {
        if (event.keyCode === tabKeycode) {
            if (!event.shiftKey && document.activeElement === containerLastFocusable) {
                event.preventDefault();
                containerFirstFocusable.focus();
            } else if (event.shiftKey && document.activeElement === containerFirstFocusable) {
                event.preventDefault();
                containerLastFocusable.focus();
            }
        }
    }
    
    },{}]},{},[1])
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JiZC9wbnBtLXZvbHVtZS83YWUzYzliZC05MTc3LTQ0Y2MtYjdiYy0wODM3YmEwZmI4MDEvbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvYnJvd3Nlci1wYWNrLzYuMS4wL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW51LXctdHJhcC5qcyIsIi4uL3JiZC9wbnBtLXZvbHVtZS83YWUzYzliZC05MTc3LTQ0Y2MtYjdiYy0wODM3YmEwZmI4MDEvbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvYTExeS1mb2N1cy10cmFwLzEuMC4yL25vZGVfbW9kdWxlcy9hMTF5LWZvY3VzLXRyYXAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpIHtcbiAgLy8gUmVmZXJlbmNlIHRoZSBwYWNrYWdlIHRvIGhhbmRsZSB0aGUgZm9jdXMgdHJhcFxuICBjb25zdCBhMTF5Rm9jdXNUcmFwID0gcmVxdWlyZShcImExMXktZm9jdXMtdHJhcFwiKTtcbiAgXG4gIC8vIEdldCB0aGUgbWVudSBjb250YWluZXJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10b2dnbGUtbWVudVwiKTtcbiAgLy8gV2l0aGluIHRoYXQsIGlkZW50aWZ5IHNwZWNpZmljIGVsZW1lbnRzXG4gIGNvbnN0IHRyaWdnZXIgPSBuYXYucXVlcnlTZWxlY3RvcihcIi5qcy10b2dnbGUtdHJpZ2dlclwiKTtcbiAgY29uc3QgdGFyZ2V0ID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcblxuICAvLyBBZGQgQVJJQSBhdHRyaWJ1dGVzIHRvIGJ1dHRvblxuICB0cmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiVG9nZ2xlIHNpdGUgbWVudVwiKTtcbiAgdHJpZ2dlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHRvZ2dsZU1lbnUoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9IHRyaWdnZXIgPT4ge1xuICAgIC8vIENhc3QgdGhlIHN0YXRlIGFzIGEgYm9vbGVhbiAoaXQgc3RhcnRzIG91dCBhcyBhIHN0cmluZylcbiAgICBsZXQgZXhwYW5kZWQgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwidHJ1ZVwiIHx8IGZhbHNlO1xuXG4gICAgLy8gU3dpdGNoIHRoZSBzdGF0ZVxuICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCAhZXhwYW5kZWQpO1xuICB9O1xufSkoKTtcbiIsImNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzU2VsZWN0b3IgPSAnYnV0dG9uLCBbaHJlZl0sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknO1xyXG5jb25zdCB0YWJLZXljb2RlID0gOTtcclxuXHJcbnZhciBjb250YWluZXI7XHJcbnZhciBsYXN0Rm9jdXNlZEVsZW1lbnQ7XHJcbnZhciBjb250YWluZXJGaXJzdEZvY3VzYWJsZTtcclxudmFyIGNvbnRhaW5lckxhc3RGb2N1c2FibGU7XHJcblxyXG5leHBvcnRzLnRyYXBGb2N1cyA9IGZ1bmN0aW9uKGNvbnRhaW5lckVsZW1lbnQsIGxhc3RGb2N1c2VkKSB7XHJcbiAgICBjb250YWluZXIgPSBjb250YWluZXJFbGVtZW50O1xyXG4gICAgbGFzdEZvY3VzZWRFbGVtZW50ID0gbGFzdEZvY3VzZWQ7XHJcbiAgICB2YXIgY29udGFpbmVyRm9jdXNhYmxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHNTZWxlY3Rvcik7XHJcbiAgICBjb250YWluZXJGaXJzdEZvY3VzYWJsZSA9IGNvbnRhaW5lckZvY3VzYWJsZVswXTtcclxuICAgIGNvbnRhaW5lckxhc3RGb2N1c2FibGUgPSBjb250YWluZXJGb2N1c2FibGVbY29udGFpbmVyRm9jdXNhYmxlLmxlbmd0aCAtIDFdO1xyXG4gICAgY29udGFpbmVyRmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcclxuICAgIFxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsb29wRm9jdXMpO1xyXG59XHJcblxyXG5leHBvcnRzLnVuVHJhcEZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxvb3BGb2N1cyk7XHJcbiAgICBsYXN0Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvb3BGb2N1cyhldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRhYktleWNvZGUpIHtcclxuICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNvbnRhaW5lckxhc3RGb2N1c2FibGUpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyRmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNvbnRhaW5lckZpcnN0Rm9jdXNhYmxlKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckxhc3RGb2N1c2FibGUuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
    
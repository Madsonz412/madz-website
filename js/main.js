/* ==========================================================================
   MADZ — js/main.js
   Vanilla JS. No external dependencies. Progressive enhancement only:
   the site is fully readable/navigable with JS disabled.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. DARK MODE TOGGLE (persisted in localStorage)
     ------------------------------------------------------------------ */
  var root = document.documentElement;
  var THEME_KEY = "madz-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var toggles = document.querySelectorAll("[data-theme-toggle]");
    toggles.forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark");
    });
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      applyTheme(saved);
    } else {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  });

  /* ------------------------------------------------------------------
     2. MOBILE NAV
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector("[data-nav-toggle]");
    var mobilePanel = document.querySelector("[data-mobile-panel]");
    if (!navToggle || !mobilePanel) return;

    function closeMenu() {
      navToggle.classList.remove("is-open");
      mobilePanel.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function openMenu() {
      navToggle.classList.add("is-open");
      mobilePanel.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    navToggle.addEventListener("click", function () {
      var isOpen = mobilePanel.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });
    mobilePanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  });

  /* ------------------------------------------------------------------
     3. SCROLL REVEAL (IntersectionObserver)
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    var reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || reveals.length === 0) {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  });

  /* ------------------------------------------------------------------
     4. BACK TO TOP
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    var backTop = document.querySelector("[data-back-top]");
    if (!backTop) return;
    window.addEventListener(
      "scroll",
      function () {
        backTop.classList.toggle("show", window.scrollY > 480);
      },
      { passive: true }
    );
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  /* ------------------------------------------------------------------
     5. HEADER SHADOW ON SCROLL
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".site-header");
    if (!header) return;
    window.addEventListener(
      "scroll",
      function () {
        header.style.boxShadow = window.scrollY > 10 ? "0 6px 20px rgba(0,0,0,.08)" : "none";
      },
      { passive: true }
    );
  });

  /* ------------------------------------------------------------------
     6. FAQ ACCORDION
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".accordion-item");
    items.forEach(function (item) {
      var trigger = item.querySelector(".accordion-trigger");
      var panel = item.querySelector(".accordion-panel");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");

        // close siblings within the same accordion group
        var group = item.closest(".accordion");
        if (group) {
          group.querySelectorAll(".accordion-item.is-open").forEach(function (openItem) {
            if (openItem !== item) {
              openItem.classList.remove("is-open");
              openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
              openItem.querySelector(".accordion-panel").style.maxHeight = null;
            }
          });
        }

        if (isOpen) {
          item.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          panel.style.maxHeight = null;
        } else {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });

  /* ------------------------------------------------------------------
     7. FORM VALIDATION (Contact form + Home mini contact form)
     ------------------------------------------------------------------ */
  function validateField(field) {
    var wrapper = field.closest(".field");
    if (!wrapper) return true;
    var value = field.value.trim();
    var valid = true;

    if (field.hasAttribute("required") && value === "") {
      valid = false;
    }
    if (valid && field.type === "email" && value !== "") {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = emailPattern.test(value);
    }
    if (valid && field.type === "tel" && value !== "") {
      var phonePattern = /^[0-9+\-\s()]{7,16}$/;
      valid = phonePattern.test(value);
    }

    wrapper.classList.toggle("has-error", !valid);
    return valid;
  }

  function initForm(form) {
    var status = form.querySelector(".form-status");
    var fields = form.querySelectorAll("input[required], textarea[required], input[type=email], input[type=tel]");

    fields.forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var allValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) allValid = false;
      });

      if (!allValid) {
        if (status) {
          status.textContent = "Please fix the highlighted fields and try again.";
          status.classList.remove("ok");
          status.classList.add("fail", "show");
        }
        return;
      }

      // No backend is wired up in this static template.
      // Replace this block with a fetch() call to your form endpoint / CRM / email API.
      if (status) {
        status.textContent = "Thanks! Your message has been received — our team will reply within one business day.";
        status.classList.remove("fail");
        status.classList.add("ok", "show");
      }
      form.reset();
      form.querySelectorAll(".field.has-error").forEach(function (f) {
        f.classList.remove("has-error");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-validate-form]").forEach(initForm);
  });

  /* ------------------------------------------------------------------
     8. CURRENT YEAR (footer)
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();

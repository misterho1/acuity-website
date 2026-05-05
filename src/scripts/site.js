/* Acuity site — vanilla JS, no deps. */
(function () {
  "use strict";

  // ---------- Mobile nav toggle ----------
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll("[data-faq] details").forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        d.parentElement.querySelectorAll("details").forEach((x) => {
          if (x !== d) x.removeAttribute("open");
        });
      }
    });
  });

  // ---------- Contact form (no-backend stub) ----------
  // Posts to a Cloudflare Worker if Acuity wires one up; otherwise opens
  // a mailto: with the captured fields. Replace WORKER_URL when available.
  const WORKER_URL = ""; // e.g. "https://acuity-form.example.workers.dev"
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = document.getElementById("form-status");
      const data = Object.fromEntries(new FormData(form).entries());
      status.textContent = "Sending…";

      try {
        if (WORKER_URL) {
          const r = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!r.ok) throw new Error("Server error");
          status.textContent = "Thanks — we’ll be in touch within 24 hours.";
          form.reset();
        } else {
          const subject = encodeURIComponent("New inquiry from acuity website");
          const body = encodeURIComponent(
            `Name: ${data.name || ""}\nEmail: ${data.email || ""}\nPhone: ${data.phone || ""}\nTopic: ${data.topic || ""}\n\n${data.message || ""}`
          );
          window.location.href = `mailto:justin@expectacuity.com?subject=${subject}&body=${body}`;
          status.textContent = "Opening your email client…";
        }
      } catch (err) {
        status.textContent = "Sorry — something went wrong. Please call (385) 333-4050.";
      }
    });
  }

  // ---------- Smooth-scroll to in-page anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.focus({ preventScroll: true });
    });
  });

  // ---------- Current year in footer (if needed) ----------
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();

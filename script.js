(() => {
  const D = PORTFOLIO;

  /* ---------- UI strings ---------- */
  const I18N = {
    ar: {
      "nav.about": "نبذة", "nav.skills": "المهارات", "nav.projects": "المشاريع",
      "nav.experience": "الخبرات", "nav.contact": "تواصل",
      "hero.available": "متاح للعمل عن بُعد", "hero.hello": "مرحباً، أنا",
      "hero.cta1": "استعرض أعمالي", "hero.cta2": "تواصل معي", "hero.cv": "تحميل السيرة الذاتية",
      "about.title": "نبذة عني", "about.languages": "اللغات", "skills.title": "المهارات والتقنيات",
      "projects.title": "مشاريع مختارة", "projects.featured": "مشروع مميّز",
      "projects.demo": "عرض مباشر", "projects.code": "الكود المصدري", "projects.gallery": "عرض الصور",
      "gallery.close": "إغلاق", "gallery.prev": "السابق", "gallery.next": "التالي",
      "experience.title": "الخبرات والتعليم",
      "contact.title": "لنعمل معاً", "contact.text": "لديك مشروع أو فرصة عمل؟ راسلني وسأرد عليك في أقرب وقت ممكن.",
      "contact.name": "الاسم", "contact.email": "البريد الإلكتروني", "contact.message": "رسالتك", "contact.send": "إرسال الرسالة",
      "contact.err": "يُرجى تعبئة جميع الحقول وإدخال بريد إلكتروني صحيح.",
      "contact.ok": "فُتح تطبيق البريد لديك لإرسال الرسالة ✓",
      "footer": "جميع الحقوق محفوظة", "lang": "EN",
    },
    en: {
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.contact": "Contact",
      "hero.available": "Available for remote work", "hero.hello": "Hi, I'm",
      "hero.cta1": "View my work", "hero.cta2": "Get in touch", "hero.cv": "Download CV",
      "about.title": "About me", "about.languages": "Languages", "skills.title": "Skills & Technologies",
      "projects.title": "Selected Projects", "projects.featured": "Featured",
      "projects.demo": "Live demo", "projects.code": "Source code", "projects.gallery": "View screenshots",
      "gallery.close": "Close", "gallery.prev": "Previous", "gallery.next": "Next",
      "experience.title": "Experience & Education",
      "contact.title": "Let's work together", "contact.text": "Have a project or a job opportunity in mind? Send me a message and I'll get back to you as soon as possible.",
      "contact.name": "Name", "contact.email": "Email", "contact.message": "Message", "contact.send": "Send message",
      "contact.err": "Please fill in all fields and enter a valid email address.",
      "contact.ok": "Your email app has opened so you can send the message ✓",
      "footer": "All rights reserved", "lang": "ع",
    },
  };

  /* ---------- Icons ---------- */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.3 18.7 19.6c-.24 1.07-.88 1.34-1.78.83l-4.93-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.35-5.02 9.14-8.26c.4-.35-.09-.55-.62-.2L6.2 13.2l-4.86-1.52c-1.06-.33-1.08-1.06.22-1.57L20.55 2.8c.88-.32 1.65.2 1.39 1.5Z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 1.7-1.3a4 4 0 0 0-5-5L3 10l8-8 3 3Z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  };

  const GRADS = [
    ["#7c6cff", "#22d3ee"], ["#f472b6", "#7c6cff"], ["#22d3ee", "#34d399"],
    ["#f59e0b", "#ef4444"], ["#6366f1", "#ec4899"], ["#14b8a6", "#6366f1"],
  ];

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
  };

  let lang = store.get("lang");
  if (lang !== "ar" && lang !== "en") lang = "ar"; // اللغة الافتراضية: العربية
  let filter = "all";
  let typingTimer;

  /* ---------- Renderers ---------- */
  const socialsHTML = () =>
    D.profile.socials
      .map((s) => `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.type)}">${ICONS[s.type] || ICONS.ext}</a>`)
      .join("") +
    (D.profile.email ? `<a class="social" href="mailto:${esc(D.profile.email)}" aria-label="Email">${ICONS.email}</a>` : "");

  function renderStatic() {
    const p = D.profile;
    const first = p.name.en.split(" ")[0].toLowerCase();
    $("#logo").innerHTML = `&lt;<b>${esc(first)}</b> /&gt;`;
    $("#heroSocials").innerHTML = socialsHTML();
    $("#contactSocials").innerHTML = socialsHTML();
    $("#availBadge").hidden = !p.available;
    const email = $("#contactEmail");
    email.textContent = p.email;
    email.href = `mailto:${p.email}`;
  }

  function renderLang() {
    const t = I18N[lang];
    const p = D.profile;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${p.name[lang]} — ${p.role[lang]}`;
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n] ?? ""));
    $("#langBtn").textContent = t.lang;

    $("#heroName").textContent = p.name[lang];
    $("#heroTagline").textContent = p.tagline[lang];
    $("#contactLoc").textContent = "📍 " + p.location[lang];
    $("#contactReloc").textContent = p.relocation?.[lang] || "";
    // السيرة الذاتية بلغة الموقع الحالية — نفس اسم الملف للغتين
    const cv = typeof p.cv === "string" ? p.cv : p.cv?.[lang];
    ["#cvBtn", "#cvBtn2"].forEach((s) => {
      $(s).hidden = !cv;
      if (cv) { $(s).href = cv; $(s).setAttribute("download", cv.split("/").pop()); }
    });
    typeRole(p.role[lang]);

    const s = (x) => `<span class="s">'${esc(x)}'</span>`;
    $("#codeSnippet").innerHTML =
      `<span class="c">// Hello, World! 👋</span>\n` +
      `<span class="v">$developer</span> = [\n` +
      `    ${s("name")}     => ${s(p.name.en)},\n` +
      `    ${s("role")}     => ${s(p.role.en)},\n` +
      `    ${s("stack")}    => [${s("Laravel")}, ${s("Filament")}, ${s("MySQL")}],\n` +
      `    ${s("based_in")} => ${s(p.location.en)},\n` +
      `    ${s("remote")}   => <span class="p">true</span>,\n` +
      `];\n\n` +
      `<span class="k">return</span> <span class="v">$developer</span>-&gt;hire(); <span class="c">// 🚀</span>`;

    $("#aboutText").innerHTML = D.about[lang].map((x) => `<p>${esc(x)}</p>`).join("");
    $("#stats").innerHTML = D.stats.map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label[lang])}</span></div>`).join("");
    $("#languages").innerHTML = (D.languages || []).map((l) => `<li><span>${esc(l.name[lang])}</span><span>${esc(l.level[lang])}</span></li>`).join("");

    $("#skillsGrid").innerHTML = D.skills
      .map((g) => `
        <article class="skill-card reveal">
          <div class="skill-icon">${ICONS[g.icon] || ICONS.code}</div>
          <h3>${esc(g.title[lang])}</h3>
          <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
        </article>`)
      .join("");

    renderFilters();
    renderProjects();

    $("#timeline").innerHTML = D.experience
      .map((e) => `
        <li class="tl-item reveal">
          <div class="tl-card">
            <span class="tl-period">${esc(e.period[lang])}</span>
            <h3>${esc(e.role[lang])}</h3>
            ${e.company?.[lang] ? `<div class="tl-company">${esc(e.company[lang])}</div>` : ""}
            ${e.points?.[lang]?.length ? `<ul>${e.points[lang].map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          </div>
        </li>`)
      .join("");

    $("#footerText").textContent = `© ${new Date().getFullYear()} ${p.name[lang]} — ${t.footer}`;
    $("#formNote").textContent = "";
    observeReveals();
    bindSpotlight();
  }

  function renderFilters() {
    const used = new Set(D.projects.map((p) => p.category));
    $("#filters").innerHTML = Object.entries(D.categories)
      .filter(([k]) => k === "all" || used.has(k))
      .map(([k, v]) => `<button type="button" role="tab" class="filter${k === filter ? " active" : ""}" data-f="${esc(k)}" aria-selected="${k === filter}">${esc(v[lang])}</button>`)
      .join("");
  }

  function renderProjects() {
    const t = I18N[lang];
    $("#projectsGrid").innerHTML = D.projects
      .map((p, i) => {
        const [a, b] = GRADS[i % GRADS.length];
        const title = p.title[lang];
        const initials = p.short || p.title.en.split(/\s+/).filter((w) => /^[a-z]/i.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
        const imgs = p.images || (p.image ? [p.image] : []);
        const cover = imgs.length
          ? `<button type="button" class="cover-btn" data-gallery="${i}" aria-label="${esc(t["projects.gallery"])}: ${esc(title)}">
               <img src="${esc(imgs[0])}" alt="${esc(title)}" loading="lazy">
               <span class="cover-zoom">${ICONS.zoom}${imgs.length > 1 ? `<b>${imgs.length}</b>` : ""}</span>
             </button>`
          : `<div class="placeholder" style="background:linear-gradient(135deg,${a},${b})">${esc(initials)}</div>`;
        const links = [
          p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${ICONS.ext}${t["projects.demo"]}</a>` : "",
          p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">${ICONS.code}${t["projects.code"]}</a>` : "",
        ].join("");
        return `
          <article class="project reveal${filter !== "all" && p.category !== filter ? " hide" : ""}" data-cat="${esc(p.category)}">
            <div class="project-cover">${cover}${p.featured ? `<span class="tag-featured">★ ${t["projects.featured"]}</span>` : ""}${p.status ? `<span class="tag-status">${esc(p.status[lang])}</span>` : ""}</div>
            <div class="project-body">
              <h3>${esc(title)}</h3>
              <p>${esc(p.description[lang])}</p>
              ${p.note ? `<p class="project-note" dir="ltr">${esc(p.note.en)}</p>` : ""}
              <div class="chips">${p.tags.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
              ${links ? `<div class="project-links">${links}</div>` : ""}
            </div>
          </article>`;
      })
      .join("");
  }

  function typeRole(text) {
    clearTimeout(typingTimer);
    const el = $("#heroRole");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = text; return; }
    let i = 0;
    el.textContent = "";
    const step = () => { el.textContent = text.slice(0, ++i); if (i < text.length) typingTimer = setTimeout(step, 55); };
    typingTimer = setTimeout(step, 300);
  }

  /* ---------- Effects ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el, i) => {
      if (!io) return el.classList.add("in");
      el.style.transitionDelay = `${(i % 3) * 80}ms`;
      io.observe(el);
    });
  }

  function bindSpotlight() {
    document.querySelectorAll(".skill-card").forEach((c) =>
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${e.clientX - r.left}px`);
        c.style.setProperty("--my", `${e.clientY - r.top}px`);
      }));
  }

  /* ---------- Events ---------- */
  $("#langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    store.set("lang", lang);
    renderLang();
  });

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filter = btn.dataset.f;
    document.querySelectorAll(".filter").forEach((b) => { b.classList.toggle("active", b === btn); b.setAttribute("aria-selected", b === btn); });
    document.querySelectorAll(".project").forEach((p) => {
      p.classList.toggle("hide", filter !== "all" && p.dataset.cat !== filter);
      p.classList.add("in");
    });
  });

  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  const nav = $("#nav");
  const sections = [...document.querySelectorAll("main section[id]")];
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    const y = scrollY + innerHeight * 0.35;
    let current = "";
    sections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
    navLinks.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  };
  addEventListener("scroll", onScroll, { passive: true });

  // Contact form: opens the visitor's email app (no backend needed).
  // لاستقبال الرسائل مباشرة دون فتح تطبيق البريد، استخدم خدمة مثل Formspree وغيّر هذا الجزء.
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target, t = I18N[lang], note = $("#formNote");
    const fields = [f.name, f.email, f.message];
    let ok = true;
    fields.forEach((el) => { const bad = !el.value.trim() || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(el.value)); el.classList.toggle("invalid", bad); if (bad) ok = false; });
    if (!ok) { note.textContent = t["contact.err"]; note.classList.add("err"); return; }
    const subject = encodeURIComponent(`Portfolio — ${f.name.value.trim()}`);
    const body = encodeURIComponent(`${f.message.value.trim()}\n\n— ${f.name.value.trim()} (${f.email.value.trim()})`);
    location.href = `mailto:${D.profile.email}?subject=${subject}&body=${body}`;
    note.classList.remove("err");
    note.textContent = t["contact.ok"];
    f.reset();
  });

  /* ---------- Gallery (lightbox) ---------- */
  const lb = $("#lightbox");
  let gal = { imgs: [], i: 0, title: "" };
  const showSlide = () => {
    const n = gal.imgs.length;
    $("#lbImg").src = gal.imgs[gal.i];
    $("#lbImg").alt = gal.title;
    $("#lbCaption").textContent = n > 1 ? `${gal.title} — ${gal.i + 1} / ${n}` : gal.title;
    $("#lbPrev").hidden = $("#lbNext").hidden = n < 2;
  };
  const step = (d) => { gal.i = (gal.i + d + gal.imgs.length) % gal.imgs.length; showSlide(); };
  $("#projectsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-gallery]");
    if (!btn) return;
    const p = D.projects[+btn.dataset.gallery];
    gal = { imgs: p.images || [p.image], i: 0, title: p.title[lang] };
    const t = I18N[lang];
    $("#lbClose").setAttribute("aria-label", t["gallery.close"]);
    $("#lbPrev").setAttribute("aria-label", t["gallery.prev"]);
    $("#lbNext").setAttribute("aria-label", t["gallery.next"]);
    showSlide();
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
  });
  $("#lbClose").addEventListener("click", () => lb.close());
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => {
    const rtl = document.dir === "rtl";
    if (e.key === "ArrowRight") step(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
  });

  /* ---------- Init ---------- */
  renderStatic();
  renderLang();
  onScroll();
})();

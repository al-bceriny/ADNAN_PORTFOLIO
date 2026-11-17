/* =========================================================
   ملف البيانات — عدّل هذا الملف فقط لتخصيص البورتفوليو
   Data file — edit ONLY this file to customize the portfolio
   كل نص له نسخة عربية (ar) وإنجليزية (en)
   ========================================================= */

const PORTFOLIO = {
  profile: {
    name: { ar: "عدنان بسيريني", en: "Adnan Biseyrini" },
    initials: "AB",
    role: { ar: "مطوّر ويب", en: "Web Developer" },
    tagline: {
      ar: "أطوّر تطبيقات ويب وأنظمة إدارة متكاملة بـ Laravel، تجمع بين الكود النظيف وفهم احتياجات الأعمال.",
      en: "I build web applications and complete management systems with Laravel, combining clean code with a solid understanding of business needs.",
    },
    location: { ar: "قيصري، تركيا", en: "Kayseri, Türkiye" },
    relocation: {
      ar: "متاح للعمل عن بُعد، ومستعد للانتقال إلى إدلب، سوريا عند الحاجة",
      en: "Available for remote work, and open to relocating to Idlib, Syria if needed",
    },
    available: true, // يظهر شارة "متاح للعمل"
    email: "adnan.biseyrini@gmail.com",
    // ملف السيرة الذاتية لكل لغة (نفس الاسم، مجلد مختلف) — يُحمَّل حسب لغة الموقع
    cv: {
      ar: "assets/cv/ar/ADNAN_BISEYRINI_CV.pdf",
      en: "assets/cv/en/ADNAN_BISEYRINI_CV.pdf",
    },
    socials: [
      { type: "github", url: "https://github.com/al-bceriny" },
      { type: "linkedin", url: "https://www.linkedin.com/in/adnan-biseyrini" },
      { type: "telegram", url: "https://t.me/al_bceriny" },
    ],
  },

  about: {
    ar: [
      "مطوّر ويب ومهندس حاسوب، أركّز على بناء حلول ويب ذكية وسهلة الاستخدام وقابلة للتوسع. أعمل بشكل أساسي على Laravel وFilament وMySQL، وطوّرت أنظمة متكاملة، منها منصة SaaS لإدارة عيادات الأسنان، ونظام لإدارة التعلّم الجامعي، ونظام لإدارة علاقات العملاء (CRM).",
      "لا أكتفي بكتابة الكود، بل أهتم بفهم سير العمل داخل المؤسسات وتحويل متطلباتها إلى أنظمة عملية، وهو ما عزّزته خبرتي في تحليل الأعمال وأنظمة تخطيط موارد المؤسسات (ERP)، إضافة إلى سنوات من العمل التطوعي في العلاقات العامة والمالية.",
      "أحرص على مواكبة التقنيات الحديثة، وأستمتع بالمساهمة في المشاريع مفتوحة المصدر والمبادرات التطوعية.",
    ],
    en: [
      "I'm a web developer and computer engineer focused on building smart, user-friendly, and scalable web solutions. I work mainly with Laravel, Filament, and MySQL, and have built complete systems, including a SaaS platform for dental clinics, a university learning management system, and a CRM.",
      "Beyond writing code, I focus on understanding how organizations work and turning their requirements into practical systems — an approach strengthened by my background in business analysis and ERP systems, as well as years of volunteer work in public relations and finance.",
      "I keep up with modern technologies and enjoy contributing to open-source projects and volunteer initiatives.",
    ],
  },

  stats: [
    { value: "7", label: { ar: "مشاريع ويب", en: "Web projects" } },
    { value: "4+", label: { ar: "سنوات من العمل التطوعي", en: "Years of volunteering" } },
    { value: "3", label: { ar: "لغات", en: "Languages" } },
  ],

  languages: [
    { name: { ar: "العربية", en: "Arabic" }, level: { ar: "اللغة الأم", en: "Native" } },
    { name: { ar: "التركية", en: "Turkish" }, level: { ar: "متقدم (C1)", en: "Advanced (C1)" } },
    { name: { ar: "الإنجليزية", en: "English" }, level: { ar: "متوسط (B1)", en: "Intermediate (B1)" } },
  ],

  skills: [
    {
      title: { ar: "الخوادم وقواعد البيانات", en: "Backend & Databases" },
      icon: "server",
      items: ["PHP", "Laravel", "Filament", "MySQL", "PostgreSQL", "REST APIs"],
    },
    {
      title: { ar: "الواجهات الأمامية", en: "Frontend" },
      icon: "layout",
      items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "Vue.js", "React", "Blade"],
    },
    {
      title: { ar: "الأعمال والأنظمة", en: "Business & Systems" },
      icon: "chart",
      items: ["Business Analysis", "ERP Systems", "WordPress", "Microsoft 365", "Mail Servers", "Git"],
    },
  ],

  // category: يجب أن تطابق مفاتيح categories أدناه
  categories: {
    all: { ar: "الكل", en: "All" },
    professional: { ar: "احترافية", en: "Professional" },
    academic: { ar: "أكاديمية", en: "Academic" },
    personal: { ar: "شخصية", en: "Personal" },
  },

  projects: [
    {
      title: { ar: "نظام إدارة عيادات الأسنان (SaaS)", en: "Dental Clinic Management System (SaaS)" },
      short: "DCMS",
      // الصورة الأولى غلاف المشروع، والضغط عليها يفتح معرضاً بكل الصور
      images: ["assets/projects/dental-clinic-1.png", "assets/projects/dental-clinic-2.png"],
      description: {
        ar: "منصة SaaS متكاملة لإدارة عيادات ومراكز الأسنان، تشمل المرضى والمواعيد والعلاجات والطاقم الطبي، مع واجهة مصقولة وتجربة استخدام سلسة.",
        en: "A comprehensive SaaS platform for dental clinics and centers, covering patients, appointments, treatments, and staff, with a polished UI and smooth user experience.",
      },
      note: {
        ar: "حساب التجربة: test@example.com — كلمة المرور: 12341234",
        en: "Demo login: test@example.com — Password: 12341234",
      },
      category: "professional",
      tags: ["Laravel", "Filament", "MySQL", "Tailwind CSS"],
      demo: "https://clinic-adnan-saas.up.railway.app/admin/demo-dental-clinic",
      code: "",
      featured: true,
    },
    {
      title: { ar: "بيت المسك — متجر عطور إلكتروني", en: "Bayt Al-Misk — Perfume E-commerce Store" },
      short: "BAM",
      images: [
        "assets/projects/bayt-almisk-1.jpg",
        "assets/projects/bayt-almisk-2.jpg",
        "assets/projects/bayt-almisk-3.jpg",
        "assets/projects/bayt-almisk-4.jpg",
        "assets/projects/bayt-almisk-5.jpg",
      ],
      description: {
        ar: "متجر عطور وإكسسوارات عربي على ووردبريس وووكومرس، بقالب مخصص بهوية المحل ولوحة تحكم مبسّطة لصاحب محل بلا خبرة تقنية: ملخص المبيعات، تعديل الأسعار والمخزون من جدول واحد، واستيراد المنتجات من إكسل مع معاينة قبل الحفظ.",
        en: "An Arabic perfume & accessories store on WordPress and WooCommerce, with a custom branded theme and a simplified dashboard for a non-technical shop owner: sales overview, one-table price & stock editing, and an Excel product importer with preview.",
      },
      // في السيرة الذاتية فقط: يحلّ محل مشروع OBS (يبقى OBS ظاهراً في الموقع)
      cvInsteadOf: "OBS",
      cvDescription: {
        ar: "متجر عطور عربي على ووكومرس بقالب مخصص ولوحة تحكم مبسّطة لصاحب المحل: ملخص المبيعات، تعديل الأسعار والمخزون، واستيراد المنتجات من إكسل.",
        en: "An Arabic WooCommerce perfume store with a custom theme and a simplified owner dashboard: sales overview, price & stock editing, and Excel import.",
      },
      category: "professional",
      tags: ["WordPress", "WooCommerce", "PHP", "Docker", "RTL"],
      demo: "",
      code: "https://github.com/al-bceriny/bayt-almisk-store",
    },
    {
      title: { ar: "لوحة إدارة المكتبة", en: "Library Control Panel" },
      short: "LIB",
      description: {
        ar: "تطبيق ويب متكامل مبني على Laravel 12، يركّز على البنية النظيفة والمصادقة والتحكم في الصلاحيات حسب الأدوار.",
        en: "A full-stack web application built with Laravel 12, focused on clean architecture, authentication, and role-based access control.",
      },
      category: "professional",
      tags: ["Laravel 12", "PHP 8", "MySQL", "Breeze", "Bootstrap"],
      demo: "",
      code: "https://github.com/al-bceriny/library_control_panel",
    },
    {
      title: { ar: "لوحة إدارة المحتوى", en: "Content Management Dashboard" },
      short: "CMS",
      description: {
        ar: "لوحة تحكم مبنية بـ Laravel Filament، توفّر طريقة منظمة وفعّالة لإدارة المحتوى والعمليات الإدارية.",
        en: "An admin dashboard built with Laravel Filament, offering a clean and efficient way to manage content and administrative operations.",
      },
      category: "professional",
      tags: ["Laravel", "Filament", "PHP", "MySQL"],
      demo: "",
      code: "https://github.com/al-bceriny/Laravel-Dashboard",
    },
    {
      title: { ar: "OBS — نظام إدارة التعلّم الجامعي", en: "OBS — University Learning Management System" },
      short: "OBS",
      description: {
        ar: "نظام متكامل لإدارة التعلّم بلوحات تحكم مستقلة للإدارة والأساتذة والطلاب، يشمل الأقسام والمقررات والحضور والواجبات والاختبارات والدرجات.",
        en: "A full-featured LMS with separate dashboards for admins, teachers, and students, covering departments, courses, attendance, assignments, exams, and grades.",
      },
      category: "academic",
      tags: ["Laravel 11", "Blade", "MySQL", "Breeze"],
      demo: "",
      code: "https://github.com/al-bceriny/OBS-LMS",
    },
    {
      title: { ar: "نظام إدارة علاقات العملاء (CRM)", en: "CRM System" },
      short: "CRM",
      description: {
        ar: "مشروع التخرج: نظام CRM متكامل مكتوب بـ PHP دون أطر عمل، يشمل إدارة العملاء وتتبّع المبيعات ومصادقة المستخدمين.",
        en: "Graduation project: a full-featured CRM written in native PHP, including client management, sales tracking, and user authentication.",
      },
      category: "academic",
      tags: ["PHP", "MySQL", "Bootstrap"],
      demo: "",
      code: "",
    },
    {
      title: { ar: "تطبيق CRUD بتقنيات TypeScript", en: "TypeScript CRUD App" },
      short: "TS",
      description: {
        ar: "خادم مبني بـ TypeScript وtRPC وقاعدة بيانات PostgreSQL على Docker، مع Kysely لبناء الاستعلامات وZod للتحقق من البيانات.",
        en: "A TypeScript backend using tRPC and PostgreSQL on Docker, with Kysely for queries and Zod for data validation.",
      },
      category: "personal",
      status: { ar: "قيد التطوير", en: "In progress" },
      tags: ["TypeScript", "Next.js", "tRPC", "PostgreSQL", "Kysely", "Zod", "Docker"],
      demo: "",
      code: "https://github.com/al-bceriny/adnan-crud",
    },
  ],

  experience: [
    {
      period: { ar: "عمل حر", en: "Freelance" },
      role: { ar: "تصميم وتطوير مواقع WordPress", en: "WordPress Website Designer & Developer" },
      company: { ar: "", en: "" },
      points: {
        ar: ["تصميم مواقع ويب وتطويرها على WordPress، من الإعداد والتخصيص حتى الإطلاق."],
        en: ["Designed and built websites on WordPress, from setup and customization through launch."],
      },
    },
    {
      period: { ar: "4 سنوات", en: "4 years" },
      role: { ar: "مسؤول علاقات عامة (متطوع)", en: "Public Relations Officer (Volunteer)" },
      company: { ar: "فريق ملهم التطوعي", en: "Molham Volunteering Team" },
      points: {
        ar: ["التواصل مع الجهات الشريكة والداعمين، والمساهمة في تعزيز حضور الفريق وتمثيله."],
        en: ["Liaised with partners and supporters and helped strengthen the team's presence and representation."],
      },
    },
    {
      period: { ar: "سنتان", en: "2 years" },
      role: { ar: "مساعد مالي (متطوع)", en: "Financial Assistant (Volunteer)" },
      company: { ar: "فريق ملهم التطوعي", en: "Molham Volunteering Team" },
      points: {
        ar: ["المساعدة في متابعة العمليات المالية وتنظيم السجلات والتقارير."],
        en: ["Assisted with tracking financial operations and organizing records and reports."],
      },
    },
    {
      period: { ar: "التعليم", en: "Education" },
      role: { ar: "بكالوريوس في هندسة الحاسوب", en: "B.Sc. in Computer Engineering" },
      company: { ar: "جامعة أرجيس — قيصري، تركيا", en: "Erciyes University — Kayseri, Türkiye" },
      points: { ar: ["المعدل التراكمي: 3.1 من 4.0"], en: ["GPA: 3.1 / 4.0"] },
    },
  ],
};

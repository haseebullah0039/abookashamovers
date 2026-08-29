export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export interface Dictionary {
  dir: "ltr" | "rtl";
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    callUs: string;
    getQuote: string;
    langSwitch: string;
  };
  topBar: { address: string; email: string; hours: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    ctaQuote: string;
    ctaWatchVideo: string;
    badgeCard1: string;
    badgeCard2: string;
  };
  areas: {
    kicker: string;
    title: string;
    desc: string;
    cities: { name: string; img: string }[];
  };
  about: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    features: { icon: string; title: string; desc: string }[];
    cta: string;
  };
  services: {
    kicker: string;
    title: string;
    learnMore: string;
    items: { icon: string; title: string; desc: string; img: string }[];
  };
  worldClass: {
    kicker: string;
    title: string;
    desc: string;
    badge1: string;
    badge2: string;
    points: { icon: string; title: string }[];
    cta: string;
  };
  process: {
    kicker: string;
    title: string;
    steps: { num: string; icon: string; title: string; desc: string }[];
  };
  gallery: {
    kicker: string;
    title: string;
    cta: string;
    items: { title: string; img: string }[];
  };
  testimonials: {
    kicker: string;
    title: string;
    items: { quote: string; customerName: string; customerTag: string; img: string }[];
  };
  partners: { title: string; logos: string[] };
  quote: {
    kicker: string;
    title: string;
    desc: string;
    features: string[];
    contactInfo: { icon: string; label: string; value: string; href: string }[];
    formKicker: string;
    formTitle: string;
    formDesc: string;
    fields: {
      fullName: string;
      fullNamePh: string;
      phone: string;
      phonePh: string;
      email: string;
      emailPh: string;
      city: string;
      cityPh: string;
      service: string;
      servicePh: string;
      message: string;
      messagePh: string;
    };
    cities: string[];
    services: string[];
    submit: string;
  };
  footer: {
    brand: string;
    brandRed: string;
    desc: string;
    servicesTitle: string;
    services: string[];
    linksTitle: string;
    links: string[];
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPh: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  marquee: string[];
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    dir: "ltr",
    meta: {
      title: "ABO Okasha Movers | Best House & Furniture Movers in Dubai",
      description:
        "ABO Okasha Movers is a professional local moving company in Dubai, UAE. We offer residential moving, furniture moving, packing & unpacking, office relocation, and secure storage by road across Dubai. Get a free quote today.",
    },
    nav: {
      home: "HOME",
      about: "ABOUT",
      services: "SERVICES",
      projects: "OUR PROJECTS",
      contact: "CONTACT",
      callUs: "Call Us Now",
      getQuote: "GET A QUOTE",
      langSwitch: "العربية",
    },
    topBar: {
      address: "Al Quoz Industrial Area, Dubai, UAE",
      email: "abookashamovers@gmail.com",
      hours: "Open Time: 8AM – Closing Time: 8PM",
    },
    hero: {
      badge: "DUBAI'S TRUSTED LOCAL MOVERS",
      titleLine1: "PROFESSIONAL MOVERS",
      titleLine2: "IN DUBAI.",
      desc: "ABO Okasha Movers delivers careful, road-based residential and office moving across Dubai — professional packing, safe handling, and on-time delivery, every time.",
      ctaQuote: "GET A FREE QUOTE",
      ctaWatchVideo: "WATCH VIDEO",
      badgeCard1: "100% Road-Based",
      badgeCard2: "Moving Service",
    },
    areas: {
      kicker: "OUR SERVICE AREA",
      title: "Dubai-Based, Serving Nearby Emirates by Road",
      desc: "ABO Okasha Movers is based in Dubai and provides professional residential, office, and furniture moving by road across Dubai and neighbouring Emirates.",
      cities: [
        { name: "Dubai", img: "/Dubai.webp" },
        { name: "Abu Dhabi", img: "/Abu Dhabi.webp" },
        { name: "Sharjah", img: "/Sharjah.webp" },
        { name: "Ajman", img: "/Ajman.webp" },
        { name: "Ras Al Khaimah", img: "/Ras Al Khaimah.webp" },
        { name: "Fujairah", img: "/Fujairah.webp" },
        { name: "Umm Al Quwain", img: "/Umm Al Quwain.webp" },
        { name: "Al Ain", img: "/Al Ain.webp" },
      ],
    },
    about: {
      kicker: "ABOUT US",
      titleLine1: "Your trusted local moving",
      titleLine2: "partner in Dubai.",
      desc: "ABO Okasha Movers is a Dubai-based moving company focused on one thing: getting your home or office moved safely, on time, and without stress. Every move is handled by our own trained team using dedicated trucks — no subcontractors, no surprises.",
      features: [
        {
          icon: "🚛",
          title: "Local Road Movers",
          desc: "Dedicated moving trucks and trained crews for every home and office move in Dubai.",
        },
        {
          icon: "📦",
          title: "Careful Packing",
          desc: "Quality packing materials and safe handling to protect your furniture and belongings.",
        },
      ],
      cta: "GET YOUR FREE QUOTE →",
    },
    services: {
      kicker: "OUR SERVICES",
      title: "Professional moving services in Dubai",
      learnMore: "LEARN MORE →",
      items: [
        {
          icon: "🏠",
          title: "Residential Moving",
          desc: "Trusted house and apartment movers in Dubai — careful handling for every room, delivered safely to your new home.",
          img: "/Residential Moving.webp",
        },
        {
          icon: "🛋️",
          title: "Furniture Moving",
          desc: "Specialist furniture movers in Dubai for sofas, wardrobes, and bulky items, dismantled and reassembled with care.",
          img: "/Furniture Moving.webp",
        },
        {
          icon: "📦",
          title: "Packing & Unpacking",
          desc: "Professional packing services in Dubai using quality materials to keep your belongings protected in transit.",
          img: "/Packing & Unpacking.webp",
        },
        {
          icon: "🏢",
          title: "Home & Office Relocation",
          desc: "Efficient residential and commercial relocation in Dubai, planned to minimise downtime and disruption.",
          img: "/Home & Office Relocation.webp",
        },
        {
          icon: "🗄️",
          title: "Secure Storage Solutions",
          desc: "Short and long-term storage in Dubai for your furniture and belongings, kept safe until you're ready.",
          img: "/storage.webp",
        },
        {
          icon: "⚡",
          title: "Fast & Reliable Moving Service",
          desc: "On-time, dependable moving trucks and crews across Dubai — book a slot that fits your schedule.",
          img: "/fast and reliable.webp",
        },
      ],
    },
    worldClass: {
      kicker: "TRUSTED MOVER SERVICE",
      title: "Professional movers & packers, only in Dubai",
      desc: "We focus exclusively on local road moving across Dubai — no air cargo, no sea freight, no international shipping. Just careful, professional relocation from door to door.",
      badge1: "100%",
      badge2: "ROAD-BASED",
      points: [
        { icon: "🛣️", title: "100% Road-Based Moving — No Air or Sea Freight" },
        { icon: "🚚", title: "Our Own Trucks & Trained Moving Crews" },
        { icon: "🕒", title: "On-Time, Scheduled Door-to-Door Delivery" },
      ],
      cta: "CONTACT US →",
    },
    process: {
      kicker: "OUR PROCESS",
      title: "How our Dubai moving process works",
      steps: [
        { num: "01", icon: "🖱️", title: "Request A Quote", desc: "Tell us about your move and get a free, no-obligation quote." },
        { num: "02", icon: "📋", title: "Schedule Your Move", desc: "We confirm a pickup time in Dubai that works for you." },
        { num: "03", icon: "📦", title: "Pack & Load Carefully", desc: "Our crew packs and loads your items using quality materials." },
        { num: "04", icon: "🚚", title: "Safe Road Delivery", desc: "Your move arrives safely and on time by road, every time." },
      ],
    },
    gallery: {
      kicker: "OUR PROJECTS",
      title: "Recent moves completed across Dubai",
      cta: "GET A FREE QUOTE",
      items: [
        { title: "Villa Relocation, Dubai", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop" },
        { title: "Office Relocation Setup", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop" },
        { title: "Secure Storage Facility", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80&auto=format&fit=crop" },
      ],
    },
    testimonials: {
      kicker: "CUSTOMER FEEDBACK",
      title: "What our Dubai customers say about us",
      items: [
        {
          quote:
            "The team arrived on time, packed everything carefully, and kept us updated throughout the move. Our furniture arrived in perfect condition with zero stress on our end — exactly what we needed for a busy relocation across Dubai.",
          customerName: "Ahmed Al Marri",
          customerTag: "DUBAI MARINA CUSTOMER",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "Booking was easy and the crew showed up exactly on schedule. They wrapped every piece of furniture before loading, and nothing was scratched or damaged. Highly recommend for anyone moving in Dubai.",
          customerName: "Sarah Thompson",
          customerTag: "JLT CUSTOMER",
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "We moved our entire office over a weekend and there was zero downtime on Monday. The team labeled every box and set up the new space exactly how we asked. Truly professional service.",
          customerName: "Khalid Al Suwaidi",
          customerTag: "BUSINESS BAY CUSTOMER",
          img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "I was nervous about moving a villa full of antique furniture, but the crew handled everything with so much care. They even helped rearrange the new living room. Worth every dirham.",
          customerName: "Fatima Al Zaabi",
          customerTag: "ARABIAN RANCHES CUSTOMER",
          img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "Fast, affordable, and reliable. I called for a same-day move and they made it happen. The drivers were polite and careful with every box. This is now my go-to moving company in Dubai.",
          customerName: "James Carter",
          customerTag: "DOWNTOWN DUBAI CUSTOMER",
          img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "Their storage service saved us during our renovation. Our furniture stayed safe and clean for two months, and delivery back to our home was right on time. Excellent communication throughout.",
          customerName: "Mariam Al Nuaimi",
          customerTag: "MIRDIF CUSTOMER",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "From the first phone call to the final box, everything was smooth. The quote was accurate with no hidden fees, and the movers were fast without rushing or being careless.",
          customerName: "Omar Al Falasi",
          customerTag: "AL BARSHA CUSTOMER",
          img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "We had a tight deadline to vacate our apartment and ABO Okasha Movers got the whole job done in under four hours. Friendly team, great attitude, and nothing was left behind.",
          customerName: "Layla Hassan",
          customerTag: "DUBAI SILICON OASIS CUSTOMER",
          img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "Moving my furniture shop's stock across the city felt risky, but their packing was so thorough that everything arrived without a single chip. Their trucks are clean and well maintained too.",
          customerName: "Rashid Al Mansoori",
          customerTag: "AL QUOZ CUSTOMER",
          img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "Second time using them and just as impressed as the first. Punctual, careful, and reasonably priced. My whole family now uses ABO Okasha Movers whenever we relocate in the UAE.",
          customerName: "Noura Al Qassimi",
          customerTag: "PALM JUMEIRAH CUSTOMER",
          img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=crop",
        },
      ],
    },
    partners: {
      title: "Verified By",
      logos: [
        "Dubai Economy & Tourism (DET)",
        "Ministry of Human Resources & Emiratisation (MOHRE)",
        "Dubai Chamber of Commerce",
        "International Association of Movers (IAM)",
        "FIDI Global Alliance",
      ],
    },
    quote: {
      kicker: "ROAD MOVING EXPERTS",
      title: "Reliable Road Moving Services Across the UAE",
      desc: "We specialize exclusively in professional road transport and relocation — no air or sea freight. Every move is handled door-to-door by our own trained team, giving you full control, speed, and care from pickup to delivery.",
      features: [
        "100% Road-Based Moving & Transport",
        "Direct Door-to-Door Delivery Across the UAE",
        "Careful Handling & Fully Insured Loads",
        "On-Time, Scheduled & Same-Day Moves",
      ],
      contactInfo: [
        { icon: "📞", label: "Call Us", value: "+971 56 600 6415", href: "tel:+971566006415" },
        { icon: "✉️", label: "Email Us", value: "abookashamovers@gmail.com", href: "mailto:abookashamovers@gmail.com" },
        { icon: "📍", label: "Service Area", value: "Dubai & Nearby Emirates", href: "#" },
      ],
      formKicker: "GET IN TOUCH",
      formTitle: "Request A Quote",
      formDesc: "Fill in your details and our team will get back to you shortly.",
      fields: {
        fullName: "Full Name",
        fullNamePh: "John Doe",
        phone: "Phone Number",
        phonePh: "+971 5X XXX XXXX",
        email: "Email Address",
        emailPh: "you@example.com",
        city: "City",
        cityPh: "Select your city",
        service: "Service Needed",
        servicePh: "Select the service you need",
        message: "Message",
        messagePh: "Tell us more about your move (optional)",
      },
      cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"],
      services: ["Residential Moving", "Furniture Moving", "Packing & Unpacking", "Home & Office Relocation", "Storage", "Fast & Reliable Service"],
      submit: "GET A QUOTE",
    },
    footer: {
      brand: "ABO OKASHA",
      brandRed: "MOVERS",
      desc: "A trusted local moving company in Dubai, offering professional road-based residential and office moving, furniture handling, packing, and secure storage.",
      servicesTitle: "Our Services",
      services: ["Residential Moving", "Furniture Moving", "Packing & Unpacking", "Home & Office Relocation", "Secure Storage Solutions"],
      linksTitle: "Quick Links",
      links: ["About Us", "Our Services", "Our Team", "Moving Tips & Guides", "Contact Us"],
      newsletterTitle: "Newsletter",
      newsletterDesc: "Subscribe for the latest updates & offers.",
      newsletterPh: "Your email",
      copyright: "© 2026 ABO Okasha Movers | All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    marquee: ["MOVERS", "FURNITURE MOVERS", "PACKING SERVICE", "DELIVERY SERVICE", "WAREHOUSING"],
  },
  ar: {
    dir: "rtl",
    meta: {
      title: "شركة أبو عكاشة لنقل العفش | أفضل نقل عفش وأثاث في دبي",
      description:
        "أبو عكاشة موفرز شركة نقل عفش محلية محترفة في دبي، الإمارات العربية المتحدة. نقدم نقل المنازل والمكاتب، نقل الأثاث، التغليف والفك، ومستودعات تخزين آمنة عبر الطرق في دبي. اطلب عرض سعر مجاني اليوم.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "تواصل معنا",
      callUs: "اتصل بنا الآن",
      getQuote: "طلب عرض سعر",
      langSwitch: "English",
    },
    topBar: {
      address: "منطقة القوز الصناعية، دبي، الإمارات",
      email: "abookashamovers@gmail.com",
      hours: "من الساعة 8 صباحًا وحتى 8 مساءً",
    },
    hero: {
      badge: "شركة نقل العفش الموثوقة في دبي",
      titleLine1: "نقل عفش محترف",
      titleLine2: "في دبي.",
      desc: "تقدم أبو عكاشة موفرز خدمة نقل عفش منازل ومكاتب دقيقة عبر الطرق في دبي — تغليف محترف، تعامل آمن، وتسليم في الوقت المحدد دائمًا.",
      ctaQuote: "طلب عرض سعر مجاني",
      ctaWatchVideo: "مشاهدة الفيديو",
      badgeCard1: "100% نقل بري",
      badgeCard2: "خدمة نقل العفش",
    },
    areas: {
      kicker: "مناطق خدمتنا",
      title: "مقرنا في دبي، ونخدم الإمارات المجاورة عبر الطرق",
      desc: "أبو عكاشة موفرز شركة مقرها دبي وتقدم خدمات نقل احترافية للمنازل والمكاتب والأثاث عبر الطرق في دبي والإمارات المجاورة.",
      cities: [
        { name: "دبي", img: "/Dubai.webp" },
        { name: "أبوظبي", img: "/Abu Dhabi.webp" },
        { name: "الشارقة", img: "/Sharjah.webp" },
        { name: "عجمان", img: "/Ajman.webp" },
        { name: "رأس الخيمة", img: "/Ras Al Khaimah.webp" },
        { name: "الفجيرة", img: "/Fujairah.webp" },
        { name: "أم القيوين", img: "/Umm Al Quwain.webp" },
        { name: "العين", img: "/Al Ain.webp" },
      ],
    },
    about: {
      kicker: "من نحن",
      titleLine1: "شريكك الموثوق لنقل العفش",
      titleLine2: "في دبي.",
      desc: "أبو عكاشة موفرز شركة نقل عفش مقرها دبي تركز على شيء واحد: نقل منزلك أو مكتبك بأمان، في الوقت المحدد، وبدون أي ضغوط. يتم تنفيذ كل عملية نقل من فريقنا المدرب باستخدام شاحناتنا الخاصة — بدون مقاولين من الباطن، وبدون مفاجآت.",
      features: [
        {
          icon: "🚛",
          title: "نقل بري محلي",
          desc: "شاحنات نقل مخصصة وفرق عمل مدربة لكل عملية نقل منزل أو مكتب في دبي.",
        },
        {
          icon: "📦",
          title: "تغليف دقيق",
          desc: "مواد تغليف عالية الجودة وتعامل آمن لحماية أثاثك وممتلكاتك.",
        },
      ],
      cta: "← اطلب عرض سعر مجاني",
    },
    services: {
      kicker: "خدماتنا",
      title: "خدمات نقل عفش محترفة في دبي",
      learnMore: "← اعرف المزيد",
      items: [
        {
          icon: "🏠",
          title: "نقل المنازل",
          desc: "شركة نقل عفش منازل وشقق موثوقة في دبي — تعامل دقيق مع كل غرفة، وتسليم آمن لمنزلك الجديد.",
          img: "/Residential Moving.webp",
        },
        {
          icon: "🛋️",
          title: "نقل الأثاث",
          desc: "متخصصون في نقل الأثاث في دبي للكنب والخزائن والقطع الكبيرة، مع الفك والتركيب بعناية.",
          img: "/Furniture Moving.webp",
        },
        {
          icon: "📦",
          title: "تغليف وفك التغليف",
          desc: "خدمات تغليف محترفة في دبي باستخدام مواد عالية الجودة للحفاظ على ممتلكاتك أثناء النقل.",
          img: "/Packing & Unpacking.webp",
        },
        {
          icon: "🏢",
          title: "نقل المنازل والمكاتب",
          desc: "نقل سكني وتجاري فعّال في دبي، مخطط له لتقليل التوقف والإزعاج.",
          img: "/Home & Office Relocation.webp",
        },
        {
          icon: "🗄️",
          title: "حلول تخزين آمنة",
          desc: "تخزين قصير وطويل المدى في دبي لأثاثك وممتلكاتك، محفوظ بأمان حتى تكون جاهزًا.",
          img: "/storage.webp",
        },
        {
          icon: "⚡",
          title: "خدمة نقل سريعة وموثوقة",
          desc: "شاحنات وفرق نقل موثوقة وفي الوقت المحدد في دبي — احجز الموعد الذي يناسبك.",
          img: "/fast and reliable.webp",
        },
      ],
    },
    worldClass: {
      kicker: "خدمة نقل موثوقة",
      title: "نقل عفش وتغليف محترف، في دبي فقط",
      desc: "نركز بشكل حصري على النقل البري المحلي في دبي — بدون شحن جوي أو بحري أو دولي. فقط نقل احترافي ودقيق من الباب إلى الباب.",
      badge1: "100%",
      badge2: "نقل بري",
      points: [
        { icon: "🛣️", title: "100% نقل بري — بدون شحن جوي أو بحري" },
        { icon: "🚚", title: "شاحناتنا الخاصة وفرق نقل مدربة" },
        { icon: "🕒", title: "تسليم مجدول من الباب إلى الباب في الوقت المحدد" },
      ],
      cta: "← تواصل معنا",
    },
    process: {
      kicker: "خطوات العمل",
      title: "كيف تعمل عملية نقل العفش في دبي معنا",
      steps: [
        { num: "01", icon: "🖱️", title: "طلب عرض سعر", desc: "أخبرنا عن عملية نقلك واحصل على عرض سعر مجاني وغير ملزم." },
        { num: "02", icon: "📋", title: "جدولة موعد النقل", desc: "نؤكد وقت استلام في دبي يناسبك." },
        { num: "03", icon: "📦", title: "تغليف وتحميل بعناية", desc: "يقوم فريقنا بتغليف وتحميل أغراضك باستخدام مواد عالية الجودة." },
        { num: "04", icon: "🚚", title: "تسليم بري آمن", desc: "تصل عملية نقلك بأمان وفي الوقت المحدد عبر الطرق، في كل مرة." },
      ],
    },
    gallery: {
      kicker: "مشاريعنا",
      title: "عمليات نقل حديثة تمت في دبي",
      cta: "طلب عرض سعر مجاني",
      items: [
        { title: "نقل فيلا، دبي", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop" },
        { title: "تجهيز نقل مكتب", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop" },
        { title: "مرفق تخزين آمن", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80&auto=format&fit=crop" },
      ],
    },
    testimonials: {
      kicker: "آراء العملاء",
      title: "ماذا يقول عملاؤنا في دبي عنا",
      items: [
        {
          quote:
            "وصل الفريق في الوقت المحدد، وغلّف كل شيء بعناية، وأبقانا على اطلاع طوال عملية النقل. وصل أثاثنا بحالة ممتازة وبدون أي ضغوط من جانبنا — تمامًا ما كنا نحتاجه لعملية نقل مزدحمة في دبي.",
          customerName: "أحمد المري",
          customerTag: "عميل من دبي مارينا",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "كان الحجز سهلاً وحضر الفريق في الوقت المحدد تمامًا. قاموا بتغليف كل قطعة أثاث قبل التحميل، ولم يتعرض أي شيء للخدش أو التلف. أنصح به بشدة لأي شخص ينقل عفشه في دبي.",
          customerName: "سارة تومسون",
          customerTag: "عميلة من JLT",
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "نقلنا مكتبنا بالكامل خلال عطلة نهاية الأسبوع ولم يتوقف العمل يوم الإثنين. قام الفريق بتصنيف كل صندوق وترتيب المساحة الجديدة كما طلبنا بالضبط. خدمة محترفة بحق.",
          customerName: "خالد السويدي",
          customerTag: "عميل من الخليج التجاري",
          img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "كنت متوترة من نقل فيلا مليئة بالأثاث العتيق، لكن الفريق تعامل مع كل شيء بعناية كبيرة. حتى ساعدونا في إعادة ترتيب غرفة المعيشة الجديدة. يستحق كل درهم.",
          customerName: "فاطمة الزعابي",
          customerTag: "عميلة من عربيان رانشز",
          img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "سريعون وبأسعار معقولة وموثوقون. اتصلت لطلب نقل في نفس اليوم ونفذوه بالفعل. كان السائقون مهذبين وحذرين مع كل صندوق. أصبحت هذه شركتي المفضلة للنقل في دبي.",
          customerName: "جيمس كارتر",
          customerTag: "عميل من وسط مدينة دبي",
          img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "خدمة التخزين لديهم أنقذتنا أثناء التجديد. بقي أثاثنا آمنًا ونظيفًا لمدة شهرين، وتم تسليمه لمنزلنا في الوقت المحدد تمامًا. تواصل ممتاز طوال الوقت.",
          customerName: "مريم النعيمي",
          customerTag: "عميلة من مردف",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "من أول مكالمة هاتفية حتى آخر صندوق، كان كل شيء سلسًا. كان عرض السعر دقيقًا بدون أي رسوم خفية، وكان فريق النقل سريعًا دون تسرع أو إهمال.",
          customerName: "عمر الفلاسي",
          customerTag: "عميل من البرشاء",
          img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "كان لدينا موعد نهائي ضيق لإخلاء شقتنا وأنجزت أبو عكاشة موفرز المهمة بالكامل في أقل من أربع ساعات. فريق ودود وحماسي، ولم يُترك أي شيء خلفهم.",
          customerName: "ليلى حسن",
          customerTag: "عميلة من واحة دبي للسيليكون",
          img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "نقل مخزون محل الأثاث الخاص بي عبر المدينة كان يبدو خطيرًا، لكن تغليفهم كان دقيقًا جدًا لدرجة أن كل شيء وصل بدون أي خدش. شاحناتهم أيضًا نظيفة ومُجهزة جيدًا.",
          customerName: "راشد المنصوري",
          customerTag: "عميل من القوز",
          img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
        },
        {
          quote:
            "استخدمت خدماتهم للمرة الثانية وكنت مندهشة بنفس القدر كالمرة الأولى. دقيقون في المواعيد، حذرون، وبأسعار معقولة. عائلتي كلها تستخدم أبو عكاشة موفرز الآن عند أي انتقال في الإمارات.",
          customerName: "نورة القاسمي",
          customerTag: "عميلة من نخلة جميرا",
          img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=crop",
        },
      ],
    },
    partners: {
      title: "معتمدون من",
      logos: [
        "دائرة الاقتصاد والسياحة في دبي (DET)",
        "وزارة الموارد البشرية والتوطين (MOHRE)",
        "غرفة تجارة وصناعة دبي",
        "الرابطة الدولية لشركات النقل (IAM)",
        "تحالف فيدي العالمي (FIDI)",
      ],
    },
    quote: {
      kicker: "خبراء النقل البري",
      title: "خدمات نقل برية موثوقة في جميع الإمارات",
      desc: "نتخصص بشكل حصري في النقل البري المحترف — بدون شحن جوي أو بحري. تتم كل عملية نقل من الباب إلى الباب من قبل فريقنا المدرب، مما يمنحك تحكمًا كاملاً وسرعة وعناية من الاستلام حتى التسليم.",
      features: [
        "100% نقل ومواصلات برية",
        "تسليم مباشر من الباب إلى الباب في جميع الإمارات",
        "تعامل دقيق وشحنات مؤمّنة بالكامل",
        "مواعيد دقيقة ومجدولة وخدمة في نفس اليوم",
      ],
      contactInfo: [
        { icon: "📞", label: "اتصل بنا", value: "+971 56 600 6415", href: "tel:+971566006415" },
        { icon: "✉️", label: "راسلنا", value: "abookashamovers@gmail.com", href: "mailto:abookashamovers@gmail.com" },
        { icon: "📍", label: "منطقة الخدمة", value: "دبي والإمارات المجاورة", href: "#" },
      ],
      formKicker: "تواصل معنا",
      formTitle: "طلب عرض سعر",
      formDesc: "أدخل بياناتك وسيقوم فريقنا بالتواصل معك في أقرب وقت.",
      fields: {
        fullName: "الاسم الكامل",
        fullNamePh: "أحمد محمد",
        phone: "رقم الهاتف",
        phonePh: "+971 5X XXX XXXX",
        email: "البريد الإلكتروني",
        emailPh: "you@example.com",
        city: "المدينة",
        cityPh: "اختر مدينتك",
        service: "الخدمة المطلوبة",
        servicePh: "اختر الخدمة التي تحتاجها",
        message: "الرسالة",
        messagePh: "أخبرنا أكثر عن عملية نقلك (اختياري)",
      },
      cities: ["دبي", "أبوظبي", "الشارقة", "عجمان", "رأس الخيمة", "الفجيرة", "أم القيوين", "العين"],
      services: ["نقل المنازل", "نقل الأثاث", "تغليف وفك التغليف", "نقل المنازل والمكاتب", "تخزين", "خدمة سريعة وموثوقة"],
      submit: "طلب عرض سعر",
    },
    footer: {
      brand: "أبو عكاشة",
      brandRed: "موفرز",
      desc: "شركة نقل عفش محلية موثوقة في دبي، تقدم خدمات نقل منازل ومكاتب برية محترفة، ومعالجة الأثاث، والتغليف، والتخزين الآمن.",
      servicesTitle: "خدماتنا",
      services: ["نقل المنازل", "نقل الأثاث", "تغليف وفك التغليف", "نقل المنازل والمكاتب", "حلول تخزين آمنة"],
      linksTitle: "روابط سريعة",
      links: ["من نحن", "خدماتنا", "فريقنا", "نصائح ودليل النقل", "تواصل معنا"],
      newsletterTitle: "النشرة البريدية",
      newsletterDesc: "اشترك للحصول على آخر التحديثات والعروض.",
      newsletterPh: "بريدك الإلكتروني",
      copyright: "© 2026 أبو عكاشة موفرز | جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
    },
    marquee: ["نقل العفش", "نقل الأثاث", "خدمة التغليف", "خدمة التوصيل", "التخزين"],
  },
};

/**
 * Single source of truth for portfolio data.
 * Components NEVER hard-code copy.
 * Strictly adheres to forbidden content restrictions.
 */

export const portfolioData = {
  identity: {
    name: "Shubham Kumar",
    location: "Muzaffarpur, Bihar, India",
    role: "Full Stack Developer · MERN + Java",
    lede: "I build real-time, data-driven web apps with the MERN stack, and I'm building strong foundations in Java and DSA.",
    status: "Open to SDE Intern / Full Stack Developer roles",
    email: "shubhamkumar979883@gmail.com",
    github: "https://github.com/Shubham-07-creator",
    linkedin: "https://www.linkedin.com/in/shubhamkumardev",
    leetcodeUrl: "", // hidden when empty
    resumeUrl: `${import.meta.env.BASE_URL}Shubham_Kumar_Resume.pdf`,
    profileImage: "", // set to "/profile.webp" when adding image; otherwise shows SK monogram
    phone: "+91 8986339496",
    showPhone: false, // stored with showPhone:false and is never displayed
    codeCard: {
      role: "Full Stack Developer",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      also: ["Java", "DSA"],
      status: "open to internships",
    },
  },

  marquee: [
    { name: "React", icon: "SiReact" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Socket.IO", icon: "SiSocketdotio" },
    { name: "Java", icon: "FaJava" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Git", icon: "SiGit" },
  ],

  projects: [
    {
      slug: "tradexpert",
      title: "TradeXpert",
      subtitle: "Real-time paper trading platform",
      soloBadge: "Solo project",
      oneLiner:
        "Zerodha-inspired paper trading platform with live NSE quotes, an order engine and an admin command center.",
      metrics: [
        { value: "100", label: "NSE stocks tracked", countUp: true },
        { value: "2.5s", label: "live tick cycle", countUp: false },
        { value: "3", label: "apps: landing, terminal, API", countUp: true },
        { value: "20+", label: "REST endpoints", countUp: false },
      ],
      features: [
        {
          icon: "Radio",
          text: "Live quotes for 100 NSE stocks plus NIFTY 50 and SENSEX over Socket.IO, with a price simulation engine when the market is closed.",
        },
        {
          icon: "Zap",
          text: "Market, Limit and GTT (stop-loss and target) orders with margin locking, auto-execution and refund on cancel.",
        },
        {
          icon: "Shield",
          text: "JWT, bcrypt, Helmet, rate limiting and role-based admin access, with user-scoped queries against IDOR.",
        },
        {
          icon: "LineChart",
          text: "Live P&L, holdings, sector allocation chart, leaderboard and an interactive candlestick chart.",
        },
      ],
      moreDetails: [
        "Admin command center: market circuit breaker, market shock injection and a global broadcast banner.",
        "Google sign-in alongside email and password.",
        "Web Audio chimes on buy, sell and square-off, with no audio files.",
        "Live NIFTY value in the browser tab title and watchlist rows that flash on every tick.",
        "Virtual wallet with quick deposit chips and a portfolio reset.",
        "Mobile layout with dedicated touch-scroll handling for wide tables.",
      ],
      chips: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
      links: {
        live: "https://tradexpert-vq6s.onrender.com",
        github: "https://github.com/Shubham-07-creator/TradeXpert",
        extra: {
          label: "Open terminal",
          url: "https://tradexpert-dashboard.onrender.com",
        },
      },
      coldStartHint: "Hosted on a free tier. The first load may take about 30 seconds.",
      image: "",
      gallery: [],
      demoVideoUrl: "",
      caseStudy: {
        problem:
          "Most student trading projects rely on static JSON or random price generators, so they never behave like a real market.",
        solution:
          "A three-app system: the server pulls real NSE quotes, switches to a mean-reverting simulator when the market is closed, and matches Limit orders and GTT triggers against every incoming tick.",
        challenges: [],
        learnings: [],
      },
      futureWork: [],
    },
    {
      slug: "stayhub",
      title: "StayHub",
      subtitle: "Vacation rental booking platform",
      soloBadge: "Solo project",
      oneLiner:
        "Airbnb-style booking platform with maps, GST billing, Razorpay payments (test mode) and dual authentication.",
      metrics: [
        { value: "10", label: "listing categories", countUp: true },
        { value: "12% / 18%", label: "GST slabs", countUp: false },
        { value: "3", label: "user roles: guest, host, admin", countUp: true },
      ],
      features: [
        {
          icon: "MapPin",
          text: "Listing CRUD with Mapbox geocoding, an interactive map and Cloudinary image uploads.",
        },
        {
          icon: "CreditCard",
          text: "Razorpay checkout (test mode) with SHA256 HMAC signature verification and serialized GST tax invoices.",
        },
        {
          icon: "CalendarCheck",
          text: "Date-overlap validation that prevents double bookings.",
        },
        {
          icon: "Shield",
          text: "Passport.js authentication (local and Google OAuth 2.0) with rate limiting and email OTP verification.",
        },
      ],
      moreDetails: [
        "Live tariff breakdown: nights, 5% platform fee, CGST, SGST and total payable.",
        "Wishlist with an AJAX heart toggle and a live badge counter in the navbar.",
        "Profile page with reservation history and inline editing.",
        "Reviews with star ratings.",
        "Admin dashboard for platform management.",
        "Sessions stored in MongoDB.",
      ],
      chips: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "Razorpay"],
      links: {
        live: "https://stayhub-kxme.onrender.com/listings",
        github: "https://github.com/Shubham-07-creator/StayHub",
        extra: null,
      },
      coldStartHint: "",
      image: "/projects/stayhub-1.webp",
      gallery: [
        {
          src: "/projects/stayhub-1.webp",
          alt: "StayHub listing catalog and categories",
          label: "Listings",
        },
        {
          src: "/projects/stayhub-2.webp",
          alt: "StayHub booking system and reservation modal",
          label: "Booking System",
        },
        {
          src: "/projects/stayhub-3.webp",
          alt: "StayHub 1-click quick demo access and Google OAuth",
          label: "Demo Auth",
        },
        {
          src: "/projects/stayhub-4.webp",
          alt: "StayHub registration and location details",
          label: "Register",
        },
      ],
      demoVideoUrl: "",
      caseStudy: null,
      futureWork: [],
    },
    /*
    // Template for Third Project (renders only when filled):
    {
      slug: "project-three",
      title: "Project Three Title",
      subtitle: "Full Stack Web Application",
      soloBadge: "Solo project",
      oneLiner: "One line description of the project architecture and purpose.",
      metrics: [
        { value: "100", label: "Active users", countUp: true },
        { value: "99.9%", label: "Uptime", countUp: false },
      ],
      features: [
        { icon: "Layers", text: "Feature item one description." },
        { icon: "Zap", text: "Feature item two description." },
        { icon: "Shield", text: "Feature item three description." },
        { icon: "Database", text: "Feature item four description." },
      ],
      moreDetails: [],
      chips: ["React.js", "Node.js", "MongoDB"],
      links: {
        live: "https://example.com",
        github: "https://github.com/Shubham-07-creator/project-three",
        extra: null,
      },
      coldStartHint: "",
      image: "",
      gallery: [],
      demoVideoUrl: "",
      caseStudy: null,
      futureWork: [],
    },
    */
  ],

  engineering: {
    heading: "Engineering notes",
    intro:
      "How each project is put together: architecture, data flow and the decisions behind it.",
    projectTabs: [
      {
        slug: "tradexpert",
        title: "TradeXpert",
        diagram: "tradexpert",
        flow: [
          {
            step: 1,
            title: "Price tick",
            text: "The market engine produces new prices for 3 to 6 stocks every 2.5 seconds.",
          },
          {
            step: 2,
            title: "Match",
            text: "The server checks every open Limit order and GTT trigger against the new price.",
          },
          {
            step: 3,
            title: "Execute",
            text: "Matched orders update holdings and the wallet.",
          },
          {
            step: 4,
            title: "Stream",
            text: "Socket.IO pushes the new state to every connected terminal.",
          },
        ],
        decisions: [
          {
            title: "Hybrid market feed",
            text: "Real quotes for 100 NSE stocks plus NIFTY 50 and SENSEX while the market is open (9:15 AM to 3:30 PM IST). When it closes, a mean-reverting simulator takes over so the platform keeps working around real closing prices.",
          },
          {
            title: "Independent ticking",
            text: "Only 3 to 6 stocks update in each 2.5 second cycle and quiet stocks pause for 10 to 25 seconds, so prices do not all jump together. Drift beyond about 1.8% is pulled back toward the closing price.",
          },
          {
            title: "Margin locking",
            text: "A Limit order locks the required margin in the wallet the moment it is placed and stays open in MongoDB. Cancelling an open order refunds the margin instantly.",
          },
          {
            title: "Server-side matching",
            text: "The server checks every incoming tick against open Limit orders and executes them automatically. GTT stop-loss and target triggers sell at market when a threshold is crossed.",
          },
          {
            title: "Layered security",
            text: "Helmet headers, bcrypt (10 salt rounds), JWT with 7-day expiry, rate limiting on auth (10 requests per 15 minutes), user-scoped queries against IDOR, a blocked-account check on every token verification, and strict integer and finite-number validation on financial inputs.",
          },
        ],
        challenges: [],
        learnings: [],
        futureWork: [],
        sourceUrl: "https://github.com/Shubham-07-creator/TradeXpert",
      },
      {
        slug: "stayhub",
        title: "StayHub",
        diagram: "stayhub",
        flow: [
          {
            step: 1,
            title: "Select",
            text: "The guest picks dates and sees a live tariff breakdown.",
          },
          {
            step: 2,
            title: "Validate",
            text: "The server checks the dates for overlap with existing bookings.",
          },
          {
            step: 3,
            title: "Pay",
            text: "A Razorpay order is created on the server and the payment signature is verified with SHA256 HMAC.",
          },
          {
            step: 4,
            title: "Confirm",
            text: "The booking is saved and a serialized tax invoice (SH-INV-YYYYMMDD-XXXX) is generated.",
          },
        ],
        decisions: [
          {
            title: "Double-booking prevention",
            text: "Every reservation is checked for date overlap, so two guests cannot book the same stay for clashing dates.",
          },
          {
            title: "Payment verification",
            text: "Razorpay orders are created on the server and the payment signature is verified with SHA256 HMAC. Payments run in test mode.",
          },
          {
            title: "GST billing",
            text: "A daily tariff up to Rs 7,500 attracts 12% GST (6% CGST + 6% SGST) and above that 18% (9% + 9%), shown as a live breakdown with the 5% platform fee.",
          },
          {
            title: "Authentication and access",
            text: "Salted local login plus Google OAuth 2.0, login rate limiting, email OTP verification and role-based access for guests, hosts and the admin. Sessions are stored in MongoDB.",
          },
          {
            title: "Maps and performance",
            text: "Addresses are geocoded through Mapbox into GeoJSON points. Connection pooling (2 to 10), gzip compression and 7-day static asset caching keep pages fast.",
          },
        ],
        challenges: [],
        learnings: [],
        futureWork: [],
        sourceUrl: "https://github.com/Shubham-07-creator/StayHub",
      },
    ],
  },

  // Backwards compatibility alias for engineeringNotes if needed
  engineeringNotes: {
    intro:
      "How each project is put together: architecture, data flow and the decisions behind it.",
    sourceLink: "https://github.com/Shubham-07-creator/TradeXpert",
  },

  about: {
    p1: "I am a Full Stack Developer pursuing a Bachelor of Computer Applications (2024-2027) at Mangalayatan University. I work across the MERN stack and Core Java, building responsive interfaces, secure REST APIs and scalable data models.",
    p2: "I have built and deployed full-stack applications, including a real-time paper trading platform with live NSE data and an order-matching engine, and a vacation rental booking platform with payments. Every project is live, with an emphasis on clean architecture and security.",
    p3: "I am seeking an SDE internship or full stack developer role where I can contribute to production software and grow alongside an experienced engineering team.",
    cards: [
      {
        title: "Full stack development",
        text: "React frontends, Express APIs, MongoDB data models.",
      },
      {
        title: "Java and DSA",
        text: "Core Java, OOP and data structures, building depth through practice.",
      },
      {
        title: "Real-time systems",
        text: "Socket.IO market feeds and an order engine that reacts to every tick.",
      },
      {
        title: "Security",
        text: "JWT authentication, bcrypt hashing, Helmet, rate limiting and IDOR protection.",
      },
    ],
    currentlyLearning: ["Core Java", "OOP", "DSA"],
    facts: [
      "Muzaffarpur, Bihar",
      "BCA 2024-2027",
      "Web Development Intern at Oasis Infobyte",
    ],
  },

  skills: [
    {
      category: "Languages",
      skills: ["Java (Core Java)", "JavaScript", "SQL"],
    },
    {
      category: "Frontend",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Middleware",
        "JWT Authentication",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      category: "Core CS",
      skills: [
        "Data Structures",
        "DBMS",
        "Operating Systems",
        "OOP",
        "Computer Networks",
      ],
    },
  ],

  experience: {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    period: "Oct 2025 to Nov 2025",
    type: "Remote",
    bullets: [
      "Built a portfolio website and a landing page using HTML5, CSS3 and Bootstrap, with responsive layouts tested across mobile and desktop screen sizes.",
      "Developed a calculator and a to-do app in JavaScript using DOM manipulation and event handling; managed code with Git and GitHub.",
    ],
    credentialUrl:
      "https://drive.google.com/file/d/1fEl56lOMkgE_DBdeFCKWCbaG5bwNi83I/view?usp=drivesdk",
  },

  education: {
    bca: {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Mangalayatan University, Aligarh, U.P.",
      period: "Aug 2024 to May 2027",
      coursework: [
        "Data Structures",
        "DBMS",
        "Operating Systems",
        "OOP",
        "Computer Networks",
      ],
    },
    classXII: {
      text: "Class XII, B.B. Collegiate, Muzaffarpur, Bihar (Bihar Board), 2024",
    },
    classX: {
      text: "Class X, Ambika Bhawani Public School, Muzaffarpur, Bihar (CBSE), 2022",
    },
    certification: {
      title: "MERN Stack Web Development",
      issuer: "Apna College",
      year: "2026",
      description:
        "Built full-stack applications with React.js, Node.js, Express.js and MongoDB, covering REST API design, CRUD operations and database integration.",
      credentialUrl:
        "https://drive.google.com/file/d/1RSXGnlK23F9XkDn2nIySFvhUrPXO0x5R/view?usp=drivesdk",
    },
  },

  contact: {
    heading: "Let's build something together",
    line: "I'm open to SDE internships and full stack roles. Email is the fastest way to reach me.",
  },
};

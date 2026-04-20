const projects = [
    {
        id: 1,
        name: "Accelevent",
        domain: "EventTech",
        description: "Accelevents is a comprehensive event management platform that simplifies hosting virtual, hybrid, and in-person events. With customizable features for registration, engagement, and analytics, it empowers organizers to create seamless event experiences.",
        url: "https://drive.google.com/file/d/1eqEMRQlF4oqM2O2donMtosSPpnwfYR7d/view?usp=sharing",
        color: "linear-gradient(135deg, #FF6B6B, #FF8E53)"
    },
    {
        id: 2,
        name: "Vugo Advertisment",
        domain: "E-Commerce",
        description: "We transformed an e-commerce platform by adding intuitive features and refining user experience. The result? More engaged customers, higher conversions, and a seamless shopping journey that drives sales.",
        url: "https://drive.google.com/file/d/1L2HWS31xgsMljZMOiEPBkEWEBgnr_idY/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 3,
        name: "Trackimo_GPS",
        domain: "IoT",
        description: "We modernized a tracking software for IoT and fleet management, enhancing security, performance, and scalability. With advanced features like real-time tracking, location sharing, and SOS functionality, the app now offers seamless user experience across devices.",
        url: "https://drive.google.com/file/d/1BnohqJN_0hVC3GJ35OOZwnuAVVWEVks0/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 4,
        name: "ServiceBuddy_FSM",
        domain: "Field Service Management",
        description: "We developed a cloud-based CRM to streamline field service operations, including job scheduling, client management, and invoicing. The solution automated key tasks, boosting efficiency and enabling businesses to manage over 10,000 jobs and $10M+ in payments.",
        url: "https://drive.google.com/file/d/1GQELU_Sg4Hrs1eq3EF2hSaKhZeS2ztWW/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 5,
        name: "Reliant",
        domain: "Fintech",
        description: "We developed a fintech platform that automates major tasks in the loan application process, reducing manual effort and turnaround times. By enabling borrowers to connect with multiple lenders and centralizing document sharing, we improved loan processing speed by 50% and increased lender capacity by 20%.",
        url: "https://drive.google.com/file/d/1yZaPKpMOVtdn_w-DRh-5wQvpyhsVszQW/view?usp=drive_link",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 6,
        name: "Orokii_Fintech",
        domain: "Fintech & Blockchain",
        description: "We developed a cross-border and domestic payment app with a multi-currency wallet, utilizing blockchain technology to enhance speed, security, and reduce costs. The app enables seamless money transfers, real-time currency exchanges, and in-app communication, achieving a 33% reduction in transaction costs and 99x faster transaction times.",
        url: "https://drive.google.com/file/d/1z9z3URoQmksIyfUStptmXKS39-tClyuV/view?usp=drive_link",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 7,
        name: "Nick academy",
        domain: "EduTech",
        description: "We transformed a STEM learning platform into an immersive and playful experience for children, focusing on multilingual support for Hebrew and Arabic. The result was a 20% increase in user engagement and a 95% parent satisfaction rate, ensuring both accessibility and cultural relevance.",
        url: "https://drive.google.com/file/d/1hiczU-fWbVxMRssoPm9mx3SINUSSJzCq/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 8,
        name: "Endo_Health",
        domain: "Healthcare",
        description: "We optimized a healthcare app by improving video streaming, boosting performance on low-end devices, and automating build processes. The app’s reach expanded by 40% with multilingual support, while performance and security were enhanced to meet compliance standards.",
        url: "https://drive.google.com/file/d/1Mb5rzo8mHGeHbB2TlnnDWtxSTwjaRR6e/view?usp=drive_link",
        color: "linear-gradient(135deg, #96fbc4, #f9f586)"
    },
    {
        id: 9,
        name: "Cultural Institution",
        domain: "Government & Media",
        description: "We optimized the performance of a cultural institution's standalone app that showcased high-resolution historical imagery. By implementing an advanced caching system and image compression techniques, we reduced image loading times by 70%, leading to improved user engagement and smoother navigation without compromising the visual richness of the content.",
        url: "https://drive.google.com/file/d/1qKq_2GDeT06yKwBrikqpmQePxijx2QMA/view?usp=drive_link",
        color: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
    },
    {
        id: 10,
        name: "Construction",
        domain: "Supply Chain",
        description: "We developed an innovative platform for a construction client to streamline their supply chain management, specifically for tracking over 100,000 bricks in various stages. By replacing cumbersome spreadsheets, we created a scalable system that integrated disparate data sources, optimized reporting, and allowed real-time updates.",
        url: "https://drive.google.com/file/d/1YIUrXCRxv6VAwWKB9nhui0DG2EquC43H/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    },
    {
        id: 11,
        name: "HELF",
        domain: "Fitness & Wellness",
        description: "We worked with a fitness startup to create an intuitive, feature-rich app that allows users to create personalized workout plans, track their fitness progress, and receive real-time feedback. The challenge was balancing simplicity with functionality, ensuring security, scalability, and integration with wearable devices.",
        url: "#",
        color: "linear-gradient(135deg, #fccb90, #d57eeb)"
    },
    {
        id: 12,
        name: "KeepMoovin",
        domain: "Social Media",
        description: "We developed KeepMoovin, a social media app focused on crowd awareness and real-time location sharing, helping users navigate urban spaces more effectively. Key features like heat maps, crowd density updates, and friend location sharing were integrated while ensuring privacy and high performance.",
        url: "https://drive.google.com/file/d/1OeuQ6zhuDM9a5GWzW42nJWbiHV2IDUwx/view?usp=drive_link",
        color: "linear-gradient(135deg, #e0c3fc, #8ec5fc)"
    },
    {
        id: 13,
        name: "GHC",
        domain: "Consulting",
        description: "GHC is an innovative Customer Relationship Management (CRM) platform tailored for energy auditing. It enhances the auditing journey by bringing together key players - administrators, managers, auditors, contractors, and service organizers—into a seamless workflow.",
        url: "https://drive.google.com/file/d/1aV0JUUywvTDaq6BreIUC5uilucGLAOPp/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 14,
        name: "Trending Neurons",
        domain: "Fintech",
        description: "Trending Neurons is a stock suggestion app that simplifies investing through data-driven insights. Leveraging machine learning, it provides personalized stock recommendations based on market trends and user preferences.",
        url: "https://drive.google.com/file/d/1Czt1UXA7jzTeh6DaiPhFMT5knCbCTXA8/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 15,
        name: "InfoLocker",
        domain: "Productivity",
        description: "InfoLocker is a mobile app that helps users manage their home or office by tracking items, managing warranties, and categorizing belongings. It offers quick searches and premium features through Apple In-App Purchases for enhanced organization.",
        url: "https://drive.google.com/file/d/1oL6JnG4JW9whBse27dN_Kw4K8gwDVZxr/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 16,
        name: "Kinderland",
        domain: "EdTech",
        description: "Kinderland is an educational mobile game for children ages 2-6. It offers interactive learning activities for alphabets, numbers, colors, and shapes, using gamified techniques.",
        url: "https://drive.google.com/file/d/1KphjgiwMtvh7tPUghBy3uw22fyHz1gKx/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 17,
        name: "Petswipe",
        domain: "Social",
        description: "PetSwipe is a mobile application connecting pet owners with trusted caregivers, offering a community for pet lovers to share experiences and consult veterinarians. It provides a seamless platform for temporary pet care and expert pet advice.",
        url: "https://drive.google.com/file/d/1FmhijSnMqiHlf2aBa4ImCXZyaXMwgX6H/view?usp=drive_link",
        color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
    },
    {
        id: 18,
        name: "Musematch",
        domain: "E-Commerce",
        description: "MuseMatch brings together artists and buyers in a dynamic swipe-based platform, making it simple to discover new artworks, communicate directly, and complete purchases effortlessly. Buyers can express their interest by liking artworks.",
        url: "https://drive.google.com/file/d/1kmX4vaTlY1ZNsc9PZdGpcrX5EIG0ImMs/view?usp=drive_link",
        color: "linear-gradient(135deg, #84fab0, #8fd3f4)"
    },
    {
        id: 19,
        name: "Scalable E-Commerce App",
        domain: "E-Commerce",
        description: "We developed a high-performance, scalable mobile application for an e-commerce client to enhance user experience, streamline operations, and boost conversions. The app featured seamless navigation, personalized recommendations, a secure payment gateway, and real-time order tracking.",
        url: "https://drive.google.com/file/d/1BMAnz8OUQgUqDD0lHULBFy0gmoMVhyrg/view?usp=drive_link",
        color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)"
    },
    {
        id: 20,
        name: "Healthcare Mobile App",
        domain: "Healthcare",
        description: "We developed a healthcare mobile app that enhances patient outcomes through seamless telemedicine, AI-driven health tracking, and real-time doctor-patient communication. The goal was to improve accessibility, reduce hospital visits, and enhance patient engagement.",
        url: "https://drive.google.com/file/d/1j3bBsAtXq_xALLHDyc8aqZcmWx-1FAh4/view?usp=drive_link",
        color: "linear-gradient(135deg, #ffecd2, #fcb69f)"
    },
    {
        id: 21,
        name: "Employee Referral Platform",
        domain: "HR Technology",
        description: "Developed an employee referral platform with automated workflows, gamification, and ATS integration, increasing employee participation by 30% and reducing referral management time by 40%.",
        url: "https://drive.google.com/file/d/1gOY0GrZlB_Znn0CohXj08o_NW66--ncL/view?usp=drive_link",
        color: "linear-gradient(135deg, #cfd9df, #e2ebf0)"
    },
    {
        id: 22,
        name: "AI Podcast Platform",
        domain: "Media & Entertainment",
        description: "Developed an AI-powered podcast platform with recording, editing tools, and flexible ad integration, resulting in 2,000+ podcasters registered and 5,000 podcasts uploaded within the first month.",
        url: "https://drive.google.com/file/d/1KZFmMYboLcGVMElFo-W2SwAkBYHQoYKv/view?usp=drive_link",
        color: "linear-gradient(135deg, #fdfbfb, #ebedee)"
    },
    {
        id: 23,
        name: "Stock Prediction AI App",
        domain: "Fintech",
        description: "Developed an AI-driven stock prediction mobile app with clear data presentation and enhanced security, increasing user engagement and brand awareness.",
        url: "https://drive.google.com/file/d/1GJJbOzIxEkRH_MD-RmbHPri1nu3n-2hi/view?usp=drive_link",
        color: "linear-gradient(135deg, #e0c3fc, #8ec5fc)"
    },
    {
        id: 24,
        name: "Mobile Inventory App",
        domain: "Inventory Management",
        description: "Developed a mobile inventory management app to streamline order processing and improve real-time tracking, resulting in reduced errors and enhanced operational efficiency.",
        url: "https://drive.google.com/file/d/14VM80G-2UXz3C6lJnlusnWf8fc9L6OrX/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 25,
        name: "Podcast IQ",
        domain: "Podcasting & AI",
        description: "Developed Podcast IQ, an AI-powered tool that tailors podcast content by generating summaries, quizzes, and Q&A sessions, enhancing time efficiency and user experience for podcast enthusiasts.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 26,
        name: "AI PDF Summarizer",
        domain: "AI tools",
        description: "Developed AI PDF Summarizer, an intuitive tool that leverages AI to quickly summarize PDFs, offering both paragraph and bullet-point summaries with just a few clicks, improving efficiency for busy professionals and researchers.",
        url: "https://drive.google.com/file/d/1ONVV7klFUt7UjKGB6lvHmXAVRR0w58WS/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 27,
        name: "AI Presentation Generator",
        domain: "AI tools",
        description: "An AI-Powered Presentation Generator that allows users to quickly create custom business presentations. Simply input your topic, choose your style and tone, and download the final slides for free, making the process efficient and impactful.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 28,
        name: "CabUno",
        domain: "Transportation",
        description: "A premium ride-sharing architecture designed for urban mobility with real-time route optimization and automated dispatch systems.",
        url: "cabuno-case-study.html",
        color: "linear-gradient(135deg, #FF6B6B, #FF8E53)"
    },
    {
        id: 29,
        name: "Elara",
        domain: "Home Automation",
        description: "An intelligent ecosystem for smart home control, integrating IoT devices with energy-efficient scheduling and voice orchestration.",
        url: "#",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 30,
        name: "Petfinder",
        domain: "Social",
        description: "A community-driven platform for pet adoption and lost-and-found tracking, utilizing geolocation and real-time community alerts.",
        url: "#",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 31,
        name: "SpineRecovery Pro",
        domain: "Healthcare",
        description: "Digital health suite for post-surgical spine recovery, featuring daily exercise tracking and direct-to-surgeon messaging.",
        url: "#",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 32,
        name: "ScanEat",
        domain: "Food & Wellness",
        description: "AI-powered nutritional assistant that analyzes restaurant menus and provides personalized health recommendations based on dietary goals.",
        url: "#",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 33,
        name: "Mr. Brush",
        domain: "Hygiene Tech",
        description: "Smart dental hygiene companion that gamifies toothbrushing habits for children, paired with hardware sensor integration.",
        url: "#",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 34,
        name: "LifePilot AI",
        domain: "Productivity",
        description: "Autonomous scheduling agent that manages high-complexity executive calendars using predictive modeling and priority scoring.",
        url: "#",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 35,
        name: "KindCircle",
        domain: "Charity",
        description: "Transparent non-profit donation tracking platform leveraging blockchain for verified impact reporting and direct peer-to-peer aid.",
        url: "#",
        color: "linear-gradient(135deg, #96fbc4, #f9f586)"
    },
    {
        id: 36,
        name: "OrderNest",
        domain: "Logistics",
        description: "Unified dashboard for multi-channel inventory fulfillment, optimizing warehouse picking routes and reducing lead times.",
        url: "#",
        color: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
    },
    {
        id: 37,
        name: "VectorTrace",
        domain: "Creative Tools",
        description: "Real-time collaborative vector design tool with cloud-based versioning and SVG optimization for high-performance web assets.",
        url: "#",
        color: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    },
    {
        id: 38,
        name: "Service Squad",
        domain: "Consumer Services",
        description: "On-demand home maintenance marketplace connecting vetted specialists with homeowners via a localized, real-time dispatch system.",
        url: "#",
        color: "linear-gradient(135deg, #fccb90, #d57eeb)"
    },
    {
        id: 39,
        name: "PinkSignal",
        domain: "Communication",
        description: "Encrypted internal communication protocol for enterprise security teams, featuring zero-trust architecture and ephemeral data storage.",
        url: "#",
        color: "linear-gradient(135deg, #e0c3fc, #8ec5fc)"
    },
    {
        id: 40,
        name: "FitOrbit",
        domain: "Health & Fitness",
        description: "Metaverse-integrated fitness platform that syncs real-world workout data with digital avatar progression and community challenges.",
        url: "#",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 41,
        name: "CircleUp",
        domain: "Social",
        description: "Micro-community manager for niche interest groups, focusing on high-quality engagement and member-only gated content.",
        url: "#",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 42,
        name: "HeartMesh",
        domain: "Healthcare",
        description: "Predictive cardiac diagnostics tool using machine learning to identify early warning signs of cardiovascular distress from wearable data.",
        url: "#",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 43,
        name: "Exora",
        domain: "E-Commerce",
        description: "Next-generation storefront for premium luxury goods, featuring AR-based 'try-on' capabilities and secure blockchain provenance.",
        url: "#",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 44,
        name: "Enclave Connect",
        domain: "Fintech",
        description: "Secure bridge for institutional asset transfers, providing multi-layered authentication and real-time compliance auditing.",
        url: "#",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 45,
        name: "DocChat",
        domain: "LegalTech",
        description: "AI-assisted legal document review platform that identifies contractual risks and suggests optimization for standard Master Service Agreements.",
        url: "#",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 46,
        name: "Social Ora",
        domain: "Social",
        description: "Privacy-first social network built on a decentralized protocol, returning data ownership and monetization rights to individual users.",
        url: "#",
        color: "linear-gradient(135deg, #96fbc4, #f9f586)"
    },
    {
        id: 47,
        name: "Memora AI",
        domain: "EdTech",
        description: "Adaptive flashcard tutor that uses spatial repetition algorithms and AI-generated mnemonics to accelerate medical terminology mastery.",
        url: "#",
        color: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
    },
    {
        id: 48,
        name: "AnonWhisper",
        domain: "Communication",
        description: "Anonymous whistleblower platform for large organizations, providing end-to-end encrypted reporting channels to internal compliance teams.",
        url: "#",
        color: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    }
];

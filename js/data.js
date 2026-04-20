const projects = [
    {
        id: 1,
        name: "Accelevent",
        domain: "EventTech",
        isAI: false,
        description: "A comprehensive event management platform that simplifies hosting virtual, hybrid, and in-person events. With customizable features for registration, engagement, and analytics, it empowers organizers to create seamless event experiences.",
        url: "https://drive.google.com/file/d/1eqEMRQlF4oqM2O2donMtosSPpnwfYR7d/view?usp=sharing",
        color: "linear-gradient(135deg, #017eeb, #00dbd3)"
    },
    {
        id: 2,
        name: "Vugo Advertisment",
        domain: "E-Commerce",
        isAI: false,
        description: "We transformed an e-commerce platform by adding intuitive features and refining user experience. The result? More engaged customers, higher conversions, and a seamless shopping journey that drives sales.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 3,
        name: "Trackimo_GPS",
        domain: "IoT",
        isAI: false,
        description: "Modernized tracking software for IoT and fleet management, enhancing security and performance. Features like real-time tracking, location sharing, and SOS functionality offer a seamless experience across devices.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 4,
        name: "ServiceBuddy_FSM",
        domain: "Field Service Management",
        isAI: false,
        description: "Cloud-based CRM streamlining field operations including scheduling and invoicing. This solution automated key tasks, allowing businesses to manage over 10,000 jobs and $10M+ in payments efficiently.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 5,
        name: "Reliant",
        domain: "Fintech",
        isAI: false,
        description: "Automated loan application platform reducing manual effort and turnaround times. Improved loan processing speed by 50% and increased lender capacity by 20% by centralizing document sharing.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 6,
        name: "Orokii_Fintech",
        domain: "Fintech & Blockchain",
        isAI: false,
        description: "Cross-border payment app with a multi-currency wallet using blockchain. Achieved simple money transfers and real-time exchanges with a 33% reduction in transaction costs and 99x faster transaction times.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 7,
        name: "Nick Academy",
        domain: "EduTech",
        isAI: false,
        description: "Transformed STEM learning platform with multilingual support (Hebrew & Arabic). Resulted in a 20% increase in user engagement and 95% parent satisfaction for early childhood education.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 8,
        name: "Endo_Health",
        domain: "Healthcare",
        isAI: false,
        description: "Optimized healthcare app with improved video streaming and automated builds. Expanded reach by 40% with multilingual support while meeting strict security and compliance standards.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 9,
        name: "Cultural Institution",
        domain: "Government & Media",
        isAI: false,
        description: "Performance optimization for high-res historical imagery showcase. Reduced image loading times by 70% using advanced caching and compression techniques, ensuring smooth navigation.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 10,
        name: "Construction Supply Chain",
        domain: "Supply Chain",
        isAI: false,
        description: "Innovative platform tracking 100k+ bricks across various stages. Replaced spreadsheets with a scalable, real-time system that improved operational efficiency and reduced data entry time.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 11,
        name: "HELF",
        domain: "Fitness & Wellness",
        isAI: false,
        description: "Intuitive fitness app allowing personalized workout plans and real-time feedback. Integrates with wearable devices and uses gamification to enhance customer retention and user satisfaction.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 12,
        name: "KeepMoovin",
        domain: "Social Media",
        isAI: false,
        description: "Urban connectivity app with heat maps and crowd density updates. Saw a 40% increase in daily active users and over 10,000 registered users within the first month of launch.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 13,
        name: "GHC CRM",
        domain: "Consulting",
        isAI: false,
        description: "CRM platform tailored for energy auditing that automates essential tasks from scheduling to invoicing. Seamlessly connects administrators, managers, and auditors into one workflow.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 14,
        name: "Trending Neurons",
        domain: "Fintech",
        isAI: true,
        description: "Stock suggestion app providing data-driven insights using machine learning. Offers personalized recommendations based on market trends and user preferences to enhance decision-making.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 15,
        name: "InfoLocker",
        domain: "Productivity",
        isAI: false,
        description: "Mobile app for tracking property items, managing warranties, and categorizing belongings. Features quick searches and Apple In-App Purchases for enhanced organization.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 16,
        name: "Kinderland",
        domain: "EdTech",
        isAI: false,
        description: "Educational mobile game for children ages 2-6 using gamified techniques for learning alphabets and numbers in a safe, ad-free environment.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 17,
        name: "Petswipe",
        domain: "Social",
        isAI: false,
        description: "Mobile marketplace connecting pet owners with trusted caregivers and veterinarians. Provides a seamless platform for temporary pet care and community advice.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 18,
        name: "Musematch",
        domain: "E-Commerce",
        isAI: false,
        description: "Swipe-based platform matching artists with buyers. Discovery and direct communication tools create an engaging marketplace for global art creators and collectors.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 19,
        name: "Scalable E-Com App",
        domain: "E-Commerce",
        isAI: false,
        description: "High-performance mobile application with personalized recommendations, secure payment gateways, and real-time order tracking to boost retail conversions.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 20,
        name: "Telemedicine Health",
        domain: "Healthcare",
        isAI: true,
        description: "Enhances patient outcomes through AI-driven health tracking and real-time doctor-patient communication, improving accessibility and engagement.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 21,
        name: "Employee Referral Platform",
        domain: "HR Tech",
        isAI: false,
        description: "Gamified referral platform with ATS integration. Increased employee participation by 30% and reduced referral management time by 40%.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 22,
        name: "AI Podcast Platform",
        domain: "Media",
        isAI: true,
        description: "AI-powered recording and editing tools with flexible ad integration. Resulted in 2,000+ registered podcasters within the first month.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 23,
        name: "AI Stock Prediction",
        domain: "Fintech",
        isAI: true,
        description: "AI-driven market prediction app with clear data visualization and enhanced security to increase professional user engagement.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 24,
        name: "Mobile Inventory Pro",
        domain: "Logistics",
        isAI: false,
        description: "Streamlined order processing with improved real-time tracking, resulting in reduced errors and enhanced operational efficiency.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 25,
        name: "Podcast IQ",
        domain: "Podcasting & AI",
        isAI: true,
        description: "AI-powered tool tailoring podcast content through automated summaries, quizzes, and Q&A sessions for better knowledge retention.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 26,
        name: "AI PDF Summarizer",
        domain: "AI tools",
        isAI: true,
        description: "Leverages AI to quickly summarize PDFs into paragraph or bullet-point formats, boosting research efficiency for busy professionals.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 27,
        name: "AI Presentation Gen",
        domain: "AI tools",
        isAI: true,
        description: "Generative AI for instant business presentations. Simply input your topic and style to download professional final slides in seconds.",
        url: "https://drive.google.com/file/d/1vkl-Bp5wAxS3sl2GOYh9GbsugRlJUTKw/view?usp=drive_link",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 28,
        name: "CabUno",
        domain: "Transportation",
        isAI: false,
        description: "Comprehensive ride-hailing app built with Expo React Native. Features real-time tracking, vehicle selection, and Firebase-backed scaling.",
        url: "cabuno-case-study.html",
        color: "linear-gradient(135deg, #FF6B6B, #FF8E53)"
    },
    {
        id: 29,
        name: "Elara Wellness",
        domain: "Health & Fitness",
        isAI: false,
        description: "Prenatal and postnatal wellness ecosystem featuring baby growth tracking, yoga routines, and meditation specifically for mothers.",
        url: "#",
        color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 30,
        name: "Petfinder",
        domain: "Lifestyle",
        isAI: false,
        description: "Find your perfect pet companion fast and easy with this community-driven location-aware adoption and pet-matching platform.",
        url: "#",
        color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 31,
        name: "SpineRecovery Pro",
        domain: "Health & Fitness",
        isAI: false,
        description: "Clinically guided spine recovery platform with personalized exercise plans, daily tracking, and adherence compliance monitoring.",
        url: "#",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 32,
        name: "ScanEat",
        domain: "Food & Drink",
        isAI: true,
        description: "Instantly scan food barcodes to get health scores and deep insights into ingredients and allergen warnings for informed nutrition.",
        url: "#",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 33,
        name: "Mr. Brush AI",
        domain: "Productivity",
        isAI: true,
        description: "Next-gen AI image generator supporting custom styles and sophisticated text-to-image prompts for high-quality creative assets.",
        url: "#",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 34,
        name: "LifePilot AI",
        domain: "Tools",
        isAI: true,
        description: "A comprehensive personal AI assistant designed to manage every aspect of life through predictive helping and active scheduling.",
        url: "#",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 35,
        name: "KindCircle",
        domain: "Social",
        isAI: false,
        description: "Highly supportive network designed specifically for parents of neurodivergent kids to connect, learn, and share verified resources.",
        url: "#",
        color: "linear-gradient(135deg, #96fbc4, #f9f586)"
    },
    {
        id: 36,
        name: "OrderNest",
        domain: "Food & Drink",
        isAI: false,
        description: "Integrated restaurant management app for dynamic menus, table reservations, staff workflows, and real-time billing.",
        url: "#",
        color: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
    },
    {
        id: 42,
        name: "HeartMesh",
        domain: "Dating",
        isAI: true,
        description: "Unique dating ecosystem combining AI companions for social practice with real video-call matches to foster authentic connectivity.",
        url: "#",
        color: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
        id: 43,
        name: "Exora Clinics",
        domain: "Healthcare",
        isAI: false,
        description: "Enterprise connectivity platform for patients and clinics to ensure better recovery outcomes through data-driven post-op care.",
        url: "#",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        id: 44,
        name: "Enclave Connect",
        domain: "Lifestyle",
        isAI: false,
        description: "Secure and connected living platform for gated communities, offering resident management and centralized administrative tools.",
        url: "#",
        color: "linear-gradient(135deg, #89f7fe, #66a6ff)"
    },
    {
        id: 45,
        name: "DocChat",
        domain: "Social",
        isAI: true,
        description: "Secure platform enabling doctors and patients to chat, book medical visits, and conduct remote consultations via encrypted video calls.",
        url: "#",
        color: "linear-gradient(135deg, #ff0844, #ffb199)"
    },
    {
        id: 46,
        name: "Social Ora",
        domain: "Social Media",
        isAI: false,
        description: "Advanced lead finding and Instagram automation tool supporting mass DMs, drip campaigns, and complex marketing workflows.",
        url: "#",
        color: "linear-gradient(135deg, #96fbc4, #f9f586)"
    },
    {
        id: 47,
        name: "Memora AI",
        domain: "Education",
        isAI: true,
        description: "Study smarter with AI-driven flashcards created automatically from your notes, PDFs, audio files, and images.",
        url: "#",
        color: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
    },
    {
        id: 48,
        name: "AnonWhisper",
        domain: "Social Networking",
        isAI: false,
        description: "Anonymous social chat application where users join topic-based rooms for meaningful conversations while protecting their identity.",
        url: "#",
        color: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    }
];

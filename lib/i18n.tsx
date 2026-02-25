'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'tr'

const translations = {
    en: {
        // NAV
        nav_home: 'Home',
        nav_about: 'About',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_why: 'Why Us',
        nav_contact: 'Contact',
        nav_cta: 'GET A QUOTE',

        // HERO
        hero_eyebrow: 'KYRENIA · NORTH CYPRUS · EST. 2014',
        hero_line1: 'Building Dreams',
        hero_line2: 'Into Reality',
        hero_subtitle: 'Premier construction solutions in Kyrenia, North Cyprus — where Mediterranean craftsmanship meets modern engineering excellence.',
        hero_btn1: 'EXPLORE OUR PROJECTS',
        hero_btn2: 'CONTACT US TODAY',
        hero_scroll: 'DISCOVER MORE',

        // STATS
        stat1_num: '50+',
        stat1_label: 'Completed Projects',
        stat2_num: '10+',
        stat2_label: 'Years of Excellence',
        stat3_num: '200+',
        stat3_label: 'Satisfied Clients',
        stat4_num: '★★★★★',
        stat4_label: '5-Star Quality Rating',

        // ABOUT SNAPSHOT
        about_label: 'WHO WE ARE',
        about_title: "Kyrenia's Premier Construction Partner",
        about_p1: "Repsam Construction Ltd. is a premium construction company headquartered in Kyrenia, North Cyprus. We combine regional expertise with modern engineering to deliver projects that exceed every expectation.",
        about_p2: "From luxury custom villas to large-scale commercial developments and infrastructure projects, every Repsam build is delivered with precision, premium materials, and an unwavering commitment to client satisfaction.",
        about_check1: 'European-Standard Quality Materials',
        about_check2: 'End-to-End Project Management',
        about_check3: 'On-Time Delivery Guaranteed',
        about_btn: 'Learn Our Story →',

        // SERVICES
        services_label: 'WHAT WE DO',
        services_title: 'Complete Construction Solutions',
        services_subtitle: 'From concept to completion, we deliver every aspect of your construction project with unmatched expertise.',
        svc1_title: 'Residential Construction',
        svc1_desc: "Custom luxury villas, modern apartments and exclusive residential complexes built to the highest European standards across Kyrenia.",
        svc1_f1: 'Custom Villa Design', svc1_f2: 'Luxury Apartments', svc1_f3: 'Gated Complexes',
        svc2_title: 'Commercial Spaces',
        svc2_desc: "State-of-the-art office buildings and retail hubs designed for business efficiency and modern aesthetics.",
        svc2_f1: 'Office Buildings', svc2_f2: 'Retail Centers', svc2_f3: 'Mixed-Use',
        svc3_title: 'Infrastructure Projects',
        svc3_desc: "Large-scale urban planning and civil engineering works that define the landscape of North Cyprus.",
        svc3_f1: 'Road Networks', svc3_f2: 'Utility Systems', svc3_f3: 'Civil Works',
        svc4_title: 'Landscaping & Exterior',
        svc4_desc: "Complete exterior design, hardscaping, garden architecture and premium outdoor living spaces crafted for the Mediterranean lifestyle.",
        svc4_f1: 'Garden Design', svc4_f2: 'Hardscaping', svc4_f3: 'Outdoor Living',
        svc5_title: 'Architectural Design',
        svc5_desc: "Bespoke architectural concepts, interior design, and immersive 3D modeling for visionary clients.",
        svc5_f1: '3D Modeling', svc5_f2: 'Interior Design', svc5_f3: 'Master Planning',
        svc6_title: 'Renovation & Restoration',
        svc6_desc: "Preserving heritage and restoring historic structures with contemporary techniques and lasting quality.",
        svc6_f1: 'Heritage Restoration', svc6_f2: 'Modern Upgrades', svc6_f3: 'Quality Finish',

        // PROJECTS
        projects_label: 'OUR WORK',
        projects_title: 'Projects That Define Excellence',
        filter_all: 'ALL',
        filter_residential: 'RESIDENTIAL',
        filter_commercial: 'COMMERCIAL',
        filter_construction: 'CONSTRUCTION',
        filter_infrastructure: 'INFRASTRUCTURE',
        filter_technology: 'LANDSCAPING',
        filter_interior: 'INTERIOR',
        view_project: 'View Project →',
        view_more: 'VIEW MORE PROJECTS',
        view_all: 'VIEW ALL PROJECTS →',
        spec_size: 'Size',
        spec_duration: 'Duration',
        spec_status: 'Status',

        // WHY US
        why_label: 'WHY REPSAM',
        why_title: 'Why Leading Clients Choose Repsam',
        why_subtitle: 'Our reputation is built on consistent delivery of premium quality, transparent communication, and unwavering commitment.',
        why1_title: 'Premium Quality',
        why1_desc: 'We use only European-standard materials and proven construction techniques.',
        why2_title: 'On-Time Delivery',
        why2_desc: 'We meet every deadline with meticulous project management.',
        why3_title: 'Transparent Pricing',
        why3_desc: 'No hidden costs. Detailed quotes with full project breakdowns.',
        why4_title: 'Expert Team',
        why4_desc: 'Licensed engineers, architects, and craftsmen with 10+ years experience.',

        // TESTIMONIALS
        test_label: 'TESTIMONIALS',
        test_title: 'What Our Clients Say',

        // CTA
        cta_title: 'Ready to Build Your Vision?',
        cta_subtitle: 'Contact our team today for a free project consultation and detailed quote.',
        cta_btn1: 'GET FREE CONSULTATION',
        cta_btn2: 'VIEW OUR PROJECTS',
        cta_call: 'CALL NOW',

        // PROCESS
        process_label: 'HOW WE BUILD',
        process_title: 'Our Proven Process',
        proc1_title: 'Consultation', proc1_desc: 'We listen to your vision, assess your needs, and provide expert guidance.',
        proc2_title: 'Design', proc2_desc: 'Our architects create detailed plans with 3D visualizations for approval.',
        proc3_title: 'Planning', proc3_desc: 'Permits, materials, timelines — every detail managed professionally.',
        proc4_title: 'Construction', proc4_desc: 'Skilled teams execute with precision using premium materials.',
        proc5_title: 'Handover', proc5_desc: 'Full inspection, quality certification, and keys to your dream project.',

        // FOOTER
        footer_desc: 'Premium construction solutions in Kyrenia, North Cyprus. Building excellence since 2014.',
        footer_company: 'Company',
        footer_services: 'Services',
        footer_contact: 'Contact',
        footer_hours: 'Mon-Fri 08:00-18:00',
        footer_rights: 'All rights reserved.',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms',
        footer_trust: 'Trusted by 200+ clients across UK, Turkey, Europe & Middle East',

        // ABOUT PAGE
        about_page_label: 'ABOUT US',
        about_page_title: 'Our Story',
        journey_label: 'OUR JOURNEY',
        journey_title: 'A Decade of Excellence',
        mission_title: 'Our Mission',
        mission_desc: 'To deliver world-class construction solutions that exceed expectations, on time and within budget.',
        vision_title: 'Our Vision',
        vision_desc: 'To be the most trusted construction partner in North Cyprus, setting the gold standard for quality and innovation.',
        values_label: 'OUR VALUES',
        values_title: 'What Drives Us',
        team_label: 'OUR TEAM',
        team_title: 'Meet Our Leadership',

        // CONTACT
        contact_label: 'GET IN TOUCH',
        contact_title: 'Contact Us',
        form_name: 'FULL NAME',
        form_email: 'EMAIL',
        form_phone: 'PHONE',
        form_type: 'PROJECT TYPE',
        form_budget: 'BUDGET RANGE',
        form_message: 'MESSAGE',
        form_submit: 'SEND ENQUIRY',
        form_sending: 'SENDING...',
        form_success: "Thank you! We'll be in touch within 24 hours.",
        form_error: 'Something went wrong. Please try again.',
        form_start_project: 'Start Your Project',
        form_get_in_touch: 'Get In Touch',

        // SERVICES PAGE
        services_page_label: 'OUR SERVICES',
        services_page_title: 'What We Do',

        // PROJECTS PAGE
        portfolio_label: 'OUR PORTFOLIO',
        portfolio_title: 'Our Projects',

        // MISC
        back_to_top: 'Back to Top',
        loading: 'Loading...',
        cert_label: 'CERTIFICATIONS & STANDARDS',
        cert_title: 'Quality You Can Trust',
        trust_label: 'TRUSTED BY',
        regions_label: 'REGIONS WE SERVE',
        breadcrumb_home: 'Home',

        // WHATSAPP
        whatsapp_tooltip: 'Write us on WhatsApp',

        // HERO BADGE
        hero_badge_line1: "KYRENIA'S #1",
        hero_badge_line2: '★ Premier Builder',

        // FOOTER CERT STRIP
        footer_cert_iso: 'ISO 9001',
        footer_cert_eu: 'EUROPEAN QUALITY',
        footer_cert_kktc: 'KKTC LICENSED',
        footer_cert_materials: 'PREMIUM MATERIALS',
        footer_region_uk: '🇬🇧 UK',
        footer_region_tr: '🇹🇷 Turkey',
        footer_region_eu: '🇪🇺 Europe',
        footer_region_cy: '🇨🇾 N. Cyprus',

        // ABOUT PAGE — TIMELINE
        tl1_title: 'Founded in Kyrenia, North Cyprus',
        tl1_desc: 'Repsam Construction Ltd. was established with a vision to bring European-standard construction to North Cyprus.',
        tl2_title: 'First Major Project Completed',
        tl2_desc: 'Delivered our first luxury residential complex in Kyrenia city center.',
        tl3_title: 'Infrastructure Division Launched',
        tl3_desc: 'Expanded services to include civil and infrastructure work across KKTC.',
        tl4_title: 'Landscaping Division Launched',
        tl4_desc: 'Expanded into premium garden architecture and exterior design across residential projects.',
        tl5_title: '100+ Projects Milestone',
        tl5_desc: 'Celebrated delivering over 100 successful projects to satisfied clients.',
        tl6_title: "Kyrenia's Leading Builder",
        tl6_desc: "Recognized as North Cyprus's most trusted premium construction partner.",

        // ABOUT PAGE — MISSION / VISION BODY
        mission_p1: 'To deliver exceptional construction solutions that exceed client expectations through unwavering commitment to quality, innovation and professional excellence.',
        mission_p2: 'We strive to transform the construction landscape of North Cyprus by introducing European-standard practices, sustainable building methods and cutting-edge engineering in every project we undertake.',
        vision_p1: 'To become the most trusted and respected construction company in North Cyprus — recognised for our commitment to excellence, innovation and client-centric approach.',
        vision_p2: 'We envision a future where every project bearing the Repsam name represents the pinnacle of quality, where sustainable practices meet modern design, and where our clients\' dreams are brought to life with precision and care.',

        // ABOUT PAGE — VALUES
        val1_title: 'Quality', val1_desc: 'Uncompromising European-grade standards in every project we deliver.',
        val2_title: 'Integrity', val2_desc: 'Honest, transparent communication and fair business practices always.',
        val3_title: 'Innovation', val3_desc: 'Embracing cutting-edge construction methods and smart technologies.',
        val4_title: 'Precision', val4_desc: 'Meticulous attention to detail from blueprint to final handover.',
        val5_title: 'Trust', val5_desc: 'Building lasting relationships through reliability and dependability.',
        val6_title: 'Excellence', val6_desc: 'Pursuing the highest standards in design, materials and craftsmanship.',

        // ABOUT PAGE — TEAM
        team1_name: 'General Manager', team1_role: 'Founder & General Manager', team1_bio: 'Over 15 years of experience in construction management across Turkey and North Cyprus.',
        team2_name: 'Chief Engineer', team2_role: 'Chief Structural Engineer', team2_bio: 'Licensed civil engineer specializing in luxury residential and commercial structural design.',
        team3_name: 'Operations Director', team3_role: 'Operations Director', team3_bio: 'Expert in project logistics, supply chain management and on-site quality assurance across North Cyprus.',

        // ABOUT PAGE — OVERLAY
        overlay_projects: 'PROJECTS DELIVERED',
        overlay_years: 'YEARS KYRENIA',

        // SERVICES PAGE — FULL CONTENT
        svcpage_our_process: 'OUR PROCESS',
        svcpage_service_label: 'SERVICE',
        svcpage_1_title: 'Residential Construction',
        svcpage_1_desc: 'We specialise in designing and building luxury custom villas, modern apartment complexes and gated residential communities across Kyrenia and North Cyprus. Every residential project is crafted with European-standard materials, meticulous attention to detail and a deep understanding of Mediterranean living. From the initial architectural concept through to landscaping and interior finishing, our team manages every aspect of the construction process. We work closely with leading architects and designers to ensure each home reflects the unique vision of our clients while maximising natural light, ventilation and panoramic views.',
        svcpage_1_step1: 'Site analysis & architectural design', svcpage_1_step2: 'Foundation & structural engineering', svcpage_1_step3: 'Premium materials procurement', svcpage_1_step4: 'Construction & project management', svcpage_1_step5: 'Landscaping, interiors & final handover',
        svcpage_2_title: 'Commercial Projects',
        svcpage_2_desc: 'Repsam delivers high-impact commercial developments including office buildings, retail centres, hotels and mixed-use complexes designed for maximum functional efficiency and impressive aesthetics. Our commercial projects are built to attract premium tenants, create exceptional customer experiences and generate strong returns on investment. We incorporate modern building systems, energy-efficient technologies and sustainable design principles into every commercial build. Our expertise spans from smaller boutique retail spaces to large-scale multi-storey developments.',
        svcpage_2_step1: 'Feasibility study & ROI analysis', svcpage_2_step2: 'Architectural & structural design', svcpage_2_step3: 'Permit acquisition & compliance', svcpage_2_step4: 'Construction with quality assurance', svcpage_2_step5: 'Systems integration & commissioning',
        svcpage_3_title: 'Infrastructure & Civil',
        svcpage_3_desc: 'Our infrastructure division delivers critical civil engineering projects including road construction, drainage systems, utility installations and public infrastructure. We bring international engineering best practices to every project while ensuring full compliance with KKTC standards and regulations. Our experienced team of civil engineers and project managers oversee all stages from survey and design through construction to final commissioning. We invest in modern construction equipment and employ proven project management methodologies to ensure on-time, on-budget delivery.',
        svcpage_3_step1: 'Topographic survey & engineering design', svcpage_3_step2: 'Environmental assessment & permits', svcpage_3_step3: 'Heavy civil construction', svcpage_3_step4: 'Quality testing & commissioning', svcpage_3_step5: 'Final documentation & handover',
        svcpage_4_title: 'Landscaping & Exterior',
        svcpage_4_desc: 'We create stunning outdoor environments that complement our construction projects. From premium garden architecture and hardscaping to irrigation systems and outdoor living areas, our landscaping division transforms exteriors into Mediterranean oases. We work with native plants, natural stone and premium materials to create low-maintenance, beautiful outdoor spaces that enhance property value and quality of life. Our designers consider climate, terrain and lifestyle to deliver outdoor spaces that are both functional and breathtaking.',
        svcpage_4_step1: 'Site assessment & landscape design', svcpage_4_step2: 'Hardscape planning & material selection', svcpage_4_step3: 'Grading, drainage & irrigation', svcpage_4_step4: 'Planting & softscape installation', svcpage_4_step5: 'Outdoor living features & lighting',
        svcpage_5_title: 'Renovation & Restoration',
        svcpage_5_desc: 'We breathe new life into existing properties through expert renovation and restoration services. Whether you are modernising a dated interior, extending an existing structure or converting a commercial space, our team delivers transformative results while respecting the original character and structural integrity of the building. Our renovation projects are managed with the same rigour and quality standards as our new-build projects, ensuring minimal disruption and maximum value enhancement.',
        svcpage_5_step1: 'Property assessment & feasibility', svcpage_5_step2: 'Design concept & planning', svcpage_5_step3: 'Structural evaluation & permits', svcpage_5_step4: 'Renovation construction', svcpage_5_step5: 'Final finishing & quality inspection',
        svcpage_6_title: 'Project Consulting',
        svcpage_6_desc: 'Our consulting services support clients at every stage of the construction journey. From initial land acquisition advice and feasibility studies through planning applications, architectural design management and construction oversight, our experienced consultants provide the expertise needed to navigate complex projects successfully. We offer independent, professional advice to investors, developers and private clients, helping them make informed decisions and avoid common pitfalls in the North Cyprus construction market.',
        svcpage_6_step1: 'Initial consultation & brief', svcpage_6_step2: 'Market analysis & feasibility', svcpage_6_step3: 'Design management & coordination', svcpage_6_step4: 'Construction oversight & QA', svcpage_6_step5: 'Project close-out & documentation',

        // CONTACT PAGE — INFO, TYPES, BUDGETS, PLACEHOLDERS
        ci_address: 'Address', ci_phone: 'Phone', ci_email: 'Email', ci_hours: 'Hours', ci_instagram: 'Instagram',
        ci_address_val: 'Girne (Kyrenia), Kuzey Kıbrıs / North Cyprus',
        ci_hours_val: 'Mon-Fri: 08:00-18:00 | Sat: 09:00-14:00',
        pt_residential: 'Residential', pt_commercial: 'Commercial', pt_infrastructure: 'Infrastructure', pt_landscaping: 'Landscaping', pt_renovation: 'Renovation', pt_consulting: 'Consulting', pt_other: 'Other',
        br_under100k: 'Under €100K', br_100_500: '€100K - €500K', br_500_1m: '€500K - €1M', br_1mplus: '€1M+', br_discuss: 'Discuss with team',
        ph_fullname: 'Your full name', ph_message: 'Tell us about your project (minimum 20 characters)',
        ph_select_type: 'Select type', ph_select_budget: 'Select budget',
        form_success_sub: "We'll be in touch within 24 hours.",

        // TESTIMONIALS
        test1_text: 'We purchased and built our dream retirement villa in Kyrenia with Repsam. From the first meeting to the moment we received our keys, the team was professional, transparent and meticulous. The quality of construction exceeded every expectation. We cannot recommend them highly enough.',
        test1_role: 'Villa Client',
        test2_text: 'As an investor who has worked with many construction companies in Northern Cyprus, Repsam stands apart. Their attention to detail, use of quality materials and commitment to delivering on time made this the smoothest project I have ever been involved in.',
        test2_role: 'Apartment Investor',
        test3_text: 'Repsam completed our commercial office development in Kyrenia on schedule and within budget. Their attention to detail and craftsmanship was outstanding. I highly recommend them for any serious construction project in North Cyprus.',
        test3_role: 'Commercial Client',

        // CERTIFICATIONS SECTION
        cert1_title: 'ISO 9001', cert1_desc: 'Quality Management System certified for consistent project delivery.',
        cert2_title: 'European Standards', cert2_desc: 'All materials comply with EU construction quality regulations.',
        cert3_title: 'KKTC Licensed', cert3_desc: 'Fully licensed and registered construction company in North Cyprus.',
        cert4_title: '10+ Years', cert4_desc: 'Over a decade of proven construction excellence in the Mediterranean.',
        cert5_title: '200+ Clients', cert5_desc: 'Trusted by clients from UK, Turkey, Europe and the Middle East.',

        // FAQ
        faq_label: 'FREQUENTLY ASKED',
        faq_title: 'Common Questions',
        faq1_q: 'What areas do you serve?',
        faq1_a: 'We primarily serve Kyrenia (Girne) and the wider North Cyprus region, including Famagusta, Nicosia and Morphou. We also work with international clients from the UK, Turkey and Europe who are investing in property in North Cyprus.',
        faq2_q: 'How long does a typical villa construction take?',
        faq2_a: 'A standard luxury villa typically takes 10-14 months from groundbreaking to key handover, depending on size and complexity. We provide a detailed timeline during the planning phase and keep you informed at every stage.',
        faq3_q: 'Do you offer free consultations?',
        faq3_a: 'Yes, we offer complimentary initial consultations for all prospective clients. During this meeting, we discuss your vision, assess feasibility, and provide preliminary guidance on budget and timeline.',
        faq4_q: 'What materials do you use?',
        faq4_a: 'We exclusively use European-standard materials sourced from trusted suppliers in Turkey and Europe. All structural materials meet or exceed EU construction quality regulations and are ISO certified.',
        faq5_q: 'Can I monitor my project remotely?',
        faq5_a: 'Absolutely. We provide regular photo and video updates via WhatsApp, and you are welcome to visit the site at any time. Our project managers maintain transparent communication throughout the build.',
        faq6_q: 'Do you handle permits and legal requirements?',
        faq6_a: 'Yes, our team manages all permit applications, planning approvals and regulatory compliance on your behalf. We have extensive experience navigating the KKTC construction regulatory framework.',
    },
    tr: {
        // NAV
        nav_home: 'Ana Sayfa',
        nav_about: 'Hakkımızda',
        nav_services: 'Hizmetler',
        nav_projects: 'Projeler',
        nav_why: 'Neden Biz?',
        nav_contact: 'İletişim',
        nav_cta: 'TEKLİF AL',

        // HERO
        hero_eyebrow: 'GİRNE · KUZEY KIBRIS · KURULUŞ 2014',
        hero_line1: 'Hayalleri İnşa',
        hero_line2: 'Ediyoruz',
        hero_subtitle: 'Girne, Kuzey Kıbrıs\'ta dünya standartlarında lüks inşaat çözümleri. Mimari mükemmelliğin mühendislik hassasiyetiyle buluştuğu yer.',
        hero_btn1: 'PROJELERİMİZİ İNCELEYİN',
        hero_btn2: 'HEMEN İLETİŞİME GEÇİN',
        hero_scroll: 'DAHA FAZLA KEŞFEDİN',

        // STATS
        stat1_num: '50+',
        stat1_label: 'Tamamlanan Proje',
        stat2_num: '10+',
        stat2_label: 'Yıllık Mükemmellik',
        stat3_num: '200+',
        stat3_label: 'Mutlu Müşteri',
        stat4_num: '★★★★★',
        stat4_label: '5 Yıldızlı Kalite',

        // ABOUT
        about_label: 'BİZ KİMİZ',
        about_title: "Girne'nin Önde Gelen İnşaat Ortağı",
        about_p1: "Repsam Construction Ltd., Kuzey Kıbrıs'ın incisi Girne'de faaliyet gösteren seçkin bir inşaat şirketidir. Bölgesel deneyimimizi modern mühendislikle birleştirerek beklentilerin ötesinde projeler üretiyoruz.",
        about_p2: "Özel lüks villalardan büyük ölçekli ticari gelişim projelerine kadar her Repsam yapısı hassasiyet, premium malzeme ve müşteri memnuniyetine sarsılmaz bir bağlılıkla teslim edilir.",
        about_check1: 'Avrupa Standartlarında Kaliteli Malzeme',
        about_check2: 'Uçtan Uca Proje Yönetimi',
        about_check3: 'Zamanında Teslim Garantisi',
        about_btn: 'Hikayemizi Keşfedin →',

        // SERVICES
        services_label: 'NE YAPIYORUZ',
        services_title: 'Kapsamlı İnşaat Çözümleri',
        services_subtitle: 'Konseptten teslime, inşaat projenizin her aşamasını rakipsiz uzmanlıkla yönetiyoruz.',
        svc1_title: 'Konut İnşaatı',
        svc1_desc: "Girne ve Kuzey Kıbrıs genelinde Avrupa standartlarında özel lüks villalar, modern daireler ve prestijli konut kompleksleri.",
        svc1_f1: 'Özel Villa Tasarımı', svc1_f2: 'Lüks Daireler', svc1_f3: 'Güvenlikli Siteler',
        svc2_title: 'Ticari Alanlar',
        svc2_desc: "İş verimliliği ve modern estetik için tasarlanmış son teknoloji ofis binaları ve perakende merkezleri.",
        svc2_f1: 'Ofis Binaları', svc2_f2: 'AVM\'ler', svc2_f3: 'Karma Kullanım',
        svc3_title: 'Altyapı Projeleri',
        svc3_desc: "Kuzey Kıbrıs'ın manzarasını tanımlayan büyük ölçekli şehir planlama ve inşaat mühendisliği çalışmaları.",
        svc3_f1: 'Yol Ağları', svc3_f2: 'Altyapı Sistemleri', svc3_f3: 'İnşaat İşleri',
        svc4_title: 'Peyzaj ve Dış Mekan',
        svc4_desc: "Akdeniz yaşam tarzına uygun komple dış mekan tasarımı, sert zemin düzenlemesi, bahçe mimarisi ve premium açık yaşam alanları.",
        svc4_f1: 'Bahçe Tasarımı', svc4_f2: 'Sert Zemin', svc4_f3: 'Açık Yaşam Alanı',
        svc5_title: 'Mimari Tasarım',
        svc5_desc: "Vizyon sahibi müşteriler için özel mimari konseptler, iç tasarım ve sürükleyici 3D modelleme.",
        svc5_f1: '3D Modelleme', svc5_f2: 'İç Tasarım', svc5_f3: 'Master Planlama',
        svc6_title: 'Yenileme ve Restorasyon',
        svc6_desc: "Mirasın korunması ve tarihi yapıların çağdaş teknikler ve kalıcı kalite ile restore edilmesi.",
        svc6_f1: 'Tarihi Restorasyon', svc6_f2: 'Modern Yenileme', svc6_f3: 'Kaliteli İşçilik',

        // PROJECTS
        projects_label: 'İŞLERİMİZ',
        projects_title: 'Mükemmelliği Tanımlayan Projeler',
        filter_all: 'TÜMÜ',
        filter_residential: 'KONUT',
        filter_commercial: 'TİCARİ',
        filter_construction: 'İNŞAAT',
        filter_infrastructure: 'ALTYAPI',
        filter_technology: 'PEYZAJ',
        filter_interior: 'İÇ MEKAN',
        view_project: 'Projeyi Gör →',
        view_more: 'DAHA FAZLA PROJE',
        view_all: 'TÜM PROJELERİ GÖR →',
        spec_size: 'Boyut',
        spec_duration: 'Süre',
        spec_status: 'Durum',

        // WHY US
        why_label: 'NEDEN REPSAM',
        why_title: 'Neden Repsam?',
        why_subtitle: 'İtibarımız, tutarlı premium kalite teslimi, şeffaf iletişim ve müşteri memnuniyetine olan bağlılığımız üzerine inşa edilmiştir.',
        why1_title: 'Premium Kalite',
        why1_desc: 'Sadece Avrupa standartlarında malzeme ve kanıtlanmış inşaat teknikleri kullanıyoruz.',
        why2_title: 'Zamanında Teslim',
        why2_desc: 'Titiz proje yönetimi ile her teslim tarihini karşılıyoruz.',
        why3_title: 'Şeffaf Fiyatlandırma',
        why3_desc: 'Gizli maliyet yok. Detaylı proje dökümü ile net teklifler.',
        why4_title: 'Uzman Ekip',
        why4_desc: 'Lisanslı mühendisler, mimarlar ve 10+ yıl deneyimli ustalar.',

        // TESTIMONIALS
        test_label: 'MÜŞTERİ GÖRÜŞLERİ',
        test_title: 'Müşteri Referansları',

        // CTA
        cta_title: 'Projenizi Hayata Geçirelim',
        cta_subtitle: 'Premium inşaat danışmanlığı ve detaylı proje teklifiniz için ekibimizle iletişime geçin.',
        cta_btn1: 'DANIŞMANLIK TALEP EDİN',
        cta_btn2: 'PROJELERİMİZİ İNCELE',
        cta_call: 'HEMEN ARA',

        // PROCESS
        process_label: 'İŞ SÜRECİMİZ',
        process_title: 'Proje Yönetim Sürecimiz',
        proc1_title: 'Danışmanlık', proc1_desc: 'Vizyonunuzu dinler, ihtiyaçlarınızı değerlendirir ve uzman rehberlik sağlarız.',
        proc2_title: 'Tasarım', proc2_desc: 'Mimarlarımız onay için 3D görselleştirmeler ile detaylı planlar oluşturur.',
        proc3_title: 'Planlama', proc3_desc: 'İzinler, malzemeler, zaman çizelgeleri — her detay profesyonelce yönetilir.',
        proc4_title: 'İnşaat', proc4_desc: 'Yetenekli ekipler premium malzemeler kullanarak hassasiyetle çalışır.',
        proc5_title: 'Teslim', proc5_desc: 'Tam kontrol, kalite sertifikası ve hayalinizdeki projenin anahtarları.',

        // FOOTER
        footer_desc: 'Girne, Kuzey Kıbrıs\'ta premium inşaat çözümleri. 2014\'ten beri mükemmelliği inşa ediyoruz.',
        footer_company: 'Şirket',
        footer_services: 'Hizmetler',
        footer_contact: 'İletişim',
        footer_hours: 'Pzt-Cum 08:00-18:00',
        footer_rights: 'Tüm hakları saklıdır.',
        footer_privacy: 'Gizlilik Politikası',
        footer_terms: 'Koşullar',
        footer_trust: 'İngiltere, Türkiye, Avrupa ve Orta Doğu\'dan 200+ memnun müşteri',

        // ABOUT PAGE
        about_page_label: 'HAKKIMIZDA',
        about_page_title: 'Kurumsal Tarihçemiz',
        journey_label: 'KURULUŞ SÜRECİMİZ',
        journey_title: 'On Yıllık Mükemmellik Yolculuğu',
        mission_title: 'Misyonumuz',
        mission_desc: 'Beklentileri aşan, zamanında ve bütçe dahilinde dünya standartlarında inşaat çözümleri sunmak.',
        vision_title: 'Vizyonumuz',
        vision_desc: 'Kuzey Kıbrıs\'ta en güvenilir inşaat ortağı olmak, kalite ve inovasyon için altın standardı belirlemek.',
        values_label: 'DEĞERLERİMİZ',
        values_title: 'Kurumsal Değerlerimiz',
        team_label: 'YÖNETİM KADROSU',
        team_title: 'Yönetim Kadromuz',

        // CONTACT
        contact_label: 'İLETİŞİME GEÇİN',
        contact_title: 'Bize Ulaşın',
        form_name: 'AD SOYAD',
        form_email: 'E-POSTA',
        form_phone: 'TELEFON',
        form_type: 'PROJE TÜRÜ',
        form_budget: 'BÜTÇE ARALIĞI',
        form_message: 'MESAJ',
        form_submit: 'TALEBİNİZİ GÖNDERİN',
        form_sending: 'GÖNDERİLİYOR...',
        form_success: 'Teşekkürler! 24 saat içinde sizinle iletişime geçeceğiz.',
        form_error: 'Bir hata oluştu. Lütfen tekrar deneyiniz.',
        form_start_project: 'Projenizi Başlatın',
        form_get_in_touch: 'İletişime Geçin',

        // SERVICES PAGE
        services_page_label: 'HİZMETLERİMİZ',
        services_page_title: 'Uzmanlık Alanlarımız',

        // PROJECTS PAGE
        portfolio_label: 'PORTFÖYÜMÜZ',
        portfolio_title: 'Projelerimiz',

        // MISC
        back_to_top: 'Yukarı Dön',
        loading: 'Yükleniyor...',
        cert_label: 'SERTİFİKALAR VE STANDARTLAR',
        cert_title: 'Kalite ve Güvenilirlik',
        trust_label: 'GÜVENİLEN',
        regions_label: 'HİZMET VERDİĞİMİZ BÖLGELER',
        breadcrumb_home: 'Ana Sayfa',

        // WHATSAPP
        whatsapp_tooltip: "WhatsApp'tan yazın",

        // HERO BADGE
        hero_badge_line1: "GİRNE'NİN 1 NUMARASI",
        hero_badge_line2: '★ Lider İnşaat',

        // FOOTER CERT STRIP
        footer_cert_iso: 'ISO 9001',
        footer_cert_eu: 'AVRUPA KALİTESİ',
        footer_cert_kktc: 'KKTC LİSANSLI',
        footer_cert_materials: 'PREMİUM MALZEME',
        footer_region_uk: '🇬🇧 İngiltere',
        footer_region_tr: '🇹🇷 Türkiye',
        footer_region_eu: '🇪🇺 Avrupa',
        footer_region_cy: '🇨🇾 K. Kıbrıs',

        // ABOUT PAGE — TIMELINE
        tl1_title: "Girne'de Kuruldu",
        tl1_desc: "Repsam Construction Ltd., Avrupa standartlarında inşaatı Kuzey Kıbrıs'a taşıma vizyonuyla kuruldu.",
        tl2_title: 'İlk Büyük Proje Tamamlandı',
        tl2_desc: 'Girne şehir merkezinde ilk lüks konut kompleksimizi teslim ettik.',
        tl3_title: 'Altyapı Bölümü Kuruldu',
        tl3_desc: 'KKTC genelinde altyapı ve inşaat mühendisliği hizmetlerini başlattık.',
        tl4_title: 'Peyzaj Bölümü Kuruldu',
        tl4_desc: 'Premium bahçe mimarisi ve dış mekan tasarımına genişledik.',
        tl5_title: '100+ Proje Kilometre Taşı',
        tl5_desc: "100'den fazla başarılı projeyi müşterilerimize teslim etmenin gururunu yaşadık.",
        tl6_title: "Girne'nin Lider İnşaat Firması",
        tl6_desc: "Kuzey Kıbrıs'ın en güvenilir premium inşaat ortağı olarak tanındık.",

        // ABOUT PAGE — MISSION / VISION BODY
        mission_p1: 'Kalite, inovasyon ve profesyonel mükemmelliğe olan sarsılmaz bağlılığımızla müşteri beklentilerini aşan olağanüstü inşaat çözümleri sunmak.',
        mission_p2: "Üstlendiğimiz her projede Avrupa standartlarında uygulamalar, sürdürülebilir yapı yöntemleri ve son teknoloji mühendislik sunarak Kuzey Kıbrıs'ın inşaat sektörünü dönüştürmeye çalışıyoruz.",
        vision_p1: "Kuzey Kıbrıs'ta en güvenilir ve saygın inşaat şirketi olmak — mükemmellik, inovasyon ve müşteri odaklı yaklaşımımızla tanınmak.",
        vision_p2: "Repsam adını taşıyan her projenin kalitenin zirvesini temsil ettiği, sürdürülebilir uygulamaların modern tasarımla buluştuğu ve müşterilerimizin hayallerinin hassasiyet ve özenle hayata geçirildiği bir gelecek hayal ediyoruz.",

        // ABOUT PAGE — VALUES
        val1_title: 'Kalite', val1_desc: 'Her projede taviz vermeyen Avrupa standartları.',
        val2_title: 'Dürüstlük', val2_desc: 'Dürüst, şeffaf iletişim ve adil iş uygulamaları.',
        val3_title: 'İnovasyon', val3_desc: 'Son teknoloji inşaat yöntemlerini ve akıllı teknolojileri benimsemek.',
        val4_title: 'Hassasiyet', val4_desc: 'Projeden teslimata titiz detay odaklılık.',
        val5_title: 'Güven', val5_desc: 'Güvenilirlik ile kalıcı ilişkiler kurmak.',
        val6_title: 'Mükemmellik', val6_desc: 'Tasarım, malzeme ve işçilikte en yüksek standartları takip etmek.',

        // ABOUT PAGE — TEAM
        team1_name: 'Genel Müdür', team1_role: 'Kurucu & Genel Müdür', team1_bio: "Türkiye ve Kuzey Kıbrıs'ta 15 yılı aşkın inşaat yönetimi deneyimi.",
        team2_name: 'Baş Mühendis', team2_role: 'Baş Yapı Mühendisi', team2_bio: 'Lüks konut ve ticari yapısal tasarımda uzman lisanslı inşaat mühendisi.',
        team3_name: 'Operasyon Direktörü', team3_role: 'Operasyon Direktörü', team3_bio: "Kuzey Kıbrıs genelinde proje lojistiği, tedarik zinciri yönetimi ve saha kalite güvencesinde uzman.",

        // ABOUT PAGE — OVERLAY
        overlay_projects: 'TAMAMLANAN PROJE',
        overlay_years: 'YIL GİRNE',

        // SERVICES PAGE — FULL CONTENT
        svcpage_our_process: 'SÜRECİMİZ',
        svcpage_service_label: 'HİZMET',
        svcpage_1_title: 'Konut İnşaatı',
        svcpage_1_desc: 'Girne ve Kuzey Kıbrıs genelinde lüks özel villalar, modern daire kompleksleri ve güvenlikli konut toplulukları tasarlama ve inşa etme konusunda uzmanız. Her konut projemiz Avrupa standartlarında malzemeler, titiz detay odaklılık ve Akdeniz yaşamına derin bir anlayışla hazırlanır. İlk mimari konseptten peyzaj ve iç mekan işlerine kadar ekibimiz inşaat sürecinin her aşamasını yönetir. Her evin müşterilerimizin benzersiz vizyonunu yansıtmasını sağlamak için önde gelen mimar ve tasarımcılarla yakın çalışırız.',
        svcpage_1_step1: 'Saha analizi ve mimari tasarım', svcpage_1_step2: 'Temel ve yapısal mühendislik', svcpage_1_step3: 'Premium malzeme tedariği', svcpage_1_step4: 'İnşaat ve proje yönetimi', svcpage_1_step5: 'Peyzaj, iç mekan ve teslim',
        svcpage_2_title: 'Ticari Projeler',
        svcpage_2_desc: 'Repsam, maksimum fonksiyonel verimlilik ve etkileyici estetik için tasarlanmış ofis binaları, alışveriş merkezleri, oteller ve karma kullanımlı kompleksler dahil yüksek etkili ticari gelişim projeleri sunar. Ticari projelerimiz premium kiracıları çekmek, olağanüstü müşteri deneyimleri yaratmak ve güçlü yatırım getirisi sağlamak için inşa edilir. Modern bina sistemleri, enerji verimli teknolojiler ve sürdürülebilir tasarım ilkelerini her ticari yapıya dahil ediyoruz.',
        svcpage_2_step1: 'Fizibilite çalışması ve yatırım analizi', svcpage_2_step2: 'Mimari ve yapısal tasarım', svcpage_2_step3: 'İzin ve mevzuat uyumu', svcpage_2_step4: 'Kalite güvenceli inşaat', svcpage_2_step5: 'Sistem entegrasyonu ve devreye alma',
        svcpage_3_title: 'Altyapı ve İnşaat',
        svcpage_3_desc: "Altyapı bölümümüz yol inşaatı, drenaj sistemleri, altyapı tesisleri ve kamu altyapısı dahil kritik inşaat mühendisliği projeleri teslim eder. KKTC standartları ve düzenlemelerine tam uyum sağlarken her projeye uluslararası mühendislik en iyi uygulamalarını getiriyoruz. Deneyimli inşaat mühendisleri ve proje yöneticilerimiz tüm aşamaları planlamadan teslimata kadar denetler.",
        svcpage_3_step1: 'Topografik etüt ve mühendislik tasarımı', svcpage_3_step2: 'Çevre değerlendirmesi ve izinler', svcpage_3_step3: 'Ağır inşaat işleri', svcpage_3_step4: 'Kalite testi ve devreye alma', svcpage_3_step5: 'Son dokümantasyon ve teslim',
        svcpage_4_title: 'Peyzaj ve Dış Mekan',
        svcpage_4_desc: 'İnşaat projelerimizi tamamlayan çarpıcı dış mekan ortamları yaratıyoruz. Premium bahçe mimarisinden sert zemin düzenlemesine, sulama sistemlerinden açık yaşam alanlarına kadar peyzaj bölümümüz dış mekanları Akdeniz vahalarına dönüştürür. Doğal bitkiler, doğal taş ve premium malzemelerle düşük bakımlı, güzel açık alanlar oluşturuyoruz.',
        svcpage_4_step1: 'Saha değerlendirmesi ve peyzaj tasarımı', svcpage_4_step2: 'Sert zemin planlaması ve malzeme seçimi', svcpage_4_step3: 'Tesviye, drenaj ve sulama', svcpage_4_step4: 'Dikim ve yumuşak zemin uygulaması', svcpage_4_step5: 'Açık yaşam alanları ve aydınlatma',
        svcpage_5_title: 'Yenileme ve Restorasyon',
        svcpage_5_desc: 'Uzman yenileme ve restorasyon hizmetleriyle mevcut mülklere yeni bir hayat veriyoruz. Eski bir iç mekanı modernleştirmek, mevcut bir yapıyı genişletmek veya ticari bir alanı dönüştürmek fark etmez, ekibimiz binanın orijinal karakterine ve yapısal bütünlüğüne saygı gösterirken dönüştürücü sonuçlar sunar.',
        svcpage_5_step1: 'Mülk değerlendirmesi ve fizibilite', svcpage_5_step2: 'Tasarım konsepti ve planlama', svcpage_5_step3: 'Yapısal değerlendirme ve izinler', svcpage_5_step4: 'Yenileme inşaatı', svcpage_5_step5: 'Son rötuş ve kalite kontrolü',
        svcpage_6_title: 'Proje Danışmanlığı',
        svcpage_6_desc: "Danışmanlık hizmetlerimiz müşterileri inşaat yolculuğunun her aşamasında destekler. İlk arsa edinme tavsiyesi ve fizibilite çalışmalarından imar başvurularına, mimari tasarım yönetimi ve inşaat denetimine kadar deneyimli danışmanlarımız karmaşık projelerde başarılı bir şekilde ilerlemek için gereken uzmanlığı sağlar.",
        svcpage_6_step1: 'İlk görüşme ve brief', svcpage_6_step2: 'Piyasa analizi ve fizibilite', svcpage_6_step3: 'Tasarım yönetimi ve koordinasyon', svcpage_6_step4: 'İnşaat denetimi ve kalite güvencesi', svcpage_6_step5: 'Proje kapanışı ve dokümantasyon',

        // CONTACT PAGE — INFO, TYPES, BUDGETS, PLACEHOLDERS
        ci_address: 'Adres', ci_phone: 'Telefon', ci_email: 'E-posta', ci_hours: 'Çalışma Saatleri', ci_instagram: 'Instagram',
        ci_address_val: 'Girne, Kuzey Kıbrıs',
        ci_hours_val: 'Pzt-Cum: 08:00-18:00 | Cmt: 09:00-14:00',
        pt_residential: 'Konut', pt_commercial: 'Ticari', pt_infrastructure: 'Altyapı', pt_landscaping: 'Peyzaj', pt_renovation: 'Yenileme', pt_consulting: 'Danışmanlık', pt_other: 'Diğer',
        br_under100k: '€100K Altı', br_100_500: '€100K - €500K', br_500_1m: '€500K - €1M', br_1mplus: '€1M+', br_discuss: 'Ekiple görüşmek istiyorum',
        ph_fullname: 'Adınız soyadınız', ph_message: 'Projenizi anlatın (en az 20 karakter)',
        ph_select_type: 'Tür seçiniz', ph_select_budget: 'Bütçe seçiniz',
        form_success_sub: '24 saat içinde sizinle iletişime geçeceğiz.',

        // TESTIMONIALS
        test1_text: "Girne'de hayalimizin emeklilik villasını Repsam ile inşa ettik. İlk toplantıdan anahtarlarımızı aldığımız ana kadar ekip profesyonel, şeffaf ve titizdi. İnşaat kalitesi her beklentiyi aştı. Onları yeterince tavsiye edemeyiz.",
        test1_role: 'Villa Müşterisi',
        test2_text: "Kuzey Kıbrıs'ta birçok inşaat firmasıyla çalışmış bir yatırımcı olarak Repsam bir adım öndedir. Detaylara gösterdikleri özen, kaliteli malzeme kullanımı ve zamanında teslim taahhütleri bu projeyi şimdiye kadar dahil olduğum en sorunsuz proje haline getirdi.",
        test2_role: 'Daire Yatırımcısı',
        test3_text: "Repsam, Girne'deki ticari ofis projemizi zamanında ve bütçe dahilinde tamamladı. Detaylara gösterdikleri özen ve işçilikleri olağanüstüydü. Kuzey Kıbrıs'taki her ciddi inşaat projesi için onları şiddetle tavsiye ederim.",
        test3_role: 'Ticari Müşteri',

        // CERTIFICATIONS SECTION
        cert1_title: 'ISO 9001', cert1_desc: 'Tutarlı proje teslimi için Kalite Yönetim Sistemi sertifikalı.',
        cert2_title: 'Avrupa Standartları', cert2_desc: 'Tüm malzemeler AB inşaat kalite düzenlemelerine uygundur.',
        cert3_title: 'KKTC Lisanslı', cert3_desc: "Kuzey Kıbrıs'ta tam lisanslı ve tescilli inşaat şirketi.",
        cert4_title: '10+ Yıl', cert4_desc: "Akdeniz'de on yılı aşkın kanıtlanmış inşaat mükemmelliği.",
        cert5_title: '200+ Müşteri', cert5_desc: "İngiltere, Türkiye, Avrupa ve Orta Doğu'dan müşterilerin güvenini kazandık.",

        // FAQ
        faq_label: 'SIK SORULAN SORULAR',
        faq_title: 'Merak Edilenler',
        faq1_q: 'Hangi bölgelere hizmet veriyorsunuz?',
        faq1_a: 'Ağırlıklı olarak Girne ve Kuzey Kıbrıs genelinde Gazimağusa, Lefkoşa ve Güzelyurt dahil hizmet vermekteyiz. Ayrıca İngiltere, Türkiye ve Avrupa\'dan Kuzey Kıbrıs\'ta yatırım yapan uluslararası müşterilerimizle de çalışmaktayız.',
        faq2_q: 'Bir villa inşaatı ne kadar sürer?',
        faq2_a: 'Standart bir lüks villa, büyüklük ve karmaşıklığa bağlı olarak temel atımından anahtar teslimine kadar genellikle 10-14 ay sürmektedir. Planlama aşamasında detaylı bir zaman çizelgesi sunmakta ve sizi her aşamada bilgilendirmekteyiz.',
        faq3_q: 'Ücretsiz danışmanlık sunuyor musunuz?',
        faq3_a: 'Evet, tüm potansiyel müşterilerimize ücretsiz ilk görüşme hizmeti sunmaktayız. Bu görüşmede vizyonunuzu dinlemekte, fizibilite değerlendirmesi yapmakta ve bütçe ile zaman çizelgesi konusunda ön bilgilendirme sağlamaktayız.',
        faq4_q: 'Hangi malzemeleri kullanıyorsunuz?',
        faq4_a: 'Yalnızca Türkiye ve Avrupa\'daki güvenilir tedarikçilerden temin edilen Avrupa standartlarında malzemeler kullanmaktayız. Tüm yapısal malzemelerimiz AB inşaat kalite düzenlemelerini karşılamakta veya aşmakta olup ISO sertifikalıdır.',
        faq5_q: 'Projemi uzaktan takip edebilir miyim?',
        faq5_a: 'Kesinlikle. WhatsApp üzerinden düzenli fotoğraf ve video güncellemeleri sağlamaktayız; ayrıca şantiyeyi dilediğiniz zaman ziyaret edebilirsiniz. Proje yöneticilerimiz inşaat boyunca şeffaf iletişim sürdürmektedir.',
        faq6_q: 'İzin ve yasal süreçleri yönetiyor musunuz?',
        faq6_a: 'Evet, ekibimiz tüm izin başvuruları, imar onayları ve mevzuat uyum süreçlerini sizin adınıza yönetmektedir. KKTC inşaat mevzuat çerçevesinde geniş deneyime sahibiz.',
    }
} as const

export type TranslationKey = keyof typeof translations.en

interface LangContextType {
    lang: Lang
    setLang: (l: Lang) => void
    t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextType>({
    lang: 'tr',
    setLang: () => { },
    t: (key) => translations.tr[key]
})

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('tr')

    useEffect(() => {
        const saved = localStorage.getItem('repsam_lang') as Lang
        if (saved === 'en' || saved === 'tr') setLangState(saved)
    }, [])

    const setLang = (l: Lang) => {
        setLangState(l)
        localStorage.setItem('repsam_lang', l)
    }

    const t = (key: TranslationKey) => translations[lang][key]

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    )
}

export function useLang() {
    return useContext(LangContext)
}

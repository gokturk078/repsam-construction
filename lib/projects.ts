export interface Project {
    slug: string
    id: string
    title_en: string
    title_tr: string
    category: 'residential' | 'commercial' | 'construction' | 'infrastructure' | 'landscaping' | 'interior'
    location_en: string
    location_tr: string
    year: string
    size: string
    status_en: string
    status_tr: string
    description_en: string
    description_tr: string
    mainImage: string
    gallery: string[]
    specs: {
        key_en: string
        key_tr: string
        value: string
    }[]
}

export const PROJECTS: Project[] = [
    {
        slug: 'project-villa-01',
        id: 'project-villa-01',
        title_en: 'Kyrenia Azure Villa',
        title_tr: 'Girne Azure Villa',
        category: 'residential',
        location_en: 'Kyrenia, North Cyprus',
        location_tr: 'Girne, Kuzey Kıbrıs',
        year: '2023',
        size: '450m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'A flagship luxury residential project featuring panoramic Mediterranean views and state-of-the-art sustainable engineering.',
        description_tr: 'Panoramik Akdeniz manzarasına ve son teknoloji sürdürülebilir mühendisliğe sahip amiral gemisi lüks konut projesi.',
        mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=95',
        gallery: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=90',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90'
        ],
        specs: [
            { key_en: 'Concrete Grade', key_tr: 'Beton Sınıfı', value: 'C35/45' },
            { key_en: 'Material Origin', key_tr: 'Malzeme Kaynağı', value: 'EU Certified' },
            { key_en: 'Energy Rating', key_tr: 'Enerji Sınıfı', value: 'A+' }
        ]
    },
    {
        slug: 'project-commercial-01',
        id: 'project-commercial-01',
        title_en: 'Nexa Business Hub',
        title_tr: 'Nexa İş Merkezi',
        category: 'commercial',
        location_en: 'Kyrenia Center',
        location_tr: 'Girne Merkez',
        year: '2024',
        size: '2,500m²',
        status_en: 'Ongoing',
        status_tr: 'Devam Ediyor',
        description_en: 'Modern commercial space designed for high-efficiency enterprise operations with a focus on glassmorphism architecture.',
        description_tr: 'Glassmorphism mimarisine odaklanan, yüksek verimli kurumsal operasyonlar için tasarlanmış modern ticari alan.',
        mainImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=95',
        gallery: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90'
        ],
        specs: [
            { key_en: 'Structural Frame', key_tr: 'Yapısal Karkas', value: 'Steel & Concrete' },
            { key_en: 'Smart Control', key_tr: 'Akıllı Kontrol', value: 'KNX Integrated' }
        ]
    },
    {
        slug: 'project-villa-02',
        id: 'project-villa-02',
        title_en: 'Riviera Residences',
        title_tr: 'Riviera Konutları',
        category: 'residential',
        location_en: 'Alsancak, Kyrenia',
        location_tr: 'Alsancak, Girne',
        year: '2023',
        size: '320m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'A blend of traditional Mediterranean aesthetics and modern luxury living.',
        description_tr: 'Geleneksel Akdeniz estetiği ile modern lüks yaşamın harmanlandığı bir proje.',
        mainImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'project-apartments-01',
        id: 'project-apartments-01',
        title_en: 'City View Studios',
        title_tr: 'Şehir Manzaralı Stüdyolar',
        category: 'residential',
        location_en: 'Kyrenia City Center',
        location_tr: 'Girne Şehir Merkezi',
        year: '2022',
        size: '1,200m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'Sustainable urban living with maximum space efficiency.',
        description_tr: 'Maksimum alan verimliliği ile sürdürülebilir kentsel yaşam.',
        mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'project-complex-01',
        id: 'project-complex-01',
        title_en: 'Marina Heights',
        title_tr: 'Marina Tepeleri',
        category: 'residential',
        location_en: 'Kyrenia Marina',
        location_tr: 'Girne Marina',
        year: '2024',
        size: '5,000m²',
        status_en: 'Under Construction',
        status_tr: 'İnşaat Halinde',
        description_en: 'Premium residential complex overlooking the historic Girne Harbour.',
        description_tr: 'Tarihi Girne Limanı manzaralı premium konut kompleksi.',
        mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'construction-site-01',
        id: 'construction-site-01',
        title_en: 'Kyrenia Core Infrastructure',
        title_tr: 'Girne Temel Altyapı',
        category: 'construction',
        location_en: 'Girne City',
        location_tr: 'Girne Şehir',
        year: '2023',
        size: '10,000m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'Modern engineering solutions for urban development.',
        description_tr: 'Kentsel gelişim için modern mühendislik çözümleri.',
        mainImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'project-infrastructure-01',
        id: 'project-infrastructure-01',
        title_en: 'Coastal Protection Works',
        title_tr: 'Kıyı Koruma Çalışmaları',
        category: 'infrastructure',
        location_en: 'Kyrenia Coast',
        location_tr: 'Girne Sahili',
        year: '2022',
        size: '15,000m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'Advanced marine engineering for coastal stability.',
        description_tr: 'Kıyı stabilitesi için ileri deniz mühendisliği.',
        mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'project-landscaping-01',
        id: 'project-landscaping-01',
        title_en: 'Olive Grove Gardens',
        title_tr: 'Zeytinlik Bahçeleri',
        category: 'landscaping',
        location_en: 'Bellapais, Kyrenia',
        location_tr: 'Beylerbeyi, Girne',
        year: '2023',
        size: '2,000m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'Eco-friendly landscaping integrating indigenous flora.',
        description_tr: 'Yerli florayı entegre eden çevre dostu peyzaj düzenlemesi.',
        mainImage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'interior-living-01',
        id: 'interior-living-01',
        title_en: 'Modern Minimalist Interior',
        title_tr: 'Modern Minimalist İç Mekan',
        category: 'interior',
        location_en: 'Kyrenia',
        location_tr: 'Girne',
        year: '2023',
        size: '180m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'Bespoke interior design with a focus on natural light and marble.',
        description_tr: 'Doğal ışık ve mermere odaklanan kişiye özel iç tasarım.',
        mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'project-villa-01',
        id: 'project-villa-01',
        title_en: 'Serenity Villa',
        title_tr: 'Huzur Villası',
        category: 'residential',
        location_en: 'Catalkoy, Kyrenia',
        location_tr: 'Çatalköy, Girne',
        year: '2023',
        size: '450m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'Ultra-luxury villa with infinity pool and smart home automation.',
        description_tr: 'Sonsuzluk havuzu ve akıllı ev otomasyonuna sahip ultra lüks villa.',
        mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=95',
        gallery: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90'
        ],
        specs: [
            { key_en: 'Energy Rating', key_tr: 'Enerji Sınıfı', value: 'A++' },
            { key_en: 'Smart Home', key_tr: 'Akıllı Ev', value: 'Crestron' }
        ]
    },
    {
        slug: 'construction-site-02',
        id: 'construction-site-02',
        title_en: 'Harbour View Foundation',
        title_tr: 'Liman Manzaralı Temel',
        category: 'construction',
        location_en: 'Kyrenia Harbour',
        location_tr: 'Girne Limanı',
        year: '2024',
        size: '800m²',
        status_en: 'Under Construction',
        status_tr: 'İnşaat Halinde',
        description_en: 'Complex foundation works in sensitive historical environments.',
        description_tr: 'Hassas tarihi ortamlarda karmaşık temel çalışmaları.',
        mainImage: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1920&q=95',
        gallery: [],
        specs: []
    },
    {
        slug: 'project-commercial-02',
        id: 'project-commercial-02',
        title_en: 'Emerald Plaza',
        title_tr: 'Zümrüt Plaza',
        category: 'commercial',
        location_en: 'Nicosia',
        location_tr: 'Lefkoşa',
        year: '2023',
        size: '3,800m²',
        status_en: 'Completed',
        status_tr: 'Tamamlandı',
        description_en: 'State-of-the-art office complex with sustainable LEED certification.',
        description_tr: 'Sürdürülebilir LEED sertifikasına sahip son teknoloji ofis kompleksi.',
        mainImage: 'https://images.unsplash.com/photo-1551361415-69c87624334f?w=1920&q=95',
        gallery: [],
        specs: []
    }
]

export function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find(p => p.slug === slug)
}

export function getAllProjects(): Project[] {
    return PROJECTS
}

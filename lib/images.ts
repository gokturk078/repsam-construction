export interface ProjectImage {
    id: string
    filename: string
    category: 'hero' | 'residential' | 'commercial' | 'construction' | 'infrastructure' | 'landscaping' | 'interior' | 'team'
    usage: string
    width: number
    height: number
    blurDataURL: string
    src: string
    fallbackSrc: string
}

const BLUR = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABkDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYDBAUHCP/EACgQAAICAgEDBAEFAAAAAAAAAAECAwQABREGEhMhMUFRYRQiI5Gx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EABwRAAMBAAIDAAAAAAAAAAAAAAECEQADIRIxQf/aAAwDAQACEQMRAD8A9N6DqGh1FNq/S7KvKk0YlUBlPaSQDj6+MyNv1P07R2TXt7KJEPoVVWkI/oHMvpbSQ1utqlCLDG2vMkSlECgkEAn1+cW/kFaVoQ0sZ7kZP2x+ckXxj2sGCbSd51B3Ps+01x6frbtjqrqzw+WFHVI7C+SkAen+5v7/c0NO/SXtjHTuJ8bpqGlz0xwGV3uNj4lUPYseJ454P3hh5cPIwj4n//Z"

const STATIC_IMAGES: ProjectImage[] = [
    {
        id: "hero-main",
        filename: "hero-main-enhanced.webp",
        category: "hero",
        usage: "homepage_hero",
        width: 1920, height: 1080, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=95",
        fallbackSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90"
    },
    {
        id: "hero-secondary",
        filename: "hero-secondary-enhanced.webp",
        category: "hero",
        usage: "about_hero",
        width: 1920, height: 1080, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=95",
        fallbackSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90"
    },
    {
        id: "project-villa-01",
        filename: "project-villa-01-enhanced.webp",
        category: "residential",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=90"
    },
    {
        id: "project-villa-02",
        filename: "project-villa-02-enhanced.webp",
        category: "residential",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90"
    },
    {
        id: "project-apartments-01",
        filename: "project-apartments-01-enhanced.webp",
        category: "residential",
        usage: "projects_gallery",
        width: 1200, height: 900, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90"
    },
    {
        id: "project-complex-01",
        filename: "project-complex-01-enhanced.webp",
        category: "residential",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90"
    },
    {
        id: "construction-site-01",
        filename: "construction-site-01-enhanced.webp",
        category: "construction",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1200&q=90"
    },
    {
        id: "construction-site-02",
        filename: "construction-site-02-enhanced.webp",
        category: "construction",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90"
    },
    {
        id: "construction-progress-01",
        filename: "construction-progress-01-enhanced.webp",
        category: "construction",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1200&q=90"
    },
    {
        id: "project-commercial-01",
        filename: "project-commercial-01-enhanced.webp",
        category: "commercial",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"
    },
    {
        id: "project-commercial-02",
        filename: "project-commercial-02-enhanced.webp",
        category: "commercial",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1551361415-69c87624334f?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=90"
    },
    {
        id: "project-infrastructure-01",
        filename: "project-infrastructure-01-enhanced.webp",
        category: "infrastructure",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1545259742-b4fd8a6fa2e5?w=1200&q=90"
    },
    {
        id: "project-infrastructure-02",
        filename: "project-infrastructure-02-enhanced.webp",
        category: "infrastructure",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90"
    },
    {
        id: "project-technology-01",
        filename: "project-landscaping-01-enhanced.webp",
        category: "landscaping",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90"
    },
    {
        id: "project-solar-01",
        filename: "project-landscaping-02-enhanced.webp",
        category: "landscaping",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=90"
    },
    {
        id: "interior-living-01",
        filename: "interior-living-01-enhanced.webp",
        category: "interior",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90"
    },
    {
        id: "interior-kitchen-01",
        filename: "interior-kitchen-01-enhanced.webp",
        category: "interior",
        usage: "projects_gallery",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1556910103-1c02745a8728?w=1200&q=90"
    },
    {
        id: "team-site-visit",
        filename: "team-site-visit-enhanced.webp",
        category: "team",
        usage: "about_section",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90"
    },
    {
        id: "blueprint-planning",
        filename: "blueprint-planning-enhanced.webp",
        category: "team",
        usage: "services_section",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90"
    },
    {
        id: "quality-inspection",
        filename: "quality-inspection-enhanced.webp",
        category: "team",
        usage: "why_us_section",
        width: 1200, height: 800, blurDataURL: BLUR,
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90",
        fallbackSrc: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1200&q=90"
    }
]

export function getAllImages(): ProjectImage[] {
    return STATIC_IMAGES
}

export function getImageById(id: string): ProjectImage | undefined {
    return STATIC_IMAGES.find(img => img.id === id)
}

export function getImageByUsage(usage: string): ProjectImage | undefined {
    return STATIC_IMAGES.find(img => img.usage === usage)
}

export function getImagesByCategory(category: string): ProjectImage[] {
    if (category === 'all') return getProjectImages()
    return STATIC_IMAGES.filter(img => img.category === category)
}

export function getProjectImages(): ProjectImage[] {
    return STATIC_IMAGES.filter(
        img => img.usage === 'projects_gallery'
    )
}

export function getHeroImage(): ProjectImage {
    return getImageByUsage('homepage_hero') || STATIC_IMAGES[0]
}

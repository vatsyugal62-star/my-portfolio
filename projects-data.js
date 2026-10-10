/**
 * PORTFOLIO DATA STORE — YUGAL VATS
 * Complete data store: 6 disciplines, project descriptions, POVs, processes, and deliverables.
 */

const SERVICES_DATA = [
  {
    slug: "branding",
    num: "01",
    name: "Branding & Identity",
    shortName: "Branding",
    tag: "Identity Systems",
    accent: "#c9a876",
    sub: "Logos · Visual Systems · Brand Guidelines · Packaging",
    desc: "A brand is the smallest unit of trust a company can hand someone. I build the mark, the palette, the type system and the rules that hold it together — so it reads the same on a signboard as it does on a phone screen.",
    deliverables: [
      "Logo suite (Primary, Secondary & Sub-marks)",
      "Color & type hierarchy system",
      "Comprehensive brand guideline PDF",
      "Stationery & packaging mockups",
      "Real-world asset usage rules"
    ],
    process: [
      ["01", "Discovery", "Audience research, competitors, visual positioning"],
      ["02", "Concept Sketches", "3–5 distinct visual directions explored"],
      ["03", "Refinement", "Precision vector tuning of the chosen direction"],
      ["04", "Delivery", "Full identity system & comprehensive brand book"]
    ],
    povs: [
      "A thoughtfully crafted café brand identity that blends warmth, character, and contemporary aesthetics. From the logo to the visual language, every element is designed to create a memorable and inviting experience.",
      "A fresh take on Lay's that preserves its iconic personality while giving the brand a more contemporary and energetic visual identity. The rebrand explores bold typography, refined packaging, and a vibrant visual language designed to feel familiar yet fresh.",
      "A refined brand identity created to elevate dry fruits into a premium lifestyle experience. The visual language combines elegance, warmth, and sophistication to communicate quality, purity, and indulgence."
    ]
  },
  {
    slug: "editorial",
    num: "02",
    name: "Magazines",
    shortName: "Magazines",
    tag: "Layout & Spreads",
    accent: "#a38259",
    sub: "Interior Spreads · Grid Systems · Typesetting · Publications",
    desc: "Editorial design is the quiet work — a grid that lets long-form writing breathe, pull-quotes that earn their size, images that get room to be looked at. I design the full interior, not just the cover.",
    deliverables: [
      "Grid & baseline typographic system",
      "Spread layouts & article pacing",
      "Micro & macro typesetting",
      "Print-ready InDesign package & digital flips"
    ],
    process: [
      ["01", "Architecture", "Master grid & typographic baseline setup"],
      ["02", "Spread Templates", "Creating modular layouts for long & short reads"],
      ["03", "Full-Issue Flow", "Pacing stories, pull-quotes, and photo essays"],
      ["04", "Pre-Flight", "Color proofing, bleed checks, and press packaging"]
    ],
    povs: [
      "Nobody notices a good grid — that's the point. This spread took longer to make invisible than it would have taken to make loud.",
      "The pull-quote on this spread is the only oversized type across eighteen pages. Earning that size took a lot of quiet pages before it.",
      "I gave the photography a full bleed and stripped the layout back to nothing. Sometimes the best layout decision is getting out of the way."
    ]
  },
  {
    slug: "posters",
    num: "03",
    name: "Posters & Prints",
    shortName: "Posters",
    tag: "Event & Editorial",
    accent: "#b59b72",
    sub: "Event Posters · Campaign Art · Print Series · Typographic Art",
    desc: "A poster has one glance to work with. I lean on bold type hierarchy and a single strong image or idea, built to hold up at A0 print size and still read at thumbnail size on a phone.",
    deliverables: [
      "Print-ready poster artwork (A0–A3 resolutions)",
      "Digital & social media crop versions",
      "Typographic & colorway variants",
      "Vector assets ready for large format print"
    ],
    process: [
      ["01", "Key Visual", "Anchor concept & emotional focal point"],
      ["02", "Type Hierarchy", "Ensuring instant 3-second comprehension"],
      ["03", "Proofing", "Testing at 100% scale for print sharpness"],
      ["04", "Resize Suite", "Cropping for digital, billboard, and print"]
    ],
    povs: [
      "This poster had eleven pieces of information legally required on it. Fitting all of that in without it looking like a form was the real design problem.",
      "I chose one photograph and thirty percent negative space over a collage of five images — at A0 size, restraint reads as confidence.",
      "The brief asked for 'loud.' I gave them loud through scale and contrast instead of colour, so it's calmer up close and still stops you from across a room."
    ]
  },
  {
    slug: "thumbnails",
    num: "04",
    name: "YouTube Thumbnails",
    shortName: "Thumbnails",
    tag: "CTR & Video Design",
    accent: "#d4af37",
    sub: "YouTube Thumbnails · Click-Through Optimization · Channel Kits",
    desc: "A thumbnail competes with fifty others in a 3-inch-wide grid. I design for instant read — high-contrast subject, punchy 3–5 word text, color that stops the scroll — tested small before it's ever shipped.",
    deliverables: [
      "Ultra HD 1280×720 / 1920×1080 thumbnail masters",
      "A/B test variation pairs (contrast & crop)",
      "Consistent recurring channel visual style",
      "Subject color grading & cutouts"
    ],
    process: [
      ["01", "The Hook", "Aligning thumbnail intrigue with video title"],
      ["02", "Subject Isolation", "Precision cutouts & dynamic lighting"],
      ["03", "Contrast Tuning", "Vibrant separation against YouTube dark/light mode"],
      ["04", "Micro-Scale Test", "Simulating mobile feeds at 150px size"]
    ],
    povs: [
      "This thumbnail went through four versions before the click-through rate held — the winning one wasn't the boldest, it was the clearest.",
      "I shrunk this to the size of a fingernail on my phone while designing it. If it didn't read there, it didn't ship.",
      "The channel's audience was tired of the same red-arrow-and-shocked-face format, so this one earned attention by being the calm one in the row."
    ]
  },
  {
    slug: "social",
    num: "05",
    name: "Social Media Systems",
    shortName: "Social Media",
    tag: "Instagram & Carousels",
    accent: "#c49a62",
    sub: "Feed Design · High-Retention Carousels · Story Templates",
    desc: "Social design is written in a language of thumbs and scroll speed. I design carousels and feed posts that hold a scroll for one extra second — consistent grid, consistent voice, built to be posted in batches.",
    deliverables: [
      "Swipe-worthy carousel sets (5–10 slides)",
      "Reusable Instagram story & reel templates",
      "Feed aesthetic & 9-grid arrangement planning",
      "Caption-ready optimized exports"
    ],
    process: [
      ["01", "Feed Strategy", "Content audit & thematic grid architecture"],
      ["02", "Template Architecture", "Building modular drag-and-drop frames"],
      ["03", "Batch Production", "Designing sequential swipe narratives"],
      ["04", "Export Optimization", "Pixel-perfect compression for mobile screens"]
    ],
    povs: [
      "Carousels live or die on slide one. I spent more time on this opening frame than the other nine combined.",
      "The brand wanted every post to look premium, but premium can read cold on a feed — I warmed the palette by two degrees and it worked.",
      "This template had to survive being filled in by someone other than me, so I built in guardrails that make it hard to get wrong."
    ]
  },
  {
    slug: "magazine-covers",
    num: "06",
    name: "Editorial Covers",
    shortName: "Editorial Covers",
    tag: "Editorial Cover Art",
    accent: "#bfa074",
    sub: "Cover Design · Art Direction · Mastheads · Print Layout",
    desc: "A magazine cover has a split second to create intrigue and a few square inches to communicate an entire issue. I design covers that balance a strong visual hook with clear editorial hierarchy.",
    deliverables: [
      "Master cover concept & photographic art direction",
      "Masthead lockup & typographic cover lines",
      "Print-ready CMYK press files with crop marks",
      "Digital promo crops for web & social"
    ],
    process: [
      ["01", "Editorial Direction", "Defining the issue's hero narrative & subject"],
      ["02", "Masthead Geometry", "Balancing logo visibility with photo layering"],
      ["03", "Cover Lines", "Crafting typography that reads effortlessly at a glance"],
      ["04", "Final Proofing", "Fine-tuning newsstand presence and shelf appeal"]
    ],
    povs: [
      "The cover has to stop someone walking past a newsstand at three paces. Every line of text is tuned to earn its space.",
      "Layering the subject gently across the masthead adds depth and signals established authority.",
      "Editorial simplicity beats over-decorated noise every single time."
    ]
  }
];

const PROJECTS_DATA = [
  {
    "id": "yak-and-brew",
    "slug": "branding",
    "category": "Branding",
    "categorySlug": "branding",
    "title": "Yak & Brew , Coffee Identity",
    "subtitle": "Artisanal Himalayan Café Identity",
    "img": "essentials/covpic1.png",
    "carousel": "essentials/corousel.png",
    "featured": true,
    "year": "2026",
    "tags": [
      "Visual Identity",
      "Packaging",
      "Art Direction",
      "Full Carousel"
    ],
    "pov": "The central concept merges a rugged highland yak with an artisanal coffee cup to create a memorable brand mark. The visual execution relies on warm, earthy brown tones and a custom vintage serif typography to establish an inviting, rustic mood. The composition centers the whimsical character, establishing a friendly yet premium aesthetic for the café.",
    "desc": "Complete visual identity crafted for Yak&Brew, an artisanal café concept inspired by Himalayan highlands and slow-roasted coffee traditions."
  },
  {
    "id": "lays-rebrand",
    "slug": "branding",
    "category": "Branding",
    "categorySlug": "branding",
    "title": "Lay's , Flavour Campaign Concept",
    "subtitle": "Modern Packaging & Visual System",
    "img": "essentials/covpic2.png",
    "carousel": "essentials/corouseloflays.png",
    "featured": true,
    "year": "2026",
    "tags": [
      "Rebrand Concept",
      "Packaging",
      "Typography",
      "Full Carousel"
    ],
    "pov": "A dynamic advertising creative focused on kinetic energy and ingredient freshness. The composition uses a forced perspective with flying chips and raw potatoes to draw the eye toward the central Lay's mark. A vibrant blue sky contrasts with the golden yellows to maximize visual pop, while the casual script typography adds approachability.",
    "desc": "A forward-looking redesign concept of global snack giant Lay's."
  },
  {
    "id": "nutrivaan",
    "slug": "branding",
    "category": "Branding",
    "categorySlug": "branding",
    "title": "Nutrivaan , Premium Dry Fruits",
    "subtitle": "Luxury Lifestyle Dry Fruits Identity",
    "img": "essentials/covpic3.png",
    "carousel": "essentials/corouselofnutrivaan.png",
    "featured": true,
    "year": "2026",
    "tags": [
      "Luxury Packaging",
      "Brand System",
      "Lifestyle",
      "Full Carousel"
    ],
    "pov": "This packaging and brand staging focuses on organic elegance. The logo mark elegantly integrates leaf motifs into a classic serif 'N'. The layout relies on rich, golden hour lighting and deep greens to convey purity and premium quality, letting the natural textures of the walnuts and almonds take center stage in the visual hierarchy.",
    "desc": "Elevating everyday wellness snacks into gifting and luxury lifestyle packaging."
  },
  {
    "id": "lady-magazine",
    "slug": "editorial",
    "category": "Editorial",
    "categorySlug": "editorial",
    "title": "ATELIER , Fashion Magazine Cover",
    "subtitle": "Contemporary Fashion & Culture Publication",
    "img": "essentials/coverpic5.png",
    "carousel": "essentials/ladymagcorousel.png",
    "featured": true,
    "year": "2026",
    "tags": [
      "Editorial Spread",
      "Typography",
      "Fashion Layout",
      "Full Carousel"
    ],
    "pov": "A masterclass in editorial color blocking. The stark crimson red of the model's outfit perfectly aligns with the oversized masthead, creating a bold visual anchor against the muted grey background. The typographic hierarchy uses a highly elegant didone serif, with asymmetrical left-aligned supporting text to balance the central portrait.",
    "desc": "An avant-garde editorial spread and magazine concept exploring high-fashion photography."
  },
  {
    "id": "travel-magazine",
    "slug": "editorial",
    "category": "Editorial",
    "categorySlug": "editorial",
    "title": "WANDER , Mountains Issue",
    "subtitle": "Immersive Wanderlust & Photographic Essays",
    "img": "essentials/coverpic4.png",
    "carousel": "essentials/travelmagcorousel.png",
    "featured": true,
    "year": "2026",
    "tags": [
      "Publication Design",
      "Photo Essays",
      "Grid Layout",
      "Full Carousel"
    ],
    "pov": "This cover design relies on awe-inspiring photographic scale. The masthead uses a tracked-out, elegant serif that interacts subtly with the sky gradient, avoiding visual clutter. The central peak serves as a natural leading line, pulling the viewer's gaze from the lone figure up to the title, establishing a mood of isolated grandeur.",
    "desc": "Multi-page publication layout dedicated to architectural wonders."
  },
  {
    "id": "magazine-cover-01",
    "slug": "magazine-covers",
    "category": "Magazine Covers",
    "categorySlug": "editorial-covers",
    "title": "HEAVEN , Streetwear Issue",
    "subtitle": "Urban Fashion Editorial",
    "img": "essentials/MC1.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Cover Art",
      "Editorial Masthead",
      "Print"
    ],
    "pov": "This cover blends high-contrast photography with a bold, sky-textured display font. The visual hierarchy places the masthead 'HEAVEN' behind the subject to create depth, while the vibrant blue sky contrasts with the monochromatic, textured streetwear subject. The layout conveys a surreal, quick-paced fashion aesthetic.",
    "desc": "A conceptual magazine cover focusing on urban streetwear and fashion evolution."
  },
  {
    "id": "magazine-cover-02",
    "slug": "magazine-covers",
    "category": "Magazine Covers",
    "categorySlug": "editorial-covers",
    "title": "GALLERIA , Top Collection 2026",
    "subtitle": "Lookbook Cover Design",
    "img": "essentials/MC2.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Cover Design",
      "Typography",
      "Art Direction"
    ],
    "pov": "A brutalist editorial layout featuring a prominent white framing device that cuts through the subject. The 'GALLERIA' masthead utilizes a graffiti drip effect, contrasting sharply with the clean Helvetica-style secondary typography. The intentional desaturation of the model paired with bold blue accents creates a striking contemporary fashion mood.",
    "desc": "An editorial lookbook cover designed for a 2026 fashion preview collection."
  },
  {
    "id": "magazine-cover-03",
    "slug": "magazine-covers",
    "category": "Magazine Covers",
    "categorySlug": "editorial-covers",
    "title": "DEPTH , Men's Editorial",
    "subtitle": "Minimalist Portraiture Cover",
    "img": "essentials/MC3.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Culture Issue",
      "Cover Art",
      "Editorial"
    ],
    "pov": "This cover relies on a stark monochromatic grain and a bold, heavy serif masthead. The central design decision was to break the composition with a white bounding box that creates an optical illusion of depth. The layout uses generous negative space to emphasize the pull quote's introspective tone.",
    "desc": "A minimalist magazine cover exploring depth, character, and visual tension."
  },
  {
    "id": "social-post-01",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Davidoff Cool Water, Ice Concept Advertisement",
    "subtitle": "Product Visualization",
    "img": "essentials/IP4.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Instagram",
      "Carousel",
      "Feed Design"
    ],
    "pov": "Used an icy product enclosure, cool blue tones, and a frozen landscape to visually communicate freshness and intensity. The transparent ice textures add depth, while the centred perfume bottle and minimal supporting icons maintain a premium fragrance-advertising aesthetic.",
    "desc": "A premium fragrance advertisement communicating freshness and intensity through an icy product enclosure."
  },
  {
    "id": "social-post-02",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Pure Honey, Nature-Inspired Advertisement",
    "subtitle": "Organic Product Staging",
    "img": "essentials/IP5.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Feed System",
      "Brand Identity",
      "Warm Palette"
    ],
    "pov": "Combined a rich amber product palette with natural foliage, honeycomb-inspired packaging, and bee imagery to emphasise the connection between honey and nature. Dramatic lighting highlights the product, while the contrasting headline creates a clear hierarchy and reinforces the concept of natural purity.",
    "desc": "A nature-inspired honey advertisement emphasizing organic connections and natural purity."
  },
  {
    "id": "social-post-03",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Moisturizer, Skincare Product Advertisement",
    "subtitle": "Action Sports Graphic",
    "img": "essentials/IP6.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Template System",
      "Visual Guidelines",
      "Typography"
    ],
    "pov": "Created a soft, surreal product composition using a floating skincare bottle, cloud textures, and a luminous blue sphere. The warm beige background contrasts with the cool central element, establishing a clean, lightweight visual language associated with hydration and skincare.",
    "desc": "A soft, surreal skincare advertisement communicating hydration through clean, lightweight visual language."
  },
  {
    "id": "social-post-04",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Kozoku, Streetwear Campaign Poster",
    "subtitle": "Athletic Campaign Visual",
    "img": "essentials/IP7.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Scroll Stopper",
      "Micro-Content",
      "Typography"
    ],
    "pov": "Used a dark, grunge-inspired visual direction to communicate Kozoku’s edgy streetwear identity. The web-like graphics, dramatic lighting, and monochromatic palette frame the model as the focal point, while bold typography reinforces the campaign’s rebellious aesthetic.",
    "desc": "A dark, grunge-inspired campaign poster communicating an edgy streetwear identity."
  },
  {
    "id": "social-post-05",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Timeless Elegance, Jewellery Advertisement",
    "subtitle": "Tech Product Showcase",
    "img": "essentials/IP9.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "CTA Frame",
      "Conversion",
      "Social Kit"
    ],
    "pov": "Combined elegant serif typography with warm gold accents and a marble-inspired background to establish a premium jewellery aesthetic. The centred product display creates a clear visual hierarchy, while generous negative space allows the necklace to remain the hero of the composition.",
    "desc": "A premium jewellery advertisement combining elegant typography with warm gold accents."
  },
  {
    "id": "social-chess",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Chess, Open Tournament Poster",
    "subtitle": "High,Contrast Instagram Poster",
    "img": "essentials/CHESS.png",
    "featured": false,
    "year": "2026",
    "tags": [
      "Chess Tournament",
      "Instagram Feed",
      "High-Contrast",
      "Event Graphic"
    ],
    "pov": "Built the composition around oversized typography and a dramatic chess-piece silhouette to create immediate visual impact. The stark black-and-white contrast, red chess pieces, and structured event information balance bold editorial styling with practical readability.",
    "desc": "A dramatic open tournament poster balancing bold styling with practical readability."
  },
  {
    "id": "social-five-slide-grid",
    "slug": "social",
    "category": "Social Media",
    "categorySlug": "social",
    "title": "Stories of Joy , Carousel",
    "subtitle": "Narrative Social Campaign",
    "img": "essentials/soj.png",
    "carousel": "essentials/soj.png",
    "carouselMode": "horizontal",
    "featured": false,
    "year": "2026",
    "tags": [
      "Instagram Carousel",
      "5 Slides",
      "Swipe Interaction",
      "Feed System"
    ],
    "pov": "This continuous carousel layout uses overlapping elements and a warm, inviting color palette to guide the viewer through a narrative sequence. The typography is soft and approachable, and the seamless transitions between slides encourage extended user engagement.",
    "desc": "A multi-slide social media storytelling campaign focused on emotional connection."
  },
  {
    "id": "poster-01",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Breaking Bad , Character Poster",
    "subtitle": "Exhibition Poster",
    "img": "essentials/P1.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Event Poster",
      "Typography",
      "Hierarchy"
    ],
    "pov": "Used a cinematic, gritty visual treatment to capture the dark atmosphere of Breaking Bad. The muted colours, character-focused composition, and distressed textures reinforce the show's intense narrative while keeping the central figures visually prominent.",
    "desc": "A cinematic, gritty character poster capturing the dark atmosphere of Breaking Bad."
  },
  {
    "id": "poster-02",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Seedhe Maut , Music Poster",
    "subtitle": "Minimalist Art Print",
    "img": "essentials/P2.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Minimalist",
      "Editorial Print",
      "A0 Poster"
    ],
    "pov": "Combined aggressive handwritten typography with grainy monochrome photography to reflect Seedhe Maut's raw underground hip-hop identity. The rough textures and high-contrast composition give the artwork an unfiltered, rebellious energy.",
    "desc": "A raw, high-contrast music poster reflecting Seedhe Maut's underground hip-hop identity."
  },
  {
    "id": "poster-03",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Starboy , Typography Poster",
    "subtitle": "Event Poster",
    "img": "essentials/P3.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Dynamic Print",
      "Scale Contrast",
      "Loud by Design"
    ],
    "pov": "Used oversized portrait imagery, halftone textures, and red-cyan colour separation to create a bold, experimental visual style. The vertically arranged typography establishes a distinctive reading path, balancing editorial structure with energetic image treatment.",
    "desc": "A bold, experimental typography poster using oversized imagery and halftone textures."
  },
  {
    "id": "poster-04",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Nike , Speed Campaign Poster",
    "subtitle": "Architectural Poster Series",
    "img": "essentials/P4.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Typographic Art",
      "Print Exhibition",
      "Layout"
    ],
    "pov": "Translated speed and athletic movement into a visual element through sweeping directional forms behind the runner. Minimal typography, generous negative space, and a restrained colour palette keep the composition focused on motion and performance.",
    "desc": "A conceptual campaign poster focusing on speed, motion, and athletic performance."
  },
  {
    "id": "poster-05",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Randeep Hooda , Cigarette Poster",
    "subtitle": "Music Festival Key Visual",
    "img": "essentials/P5.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Monumental Type",
      "Graphic Art",
      "Wall Print"
    ],
    "pov": "Used a bold, textured background, dramatic portrait treatment, and contrasting typography to create an edgy, rebellious poster. The strong central figure and striking graphic shapes establish visual impact, while the distressed finish reinforces the raw, gritty aesthetic.",
    "desc": "An edgy, rebellious portrait poster with bold textures and contrasting typography."
  },
  {
    "id": "poster-06",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Fight Club , Movie Poster Design",
    "subtitle": "Tone & Texture Study",
    "img": "essentials/P6.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Metallic Tones",
      "Print Texture",
      "Exhibition"
    ],
    "pov": "Combined high-contrast black-and-white portraits, distressed textures, and fragmented editorial elements to reflect Fight Club’s psychological tension. The layered composition and bold typography create visual conflict, reinforcing the film’s themes of identity, control, and inner rebellion.",
    "desc": "A distressed, layered movie poster reflecting themes of psychological tension and inner rebellion."
  },
  {
    "id": "poster-07",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "DevD , Movie Poster",
    "subtitle": "Narrative Illustration",
    "img": "essentials/P7.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Asymmetry",
      "Grid Experiment",
      "Modern Print"
    ],
    "pov": "Explored a bold, high-contrast collage aesthetic using vibrant colours, layered imagery, and expressive Hindi typography. The overlapping visual elements create a dramatic, unconventional composition that reflects the film’s provocative and rebellious personality.",
    "desc": "A dramatic, unconventional movie poster featuring a bold collage aesthetic."
  },
  {
    "id": "poster-08",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Question Before You Follow , Conceptual Poster",
    "subtitle": "Optical Illusion Poster",
    "img": "essentials/P8.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Rhythm",
      "Typography",
      "Editorial Poster"
    ],
    "pov": "Used stark monochrome imagery and an intentionally unbalanced composition to challenge unquestioned beliefs. Condensed typography establishes a strong hierarchy, while selective red accents highlight key words and reinforce the poster’s message.",
    "desc": "A stark monochrome conceptual poster challenging unquestioned beliefs."
  },
  {
    "id": "poster-odyssey-pair",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "Social Commentary , Hindi Typography Poster",
    "subtitle": "Print Process Tribute",
    "img": "essentials/O1.png",
    "gallery": [
      "essentials/O1.png",
      "essentials/O2.png"
    ],
    "featured": false,
    "year": "2026",
    "tags": [
      "Poster Pair",
      "Diptych",
      "Print Series"
    ],
    "pov": "Combined distressed photographic imagery with expressive Hindi typography to communicate a socially relevant message. The textured monochrome background creates a documentary-like atmosphere, while the strong red lettering adds urgency and directs attention to the central statement.",
    "desc": "A socially relevant poster blending distressed imagery with expressive Hindi typography."
  },
  {
    "id": "poster-09",
    "slug": "posters",
    "category": "Posters",
    "categorySlug": "posters",
    "title": "The Hobbit , Movie Poster Design",
    "subtitle": "Kinetic Typography Poster",
    "img": "essentials/p9.png",
    "featured": false,
    "year": "2026",
    "tags": [
      "Graphic Poster",
      "Print",
      "Art Direction"
    ],
    "pov": "Built a character-driven composition using layered imagery and cinematic visual hierarchy. The central character anchors the layout, while the supporting figures and dramatic background create depth and establish the fantasy-adventure atmosphere.",
    "desc": "A character-driven movie poster with a cinematic visual hierarchy."
  },
  {
    "id": "thumb-01",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "India's Politics",
    "subtitle": "Documentary",
    "img": "essentials/T1.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "CTR Design",
      "16:9",
      "YouTube"
    ],
    "pov": "Documentary-style YouTube thumbnail centered on India's political landscape, using cinematic lighting, layered symbolism, and bold visual storytelling to create intrigue and drive viewer engagement.",
    "desc": "Documentary-style YouTube thumbnail centered on India's political landscape."
  },
  {
    "id": "thumb-02",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Exploring Power, Wealth, and Global Influence",
    "subtitle": "Documentary",
    "img": "essentials/T2.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Mobile First",
      "High Contrast",
      "Thumbnail"
    ],
    "pov": "Documentary-style YouTube thumbnail exploring power, wealth, and global influence through cinematic visuals, bold composition, and symbolic storytelling designed to spark curiosity and maximize engagement.",
    "desc": "Documentary-style YouTube thumbnail exploring power, wealth, and global influence."
  },
  {
    "id": "thumb-03",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Exploring Poorest Village In India",
    "subtitle": "Entertainment",
    "img": "essentials/T3.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Editorial Style",
      "Curiosity Hook",
      "CTR"
    ],
    "pov": "Travel documentary thumbnail highlighting the realities of rural India through cinematic visuals, emotional storytelling, and bold composition designed to spark curiosity and encourage viewers to explore untold stories.",
    "desc": "Travel documentary thumbnail highlighting the realities of rural India."
  },
  {
    "id": "thumb-04",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Trying Different Flights",
    "subtitle": "Entertainment",
    "img": "essentials/T4.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Color Separation",
      "Subject Isolation",
      "CTR"
    ],
    "pov": "Lifestyle and luxury-themed YouTube thumbnail showcasing the dramatic progression from economy class to private jet travel through cinematic visuals, clean composition, and compelling storytelling designed to maximize viewer engagement.",
    "desc": "Lifestyle and luxury-themed YouTube thumbnail showcasing the dramatic progression from economy class to private jet travel."
  },
  {
    "id": "thumb-05",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "24,Hour Zomato Delivery Challenge",
    "subtitle": "Entertainment",
    "img": "essentials/T5.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Storytelling",
      "Visual Hook",
      "YouTube"
    ],
    "pov": "Challenge-style YouTube thumbnail showcasing a 24-hour Zomato delivery experiment with bold visuals, dynamic composition, and cinematic editing designed to spark curiosity and maximize viewer engagement.",
    "desc": "Challenge-style YouTube thumbnail showcasing a 24-hour Zomato delivery experiment."
  },
  {
    "id": "thumb-06",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "GTA 6 Heist",
    "subtitle": "Gaming",
    "img": "essentials/T6.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Bold Typography",
      "CTR",
      "Thumbnail"
    ],
    "pov": "GTA 6-inspired heist thumbnail designed to create instant curiosity with cinematic lighting, bold typography, and a high-stakes bank robbery scene.",
    "desc": "GTA 6-inspired heist thumbnail designed to create instant curiosity."
  },
  {
    "id": "thumb-07",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "GTA 6 Livestream",
    "subtitle": "Gaming",
    "img": "essentials/T7.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Expression Hook",
      "Color Pop",
      "YouTube"
    ],
    "pov": "GTA 6-inspired livestream thumbnail featuring a cinematic close-up, vibrant lighting, and a clean composition designed to capture attention and maximize gaming livestream clicks.",
    "desc": "GTA 6-inspired livestream thumbnail featuring a cinematic close-up."
  },
  {
    "id": "thumb-08",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Valorant Character Break,down",
    "subtitle": "Gaming",
    "img": "essentials/T8.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Minimalist CTR",
      "Clean Layout",
      "Thumbnail"
    ],
    "pov": "A high-impact YouTube thumbnail created for a Valorant Omen guide. Designed with cinematic lighting, layered composition, and bold typography to instantly communicate the video's topic and attract viewers.",
    "desc": "A high-impact YouTube thumbnail created for a Valorant Omen guide."
  },
  {
    "id": "thumb-09",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Subnautica 2",
    "subtitle": "Gaming",
    "img": "essentials/T9.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Energy",
      "Action Hook",
      "YouTube"
    ],
    "pov": "Subnautica 2 gaming thumbnail featuring a cinematic deep-sea horror scene, dramatic lighting, and a terrifying leviathan encounter designed to spark curiosity and maximize video click-through rates.",
    "desc": "Subnautica 2 gaming thumbnail featuring a cinematic deep-sea horror scene."
  },
  {
    "id": "thumb-10",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Minecraft Hardcore",
    "subtitle": "Gaming",
    "img": "essentials/T10.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Dark Mode",
      "Luminescence",
      "CTR"
    ],
    "pov": "Minecraft Hardcore thumbnail showcasing the transformation from Day 1 to Day 100 with vibrant visuals, clean composition, and a compelling progression that instantly captures viewers' attention.",
    "desc": "Minecraft Hardcore thumbnail showcasing the transformation from Day 1 to Day 100."
  },
  {
    "id": "thumb-11",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Abandoned Palace",
    "subtitle": "Horror",
    "img": "essentials/T11.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Curiosity Loop",
      "Intrigue",
      "YouTube"
    ],
    "pov": "Exploration documentary thumbnail featuring a mysterious abandoned palace, cinematic horror lighting, and immersive visual storytelling designed to spark curiosity and captivate viewers at first glance.",
    "desc": "Exploration documentary thumbnail featuring a mysterious abandoned palace."
  },
  {
    "id": "thumb-12",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "\"NESSIE\" A Conspiracy",
    "subtitle": "Horror",
    "img": "essentials/T12.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Photoshop Composite",
      "Rim Light",
      "Thumbnail"
    ],
    "pov": "Mystery documentary thumbnail exploring the legend of the Loch Ness Monster through cinematic visuals, dark atmosphere, and bold typography designed to spark curiosity and maximize viewer engagement.",
    "desc": "Mystery documentary thumbnail exploring the legend of the Loch Ness Monster."
  },
  {
    "id": "thumb-13",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "AI,Powered Business Workflow",
    "subtitle": "Tech",
    "img": "essentials/T13.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Depth",
      "Atmosphere",
      "CTR"
    ],
    "pov": "Tech-focused YouTube thumbnail promoting an AI-powered business workflow with clean design, bold typography, and modern visuals crafted to maximize clicks and viewer engagement.",
    "desc": "Tech-focused YouTube thumbnail promoting an AI-powered business workflow."
  },
  {
    "id": "thumb-14",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Stock Market Growth",
    "subtitle": "Tech / Finance",
    "img": "essentials/T14.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Brand Consistency",
      "Series Kit",
      "YouTube"
    ],
    "pov": "Finance and AI-themed YouTube thumbnail showcasing stock market growth, bold visuals, and cinematic composition designed to spark curiosity, communicate value, and maximize viewer engagement.",
    "desc": "Finance and AI-themed YouTube thumbnail showcasing stock market growth."
  },
  {
    "id": "thumb-15",
    "slug": "thumbnails",
    "category": "Thumbnails",
    "categorySlug": "thumbnails",
    "title": "Apple in 2027",
    "subtitle": "Tech",
    "img": "essentials/T15.jpg",
    "featured": false,
    "year": "2026",
    "tags": [
      "Polish",
      "Final Hook",
      "CTR"
    ],
    "pov": "Tech YouTube thumbnail highlighting Apple's 2027 product lineup with bold typography, clean composition, and cinematic visuals designed to build excitement, spark curiosity, and maximize click-through rates.",
    "desc": "Tech YouTube thumbnail highlighting Apple's 2027 product lineup."
  }
];

const STUDIO_INFO = {
  name: "Yugal Vats",
  brandName: "Yugal.",
  role: "Graphic Designer & Visual Identity Specialist",
  location: "Delhi, India",
  availability: "Available for Freelance & Select Projects — 2026",
  email: "yugalbusiness26@gmail.com",
  instagram: "https://www.instagram.com/disngr._.yug?stkn=MWtwaHFsenFpemRlbA==",
  instagramHandle: "@disngr._.yug",
  behance: "https://www.behance.net/yugalvats",
  linkedin: "https://www.linkedin.com/in/yugal-vats-a57448429?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  bio: "I build visual identities across branding, packaging, editorial, and cover art — a practice equally at home on a shelf, a screen, or a thumbnail. Five disciplines, one uncompromising point of view. Delhi-based graphic designer, continuously learning through every brief, format, and new idea. I build visual work with clear thinking, sharp typography, and enough character to make people stop for a second.",
  philosophy: "Design that holds its ink before it dries.",
  tools: [
    { name: "Adobe Photoshop", category: "Compositing & Retouching", level: "Mastery" },
    { name: "Adobe Illustrator", category: "Vector Systems & Marks", level: "Mastery" },
    { name: "Adobe InDesign", category: "Editorial & Publications", level: "Advanced" },
    { name: "Typography", category: "Hierarchy & Custom Lettering", level: "Specialist" },
    { name: "Behance", category: "Case Study & Showcase", level: "Active" },
    { name: "Print Pre-Flight", category: "CMYK & Press Proofing", level: "Expert" }
  ],
  stats: [
    { number: "06", label: "Core Disciplines" },
    { number: "35+", label: "Delivered Assets" },
    { number: "100%", label: "Bespoke Design Craft" },
    { number: "Delhi", label: "Studio Hub, India" }
  ]
};

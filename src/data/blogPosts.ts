export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  heroEmoji: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "importing-textiles-from-india",
    title: "Importing Textiles from India: A Buyer's Complete Playbook",
    excerpt:
      "From cotton in Tirupur to silks in Varanasi, India offers unmatched textile variety. Here's how to source it without the typical pitfalls.",
    category: "Textiles",
    readTime: "7 min read",
    date: "April 12, 2026",
    author: "ShreySure Global Team",
    heroEmoji: "🧵",
    content: [
      {
        paragraphs: [
          "India is the world's second-largest producer of textiles and apparel, with a value chain that stretches from raw cotton fields in Gujarat to high-fashion garment hubs in Bengaluru. For international buyers, that scale is both an opportunity and a challenge. The opportunity is choice; the challenge is knowing where, exactly, to begin.",
        ],
      },
      {
        heading: "Know Your Cluster",
        paragraphs: [
          "Indian textile manufacturing is heavily clustered. Tirupur dominates knitwear, Ludhiana leads in winter wear, Surat is the powerhouse of synthetic fabrics, and Panipat is famous for home textiles. Sourcing from the right cluster gives you better pricing, faster lead times, and a supplier base that already understands the product category.",
          "Before issuing your first RFQ, narrow the geography. A buyer asking for organic cotton T-shirts will get sharper quotes from Tirupur than from a generalist trader in Mumbai.",
        ],
      },
      {
        heading: "Sample Discipline",
        paragraphs: [
          "Approved samples are the single most important reference document in textile sourcing. Every parameter, GSM, shrinkage, colorfastness, stitch density, must be measured and signed off. Without that, what arrives in your warehouse is whatever the factory felt comfortable producing.",
          "We recommend sealing two identical samples: one for the supplier, one retained by the buyer. Inspections then become objective rather than subjective.",
        ],
      },
      {
        heading: "Compliance & Certifications",
        paragraphs: [
          "European and US buyers should ask for GOTS, OEKO-TEX, or BCI certifications where applicable. For private-label retail, Sedex / SMETA audits are increasingly expected. A reliable sourcing partner will pre-qualify suppliers against these standards before introducing them to you.",
        ],
      },
      {
        heading: "The Bottom Line",
        paragraphs: [
          "Indian textiles can be exceptional value, but only when buying is structured. Cluster targeting, sample sealing, and certification verification are not optional, they are the foundation of a profitable textile import program.",
        ],
      },
    ],
  },
  {
    slug: "spices-sourcing-guide",
    title: "Sourcing Indian Spices: Quality, Origin, and Trust",
    excerpt:
      "Turmeric, cardamom, chilli, and cumin from India set the global benchmark. Here's how to verify quality before your container ships.",
    category: "Agri & Food",
    readTime: "6 min read",
    date: "April 5, 2026",
    author: "ShreySure Global Team",
    heroEmoji: "🌶️",
    content: [
      {
        paragraphs: [
          "India produces roughly 75% of the world's spice varieties, and exports them to more than 180 countries. But spice is a category where two containers from the same supplier can vary wildly, in moisture, in pungency, in pesticide load. Buying spices from India well requires a quality-first mindset.",
        ],
      },
      {
        heading: "Origin Matters",
        paragraphs: [
          "Alleppey turmeric is prized for its high curcumin content. Guntur chillies bring heat and color. Kashmiri chillies are valued for color without the burn. Malabar pepper carries a distinct aromatic profile. When you specify an origin in the contract, you anchor quality expectations.",
        ],
      },
      {
        heading: "Lab Testing is Non-Negotiable",
        paragraphs: [
          "For any commercial shipment, insist on third-party lab reports covering moisture, ash content, ASTA color value (for chillies and turmeric), curcumin %, oil content, aflatoxin, and pesticide residues per the destination market's MRLs.",
          "EU shipments in particular are scrutinized for ETO and chlorpyrifos residues. A pre-shipment lab report from an accredited lab like SGS or Eurofins is cheap insurance.",
        ],
      },
      {
        heading: "Packaging & Cold Chain",
        paragraphs: [
          "Spices are hygroscopic. Multi-layer food-grade packaging with proper barrier properties protects volatile oils and prevents moisture migration during the 30-45 day ocean transit. For premium ground spices, nitrogen flushing extends shelf-life meaningfully.",
        ],
      },
      {
        heading: "Working with the Right Exporter",
        paragraphs: [
          "Spices Board India registration, FSSAI license, and traceability to the farm-gate are baseline qualifiers. The strongest exporters share QR-traceable batch data and welcome buyer audits during peak season.",
        ],
      },
    ],
  },
  {
    slug: "handicrafts-export-trends",
    title: "Indian Handicrafts: The Export Categories Growing Fastest in 2026",
    excerpt:
      "Sustainable home decor, brass, jute, and hand-block textiles are surging. Here's where international buyers are placing their bets.",
    category: "Handicrafts",
    readTime: "5 min read",
    date: "March 28, 2026",
    author: "ShreySure Global Team",
    heroEmoji: "🪔",
    content: [
      {
        paragraphs: [
          "Indian handicrafts exports crossed USD 4.3 billion last year, and the growth is no longer driven by ethnic-niche buyers. Mainstream global retailers, from European homeware chains to North American DTC brands, are restructuring assortments around handmade, sustainable, and story-led product.",
        ],
      },
      {
        heading: "1. Sustainable Home Decor",
        paragraphs: [
          "Jute, water hyacinth, banana fibre, and recycled cotton are dominating buyer briefs. Saharanpur (wood), Moradabad (metal), and Jodhpur (mixed media) are the three clusters most actively investing in eco-certified material flows.",
        ],
      },
      {
        heading: "2. Brass & Metal Tableware",
        paragraphs: [
          "Premium hospitality and restaurant supply chains are returning to brass, copper, and hand-hammered steel for tabletop. Moradabad supplies the bulk, with rapid improvements in finishing and food-safe coatings making the category export-ready at scale.",
        ],
      },
      {
        heading: "3. Hand-Block Printed Textiles",
        paragraphs: [
          "Bagru and Sanganer (Rajasthan) hand-block prints have moved from niche boutiques into mass-market home textiles. Buyers like the natural-dye story; production capacity is finally catching up to demand.",
        ],
      },
      {
        heading: "What Buyers Should Watch",
        paragraphs: [
          "Handicrafts sit on artisan supply chains, which means capacity is genuinely finite. Booking production windows 90-120 days in advance is now standard. Buyers who plan ahead, and who pay artisans fairly, get first call on the best work.",
        ],
      },
      {
        heading: "Final Thought",
        paragraphs: [
          "Handicrafts are not commodity sourcing. Treat them as a partnership category, invest in the relationship, and the margins, the story, and the repeat buyer will follow.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

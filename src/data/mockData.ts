import { Campaign, Story, WorkDomain, Testimonial } from '../types';

export const WORK_DOMAINS: WorkDomain[] = [
  {
    id: 'animal-welfare',
    title: 'Animal Welfare',
    shortDesc: 'Rescuing injured strays, facilitating ethical adoptions, emergency veterinary care, and seasonal feeding drives.',
    fullDesc: 'Across urban neighborhoods, thousands of community animals navigate harsh road conditions, injuries, and hunger. Our volunteer network operates on-ground first-aid response, partners with compassionate local veterinarians, and runs structured sterilization and foster programs to give street animals dignity, safety, and affectionate forever homes.',
    metrics: '340+ animals treated and rehabilitated',
    keyInitiatives: [
      '24/7 Emergency on-ground volunteer triage network',
      'Community anti-rabies vaccination & sterilization camps',
      'Foster-to-adopt programs with background verifications',
      'Summer hydration bowls and winter protective jacket drives'
    ],
    imageType: 'animal-welfare'
  },
  {
    id: 'environmental-action',
    title: 'Environmental Action',
    shortDesc: 'Restoring local green covers through native afforestation, urban lake cleanups, and organic waste solutions.',
    fullDesc: 'Urbanization has fractured natural micro-ecosystems. Vetta Club coordinates regular weekend conservation drives focusing on native Miyawaki afforestation, clearing toxic plastic waste from vulnerable catchment basins, and conducting hands-on composting workshops that restore ecological resilience to neighborhood spaces.',
    metrics: '12,500+ native saplings planted with 88% survival',
    keyInitiatives: [
      'Native flora afforestation suited to local aquifers',
      'Lake shoreline desilting and plastic debris collection',
      'Community seed bomb distribution & monitoring',
      'Zero-waste household composting clinics'
    ],
    imageType: 'environment'
  },
  {
    id: 'community-development',
    title: 'Community Development',
    shortDesc: 'Supporting underserved families with nutritious food security, essential seasonal kits, and neighborhood revitalization.',
    fullDesc: 'We believe strong communities are built on empathy and mutual aid. Working in close collaboration with resident elders and local youth clubs, we address direct human vulnerabilities—from providing hygienic warm grain supplies to setting up community libraries and transforming neglected open corners into safe public pockets.',
    metrics: '1,800+ families supported during emergency periods',
    keyInitiatives: [
      'Weekend nutrition and warm grain provision drives',
      'Winter blanket and school utility distribution',
      'Revitalizing abandoned public lots into shared greenery',
      'Elderly assistance and neighborhood companionship'
    ],
    imageType: 'community'
  },
  {
    id: 'awareness-education',
    title: 'Awareness & Education',
    shortDesc: 'Empowering children and youth with compassionate animal care, environmental stewardship, and civic responsibility.',
    fullDesc: 'Sustainable generational change begins with empathy in classrooms and residential associations. We run interactive school modules, youth volunteer bootcamps, and visual documentary screenings that teach young minds how to safely interact with street animals, practice mindful consumption, and lead local change.',
    metrics: '45+ schools and community centres reached',
    keyInitiatives: [
      'School compassion curriculums on community animals',
      'Practical waste segregation and climate literacy sessions',
      'Youth civic leadership internships and field training',
      'Open neighborhood dialogues on animal co-existence'
    ],
    imageType: 'education'
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'every-paw-deserves-a-home',
    title: 'Every Paw Deserves a Home',
    category: 'Animal Welfare',
    shortDesc: 'Fund critical medical treatments, rehabilitation supplies, and foster kits for 80+ injured street pups across Bangalore.',
    fullDesc: 'Our on-ground ambulance volunteers rescue strays suffering from road fractures, tick-fever, and severe malnutrition. This campaign covers specialized trauma surgery, clean foster pens, nutritional recovery diets, and post-operative medications until each animal is safely adopted.',
    imageType: 'paw',
    targetAmount: 300000,
    raisedAmount: 246500,
    donorsCount: 318,
    daysLeft: 14,
    location: 'Bangalore & Outskirts',
    milestones: [
      'Phase 1: Emergency trauma kits distributed to 25 local responders (Completed)',
      'Phase 2: Foster pen winter insulation & medicine stock (In Progress)',
      'Phase 3: Final foster-to-adopt fair & vaccination drive (Upcoming)'
    ]
  },
  {
    id: 'clean-streets-better-communities',
    title: 'Clean Streets, Better Communities',
    category: 'Civic & Sanitation',
    shortDesc: 'Transforming 6 chronic garbage blackspots into maintained green zones with segregated bins and native plant beds.',
    fullDesc: 'Illegal dumping corners attract disease vectors, hazard stray animals with plastic ingestion, and deteriorate public living quality. We engage residents, clear tons of accumulated debris, install durable segregated bins, and paint motivational civic murals while planting hardy native shrubs.',
    imageType: 'clean',
    targetAmount: 150000,
    raisedAmount: 128400,
    donorsCount: 194,
    daysLeft: 9,
    location: 'Malleshwaram & Rajajinagar',
    milestones: [
      'Phase 1: Deep waste extraction with municipality support (Completed)',
      'Phase 2: Installation of twin-bin waste segregation hubs (Completed)',
      'Phase 3: Planting native green hedge barriers & solar pathway lamp (In Progress)'
    ]
  },
  {
    id: 'plant-today-breathe-tomorrow',
    title: 'Plant Today, Breathe Tomorrow',
    category: 'Environment',
    shortDesc: 'Planting and nurturing 2,000 native peepal, neem, and jamun saplings with drip irrigation systems before monsoon.',
    fullDesc: 'Urban heat islands are warming our residential sectors at alarming rates. Our youth volunteers collaborate with resident welfare associations to plant drought-tolerant native shade trees and establish localized community tree-parent systems that guarantee a 3-year survival tracking plan.',
    imageType: 'plant',
    targetAmount: 220000,
    raisedAmount: 204800,
    donorsCount: 265,
    daysLeft: 6,
    location: 'Outer Ring Road Green Belt',
    milestones: [
      'Phase 1: Soil pH testing and native sapling nursery sourcing (Completed)',
      'Phase 2: 1,400 tree pits excavated and compost-primed (Completed)',
      'Phase 3: Drip tubing installation and tree-guard setup (In Progress)'
    ]
  }
];

export const STORIES: Story[] = [
  {
    id: 'rescued-street-dog-found-home',
    title: 'A rescued street dog found a safe home.',
    category: 'Animal Welfare',
    date: 'September 14, 2026',
    location: 'Indiranagar, Bangalore',
    summary: 'Found shivering beside a highway flyover with a fractured paw, "Sheru" underwent 6 weeks of dedicated volunteer nursing before finding his forever family.',
    quote: '"Seeing him curl up peacefully in an armchair after weeks of trauma reminded us why every single phone call we take at midnight matters."',
    author: 'Priya Narayanan · Volunteer Coordinator',
    imageType: 'dog-rescue',
    fullStory: [
      'On a torrential Tuesday evening in late July, our emergency helpline received a distress message: a young indie dog was pinned under concrete road debris near the old flyover, unable to stand on his rear left leg.',
      'Our rapid response volunteers, Ananya and Karthik, reached the spot within thirty minutes with a soft stretcher and basic stabilization supplies. Despite immense pain, the dog wagged his tail weakly when offered warm broth.',
      'Veterinary X-rays confirmed a hairline pelvic fracture and severe tick fever. Over the next forty-five days at our temporary foster unit in Indiranagar, volunteers took rotating shifts administering daily medications, warm physiotherapy compresses, and fresh nutritious meals.',
      'By late August, "Sheru" took his first unsupported run in the garden. Just three weeks later, he was formally welcomed into a loving home with retired educator Mr. Sharma, who lost his companion last year.',
      'Today, Sheru enjoys daily morning park walks and sleeps soundly at the foot of the bed. Small actions, taken in time, write completely new stories for voiceless lives.'
    ]
  },
  {
    id: 'community-garden-transformation',
    title: 'Students turned an empty neighborhood space into a community garden.',
    category: 'Community Greenery',
    date: 'August 28, 2026',
    location: 'Malleshwaram, Bangalore',
    summary: 'A 400-square-meter corner that had gathered illegal construction rubble for seven years is now a flourishing micro-sanctuary with herbs, butterflies, and wooden benches.',
    quote: '"The elders who used to cross the road to avoid the stench now sit here every morning with their newspapers. That is our truest reward."',
    author: 'Rohan Deshmukh · Student Chapter Lead',
    imageType: 'garden',
    fullStory: [
      'For almost a decade, the vacant municipal corner on 8th Cross had decayed into an unauthorized dumping ground for discarded tiles, plastic bags, and construction gravel.',
      'During a local ward dialogue organized by Vetta Club, twelve university students living in the adjacent hostel asked a simple question: "Can we clean this up ourselves if the community stands with us?"',
      'The response was overwhelming. Over three intense weekends, fifty-two local residents—ranging from ten-year-old schoolchildren to eighty-year-old retired engineers—joined hands. We cleared 4.2 tons of compacted non-biodegradable debris.',
      'With technical guidance from an urban permaculture volunteer, the team laid rich organic compost, established raised beds of tulsi, lemongrass, curry leaves, and flowering marigolds to attract pollinators, and built four sturdy benches from reclaimed pine pallets.',
      'Today, the garden serves as a cool neighborhood sanctuary where children study outdoors and families share freshly harvested medicinal herbs.'
    ]
  },
  {
    id: 'weekend-animal-care-drive',
    title: 'Local volunteers organized a weekend animal-care drive.',
    category: 'Outreach & Health',
    date: 'August 12, 2026',
    location: 'Koramangala 4th Block',
    summary: 'Over sixty street dogs were health-screened, vaccinated, dewormed, and fitted with high-visibility reflective collars across an eight-hour grassroots neighborhood campaign.',
    quote: '"Accidents at dusk drop dramatically when drivers can spot the glow of reflective collars from fifty meters away."',
    author: 'Dr. Sameer Khan · Consulting Vet & Member',
    imageType: 'care-drive',
    fullStory: [
      'Road accidents during twilight hours are one of the leading causes of fatal injuries among free-roaming community canines. In busy residential corridors like Koramangala, poor street lighting often turns crossings hazardous.',
      'Vetta Club mobilized sixteen student teams, five licensed veterinarians, and twenty resident dog-feeders to run a synchronized preventive care drive.',
      'Working street by street, our teams identified familiar neighborhood packs, administered multivalent core vaccinations, dewormed pups, applied antiseptic fly-repellent coats to small abrasions, and fitted durable, water-resistant neon reflective collars.',
      'Local bakery owners and shopkeepers also signed up as ward caretakers, agreeing to keep clean water bowls refreshed outside their storefronts throughout the upcoming summer months.',
      'Through collaborative compassion, what could have been an overwhelming problem became a celebratory day of community pride and shared safety.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Joining Vetta Club transformed how I see my own city. Instead of just complaining about neglected street pups or garbage piles on my commute, I now have an organized, compassionate community to take direct action with every weekend.',
    name: 'Ananya Krishnan',
    role: 'Weekend Volunteer & Animal Care Lead',
    location: 'Indiranagar, Bangalore',
    yearsWithUs: 'Volunteer for 2 years',
    initials: 'AK'
  },
  {
    id: '2',
    quote: 'What sets Vetta Club apart is their transparent integrity and respect for local residents. When they proposed our community garden, they listened to our neighborhood elders at every step. Today, it has brought life back to our lane.',
    name: 'Venkatesh Murthy',
    role: 'Resident Welfare President',
    location: 'Malleshwaram 8th Cross',
    yearsWithUs: 'Community Partner',
    initials: 'VM'
  },
  {
    id: '3',
    quote: 'As a practicing veterinarian, I collaborate with many groups, but the meticulous care and post-operative follow-up that Vetta Club volunteers provide to rescued strays is genuinely heartwarming. Every rupee donated here works tirelessly.',
    name: 'Dr. Swati Sen',
    role: 'Veterinary Surgeon & Medical Advisor',
    location: 'Koramangala Companion Clinic',
    yearsWithUs: 'Partner Doctor for 3 years',
    initials: 'SS'
  }
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Lives Impacted', sublabel: 'Animals rescued, treated & community families supported' },
  { value: 120, suffix: '+', label: 'Active Volunteers', sublabel: 'Passionate citizens dedicating weekends on the ground' },
  { value: 35, suffix: '+', label: 'Community Initiatives', sublabel: 'Green spaces restored, clinics & food distributions' },
  { value: 12, suffix: '', label: 'Local Campaigns', sublabel: 'High-impact focused drives across residential wards' },
];

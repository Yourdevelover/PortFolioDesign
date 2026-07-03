import { useState } from 'react'
import type { Project } from './types'
import { CursorFollower } from './components/CursorFollower'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

const PROJECTS: Project[] = [
  {
    id: 'f1',
    title: 'Natural Beauty',
    category: 'Branding',
    year: 2026,
    client: 'Coming Soon',
    description:
      'A serene brand identity inspired by nature\'s elegance. Soft organic tones blended with refined typography for a timeless beauty aesthetic.',
    role: 'Art Director, Designer',
    image_url:
      'https://i.ibb.co.com/mFPtzHkq/Beauty-Flower-Banner.png',
    tags: ['Branding', 'Packaging', 'Identity'],
    featured: true,
    sort_order: 1,
    gallery_images: [
      'https://i.ibb.co.com/S7VR8Gj6/Beauty.png',
      'https://i.ibb.co.com/Vp5rR4wx/Beauty-Poster.png',
      'https://i.ibb.co.com/S8WRQPX/Part-Of-Beauty.png',
    ],
  },
  {
    id: 'f2',
    title: 'Classical Antiquity',
    category: 'Editorial',
    year: 2024,
    client: 'Coming Soon',
    description:
      'An editorial journey through ancient aesthetics reimagined for modern print. Sculptural forms meet contemporary layout design.',
    role: 'Editorial Designer',
    image_url:
      'https://i.ibb.co.com/LhgFGntb/Aphrodite.png',
    tags: ['Editorial', 'Print', 'Typography'],
    featured: true,
    sort_order: 2,
    gallery_images: [
      'https://i.ibb.co.com/FbsLNft6/fighter.png',
      'https://i.ibb.co.com/yG96Sv8/l-IFE.png',
      'https://i.ibb.co.com/8ZsPVVf/Letter-Efect.png',
    ],
  },
  {
    id: 'f3',
    title: 'Innovate. Create. Elevate',
    category: 'Poster',
    year: 2023,
    client: 'Coming Soon',
    description:
      'A bold poster series capturing the spirit of innovation. Dynamic compositions with raw typography and striking visual contrast.',
    role: 'Designer, Illustrator',
    image_url:
      'https://i.ibb.co.com/1V63TQT/Nike.png ',
    tags: ['Poster', 'Illustration'],
    featured: true,
    sort_order: 3,
    gallery_images: [
      'https://i.ibb.co.com/BKCQ34y2/Nike.jpg',
      'https://i.ibb.co.com/k2hc5xcs/music.png',
      'https://i.ibb.co.com/Txdg5MdM/Tote-Bage-White.png',
    ],
  },
  {
    id: 'f4',
    title: 'Beauty, Glow Outside',
    category: 'Branding',
    year: 2023,
    client: 'Coming Soon',
    description:
      'A radiant visual identity celebrating inner beauty that shines outward. Minimalist elegance with luminous color accents.',
    role: 'Creative Director',
    image_url:
      'https://i.ibb.co.com/ynKH42Mm/Glow-Outside.png',
    tags: ['Branding', 'Fashion', 'Logo'],
    featured: true,
    sort_order: 4,
    gallery_images: [
      'https://i.ibb.co.com/HDH8FX6f/Your-Face.png',
      'https://i.ibb.co.com/yG96Sv8/l-IFE.png',
      'https://i.ibb.co.com/1JKkn0Cm/Red-Fashion.png',
    ],
  },
  {
    id: 'f5',
    title: 'Waves of Creativity',
    category: 'Typography',
    year: 2024,
    client: 'Coming Soon',
    description:
      'An experimental type specimen exploring fluid letterforms inspired by ocean waves. Organic curves meet structured grid systems.',
    role: 'Type Designer',
    image_url:
      'https://i.ibb.co.com/PGD4ZJZR/Photo-Shop.png',
    tags: ['Typography', 'Print'],
    featured: false,
    sort_order: 5,
    gallery_images: [
      'https://i.ibb.co.com/7JrvHTr5/burger.png',
      'https://i.ibb.co.com/cSByYkDT/Project-Apollo.png',
      'https://i.ibb.co.com/CrqfdN9/Apollo-In-Cinema.png',
    ],
  },
  {
    id: 'f6',
    title: 'Creativity in Motion',
    category: 'Packaging',
    year: 2023,
    client: 'Coming Soon',
    description:
      'Dynamic packaging design that captures creative energy in motion. Vibrant illustrations paired with flowing typographic elements.',
    role: 'Packaging Designer',
    image_url:
      'https://i.ibb.co.com/20H3mfmT/Business.png',
    tags: ['Packaging', 'Illustration'],
    featured: false,
    sort_order: 6,
    gallery_images: [
      'https://i.ibb.co.com/JfFh4YT/knight.png',
      'https://i.ibb.co.com/5ghQzJP1/Pathblur.png',
      'https://i.ibb.co.com/yc8pNWK5/Apollo.png',
    ],
  },
  {
    id: 'f7',
    title: 'Design Beyond Limits',
    category: 'Digital',
    year: 2024,
    client: 'Coming Soon',
    description:
      'A futuristic digital identity system pushing creative boundaries. Immersive motion design with cutting-edge visual storytelling.',
    role: 'Motion Designer',
    image_url:
      'https://i.ibb.co.com/sXm2v3H/Perfect.png',
    tags: ['Digital', 'Motion', 'Branding'],
    featured: false,
    sort_order: 7,
    gallery_images: [
      'https://i.ibb.co.com/ycSz56mh/alien.png',
      'https://i.ibb.co.com/BVk53Qrr/kurvs.png',
      'https://i.ibb.co.com/JW5g3HNH/Glasss.png',
    ],
  },
  {
    id: 'f8',
    title: 'Style, Flavor, Comfort',
    category: 'Branding',
    year: 2023,
    client: 'Coming Soon',
    description:
      'A warm brand identity blending modern style with comforting flavors. Rich textures and inviting visuals for a lifestyle experience.',
    role: 'Lead Designer',
    image_url:
      'https://i.ibb.co.com/S19SGHk/Furniture.png',
    tags: ['Branding', 'Print', 'Signage'],
    featured: false,
    sort_order: 8,
    gallery_images: [
      'https://i.ibb.co.com/8LfL9Dfk/Luxury-House.png ',
      'https://i.ibb.co.com/SXLyHw0Y/Burger-Poster.png',
      'https://i.ibb.co.com/Kj4zZTss/Burgers.png',
    ],
  },
]

export default function App() {
  const [projects] = useState<Project[]>(PROJECTS)

  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#0f0e0d] text-[#f5f1ea] overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects projects={projects} />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
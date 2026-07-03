import { useState, useEffect, useCallback } from 'react'
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import type { Project } from '../types'

interface Props {
  projects: Project[]
}

const categories = ['All', 'Branding', 'Editorial', 'Poster', 'Typography', 'Digital']

export function Projects({ projects }: Props) {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#e85d2c]">Selected Work</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Projects
            </h2>
          </div>
          <p className="text-[#8a847c] max-w-sm">
            A curated selection of recent commissions and self-initiated explorations across brand identity, print, and digital.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#e85d2c] text-white'
                  : 'bg-white/5 text-[#8a847c] hover:bg-white/10 hover:text-[#f5f1ea]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-[#8a847c] text-center py-20">No projects in this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenGallery={() => setActiveProject(project)}
              />
            ))}
          </div>
        )}
      </div>

      {activeProject && (
        <Lightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onOpenGallery,
}: {
  project: Project
  index: number
  onOpenGallery: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const isOdd = index % 2 === 1
  const thumbImages = project.gallery_images.slice(0, 3)

  return (
    <article
      className={`project-card group reveal ${isOdd ? 'md:mt-20' : ''}`}
      data-hover
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1917]">
        <img
          src={project.image_url}
          alt={project.title}
          loading="lazy"
          className="project-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d]/90 via-[#0f0e0d]/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Year badge */}
        <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-[#f5f1ea]">
          {project.year}
        </div>

        {/* Image count badge */}
        {project.gallery_images.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onOpenGallery()
            }}
            className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f0e0d]/60 backdrop-blur-md text-xs text-[#f5f1ea] hover:bg-[#e85d2c] transition-colors duration-300"
          >
            <Images size={14} />
            {project.gallery_images.length + 1} photos
          </button>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#e85d2c] mb-2">{project.category}</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">{project.title}</h3>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-[#a8a298] leading-relaxed">{project.description}</p>
                {project.client && (
                  <p className="text-xs text-[#8a847c] mt-2">Client: {project.client}</p>
                )}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onOpenGallery()
              }}
              className="shrink-0 w-11 h-11 rounded-full bg-[#e85d2c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100"
              aria-label="View gallery"
            >
              <ArrowUpRight size={20} className="text-white" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-[#a8a298]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {thumbImages.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mt-3">
          {thumbImages.map((url, i) => (
            <button
              key={i}
              onClick={onOpenGallery}
              className="relative aspect-square rounded-xl overflow-hidden bg-[#1a1917] group/thumb"
            >
              <img
                src={url}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-110"
              />
              <div className="absolute inset-0 bg-[#0f0e0d]/0 group-hover/thumb:bg-[#0f0e0d]/30 transition-colors duration-300" />
            </button>
          ))}
        </div>
      )}
    </article>
  )
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const allImages = [
    { url: project.image_url, caption: 'Main image' },
    ...project.gallery_images.map((url) => ({ url, caption: '' })),
  ]
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % allImages.length)
  }, [allImages.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + allImages.length) % allImages.length)
  }, [allImages.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [next, prev, onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#0f0e0d]/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#e85d2c]">{project.category} · {project.year}</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mt-1">{project.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#e85d2c] hover:border-[#e85d2c] transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main viewer */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-20 pb-6 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>

        <figure className="max-w-2xl w-full max-h-[45vh]">
          <div className="rounded-2xl overflow-hidden bg-[#1a1917] flex items-center justify-center w-full h-full max-h-[40vh]">
            <img
              src={allImages[current].url}
              alt={allImages[current].caption}
              className="w-full h-full object-contain max-h-[40vh]"
            />
          </div>
          <figcaption className="mt-4 flex items-center justify-between">
            <p className="text-sm text-[#a8a298]">{allImages[current].caption}</p>
            <p className="text-xs text-[#5a5650]">
              {current + 1} / {allImages.length}
            </p>
          </figcaption>
        </figure>

        <button
          onClick={next}
          className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="px-6 md:px-8 pb-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                current === i
                  ? 'border-[#e85d2c] opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <img src={img.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
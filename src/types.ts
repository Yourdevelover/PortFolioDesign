export interface Project {
  id: string
  title: string
  category: string
  year: number
  client: string | null
  description: string | null
  role: string | null
  image_url: string
  tags: string[]
  featured: boolean
  sort_order: number
  gallery_images: string[]
}

export interface ProjectImage {
  id: string
  project_id: string
  image_url: string
  caption: string | null
  sort_order: number
}
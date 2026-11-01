import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream/promises'
import { Readable } from 'node:stream'

const images = [
  {
    name: 'hero-architectural.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  },
  {
    name: 'about-detail.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
  },
  {
    name: 'service-kitchen.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'service-bathroom.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'service-whole-home.jpg',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'service-flooring.jpg',
    url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'service-interior.jpg',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'project-warm-kitchen-main.jpg',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    name: 'project-warm-kitchen-detail.jpg',
    url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'project-quiet-bath-main.jpg',
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85',
  },
  {
    name: 'project-quiet-bath-detail.jpg',
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'project-connected-living-main.jpg',
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85',
  },
  {
    name: 'project-connected-living-detail.jpg',
    url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'process-consultation.jpg',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85',
  }
]

const targetDir = path.resolve(process.cwd(), 'public/images')
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

async function run() {
  console.log(`Downloading ${images.length} architectural images into ${targetDir}...`)
  for (const item of images) {
    const dest = path.join(targetDir, item.name)
    try {
      const res = await fetch(item.url)
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${item.url}`)
      const fileStream = fs.createWriteStream(dest)
      await pipeline(Readable.fromWeb(res.body), fileStream)
      console.log(`✓ Downloaded ${item.name}`)
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message)
    }
  }
  console.log('All downloads completed.')
}

run()

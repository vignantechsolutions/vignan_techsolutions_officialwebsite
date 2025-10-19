import { promises as fs } from 'fs'
import path from 'path'

export class FileManager {
  private basePath = path.join(process.cwd(), 'data', 'media')
  
  async saveMedia(feedbackId: string, files: { photos: string[], video?: string }) {
    const folderPath = path.join(this.basePath, feedbackId)
    await fs.mkdir(folderPath, { recursive: true })
    
    const savedFiles = { photos: [], video: null }
    
    // Save photos
    for (let i = 0; i < files.photos.length; i++) {
      const buffer = Buffer.from(files.photos[i].split(',')[1], 'base64')
      const filename = `photo_${i}.jpg`
      await fs.writeFile(path.join(folderPath, filename), buffer)
      savedFiles.photos.push(filename)
    }
    
    // Save video
    if (files.video) {
      const buffer = Buffer.from(files.video.split(',')[1], 'base64')
      const filename = 'video.mp4'
      await fs.writeFile(path.join(folderPath, filename), buffer)
      savedFiles.video = filename
    }
    
    return savedFiles
  }
  
  async getMediaUrls(feedbackId: string, files: { photos: string[], video?: string }) {
    return {
      photos: files.photos.map(f => `/api/media/${feedbackId}/${f}`),
      video: files.video ? `/api/media/${feedbackId}/${files.video}` : null
    }
  }
  
  async deleteMedia(feedbackId: string) {
    const folderPath = path.join(this.basePath, feedbackId)
    try {
      await fs.rm(folderPath, { recursive: true })
    } catch (error) {
      console.error('Failed to delete media folder:', error)
    }
  }
}

export const fileManager = new FileManager()
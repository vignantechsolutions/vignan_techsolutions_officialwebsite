export interface MediaItem {
  id: string
  type: 'image' | 'video' | 'text'
  name: string
  data: string
  timestamp: Date
  source: string
}

export const saveMediaToStorage = (file: File, source: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const mediaItem: MediaItem = {
        id: Date.now().toString(),
        type: file.type.startsWith('image/') ? 'image' : 'video',
        name: file.name,
        data: reader.result as string,
        timestamp: new Date(),
        source
      }
      
      const stored = JSON.parse(localStorage.getItem('savedMedia') || '[]')
      stored.push(mediaItem)
      localStorage.setItem('savedMedia', JSON.stringify(stored))
      resolve(mediaItem.id)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export const saveTextToStorage = (text: string, source: string): string => {
  const mediaItem: MediaItem = {
    id: Date.now().toString(),
    type: 'text',
    name: `Text from ${source}`,
    data: text,
    timestamp: new Date(),
    source
  }
  
  const stored = JSON.parse(localStorage.getItem('savedMedia') || '[]')
  stored.push(mediaItem)
  localStorage.setItem('savedMedia', JSON.stringify(stored))
  return mediaItem.id
}

export const getSavedMedia = (): MediaItem[] => {
  return JSON.parse(localStorage.getItem('savedMedia') || '[]')
}

export const downloadMediaFiles = (files: File[], studentName: string) => {
  files.forEach((file, index) => {
    const url = URL.createObjectURL(file)
    const a = document.createElement('a')
    a.href = url
    a.download = `${studentName}_${file.name || `media_${index + 1}`}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  })
}
class MemoryCache {
  private cache = new Map()
  private ttl = new Map()

  set(key: string, value: any, ttlMs = 300000) { // 5 min default
    this.cache.set(key, value)
    this.ttl.set(key, Date.now() + ttlMs)
  }

  get(key: string) {
    if (this.ttl.get(key) < Date.now()) {
      this.cache.delete(key)
      this.ttl.delete(key)
      return null
    }
    return this.cache.get(key)
  }

  clear() {
    this.cache.clear()
    this.ttl.clear()
  }
}

export const cache = new MemoryCache()
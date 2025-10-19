export default function Loading() {
  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-glow/30 border-t-cyan-glow rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-glow font-cyber">Loading...</p>
      </div>
    </div>
  )
}
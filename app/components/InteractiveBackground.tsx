'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function InteractiveBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create neural network grid
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const colors = []
    
    for (let i = 0; i < 2000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      )
      colors.push(0, 1, 1) // Cyan color
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    
    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    })
    
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry()
    const lineVertices = []
    
    for (let i = 0; i < vertices.length; i += 9) {
      if (i + 9 < vertices.length) {
        lineVertices.push(vertices[i], vertices[i + 1], vertices[i + 2])
        lineVertices.push(vertices[i + 3], vertices[i + 4], vertices[i + 5])
      }
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3))
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.1
    })
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    camera.position.z = 1000

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate based on mouse position
      points.rotation.x += 0.001 + mouseRef.current.y * 0.0001
      points.rotation.y += 0.001 + mouseRef.current.x * 0.0001
      lines.rotation.x += 0.0005 + mouseRef.current.y * 0.00005
      lines.rotation.y += 0.0005 + mouseRef.current.x * 0.00005
      
      // Pulse effect
      const time = Date.now() * 0.001
      material.opacity = 0.4 + Math.sin(time) * 0.2
      lineMaterial.opacity = 0.05 + Math.sin(time * 0.5) * 0.05
      
      renderer.render(scene, camera)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
}
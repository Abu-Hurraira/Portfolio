import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { Mesh } from 'three'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

function Orb({ active }: { active: boolean }) {
  const ref = useRef<Mesh>(null)
  useFrame(({ clock }) => {
    if (!active || !ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.15
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.15
  })

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.8}>
      <Sphere ref={ref} args={[1, 32, 32]} scale={1.3}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.28}
          speed={1.5}
          roughness={0.3}
          metalness={0.55}
          transparent
          opacity={0.5}
        />
      </Sphere>
      <Sphere args={[1, 16, 16]} scale={1.6}>
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.07} />
      </Sphere>
    </Float>
  )
}

export function HeroScene() {
  const reduced = usePrefersReducedMotion()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (reduced) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>
    )
  }

  return (
    <div ref={wrapRef} className="absolute inset-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={1}
        frameloop={active ? 'always' : 'never'}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 2]} intensity={1} color="#8B5CF6" />
        <Suspense fallback={null}>
          <Orb active={active} />
        </Suspense>
      </Canvas>
    </div>
  )
}

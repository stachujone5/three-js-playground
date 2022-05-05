import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Sparkles } from '@react-three/drei'

export const Box = () => {
	const mesh = useRef<THREE.Mesh>(null)

	useFrame(() => {
		if (mesh.current) {
			mesh.current.rotation.x = mesh.current.rotation.y += 0.02
		}
	})

	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshStandardMaterial attach='material' />
			<Sparkles count={50} scale={2} size={10} speed={0.5} />
		</mesh>
	)
}

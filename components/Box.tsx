import type { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

interface Props {
	position?: [x: number, y: number, z: number]
	index: number
}

export const Box = ({ position, index }: Props) => {
	const [active, setActive] = useState(false)
	const mesh = useRef<Mesh>(null)

	useFrame(() => {
		if (mesh.current) {
			mesh.current.rotation.x += Math.random() * 0.02
			mesh.current.rotation.y += Math.random() * 0.01
		}
	})

	return (
		<mesh ref={mesh} position={position} onPointerEnter={() => setActive(true)} onPointerLeave={() => setActive(false)}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={active ? 'rgb(17, 43, 60)' : 'rgb(32, 83, 117)'} />
		</mesh>
	)
}

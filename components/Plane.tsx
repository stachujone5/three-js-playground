import { useRef } from 'react'
import { DoubleSide } from 'three'

import type { Mesh } from 'three'
export const Plane = () => {
	const mesh = useRef<Mesh>(null)

	return (
		<mesh ref={mesh} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
			<planeGeometry args={[3, 3]} />
			<meshPhongMaterial color='red' side={DoubleSide} />
		</mesh>
	)
}

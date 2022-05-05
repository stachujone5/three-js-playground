import { Canvas } from '@react-three/fiber'
import { Box } from '../components/Box'
import { CanvasContainer } from '../components/styles/CanvasContainer.styled'
import { Stars } from '@react-three/drei'

const Home = () => {
	return (
		<CanvasContainer>
			<Canvas>
				<Stars />
				<Box />
			</Canvas>
		</CanvasContainer>
	)
}

export default Home

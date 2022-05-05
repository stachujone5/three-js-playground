import { Canvas } from '@react-three/fiber'
import { Box } from '../components/Box'
import { CanvasContainer } from '../components/styles/CanvasContainer.styled'

const Home = () => {
	return (
		<CanvasContainer>
			<Canvas>
				<Box />
			</Canvas>
		</CanvasContainer>
	)
}

export default Home

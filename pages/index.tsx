import { Canvas } from '@react-three/fiber'
import { Box } from '../components/Box'
// import { Plane } from '../components/Plane'
import { CanvasContainer } from '../components/styles/CanvasContainer.styled'

const Home = () => {
	return (
		<CanvasContainer>
			<Canvas>
				{[1, 1, 2, 32].map((item, index) => (
					<Box key={item} position={[index * 2, 0, 0]} index={index} />
				))}
				{/* <Plane /> */}
				<directionalLight position={[0, 0, 5]} />
			</Canvas>
		</CanvasContainer>
	)
}

export default Home

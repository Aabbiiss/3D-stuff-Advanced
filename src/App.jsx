

import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { Earth } from './components/earth';
import { Moon } from './components/moon';
import { TopSection } from './components/topSection';



const CanvasContainer = styled.div`
width: 100%;
height: 100%;
`;


const app = () => {
  return (
    <CanvasContainer>
        <TopSection/>
        <Canvas>
            <Suspense fallback={null}>
                <Earth/>
                <Moon/>
            </Suspense>
        
        </Canvas>
    </CanvasContainer>
  )
}

export default app
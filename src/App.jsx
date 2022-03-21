

import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { Earth } from './components/earth';
import { Moon } from './components/moon';
import { TopSection } from './components/topSection';
import { Mars } from './components/mars';




const CanvasContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;

`;



const app = () => {
  return (
    <>
     <TopSection/>
    <CanvasContainer>
       
       
        <Canvas>
            <Suspense fallback={null}>
                
                <Earth/>

                <Mars/>
                <Moon/>
            </Suspense>
        
        </Canvas>
    </CanvasContainer>
    </>
  )
}

export default app
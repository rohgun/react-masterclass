import styled from "styled-components";
import { motion, useMotionValue, useMotionValueEvent, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
height: 100vh;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
`;
const Box = styled(motion.div)`
width: 400px;
height: 400px;
border-radius: 40px;
background-color: white;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0,0,0,0.06); 
display: flex;
justify-content: center;
align-items: center;


font-size: 28px;

`;

const Circle = styled(motion.div)`
 background-color: #00A5FF;
 height: 100px;
 width: 100px;
 
 box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0,0,0,0.06); 

`;


function App() {
const [clicked, setClicked] = useState(false);
const toggleClicked = () => setClicked((prev => !prev));

  return (
    <Wrapper onClick={toggleClicked}>
     <Box>{!clicked ?<Circle layoutId="circle" style={{borderRadius:50}} />: null}</Box>        
     <Box>{clicked? <Circle layoutId="circle" style={{borderRadius:0, scale: 2}}  /> : null}</Box>        
    </Wrapper>
  );
}
export default App;
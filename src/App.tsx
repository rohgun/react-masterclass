import styled from "styled-components";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

const Wrapper = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
const BiggerBox = styled(motion.div)`
background-color: rgb(117,45,255);
display: flex;
justify-content: center;

align-items: center;
border-radius: 40px;
  width: 600px;
  height: 600px;
`;

const Box = styled(motion.div)`
width: 200px;
height: 200px;
display: grid;
grid-template-columns: repeat(2, 1fr);
background-color: white;
border-radius: 40px;
box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px(0,0,0,0.06);
`;



function App() {
  const x = useMotionValue(0);
  
  

  return (
    <Wrapper>
      <button onClick={() => x.set(290)}>click me</button>
      <Box style={{ x }}  drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
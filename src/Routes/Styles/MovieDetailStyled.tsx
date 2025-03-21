import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const BigMovie = styled(motion.div)`
    position: absolute;
    width: 40vw;
    height: 80vh;
    background-color: ${(props) => props.theme.black.lighter};
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    z-index: 99;
`;

export const BigCover = styled.div`
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center center;
`;

export const BigTitle = styled.h3`
    color: ${(props) => props.theme.white.lighter};
    font-size: 28px;
    padding: 20px;
    position: relative;
    top: -20px;
`;

export const Vote = styled.span`
    color: #45d169;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
`;

export const Explain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const BigOverview = styled.p`
    color: ${(props) => props.theme.white.lighter};
    padding: 20px;
    position: relative;
    top: -30px;
    width: 50%;
`;

export const Description = styled.div`
    width: 50%;
    padding: 20px 0px 20px 50px;
    position: relative;
    top: -30px;
`;

export const Subtitle = styled.span`
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
    margin-right: 5px;
`;

export const SubtitleText = styled.span`
    font-size: 14px;
`;

export const SubRow = styled.div`
    margin-bottom: 10px;
`;
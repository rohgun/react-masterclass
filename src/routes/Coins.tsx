import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
const Container = styled.div`
    padding: 0px 2 0px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
background-color: ${(props) => props.theme.cardBgColor};
color: ${(props)=> props.theme.textColor};
border-radius: 15px;
margin-bottom: 10px;
a {  
    display: flex; 
    align-items: center;
    padding:20px;   
    transiton: color 0.2s ease-in;
    
}
&:hover {
a {
    color: ${(props) => props.theme.accentColor};
}
}
`;

const Title = styled.h1`
    font-size: 48px;
    color:${props=>props.theme.accentColor}; 
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width:35px;
    height:35px;
    margin-right: 10px; 
`;
const Button = styled.button`
background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
`;


interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: "string",

}

interface ICoinsProps {
    
}

function Coins(){
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom(prev => ! prev);
   const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    return(

        <Container>
            <Helmet>
        <title>코인</title>
        
      </Helmet>
            <Header>
            <Title >코인</Title>
            <Button onClick={toggleDarkAtom}>Toggle Mode</Button>
            </Header>
            {isLoading ? (
                 <Loader>Loading...</Loader>
        ) : (
        <CoinsList>
                {data?.slice(0, 100).map(coin => (
                    <Coin key={coin.id}>
                    <Link to={{
                        pathname:`/${coin.id}`,
                        state: { name:coin.name},
                    }}
                    >
                    <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                    {coin.name}&rarr;
                    </Link>
                    </Coin>
                ))}
            </CoinsList>
        )}
        </Container>
    )
    ;
}
export default Coins;
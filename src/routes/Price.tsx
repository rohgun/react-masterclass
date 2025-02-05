import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled  from "styled-components";

interface IHistorical {
open: number;
high: number;
low: number;
close: number;
}

interface PriceProps {
  coinId:string;
}

const PriceContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const PriceHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #4CAF50;
  color: white;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #fff;
  color: black;

  &:hover {
    background-color: #f1f1f1;
  }
`;



function Price({ coinId }: PriceProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => 
    fetchCoinHistory(coinId)
);
    return <div>{isLoading ? ( "Loading price..." 

    ): ( 
    <PriceContainer>
      <PriceHeader>Price {coinId}</PriceHeader>
      <Table>
        <thead>
          <tr>   
            <Th>Open Price</Th>
            <Th>High Price</Th>
            <Th>Low Price</Th>
            <Th>Close Price</Th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <Td>${item.open}</Td>
              <Td>${item.high}</Td>
              <Td>${item.low}</Td>
              <Td>${item.close}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PriceContainer>
    )}</div>
}
  export default Price;
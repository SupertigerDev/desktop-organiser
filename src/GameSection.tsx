import { styled } from "solid-styled-components"
import { Text } from "./Text";
import "./igdb-api/index";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`;

export default function GameSection() {
  return (
    <Container>
      <GameItem name="Game 2" />
      <GameItem name="Game 2" />
      <GameItem name="Add" />
    </Container>
  )
}


const GameItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 150px;
  background: var(--container-color);
  border-radius: 8px;
  padding: 5px;
`;

interface GameItemProps {
  name: string;
  gamePath?: string;
}

function GameItem(props: GameItemProps) {
  return (
    <GameItemContainer>
      <Text>{props.name}</Text>
    </GameItemContainer>
  )
}
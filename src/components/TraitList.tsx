import TraitDots from "./TraitDots";
import ListGroup from "react-bootstrap/ListGroup";

export interface TraitListProps {
  traits: Trait[];
}

export interface Trait {
  name: string;
  value: number;
}

const TraitList = ({ traits }: TraitListProps) => {
  const traitList = traits.map((trait) => (
    <ListGroup.Item>
      {trait.name} x {trait.value}{" "}
      <TraitDots value={trait.value} dotCharacter="O" />
    </ListGroup.Item>
  ));

  return <ListGroup>{traitList}</ListGroup>;
};

export default TraitList;

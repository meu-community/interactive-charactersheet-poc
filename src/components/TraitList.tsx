import TraitBoxes from "./TraitBoxes";
import ListGroup from "react-bootstrap/ListGroup";

export interface TraitListProps {
  traits: Trait[];
}

export interface Trait {
  name: string;
  value: number;
  current?: number;
}

const TraitList = ({ traits }: TraitListProps) => {
  const traitList = traits.map((trait) => (
    <ListGroup.Item>
      {trait.name} x {trait.value}{" "}
      <TraitBoxes value={trait.value} current={trait.current} />
    </ListGroup.Item>
  ));

  return <ListGroup>{traitList}</ListGroup>;
};

export default TraitList;

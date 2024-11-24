import TraitDots from "./TraitDots";

export interface TraitListProps {
  traits: Trait[];
}

export interface Trait {
  name: string;
  value: number;
}

const TraitList = ({ traits }: TraitListProps) => {
  const traitList = traits.map((trait) => (
    <li>
      {trait.name} x {trait.value} <TraitDots value={trait.value} />
    </li>
  ));

  return <ul>{traitList}</ul>;
};

export default TraitList;

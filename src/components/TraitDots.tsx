const dotCharacter = "O";

export interface TraitDotsProps {
  value: number;
}

const TraitDots = ({ value }: TraitDotsProps) => {
  return <span>{dotCharacter.repeat(value)}</span>;
};

export default TraitDots;

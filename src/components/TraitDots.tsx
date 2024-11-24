export interface TraitDotsProps {
  value: number;
  dotCharacter: string;
}

const TraitDots = ({ value, dotCharacter }: TraitDotsProps) => {
  return <span>{dotCharacter.repeat(value)}</span>;
};

export default TraitDots;

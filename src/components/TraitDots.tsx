import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TraitDotsProps {
  value: number;
  current?: number;
}

const TraitDots = ({ value, current }: TraitDotsProps) => {
  const solidDotCount = current || 0;
  const emptyDotCount = value < solidDotCount ? 0 : value - solidDotCount;
  const solidDots = Array(solidDotCount).fill(
    <FontAwesomeIcon icon={["fas", "circle"]} />
  );
  const emptyDots = Array(emptyDotCount).fill(
    <FontAwesomeIcon icon={["far", "circle"]} />
  );
  return (
    <>
      {solidDots}
      {emptyDots}
    </>
  );
};

export default TraitDots;

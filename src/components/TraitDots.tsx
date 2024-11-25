import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TraitDotsProps {
  value: number;
  current?: number;
}

const TraitDots = ({ value, current }: TraitDotsProps) => {
  // This should work but for some reason it isn't so for now we do it the procedural way.
  // const dots = Array(value).map(() => (
  //   <FontAwesomeIcon icon={["far", "circle"]} />
  // ));
  const solidDotCount = current || 0;
  const emptyDotCount = value < solidDotCount ? 0 : value - solidDotCount;
  const dots = [];
  for (let i = 0; i <= solidDotCount - 1; i++) {
    dots.push(<FontAwesomeIcon icon={["fas", "circle"]} />);
  }
  for (let i = 0; i <= emptyDotCount - 1; i++) {
    dots.push(<FontAwesomeIcon icon={["far", "circle"]} />);
  }
  return <>{dots}</>;
};

export default TraitDots;

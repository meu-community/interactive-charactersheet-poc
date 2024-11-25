import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";

export interface TraitDotsProps {
  value: number;
  current?: number;
}

const TraitDots = ({ value, current }: TraitDotsProps) => {
  const solidDotCount = current || 0;
  const emptyDotCount = value < solidDotCount ? 0 : value - solidDotCount;
  const solidDots = Array(solidDotCount).fill(
    <FontAwesomeIcon icon={fasCircle} />
  );
  const emptyDots = Array(emptyDotCount).fill(
    <FontAwesomeIcon icon={farCircle} />
  );
  return (
    <>
      {solidDots}
      {emptyDots}
    </>
  );
};

export default TraitDots;

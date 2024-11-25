import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export interface TraitBoxProps {
  value: number;
  current?: number;
}

// Boxes are used to indicate temporary trait values whicn can be spent during
// gameplay. As you use up a trait, it gets checked. These get reset typically
// at the end of a game.

const TraitBoxes = ({ value, current }: TraitBoxProps) => {
  const checkedCount = current || 0;
  const uncheckedCount = value < checkedCount ? 0 : value - checkedCount;
  const checkedBoxes = Array(checkedCount).fill(
    <FontAwesomeIcon icon={faSquareCheck} size="lg" />
  );
  const uncheckedBoxes = Array(uncheckedCount).fill(
    <FontAwesomeIcon icon={faSquare} size="lg" />
  );
  return (
    <>
      {checkedBoxes}
      {uncheckedBoxes}
    </>
  );
};

export default TraitBoxes;

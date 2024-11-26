import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
export interface TraitBoxProps {
  value: number;
  current?: number;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

// Boxes are used to indicate temporary trait values whicn can be spent during
// gameplay. As you use up a trait, it gets checked. These get reset typically
// at the end of a game.
const TraitBoxes = ({ value, current }: TraitBoxProps) => {
  const checkedCount = current || 0;
  return (
    <StyledRating
      icon={<DisabledByDefaultOutlinedIcon fontSize="small" />}
      emptyIcon={<SquareOutlinedIcon fontSize="small" />}
      defaultValue={checkedCount}
      max={value}
    />
  );
};

export default TraitBoxes;

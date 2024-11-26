import TraitBoxes from "./TraitBoxes";

import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
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
    <TableRow>
      <TableCell align="left">
        {trait.name} x {trait.value}
      </TableCell>
      <TableCell align="left">
        <TraitBoxes value={trait.value} current={trait.current} />
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableBody>{traitList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TraitList;

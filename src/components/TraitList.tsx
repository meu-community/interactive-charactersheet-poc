import TraitBoxes from "./TraitBoxes";
import { Table } from "react-bootstrap";
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
    <tr>
      <td align="left">
        {trait.name} x {trait.value}
      </td>
      <td align="left">
        <TraitBoxes value={trait.value} current={trait.current} />
      </td>
    </tr>
  ));

  return (
    <Table hover size="sm">
      <tbody>{traitList}</tbody>
    </Table>
  );
};

export default TraitList;

import { Stuff } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItemAdmin = ({ name, quantity, condition, owner, value, id }: Stuff) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{condition}</td>
    <td>{owner}</td>
    <td>
      <a href={`/edit/${id}`}>Edit</a>
    </td>
    <td>
      $
      {value.toFixed(2)}
    </td>
  </tr>
);

export default StuffItemAdmin;

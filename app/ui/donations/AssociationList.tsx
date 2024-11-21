import { Association } from '../../@types/donation';

interface AssociationListProps {
  associations: Association[];
}

export default function AssociationList({ associations }: AssociationListProps) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Associations</h2>
      <ul>
        {associations.map(association => (
          <li key={association.id} className="mb-2">
            <h3 className="font-semibold">{association.name}</h3>
            <p className="text-sm text-gray-600">{association.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
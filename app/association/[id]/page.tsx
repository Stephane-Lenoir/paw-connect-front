import AssociationDetail from '../../ui/association/AssociationDetail';

export default function AssociationDetailPage({ params }: { params: { id: string } }) {
  return <AssociationDetail params={params} />;
}
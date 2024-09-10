interface TitleAssociationProps {
  title: string;  // Déclare un type pour les props
}

export default function TitleAssociation({ title }: TitleAssociationProps) {
  return (
    <p className="font-bold">{title}</p>  // Utilise la prop `title` pour afficher le titre de l'association
  );
}

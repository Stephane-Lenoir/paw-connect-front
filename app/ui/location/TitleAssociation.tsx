"use client";

interface TitleAssociationProps {
  title: string;
  onClick?: () => void;
}

const TitleAssociation = ({ title, onClick }: TitleAssociationProps) => {
  return (
    <h2 className="text-xl font-bold cursor-pointer" onClick={onClick}>
      {title}
    </h2>
  );
};

export default TitleAssociation;

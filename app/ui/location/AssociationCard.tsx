import CardImage from './CardImage';
import MailtoButton from './MailtoButton';
import TitleAssociation from './TitleAssociation';

export default async function AssociationCard() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 m-8">
        <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
          <CardImage />

          <div className="p-4 text-center">
            <TitleAssociation />
            <MailtoButton />
          </div>
        </div>

        <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
          <CardImage />

          <div className="p-4 text-center">
            <TitleAssociation />
            <MailtoButton />
          </div>
        </div>
      </div>
    </>
  );
}

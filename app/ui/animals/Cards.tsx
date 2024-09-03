import Link from 'next/link';
import Card from '../card/Card';

export default function Cards() {
  return (
    <>
      <div className="bg-primary-color w-4/5 mt-5 mb-5 rounded-xl">
        <h1 className="text-center text-3xl mt-6 mb-6">Affichage des animaux</h1>
        <Card />
      </div>
    </>
  );
}

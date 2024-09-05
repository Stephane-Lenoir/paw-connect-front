import Cards from './Cards';
import Filtres from './Filtres';
import Rules from './Rules';

export default function Animals() {
  return (
    <>
      <Rules />
      <div className="flex flex-wrap gap-5 justify-center items-center mb-5">
        <Filtres />
        <Cards />
      </div>
    </>
  );
}

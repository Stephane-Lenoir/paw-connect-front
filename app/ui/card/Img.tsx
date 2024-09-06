import Image from 'next/image';

export default function Img({ photo }) {
  return (
    <>
      <div className="w-full h-80 relative overflow-hidden rounded-lg">
        <Image
          src={photo}
          alt="Animal"
          layout="fill"
          objectFit="cover"
          className="bg-primary-color"
        />
      </div>
    </>
  );
}

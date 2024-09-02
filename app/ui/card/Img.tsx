import Image from 'next/image';

export default function Img() {
  return (
    <>
      <Image
        src="/chien.jpg"
        alt="Chien"
        className="h-52 bg-primary-color text-white flex items-center justify-center text-xl font-bold"
        width={500}
        height={500}
      ></Image>
    </>
  );
}

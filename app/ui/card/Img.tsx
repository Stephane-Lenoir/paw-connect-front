import Image from 'next/image';

export default function Img() {
  return (
    <>
      <Image
        src="/chien.jpg"
        alt="Chien"
        className="max-w-auto h-auto bg-primary-color text-white flex items-center justify-center text-xl font-bold"
        width={400}
        height={500}
      ></Image>
    </>
  );
}

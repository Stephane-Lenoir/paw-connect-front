import Image from 'next/image';

export default function Photo() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md">
            <Image src="/chien.jpg" alt="home-image" width={500} height={500}></Image>
          </div>
        </div>
      </div>
    </>
  );
}

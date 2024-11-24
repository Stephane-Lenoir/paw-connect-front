import Image from 'next/image';
import { ImgProps } from '../../@types/props';

export default function Img({ photo, isOpen }: ImgProps) {
  if (!photo) {
    return '';
  }

  return (
    <>
      <div className="w-full h-80 relative overflow-hidden rounded-lg">
      <Image
        src={photo}
        alt="Animal"
        fill
        style={{ objectFit: isOpen ? 'contain' : 'cover' }}
        className="bg-primary-color"
    />
      </div>
    </>
  );
}
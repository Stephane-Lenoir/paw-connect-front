import { TitleProps } from '../../@types/props';

const Title: React.FC<TitleProps> = ({ name, gender }) => {
  return (
    <>
      <p className="font-bold">
        {name}, {gender} 🐾
      </p>
    </>
  );
}

export default Title;
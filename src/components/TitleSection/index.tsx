import './style.scss';

interface TitleSectionProps {
  title: string;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <span></span>
    </div>
  );
}
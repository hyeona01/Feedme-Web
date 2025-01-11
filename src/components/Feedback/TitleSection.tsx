type TitleSectionProps = {
  title: string;
  bgColor: string;
};

const TitleSection = ({ title, bgColor }: TitleSectionProps) => {
  return (
    <section
      className={`${bgColor} pt-5 pb-4 px-6 text-black h3 rounded-b-3xl`}
    >
      {title}
    </section>
  );
};

export default TitleSection;

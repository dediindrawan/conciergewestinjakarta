export const HeadingTitle = ({ heading, title, subtitle, description }) => {
  return (
    <>
      <h1 className="uppercase">
        <span className="before-line inline-block w-8 mr-2 mb-1 border"></span>
        {heading}
        <span className="after-line inline-block w-8 ml-2 mb-1 border"></span>
      </h1>
      <h2 className="mt-4 text-xl font-semibold lg:text-3xl">{title}</h2>
      <h3 className="my-4 font-semibold">{subtitle}</h3>
      <p className="my-4">{description}</p>
    </>
  );
};

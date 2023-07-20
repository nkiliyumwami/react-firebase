/* eslint-disable react/prop-types */
const Title = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="inline-block bg-gray-200 rounded-lg font-normal mb-2 p-7">
        {title}
      </h1>
      <br />
      <h2 className="inline-block font-normal pb-5 mt-2 mb-10 border-b-2 border-gray-200 text-gray-500">
        {subtitle}
      </h2>
    </>
  );
};

export default Title;

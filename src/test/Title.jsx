import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <>
      <h1 className="bg-gray-200 inline-block rounded-lg mb-2 p-7 font-normal">
        {title}
      </h1>
      <br />
      <h2 className="inline-block font-normal pb-5 mt-2 mb-10 border-b-2 border-gray-200 text-gray-500">
        {subTitle}
      </h2>
    </>
  );
};

export default Title;

import React from "react";

type ParaProps = {
  para: string;
};
const Para = ({ para }: ParaProps) => {
  return <p>{para}</p>;
};

export default Para;

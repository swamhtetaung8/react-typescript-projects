import React from "react";

type FormProps = {
  inputCount: number | null;
  setInputCount: React.Dispatch<React.SetStateAction<number | null>>;
  setShowCount: React.Dispatch<React.SetStateAction<number>>;
};

const Form = ({ inputCount, setInputCount, setShowCount }: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCount !== null) {
      setShowCount(inputCount);
    }
    setInputCount(null);
  };

  return (
    <div className=" my-5">
      <form action="" className=" flex justify-center " onSubmit={handleSubmit}>
        <label htmlFor="paraCount" className=" self-center">
          Paragraphs:
        </label>
        <input
          type="number"
          id="paraCount"
          className=" bg-slate-300 mx-2 text-black rounded pl-2 pr-1 w-[50px]"
          value={inputCount ?? ""}
          onChange={(e) => setInputCount(Number(e.target.value))}
          required
          max={8}
          min={0}
        />
        <button className=" bg-green-500 text-white rounded-md hover:bg-green-600 py-1 px-2">
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;

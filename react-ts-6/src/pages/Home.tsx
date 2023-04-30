import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Para from "../components/Para";
import Form from "../components/Form";

const Home = () => {
  const [paraCount, setParaCount] = useState<number>(0);
  const { paras } = useSelector((state: RootState) => state.lorem);
  const [inputCount, setInputCount] = useState<number | null>(1);
  const [showCount, setShowCount] = useState<number>(0);
  return (
    <main className="flex justify-center py-20">
      <section className=" lg:w-[40%] w-[80%]">
        <h1 className="lg:text-2xl text-lg text-center ">
          TIRED OF BORING LOREM IPSUM?
        </h1>
        <Form
          inputCount={inputCount}
          setInputCount={setInputCount}
          setShowCount={setShowCount}
        />
        <div className="space-y-10 mt-10">
          {paras.slice(0, showCount).map((para) => (
            <Para key={para} para={para} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

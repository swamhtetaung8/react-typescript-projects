import React, { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import { fetchTours } from "./api/getTours";
import { useDispatch } from "react-redux";
import { storeTours } from "./redux/features/tours/tourSlice";
import { ImSpinner2 } from "react-icons/im";
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchToursInApp = () => {
    setLoading(true);
    fetchTours().then((res) => {
      dispatch(storeTours(res));
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchToursInApp();
  }, []);

  return (
    <div className=" bg-slate-200 min-h-screen flex justify-center py-20">
      {loading ? (
        <ImSpinner2 color="green" size="80px" className=" animate-spin mt-52" />
      ) : (
        <Tours fetchToursInApp={fetchToursInApp} />
      )}
    </div>
  );
};

export default App;

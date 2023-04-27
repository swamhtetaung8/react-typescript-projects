import React from "react";
import {useDispatch} from "react-redux";
import {filterMenu} from "../redux/features/menu/menuSlice";

type TabButtonProps = {
    id: number;
    name: string;
};
const TabButton = ({name}: TabButtonProps) => {
    const dispatch = useDispatch();

    return (
        <button
            className="px-3 py-1 text-white transition-all duration-500 rounded shadow-md bg-amber-500 hover:bg-amber-600"
            onClick={() => dispatch(filterMenu(name))}>
            {name}
        </button>
    );
};

export default TabButton;

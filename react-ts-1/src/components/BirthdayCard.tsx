import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../redux/store';
import BirthdayDetail from "./BirthdayDetail";
import {clearBirthdays} from "../redux/features/birthdaySlice";

const BirthdayCard = () => {
    const {birthdays} = useSelector((state: RootState) => state.birthdays)
    const dispatch = useDispatch();
    return (
        <div className="bg-white p-10 text-black space-y-8 shadow-md rounded-md w-[800px]">
            {birthdays.length > 0 &&
                <h1 className="text-3xl font-medium">You have {birthdays.length} birthdays today.</h1>}
            {birthdays.length === 0 &&
                <h1 className="text-3xl font-medium">All clear.</h1>}
            {
                birthdays?.map(birthday => (
                    <BirthdayDetail {...birthday} key={birthday.name}/>
                ))
            }
            <button onClick={() => dispatch(clearBirthdays())}
                    className=" w-full bg-purple-400 py-2 rounded-md text-white">Clear All
            </button>
        </div>
    );
};

export default BirthdayCard;
import React from 'react';

type BirthDetailProps = {
    name: string,
    image: string,
    age: number
}

const BirthdayDetail = ({name, image, age}: BirthDetailProps) => {
    return (
        <div className="w-full flex items-center gap-5">
            <img src={image} className="w-20 h-20 rounded-full object-cover" alt=""/>
            <div>
                <p className="text-2xl">{name}</p>
                <p className="text-gray-400">{age} years</p>
            </div>
        </div>
    );
};

export default BirthdayDetail;
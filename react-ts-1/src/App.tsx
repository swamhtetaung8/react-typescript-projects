import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BirthdayCard from "./components/BirthdayCard";

function App() {

    return (
        <div className=" h-screen w-full flex items-center justify-center bg-gray-900">
            <BirthdayCard/>
        </div>
    )
}

export default App

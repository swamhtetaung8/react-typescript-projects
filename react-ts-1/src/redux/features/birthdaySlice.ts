import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface birthdayState {
    birthdays: {
        name: string,
        image: string,
        age: number
    }[] | []
}

const initialState: birthdayState = {
    birthdays: [
        {
            name: "Bertie Yates",
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
            age: 29
        }, {
            name: "Hester Hogan",
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
            age: 32
        }, {
            name: "Larry Little",
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
            age: 36
        }, {
            name: "Sean Walsh",
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
            age: 34
        }, {
            name: "Lola Gardner",
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
            age: 29
        },
    ]
}

export const birthdaySlice = createSlice({
    name: 'birthdays',
    initialState,
    reducers: {
        clearBirthdays: (state) => {
            state.birthdays = []
        },
    }
})

// Action creators are generated for each case reducer function
export const {clearBirthdays} = birthdaySlice.actions

export default birthdaySlice.reducer
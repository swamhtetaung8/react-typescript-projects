import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface MenuState {
    menu: {
        id: string;
        name: string;
        detail: string;
        price: number;
        category: string;
        image: string;
    }[];
    showMenu:
        | {
        id: string;
        name: string;
        detail: string;
        price: number;
        category: string;
        image: string;
    }[]
        | [];
}

const initialState: MenuState = {
    menu: [
        {
            id: "menu01",
            name: "Buttermilk Pancakes",
            detail:
                "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            price: 15.99,
            category: "Breakfast",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
        },
        {
            id: "menu02",
            name: "Diner Double",
            detail:
                "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
            price: 13.99,
            category: "Lunch",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
        },
        {
            id: "menu03",
            name: "Godzilla Milkshake",
            detail:
                "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
            price: 6.99,
            category: "Shakes",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
        },
        {
            id: "menu04",
            name: "Country Delight",
            detail:
                "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
            price: 20.99,
            category: "Breakfast",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
        },
        {
            id: "menu05",
            name: "Egg Attack",
            detail:
                "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
            price: 22.99,
            category: "Lunch",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
        },
        {
            id: "menu06",
            name: "Oreo Dream",
            detail:
                "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
            price: 18.99,
            category: "Shakes",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
        },
        {
            id: "menu07",
            name: "Bacon Overflow",
            detail:
                "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
            price: 8.99,
            category: "Breakfast",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
        },
        {
            id: "menu08",
            name: "American Classic",
            detail:
                "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
            price: 12.99,
            category: "Lunch",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
        },
        {
            id: "menu09",
            name: "Quarantine Buddy",
            detail:
                "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
            price: 16.99,
            category: "Shakes",
            image:
                "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
        },
    ],
    showMenu: [],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        getMenu: (state) => {
            state.showMenu = state.menu;
        },
        filterMenu: (state, {payload}) => {
            if (payload === "All") {
                state.showMenu = state.menu
                return
            }
            state.showMenu = state.menu.filter((item) => item.category === payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const {getMenu, filterMenu} = menuSlice.actions;

export default menuSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            // return {...state, isLoading: true }
            state.isLoading = true
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
    }
});


// Action creators functions are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
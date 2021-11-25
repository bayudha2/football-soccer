import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    items: {},
    hero: {},
    body: {},
    score: {},
    matches: {},
    comp: {},
};

export const LandingReducer = createSlice({
    name: 'landingpage',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setError: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setHero: (state, action) => ({ ...state, hero: action.payload }),
        setData: (state, action) => ({ ...state, items: action.payload }),
        setComp: (state, action) => ({ ...state, comp: action.payload }),
        setBody: (state, action) => ({ ...state, body: action.payload }),
        setScore: (state, action) => ({ ...state, score: action.payload }),
        setMatches: (state, action) => ({ ...state, matches: action.payload }),
        reset: () => initialState,
    },
});

export default LandingReducer.reducer;

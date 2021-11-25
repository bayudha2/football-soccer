import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    items: {},
    profileTeam: {},
    profilPlayer: {},
};

export const AreaReducer = createSlice({
    name: 'area',
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
        setData: (state, action) => ({ ...state, items: action.payload }),
        setProfilTeam: (state, action) => ({ ...state, profileTeam: action.payload }),
        setProfilPlayer: (state, action) => ({ ...state, profilPlayer: action.payload }),
        reset: () => initialState,
    },
});

export default AreaReducer.reducer;

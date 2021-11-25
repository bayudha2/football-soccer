import { combineReducers } from '@reduxjs/toolkit';
import landingpage from '../pages/landingpage/reducer';
import area from '../components/partials/Area/reducer';

const rootReducer = combineReducers({
    landingpage,
    area,
});

export default rootReducer;

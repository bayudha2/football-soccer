import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutHeader from '../../components/layouts/header';
import LayoutBody from '../../components/layouts/body';

import {
    getData, getMatchData, getStandingData, getScoresData, getMatchesData,
} from './action';

function LandingPage() {
    const dispatch = useDispatch();
    const state = useSelector((reducer) => reducer.landingpage);

    useEffect(() => {
        dispatch(getData());
        dispatch(getMatchData());
        dispatch(getStandingData());
        dispatch(getScoresData());
        dispatch(getMatchesData());
    }, []); //eslint-disable-line

    return (
        <div className="bg-purple-100">
            <LayoutHeader />
            <LayoutBody
                isLoading={state.isLoading}
                dataComp={state.hero}
                data={state}
            />
            <div className="border-t bg-white">
                <div className="py-2">
                    <p className="text-center font-bold text-gray-600">Copyright 2021 • All rights reserved • SoccerAPI</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

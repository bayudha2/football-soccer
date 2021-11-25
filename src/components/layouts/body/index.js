import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import Hero from '../../partials/Hero';
import Competitions from '../../partials/Standing';
import Area from '../../partials/Area';

export const LayoutBody = (props) => {
    const {
        dataComp, isLoading, data,
    } = props;

    return (
        <>
            {
                isLoading ? (
                    <div className="h-screen w-full flex justify-center items-center">
                        <FontAwesomeIcon size="5x" icon={faCircleNotch} spin />
                    </div>
                ) : (
                    <>
                        <Hero matchData={dataComp.matches || {}} />
                        <Competitions
                            standingData={data.body.standings || {}}
                            scoreData={data.score.scorers || {}}
                            matchesData={data.matches.matches || {}}
                        />
                        <Area
                            dataComp={data.comp.competitions || {}}
                            dataTeam={data.items.teams || {}}
                        />
                    </>
                )
            }
        </>

    );
};

export default LayoutBody;

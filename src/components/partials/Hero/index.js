import React, { useState, useEffect } from 'react';

const initialMatch = {
    awayTeam: {
        id: '',
        name: '',
    },
    homeTeam: {
        id: '',
        name: '',
    },
    competition: {
        area: {
            name: '',
        },
        name: '',
    },
    matchday: '',
};
function Hero(props) {
    const [match, setMatch] = useState([initialMatch]);
    const { matchData } = props;

    useEffect(() => {
        if (matchData.length > 0) setMatch(matchData);
    }, [matchData]);
    return (
        <section className="w-8/12 mx-auto mt-10">
            <div className="lg:flex">
                <div className="p-6 bg-white rounded-md mr-0 lg:mr-4 filter drop-shadow-md mb-4 lg:mb-0">
                    <h1 className="text-gray-800 font-bold">{match[0].competition.name}</h1>
                    <p className="text-xs text-gray-600">
                        Group Stage - Matchday
                        {' '}
                        {match[0].matchday}
                        {' '}
                        of 6
                    </p>
                    <div className="flex pt-4">
                        <div>
                            <div className="p-2 lg:p-4 border-8 border-gray-300 rounded-full">
                                <img src={`https://crests.football-data.org/${match[0].homeTeam.id}.svg`} alt="club" className="h-12" />
                            </div>
                            <p className="text-center pt-2 text-sm">{match[0].homeTeam.name}</p>
                        </div>
                        <div className="my-auto mx-4">
                            <h2 className="text-center font-bold text-xl lg:text-4xl text-gray-600">VS</h2>
                            <p className="text-center text-gray-400" style={{ fontSize: 10 }}>
                                Ref:
                                {' '}
                                <span className="text-gray-600">Mustafa Eyisoy</span>
                            </p>
                        </div>
                        <div>
                            <div className="p-2 lg:p-4 border-8 border-gray-300 rounded-full">
                                <img src={`https://crests.football-data.org/${match[0].awayTeam.id}.svg`} alt="club" className="h-12" />
                            </div>
                            <p className="text-center pt-2 text-sm">{match[0].awayTeam.name}</p>
                        </div>
                    </div>
                    <div className="pt-2 mt-4 border-t border-gray-100">
                        <p className="text-center font-bold">{match[0].competition.area.name}</p>
                    </div>
                </div>
                <div>
                    <div className="flex p-6 flex-grow bg-purple-600 rounded-md overflow-hidden filter drop-shadow-md" style={{ height: 300 }}>
                        <h2 className=" my-auto font-bold text-2xl text-white">Liverpool get a great victory with Chelsea</h2>
                        <div className="hidden lg:flex">
                            <img src={`${process.env.PUBLIC_URL}/player.png`} alt="player" className="h-72" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const initialStanding = [
    {
        table: [],
    },
];

const initialScore = [];
const initialMatches = [];

function Competitions(props) {
    const { standingData, scoreData, matchesData } = props;

    const [standing, setStanding] = useState(initialStanding);
    const [score, setScore] = useState(initialScore);
    const [matches, setMatches] = useState(initialMatches);

    useEffect(() => {
        if (standingData.length > 0) {
            setStanding(standingData);
        }
        if (scoreData.length > 0) {
            setScore(scoreData);
        }
        if (matchesData.length > 0) {
            setMatches(matchesData);
        }
    }, [standingData, scoreData, matchesData]);

    const newMatches = matches.filter((item) => item.matchday === 1);

    const newDate = new Date().toISOString();

    return (
        <section className="w-8/12 mx-auto mt-10">
            <div className="lg:flex">
                <div className=" bg-white rounded-md mr-0 lg:mr-4 filter drop-shadow-md overflow-y-auto flex-1 mb-4 lg:mb-0" style={{ height: 500 }}>
                    <table className="table-auto w-96">
                        <thead>
                            <tr className="sticky top-0 z-50 bg-white">
                                <th className="border-t border-b w-1/12"> </th>
                                <th className="text-gray-400 border-t border-b w-7/12 p-4">Club</th>
                                <th className="text-gray-400 border-t border-b w-1/12">Mp</th>
                                <th className="text-gray-400 border-t border-b w-2/12">W</th>
                                <th className="text-purple-600 border-t border-b w-1/12">Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                standing[0].table.map((data, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <tr className="border-b" key={index}>
                                        <td className="text-gray-600 text-center py-4 text-sm">{data.position}</td>
                                        <td className="text-gray-600 text-left text-sm">{data.team.name}</td>
                                        <td className="text-gray-600 text-center text-sm">{data.playedGames}</td>
                                        <td className="text-gray-600 text-center text-sm">{data.won}</td>
                                        <td className="text-center bg-purple-100 text-purple-600">{data.points}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="bg-white rounded-md mr-0 lg:mr-4 filter drop-shadow-md overflow-y-auto mb-4 flex-1 lg:mb-0" style={{ height: 500 }}>
                    <div className=" p-6 rounded-t-md flex justify-between pb-2 border-b mb-2 sticky top-0 z-50 bg-white">
                        <p className="text-center text-gray-500 font-bold text-sm">Best player</p>
                        <p className="text-center text-gray-500 font-bold text-sm">Premiere League</p>
                        <p className="text-center text-gray-500 font-bold text-sm">Goals</p>
                    </div>
                    <table className="table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="w-2/6"> </th>
                                <th className="w-3/6"> </th>
                                <th className="w-1/6"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                score.map((data, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <tr className="border-b" key={index}>
                                        <td className="text-gray-600 text-center py-4 text-sm">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="text-gray-400 my-auto mr-5"
                                                size="sm"
                                            />

                                        </td>
                                        <td className="text-gray-600 text-left text-sm">{data.player.name}</td>
                                        <td className="text-purple-600 text-left text-sm">
                                            {data.numberOfGoals}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className=" bg-white rounded-md filter drop-shadow-md overflow-y-auto relative flex-1" style={{ height: 500 }}>
                    <div className=" p-6 flex justify-between pb-2 border-b mb-2 sticky top-0 z-50 bg-white">
                        <p className="text-center text-gray-500 font-bold lg:text-lg">Matchday 1</p>
                        <p className="text-center text-gray-500 font-bold lg:text-lg">{newDate.split('T')[0]}</p>
                    </div>
                    <ul className="flex justify-center items-center">
                        <div>
                            {
                                newMatches.map((data, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <li className="p-4 flex border-b pb-4" key={index}>
                                        <div>
                                            <div className="p-4">
                                                <img src={`https://crests.football-data.org/${data.awayTeam.id}.svg`} alt="club" className="h-14" />
                                            </div>
                                            <div className="w-24 truncate">
                                                <p className="text-center pt-2 text-sm">{data.awayTeam.name}</p>
                                            </div>
                                        </div>
                                        <div className="my-auto mx-1">
                                            <h2 className="text-center font-bold text-2xl text-gray-600">
                                                {data.score.fullTime.awayTeam}
                                                {' '}
                                                :
                                                {' '}
                                                {data.score.fullTime.homeTeam}
                                            </h2>
                                            <p className="text-center p-1 bg-green-100 text-xs text-green-500 rounded-md">Fulltime</p>
                                        </div>
                                        <div>
                                            <div className="p-4">
                                                <img src={`https://crests.football-data.org/${data.homeTeam.id}.svg`} alt="club" className="h-14" />
                                            </div>
                                            <div className="w-24 truncate">
                                                <p className="text-center pt-2 text-sm">{data.homeTeam.name}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Competitions;

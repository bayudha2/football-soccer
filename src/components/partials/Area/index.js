/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getTeamsData, getTeamProfileData, getPlayerProfileData } from './action';

const initialComp = [];

function Area(props) {
    const { dataComp } = props;

    const [comp, setComp] = useState(initialComp);

    const dispatch = useDispatch();
    const state = useSelector((reducer) => reducer.area);

    function reqClub(e) {
        dispatch(getTeamsData(e.currentTarget.id));
    }

    function reqTeamProfile(e) {
        dispatch(getTeamProfileData(e.currentTarget.id));
    }

    function reqPlayerProfile(e) {
        dispatch(getPlayerProfileData(e.currentTarget.id));
    }

    useEffect(() => {
        if (dataComp.length > 0) {
            setComp(dataComp);
        }
    }, [dataComp]);

    const teams = state.items.teams || [];

    const newComp = comp.filter((item) => item.id === 2000
    || item.id === 2001
    || item.id === 2003
    || item.id === 2012
    || item.id === 2013
    || item.id === 2014
    || item.id === 2015
    || item.id === 2016
    || item.id === 2017
    || item.id === 2018
    || item.id === 2019
    || item.id === 2021
    || item.id === 2152);

    const profilTeam = state.profileTeam || {};
    const profilPlayer = state.profilPlayer || {};

    return (
        <section className="pt-20 w-8/12 mx-auto">
            <h1 className="text-center font-bold text-4xl">Areas</h1>
            <p className="text-center text-sm pt-2 text-gray-500">list of avaiable areas from competitions</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-8">
                {
                    newComp.map((data, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="p-1" key={index}>
                            <div role="button" aria-hidden="true" id={data.id} tabIndex={0} onClick={(e) => reqClub(e)} className="p-2 bg-white hover:bg-purple-50 filter drop-shadow-md rounded-md h-24 flex justify-center items-center">
                                <h2 className="text-center font-bold text-2xl text-purple-500">{data.area.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-8 lg:flex">
                <div className="flex-1 mb-4 lg:mb-0">
                    <h1 className="text-center font-bold text-purple-800 text-2xl pb-2">Teams</h1>
                    <div className="rounded-md bg-white mr-4 overflow-y-auto" style={{ height: 650 }}>
                        {
                            teams.length === 0 ? (
                                <>
                                    <div className="flex justify-center items-center p-8">
                                        <img src={`${process.env.PUBLIC_URL}/fans.svg`} alt="fans" className="h-72" />
                                    </div>
                                    <p className="text-center pb-4 font-bold">Please choose area</p>

                                </>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                                    {
                                        teams.map((data, index) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <div className="p-1" key={index}>
                                                <div className="p-2 bg-white flex justify-center items-center">
                                                    <div className="p-4 transition duration-300 ease-in-out hover:bg-purple-100 cursor-pointer" tabIndex={0} aria-hidden="true" role="button" id={data.id} onClick={(e) => reqTeamProfile(e)}>
                                                        <img src={data.crestUrl} alt="club" className="h-14 mx-auto" />
                                                        <h2 className="text-center font-bold text-sm text-gray-500 pt-2">{data.shortName}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="text-center font-bold text-purple-800 text-2xl pb-2">Team profile</h1>
                    <div className="rounded-md bg-white mr-4 overflow-y-auto" style={{ height: 650 }}>
                        {
                            Object.keys(profilTeam).length === 0 ? (
                                <>
                                    <div className="flex justify-center items-center p-8">
                                        <img src={`${process.env.PUBLIC_URL}/fans.svg`} alt="fans" className="h-72" />
                                    </div>
                                    <p className="text-center pb-4 font-bold">Please choose Team</p>
                                </>
                            ) : (
                                <div>
                                    <div className="lg:flex border-b">
                                        <div className="p-4 flex justify-center items-center"><img src={profilTeam.crestUrl} alt="club" className="h-28" /></div>
                                        <div className="flex-1 flex justify-center items-center pb-2 lg:pb-0">
                                            <div>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="font-semibold text-purple-600">Name</td>
                                                            <td className="text-sm font-light">{profilTeam.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-semibold text-purple-600">address</td>
                                                            <td className="text-sm font-light">{profilTeam.address}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-semibold text-purple-600">phone</td>
                                                            <td className="text-sm font-light">{profilTeam.phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-semibold text-purple-600">email</td>
                                                            <td className="text-sm font-light">{profilTeam.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="font-semibold text-purple-600">founded</td>
                                                            <td className="text-sm font-light">1903</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                                        {
                                            profilTeam.squad.map((data, index) => (
                                                // eslint-disable-next-line react/no-array-index-key
                                                <div className="p-1" key={index}>
                                                    <div className="p-2 bg-white flex justify-center items-center">
                                                        <div id={data.id} className="p-4 transition duration-300 ease-in-out bg-purple-100" tabIndex={0} aria-hidden="true" role="button" onClick={(e) => reqPlayerProfile(e)}>
                                                            <div className="flex justify-center items-center bg-white h-16 rounded-md">
                                                                <FontAwesomeIcon
                                                                    icon={faUserAlt}
                                                                    className="text-purple-800"
                                                                    size="lg"
                                                                />
                                                            </div>
                                                            <h2 className="text-center text-xs text-gray-500 pt-2">{data.name}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-4">
                <h2 className="text-center font-bold text-purple-800 text-2xl pb-2">Player profil</h2>
                <div className="flex justify-center items-center">
                    <div className="p-2">
                        <div className="bg-white rounded-md p-6 " style={{ height: 350 }}>
                            {
                                Object.keys(profilPlayer).length === 0 ? (
                                    <>
                                        <div className="flex justify-center items-center p-8">
                                            <img src={`${process.env.PUBLIC_URL}/fans.svg`} alt="fans" className="h-72" />
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <FontAwesomeIcon
                                                icon={faUserAlt}
                                                className="text-purple-800"
                                                size="5x"
                                            />
                                        </div>
                                        <div className="pt-4">
                                            <table className="w-full">
                                                <tbody>
                                                    <tr>
                                                        <td className="p-2 lg:p-4 font-bold text-purple-500">Name</td>
                                                        <td className="p-2 lg:p-4 font-light text-center">{profilPlayer.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-2 lg:p-4 font-bold text-purple-500">Date of birth</td>
                                                        <td className="p-2 lg:p-4 font-light text-center">{profilPlayer.dateOfBirth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-2 lg:p-4 font-bold text-purple-500">Nationality</td>
                                                        <td className="p-2 lg:p-4 font-light text-center">{profilPlayer.nationality}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-2 lg:p-4 font-bold text-purple-500">Position</td>
                                                        <td className="p-2 lg:p-4 font-light text-center">{profilPlayer.position}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Area;

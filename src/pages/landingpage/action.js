import { Landing } from '../../services/api/landing';
import { LandingReducer } from './reducer';

export const getData = () => async (dispatch) => {
    dispatch(LandingReducer.actions.setLoading(true));
    Landing.get()
        .then((response) => {
            dispatch(LandingReducer.actions.setData(response.data));
            dispatch(LandingReducer.actions.setComp(response.data));
        })
        .catch(() => {
            dispatch(LandingReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(LandingReducer.actions.setLoading(false));
        });
};

export const getMatchData = () => async (dispatch) => {
    dispatch(LandingReducer.actions.setLoading(true));
    Landing.getMatch()
        .then((response) => {
            dispatch(LandingReducer.actions.setHero(response.data));
        })
        .catch(() => {
            dispatch(LandingReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(LandingReducer.actions.setLoading(false));
        });
};

export const getStandingData = () => async (dispatch) => {
    dispatch(LandingReducer.actions.setLoading(true));
    Landing.getStanding()
        .then((response) => {
            dispatch(LandingReducer.actions.setBody(response.data));
        })
        .catch(() => {
            dispatch(LandingReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(LandingReducer.actions.setLoading(false));
        });
};

export const getScoresData = () => async (dispatch) => {
    dispatch(LandingReducer.actions.setLoading(true));
    Landing.getScore()
        .then((response) => {
            dispatch(LandingReducer.actions.setScore(response.data));
        })
        .catch(() => {
            dispatch(LandingReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(LandingReducer.actions.setLoading(false));
        });
};

export const getMatchesData = () => async (dispatch) => {
    dispatch(LandingReducer.actions.setLoading(true));
    Landing.getMatches()
        .then((response) => {
            dispatch(LandingReducer.actions.setMatches(response.data));
        })
        .catch(() => {
            dispatch(LandingReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(LandingReducer.actions.setLoading(false));
        });
};

export const reset = () => async (dispatch) => {
    dispatch(LandingReducer.actions.reset());
};

export default {
    getData, getStandingData, getMatchData, reset, getMatchesData,
};

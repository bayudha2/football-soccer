import { Landing } from '../../../services/api/landing';
import { AreaReducer } from './reducer';

export const getTeamsData = (id) => async (dispatch) => {
    dispatch(AreaReducer.actions.setLoading(true));
    Landing.getTeams(id)
        .then((response) => {
            dispatch(AreaReducer.actions.setData(response.data));
        })
        .catch(() => {
            dispatch(AreaReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(AreaReducer.actions.setLoading(false));
        });
};

export const getTeamProfileData = (id) => async (dispatch) => {
    dispatch(AreaReducer.actions.setLoading(true));
    Landing.getProfilTeam(id)
        .then((response) => {
            dispatch(AreaReducer.actions.setProfilTeam(response.data));
        })
        .catch(() => {
            dispatch(AreaReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(AreaReducer.actions.setLoading(false));
        });
};

export const getPlayerProfileData = (id) => async (dispatch) => {
    dispatch(AreaReducer.actions.setLoading(true));
    Landing.getProfilPlayer(id)
        .then((response) => {
            dispatch(AreaReducer.actions.setProfilPlayer(response.data));
        })
        .catch(() => {
            dispatch(AreaReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(AreaReducer.actions.setLoading(false));
        });
};

export const reset = () => async (dispatch) => {
    dispatch(AreaReducer.actions.reset());
};

export default {
    getTeamsData, getTeamProfileData, getPlayerProfileData, reset,
};

import { get } from '../../helpers/api';

export const Landing = {
    get: () => get('competitions/'),
    getMatch: () => get('matches/'),
    getStanding: () => get('competitions/PL/standings'),
    getScore: () => get('competitions/PL/scorers'),
    getMatches: () => get('competitions/PL/matches'),

    getTeams: (id) => get(`competitions/${id}/teams`),
    getProfilTeam: (id) => get(`teams/${id}`),
    getProfilPlayer: (id) => get(`players/${id}`),
};

export default Landing;

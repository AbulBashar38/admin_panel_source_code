// home page component

import React from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import { getTeams } from '../api';
// import { TeamLogo } from '../components';

const Home = () => {
    // const { data: teams, isLoading, isError } = useQuery('teams', getTeams);
    return (
        <div className="Home">
            <h1 className="home-header">NBA Teams</h1>
            {/* {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error fetching data</h1>} */}
            <div className="home-grid">
                {/* {teams.map((team) => ( */}
                <Link to={`/team`}>
                    {/* <TeamLogo id={team.id} width="125px" /> */}
                    <h1 className="medium-header">header</h1>
                    <p className="header text-light">Pera</p>
                </Link>
                {/* ))} */}
            </div>
        </div>
    );
}

export default Home;
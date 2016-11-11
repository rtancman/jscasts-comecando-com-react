import React from 'react';
import UserRepos from './UserRepos';

const UserInfo = ({user, repos}) => {
    const userInfo = user ?
        (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle" src={user.avatar_url} alt="avatar" width="140px" height="140px" />
                    <h2>{user.login}</h2>
                    <p>{user.name}</p>
                    <p>Followers: {user.followers} / Following: {user.following}</p>
                    <p><a className="btn btn-default" href={user.html_url} role="details">View details</a></p>
                </div>
                <div className="col-lg-8">
                    <UserRepos repos={repos}/>
                </div>
            </div>
        ) : null;
    return userInfo;
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array,
};

export default UserInfo;

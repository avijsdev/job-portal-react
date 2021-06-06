import React from 'react';

import './style.css';

function GitProfile({ projects }) {
    return (
        <div className="projects">
            <p>Your Git Projects</p>
            {projects && projects.map(obj => {
                return (
                    <article className="git-detail" key={obj.html_url}>
                        <p>{obj.name}</p>
                        <p>{obj.description}</p>
                        <a href={obj.html_url} target="_blank">Navigate to Project Repo</a>
                    </article>
                )
            })}
        </div>
    )
}

export default GitProfile;
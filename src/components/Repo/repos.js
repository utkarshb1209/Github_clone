import React from "react";

import "./repo.css";
import Repository from "./repo";

const Repositories = ({ repos, user }) => (
    <section className="repositories">
        {repos.map((repo) => (
            <Repository key={repo.id} repo={repo} user={user} />
        ))}
    </section>
);

export default Repositories;
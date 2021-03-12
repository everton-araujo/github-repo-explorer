import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  language: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/everton-araujo/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}

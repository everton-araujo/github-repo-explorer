interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    language: string;
    html_url: string;
    created_at: string;
    updated_at: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  const createdAt = props.repository.created_at.replace(/[a-zA-Z]+/g, ' ');
  const updatedAt = props.repository.updated_at.replace(/[a-zA-Z]+/g, ' ');

  return(
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description ?? 'Sem Descrição'}</p>

      <p>Linguagem Principal: {props.repository.language}</p>

      <p>Criado em {createdAt}</p>
      <p>Atualizado em {updatedAt}</p>

      <a href={props.repository?.html_url}>
        Link para repositório
      </a>
    </li>
  );
}

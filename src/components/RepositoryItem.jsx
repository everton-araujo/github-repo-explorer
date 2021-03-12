export function RepositoryItem(props) {
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

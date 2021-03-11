export function RepositoryItem(props) {
  return(
    <li>
      <strong>{props.repository?.name ?? 'Nome do Repositório'}</strong>
      <p>{props.repository?.description ?? 'Descrição'}</p>

      <a href="">
        {props.repository?.link ?? 'Link para repositório'}
      </a>
    </li>
  );
}

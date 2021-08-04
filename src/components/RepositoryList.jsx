const repositoryName = "Sample 2";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <li>
          <strong>Repo Name Sample</strong>
          <p>Sample for description for that repository</p>
          <a href="">Access Repo in Github</a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Sample for description for that repository</p>
          <a href="">Access Repo in Github</a>
        </li>

        <li>
          <strong>Repo Name Sample</strong>
          <p>Sample for description for that repository</p>
          <a href="">Access Repo in Github</a>
        </li>
      </ul>
    </section>
  );
}

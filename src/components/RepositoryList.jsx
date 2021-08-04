import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Sample 1",
  description: "Sample form description",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

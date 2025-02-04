import { useFetchJson } from "../utils/util";

export default function Home() {
  const data = useFetchJson("/data/index.json");
  return (
    <div>
      <h1>Users</h1>
      <ul>{data.map((u) => <li key={u.id}>{u.name} - {u.role}</li>)}</ul>
    </div>
  );
}

export default function RoutePicker({ value, onChange }) {
  const routes = [
    { id: "all", name: "All Routes" },
    { id: "doermer", name: "Doermer" },
    { id: "canterbury", name: "Canterbury" },
    { id: "housing", name: "Housing" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-gray-700 bg-gray-900 text-white text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      aria-label="Select route"
    >
      {routes.map((r) => (
        <option
          key={r.id}
          value={r.id}
          className="bg-gray-900 text-white"
        >
          {r.name}
        </option>
      ))}
    </select>
  );
}

import { dictionary } from "@/i18n/get-dictionary";
import type { ProjectQuery } from "@/lib/projects";

export function ProjectFilters({ query, action = "/proyectos/" }: { query: ProjectQuery; action?: string }) {
  const copy = dictionary.search;
  return (
    <form action={action} method="get" className="grid gap-4 border border-line bg-white p-5 md:grid-cols-3">
      <Select label={copy.city} name="ciudad" defaultValue={query.ciudad ?? ""}>
        <option value="">{copy.all}</option>
        <option value="malaga">Málaga</option>
        <option value="santander">Santander</option>
        <option value="madrid">Madrid</option>
        <option value="ciudad-real">Ciudad Real</option>
      </Select>
      <Select label={copy.bedrooms} name="dormitorios" defaultValue={query.dormitorios ?? ""}>
        <option value="">{copy.any}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4 o más</option>
      </Select>
      <div className="flex items-end">
        <button type="submit" className="min-h-12 w-full bg-navy px-6 text-sm font-medium text-ivory">
          {copy.submit}
        </button>
      </div>
    </form>
  );
}

function Select({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm">
      {label}
      <select name={name} defaultValue={defaultValue} className="min-h-12 border border-line bg-ivory px-3">
        {children}
      </select>
    </label>
  );
}

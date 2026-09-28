import { dictionary } from "@/i18n/get-dictionary";
import { statusLabel, statusOrder, typologyLabel } from "@/lib/labels";
import type { ProjectQuery } from "@/lib/projects";
import type { ProjectStatus, Typology } from "@/types/content";

const typologies = Object.keys(typologyLabel) as Typology[];

export function ProjectFilters({ query, action = "/proyectos" }: { query: ProjectQuery; action?: string }) {
  const copy = dictionary.search;
  return (
    <form action={action} method="get" className="grid gap-4 border border-line bg-white p-5 md:grid-cols-3 lg:grid-cols-6">
      <Select label="Provincia" name="provincia" defaultValue={query.provincia ?? ""}>
        <option value="">{copy.all}</option>
        <option value="malaga">Málaga</option>
        <option value="cantabria">Cantabria</option>
        <option value="madrid">Madrid</option>
      </Select>
      <Select label={copy.city} name="ciudad" defaultValue={query.ciudad ?? ""}>
        <option value="">{copy.all}</option>
        <option value="malaga">Málaga</option>
        <option value="santander">Santander</option>
        <option value="madrid">Madrid</option>
      </Select>
      <Select label={copy.typology} name="tipologia" defaultValue={query.tipologia ?? ""}>
        <option value="">{copy.all}</option>
        {typologies.map((item) => (
          <option key={item} value={item}>
            {typologyLabel[item]}
          </option>
        ))}
      </Select>
      <Select label={copy.bedrooms} name="dormitorios" defaultValue={query.dormitorios ?? ""}>
        <option value="">{copy.any}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4 o más</option>
      </Select>
      <Select label={copy.status} name="estado" defaultValue={query.estado ?? ""}>
        <option value="">{copy.all}</option>
        {statusOrder.map((item) => (
          <option key={item} value={item}>
            {statusLabel[item as ProjectStatus]}
          </option>
        ))}
      </Select>
      <Select label={copy.sort} name="orden" defaultValue={query.orden ?? "destacadas"}>
        <option value="destacadas">Destacadas</option>
        <option value="nombre">Nombre</option>
        <option value="estado">Estado</option>
      </Select>
      <div className="flex items-end lg:col-span-6">
        <button type="submit" className="min-h-12 bg-navy px-6 text-sm font-medium text-ivory">
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

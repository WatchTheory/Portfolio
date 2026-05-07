import SkillRow from "./SkillRow";
import { skillRows } from "@/data/tech";

const SkillSection = () => {
  return (
    <section id="skills" className="w-full space-y-6">
      <div className="flex gap-3">
        <span className="text-3xl font-bold">|</span>
        <p className="text-3xl font-semibold">My Stack</p>
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-linear-to-l from-background to-transparent" />
        {skillRows.map((row) => (
          <SkillRow
            key={`${row.direction}-${row.items[0].name}`}
            skills={row.items}
            direction={row.direction}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

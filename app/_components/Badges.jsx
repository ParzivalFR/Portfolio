import { Badge } from "@/components/ui/badge";

const Badges = () => {
  return (
    <section className="flex justify-between w-60 m-auto p-1 pr-3 pl-3 bg-zinc-200/40 mt-4 rounded-full">
      <Badge className={"cursor-default "}>Imagine</Badge>
      <Badge className={"cursor-default "}>Create</Badge>
      <Badge className={"cursor-default "}>Develop</Badge>
    </section>
  );
};

export default Badges;

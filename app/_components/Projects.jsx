import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid gap-y-20 gap-x-10 grid-cols-1 center md:grid-cols-2 lg:grid-cols-3 w-full md:w-4/5 sm:m-auto"
    >
      <div className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-purple-500/20 p-5 rounded-md">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-purple-500/20 p-5 rounded-md">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-purple-500/20 p-5 rounded-md">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-purple-500/20 p-5 rounded-md">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-purple-500/20 p-5 rounded-md">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-purple-500/20 p-5 rounded-md">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

"use client";

import { useQuery } from "@tanstack/react-query";
import MotionSection from "../../motion-section";
import ProjectList from "./project-list";
import { getProjects } from "@/services/project-service";

const ProjectsPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <MotionSection delay={0.3} className="mt-28">
      {/* Header Section */}
      <div className="px-8 mb-10">
        <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Explore My Best Projects
        </h4>
        <p className="text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From interactive web applications to advanced AI integrations, each project is designed to
          deliver creative and innovative solutions. Dive into my work to see ideas come to life!
        </p>
      </div>

      {/* Projects List */}
      <ProjectList projects={data ?? []} isLoading={isLoading} isError={isError} />
    </MotionSection>
  );
};

export default ProjectsPage;
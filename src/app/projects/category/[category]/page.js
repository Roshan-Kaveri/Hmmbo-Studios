// app/projects/category/[category]/page.jsx

import NavigationBar from "@/app/components/Navigation/NavigationBar";

import Link from "next/link";
import Category from "@/app/components/Category/Category";
import ProjectCard from "@/app/components/Projects/ProjectCard";
import Footer from "@/app/components/Footer/footer";

export default function ProjectsByCategory({ params }) {
  const decodedCategory = decodeURIComponent(params.category).replace(/-/g, " ");

const projects = [
  {
    title: "AI Portfolio Website",
    description: "A sleek portfolio website powered by AI recommendations and dynamic content rendering.",
    image_url: "https://cdn.pixabay.com/photo/2025/05/11/22/31/man-9594075_1280.jpg",
    category: "Web Development",
  },
  {
    title: "TaskMaster Pro",
    description: "A productivity app for task management, scheduling, and time tracking.",
    image_url: "https://cdn.pixabay.com/photo/2025/05/11/22/31/man-9594075_1280.jpg",
    category: "Mobile App",
  },
  {
    title: "EcoShop",
    description: "An e-commerce platform focused on sustainable and eco-friendly products.",
    image_url: "https://www.spigotmc.org/data/resource_icons/91/91628.jpg",
    category: "E-commerce",
  },
  {
    title: "EduAI",
    description: "An AI-powered platform offering personalized learning experiences for students.",
    image_url: "https://example.com/images/eduai.png",
    category: "Education",
  },
  {
    title: "CryptoDash",
    description: "A dashboard for monitoring cryptocurrency trends, news, and market data in real time.",
    image_url: "https://www.spigotmc.org/data/resource_icons/107/107060.jpg",
    category: "Creative",
  },
];


  const filteredProjects = projects.filter(
    (project) =>
      decodedCategory.toLowerCase() === "all" ||
      project.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return (
    <>
      <NavigationBar />
      <div className="px-16 mb-[-80px]">
        <Category />
      </div>

      <div className="container mx-auto px-4 py-8 mb-32">
        <div className="flex flex-col mt-20 ml-12 mr-12">
          <h3 className="text-2xl font-bold mb-4 text-secondary-gradient">
            CATEGORY: {decodedCategory.toUpperCase()}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-12 mr-12">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center h-40 text-gray-500 text-lg font-medium">
              No content found in this category.
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Link href={`/projects/${index}`} key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image_url}
                  category={project.category}
                />
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import NavigationBar from "../../components/Navigation/NavigationBar";
import SearchBar from "../../components/Projects/SearchBar";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/plugins')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error('Error fetching plugins:', error));
    }, []);

    const filteredProjects = projects.filter(
        (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (category === "All" || category === "" || project.category.toLowerCase() === category.toLowerCase())
    );

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavigationBar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-6 mb-8">
                    <SearchBar setCategory={setCategory} setSearchTerm={setSearchTerm} />
                </div>
                <div className="flex flex-col mt-20 ml-12 mr-12">
                    <h3 className="text-xl mb-4 text-primary font-poppins">HIGH QUALITY CONTENT</h3>
                </div>
              
            </div>
        </>
    );
}

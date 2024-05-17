"use client";

import Header from "@/app/_components/Header";
import Spacing from "@/app/_components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ky from "ky";
import { useEffect, useState } from "react";

const Edit = ({ params }) => {
  const [fetchData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    categories: "",
    cover: null,
    images: [],
    shortDescription: "",
    description: "",
    year: "",
    skills: "",
    url: "",
  });

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUserId = localStorage.getItem("userId");

    setToken(localToken);
    setUserId(localUserId);

    const fetchData = async () => {
      try {
        const response = await ky.get(
          `http://185.157.247.55:3005/api/projects/${params.id}`
        );
        const projectData = await response.json();
        setFormData({
          title: projectData.title,
          categories: projectData.categories.join(", "), // Si c'est un tableau
          cover: projectData.cover,
          images: projectData.images,
          shortDescription: projectData.shortDescription,
          description: projectData.description,
          year: projectData.year.toString(), // Assurez-vous que c'est une chaîne de caractères
          skills: projectData.skills.join(", "), // Si c'est un tableau
          url: projectData.url,
        });
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (Array.isArray(formData[key])) {
          for (const file of formData[key]) {
            formDataToSend.append(key, file);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token available.");
      }

      await ky.post(`http://185.157.247.55:3005/api/projects/${params.id}`, {
        json: { userId },
        headers: { Authorization: `Bearer ${token}` },
        body: formDataToSend,
      });

      console.log("Projet modifié avec succès.");
    } catch (error) {
      console.error("Erreur lors de la modification du projet:", error);
    }
  };

  return (
    <>
      <Header />
      <Spacing size={50} />
      <main className="w-full sm:w-4/5 m-auto flex justify-center items-center">
        <section className="w-full">
          <form
            onSubmit={handleSubmit}
            className="w-4/5 sm:w-3/5 md:w-[400px] m-auto flex flex-col items-center gap-10 bg-background/60 p-6 rounded-lg shadow-pxl"
          >
            <div className="w-full flex flex-col gap-2 ">
              <h1 className="text-3xl text-center">Modifier un projet</h1>
              <p className="text-xs italic text-center">
                Modifiez les informations du projet.
              </p>
              <Input
                type="text"
                placeholder="Titre"
                value={formData.title}
                onChange={handleChange}
                name="title"
              />
              <Input
                type="text"
                placeholder="Catégories"
                value={formData.categories}
                onChange={handleChange}
                name="categories"
              />
              <Input
                type="text"
                placeholder="Description courte"
                value={formData.shortDescription}
                onChange={handleChange}
                name="shortDescription"
              />
              <Input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                name="description"
              />
              <Input
                type="text"
                placeholder="Année"
                value={formData.year}
                onChange={handleChange}
                name="year"
              />
              <Input
                type="text"
                placeholder="Compétences"
                value={formData.skills}
                onChange={handleChange}
                name="skills"
              />
              <Input
                type="text"
                placeholder="URL"
                value={formData.url}
                onChange={handleChange}
                name="url"
              />
              <Input type="file" onChange={handleFileChange} name="cover" />
              <Input
                type="file"
                onChange={handleFileChange}
                name="images"
                multiple
              />
              <Button type="submit">Modifier</Button>
            </div>
          </form>
        </section>
      </main>
      <Spacing size={500} />
    </>
  );
};

export default Edit;

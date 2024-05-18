"use client";

import Header from "@/app/_components/Header";
import Spacing from "@/app/_components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Divider } from "@nextui-org/divider";
import ky from "ky";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddProjectForm = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    setUserId(localUserId);
    setFormData((prevState) => ({
      ...prevState,
      userId: localUserId,
    }));
  }, []);

  const [formData, setFormData] = useState({
    userId,
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

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "images" ? [...e.target.files] : e.target.files[0],
      }));
    } else if (name === "skills") {
      // Séparer les compétences par des virgules et les stocker comme un tableau
      const skillsArray = value.split(",").map((skill) => skill.trim());
      setFormData((prevState) => ({
        ...prevState,
        [name]: skillsArray,
      }));
    } else if (name === "categories") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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

      // Utilisation de ky pour envoyer la requête POST
      ky.post("https://parzival.fun/api/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Projet ajouté avec succès:", data);
          setFormData({
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
          Swal.fire({
            icon: "success",
            title: "Projet ajouté !",
            text: `Le projet ${data.title} a bien été ajouté avec succès.`,
            showConfirmButton: false,
            timer: 2000,
          });
          router.push("/");
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout du projet:", error);
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: ` Une erreur est survenue lors de l'ajout du projet: ${error.message}`,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet:", error);
    }
  };

  return (
    <>
      <Header />
      <Spacing size={50} />
      <form
        onSubmit={handleSubmit}
        className="w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 m-auto flex flex-col gap-4 bg-background/60 p-6 rounded-lg shadow-pxl"
      >
        <div className="w-full flex flex-col gap-2 ">
          <h1 className="text-3xl text-center">Ajouter un Projet</h1>
          <p className="text-xs italic text-center">
            Remplissez le formulaire pour ajouter un nouveau projet.
          </p>
        </div>
        <Spacing size={20} />
        <Divider className="w-4/5 lg:w-3/5 h-px m-auto bg-primary rounded" />
        <Spacing size={40} />
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Titre</Label>
            <Input
              className="bg-secondary/50 text-current"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Titre du projet"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="categories">Catégorie</Label>
            <select
              name="categories"
              id="categories"
              onChange={handleChange}
              className="bg-secondary/50 text-sm text-current rounded-lg p-2 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-opacity-50"
            >
              <option value="" disabled selected>
                Sélectionner la catégorie...
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 text-center lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cover" className=" truncate">
              Image de couverture
            </Label>
            <Input
              className="lg:pb-14 lg:pt-10 cursor-pointer text-center bg-secondary/50 text-current"
              type="file"
              name="cover"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="images">Images</Label>
            <Input
              className="lg:pb-14 lg:pt-10 cursor-pointer text-center bg-secondary/50 text-current"
              type="file"
              name="images"
              onChange={handleChange}
              multiple
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="shortDescription">Description courte</Label>
          <Textarea
            className="bg-secondary/50 text-current"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Description du projet (courte)"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="bg-secondary/50 text-current"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description du projet (longue)"
            required
          />
        </div>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="year">Année de création</Label>
            <Input
              className="bg-secondary/50 text-current"
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Année de création"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="skills">Compétences</Label>
            <Input
              className="bg-secondary/50 text-current"
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills utilisés (Séparés par des virgules)"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="url">URL</Label>
          <Input
            className="bg-secondary/50 text-current"
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Lien du projet"
            required
          />
        </div>
        <Spacing size={10} />
        <Divider className="w-4/5 lg:w-3/5 h-[0.5px] m-auto bg-primary rounded" />
        <Spacing size={5} />
        <Button type="submit" className="w-[100px] lg:w-2/5 m-auto">
          Soumettre
        </Button>
      </form>
      <Spacing size={100} />
    </>
  );
};

export default AddProjectForm;

"use client";

import Header from "@/app/_components/Header";
import Spacing from "@/app/_components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Divider } from "@nextui-org/divider";
import ky from "ky";
import { marked } from "marked";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import Swal from "sweetalert2";

const EditProjectForm = () => {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    userId: "",
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

  const [currentImages, setCurrentImages] = useState([]);
  const [currentCover, setCurrentCover] = useState(null);

  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    setFormData((prevState) => ({
      ...prevState,
      userId: localUserId,
    }));

    // Fetch project data
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token available.");

        const project = await ky
          .get(`https://parzival.fun/api/projects/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .json();

        setFormData((prevState) => ({
          ...prevState,
          ...project,
          skills: project.skills.join(","),
        }));
        setCurrentImages(project.images || []);
        setCurrentCover(project.cover || null);
      } catch (error) {
        console.error("Error fetching project data:", error);
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: `Une erreur est survenue lors de la récupération des données du projet: ${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "images" ? [...files] : files[0],
      }));
    } else if (name === "skills") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.split(",").map((skill) => skill.trim()),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleDeleteImage = (image) => {
    setCurrentImages(currentImages.filter((img) => img !== image));
  };

  const handleDeleteCover = () => {
    setCurrentCover(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmation = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Voulez-vous vraiment modifier ce projet ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
    });

    if (!confirmation.isConfirmed) {
      Swal.fire({
        icon: "info",
        title: "Opération annulée",
        text: "La modification du projet a été annulée.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((file) => formDataToSend.append(key, file));
        } else {
          const value =
            key === "description" ? marked(formData[key]) : formData[key];
          formDataToSend.append(key, value);
        }
      }

      formDataToSend.append("currentImages", JSON.stringify(currentImages));
      formDataToSend.append("currentCover", currentCover);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token available.");

      const response = await ky
        .put(`https://parzival.fun/api/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        })
        .json();

      console.log("Projet modifié avec succès:", response);

      Swal.fire({
        icon: "success",
        title: "Projet modifié !",
        text: "Le projet a bien été modifié avec succès.",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push(`/pages/projects/${id}`);
    } catch (error) {
      console.error("Erreur lors de la modification du projet:", error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: `Une erreur est survenue lors de la modification du projet: ${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const renderInputField = (
    name,
    label,
    type = "text",
    placeholder = "",
    additionalProps = {}
  ) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        className="bg-secondary/50 text-current"
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        {...additionalProps}
      />
    </div>
  );

  const renderTextareaField = (name, label, placeholder = "") => (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        className="bg-secondary/50 text-current"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <>
      <Header />
      <Spacing size={50} />
      <form
        onSubmit={handleSubmit}
        className="w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 m-auto flex flex-col gap-4 bg-background/60 p-6 rounded-lg shadow-pxl"
      >
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-3xl text-center">Modifier le Projet</h1>
          <p className="text-xs italic text-center">
            Modifiez les informations du projet ci-dessous.
          </p>
        </div>
        <Spacing size={20} />
        <Divider className="w-4/5 lg:w-3/5 h-px m-auto bg-primary rounded" />
        <Spacing size={40} />
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
          {renderInputField("title", "Titre", "text", "Titre du projet", {
            required: true,
          })}
          <div className="flex flex-col gap-2">
            <Label htmlFor="categories">Catégorie</Label>
            <select
              name="categories"
              id="categories"
              value={formData.categories}
              onChange={handleChange}
              className="bg-secondary/50 text-sm text-current rounded-lg p-2 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-opacity-50"
              required
            >
              <option value="" disabled>
                Sélectionner la catégorie...
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Optimisation">Optimisation</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 bg-secondary/50 rounded-lg border boder-foreground/10">
          <Label>Image de couverture actuelle</Label>
          {currentCover ? (
            <div className="relative">
              <img
                src={currentCover}
                alt="Image de couverture"
                className="rounded-lg"
              />
              <Button
                type="button"
                className="absolute top-2 right-2 p-2 hover:bg-secondary/60 transition-colors duration-500 ease-in-out"
                onClick={handleDeleteCover}
              >
                <MdDeleteForever size={20} />
              </Button>
            </div>
          ) : (
            <p className="py-4 text-red-500">Aucune image de couverture</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cover" className="truncate">
            Nouvelle image de couverture
          </Label>
          <Input
            className="lg:pb-14 lg:pt-10 cursor-pointer text-center bg-secondary/50 text-current"
            type="file"
            name="cover"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 p-4 bg-secondary/50 rounded-lg border border-foreground/10">
          <Label>Images actuelles</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.length > 0 ? (
              currentImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Project image ${index}`}
                    className="rounded-lg"
                  />
                  <Button
                    type="button"
                    className="absolute top-2 right-2 p-2 hover:bg-secondary/60 transition-colors duration-500 ease-in-out"
                    onClick={() => handleDeleteImage(image)}
                  >
                    <MdDeleteForever size={20} />
                  </Button>
                </div>
              ))
            ) : (
              <p className="py-4 text-red-500">Aucune image</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="images">Ajouter des images</Label>
          <Input
            className="lg:pb-14 lg:pt-10 cursor-pointer text-center bg-secondary/50 text-current"
            type="file"
            name="images"
            onChange={handleChange}
            multiple
          />
        </div>
        {renderTextareaField(
          "shortDescription",
          "Description courte",
          "Description du projet (courte)"
        )}
        {renderTextareaField(
          "description",
          "Description",
          "Description du projet (longue)"
        )}
        <div className="flex flex-col gap-2">
          <Label htmlFor="year">Prévisualisation</Label>
          <ReactMarkdown className="bg-secondary/50 min-h-24 text-current p-2 rounded-lg">
            {formData.description}
          </ReactMarkdown>
        </div>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
          {renderInputField(
            "year",
            "Année de création",
            "number",
            "Année de création",
            { required: true }
          )}
          {renderInputField(
            "skills",
            "Compétences",
            "text",
            "Skills utilisés (Séparés par des virgules)",
            { required: true }
          )}
        </div>
        {renderInputField("url", "URL", "text", "Lien du projet", {
          required: true,
        })}
        <Spacing size={10} />
        <Divider className="w-4/5 lg:w-3/5 h-[0.5px] m-auto bg-primary rounded" />
        <Spacing size={5} />
        <Button type="submit" className="w-[100px] lg:w-2/5 m-auto">
          Modifier
        </Button>
      </form>
      <Spacing size={100} />
    </>
  );
};

export default EditProjectForm;

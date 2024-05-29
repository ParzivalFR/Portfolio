"use client";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Spacing from "@/app/_components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Divider } from "@nextui-org/divider";
import ky from "ky";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
    deletedImages: [],
  });

  useEffect(() => {
    const fetchProjectData = async () => {
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
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération du projet:", error);
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: `Une erreur est survenue lors de la récupération du projet: ${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    };

    fetchProjectData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "images") {
        setFormData((prevState) => ({
          ...prevState,
          images: [...prevState.images, ...files],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: files[0],
        }));
      }
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

  const handleRemoveImage = (image) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((img) => img !== image),
      deletedImages: [...prevState.deletedImages, image],
    }));
  };

  const handleRemoveCover = () => {
    setFormData((prevState) => ({
      ...prevState,
      cover: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((file) => formDataToSend.append(key, file));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      formDataToSend.append(
        "deletedImages",
        JSON.stringify(formData.deletedImages)
      );

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

      console.log("Projet mis à jour avec succès:", response);
      Swal.fire({
        icon: "success",
        title: "Projet mis à jour !",
        text: "Le projet a bien été mis à jour avec succès.",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet:", error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: `Une erreur est survenue lors de la mise à jour du projet: ${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const resetForm = () => {
    setFormData({
      userId: formData.userId,
      title: "",
      categories: "",
      cover: null,
      images: [],
      shortDescription: "",
      description: "",
      year: "",
      skills: "",
      url: "",
      deletedImages: [],
    });
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
          <h1 className="text-3xl text-center">Modifier un Projet</h1>
          <p className="text-xs italic text-center">
            Modifiez les champs pour mettre à jour le projet.
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
        <div className="grid grid-cols-1 gap-5 text-center lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cover" className="truncate">
              Image de couverture
            </Label>
            <Input
              className="lg:pb-14 lg:pt-10 cursor-pointer text-center bg-secondary/50 text-current"
              type="file"
              name="cover"
              onChange={handleChange}
              // required
            />
            <div className="flex rounded-sm overflow-hidden gap-2 mt-2">
              {formData.cover && (
                <div className="relative rounded-sm overflow-hidden">
                  <img
                    src={
                      formData.cover instanceof File
                        ? URL.createObjectURL(formData.cover)
                        : formData.cover
                    }
                    alt="Cover"
                    className="object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 px-2 bg-red-500 text-white text-sm rounded"
                    onClick={() => handleRemoveCover()}
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="images">Images</Label>
            <Input
              className="lg:pb-14 lg:pt-10 cursor-pointer text-center bg-secondary/50 text-current"
              type="file"
              name="images"
              onChange={handleChange}
              multiple
              // required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2">
              {formData.images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-sm overflow-hidden"
                >
                  <img
                    src={
                      image instanceof File ? URL.createObjectURL(image) : image
                    }
                    alt={`Image ${index + 1}`}
                    className="object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 px-2 bg-red-500 text-white text-sm rounded"
                    onClick={() => handleRemoveImage(image)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
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
          Soumettre
        </Button>
      </form>
      <Spacing size={100} />
      <Footer />
    </>
  );
};

export default EditProjectForm;

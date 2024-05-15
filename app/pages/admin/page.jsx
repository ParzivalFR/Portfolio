// "use client";

// import Spacing from "@/app/_components/Spacing";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Divider } from "@mui/material";
// import { RocketIcon } from "@radix-ui/react-icons";
// import { Label } from "@radix-ui/react-label";
// import ky from "ky";
// import { useState } from "react";

// const Admin = () => {
//   const [title, setTitle] = useState("");
//   const [categories, setCategories] = useState("");
//   const [cover, setCover] = useState(null);
//   const [images, setImages] = useState([]);
//   const [shortDescription, setShortDescription] = useState("");
//   const [description, setDescription] = useState("");
//   const [year, setYear] = useState(0);
//   const [skills, setSkills] = useState([]);
//   const [url, setUrl] = useState("");

//   const skillsArray = skills.split(",").map((skill) => skill.trim());

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("categories", categories);
//     formData.append("cover", cover);
//     for (let i = 0; i < images.length; i++) {
//       formData.append("images", images[i]);
//     }
//     formData.append("shortDescription", shortDescription);
//     formData.append("description", description);
//     formData.append("year", year);
//     formData.append("skills", skillsArray);
//     formData.append("url", url);

//     try {
//       const response = await ky
//         .post("http://185.157.247.55:3005/api/projects", {
//           body: formData,
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         })
//         .json();

//       console.log(response);
//       // Réinitialisation des états après la soumission
//       setTitle("");
//       setCategories([]);
//       setCover(null);
//       setImages([]);
//       setShortDescription("");
//       setDescription("");
//       setYear(0);
//       setSkills([]);
//       setUrl("");
//     } catch (error) {
//       console.error("Erreur:", error);
//     }
//   };

//   return (
//     <>
//       <main>
//         <Spacing size={40} />
//         <Alert className="w-4/5 sm:w-4/6 shadow-pxl">
//           <RocketIcon className="h-3 w-3 md:h-4 md:w-4" />
//           <AlertTitle className="font-bold text-xs underline md:text-base">
//             Panel Administration
//           </AlertTitle>
//           <AlertDescription className=" text-[10px] leading-tight md:text-sm">
//             Vous êtes connecté en tant qu'administrateur. Vous pouvez gérer les
//             projets, les articles et les commentaires.
//             <br />
//             <br />
//             Bonne visite !
//           </AlertDescription>
//         </Alert>
//         <Spacing size={40} />
//         <section>
//           <form
//             onSubmit={handleSubmit}
//             className="w-4/5 sm:w-3/5 md:w-4/5 m-auto flex flex-col gap-10 bg-background/60 p-6 rounded-lg shadow-pxl"
//           >
//             <div className="w-full flex flex-col gap-2 ">
//               <h1 className="text-3xl text-center">Ajouter un Projet</h1>
//               <p className="text-xs italic text-center">
//                 Remplissez le formulaire pour ajouter un nouveau projet.
//               </p>
//             </div>
//             <Divider className="w-4/5 m-auto bg-primary rounded" />
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="title">Titre</Label>
//               <Input
//                 type="text"
//                 id="title"
//                 className="bg-secondary text-current"
//                 placeholder="Titre"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//               <Label htmlFor="categories">Catégorie</Label>
//               <Select onValueChange={setCategories}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Sélectionnez la catégorie" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectItem value="frontend">Front-end</SelectItem>
//                     <SelectItem value="backend">Back-end</SelectItem>
//                     <SelectItem value="fullstack">Full-Stack</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               <Label htmlFor="cover">Image de couverture</Label>
//               <Input
//                 type="file"
//                 id="cover"
//                 accept=".jpg, .jpeg, .png, .gif, .svg, .webp, .avif"
//                 className="bg-secondary text-current"
//                 required
//                 onChange={(e) => setCover(e.target.files[0])}
//               />
//               <Label htmlFor="images">Images</Label>
//               <Input
//                 type="file"
//                 multiple
//                 accept=".jpg, .jpeg, .png, .gif, .svg, .webp, .avif"
//                 id="images"
//                 className="bg-secondary text-current"
//                 required
//                 onChange={(e) => setImages(Array.from(e.target.files))}
//               />
//               <Label htmlFor="shortDescription">Description courte</Label>
//               <Input
//                 type="text"
//                 id="shortDescription"
//                 className="bg-secondary text-current"
//                 placeholder="Description courte"
//                 required
//                 value={shortDescription}
//                 onChange={(e) => setShortDescription(e.target.value)}
//               />
//               <Label htmlFor="description">Description</Label>
//               <Input
//                 type="text"
//                 id="description"
//                 className="bg-secondary text-current"
//                 placeholder="Description"
//                 required
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//               <Label htmlFor="year">Année</Label>
//               <Input
//                 type="number"
//                 id="year"
//                 className="bg-secondary text-current"
//                 placeholder="Année"
//                 required
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//               />
//               <Label htmlFor="skills">Compétences</Label>
//               <Input
//                 type="text"
//                 id="skills"
//                 className="bg-secondary text-current"
//                 placeholder="Compétences"
//                 required
//                 value={skills}
//                 onChange={(e) => setSkills(e.target.value)}
//               />
//               <Label htmlFor="url">URL</Label>
//               <Input
//                 type="text"
//                 id="url"
//                 className="bg-secondary text-current"
//                 placeholder="URL"
//                 required
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//               />
//             </div>
//             <Button type="submit" className="w-[100px] m-auto">
//               Soumettre
//             </Button>
//           </form>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Admin;

"use client";

import ky from "ky";
import { useState } from "react";

const AddProjectForm = () => {
  const userId = localStorage.getItem("userId");

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
      const response = await ky
        .post("http://localhost:3005/api/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        })
        .json();

      console.log("Projet ajouté avec succès:", response);

      // Réinitialiser le formulaire après soumission réussie
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
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-primary">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="categories"
        value={formData.categories}
        onChange={handleChange}
        placeholder="Categories (comma separated)"
        required
      />
      <input type="file" name="cover" onChange={handleChange} required />
      <input
        type="file"
        name="images"
        onChange={handleChange}
        multiple
        required
      />
      <textarea
        name="shortDescription"
        value={formData.shortDescription}
        onChange={handleChange}
        placeholder="Short Description"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills (comma separated)"
        required
      />
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Project URL"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProjectForm;

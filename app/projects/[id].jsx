import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Projet: {id}</p>;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  // Ici, vous pouvez faire une requête à votre API pour obtenir les détails du projet en utilisant l'ID
  // Par exemple :
  // const res = await fetch(`http://localhost:3005/api/projects/${id}`)
  // const project = await res.json()

  return {
    props: {}, // Retournez le projet ici. Par exemple : { project }
  };
}

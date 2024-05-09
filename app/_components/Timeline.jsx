"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

export default function LeftAlignedTimeline() {
  const currentYear = new Date().getFullYear();
  const workExperience = [
    {
      year: 2013,
      title: "CAP Boulanger",
      color: "primary",
      description: "Début de mon apprentissage en Boulangerie.",
    },
    {
      year: 2015,
      title: "BP Boulanger",
      color: "secondary",
      description:
        "Après 2 années en CAP j'ai décidé de me lancer dans un Brevet Professionnel de Boulangerie pour accroitre mes compétences.",
    },
    {
      year: 2017,
      title: "Premier CDI dans une autre entreprise",
      color: "primary",
      description:
        "Une fois terminé mon BP, j'ai été embauché en tant que Boulanger dans une autre entreprise pour mettre en pratique mes compétences et en apprendre de nouvelles.",
    },
    {
      year: 2020,
      title: "Recontacté par l'ancienne entreprise",
      color: "secondary",
      description:
        "Après un peu plus de 2 ans dans la seconde entreprise, n'étant pas une expérience concluante, j'ai été recontacté par mon ancienne entreprise pour reprendre mon poste de Boulanger en CDI et j'ai accepté.",
    },
    {
      year: 2023,
      title: "Déclaré inapte au poste de Boulanger",
      color: "primary",
      description:
        "Après 10 années en Boulangerie, j'ai été déclaré inapte au poste de Boulanger suite à des problèmes de santé lié aux allergies à la farine. J'ai donc décidé de me reconvertir dans le développement web, un domaine qui m'a toujours attiré et que j'ai toujours voulu apprendre. Je suis donc en formation depuis Janvier 2024 pour devenir développeur web grâce à la formation de l'école OpenClassrooms.",
    },
  ];

  return (
    <Timeline
      className="w-full max-w-5xl mx-auto"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}
    >
      {workExperience.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="current">
            {item.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={item.color} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card className="cursor-default shadow-current shadow-pxl hover:bg-foreground/10 transition-colors transform duration-700">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                {item.year} - {item.year + 2}
              </CardFooter>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
      <TimelineItem>
        <TimelineOppositeContent color="current">
          {currentYear}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="grey" />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

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

  return (
    <Timeline
      className="w-full max-w-5xl mx-auto"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="current">2013</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className="cursor-default shadow-current shadow-pxl hover:bg-foreground/10 transition-colors transform duration-700">
            <CardHeader>
              <CardTitle>CAP Boulanger</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Début de mon apprentissage en Boulangerie.
              </CardDescription>
            </CardContent>
            <CardFooter>2013 - 2015</CardFooter>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="current">2015</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className="cursor-default shadow-current shadow-pxl hover:bg-foreground/10 transition-colors transform duration-700">
            <CardHeader>
              <CardTitle>BP Boulanger</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Après 2 années en CAP j'ai décidé de me lancer dans un Brevet
                Professionnel de Boulangerie pour accroitre mes compétences.
              </CardDescription>
            </CardContent>
            <CardFooter>2015 - 2017</CardFooter>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="current">2015</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className="cursor-default shadow-current shadow-pxl hover:bg-foreground/10 transition-colors transform duration-700">
            <CardHeader>
              <CardTitle>Premier CDI dans une autre entreprise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Une fois terminé mon BP, j'ai été embauché en tant que Boulanger
                dans une autre entreprise pour mettre en pratique mes
                compétences et en apprendre de nouvelles.
              </CardDescription>
            </CardContent>
            <CardFooter>2017 - 2020</CardFooter>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="current">2015</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className="cursor-default shadow-current shadow-pxl hover:bg-foreground/10 transition-colors transform duration-700">
            <CardHeader>
              <CardTitle>Recontacté par l'ancienne entreprise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Après un peu plus de 2 ans dans la seconde entreprise, n'étant
                pas une expérience concluante, j'ai été recontacté par mon
                ancienne entreprise pour reprendre mon poste de Boulanger en CDI
                et j'ai accepté.
              </CardDescription>
            </CardContent>
            <CardFooter>2020 - 2024</CardFooter>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="current">2015</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className="cursor-default shadow-current shadow-pxl hover:bg-foreground/10 transition-colors transform duration-700">
            <CardHeader>
              <CardTitle>Déclaré inapte au poste de Boulanger</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Après 10 années en Boulangerie, j'ai été déclaré inapte au poste
                de Boulanger suite à des problèmes de santé lié aux allergies à
                la farine. J'ai donc décidé de me reconvertir dans le
                développement web, un domaine qui m'a toujours attiré et que
                j'ai toujours voulu apprendre. Je suis donc en formation depuis
                Janvier 2024 pour devenir développeur web grâce à la formation
                de l'école OpenClassrooms.
              </CardDescription>
            </CardContent>
            <CardFooter>2024 - Aujourd'hui</CardFooter>
          </Card>
        </TimelineContent>
      </TimelineItem>
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

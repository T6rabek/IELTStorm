import { Feature } from "@/types/feature";
import { write } from "fs";

import {
  BookOpen,
  Gamepad2,
  Mic,
  Film,
  Users,
  HeadphonesIcon,
  Pen,
} from "lucide-react"; // Import icons

// Removed local declaration of Feature interface

const featureData: Feature[] = [
  {
    id: 1,
    title: "Karaoke",
    description: "Improve your listening and Speaking  through Karaoke",
    icon: HeadphonesIcon, // ✅ Type fixed
  },
  {
    id: 2,
    title: "Movie shorts",
    description: "Never forget vocabulary with our movie shorts and quizzes.",
    icon: Film,
  },
  {
    id: 3,
    title: "Gamification",
    description: "Challenge yourself with quizzes, games, and leaderboards ",
    icon: Gamepad2,
  },
  {
    id: 4,
    title: "Reading",
    description: "Reading is not boring anymore with our interactive comics",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Writing",
    description: "What do you think about already analyzed essays?",
    icon: Pen,
  },
  {
    id: 6,
    title: "Speaking",
    description:
      "What if you find like-minded people through iStorm to prepare together?",
    icon: Mic,
  },
];

export default featureData;

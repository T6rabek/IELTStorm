import {
  BookOpen,
  Gamepad2,
  Mic,
  Film,
  Users,
  HeadphonesIcon,
} from "lucide-react"; // Import icons

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>; // ✅ Fix icon type
}

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
];

export default featureData;

import { ComponentType } from "react";

export interface Feature {
  id: number; // Add this line
  title: string;
  description: string;
  icon: ComponentType<any>;
}

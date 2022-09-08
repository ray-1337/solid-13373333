import { createSignal, createRoot } from "solid-js";

export type Panel = "personal" | "network" | "projects" | "gear" | "-vent";

export const list: Panel[] = ["personal", "network", "projects", "gear", "-vent"];

function createCounter() {
  const [panel, setPanel] = createSignal<Panel | null>(null);
  return { panel, setPanel };
};

export default createRoot(createCounter);
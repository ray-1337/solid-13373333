import { createSignal, createRoot } from "solid-js";

function createCounter() {
  const [panel, setPanel] = createSignal<"personal" | "network" | "projects" | null>(null);
  return { panel, setPanel };
}

export default createRoot(createCounter);
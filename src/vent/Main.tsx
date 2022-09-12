import { Component, onMount, For, createSignal } from "solid-js";
import Style from "./Style.module.css";

interface VentComponents {
  date: Date;
  message: string;
  images?: string;
}

const Vent: Component = () => {
  const [vents, setVents] = createSignal<VentComponents[] | null>(null);

  let introHead!: HTMLDivElement;
  let introWarning!: HTMLDivElement;
  let _vents!: HTMLDivElement;

  onMount(async () => {
    document.title = "trust issues.";
    document.body.style.background = "black";
    document.documentElement.style.background = "black";

    const introPlayedBefore = Boolean(localStorage.getItem("IW"));
    const lostInTheNoise = () => {
      introHead.style.display = "none";
      document.documentElement.style.overflow = "auto";
      setTimeout(() => _vents.classList.add(Style.VWplayed), 1000);
    };

    if (introPlayedBefore) {
      lostInTheNoise();
    };

    try {
      const ventsContent = await fetch("https://13373333.one/bittersweet/vent", {
        method: "GET",
        credentials: "include",
      });

      if (ventsContent.status >= 400) {
        return alert("Unable to retrieve vents listing from the server.");
      };

      if (!introPlayedBefore) {
        introWarning.classList.add(Style.IWplayed);
        
        setTimeout(() => {
          lostInTheNoise();
          localStorage.setItem("IW", "true");
        }, 5555);
      };

      setVents(await ventsContent.json());
    } catch (error) {
      console.error(error);
      return alert(error);
    };
  });

  return (
    <section class={Style.vent}>
      {/* warning */}
      <div class={Style.intro} ref={(evt) => introHead = evt}>
        <div class={Style.intro_warning} ref={(evt) => introWarning = evt}>
          <h1>Warning</h1>
          <p>This page contains self-harm, suicide, and emotionally sensitive topic. Please be aware.</p>
        </div>
      </div>

      {/* list */}
      <div class={Style.vents} ref={(evt) => _vents = evt}>
        <For each={vents()?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())}>
          {(ctx, index) => {
            return (
              <div class={Style.vent_content} style={{border: index() == 0 ? "2px solid #363636" : undefined}}>
                <div class={Style.vent_value} innerHTML={ctx.message}> </div>

                {() => {
                  if (ctx.images) {
                    return (<div class={Style.vent_img}> <img src={ctx.images}></img> </div>)
                  };
                }}

                <div class={Style.vent_date}>
                  <p>{new Date(ctx.date).toLocaleString("en-US", {hour12: false})}</p>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </section>
  );
};

export default Vent;
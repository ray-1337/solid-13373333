import { Component, onMount, For } from "solid-js";
import Style from "./Style.module.css";
import Vents from "./VentList";

const Vent: Component = () => {
  let introHead!: HTMLDivElement;
  let introWarning!: HTMLDivElement;
  let _vents!: HTMLDivElement;

  onMount(() => {
    document.title = "trust issues.";
    document.body.style.background = "black";
    document.documentElement.style.background = "black";

    // intro manipulation
    const lost = () => {
      introHead.style.display = "none";
      document.documentElement.style.overflow = "auto";
      setTimeout(() => _vents.classList.add(Style.VWplayed), 1000);
    };

    const introPlayed = Boolean(localStorage.getItem("IW")) || false;
    !introPlayed ? introWarning.classList.add(Style.IWplayed) : lost();
    setTimeout(() => {
      lost();
      localStorage.setItem("IW", "true");
    }, 5555);
  });

  return (
    <section class={Style.vent}>
      {/* warning */}
      <div class={Style.intro} ref={(evt) => introHead = evt}>
        <div class={Style.intro_warning} ref={(evt) => introWarning = evt}>
          <h1>Warning</h1>
          <p>This page contains self-harm and suicide topic. Be aware.</p>
        </div>
      </div>

      {/* list */}
      <div class={Style.vents} ref={(evt) => _vents = evt}>
        <For each={Vents}>
          {(ctx) => {
            return (
              <div class={Style.vent_content}>
                <div class={Style.vent_value} innerHTML={ctx.content}> </div>

                {() => {
                  if (ctx.images) {
                    return (<div class={Style.vent_img}> <img src={ctx.images}></img> </div>)
                  };
                }}

                <div class={Style.vent_date}>
                  <p>{new Date(ctx.date).toLocaleString()}</p>
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
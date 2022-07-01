import { Component, createEffect, For } from 'solid-js';
import * as Util from "../Util";

import PanelContext from "./Panel.Context";

import style from "../css/Project.module.css";
import closeStyle from "../css/Close.module.css";

import _projImg_ire from "../assets/images/project/ire.webp";
import _projImg_self from "../assets/images/project/13373333.webp";
import _projImg_1337 from "../assets/images/project/1337.webp";
import _projImg_blobproj from "../assets/images/project/blobproj.webp";
import _projImg_antinsfw from "../assets/images/project/antinsfw.webp";
import _projImg_gmdibot from "../assets/images/project/gmdibot.webp";

const Project: Component = () => {
  let projectParent!: HTMLDivElement;
  let projectList!: HTMLDivElement;

  createEffect(() => {
    PanelContext.panel() == "projects" ? projectParent.classList.add(style.open) : projectParent.classList.remove(style.open);
  });

  return (
    <div class={style.project} ref={projectParent}>
      <div style={{"z-index": 10}} class={closeStyle.close} onclick={() => { PanelContext.setPanel(null); projectList.scrollTo({ top: 0, behavior: "smooth" }) }}>
        <span style={{color: "white"}} class="fas fa-arrow-right"></span>
      </div>

      <div class={style.list} ref={projectList}>

        <For each={List()}>{
          (state) => {
            return (
              <div class={style.tab}>
                <div class={style["tab__img"]}>
                  <img
                    // loading='lazy'
                    onContextMenu={(evt) => Util.preventClick(evt)}
                    onDragStart={(evt) => Util.preventClick(evt)}
                    src={state.image}
                    style={{ display: "contents !important" }}
                  />
                </div>
                <a rel="noreferrer" target="_blank" href={state.url}>
                  <div class={style["tab__info"]}>
                    <h3>{state.title}</h3>
                    <p>Visit</p>
                  </div>
                </a>
              </div>
            );
          }
        }</For>
      </div>
    </div>
  );
};

export default Project;

function List() {
  return [
    {
      title: "IRE (03.12.2021)",
      image: _projImg_ire,
      url: "https://soundcloud.com/1337-3333/sets/ire"
    },
    {
      title: "13373333.one",
      image: _projImg_self,
      url: "https://github.com/ray-1337/solid-13373333"
    },
    {
      title: "13:37",
      image: _projImg_1337,
      url: "https://open.spotify.com/artist/70AzjYUmP524pQbJXWWJoa"
    },
    {
      title: "Blob Project",
      image: _projImg_blobproj,
      url: "https://blob-project.com"
    },
    {
      title: "Anti-NSFW",
      image: _projImg_antinsfw,
      url: "https://ray1337.gitbook.io/anti-nsfw-official-documentation/"
    },
    // {
    //   title: "GMDI Discord Bot",
    //   image: _projImg_gmdibot,
    //   url: "https://github.com/ray-1337/gmdi-private-bot/"
    // }
  ]
};
import {
  siJavascript,
  siTypescript,
  siHtml5,
  siCss3,

  siReact,
  siWebpack,
  siNodedotjs,
  siTsnode,
  siNpm,
  siYarn,
  siAdobephotoshop,
  siAdobepremierepro,
  siRedis,
  siMongodb,
  siGithub,
  siVisualstudio,
  siVisualstudiocode,
  siFirebase,
  siHeroku,
  siNginx,
  siTensorflow,
  siUbuntu,
  siExpress,
  siJquery,
  siMarkdown,
  siTrello,
  siGitbook,
  siSupabase,
  siReactrouter,
  siSolid,
  siVite,
  siSequelize,
  siPostgresql,
  siElectron,
  siPostman,
  siPostcss,
  siAutoprefixer,
  siRoblox, // roblox studio*

  siRust,
  siNextdotjs,
  siVuedotjs,
  siNuxtdotjs,
  siRedux,
  siFastify,
  siWebassembly,
} from "simple-icons/icons";

import { Component, createSignal, For } from 'solid-js';
import { marked } from "marked";

import * as Util from "../../Util";

import style from "../../css/Bio/Tools.module.css";

const Bio_Tools: Component = () => {
  let [langType, setLangType] = createSignal<{title: string, type?: GeneralListType["type"]}>({title: ""});

  return (
    <div class={style.develemper}>
      <h1>Computer</h1>
      <p>yes, i'm a programmer nerds since mid-2017, here's my essentials. and yes, its self-taught.</p>

      {/* language showcase */}
      <For each={[...new Set(IconList().map(val => val.type))]}>{
        (type) => {
          return (
            <div class={style["develemper-lang"]}>
              <div class={style["develemper-info"]}>
                <h3>{type}</h3>
                <p>{langType().type == type ? langType().title : ""}</p>
              </div>

              <div class={style["order"]}>
                <For each={IconList().filter(val => val.type == type)}>{
                  (state) => {
                    return (
                      <span class={style["brandicon"]}>
                        <svg 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        onTouchStart={() => setLangType({title: state.title, type: state.type})} 
                        onTouchEnd={() => setLangType({title: "", type: undefined})}
                        onMouseOver={() => setLangType({title: state.title, type: state.type})} 
                        onMouseOut={() => setLangType({title: "", type: undefined})}>
                          <path fill={`#${state.hex != "000000" ? state.hex : "FFFFFF"}`} d={state.path}/>
                        </svg>
                      </span>
                    )
                  }
                }</For>
              </div>
            </div>
          );
        }}
      </For>

      {/* summaries */}
      <div class={`${style["develemper-lang"]} ${style["summaries"]}`}>
        <h3>Summaries</h3>
        <ul>
          <For each={ExperienceList()}>{
            (state) => {
              return (
                <li> <span>{state.timing}</span> of experience in {state.language}. </li>
              );
            }
          }</For>
        </ul>
      </div>

      {/* current work essentials */}
      <div class={`${style["develemper-lang"]} ${style["summaries"]}`}>
        <h3>The Current</h3>
        <ul>
          <For each={EssentialsList()}>{
            (state) => {
              return (<li innerHTML={marked.parse(state)}></li>);
            }
          }</For>
        </ul>
      </div>
    </div>
  );
};

export default Bio_Tools;

type GeneralListType = { title: string, path: string, hex: string, type: string };

function IconList(): Array<GeneralListType> {
  let list: Array<GeneralListType> = [];

  let icon = {
    language: [siJavascript, siTypescript, siHtml5, siCss3],
    technology: [siReact, siWebpack, siNodedotjs, siTsnode, siNpm, siYarn, siAdobephotoshop, siAdobepremierepro, siRedis, siMongodb, siGithub, siVisualstudio, siVisualstudiocode, siFirebase, siHeroku, siNginx, siTensorflow, siUbuntu, siExpress, siJquery, siMarkdown, siTrello, siGitbook, siSupabase, siReactrouter, siSolid, siVite, siPostgresql, siSequelize, siRoblox, siPostman, siPostcss, siAutoprefixer],
    interested: [siRust, siNextdotjs, siVuedotjs, siNuxtdotjs, siRedux, siPostgresql, siFastify, siWebassembly, siElectron]
  };

  for (const ctx of Object.entries(icon)) {
    for (const siIcon of ctx[1]) {
      list.push({ title: siIcon.title, path: siIcon.path, hex: siIcon.hex, type: capitalize(ctx[0]) });
    };
  };

  return list;
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ExperienceList(): Array<{ timing: string; language: string; }> {
  return [
    {
      timing: Util.calculateYear("2017-08") + " years",
      language: "JavaScript"
    },
    {
      timing: Util.calculateYear("2017-08") + " years",
      language: "Node.js"
    },
    {
      timing: Util.calculateMonth("2021-04-24") + " months",
      language: "HTML5/CSS3"
    },
    {
      timing: Util.calculateMonth("2021-07-29") + " months",
      language: "TypeScript"
    },
    {
      timing: Util.calculateMonth("2021-09-01") + " months",
      language: "React.js"
    },
    {
      timing: Util.calculateMonth("2021-06-14") + " months",
      language: "MongoDB"
    },
    {
      timing: Util.calculateMonth("2021-06-14") + " months",
      language: "Redis"
    }
  ];
};

function EssentialsList() {
  return [
    "some of my project uses [**Nanoexpress**](https://npmjs.com/package/nanoexpress) because it's blazingly [fast](https://web-frameworks-benchmark.netlify.app/result?asc=0&l=javascript&metric=totalRequestsPerS).",
    "i use [**Eris**](https://npmjs.com/package/eris) as my main Discord bot framework.",
    "im using [**ZorinOS**](https://zorin.com/) for my temporary workstation OS.",
    "this website is currently wrapped with [**Solid.js**](https://solidjs.com), 'cause ~~reactjs~~ sucks ••s.",
    "most of my projects are closed-source."
  ];
};
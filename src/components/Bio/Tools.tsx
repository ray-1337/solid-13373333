import { Component, createSignal, For } from 'solid-js';
import SimpleIcons from "simple-icons";
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

type GeneralListType = { title: string, path: string, hex: string, type: "Language" | "Technology" | "Interested" };
function IconList(): Array<GeneralListType> {
  let list: Array<GeneralListType> = [];

  let language = ["javascript", "typescript", "html5", "css3"];
  let interested = ["rust", "nextdotjs", "vuedotjs", "nuxtdotjs", "redux", "postgresql", "fastify", "webassembly", "electron"];
  let technology = [
    "react", "webpack", "nodedotjs", "tsnode", "npm", "yarn",
    "adobephotoshop", "adobepremierepro", "redis", "mongodb",
    "github", "visualstudio", "visualstudiocode", "firebase",
    "heroku", "nginx", "tensorflow", "ubuntu", 'express', 'jquery',
    "markdown", "trello", "gitbook", "supabase", "reactrouter", "solid", "vite"
  ];

  for (const ctx of language) {
    const icon = SimpleIcons.Get(ctx);
    list.push({ title: icon.title, path: icon.path, hex: icon.hex, type: "Language" });
  };

  for (const ctx of technology) {
    const icon = SimpleIcons.Get(ctx);
    list.push({ title: icon.title, path: icon.path, hex: icon.hex, type: "Technology" });
  };

  for (const ctx of interested) {
    const icon = SimpleIcons.Get(ctx);
    list.push({ title: icon.title, path: icon.path, hex: icon.hex, type: "Interested" });
  };

  return list;
};

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
    },
    {
      timing: Util.calculateMonth("2021-10-17") + " months",
      language: "Webpack"
    }
  ];
};

function EssentialsList() {
  return [
    "some of my project uses [**Nanoexpress**](https://npmjs.com/package/nanoexpress) because it's blazingly [fast](https://web-frameworks-benchmark.netlify.app/result?asc=0&l=javascript&metric=totalRequestsPerS).",
    "i use [**Eris**](https://npmjs.com/package/eris) as my main Discord bot framework.",
    "im using [**ZorinOS**](https://zorin.com/) for my temporary workstation OS."
  ];
};
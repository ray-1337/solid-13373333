import { Component, For } from 'solid-js';

import style from "../../css/Bio/Personality.module.css";

const Bio_Personality: Component = () => {
  return (
    <div class={style.personality}>
      <h1>Personality</h1>
      <p>who cares, and who asked.</p>
      <ul>
        <For each={List()}>{
          (state) => { return ( <li>{state}</li> ) }
        }
        </For>
      </ul>
    </div>
  );
};

export default Bio_Personality;

function List(): Array<string> {
  return [
    "i like being lonely.",
    "frugal person.",
    "agoraphobia.",
    "minimalist.",
    "caffeine addicts.",
    "myopia.",
    "slowly having interests in games.",
    "cat & dog lovers.",
    "i can smash my keyboard over 115 wpm.",
    "easy to get distracted and losing focus."
  ];
};
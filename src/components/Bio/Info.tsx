import { Component, For } from 'solid-js';

import style from "../../css/Bio/Info.module.css";
import * as Util from "../../Util";

const Bio_Info: Component = () => {
  return (
    <div class={style.info}>
      <For each={List()}>{
        (state) => {
          return (
            <div class={style.pack}>
              <h3>
                <span class={`fas ${state.iconSpan}`}></span>
                {state.name}
              </h3>

              <p>{state.value}</p>
            </div>
          )
        }
      }
      </For>
    </div>
  );
};

export default Bio_Info;

function List(): Array<{ name: string, value: string, iconSpan: string; }> {
  return [
    {
      name: "Existence",
      value: "July 24th",
      iconSpan: "fa-balance-scale"
    },
    {
      name: "Status",
      value: `Taken (${Util.calculateDay("05-06-2022")} days ago)`,
      iconSpan: "fa-heart"
    },
    {
      name: "Email",
      value: "personal@13373333.one",
      iconSpan: "fa-envelope"
    },
    {
      name: "Gender",
      value: "Male",
      iconSpan: "fa-male"
    },
    {
      name: "Languages",
      value: "Indonesia (Native), English",
      iconSpan: "fa-language"
    },
    {
      name: "Home",
      value: "Indonesia",
      iconSpan: "fa-location-arrow"
    }
  ];
};
import { Component, createEffect, For, JSX } from "solid-js";

import PanelContext from "./Panel.Context";

import style from "../css/Social.module.css";
import closeStyle from "../css/Close.module.css";

const Social: Component = () => {
  let socialParent!: HTMLDivElement;

  createEffect(() => {
    PanelContext.panel() == "network" ? socialParent.classList.add(style.open) : socialParent.classList.remove(style.open);
  });

  return (
    <div class={style.parasocial} ref={socialParent}>
      <div class={closeStyle.close} onclick={() => {PanelContext.setPanel(null); socialParent.scrollTo({top: 0, behavior: "smooth"})}}>
        <span class="fas fa-arrow-right"></span>
      </div>

      <For each={List()}>{
        (state) => {
          let color = state.colorArray.length > 1 ? state.colorArray.map((val, i) => {
            let math = Math.min(Math.max(Math.round((100 / state.colorArray.length) * i), 0), 100);
            
            return `${val} ${math}%`;
          }) : state.colorArray[0];

          let combined: JSX.CSSProperties = state.colorArray.length > 1 ?
          {"background-image": `linear-gradient(90deg, ${color}), -webkit-linear-gradient(90deg, ${color})`} :
          {"background-color": state.colorArray[0]}


          return (
            <div class={style.tab}>
              <a rel="noreferrer" target="_blank" href={state.url}>
                <div class={style.insider} style={combined}>
                  <h1>{state.title}</h1>
                </div>
              </a>
            </div>
          )
        }
      }</For>
    </div>
  )
};

export default Social;

function List() {
  return [
    {
      url: "https://instagram.com/ray_2221",
      title: "Instagram",
      colorArray: ["#002296", "#82008f", "#c0007a", "#ea0c5f", "#ff5341", "#ff8320", "#f6ba00"]
    },
    {
      url: "https://www.linkedin.com/in/ray1337",
      title: "LinkedIn",
      colorArray: ["#0077b5"]
    },
    {
      url: "https://youtube.com/ray1337",
      title: "YouTube",
      colorArray: ["#ff0000", "#282828"]
    },
    {
      url: "https://dsc.bio/13373333",
      title: "Discord",
      colorArray: ["#5866EF", "#7289DA"]
    },
    {
      url: "https://paypal.me/ray0001",
      title: "PayPal",
      colorArray: ["#003087", "#009cde"]
    },
    {
      url: "https://crowdin.com/profile/ray1337",
      title: "Crowdin",
      colorArray: ["#aad23b", "#fdb714"]
    },
    {
      url: "https://github.com/ray-1337",
      title: "GitHub",
      colorArray: ["#7c7c7c", "#121112"]
    },
    {
      url: "https://open.spotify.com/artist/70AzjYUmP524pQbJXWWJoa",
      title: "Spotify",
      colorArray: ["#1db954", "#191414"]
    },
    {
      url: "https://soundcloud.com/1337-3333",
      title: "SoundCloud",
      colorArray: ["#ff9533", "#ff7f34", "#fe6d35", "#ff5836", "#ff4137"]
    },
    {
      url: "https://twitter.com/ray__1337",
      title: "Twitter",
      colorArray: ["#0ff", "#00efff", "#00deff", "#00cbff", "#00b8ff", "#00a3ff"]
    },
    {
      url: "https://bacotnihurl.bandcamp.com/",
      title: "Bandcamp",
      colorArray: ["#00a8b4", "#629aa9"]
    },
    {
      url: "https://www.reddit.com/user/ray-1337",
      title: "Reddit",
      colorArray: ["#ff6314", "#ff5700", "#369", "#5296dd"]
    },
    {
      url: "https://www.musixmatch.com/profile/3vUCAOhODWVY7oPWb_6Sw_GlOvhtCzZ2bMQAAqRVj71ldCLrqYUSOGkcRmF2cM6eqO3EmxQZzKpTxWGt45a3Mltz2s-I-iEgL3bjTctPRLf1SjWsIAGFiFaBt1GVB7qMZof3x3d1vS81K06c6DEKwJQ8uH0",
      title: "Musixmatch",
      colorArray: ["#ff6050", "#ff0e83", "#d54262"]
    },
    {
      url: "https://10fastfingers.com/user/1967566/",
      title: "10FastFingers",
      colorArray: ["#aad23b", "#fdb714"]
    },
    {
      url: "https://genius.com/ray_1337",
      title: "Genius",
      colorArray: ["#121112", "#ffff64"]
    }
  ]
};
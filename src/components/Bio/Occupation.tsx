import { Component, For } from 'solid-js';

import style from "../../css/Bio/Occupation.module.css";

const Bio_Occupation: Component = () => {
  return (
    <div class={style.occupation}>
      <h1>Side Jobs</h1>
      <p>side-work through my 1080p.</p>
      <ul>
        <For each={List()}>{
          (state) => {
            return (
              <li>
                <a target="_blank" rel="noreferrer" href={state.url}><b>{state.company}</b></a> / {state.title}
              </li>
            )
          }
        }
        </For>
      </ul>
    </div>
  );
};

export default Bio_Occupation;

function List(): Array<{ company: string, url: string, title: string; }> {
  return [
    {
      company: "PreMiD",
      url: "https://crowdin.com/profile/ray1337",
      title: "Indonesia Translator"
    },
    {
      company: "Musixmatch",
      url: "https://musixmatch.com/profile/3vUCAFfAsV8PVItc7aCqUNbH56gBSl9UqvdmiP-S1ix4bhNE2WnM1CZdlqKLD8gS4mHMysttQiOqtDH4SAEhMitmRIJfwLb0SiqENe3mRB4zd4z9JjrbeQuSVoLAmZtlhJTFiX-ebEyLkbpFDET9otKvUbk",
      title: "Lyrics Curator"
    },
    {
      company: "Genius",
      url: "https://genius.com/ray_1337",
      title: "Lyrics Contributor"
    },
    {
      company: "Geometry Dash Indonesia",
      url: "https://discord.gg/JaPQzFk",
      title: "Server Manager"
    },
    // {
    //   company: "ScreenToGif",
    //   url: "https://github.com/NickeManarin/ScreenToGif",
    //   title: "Indonesia Translator"
    // },
    {
      company: "Community Development",
      url: "https://community-development-shop.tebex.io/",
      title: "Lead Developer"
    }
  ]
};
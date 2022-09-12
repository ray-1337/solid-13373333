import { Component, For } from "solid-js";

import Styling from "../../css/Bio/Music.module.css";

import HyperActiveIMG from "../../assets/images/playlist/mood.webp";
import UnderPressureIMG from "../../assets/images/playlist/sad.webp";

const Playlist = [
  {
    name: "hyperactive",
    description: "dance while i still can.",
    url: "https://open.spotify.com/playlist/7M5Dbb2bowXtwR35FApbzb",
    cover: HyperActiveIMG
  },
  {
    name: "under pressure",
    description: "cry while i still can.",
    url: "https://open.spotify.com/playlist/5pnIsuGovsCkLg9zXYmvxv",
    cover: UnderPressureIMG
  }
];

const Music: Component = () => {
  return (
    <div class={Styling.spotify_music_outsider}>
      <div class={Styling.spotify_music}>
        <div class={Styling.spotify_music_title}>
          <h1>Musicphile</h1>
          <p>I have a wide range of saved music on my playlist. <br/>You can save it, if you want to.</p>
        </div>

        <div class={Styling.spotify_playlist_classify}>

          <For each={Playlist}>
            {(ctx) => {
              return (
                <div class={Styling.spotify_playlist} onClick={() => window.open(ctx.url, "_blank")}>
                  <div class={Styling.spotify_playlist_image}>
                    <img src={ctx.cover}></img>
                  </div>

                  <div class={Styling.spotify_playlist_title}>
                    <h1>{ctx.name}</h1>
                    <p>{ctx.description}</p>
                  </div>
                </div>
              );
            }}
          </For>

        </div>
      </div>
    </div>
  );
};

export default Music;
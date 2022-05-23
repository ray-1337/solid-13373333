import { Component, createSignal, For, onCleanup, onMount } from 'solid-js';
import * as Util from "../../Util";

import style from "../../css/Bio/Music.module.css";
import mainStyle from "../../css/Bio/Bio.Main.module.css";

import _lenfer from "../../assets/images/favTracks/lenfer.webp";
import _theprince from "../../assets/images/favTracks/theprince.webp";
import _getyourwish from "../../assets/images/favTracks/getyourwish.webp";
import _goodfaith from "../../assets/images/favTracks/goodfaith.webp";
import _imtired from "../../assets/images/favTracks/imtired.webp";

const Bio_Music: Component = () => {
  let musicFavList!: HTMLDivElement;
  let mainMusic!: HTMLDivElement;
  let [slide, setSlide] = createSignal({ isDown: false, scrollLeft: 0, startX: 0 });

  function whenSlideStop() {
    setSlide({...slide(), isDown: false});
    musicFavList.classList.remove(style.grab);
  };

  function whenSlideMoving(evt: MouseEvent) {
    if (!slide().isDown) return;
    evt.preventDefault();

    let leftingX = evt.pageX - musicFavList.offsetLeft;
    let walk = leftingX - slide().startX;
    musicFavList.scrollLeft = slide().scrollLeft - walk;
  };

  function whenSlideDown(evt: MouseEvent) {
    if (evt.button == 1) return;
    setSlide({...slide(), isDown: true});
    musicFavList.classList.add(style.grab);
    setSlide({...slide(), startX: evt.pageX - musicFavList.offsetLeft, scrollLeft: musicFavList.scrollLeft});
  };

  function showMusicList() {
    const defaultOffset = 200;
    if ((document.getElementsByClassName(mainStyle.personale)[0] as HTMLDivElement).scrollTop >= mainMusic.offsetTop - defaultOffset) {
      mainMusic.classList.add(style.show);
    };
  };

  onMount(() => document.getElementsByClassName(mainStyle.personale)[0].addEventListener("scroll", () => showMusicList()))

  onCleanup(() => document.getElementsByClassName(mainStyle.personale)[0].removeEventListener("scroll", () => showMusicList()))

  return (
    <div class={style.music} ref={mainMusic}>
      <h1>Music Interest</h1>
      <p>life seems boring without music.</p>

      <div class={style.favourite}>
        <section>
          <div class={style["fav_title"]}>
            <h1>Favourite Tracks</h1>
            <span></span>
          </div>

          <div 
          onMouseLeave={whenSlideStop}
          onMouseUp={whenSlideStop}
          onMouseMove={whenSlideMoving}
          onMouseDown={whenSlideDown}
          class={style["fav_list"]}
          ref={musicFavList}>

            <For each={List()}>
              {(state) => {
                return (
                  <div class={style.track}>
                    <div class={style["track_info"]}>
                      <div class={style["track_metadata"]}>
                        <h3>{state.artist}</h3>
                        <p>{state.title}</p>
                      </div>

                      <div class={style["track_visit"]}>
                        <a target="_blank" rel="noreferrer" href={state.url}>Visit</a>
                      </div>
                    </div>

                    <div class={style["track_artwork"]}>
                      <img loading='lazy' src={state.artwork} onContextMenu={(evt) => { return Util.preventClick(evt) }} draggable={false} />
                    </div>
                  </div>
                )
              }}
            </For>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Bio_Music;

function List(): Array<{ title: string, artist: string, url: string, artwork: string }> {
  return [
    {
      title: "L'enfer",
      artist: "Stromae",
      url: "https://stromae.lnk.to/lenfer",
      artwork: _lenfer
    },
    {
      title: "The Prince",
      artist: "Madeon",
      url: "https://youtu.be/AOhFzDN3eMI",
      artwork: _theprince
    },
    {
      title: "Get Your Wish",
      artist: "Porter Robinson",
      url: "https://youtu.be/4SZEDBFPpgw",
      artwork: _getyourwish
    },
    {
      title: "Heavy With Hoping",
      artist: "Madeon",
      url: "https://youtu.be/r5oAIIqbBtc",
      artwork: _goodfaith
    },
    {
      title: "I'm Tired",
      artist: "Labrinth, Zendaya",
      url: "https://youtu.be/ZFe55-p7XJc",
      artwork: _imtired
    }
  ];
};
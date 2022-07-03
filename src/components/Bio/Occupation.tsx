import { Component, For, onCleanup, onMount } from 'solid-js';

import style from "../../css/Bio/Occupation.module.css";
import mainStyle from "../../css/Bio/Bio.Main.module.css";

import _premid from "../../assets/images/occupation/premid.webp";
import _musixmatch from "../../assets/images/occupation/musixmatch.webp";
import _gmdi from "../../assets/images/occupation/gmdi.webp";
import _genius from "../../assets/images/occupation/genius.webp";
import _cdev from "../../assets/images/occupation/cdev.webp";

const Bio_Occupation: Component = () => {
  let occupationList: HTMLDivElement[] = [];

  let leftArrow!: HTMLSpanElement;
  let rightArrow!: HTMLSpanElement;
  let currentVisitURI = "";
  let jobPanel!: HTMLDivElement;

  function setVisitButton(index: number) {
    return List()[index].url ? currentVisitURI = List()[index].url : void(0);
  };

  function leftBtn() {
    let index = occupationList.findIndex(val => val.classList.contains(style.ocu_Open));

    if (rightArrow.classList.contains(style.btnStop)) {
      rightArrow.classList.remove(style.btnStop);
    };

    let calculation = index - 1;
    if (calculation <= 0) leftArrow.classList.add(style.btnStop);
    if (calculation < 0) {
      return;
    };

    setVisitButton(calculation);

    occupationList[index].classList.remove(style.ocu_Open);
    occupationList[calculation].classList.add(style.ocu_Open);

    return;
  };

  function rightBtn() {
    let index = occupationList.findIndex(val => val.classList.contains(style.ocu_Open));

    if (leftArrow.classList.contains(style.btnStop)) {
      leftArrow.classList.remove(style.btnStop);
    };

    let calculation = index + 1;
    if (index >= occupationList.length - 2) rightArrow.classList.add(style.btnStop);
    if (calculation >= occupationList.length) {
      return;
    };

    setVisitButton(calculation);

    occupationList[index].classList.remove(style.ocu_Open);
    occupationList[calculation].classList.add(style.ocu_Open);

    return;
  };

  onMount(() => {
    if (occupationList[0]) {
      occupationList[0].classList.add(style.ocu_Open);
      leftArrow.classList.add(style.btnStop);
      setVisitButton(0);
    };

    document.getElementsByClassName(mainStyle.personale)[0].addEventListener("scroll", () => showJobListTransition());
  });

  onCleanup(() => {
    document.getElementsByClassName(mainStyle.personale)[0].removeEventListener("scroll", () => showJobListTransition())
  });

  function showJobListTransition() {
    const defaultOffset = 100;
    if ((document.getElementsByClassName(mainStyle.personale)[0] as HTMLDivElement).scrollTop >= jobPanel.offsetTop - defaultOffset) {
      jobPanel.classList.remove(style.closement);
    };
  };

  return (
    <div class={`${style.occupation} ${style.closement}`} ref={(evt) => jobPanel = evt}>
      <div class={style.occupationTitle}>
        <h1>Jobs</h1>
        {/* <p>any jobs that can fulfill my financial crisis, regardless the pain.</p> */}
      </div>

      <section>
        <For each={List()}>{
          (state) => {
            return (
              <div class={style.occupationList} ref={(evt) => occupationList.push(evt)}>
                {/* image */}
                <div class={style.occupationListImage}>
                  <span style={
                    Object.assign({ "background-image": `url('${state.image}')` }, state.resigned ? {"filter": `grayscale(1) brightness(0.5)`} : {})
                  }></span>
                </div>

                {/* text and button */}
                <div class={style.occupationSubmissive}>
                  <div class={style.occupationSubmissive_text}>
                    <h1>{state.company}</h1>
                    <p>{state.title}</p>
                  </div>
                </div>
              </div>
            )
          }
        }
        </For>
      </section>

      <div class={style.occupationSubmissive_button}>
        {/* https://iconmonstr.com/ */}

        <div class={style.btnRedirect} onclick={() => currentVisitURI.length ? window.open(currentVisitURI, "_blank") : void(0)}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
          <h1>Visit</h1>
        </div>

        <div class={style.btnPanel}>
          <span class={style.btnLeft} ref={(evt) => leftArrow = evt} onclick={() => leftBtn()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
          </span>

          <span class={style.btnRight} ref={(evt) => rightArrow = evt} onclick={() => rightBtn()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
          </span>
        </div>

      </div>
    </div>
  );
};

export default Bio_Occupation;

function List(): Array<{ company: string, url: string, title: string; image: string; resigned?: boolean }> {
  return [
    {
      company: "PreMiD",
      url: "https://crowdin.com/profile/ray1337",
      title: "Indonesia Translator",
      image: _premid
    },
    {
      company: "Musixmatch",
      url: "https://musixmatch.com/profile/3vUCAFfAsV8PVItc7aCqUNbH56gBSl9UqvdmiP-S1ix4bhNE2WnM1CZdlqKLD8gS4mHMysttQiOqtDH4SAEhMitmRIJfwLb0SiqENe3mRB4zd4z9JjrbeQuSVoLAmZtlhJTFiX-ebEyLkbpFDET9otKvUbk",
      title: "Lyrics Contributor",
      image: _musixmatch
    },
    {
      company: "Genius",
      url: "https://genius.com/ray_1337",
      title: "Lyrics Contributor",
      image: _genius
    },
    {
      company: "Geometry Dash Indonesia",
      url: "https://discord.gg/JaPQzFk",
      title: "Former Server Manager",
      image: _gmdi,
      resigned: true
    },
    // {
    //   company: "ScreenToGif",
    //   url: "https://github.com/NickeManarin/ScreenToGif",
    //   title: "Indonesia Translator"
    // },
    {
      company: "Community Development",
      url: "https://store.cdev.shop/",
      title: "Lead Developer",
      image: _cdev
    }
  ]
};
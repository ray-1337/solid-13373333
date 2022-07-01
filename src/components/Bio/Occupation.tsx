import { Component, For, onMount } from 'solid-js';

import style from "../../css/Bio/Occupation.module.css";

import _premid from "../../assets/images/occupation/premid.webp";
import _musixmatch from "../../assets/images/occupation/musixmatch.webp";
import _gmdi from "../../assets/images/occupation/gmdi.webp";
import _genius from "../../assets/images/occupation/genius.webp";
import _cdev from "../../assets/images/occupation/cdev.webp";

const Bio_Occupation: Component = () => {
  let occupationList: HTMLDivElement[] = [];

  let leftArrow!: HTMLSpanElement;
  let rightArrow!: HTMLSpanElement;

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
    console.log(calculation)
    if (index >= occupationList.length - 2) rightArrow.classList.add(style.btnStop);
    if (calculation >= occupationList.length) {
      return;
    };

    occupationList[index].classList.remove(style.ocu_Open);
    occupationList[calculation].classList.add(style.ocu_Open);

    return;
  };

  onMount(() => {
    console.log(occupationList)
    if (occupationList[0]) {
      occupationList[0].classList.add(style.ocu_Open);
      leftArrow.classList.add(style.btnStop);
    };
  });

  return (
    <div class={style.occupation}>
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
                  <span style={{ "background-image": `url('${state.image}')` }}></span>
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

        <span class={style.btnLeft} ref={(evt) => leftArrow = evt} onclick={() => leftBtn()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
        </span>

        <span class={style.btnRight} ref={(evt) => rightArrow = evt} onclick={() => rightBtn()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
        </span>

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
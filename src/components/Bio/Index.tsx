import { Component, createEffect, createSignal, lazy, onMount } from 'solid-js';

import style from "../../css/Bio/Bio.Main.module.css";
import closeStyle from "../../css/Close.module.css";
import * as Util from "../../Util";

import PanelContext from "../Panel.Context";

import personalImage from "../../assets/images/personal_content/liv2.webp";

import Bio_Info from './Info';
import Bio_Music from './Music';
import Bio_Occupation from './Occupation';
import Bio_Personality from './Personality';
const Bio_Tools = lazy(() => import('./Tools'));

const Index: Component = () => {
  let personaleParent!: HTMLDivElement;
  let bannerDefinite!: HTMLDivElement;

  createEffect(() => {
    PanelContext.panel() == "personal" ? personaleParent.classList.add(style.open) : personaleParent.classList.remove(style.open);
  });

  onMount(() => {
    bannerDefinite.style.backgroundImage = `url('${personalImage}')`;
  });

  return (
    <div class={style.personale} ref={personaleParent}>
      <div class={closeStyle.close} onclick={() => {PanelContext.setPanel(null); personaleParent.scrollTo({top: 0, behavior: "smooth"})}}>
        <span class="fas fa-arrow-right"></span>
      </div>

      <div class={style.bannerWrapper}>
        <div 
        ref={(evt) => bannerDefinite = evt}
        class={style.banner} 
        onContextMenu={(evt) => Util.preventClick(evt)} 
        draggable={false}>
          
        </div>
      </div>

      <div class={style.realName}>
        <h1>Hizkia Ray</h1>
        <p>a.k.a: <i>Ray</i></p>
      </div>

      <hr />
      <Bio_Info></Bio_Info>

      <hr />
      <div class={style.bioDetail}>
        <h1>About</h1>
        <div class={style.__bDFact}>
          <p>hello.</p>
        </div>
      </div>

      <hr />
      <div class={style.educationHistory}>
        <h1>Education</h1>
        <p>i hate school. that's it.</p>
        <ul>
          <li> <b>2021 - present</b> / Vocational High School (currently on field work practice)</li>
        </ul>
      </div>

      <hr />
      <Bio_Tools></Bio_Tools>

      <hr />
      <Bio_Occupation></Bio_Occupation>

      <Bio_Music></Bio_Music>

      <hr/>
      <Bio_Personality></Bio_Personality>

    </div>
  );
};

export default Index;
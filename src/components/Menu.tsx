import { Component, createEffect, createSignal, onMount, Signal } from 'solid-js';
import * as Util from "../Util";

import PanelContext from "./Panel.Context";

import style from "../css/Menu.module.css";

import menuMe from "../assets/images/personal_content/IMG_20220703_195227.webp";
import menuSocial from "../assets/images/personal_content/luckytohaveyou.webp";
import menuProject from "../assets/images/tab/project.webp";

const Menu: Component = () => {
  let [birthdayTime, setBirthdayTime] = createSignal("");
  let _menu_!: HTMLDivElement;

  let panel: Array<HTMLLIElement> = [];
  let panelImage: Array<HTMLDivElement> = [];

  createEffect(() => {
    // birthday
    let interval = setInterval(() => {
      let date = new Date("Jul 24 2022 00:00:00 GMT+0800").getTime() - Date.now();
      let hour = Math.floor(date / (36e5));
      let min = Math.floor((date % (36e5)) / (60e3));
      let sec = Math.floor((date % (60e3)) / 1e3);
      let zeroFront = (n: number, c?: number) => ('0' + String(n)).slice(c ? -c : -2);
      let totale = `${zeroFront(hour, hour.toString().length < 2 ? 2 : hour.toString().length)}:${zeroFront(min)}:${zeroFront(sec)}`;

      if (date < 0) {
        clearInterval(interval);
        return setBirthdayTime("");
      } else {
        return setBirthdayTime(totale);
      };
    }, 1000);

    PanelContext.panel() ? _menu_.classList.add(style.hide) : _menu_.classList.remove(style.hide);
  });

  function personalImageAppear(event: HTMLLIElement) {
    panelImage.forEach(val => val.classList.remove(style.piiActive));

    let indexBased = panel.findIndex(val => val.innerText == event.innerText);
    panelImage[indexBased].classList.add(style.piiActive)
  };

  return (
    <div class={style.menu} ref={_menu_}>
      <div class={style.inside}>
        <div class={style.personalImg}>

          <div ref={(evt) => panelImage.push(evt)} class={`${style.personalImgInside} ${style.piiActive}`}>
            <img draggable={false} onContextMenu={(evt) => Util.preventClick(evt)} loading="lazy" src={menuMe} />
          </div>

          <div ref={(evt) => panelImage.push(evt)} class={`${style.personalImgInside}`}>
            <img draggable={false} onContextMenu={(evt) => Util.preventClick(evt)} loading="lazy" src={menuSocial} />
          </div>

          <div ref={(evt) => panelImage.push(evt)} class={`${style.personalImgInside}`}>
            <img draggable={false} onContextMenu={(evt) => Util.preventClick(evt)} loading="lazy" src={menuProject} />
          </div>

        </div>

        <div class={style.list}>
          <div class={style.panel}>
            <ul>
              <li ref={(evt) => panel.push(evt)} onMouseOver={(evt) => personalImageAppear(evt.currentTarget)} onclick={() => PanelContext.setPanel("personal")}>personale</li>
              <li ref={(evt) => panel.push(evt)} onMouseOver={(evt) => personalImageAppear(evt.currentTarget)} onclick={() => PanelContext.setPanel("network")}>social</li>
              <li ref={(evt) => panel.push(evt)} onMouseOver={(evt) => personalImageAppear(evt.currentTarget)} onclick={() => PanelContext.setPanel("projects")}>projects</li>
            </ul>
          </div>

          <div class={style.transition} onContextMenu={(evt) => Util.preventClick(evt)} draggable={false} onSelect={(evt) => Util.preventClick(evt)}>
            <p>{birthdayTime()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
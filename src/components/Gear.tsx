import { Component, createEffect, For } from 'solid-js';

import PanelContext from "./Panel.Context";

import style from "../css/Gear.module.css";

import _g102 from "../assets/images/gears/logitech.g102.webp";
import _evo870 from "../assets/images/gears/samsungssdevo.870.webp";
import _s22f350 from "../assets/images/gears/samsung.s22f350.webp";
import _imperion from "../assets/images/gears/imperion.ddr3.8x2.webp";
import _sadesdragonwolf from "../assets/images/gears/sades.dragonwolf.webp";
import _k509 from "../assets/images/gears/redragon.k509.webp";
import _mdrzx110 from "../assets/images/gears/sony.mdrzx110.webp";
import _lx08 from "../assets/images/gears/usams.lx08.webp";
import _wd500 from "../assets/images/gears/wdelements.500gb.webp";
import _sonicgearAirphone from "../assets/images/gears/sonicgear.airphone.7.webp";

const gears = [
  {
    title: "Logitech G102 LIGHTSYNC (Black)",
    description: "Good on-budget mouse, I do like it a lot.",
    url: "https://www.logitechg.com/en-us/products/gaming-mice/g102-lightsync-rgb-gaming-mouse.html",
    image: _g102
  },
  {
    title: "Samsung SSD 870 EVO (500 GB)",
    description: "Not a gamer, but this is speedy enough for daily basis.",
    url: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/870-evo-sata-2-5-ssd-500gb-mz-77e500b-am/",
    image: _evo870
  },
  {
    title: "SonicGear AIRPHONE 7",
    description: "My head is too big, this almost doesn't fit, but it did. Overall, the audio quality is banger.",
    url: "https://leapfroglobal.com/sonicgear/Sonicgear-airphone-7/sonicgear-personal-audio-bluetooth-headphones",
    image: _sonicgearAirphone
  },
  {
    title: "Samsung LED Monitor (SF35 Series, S22F350)",
    description: "Low budget FHD monitor. So good.",
    url: "https://displaysolutions.samsung.com/monitor/detail/1047/S22F350",
    image: _s22f350
  },
  {
    title: "Imperion DDR3 (8x2 GB)",
    description: "Looks sus to you, but it just works, on the fly.",
    url: "https://www.tokopedia.com/imperionofficial/ram-imperion-ddr3-8gb-1600-mhz-pc12800-ram-pc-longdimm-102",
    image: _imperion
  },
  {
    title: "Sades Dragon Wolf [TKL]",
    description: "Super fucking loud keyboard, but crunchy.",
    url: "https://www.tokopedia.com/sades-official/sades-dragon-wolf-tkl-mechanical-gaming-keyboard-switch-cherry-mx-keyboard",
    image: _sadesdragonwolf
  },
  {
    title: "Redragon K509 DYAUS 7",
    description: "Looks cool for me. The typing sound is ASMR-able.",
    url: "https://www.redragonzone.com/products/redragon-k509-dyaus-7-colors-backlit-gaming-keyboard",
    image: _k509
  },
  {
    title: "SONY MDR-ZX110AP",
    description: "A simple cheap headphone, just for basic production kind-of stuff.",
    url: "https://electronics.sony.com/audio/headphones/headband/p/mdrzx110-blk",
    image: _mdrzx110
  },
  {
    title: "USAMS LX-08",
    description: "The bass is fire. Trust me. I don't regret buying this.",
    url: "http://www.usams.com.cn/page90?product_id=2077",
    image: _lx08
  },
  {
    title: "WD Elements Portable (500GB)",
    description: "Need an external drive to place private/important things.",
    url: "https://www.westerndigital.com/en-sg/products/portable-drives/wd-elements-portable-usb-3-0-hdd#WDBUZG5000ABK-WESN",
    image: _wd500
  },
];

const Gear: Component = () => {
  let gearParent!: HTMLDivElement;
  let gearInsider!: HTMLDivElement;

  createEffect(() => {
    PanelContext.panel() == "gear" ? gearParent.classList.add(style.active) : gearParent.classList.remove(style.active);
  });

  return (
    <div class={`${style.squarish} ${style.gear}`} ref={gearParent}>
      <div class={style.title}> <h1>Workstation Gears</h1> </div>

      <div class={style.close} onclick={() => {PanelContext.setPanel(null); gearInsider.scrollTo({top: 0, behavior: "auto"})}}>
        <span></span>
      </div>

      <div class={style.inside}>
        <div class={style.gearlist} ref={gearInsider}>

          <For each={gears}>{(state) => {
            return (
              <div class={style.gear}>
                <div class={style.gearbgprev} style={{"background-image": `url('${state.image}')`}}></div>

                <div class={style.info}>
                  <h1>{state.title}</h1>
                  <p>{state.description}</p>
                  <a target="_blank" href={state.url}>Take A Look</a>
                </div>
              </div>
            );
          }}</For>

        </div>

      </div>
    </div>
  );
};

export default Gear;
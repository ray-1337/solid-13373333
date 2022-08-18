import { Component, createEffect, lazy, onCleanup, onMount } from 'solid-js';
import { MetaProvider, Link } from "solid-meta";

import Menu from './components/Menu';
import { randomizer } from './Util';

// import personalImage from "./assets/images/personal_content/IMG_20220703_195320.webp";
import favicon from "./assets/images/favicon.ico";

const Bio = lazy(() => import("./components/Bio/Index"));
const Social = lazy(() => import('./components/Social'));
const Project = lazy(() => import('./components/Project'));
const Gear = lazy(() => import('./components/Gear'));

const Index: Component = () => {
  function ignoreTab(event: KeyboardEvent) {
    if (event.key == "Tab" || event.keyCode == 9) {
      return event.preventDefault();
    };
  };

  onMount(() => {
    document.title = "unsatisfied future.";
    document.documentElement.addEventListener("keydown", (event) => ignoreTab(event));
  });

  onCleanup(() => {
    document.documentElement.removeEventListener("keydown", (event) => ignoreTab(event));
  });

  return (
    <MetaProvider>
      {/* <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@ray__1337" />
      <Meta name="twitter:creator" content="@ray__1337" />
      <Meta name="theme-color" content="#f7a937"/>
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="13373333.one" />
      <Meta property="og:description" content="In his right hand he held seven stars, and coming out of his mouth was a sharp, double-edged sword. His face was like the sun shining in all its brilliance."/>
      <Meta property="twitter:image" content={personalImage}/>
      <Meta property="og:image" content={personalImage}/> */}
      <Link href={favicon} rel="shortcut icon"/>
      <Link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="preload stylesheet"/>
      <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="preload stylesheet"/>

      <>
        <Menu></Menu>

        <Bio></Bio>

        <Social></Social>

        <Project></Project>

        <Gear></Gear>
      </>
    </MetaProvider>
  );
};

export default Index;
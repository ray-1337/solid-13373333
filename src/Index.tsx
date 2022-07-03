import { Component, lazy, onCleanup, onMount } from 'solid-js';
import { MetaProvider, Meta, Link, Title } from "solid-meta";

import Menu from './components/Menu';

import personalImage from "./assets/images/personal_content/IMG_20220703_195320.webp";
import favicon from "./assets/images/favicon.ico";

const Bio = lazy(() => import("./components/Bio/Index"));
const Social = lazy(() => import('./components/Social'));
const Project = lazy(() => import('./components/Project'));

const Index: Component = () => {
  function ignoreTab(event: KeyboardEvent) {
    if (event.key == "Tab" || event.keyCode == 9) {
      return event.preventDefault();
    };
  };

  onMount(() => {
    document.documentElement.addEventListener("keydown", (event) => ignoreTab(event));
  });

  onCleanup(() => {
    document.documentElement.removeEventListener("keydown", (event) => ignoreTab(event));
  })

  return (
    <MetaProvider>
      <Title>sorry for wasting your times. []</Title>
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@ray__1337" />
      <Meta name="twitter:creator" content="@ray__1337" />
      <Meta name="theme-color" content="#f7a937"/>
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="13373333.one" />
      <Meta property="og:description" content="In his right hand he held seven stars, and coming out of his mouth was a sharp, double-edged sword. His face was like the sun shining in all its brilliance."/>
      <Meta property="twitter:image" content={personalImage}/>
      <Meta property="og:image" content={personalImage}/>
      <Link href={favicon} rel="shortcut icon"/>

      <>
        <Menu></Menu>

        <Bio></Bio>

        <Social></Social>

        <Project></Project>
      </>
    </MetaProvider>
  );
};

export default Index;
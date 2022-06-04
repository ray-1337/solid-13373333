import { Component, lazy, onCleanup, onMount } from 'solid-js';

import Menu from './components/Menu';

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
    <>
      <Menu></Menu>

      <Bio></Bio>

      <Social></Social>

      <Project></Project>
    </>
  );
};

export default Index;
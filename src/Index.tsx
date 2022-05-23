import { Component, lazy } from 'solid-js';

import Menu from './components/Menu';

const Bio = lazy(() => import("./components/Bio/Index"));
const Social = lazy(() => import('./components/Social'));
const Project = lazy(() => import('./components/Project'));

const Index: Component = () => {
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
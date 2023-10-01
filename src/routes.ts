import React from 'react';
import { HomePage } from './components/HomePage';
import { NotFound } from './components/NotFound';

const routes: Array<{ path: string; component: React.ComponentType }> = [
  { path: '/', component: HomePage },
  { path: '*', component: NotFound },
];

export default routes;

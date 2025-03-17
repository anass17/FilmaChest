import React from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Provider } from 'react-redux';
import store from './store';

const app = document.getElementById('app');

createRoot(app).render(
  <Provider store={store}>
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    />
  </Provider>
);

InertiaProgress.init({
  color: '#FF5F2A',
});
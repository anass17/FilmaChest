// import './bootstrap';

// import React from 'react';
// import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'

// createInertiaApp({
//   resolve: async name => {
//     const pages = import.meta.glob('./pages/**/*.jsx')
//     const page = await pages[`./pages/${name}.jsx`]()
//     return page.default
//   },
//   setup({ el, App, props }) {
//       createRoot(el).render(<App {...props} />)
//   },
// })

import React from 'react';
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

const app = document.getElementById('app');

createRoot(app).render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    />
);

InertiaProgress.init({
  color: '#FF5F2A',
});
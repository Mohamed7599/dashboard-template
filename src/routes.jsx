// routes.js
import React from 'react';
import Analytics from './views/Analytics/Analytics';
import Discover from './views/Discover/Discover';
import Sales from './views/Sales/Sales';
import Automotive from './views/Automotive/Automotive';
import SmartHome from './views/SmartHome/SmartHome';

export const routes = [
    { path: "/", element: <Analytics /> },
    { path: "/analytics", element: <Analytics /> },
    { path: "/discover", element: <Discover />},
    { path: "/sales", element: <Sales />},
    { path: "/automotive", element: <Automotive /> },
    { path: "/smart-home", element: <SmartHome /> },
];

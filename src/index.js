import React from 'react';
import { render } from 'react-dom';
import DefaultLayout from '@/layout/DefaultLayout';

render((
    <DefaultLayout />
), document.getElementById('root'))

module.hot.accept();
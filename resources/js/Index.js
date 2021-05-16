import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Importando componentes */
import Router from './Router'

if (document.getElementById('root')) {
    ReactDOM.render(<Router/>, document.getElementById('root'));
}

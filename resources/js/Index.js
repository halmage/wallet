import React from 'react'
import ReactDOM from 'react-dom'

/* Importando componentes */
import Router from './Router'

if (document.getElementById('root')) {
    ReactDOM.render(<Router/>, document.getElementById('root'))
}

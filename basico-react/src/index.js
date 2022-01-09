import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './component/Primeiro'
import Parametro from './component/Parametro'

ReactDOM.render( 
    <>
        <Primeiro/>
        <Parametro titulo="esse é o primeiro titulo" subtitulo="esse é o subtitulo" />
    </>,

    document.getElementById('root')
)
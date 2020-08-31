import React, { useState } from 'react'
import { MainView } from './MainView'
import { Login } from './Login'

export const Home = () => {
    const [activeView, setActiveView] = useState('mainView')

    const handleChangeView = (view) => {
        setActiveView(view)
    }

    switch (activeView) {
        case 'mainView':
            return <MainView onChangeView={handleChangeView} />
        case 'login':
            return <Login onChangeView={handleChangeView} />
    }
}

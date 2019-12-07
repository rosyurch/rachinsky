import React, { useState } from 'react';
import './App.css';
import './AddPlayerPopup';
import AddPlayerPopup from './AddPlayerPopup';

function App() {
    const [players, setPlayers] = useState([]);
    const [addPopupIsOpened, setAddPopupIsOpened] = useState(true);

    const addPlayerSubmit = e => {
        e.preventDefault();
        console.log(e.target.playerName.value);
        // setAddPopupIsOpened(false);
    };

    const addPlayerButtonHandle = e => {
        // console.log('button click');
        // setAddPopupIsOpened(true);
    };

    return (
        <div className="App">
            <header className="header">Свояк9000</header>
            <div className="add-player-wrap">
                <button className="add-player" onClick={addPlayerButtonHandle}>
                    <span className="plus-sign">+</span>
                </button>
                {addPopupIsOpened && <AddPlayerPopup add={addPlayerSubmit} />}
            </div>
        </div>
    );
}

export default App;

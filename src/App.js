import React, { useState } from 'react';
import './App.css';
import './AddPlayerPopup.css';
import AddPlayerPopup from './AddPlayerPopup';
import generateId from './id'; // only for a one game

function App() {
    const [players, setPlayers] = useState([
        { id: 0, name: '123', answers: [] },
        { id: 1, name: '456', answers: [] },
        { id: 9, name: '89+', answers: [] },
    ]);
    const [addPopupIsOpened, setAddPopupIsOpened] = useState(false);
    const [name, setName] = useState(''); // for getting player name form popup

    const addPlayerSubmit = e => {
        e.preventDefault();
        const id = generateId(players);
        setPlayers([...players, { id, name, answers: [] }]);
        setAddPopupIsOpened(false);
    };

    const addPlayerButtonHandle = e => {
        setAddPopupIsOpened(true);
    };

    const getNameFromInput = e => {
        setName(e.target.value);
    };

    return (
        <div className="App">
            <header className="header">Свояк9000</header>
            <div className="score-field">
                {players.map(player => (
                    <div>
                        <h3>{player.name}</h3>
                        
                    </div>
                ))}
            </div>
            <div className="add-player-wrap">
                <button className="add-player" onClick={addPlayerButtonHandle}>
                    <span className="plus-sign">+</span>
                </button>
                {addPopupIsOpened && <AddPlayerPopup add={addPlayerSubmit} change={getNameFromInput} />}
            </div>
        </div>
    );
}

export default App;

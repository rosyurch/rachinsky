import React, { useState } from 'react';
import './css/App.css';
import generateId from './helpers/id'; // only for a single game
import AddButton from './AddButton';

function App() {
    const [players, setPlayers] = useState([
        // mocked players
        { id: 0, name: '123', answers: [10, -20, 30, -10, 20] },
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

    const closeTheAddPlayerPopup = e => {
        e.preventDefault();
        setAddPopupIsOpened(false);
    };

    return (
        <div className="App">
            <header className="header">Свояк9000</header>

            <ul className="score-field">
                {players.map(player => (
                    <li key={player.id}>
                        <h3>{player.name}</h3>
                    </li>
                ))}
            </ul>

            <AddButton
                addPlayer={addPlayerButtonHandle}
                add={addPlayerSubmit}
                change={getNameFromInput}
                close={closeTheAddPlayerPopup}
                isOpened={addPopupIsOpened}
            />
        </div>
    );
}

export default App;

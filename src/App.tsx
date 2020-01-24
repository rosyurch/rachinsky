import React, { useState } from 'react';
import generateId from './helpers/id'; // only for a single game
import AddButton from './AddButton';
import Player from './Player';
import './css/App.css';

type Player = {
    id: number;
    name: string;
    answers: number[];
};

function App() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [addPopupIsOpened, setAddPopupIsOpened] = useState(false);
    const [name, setName] = useState(''); // for getting player name form popup

    const addPlayerSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const id = generateId(players);
        setPlayers([...players, { id, name, answers: [] }]);
        setAddPopupIsOpened(false);
    };

    const addPlayerButtonHandle = (): void => {
        setAddPopupIsOpened(true);
    };

    const getNameFromInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    };

    const closeTheAddPlayerPopup = (e: React.FormEvent): void => {
        e.preventDefault();
        setAddPopupIsOpened(false);
    };

    const deletePlayer = (id: number): void => {
        const newState = players.filter(p => p.id !== id);
        setPlayers(newState);
    };

    const resetPlayerScore = (id: number, name: string): void => {
        const arrWithoutOne = players.filter(p => p.id !== id);
        const newState = [...arrWithoutOne, { id, name, answers: [] }];
        setPlayers(newState);
    };

    const registerAnswer = (id: number, name: string, answers: number[], price: number): void => {
        const playersWithoutCurrent = players.filter(p => p.id !== id);

        const registeredAnswer = [...answers, price];
        const newState = [...playersWithoutCurrent, { id, name, answers: registeredAnswer }];

        setPlayers(newState);
    };

    return (
        <div className="App">
            <header className="header">Свояк9000</header>

            <ul className="score-field">
                {players
                    .sort((a, b) => a.id - b.id)
                    .map(player => (
                        <li key={player.id}>
                            <Player {...player} press={registerAnswer} deletePlayer={deletePlayer} reset={resetPlayerScore} />{' '}
                            {/* like an actual button press*/}
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

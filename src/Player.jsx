import React from 'react';
import './css/player.css';

function Player({ id, name, answers, press, reset, deletePlayer }) {
    const pressed = price => press(id, name, answers, price);

    return (
        <div className="player_card">
            <div className="player_header">
                <button className="player_control player_delete" onClick={e => deletePlayer(id)}>
                    &#128465;
                </button>
                <h3 className="player_name">{name}</h3>
                <p className="player_score">{answers.reduce((acc, cur) => acc + cur, 0)}</p>
                <button className="player_control player_reset" onClick={e => reset(id, name)}>
                    &#10227;
                </button>
            </div>
            <ul className="player_answers-list">
                {answers.map(ans => (
                    <li key={Math.random() * 1000} className={`player_answer player_answer-${ans > 0 ? 'correct' : 'wrong'}`}>
                        {ans}
                    </li> // probably not a good solution for the key (with repetitive data)
                ))}
            </ul>
            <hr className="player_answer-button-separator" />
            <div className="player_buttons player_positive-buttons">
                <button className="player_button player_button-pos" onClick={e => pressed(10)}>
                    +10
                </button>
                <button className="player_button player_button-pos" onClick={e => pressed(20)}>
                    +20
                </button>
                <button className="player_button player_button-pos" onClick={e => pressed(30)}>
                    +30
                </button>
                <button className="player_button player_button-pos" onClick={e => pressed(40)}>
                    +40
                </button>
                <button className="player_button player_button-pos" onClick={e => pressed(50)}>
                    +50
                </button>
            </div>
            <div className="player_negative-buttons">
                <button className="player_button player_button-neg" onClick={e => pressed(-10)}>
                    -10
                </button>
                <button className="player_button player_button-neg" onClick={e => pressed(-20)}>
                    -20
                </button>
                <button className="player_button player_button-neg" onClick={e => pressed(-30)}>
                    -30
                </button>
                <button className="player_button player_button-neg" onClick={e => pressed(-40)}>
                    -40
                </button>
                <button className="player_button player_button-neg" onClick={e => pressed(-50)}>
                    -50
                </button>
            </div>
        </div>
    );
}

export default Player;

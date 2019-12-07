import React, { useState } from 'react';
import './AddPlayerPopup.css';

function AddPopup({ add }) {
    const [name, setName] = useState('');

    return (
        <form className="add-popup" onClick={add}>
            <label htmlFor="playerName">Имя:</label>
            <input
                name="playerName"
                type="text"
                onChange={e => {
                    setName(e.target.value);
                }}
            />
            <button>+</button>
        </form>
    );
}

export default AddPopup;

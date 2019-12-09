import React from 'react';
import './AddPlayerPopup.css';

function AddPopup({ add, change }) {
    return (
        <form className="add-popup" onSubmit={add}>
            <label htmlFor="playerName">Имя:</label>
            <input className="add-popup_input" name="playerName" type="text" onChange={change} autoFocus required />
            <button className="add-popup_button">+</button>
        </form>
    );
}

export default AddPopup;

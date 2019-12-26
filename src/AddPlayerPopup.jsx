import React from 'react';
import './css/AddPlayerPopup.css';

function AddPlayerPopup({ add, change, close }) {
    return (
        <form id="add-popup" className="add-popup" onSubmit={add}>
            <label htmlFor="playerName">Имя:</label>
            <input className="add-popup_input" id="playerName" type="text" onChange={change} autoFocus required />
            <div>
                <button className="add-popup_button">+</button>
                <button className="add-popup_button add-popup_close" onClick={close}>
                    X
                </button>
            </div>
        </form>
    );
}

export default AddPlayerPopup;

import React from 'react';
import AddPlayerPopup from './AddPlayerPopup';

function AddButton({ addPlayer, add, change, close, isOpened }) {
    return (
        <div className="add-player-wrap">
            <button className="add-player" onClick={addPlayer}>
                <span className="plus-sign">+</span>
            </button>
            {isOpened && <AddPlayerPopup add={add} change={change} close={close} />}
        </div>
    );
}

export default AddButton;

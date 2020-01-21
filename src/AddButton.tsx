import React from 'react';
import AddPlayerPopup from './AddPlayerPopup';

type Props = {
    addPlayer: () => void;
    add: (e: React.FormEvent) => void;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    close: (e: React.FormEvent) => void;
    isOpened: boolean;
};

function AddButton({ addPlayer, add, change, close, isOpened }: Props) {
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

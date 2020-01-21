type player = {
    id: number;
    name: string;
    answers: number[];
};

const generateId = (players: Array<player>): number => {
    const max = players.map((p: player) => p.id).reduce((acc, cur) => (acc > cur ? acc : cur), 0);
    return players.length === 0 ? 0 : max + 1; // starts with 0
};

export default generateId;

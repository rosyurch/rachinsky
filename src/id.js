const generateId = players => {
    const max = players.map(p => p.id).reduce((acc, cur) => (acc > cur ? acc : cur), 0);
    return players.length === 0 ? 0 : max + 1; // starts with 0
};

export default generateId;

var numberOfBoomerangs = function(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const distance = getDistance(points[i], points[j]);
                map.set(distance, (map.get(distance) || 0) + 1);
            }
        }
        for (const [_, count] of map) {
            res += count * (count - 1);
        }
    }
    return res;
};

const getDistance = (p1, p2) => {
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    return dx * dx + dy * dy;
};
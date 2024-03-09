var maxAreaOfIsland = function(grid) {
    let maxNum = 0
    for(let i =0; i < grid.length;i++) {
        let value = 0;
        for(let j = 0; j < grid[i].length; j++) {
           value += grid[i][j]
        }
        if(value > maxNum) {
            maxNum = value
        }
    } 
    return maxNum
 };
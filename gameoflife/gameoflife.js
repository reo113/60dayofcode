var gameOfLife = function (board) {
    let bfs = (r, c) => {
        let count = 0
        let isValid = (r, c) => {
            return r < 0 || r >= nr || c < 0 || c >= nc || board[r][c] === undefined ? false : true
        }
        if (isValid(r + 1, c)) {
            if (board[r + 1][c] === 1) count++

        }
        if (isValid(r - 1, c)) {
            if (board[r - 1][c] === 1) count++

        }
        if (isValid(r, c + 1)) {
            if (board[r][c + 1] === 1) count++

        }
        if (isValid(r, c - 1)) {
            if (board[r][c - 1] === 1) count++

        }
        if (isValid(r + 1, c + 1)) {
            if (board[r + 1][c + 1] === 1) count++

        }
        if (isValid(r - 1, c - 1)) {
            if (board[r - 1][c - 1] === 1) count++

        }
        if (isValid(r + 1, c - 1)) {
            if (board[r + 1][c - 1] === 1) count++

        }
        if (isValid(r - 1, c + 1)) {
            if (board[r - 1][c + 1] === 1) count++

        }
        if (board[r][c] === 1) {
            if (count > 3) {
                grid[r][c] = 0
            }
            else if (count < 2) {
                grid[r][c] = 0
            }
        } else if (board[r][c] === 0) {
            if (count === 3) {
                grid[r][c] = 1
            }
        }

    }

    let nr = board.length
    let nc = board[0].length
    let grid = board.map(row => [...row])
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            bfs(r, c)
        }
    }
    bfs(0, 0)
    grid.forEach((row, i) => {
        row.forEach((value, j) => {
            board[i][j] = value;
        });
    });
    return board

};


let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
console.log(gameOfLife(board))
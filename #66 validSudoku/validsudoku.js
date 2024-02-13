
function isValidSet(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '.') {
            if (set.has(arr[i])) {
                return false;
            }
            set.add(arr[i]);
        }
    }
    return true;
}

function isValidSudoku(board) {
    // Check rows
    for (let i = 0; i < 9; i++) {
        if (!isValidSet(board[i])) {
            return false;
        }
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        const column = [];
        for (let j = 0; j < 9; j++) {
            column.push(board[j][i]);
        }
        if (!isValidSet(column)) {
            return false;
        }
    }

    // Check sub-boxes
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const subBox = [];
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    subBox.push(board[k][l]);
                }
            }
            if (!isValidSet(subBox)) {
                return false;
            }
        }
    }

    return true;
}
function sudoku(board) {
    let set = new Set()
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            let val = board[r][c]
            if (val === '.') continue
            if (set.has(`r${r}_${val}`) || set.has(`c${c}_${val}`) ||
                set.has(`s${Math.floor(r / 3)}_${Math.floor(c / 3)}_${val}`)) {
                return false
            }
            set.add(`r${r}_${val}`)
            set.add(`c${c}_${val}`)
            set.add(`s${Math.floor(r / 3)}_${Math.floor(c / 3)}_${val}`)

        }
    }
    return true

}



let board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(sudoku(board))
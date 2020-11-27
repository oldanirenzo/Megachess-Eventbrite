const king = async (board, from_row, from_col, sameColor, enemyColor, eatPiece, movePiece) => {

    let kingMovements = [];

    // MOVIMIENTO DEL REY
    for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {
            if ((from_row + row || from_col + col) > 15 || (from_row + row || from_col + col) < 0) {
                continue;
            }
            if (sameColor.includes(board[from_row + row][from_col + col])) {
                continue;
            }
            if (' '.includes(board[from_row + row][from_col + col])) {
                kingMovements.push({
                    value: movePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                })
            }
            if (enemyColor.includes(board[from_row + row][from_col + col])) {
                kingMovements.push({
                    value: eatPiece[board[from_row + row][from_col + col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                })
            }
        }
    }
    return kingMovements;
}
module.exports = king;
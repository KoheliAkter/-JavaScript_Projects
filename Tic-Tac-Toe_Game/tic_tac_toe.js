let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function cellClicked(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById(`cell${index}`).innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').innerText = `Player ${board[a]} wins!`;
            gameOver = true;
            return;
        }
    }

    if (board.every(cell => cell !== '')) {
        document.getElementById('status').innerText = "It's a draw!";
        gameOver = true;
        return;
    }
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}

const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

// Опции для рисования
const nodeRadius = 20;
const levelHeight = 70;

// Функция для рисования узлов дерева
function drawTree(node, x, y, angle, depth) {
    if (node === null) {
        return;
    }

    // Вычисляем позицию для левого и правого потомков
    const xOffset = 150 / depth;
    const leftX = x - xOffset;
    const rightX = x + xOffset;
    const nextY = y + levelHeight;

    // Рисуем линии к потомкам
    if (node.left) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(leftX, nextY);
        ctx.stroke();
        drawTree(node.left, leftX, nextY, angle - 15, depth + 1);
    }
    if (node.right) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(rightX, nextY);
        ctx.stroke();
        drawTree(node.right, rightX, nextY, angle + 15, depth + 1);
    }

    // Рисуем круг для текущего узла
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    // Рисуем значение узла
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.value, x, y);
}
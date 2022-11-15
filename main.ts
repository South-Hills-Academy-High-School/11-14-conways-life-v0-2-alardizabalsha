namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newCursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRow += -1
    cursorY += -10
    drawGrid()
})
function neghborcountwraptop (currentrow: string, currentcol: string) {
    neighbor_count = 0
    if (0 == 0) {
        neighbor_count += grid[11][15]
    } else {
        neighbor_count += grid[0 - 1][0 - 0]
    }
    if (0 == 0 && (0 as any) == (15 as any)) {
        neighbor_count += grid[11][0]
    } else if (0 == 0) {
        neighbor_count += grid[11][0 + 1]
    } else {
        neighbor_count += grid[0 - 1][0 - 1]
    }
    if ((0 as any) == (15 as any)) {
        neighbor_count += grid[11][0]
    } else {
        neighbor_count += grid[0 - 0][0 + 1]
    }
    if (0 == 0 && (0 as any) == (15 as any)) {
        neighbor_count += grid[11][0]
    } else if (0 == 0) {
        neighbor_count += grid[11][0 + 1]
    } else {
        neighbor_count += grid[0 - 1][0 + 1]
    }
    return neighbor_count
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorGridRow][cursorGridCol] = grid[cursorGridRow][cursorGridCol] * -1 + 1
    drawGrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    cursorX += -10
    drawGrid()
})
function countneighbors2 (current_row: number, Currentcolumn: number) {
    neighbor_count = 0
    if (current_row == 0 && Currentcolumn == 0) {
        neighbor_count += grid[11][15]
    } else if (current_row == 0) {
        neighbor_count += grid[11][Currentcolumn - 1]
    } else {
        neighbor_count += grid[current_row - 1][Currentcolumn - 1]
    }
}
function copyleft (whichrow: number) {
    return grid[whichrow][0]
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    cursorX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    f f f f f f f f f f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f 7 7 7 7 7 7 7 7 f 
                    f f f f f f f f f f 
                    `, SpriteKind.Player)
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    cursor.left = cursorX
    cursor.top = cursorY
    neighbor_count_sprite.left = cursorX
    neighbor_count_sprite.top = cursorY
    neighbor_count_sprite.setText(convertToText(countneighbors(cursorGridRow, cursorGridCol)))
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRow += 1
    cursorY += 10
    drawGrid()
})
function countneighbors (current_row: number, Currentcolumn: number) {
    neighbor_count = 0
    if (current_row == 0 && Currentcolumn == 0) {
        neighbor_count += grid[11][15]
    } else if (current_row == 0) {
        neighbor_count += grid[11][Currentcolumn - 1]
    } else {
        neighbor_count += grid[current_row - 1][Currentcolumn - 1]
    }
    if (current_row == 0) {
        neighbor_count += grid[11][Currentcolumn]
    } else {
        neighbor_count += grid[current_row - 1][Currentcolumn - 0]
    }
    if (current_row == 0 && Currentcolumn == 15) {
        neighbor_count += grid[11][0]
    } else if (current_row == 0) {
        neighbor_count += grid[11][Currentcolumn + 1]
    } else {
        neighbor_count += grid[current_row - 1][Currentcolumn - 1]
    }
    if (Currentcolumn == 15) {
        neighbor_count += grid[current_row][0]
    } else {
        neighbor_count += grid[current_row - 0][Currentcolumn + 1]
    }
    if (current_row == 0 && Currentcolumn == 15) {
        neighbor_count += grid[11][0]
    } else if (current_row == 0) {
        neighbor_count += grid[11][Currentcolumn + 1]
    } else {
        neighbor_count += grid[current_row - 1][Currentcolumn + 1]
    }
    return neighbor_count
}
function CopyRight (whichrow: number) {
    return grid[whichrow][15]
}
function copybottom () {
    return grid[11]
}
function copyTop () {
    return grid[0]
}
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let neighbor_count = 0
let neighbor_count_sprite: TextSprite = null
let cursorY = 0
let cursorX = 0
let cursorGridRow = 0
let cursorGridCol = 0
let cursor: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(0)
    }
}
cursor = sprites.create(img`
    3 3 3 3 . . 3 3 3 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    . . . . . . . . . . 
    . . . . . . . . . . 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 3 3 3 . . 3 3 3 3 
    `, SpriteKind.newCursor)
cursorGridCol = 7
cursorGridRow = 5
cursorX = 70
cursorY = 50
cursor.z = 10
neighbor_count_sprite = textsprite.create("")
neighbor_count_sprite.z = 10
drawGrid()

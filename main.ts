function whitch_one () {
    list = ["faster", "points"]
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    sprite_1,
    [img`
        . . . . 3 3 3 3 . . . . . 
        . . 3 3 c c c c 3 3 . . . 
        . 3 3 c c c c c c 3 3 . . 
        3 3 c c c c c c c c 3 3 . 
        3 3 c c 3 c c c c c c 3 . 
        3 3 3 3 3 c c c 3 c c 3 . 
        3 3 3 3 c c c 3 c c 3 3 . 
        3 3 3 3 3 3 3 3 3 3 3 3 . 
        3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 . . 
        f 4 3 3 3 3 3 3 3 3 4 3 . 
        4 4 f 6 6 6 6 6 6 6 4 4 . 
        4 4 f 6 6 6 6 6 6 f 4 4 . 
        . 2 2 f f f f f f 2 2 . . 
        1 1 2 f f 2 2 f f 2 1 1 . 
        1 1 2 2 2 2 2 2 2 2 1 1 . 
        . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 . . . . 
        . . . 3 3 c c c c 3 3 . . 
        . 3 3 3 c c c c c c 3 3 . 
        3 3 c c c c c c c c c 3 3 
        3 c c c c 3 c c c c c c 3 
        . 3 3 3 3 c c c c 3 c c 3 
        . 3 3 3 3 c c 3 c c c 3 3 
        . 3 3 3 3 3 3 3 3 3 3 3 3 
        . 3 3 3 3 3 3 3 3 3 3 3 3 
        . . 3 3 3 3 3 3 3 3 3 3 . 
        . . 4 3 3 3 3 3 3 3 3 3 . 
        . . 4 3 3 3 3 3 3 3 3 4 3 
        . . 4 6 6 6 6 6 6 6 4 4 4 
        . . 4 f f f f f f f 4 4 . 
        . . 2 f f f 2 2 2 2 2 2 . 
        . 1 1 2 2 2 2 2 2 2 2 1 1 
        . 1 1 2 2 2 2 2 2 2 2 1 1 
        . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 . . . . 
        . . . 3 3 c c c c 3 3 . . 
        . . 3 3 c c c c c c 3 3 . 
        . 3 3 3 c c c c c c c 3 3 
        3 3 3 c c c c c c c c c 3 
        3 3 c c c 3 c c c c c c 3 
        . 3 3 3 3 3 c c c 3 c 3 3 
        . 3 3 3 3 c c 3 3 c 3 3 3 
        . . 3 3 3 3 3 3 3 3 3 3 3 
        . . 3 3 3 3 3 3 3 3 3 3 . 
        . . 3 3 3 3 3 3 3 3 3 4 . 
        . 3 4 3 3 3 3 3 3 3 3 4 . 
        . 4 4 4 6 6 6 6 6 6 6 4 . 
        . . 4 4 f f f f f f f 4 . 
        . 1 1 2 2 2 2 2 f f f 1 1 
        . 1 1 2 2 2 2 2 2 2 2 1 1 
        . . 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    whitch_one()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    sprite_1,
    [img`
        . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 . 
        . . 3 3 3 c 3 3 3 3 3 3 . 
        . 3 3 3 c 3 3 3 c 3 3 3 3 
        3 3 c c 3 3 3 c c 3 3 c 3 
        3 3 3 3 3 4 3 3 3 3 c c 3 
        . 3 3 3 4 4 3 3 3 3 3 3 3 
        . 3 3 3 4 4 f 9 3 4 4 3 3 
        . . f f 4 4 f 9 4 4 4 3 3 
        . . . f 4 4 4 4 4 3 3 3 . 
        . . . f f 6 6 6 6 4 4 4 . 
        . . . f 6 6 6 6 6 4 4 f . 
        . . f f 6 6 6 6 f 6 6 f . 
        . . f f f f f f f f f f . 
        . 2 2 f f f 2 . . f f . . 
        . 1 1 2 2 2 2 2 2 . . . . 
        . 1 1 2 2 2 1 1 2 . . . . 
        . . . . . . 1 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 . 
        . . 3 3 3 c 3 3 3 3 3 3 . 
        . 3 3 3 c 3 3 3 c 3 3 3 3 
        3 3 c c 3 3 3 c c 3 3 c 3 
        3 3 3 3 3 4 3 3 3 3 c c 3 
        . 3 3 3 4 4 3 3 3 3 3 3 3 
        . . 3 3 4 4 f 9 3 4 4 3 3 
        . . f f 4 4 f 9 4 4 4 3 . 
        . . . f 4 4 4 4 4 3 3 3 . 
        . . . f f 6 6 6 6 6 f . . 
        . . . f 6 6 6 6 6 4 4 . . 
        . . f f 6 6 f 6 6 4 4 f . 
        . . f f f f f f f f f f . 
        2 2 2 2 f f 2 . . f f . . 
        2 2 2 2 2 2 2 2 2 . . . . 
        . 1 1 2 2 2 1 1 2 . . . . 
        . 1 1 . . . 1 1 . . . . . 
        `,img`
        . . . . . 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 . 
        . . 3 3 3 c 3 3 3 3 3 3 . 
        . . 3 3 c 3 3 3 c 3 3 3 3 
        3 3 c c 3 3 3 c c 3 3 c 3 
        3 3 3 3 3 4 3 3 3 3 c c 3 
        . 3 3 3 4 4 3 3 3 3 3 3 3 
        . . 3 3 4 4 f 9 3 4 4 3 3 
        . . . 3 4 4 f 9 4 4 4 3 . 
        . . . 3 4 4 4 4 4 3 3 3 . 
        . . . f f 4 4 4 4 4 3 . . 
        . . . f 6 6 6 4 4 6 6 . . 
        . . . f 6 6 6 4 4 6 6 . . 
        . . . f 6 6 6 f 6 6 f . . 
        . 2 2 2 f f f f f f . . . 
        . 2 2 2 2 2 f f f 2 2 2 . 
        . . 1 1 2 2 2 2 2 1 1 2 . 
        . . 1 1 . . . . . 1 1 . . 
        . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    whitch_one()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile5`, function (sprite, location) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    sprite_1,
    [img`
        . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 . . . . 
        . 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 c 3 3 3 . . 
        3 3 3 3 c 3 3 3 c 3 3 3 . 
        3 c 3 3 c c 3 3 3 c c 3 3 
        3 c c 3 3 3 3 4 3 3 3 3 3 
        3 3 3 3 3 3 3 4 4 3 3 3 . 
        3 3 4 4 3 9 f 4 4 3 3 3 . 
        3 3 4 4 4 9 f 4 4 f f . . 
        . 3 3 3 4 4 4 4 4 f . . . 
        . 4 4 4 6 6 6 6 f f . . . 
        . f 4 4 6 6 6 6 6 f . . . 
        . f 6 6 f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . 2 f f f 2 2 . 
        . . . . 2 2 2 2 2 2 1 1 . 
        . . . . 2 1 1 2 2 2 1 1 . 
        . . . . . 1 1 . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 . . . . 
        . 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 c 3 3 3 . . 
        3 3 3 3 c 3 3 3 c 3 3 3 . 
        3 c 3 3 c c 3 3 3 c c 3 3 
        3 c c 3 3 3 3 4 3 3 3 3 3 
        3 3 3 3 3 3 3 4 4 3 3 3 . 
        3 3 4 4 3 9 f 4 4 3 3 . . 
        . 3 4 4 4 9 f 4 4 f f . . 
        . 3 3 3 4 4 4 4 4 f . . . 
        . . f 6 6 6 6 6 f f . . . 
        . . 4 4 6 6 6 6 6 f . . . 
        . f 4 4 6 6 f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . 2 f f 2 2 2 2 
        . . . . 2 2 2 2 2 2 2 2 2 
        . . . . 2 1 1 2 2 2 1 1 . 
        . . . . . 1 1 . . . 1 1 . 
        `,img`
        . . . 3 3 3 3 3 . . . . . 
        . 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 c 3 3 3 . . 
        3 3 3 3 c 3 3 3 c 3 3 . . 
        3 c 3 3 c c 3 3 3 c c 3 3 
        3 c c 3 3 3 3 4 3 3 3 3 3 
        3 3 3 3 3 3 3 4 4 3 3 3 . 
        3 3 4 4 3 9 f 4 4 3 3 . . 
        . 3 4 4 4 9 f 4 4 3 . . . 
        . 3 3 3 4 4 4 4 4 3 . . . 
        . . 3 4 4 4 4 4 f f . . . 
        . . 6 6 4 4 6 6 6 f . . . 
        . . 6 6 4 4 6 6 6 f . . . 
        . . f 6 6 f 6 6 6 f . . . 
        . . . f f f f f f 2 2 2 . 
        . 2 2 2 f f f 2 2 2 2 2 . 
        . 2 1 1 2 2 2 2 2 1 1 . . 
        . . 1 1 . . . . . 1 1 . . 
        . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    sprite_1,
    [img`
        . . . . 3 3 3 3 . . . . . 
        . . 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 c 3 3 3 . . 
        3 3 3 3 3 3 c c 3 3 3 c . 
        3 3 3 c 3 3 3 3 3 3 3 c . 
        c c c 3 3 3 e e 3 3 c c . 
        3 3 3 3 3 e e 3 3 c c 3 . 
        3 3 3 9 f e e f 9 3 3 3 . 
        . 3 4 9 f 4 4 f 1 4 3 . . 
        . 3 e 4 4 4 4 4 4 e 3 . . 
        . 3 f f e e e e f f 3 . . 
        f e f 6 6 6 6 6 6 f e f . 
        e 4 f 6 6 6 6 6 6 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . 2 f f f f f f 2 . . . 
        . . 2 f f 2 2 f f 2 . . . 
        . 1 1 2 2 2 2 2 2 1 1 . . 
        . 1 1 2 2 2 2 2 2 1 1 . . 
        . . . 2 2 2 2 2 2 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 c 3 3 3 . 
        3 3 3 3 3 3 3 c c 3 3 3 c 
        3 3 3 3 c 3 3 3 3 3 3 3 c 
        . c c c 3 3 3 4 4 3 3 c c 
        . 3 3 3 3 3 4 4 3 3 c c 3 
        . 3 3 3 9 f 4 4 f 9 3 3 3 
        . 3 3 4 9 f 4 4 f 9 4 3 3 
        . . 3 4 4 4 4 4 4 4 4 3 f 
        . f 4 f 6 6 6 6 6 6 6 f f 
        . 4 4 f 6 6 6 6 6 6 6 f . 
        . . . f 6 6 6 6 6 6 f . . 
        . . . f f f f f f f 2 . . 
        . . . f f f 2 2 2 2 2 . . 
        . . 1 1 2 2 2 2 2 2 1 1 . 
        . . 1 1 2 2 2 2 2 2 1 1 . 
        . . . . 2 2 2 2 2 2 . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . 3 3 3 3 . . . . . 
        . . 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 c 3 3 3 3 3 3 . . 
        c 3 3 3 c c 3 3 3 3 3 3 3 
        c 3 3 3 3 3 3 3 c 3 3 3 3 
        c c 3 3 4 4 3 3 3 c c c . 
        3 c c 3 3 4 4 3 3 3 3 3 . 
        3 3 3 9 f 4 4 f 9 3 3 3 . 
        3 3 4 9 f 4 4 f 9 4 3 3 . 
        f 3 4 4 4 4 4 4 4 4 3 . . 
        f f 6 6 6 6 6 6 6 f 4 3 . 
        . f f 6 6 6 6 6 6 f 4 4 . 
        . . f 6 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . 2 2 2 2 f f f . . . 
        . . 1 1 2 2 2 2 2 1 1 . . 
        . . 1 1 2 2 2 2 2 1 1 . . 
        . . . . 2 2 2 2 2 . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(true)
})
let list: string[] = []
let sprite_1: Sprite = null
sprite_1 = sprites.create(img`
    . . . . 3 3 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 c 3 3 3 . . 
    3 3 3 3 3 3 c c 3 3 3 c . 
    3 3 3 c 3 3 3 3 3 3 3 c . 
    c c c 3 3 3 3 3 3 3 c c . 
    3 3 3 3 3 3 4 3 3 c c 3 . 
    3 3 3 1 f 4 4 f 1 3 3 3 . 
    . 3 4 1 f 4 4 f 1 4 3 . . 
    . 3 4 4 4 4 4 4 4 4 3 . . 
    . f f f 4 4 4 4 f f f . . 
    f 4 f 6 6 6 6 6 6 f 4 f . 
    4 4 f 6 6 6 6 6 6 f 4 4 . 
    4 4 f 6 6 6 6 6 6 f 4 4 . 
    . 2 2 f f f f f f 2 2 . . 
    1 1 2 f f 2 2 f f 2 1 1 . 
    1 1 2 2 2 2 2 2 2 2 1 1 . 
    . 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.Player)
let sprite_2 = sprites.create(img`
    . . . . 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . 
    . 7 7 7 7 7 7 c 7 7 7 . . 
    7 7 7 7 7 7 c c 7 7 7 c . 
    7 7 7 c 7 7 7 7 7 7 7 c . 
    c c c 7 7 7 7 7 7 7 c c . 
    7 7 7 7 7 7 4 7 7 c c 7 . 
    7 7 7 1 f 4 4 f 1 7 7 7 . 
    . 7 4 1 f 4 4 f 1 4 7 . . 
    . 7 4 4 4 4 4 4 4 4 7 . . 
    . f f f 4 4 4 4 f f f . . 
    f 4 f 6 6 6 6 6 6 f 4 f . 
    4 4 f 6 6 6 6 6 6 f 4 4 . 
    4 4 f 6 6 6 6 6 6 f 4 4 . 
    . 2 2 f f f f f f 2 2 . . 
    1 1 2 f f 2 2 f f 2 1 1 . 
    1 1 2 2 2 2 2 2 2 2 1 1 . 
    . 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.Enemy)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(sprite_1)
controller.moveSprite(sprite_1, 50, 50)
tiles.placeOnRandomTile(sprite_1, assets.tile`myTile1`)
tiles.placeOnRandomTile(sprite_2, assets.tile`myTile2`)

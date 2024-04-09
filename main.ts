namespace SpriteKind {
    export const barrier = SpriteKind.create()
    export const lemon = SpriteKind.create()
    export const exit = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Escaper,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b f . 
        f b b b b b b b b b b b b c f . 
        f f b b b b b b b b b b c f . . 
        . f c c c f f f f f f f e c . . 
        . . . f b b d b d d e 4 4 e . . 
        . . . f f 1 1 d 1 d e e f . . . 
        . . . . . f b b f f f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b c f 
        . f c b b b b b b b b b b b b f 
        . . f c b b b b b b b b b b f f 
        . . c e f f f f f f f c c c f . 
        . . e 4 4 e d d b d b b f . . . 
        . . . f e e d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `],
    200,
    true
    )
    shootdirection = 2
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shootdirection == 3) {
        slash = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . . 3 1 1 1 1 1 1 1 1 3 . . . 
            . . . . 3 1 1 1 1 1 1 3 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 3 3 1 1 2 . . . . 
            . . . . 3 3 3 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Escaper, 100, 0)
    } else if (shootdirection == 4) {
        slash = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . . 3 1 1 1 1 1 1 1 1 3 . . . 
            . . . . 3 1 1 1 1 1 1 3 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 3 3 1 1 2 . . . . 
            . . . . 3 3 3 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Escaper, -100, 0)
    } else if (shootdirection == 1) {
        slash = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . . 3 1 1 1 1 1 1 1 1 3 . . . 
            . . . . 3 1 1 1 1 1 1 3 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 3 3 1 1 2 . . . . 
            . . . . 3 3 3 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Escaper, 0, 100)
    } else if (shootdirection == 2) {
        slash = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . . 3 1 1 1 1 1 1 1 1 3 . . . 
            . . . . 3 1 1 1 1 1 1 3 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 3 3 1 1 2 . . . . 
            . . . . 3 3 3 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Escaper, 0, -100)
    }
})
info.onScore(15, function () {
    game.splash("FIND THE EXIT")
    PORTAL = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.exit)
    tiles.placeOnTile(PORTAL, tiles.getTileLocation(5, 3))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Escaper,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    200,
    true
    )
    shootdirection = 4
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Escaper,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    200,
    true
    )
    shootdirection = 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Escaper,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    200,
    true
    )
    shootdirection = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    escaper_health.value += 25
    escaper_health.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    sprites.destroy(meat)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    meat = sprites.create(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 3 3 3 3 2 e . . . . 
        . . . 2 3 d 1 1 d d 3 2 e . . . 
        . . 2 3 1 d 3 3 3 d d 3 e . . . 
        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
        e 3 d 3 3 1 d d 3 d 1 b b e e . 
        . e 3 1 1 d d 1 1 1 b b e e e . 
        . . e 3 3 3 3 3 3 b e e e e . . 
        . . . e e e e e e e e e e . . . 
        `, SpriteKind.Food)
    scaling.scaleByPercent(meat, -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    meat.x = sprite.x
    meat.y = sprite.y
    info.changeScoreBy(1)
})
info.onScore(5, function () {
    game.splash("GET 15", "THEN FIND THE EXIT")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 200)
    animation.runImageAnimation(
    slash,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . . 3 1 1 1 1 1 1 1 1 3 . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 3 3 1 1 2 . . . . 
        . . . . 3 3 3 2 2 2 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `,img`
        . . 3 3 . . . 3 3 . . . . . . . 
        . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
        . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
        . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
        . 3 3 . . . . . 2 2 . 2 2 2 . . 
        3 1 1 2 2 . . . . . . . 3 3 . . 
        3 1 1 1 2 . . . . . . 2 1 1 3 3 
        3 1 1 2 . . . . . . 3 1 1 1 1 3 
        . 3 2 2 . . . . . . . 2 1 1 3 . 
        . . . . . . . 2 . . . . 3 3 . . 
        . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
        . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
        3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
        3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
        3 3 3 . . . . 3 3 . . . . 3 3 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 3 . . . . . 
        . . . . . 3 . . . . 3 3 . . . . 
        . . . . 3 3 . . . . . 3 . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . 3 . . . . . . . . . . 3 . . . 
        3 3 . . . . . . . . . . 3 3 . . 
        3 . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . 3 . . . . . 3 . . 
        . . 3 3 . . . 3 . . . . . 3 3 . 
        . . 3 . . . . 3 . . . . . . 3 . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    escaper_health.value += -25
    pause(1000)
})
let crab1: Sprite = null
let meat: Sprite = null
let PORTAL: Sprite = null
let slash: Sprite = null
let shootdirection = 0
let escaper_health: StatusBarSprite = null
let Escaper: Sprite = null
game.splash("YOU ARE TRAPPED")
game.splash("FIND THE EXIT")
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(0)
Escaper = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Escaper, tiles.getTileLocation(1, 23))
controller.moveSprite(Escaper)
Escaper.setStayInScreen(false)
escaper_health = statusbars.create(20, 4, StatusBarKind.Health)
escaper_health.attachToSprite(Escaper)
escaper_health.setLabel("HP", 15)
escaper_health.max = 100
escaper_health.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
shootdirection = 1
game.onUpdateInterval(5000, function () {
    crab1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . c c c c c 6 6 c c 3 3 3 3 3 c 
        b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
        f f 5 c c c 3 c 5 f f 6 6 6 c c 
        f f 5 c c c c c 5 f f 3 3 3 3 c 
        . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
        . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
        c 4 5 5 4 4 4 4 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `, SpriteKind.Enemy)
    crab1.setBounceOnWall(true)
    tiles.placeOnRandomTile(crab1, sprites.dungeon.floorMixed)
})
game.onUpdateInterval(5000, function () {
    crab1.setVelocity(randint(-70, 70), randint(-50, 50))
})
forever(function () {
    scene.cameraFollowSprite(Escaper)
})

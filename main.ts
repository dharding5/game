sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.trail, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let projectile: Sprite = null
let bruce = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 . . . . . . . 3 . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . f f f f f f . . 3 . . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f f . . 
    . f f f 1 1 1 f f 1 1 1 f f . . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f 7 f f f f f f 7 f f f . 
    . . f f 7 7 7 f f 7 7 7 f f . . 
    . . . . f f 7 7 7 f f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(5)
controller.moveSprite(bruce)
bruce.setBounceOnWall(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . 2 2 2 2 f f 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})

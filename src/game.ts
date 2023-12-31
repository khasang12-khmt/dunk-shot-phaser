import 'phaser'
import PreloadScene from './scenes/PreloadScene'
import StartScene from './scenes/StartScene'
import PlayScene from './scenes/PlayScene'
import PauseScene from './scenes/PauseScene'
import GameOverScene from './scenes/GameOverScene'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants'
import SettingScene from './scenes/SettingScene'
import CustomizeScene from './scenes/CustomizeScene'
import GameManager from './manager/GameManager'
import FirebasePlugin from './plugins/FirebasePlugin'
import ChallengeScene from './scenes/ChallengeScene'
import { AnimatedTiles } from './plugins/AnimatedTiles'

export const config = {
    type: Phaser.AUTO,
    parent: 'game',
    transparent: true,
    canvasStyle: 'border-left: 2px solid black; border-right: 2px solid black',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
    },
    scene: [
        PreloadScene,
        StartScene,
        PlayScene,
        PauseScene,
        GameOverScene,
        SettingScene,
        CustomizeScene,
        ChallengeScene,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            fps: 60,
        },
        fps: {
            target: 60,
            forceSetTimeOut: true,
        },
    },
    plugins: {
        global: [
            {
                key: 'FirebasePlugin',
                plugin: FirebasePlugin,
                start: true,
                mapping: 'firebase',
            },
        ],
        scene: [
            {
                key: AnimatedTiles.key,
                plugin: AnimatedTiles,
                mapping: AnimatedTiles.mapping,
                start: true,
            },
        ],
    },
}

window.addEventListener('load', () => {
    const _game = new Phaser.Game(config)
})

export const gameManager = GameManager.getInstance()

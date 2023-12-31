import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants'
import Ball from '../objects/game-objects/ball/Ball'
import Button from '../objects/buttons/Button'
import ClickableImage from '../objects/images/ClickableImage'
import Image from '../objects/images/Image'
import { Text } from '../objects/texts/Text'
import BasketClickableImage from '../objects/images/BasketClickableImage'
import { gameManager } from '../game'

type SceneParam = {
    skin: string
}

export default class StartScene extends Phaser.Scene {
    private ball: Ball

    constructor() {
        super({ key: 'StartScene' })
    }

    public create(data: SceneParam) {
        //this.cameras.main.fadeIn(500, 0, 0, 0)

        const settingsImg = new ClickableImage({
            scene: this,
            x: 50,
            y: 50,
            key: 'settings',
            callback: () => {
                gameManager
                    .getSceneManager()
                    .stateMachine.setState('setting', this, { data: 'start' })
            },
            scale: 0.2 * 1.5,
        })
        const trophyImg = new ClickableImage({
            scene: this,
            x: 160,
            y: 50,
            key: 'leaderboard',
            callback: () => {
                console.log('leaderboard')
            },
            scale: 0.24 * 1.5,
        })
        const starImg = new Image({
            scene: this,
            x: CANVAS_WIDTH - 90,
            y: 50,
            key: 'star',
            scale: 0.32 * 1.5,
        })
        const scoreText = new Text({
            scene: this,
            x: CANVAS_WIDTH - 40,
            y: 50,
            msg: localStorage.getItem('star') || '0',
            style: {
                fontFamily: 'MilkyHoney',
                fontSize: '45px',
                color: 'black',
                strokeThickness: 3,
            },
        })
        const logoImg = new Image({
            scene: this,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 - 170,
            key: 'logo',
            scale: 0.32 * 1.5,
        })
        const basket1Img = new BasketClickableImage({
            scene: this,
            x: 110,
            y: CANVAS_HEIGHT - 200,
            key: 'basket',
            scale: 0.5 * 1.5,
            callback: () => {
                if (this.firebase.getUser()) {
                    this.loadPlayScene(data)
                } else {
                    this.firebase.signInWithPopup()
                    this.firebase.onLoggedIn(() => {
                        this.loadPlayScene(data)
                    })
                }
            },
        }).setDepth(2)
        const basket2Img = new Image({
            scene: this,
            x: CANVAS_WIDTH - 140,
            y: CANVAS_HEIGHT / 2 + 30,
            key: 'basket',
            scale: 0.5 * 1.5,
        }).setDepth(2)

        this.ball = new Ball({
            scene: this,
            x: 110,
            y: CANVAS_HEIGHT - 180,
            key: 'ball',
            scale: 0.2,
        }).setDepth(1)
        if (data.skin) this.ball.setTexture(data.skin)
        else this.ball.setTexture('ball')
        this.ball.stateMachine.setState('demo')

        const dragBtn = new ClickableImage({
            scene: this,
            x: 100,
            y: CANVAS_HEIGHT - 90,
            key: 'drag-it',
            callback: () => {
                if (this.firebase.getUser()) {
                    this.loadPlayScene(data)
                } else {
                    this.firebase.signInWithPopup()
                    this.firebase.onLoggedIn(() => {
                        this.loadPlayScene(data)
                    })
                }
            },
            scale: 0.3 * 1.5,
        })
        dragBtn.enableOscillator()

        const customizeBtn = new Button({
            scene: this,
            x: CANVAS_WIDTH - 190,
            y: CANVAS_HEIGHT - 190,
            key: 'customize',
            text: '',
            scale: 0.2 * 1.5,
            callback: () => {
                gameManager.getSceneManager().stateMachine.setState('customize', this)
            },
        })

        const challengeBtn = new Button({
            scene: this,
            x: CANVAS_WIDTH - 190,
            y: CANVAS_HEIGHT - 80,
            key: 'challenge',
            text: '',
            scale: 0.3 * 1.5,
            callback: () => {
                this.registry.set('level', 'level1')
                if (data.skin)
                    gameManager.getSceneManager().stateMachine.setState('challenge', this, data)
                else
                    gameManager
                        .getSceneManager()
                        .stateMachine.setState('challenge', this, { skin: 'ball' })
            },
        })
    }

    public update(time: number, delta: number) {
        this.ball.update(delta)
    }

    public loadPlayScene(data: SceneParam) {
        this.cameras.main.fadeOut(500, 0, 0, 0)
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            if (data.skin) gameManager.getSceneManager().stateMachine.setState('play', this, data)
            else gameManager.getSceneManager().stateMachine.setState('play', this, { skin: 'ball' })
        })
    }
}

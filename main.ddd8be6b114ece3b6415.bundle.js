(()=>{"use strict";var e,t={5:(e,t,s)=>{s(260);class i extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){this.showProgress(),this.preloadButtons(),this.preloadBalls(),this.preloadThemes(),this.preloadSprites(),this.preloadAudio()}create(){this.scene.start("StartScene")}showProgress(){const e=this.add.graphics();e.fillStyle(16777215,1);const t=e.fillRect(360,540,0,30),s=this.add.text(360,525,"0%",{fontFamily:"MilkyHoney",fontSize:"40px",color:"#000"});s.setOrigin();const i=this.add.text(360,560,"0%",{fontFamily:"MilkyHoney",fontSize:"25px",color:"#000"});i.setOrigin(),this.load.on("progress",(function(e){t.fillRect(235,590,250*e,30),s.setText(Math.floor(100*e)+"%")})),this.load.on("fileprogress",(function(e){i.setText("Loading "+e.type+": "+e.key+" "+(e.bytesTotal/1024).toFixed(2)+"KB")})),this.load.on("complete",(()=>{e.destroy(),s.destroy(),i.destroy(),t.destroy()}))}preloadButtons(){this.load.setPath("../../assets/images/buttons/"),this.load.image("close","Close.png"),this.load.image("close","Divide.png"),this.load.image("close","Facebook.png"),this.load.image("f-left","ForwardLeft.png"),this.load.image("f-right","ForwardRight.png"),this.load.image("game-pad","GamePad.png"),this.load.image("google","Google.png"),this.load.image("heart","Heart.png"),this.load.image("home","Home.png"),this.load.image("ig","Instagram.png"),this.load.image("trophy","Trophy.png"),this.load.image("trash","Trash.png"),this.load.image("sound-on","SoundOn.png"),this.load.image("sound-off","SoundOff.png"),this.load.image("shop","Shop.png"),this.load.image("share","Share.png"),this.load.image("settings","Settings.png"),this.load.image("right","Right.png"),this.load.image("retry","Retry.png"),this.load.image("question","Question.png"),this.load.image("pow-up","PowerUp.png"),this.load.image("left","Left.png"),this.load.image("menu","Menu.png"),this.load.image("msg","Message.png"),this.load.image("music","Music.png"),this.load.image("minus","Minus.png"),this.load.image("pause","Pause.png"),this.load.image("play","Play.png"),this.load.image("plus","Plus.png"),this.load.image("free-gift","FreeGift.png"),this.load.image("drag-it","DragIt.png"),this.load.image("customize","customize.png"),this.load.image("challenge","challenge.png"),this.load.image("leaderboard","Leaderboard.png")}preloadBalls(){this.load.setPath("../../assets/images/colorful-balls/"),this.load.image("ball_1","1.png"),this.load.image("ball_2","2.png"),this.load.image("ball_3","3.png"),this.load.image("ball_4","4.png"),this.load.image("ball_5","5.png"),this.load.image("ball_6","6.png"),this.load.image("ball_7","7.png"),this.load.image("ball_8","8.png"),this.load.image("ball_9","9.png"),this.load.image("ball_10","10.png"),this.load.image("ball_11","11.png"),this.load.image("ball_12","12.png"),this.load.image("ball_locked","Locked.png")}preloadSprites(){this.load.setPath("../../assets/images/sprites/"),this.load.image("dot","Dot_0.png"),this.load.image("ball","ball.png"),this.load.image("hoop-down","hoop_1.png"),this.load.image("hoop-up","hoop_2.png"),this.load.image("basket","basket.png"),this.load.image("logo","logo.png"),this.load.image("net","net.png"),this.load.image("star","star.png")}preloadThemes(){this.load.setPath("../../assets/images/theme-game-mode/"),this.load.image("bg_0","0/bg_0.png"),this.load.image("bg_1","1/bg_1.png"),this.load.image("bg_2","2/bg_2.png"),this.load.image("theme_0","0.png"),this.load.image("theme_1","1.png"),this.load.image("theme_2","2.png"),this.load.image("theme_3","3.png"),this.load.image("theme_4","4.png"),this.load.image("check","check.png"),this.load.image("check","popup.png")}preloadAudio(){this.load.setPath("../../assets/audio/"),this.load.audio("bounce","Bounce.wav"),this.load.audio("click","Click.wav"),this.load.audio("game-over","GameOver.wav"),this.load.audio("net","Net.wav"),this.load.audio("shoot","Shoot.mp3")}}class a extends Phaser.Physics.Arcade.Sprite{constructor(e){super(e.scene,e.x,e.y,e.key),this.setOrigin(.5,.5),this.scale=e.scale?e.scale:1,this.setScale(e.scale)}}class o extends a{constructor(e){var t;super(e),this.elapsed=0,this.isMoving=!1,null===(t=this.body)||void 0===t||t.setCircle(this.width/2),this.scene.physics.add.existing(this),this.disableBody(!0,!0),this.setVisible(!0),this.setCollideWorldBounds(!0,1,0,!0),this.setGravityY(200),this.setMass(5),this.scene.add.existing(this)}getIsMoving(){return this.isMoving}flyDemo(){this.rotation+=.05;let e=this.elapsed/3500;const t=110+e*(2*(1-e)*90+470*e),s=900+e*(2*(1-e)*-900+-330*e);this.x=t,this.y=s,t>=580&&s>=570&&(e=0,this.elapsed=0),this.elapsed+=this.scene.game.loop.delta}fly(e,t,s,i){var a;this.isMoving=!0,this.rotation+=.5;const o=Math.max(50,35*i);this.enableBody(!0,e,t,!0,!0),this.setVelocity(o*Math.cos(s),-o*Math.sin(s)),this.scene.physics.velocityFromRotation(-s,o,null===(a=this.body)||void 0===a?void 0:a.velocity)}resetPosition(e,t){this.setX(e),this.setY(t),this.setVelocity(0,0),this.reset(),this.isMoving=!1}reset(){this.disableBody(!0,!1)}}class l extends Phaser.GameObjects.Container{constructor(e){super(e.scene,e.x,e.y),this.scaleRatio=e.scale,this.button=e.scene.add.sprite(0,0,e.key).setInteractive(),this.add(this.button),this.text=e.scene.add.text(0,0,e.text,{color:"#ffffff",fontSize:"27px",fontFamily:"Roboto",fontStyle:"bold"}),this.text.setOrigin(.5),this.add(this.text),this.callback=e.callback,e.scene.add.existing(this),this.button.on("pointerdown",this.onPointerDown,this),this.button.on("pointerup",this.onPointerUp,this),this.button.on("pointerout",this.onPointerOut,this),this.button.setScale(this.scaleRatio)}onPointerDown(){this.button.setScale(.9*this.scaleRatio)}onPointerUp(){this.button.setScale(this.scaleRatio),this.callback()}onPointerOut(){this.button.setScale(this.scaleRatio)}}class n extends Phaser.GameObjects.Image{constructor(e){super(e.scene,e.x,e.y,e.key,e.frame),this.scaleRatio=e.scale?e.scale:1,this.setScale(this.scaleRatio),e.scene.add.existing(this)}}class h extends n{constructor(e){super(e),this.setInteractive(),this.on("pointerdown",this.onPointerDown,this),this.on("pointerup",this.onPointerUp,this),this.on("pointerout",this.onPointerOut,this),this.setScale(this.scaleRatio),this.callback=e.callback}onPointerDown(){this.setScale(.9*this.scaleRatio)}onPointerUp(){this.setScale(this.scaleRatio),this.callback()}onPointerOut(){this.setScale(this.scaleRatio)}enableOscillator(){this.scene.tweens.add({targets:this,scaleX:.25,scaleY:.25,yoyo:!0,repeat:-1,duration:1e3,ease:"Quad.easeInOut"})}}class c extends Phaser.GameObjects.Text{constructor(e){super(e.scene,e.x,e.y,e.msg,e.style),this.setOrigin(.5),this.scene.add.existing(this)}}class r extends Phaser.Scene{constructor(){super({key:"StartScene"})}create(){new h({scene:this,x:50,y:50,key:"settings",callback:this.getFreeGift,scale:.2*1.5}),new h({scene:this,x:160,y:50,key:"leaderboard",callback:this.getFreeGift,scale:.36}),new n({scene:this,x:630,y:50,key:"star",scale:.48}),new c({scene:this,x:680,y:50,msg:"0",style:{fontSize:"45px",color:"black",strokeThickness:3}}),new n({scene:this,x:360,y:370,key:"logo",scale:.48}),new n({scene:this,x:110,y:880,key:"basket",scale:.75}),new n({scene:this,x:580,y:570,key:"basket",scale:.75}),this.ball=new o({scene:this,x:110,y:900,key:"ball",scale:.14*1.5}),new h({scene:this,x:100,y:990,key:"drag-it",callback:()=>{this.scene.start("PlayScene")},scale:.3*1.5}).enableOscillator(),new l({scene:this,x:530,y:820,key:"free-gift",text:"FREE GIFT!",scale:.3*1.5,callback:this.getFreeGift}),new l({scene:this,x:530,y:920,key:"customize",text:"",scale:.2*1.5,callback:this.getFreeGift}),new l({scene:this,x:530,y:1020,key:"challenge",text:"",scale:.3*1.5,callback:this.getFreeGift})}update(){this.ball.flyDemo()}getFreeGift(){console.log("free gift!!")}}class d extends a{constructor(e){super(e),this.setInteractive(),this.on("pointerdown",this.onPointerDown,this),this.on("pointermove",this.onPointerMove,this),this.on("pointerup",this.onPointerUp,this),e.callback&&(this.callback=e.callback),this.scene.physics.add.existing(this),this.scene.add.existing(this)}onPointerDown(e){this.dragStart={x:e.x,y:e.y}}onPointerUp(e){this.setScale(this.scaleX,this.scaleX),this.power>0&&this.callback(this.x,this.y,this.ang,this.power)}onPointerMove(e){if(e.isDown){const t=Phaser.Math.Angle.Between(this.x,this.y,e.x,e.y);if(this.rotation=t+Math.PI/2,this.dragStart){const s=Phaser.Math.Distance.Between(this.x,this.y,e.x,e.y);console.log("dist",s),this.setTrajectory(Math.max(50,50*s),-t),this.setScale(this.scaleX,Math.min(1.2*this.scaleY,.8)),this.power=s,this.ang=-t}this.scene.time.delayedCall(500,(()=>{this.points.destroy()})),this.dragStart=null}}setTrajectory(e,t){this.trajectory=[],this.points=this.scene.add.graphics(),this.points.fillStyle(16753920,1);for(let s=0;s<5;s++){const i=s/16.67,a=this.x+e*Math.cos(t)*i,o=this.y-e*Math.sin(t)*i+4.9*Math.pow(i,2);this.trajectory.push({x:a,y:o})}for(let e=0;e<5;e++){const t=this.trajectory[e];this.points.fillCircle(t.x,t.y,5)}}transition(e,t){this.scene.tweens.add({targets:e,x:this.x,y:t,duration:1e3,ease:"easeInOutExpo",onComplete:()=>{console.log("Object move complete!")}})}resetPosition(e){const t=this.y>540?Math.floor(441*Math.random())+100:Math.floor(491*Math.random())+540;this.transition(this,t),e&&this.transition(e,t),this.angle=0}reset(){this.angle=0}}class g extends Phaser.Scene{constructor(){super({key:"PlayScene"}),this.score=0}preload(){}create(){new h({scene:this,x:80,y:50,key:"pause",callback:()=>console.log("Switch to PauseScene"),scale:.12}),new n({scene:this,x:630,y:50,key:"star",scale:.48}),new c({scene:this,x:680,y:50,msg:"0",style:{fontSize:"45px",color:"black",strokeThickness:3}}),this.curScoreText=new c({scene:this,x:360,y:420,msg:this.score.toString(),style:{fontSize:"150px",color:"#ababab",fontStyle:"bold"}}),this.curBasket=new d({scene:this,x:130,y:740,key:"basket",callback:(e,t,s,i)=>{this.ball.fly(e,t,s,i)},scale:.65}).setDepth(2).setMaxVelocity(0,0),this.nextBasket=new d({scene:this,x:580,y:340,key:"basket",callback:(e,t,s,i)=>{this.ball.fly(e,t,s,i)},scale:.65}).setDepth(2).setMaxVelocity(0,0),this.ball=new o({scene:this,x:125,y:740,key:"ball",scale:.12}).setDepth(1)}update(){var e,t,s,i;if(this.physics.overlap(this.ball,this.curBasket)&&(null===(e=this.ball.body)||void 0===e?void 0:e.touching.down)&&(null===(t=this.curBasket.body)||void 0===t?void 0:t.touching.up)&&(this.curBasket.reset(),this.ball.resetPosition(this.curBasket.x,this.curBasket.y)),this.physics.overlap(this.ball,this.nextBasket)&&this.ball.getIsMoving()&&(null===(s=this.ball.body)||void 0===s?void 0:s.touching.down)&&(null===(i=this.nextBasket.body)||void 0===i?void 0:i.touching.up)){this.score+=1,this.curScoreText.text=this.score.toString(),this.curBasket.resetPosition(null),this.nextBasket.resetPosition(this.ball);const e=this.curBasket;this.curBasket=this.nextBasket,this.nextBasket=e}}}class p extends Phaser.Scene{constructor(){super({key:"PauseScene"})}preload(){}create(){}}class y extends Phaser.Scene{constructor(){super({key:"GameOverScene"})}preload(){}create(){}}const u={type:Phaser.AUTO,backgroundColor:"#dedede",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:720,height:1080},scene:[i,r,g,p,y],physics:{default:"arcade",arcade:{debug:!1,gravity:{y:400}}}};window.addEventListener("load",(()=>{new Phaser.Game(u)}))}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var o=s[e]={exports:{}};return t[e].call(o.exports,o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,s,a,o)=>{if(!s){var l=1/0;for(r=0;r<e.length;r++){for(var[s,a,o]=e[r],n=!0,h=0;h<s.length;h++)(!1&o||l>=o)&&Object.keys(i.O).every((e=>i.O[e](s[h])))?s.splice(h--,1):(n=!1,o<l&&(l=o));if(n){e.splice(r--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var r=e.length;r>0&&e[r-1][2]>o;r--)e[r]=e[r-1];e[r]=[s,a,o]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,s)=>{var a,o,[l,n,h]=s,c=0;if(l.some((t=>0!==e[t]))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(h)var r=h(i)}for(t&&t(s);c<l.length;c++)o=l[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(r)},s=self.webpackChunktype_project_template=self.webpackChunktype_project_template||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var a=i.O(void 0,[216],(()=>i(5)));a=i.O(a)})();
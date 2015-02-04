window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
   var game = new Phaser.Game(1024, 576, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload()
{
	game.load.image('background', 'assets/background.jpg');
	game.load.image('avatar', 'assets/avatar.png');
	game.load.image('bub', 'assets/bub.png');
	game.load.image('bub1', 'assets/buba.png');
	game.load.image('bub2', 'assets/bubb.png');
	game.load.image('bub3', 'assets/bubc.png');
	game.load.image('bub4', 'assets/bubd.png');
	game.load.image('bub5', 'assets/bube.png');
	game.load.image('bub6', 'assets/bubf.png');
	game.load.image('bub7', 'assets/bubg.png');
	game.load.image('bub8', 'assets/bubh.png');
	game.load.image('bub9', 'assets/bubi.png');
	game.load.image('bub10', 'assets/bubj.png');
	game.load.image('bub11', 'assets/bubk.png');
	game.load.image('bub12', 'assets/bubl.png');
	game.load.image('bub13', 'assets/bubm.png');
	game.load.image('bub14', 'assets/bubn.png');
	game.load.image('bub15', 'assets/bubo.png');
	game.load.image('bub16', 'assets/bubp.png');
	game.load.image('bub17', 'assets/bubq.png');
	game.load.image('bub18', 'assets/bubr.png');
	game.load.image('bub19', 'assets/bubs.png');
	game.load.image('bub20', 'assets/bubt.png');
	game.load.image('bubmain', 'assets/bubmain.png');
	game.load.audio('pop', 'assets/pop.mp3');
	game.load.audio('a1', 'assets/1.mp3');
	game.load.audio('a2', 'assets/2.mp3');
	game.load.audio('a3', 'assets/3.mp3');
	game.load.audio('a4', 'assets/4.mp3');
	game.load.audio('a5', 'assets/5.mp3');
	game.load.audio('a6', 'assets/6.mp3');
	game.load.audio('a7', 'assets/7.mp3');
	game.load.audio('a8', 'assets/8.mp3');
	game.load.audio('a9', 'assets/9.mp3');
	game.load.audio('a10', 'assets/10.mp3');
	game.load.audio('a11', 'assets/11.mp3');
	game.load.audio('a12', 'assets/12.mp3');
	game.load.audio('a13', 'assets/13.mp3');
	game.load.audio('a14', 'assets/14.mp3');
	game.load.audio('a15', 'assets/15.mp3');
	game.load.audio('a16', 'assets/16.mp3');
	game.load.audio('a17', 'assets/17.mp3');
	game.load.audio('a18', 'assets/18.mp3');
	game.load.audio('a19', 'assets/19.mp3');
	game.load.audio('a20', 'assets/20.mp3');
}

var cursors;
var cursorsA;
var cursorsB;
var dice;
var rotatedice;
var movedice;
var speed = 500;
var text = "- phaser -\n with a sprinkle of \n pixi dust.";
var style = { font: "65px Arial", fill: "#000000", align: "center" };
var yo;
var badGroup;
var kkx;
var counter = 20;
var pop;
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var a9;
var a10;
var a11;
var a12;
var a13;
var a14;
var a15;
var a16;
var a17;
var a18;
var a19;
var a20;
var xBound = 1920;
var yBound = 1510;
var timer;
var seconds = 0;
var minutes = 0;
var textStyle = {align: 'center'};
var playButton;
var playButtonText = '\u25B6';
var playButtonInfo;
var resetButton;
var resetButtonText = '\u2717';
var resetButtonInfo;
var spawnButton;
var spawnButtonInfo;
var spawnButton2;
var spawnButtonInfo2;
var spawnButton3;
var spawnButtonInfo3;
var spawnButton4;
var spawnButtonInfo4;
var spawnButtonText = '\u266B';
var spawnGroup;
var avatar;
var count;
var emptyBubble;
var emptyGroup;
var note;
var currentBubbles = 0;
var totalBubbles = 50;
var timerRunning;
var musicBubble;
var musicGroup;
var key;
var loop;
var audioKey;

function create()
{
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0, 0, xBound, yBound);
	game.add.sprite(0, 0, 'background');
	
	spawnGroup = game.add.group();
	game.physics.arcade.enable(spawnGroup);
	emptyGroup = game.add.group();
	game.physics.arcade.enable(emptyGroup);
	musicGroup = game.add.group();
	game.physics.arcade.enable(musicGroup);
	
	playButton = game.add.sprite(614, 888, 'bubmain');
	playButton.scale.x = .2;
	playButton.scale.y = .2;
	game.physics.arcade.enable(playButton);
	playButton.alpha = 0;
	game.add.tween(playButton).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	playButtonInfo = game.add.text(playButton.x + 50, playButton.y + 48, playButtonText, style);
	playButtonInfo.anchor.set(0.5);
	playButton.body.immovable = true;
	
	resetButton = game.add.sprite(1324, 1094, 'bubmain');
	resetButton.scale.x = .2;
	resetButton.scale.y = .2;
	game.physics.arcade.enable(resetButton);
	resetButton.alpha = 0;
	game.add.tween(resetButton).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	resetButtonInfo = game.add.text(resetButton.x + 46, resetButton.y + 44, resetButtonText, style);
	resetButtonInfo.anchor.set(0.5);
	resetButton.body.immovable = true;
	
	spawnButton = game.add.sprite(1300, 280, 'bubmain');
	spawnButton.scale.x = .2;
	spawnButton.scale.y = .2;
	game.physics.arcade.enable(spawnButton);
	spawnButton.alpha = 0;
	game.add.tween(spawnButton).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	spawnButtonInfo = game.add.text(spawnButton.x + 46, spawnButton.y + 48, spawnButtonText, style);
	spawnButtonInfo.anchor.set(0.5);
	spawnGroup.add(spawnButton);
	spawnButton.body.immovable = true;
	
	spawnButton2 = game.add.sprite(550, 400, 'bubmain');
	spawnButton2.scale.x = .2;
	spawnButton2.scale.y = .2;
	game.physics.arcade.enable(spawnButton2);
	spawnButton2.alpha = 0;
	game.add.tween(spawnButton2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	spawnButtonInfo2 = game.add.text(spawnButton2.x + 46, spawnButton2.y + 48, spawnButtonText, style);
	spawnButtonInfo2.anchor.set(0.5);
	spawnGroup.add(spawnButton2);
	spawnButton2.body.immovable = true;
	
	spawnButton3 = game.add.sprite(360, 1220, 'bubmain');
	spawnButton3.scale.x = .2;
	spawnButton3.scale.y = .2;
	game.physics.arcade.enable(spawnButton3);
	spawnButton3.alpha = 0;
	game.add.tween(spawnButton3).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	spawnButtonInfo3 = game.add.text(spawnButton3.x + 46, spawnButton3.y + 48, spawnButtonText, style);
	spawnButtonInfo3.anchor.set(0.5);
	spawnGroup.add(spawnButton3);
	spawnButton3.body.immovable = true;
	
	spawnButton4 = game.add.sprite(1600, 1280, 'bubmain');
	spawnButton4.scale.x = .2;
	spawnButton4.scale.y = .2;
	game.physics.arcade.enable(spawnButton4);
	spawnButton4.alpha = 0;
	game.add.tween(spawnButton4).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	spawnButtonInfo4 = game.add.text(spawnButton4.x + 46, spawnButton4.y + 48, spawnButtonText, style);
	spawnButtonInfo4.anchor.set(0.5);
	spawnGroup.add(spawnButton4);
	spawnButton4.body.immovable = true;

	avatar = game.add.sprite(1060, 930, 'avatar');
	avatar.anchor.set(0.5);
	game.physics.arcade.enable(avatar);
	avatar.body.allowRotation = false;
	game.camera.follow(avatar);
	
	pop = game.add.audio('pop');
	pop.allowMultiple = true;
	audioKey = {};
	for (loop = 1; loop < 21; loop = loop + 1)
	{
		audioKey["bub" + loop] = game.add.audio('a' + loop);
		audioKey['bub' + loop].allowMultiple = true;
	}
	/*a1 = game.add.audio('a1');
	a1.allowMultiple = true;
	a2 = game.add.audio('a2');
	a2.allowMultiple = true;
	a3 = game.add.audio('a3');
	a3.allowMultiple = true;
	a4 = game.add.audio('a4');
	a4.allowMultiple = true;
	a5 = game.add.audio('a5');
	a5.allowMultiple = true;
	a6 = game.add.audio('a6');
	a6.allowMultiple = true;
	a7 = game.add.audio('a7');
	a7.allowMultiple = true;
	a8 = game.add.audio('a8');
	a8.allowMultiple = true;
	a9 = game.add.audio('a9');
	a9.allowMultiple = true;
	a10 = game.add.audio('a10');
	a10.allowMultiple = true;
	a11 = game.add.audio('a11');
	a11.allowMultiple = true;
	a12 = game.add.audio('a12');
	a12.allowMultiple = true;
	a13 = game.add.audio('a13');
	a13.allowMultiple = true;
	a14 = game.add.audio('a14');
	a14.allowMultiple = true;
	a15 = game.add.audio('a15');
	a15.allowMultiple = true;
	a16 = game.add.audio('a16');
	a16.allowMultiple = true;
	a17 = game.add.audio('a17');
	a17.allowMultiple = true;
	a18 = game.add.audio('a18');
	a18.allowMultiple = true;
	a19 = game.add.audio('a19');
	a19.allowMultiple = true;
	a20 = game.add.audio('a20');
	a20.allowMultiple = true;*/
   
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.onDown.add(fullScreenStart, this);
	game.paused = true;
}

function fullScreenStart()
{
	if (game.scale.isFullScreen)
	{
		game.paused = true;
		game.scale.stopFullScreen();
	}
	else
	{
		game.scale.startFullScreen(true);
		game.paused = false;
	}
}

function update()
{
	game.physics.arcade.collide(avatar, resetButton, resetMusic, null, this);
	game.physics.arcade.collide(avatar, spawnGroup, spawnBubbles, null, this);
	game.physics.arcade.collide(avatar, playButton, playMusic, null, this);
	game.physics.arcade.overlap(avatar, emptyGroup, popEmpty, null, this);
	game.physics.arcade.overlap(avatar, musicGroup, popMusic, null, this);
	
	if (game.physics.arcade.distanceToPointer(avatar, game.input.activePointer) > 60)
	{
		game.physics.arcade.moveToPointer(avatar, 240);
	}
	else
	{
		avatar.body.velocity.set(0);
	}
}

function render()
{
	//game.debug.cameraInfo(game.camera, 500, 32);
	//game.debug.spriteCoords(avatar, 32, 32);
}

function resetMusic()
{
	//yo
}

function playMusic()
{
	//yoyo
}

function spawnBubbles()
{
	game.time.events.add(Phaser.Timer.SECOND * 4, startTimer, this);
	if ((timerRunning != true) && ((totalBubbles - currentBubbles) > 0))
	{
		if ((totalBubbles - currentBubbles) < 10)
		{
			makeMusicBubbles(totalBubbles - currentBubbles);
		}
		else
		{
			makeMusicBubbles(5);
			makeEmptyBubbles(5);
		}
	}
	timerRunning = true;
}

function startTimer()
{
	timerRunning = false;
}

function makeEmptyBubbles(count)
{
	var loop;
	for (loop = 0; loop < count; loop = loop + 1)
	{
		emptyBubble = emptyGroup.create(getBubbleX(), getBubbleY(), 'bub');
		game.physics.arcade.enable(emptyBubble)
		emptyBubble.scale.x = .2;
		emptyBubble.scale.y = .2;
		emptyBubble.body.velocity.x = game.rnd.integerInRange(-400, 400);
		emptyBubble.body.velocity.y = game.rnd.integerInRange(-400, 400);
		emptyBubble.body.collideWorldBounds = true;
		emptyBubble.body.bounce.setTo(1, 1);
	}
	currentBubbles = currentBubbles + count;
}

function makeMusicBubbles(count)
{
	var loop;
	for (loop = 0; loop < count; loop = loop + 1)
	{
		musicBubble = musicGroup.create(getBubbleX(), getBubbleY(), getBubbleKey());
		game.physics.arcade.enable(musicBubble)
		musicBubble.scale.x = .2;
		musicBubble.scale.y = .2;
		musicBubble.body.velocity.x = game.rnd.integerInRange(-400, 400);
		musicBubble.body.velocity.y = game.rnd.integerInRange(-400, 400);
		musicBubble.body.collideWorldBounds = true;
		musicBubble.body.bounce.setTo(1, 1);
	}
	currentBubbles = currentBubbles + count;
}

function getBubbleKey()
{
	return 'bub' + game.rnd.integerInRange(1,20);
}

/*function collectDice (avatar, dice) {
    
    // Removes the star from the screen
    dice.kill();
    speed = 1000;
    cursorsB = game.add.text(dice.x, dice.y, text, style);
    cursorsB.anchor.set(0.5);
    game.time.events.add(Phaser.Timer.SECOND * 3, killDice, this);
    createBubble();
   // game.add.sprite(500,500, 'bub');
   // this.scale.x = .2;
    //this.scale.y = .2;
   // game.physics.arcade.enable(this)
   // this.body.velocity.x = 50;
   // this.body.velocity.y = 50;
    //badGroup.add(yo);
    
}

function collectRotateDice (avatar, rotatedice) {
    
    // Removes the star from the screen
    rotatedice.kill();
    speed = 250;
    cursorsA = game.add.text(rotatedice.x, rotatedice.y, text, style);
    cursorsA.anchor.set(0.5);
    game.time.events.add(Phaser.Timer.SECOND * 3, killRotate, this);
    createBubble();
   //  yo = game.add.sprite(500,500, 'bub');
   // yo.scale.x = .2;
   // yo.scale.y = .2;
   // game.physics.arcade.enable(yo)
   // yo.body.velocity.x = 50;
   // yo.body.velocity.y = 50;
    //badGroup.add(yo);
}

function collectMoveDice (avatar, movedice) {
    
    // Removes the star from the screen
    movedice.kill();
    cursors = game.add.text(movedice.x, movedice.y, text, style);
    cursors.anchor.set(0.5);
    game.time.events.add(Phaser.Timer.SECOND * 3, killMove, this);
    createBubble();
    // yo = game.add.sprite(500,500, 'bub');
   // yo.scale.x = .2;
   // yo.scale.y = .2;
   // game.physics.arcade.enable(yo)
   // yo.body.velocity.x = 50;
    //yo.body.velocity.y = 50;
    //badGroup.add(yo);
}*/

function getBubbleX()
{
	var x;
	var loop = true;
	while (loop)
	{
		x = game.world.randomX;
		if ((x > 50) && (x < (xBound - 50)) && (Math.abs(x - avatar.x) > 200))
		{
			loop = false;
		}
	}
	return x;
}

function getBubbleY()
{
	var y;
	var loop = true;
	while (loop)
	{
		y = game.world.randomY;
		if ((y > 50) && (y < (yBound - 50)) && (Math.abs(y - avatar.y) > 200))
		{
			loop = false;
		}
	}
	return y;
}

function createBubble()
{
	var loop;
	counter = counter + 1;
	for (loop = 0; loop < counter; loop = loop + 1)
	{
		yo = badGroup.create(getBubbleX(), getBubbleY(), 'bub');
		game.physics.arcade.enable(yo)
		yo.scale.x = .2;
		yo.scale.y = .2;
		yo.body.velocity.x = game.rnd.integerInRange(25, 400);
		yo.body.velocity.y = game.rnd.integerInRange(25, 400);
		yo.body.collideWorldBounds = true;
		yo.body.bounce.setTo(1, 1);
	}
}

function popEmpty(avatar, emptyBubble)
{
	emptyBubble.destroy();
	currentBubbles = currentBubbles - 1;
	addMusicNote(0);
	pop.play();
}

function popMusic(avatar, musicBubble)
{
	musicBubble.destroy();
	currentBubbles = currentBubbles - 1;
	//addMusicNote(parseIndexKey(musicBubble.key));
	audioKey[musicBubble.key].play();
	//kkx = game.add.text(avatar.x, avatar.y, musicBubble.key, style);
	//kkx.anchor.set(0.5);
}

function parseKey(key)
{
	return a1;
}

function parseIndexKey(key)
{
	return 1;
}

function addMusicNote(note)
{
	//yoyoyo
}

function killMove()
    {
    	    cursors.destroy();
    }
   
function killRotate()
    {
    	    cursorsA.destroy();
    }
    
function killDice()
    {
    	    cursorsB.destroy();
    }

    
function collectYo(avatar, yo)
{
	//pop.play();
	playPop();
	yo.destroy();
	//pop.play();
	//kkx = game.add.text(yo.x, yo.y, text, style);
	//kkx.anchor.set(0.5);	
}

function playPop()
{
	pop.play();
}

};

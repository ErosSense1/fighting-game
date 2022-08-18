/**@type {HTMLCanvasElement} */


const canvas = document.getElementById( "screen" );
const ctx = canvas.getContext( "2d" );

const body = document.getElementById( "b" )

let E = 0
let P = 0

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 300;

body.style.position = "absolute"
body.style.margin = "20px"
body.style.marginTop = "60px"
body.style.backgroundColor = "black"
body.style.overflow = "hidden"

const p1Hp = document.getElementById( "p1h" )
const p2Hp = document.getElementById( "p2h" )

p1Hp.style.height = "50px"
p1Hp.style.border = "2px solid black"
p1Hp.style.position = "absolute"
p1Hp.style.backgroundColor = "red"

p2Hp.style.height = "50px"
p2Hp.style.border = "2px solid black"
p2Hp.style.position = "absolute"
p2Hp.style.left = "300px"
p2Hp.style.backgroundColor = "blue"

let hit = new Audio( "sfx/hit.m4a" );
let hitR = new Audio( "sfx/hit.m4a" );
let start = new Audio( "sfx/start.m4a" )
let gameOver = new Audio( "sfx/gameOver.m4a" )

const graviy = 1;

let block = true
let blockR = true

let backgroundChina = new Image();
backgroundChina.src = "maps/background2.gif"

canvas.style.border = "2px solid black";
canvas.style.position = "absolute";
canvas.style.margin = "unset";

function createImg ( src )
{
    img = new Image();
    img.src = src;

    return img;
}
function createImgR ( src )
{
    let img = new Image();
    img.src = src;

    return img;
}

let moveSprites = 6;
let moveCurrentSprite = 1;

setInterval( () =>
{
    moveCurrentSprite += 1
    if ( moveCurrentSprite > 4 )
    {
        moveCurrentSprite = 1

    }
}, 1000 / 10 );
let jumpCurrentSprite = 1;

setInterval( () =>
{
    jumpCurrentSprite += 1
    if ( jumpCurrentSprite > 5 )
    {
        jumpCurrentSprite = 1

    }
}, 1000 / 10 );

let standSprites = 6;
let standCurrentSprite = 1;

setInterval( () =>
{
    standCurrentSprite += 1
    if ( standCurrentSprite > 7 )
    {
        standCurrentSprite = 1

    }
}, 1000 / 10 );

let punchSprites = 2;
let punchCurrentSprite = 0;

setInterval( () =>
{
    punchCurrentSprite += 1
    if ( punchCurrentSprite > 1 )
    {
        punchCurrentSprite = 0

    }
}, 500 );

let blockPP = createImg( "player/Yagami/block/Iori Yagami_102.png" )
let blockEE = createImg( "player/Kyo/block/Ex Kyo_42.png" )

let deathCurrentSprite = 0;

let ded = createImg( "maps/ded.jpg" )

let move1 = createImg( `player/Kyo/move/Ex Kyo_1.png` );
let move2 = createImg( `player/Kyo/move/Ex Kyo_2.png` );
let move3 = createImg( `player/Kyo/move/Ex Kyo_3.png` );
let move4 = createImg( `player/Kyo/move/Ex Kyo_4.png` );
let move5 = createImg( `player/Kyo/move/Ex Kyo_5.png` );
let move6 = createImg( `player/Kyo/move/Ex Kyo_6.png` );

let move1l = createImg( `player/Kyo/move/L/Ex Kyo_1.png` );
let move2l = createImg( `player/Kyo/move/L/Ex Kyo_2.png` );
let move3l = createImg( `player/Kyo/move/L/Ex Kyo_3.png` );
let move4l = createImg( `player/Kyo/move/L/Ex Kyo_4.png` );
let move5l = createImg( `player/Kyo/move/L/Ex Kyo_5.png` );
let move6l = createImg( `player/Kyo/move/L/Ex Kyo_6.png` );

let moveL = [
    move1l,
    move2l,
    move3l,
    move4l,
    move5l,
    move6l
]

let jump1R = createImg( `player/Yagami/jump/up/Iori Yagami_28.png` );
let jump2R = createImg( `player/Yagami/jump/up/Iori Yagami_29.png` );
let jump3R = createImg( `player/Yagami/jump/up/Iori Yagami_30.png` );
let jump4R = createImg( `player/Yagami/jump/up/Iori Yagami_31.png` );
let jump5R = createImg( `player/Yagami/jump/up/Iori Yagami_32.png` );

let jump1 = createImg( `player/Kyo/jump/up/Ex Kyo_1.png` );
let jump2 = createImg( `player/Kyo/jump/up/Ex Kyo_2.png` );
let jump3 = createImg( `player/Kyo/jump/up/Ex Kyo_3.png` );
let jump4 = createImg( `player/Kyo/jump/up/Ex Kyo_4.png` );
let jump5 = createImg( `player/Kyo/jump/up/Ex Kyo_5.png` );

let move = [
    move1,
    move2,
    move3,
    move4,
    move5,
    move6
];
let jump = [
    jump1,
    jump2,
    jump3,
    jump4,
    jump5
];
let jumpR = [
    jump1R,
    jump2R,
    jump3R,
    jump4R,
    jump5R
];
let move1R = createImg( `player/Yagami/move/Iori Yagami_1.png` );
let move2R = createImg( `player/Yagami/move/Iori Yagami_2.png` );
let move3R = createImg( `player/Yagami/move/Iori Yagami_3.png` );
let move4R = createImg( `player/Yagami/move/Iori Yagami_4.png` );
let move5R = createImg( `player/Yagami/move/Iori Yagami_5.png` );
let move6R = createImg( `player/Yagami/move/Iori Yagami_6.png` );

let move1Rl = createImg( `player/Yagami/move/L/Iori Yagami_1.png` );
let move2Rl = createImg( `player/Yagami/move/L/Iori Yagami_2.png` );
let move3Rl = createImg( `player/Yagami/move/L/Iori Yagami_3.png` );
let move4Rl = createImg( `player/Yagami/move/L/Iori Yagami_4.png` );
let move5Rl = createImg( `player/Yagami/move/L/Iori Yagami_5.png` );
let move6Rl = createImg( `player/Yagami/move/L/Iori Yagami_6.png` );

let moveR = [
    move1R,
    move2R,
    move3R,
    move4R,
    move5R,
    move6R
];
let moveR1 = [
    move1Rl,
    move2Rl,
    move3Rl,
    move4Rl,
    move5Rl,
    move6Rl
];

let stand1 = createImg( `player/Kyo/stand/L/Ex Kyo_1.png` );
let stand2 = createImg( `player/Kyo/stand/L/Ex Kyo_2.png` );
let stand3 = createImg( `player/Kyo/stand/L/Ex Kyo_3.png` );
let stand4 = createImg( `player/Kyo/stand/L/Ex Kyo_4.png` );
let stand5 = createImg( `player/Kyo/stand/L/Ex Kyo_5.png` );
let stand6 = createImg( `player/Kyo/stand/L/Ex Kyo_6.png` );
let stand7 = createImg( `player/Kyo/stand/L/Ex Kyo_7.png` );
let stand8 = createImg( `player/Kyo/stand/L/Ex Kyo_8.png` );

let stand1l = createImg( `player/Kyo/stand/R/Ex Kyo_1.png` );
let stand2l = createImg( `player/Kyo/stand/R/Ex Kyo_2.png` );
let stand3l = createImg( `player/Kyo/stand/R/Ex Kyo_3.png` );
let stand4l = createImg( `player/Kyo/stand/R/Ex Kyo_4.png` );
let stand5l = createImg( `player/Kyo/stand/R/Ex Kyo_5.png` );
let stand6l = createImg( `player/Kyo/stand/R/Ex Kyo_6.png` );
let stand7l = createImg( `player/Kyo/stand/R/Ex Kyo_7.png` );
let stand8l = createImg( `player/Kyo/stand/R/Ex Kyo_8.png` );

let standL = [
    stand1l,
    stand2l,
    stand3l,
    stand4l,
    stand5l,
    stand6l,
    stand7l,
    stand8l
]

let stand1_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_1.png` );
let stand2_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_2.png` );
let stand3_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_3.png` );
let stand4_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_4.png` );
let stand5_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_5.png` );
let stand6_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_6.png` );
let stand7_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_7.png` );
let stand8_2 = createImgR( `player/Yagami/stand/R/Iori Yagami_8.png` );

let stand1_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_1.png` );
let stand2_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_2.png` );
let stand3_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_3.png` );
let stand4_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_4.png` );
let stand5_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_5.png` );
let stand6_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_6.png` );
let stand7_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_7.png` );
let stand8_1 = createImgR( `player/Yagami/stand/L/Iori Yagami_8.png` );

let standP_L = [
    stand1_1,
    stand2_1,
    stand3_1,
    stand4_1,
    stand5_1,
    stand6_1,
    stand7_1,
    stand8_1,
]

let punch1 = createImg( `player/Kyo/punch/Ex Kyo_1.png` )
let punch2 = createImg( `player/Kyo/punch/Ex Kyo_2.png` )

let punch1R = createImg( `player/Yagami/punch/Iori Yagami_1.png` )
let punch2R = createImg( `player/Yagami/punch/Iori Yagami_2.png` )
let punch3R = createImg( `player/Yagami/punch/Iori Yagami_3.png` )

let punchR = [
    punch1R,
    punch2R,
    punch3R
]
let death1 = createImg( `player/Kyo/death/Ex Kyo_1.png` )
let death2 = createImg( `player/Kyo/death/Ex Kyo_2.png` )
let death3 = createImg( `player/Kyo/death/Ex Kyo_3.png` )
let death4 = createImg( `player/Kyo/death/Ex Kyo_4.png` )
let death5 = createImg( `player/Kyo/death/Ex Kyo_5.png` )
let death6 = createImg( `player/Kyo/death/Ex Kyo_6.png` )
let death7 = createImg( `player/Kyo/death/Ex Kyo_7.png` )
let death8 = createImg( `player/Kyo/death/Ex Kyo_8.png` )
let death9 = createImg( `player/Kyo/death/Ex Kyo_9.png` )
let death10 = createImg( `player/Kyo/death/Ex Kyo_10.png` )


let death1R = createImg( `player/Yagami/death/Iori Yagami_1.png` )
let death2R = createImg( `player/Yagami/death/Iori Yagami_2.png` )
let death3R = createImg( `player/Yagami/death/Iori Yagami_3.png` )
let death4R = createImg( `player/Yagami/death/Iori Yagami_4.png` )
let death5R = createImg( `player/Yagami/death/Iori Yagami_5.png` )
let death6R = createImg( `player/Yagami/death/Iori Yagami_6.png` )
let death7R = createImg( `player/Yagami/death/Iori Yagami_7.png` )
let death8R = createImg( `player/Yagami/death/Iori Yagami_8.png` )
let death9R = createImg( `player/Yagami/death/Iori Yagami_9.png` )
let death10R = createImg( `player/Yagami/death/Iori Yagami_10.png` )


let death = [
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death1,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death2,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death3,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death4,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death5,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death6,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death7,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death8,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death9,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10,
    death10
]
let deathR = [
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death1R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death2R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death3R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death4R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death5R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death6R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death7R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death8R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death9R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R,
    death10R
]

let punch = [
    punch1,
    punch2
]

let standE = [
    stand1,
    stand2,
    stand3,
    stand4,
    stand5,
    stand6,
    stand7,
    stand8,
]
let standP = [
    stand1_2,
    stand2_2,
    stand3_2,
    stand4_2,
    stand5_2,
    stand6_2,
    stand7_2,
    stand8_2,
]

class Player
{
    constructor ( { position, size, velocity, health } )
    {
        this.position = position;
        this.size = size;
        this.velocity = velocity;
        this.health = health;
    }
    draw ( img )
    {
        ctx.drawImage( img, this.position.x, this.position.y )
    }
    update ( drawColor, x, y, w, h )
    {
        this.draw( drawColor, x, y, w, h );

        this.velocity.y += graviy

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        //set limits

        //bottom

        if ( this.size.h + this.position.y >= CANVAS_HEIGHT )
        {
            this.position.y = CANVAS_HEIGHT - this.size.h
        }

        //top

        if ( this.position.y <= 0 )
        {
            this.position.y = 0
            this.velocity.y = 0
        }

        //left 

        if ( this.position.x <= 0 )
        {
            this.position.x = 0
        }

        //right

        if ( this.position.x + this.size.w >= CANVAS_WIDTH )
        {
            this.position.x = CANVAS_WIDTH - this.size.w
        }

    }
    attack ( x, y, h, w )
    {
        ctx.fillStyle = "none"
        ctx.fillRect( x, y, h, w )
    }

}

let globalSize = {
    w: 80,
    h: 115
}

let playerOne = new Player( {
    position: {
        x: 100,
        y: CANVAS_HEIGHT - globalSize.h
    },
    size: {
        w: globalSize.w,
        h: globalSize.h
    },
    velocity: {
        x: 0,
        y: 0
    },
    health: 300
} )

let enemyOne = new Player( {
    position: {
        x: CANVAS_WIDTH - globalSize.w - 100,
        y: CANVAS_HEIGHT - globalSize.h
    },
    size: {
        w: globalSize.w,
        h: globalSize.h
    },
    velocity: {
        x: 0,
        y: 0
    },
    health: 300
} )

let att = false
let attE = false

let regen = 0.05

function game ()
{

    if ( att )
    {

        if ( playerOne.position.x >= enemyOne.position.x )
        {
            if ( playerOne.position.x + playerOne.size.h - playerOne.size.w >= enemyOne.position.x &&
                playerOne.position.x <= enemyOne.position.x + playerOne.size.h - 5 &&
                playerOne.position.y + playerOne.size.w <= enemyOne.position.y + enemyOne.size.h &&
                playerOne.position.y >= enemyOne.position.y &&
                block )
            {
                hitR.currentTime = 0.57
                hitR.play()
                enemyOne.health -= 1
            }
        } else
        {
            if ( playerOne.position.x - playerOne.size.h + playerOne.size.w <= enemyOne.position.x &&
                playerOne.position.x >= enemyOne.position.x - playerOne.size.h + 5 &&
                playerOne.position.y - playerOne.size.w >= enemyOne.position.y - enemyOne.size.h &&
                playerOne.position.y <= enemyOne.position.y &&
                block )
            {
                hitR.currentTime = 0.57
                hitR.play()
                enemyOne.health -= 1
            }
            else
            {
                hitR.pause()
            }
        }


    }
    if ( attE )
    {

        if ( enemyOne.position.x >= playerOne.position.x )
        {
            if ( enemyOne.position.x + 75 - enemyOne.size.w >= playerOne.position.x &&
                enemyOne.position.x <= playerOne.position.x + 75 - 5 &&
                enemyOne.position.y + enemyOne.size.w <= playerOne.position.y + playerOne.size.h &&
                enemyOne.position.y >= playerOne.position.y &&
                blockR )
            {
                hit.currentTime = 0.57
                hit.play()
                playerOne.health -= 1
            }
        } else
        {

            if ( enemyOne.position.x - 75 + enemyOne.size.w <= playerOne.position.x &&
                enemyOne.position.x >= playerOne.position.x - 75 + 5 &&
                enemyOne.position.y - enemyOne.size.w >= playerOne.position.y - playerOne.size.h &&
                enemyOne.position.y <= playerOne.position.y &&
                blockR )
            {
                hit.currentTime = 0.57
                hit.play()
                playerOne.health -= 1
            } else
            {
                hit.pause()
            }
        }
    }


    ctx.drawImage( backgroundChina, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT )



    if ( E == 0 )
    {
        enemyOne.update( standE[ standCurrentSprite ] )
    } else if ( E == 1 )
    {
        enemyOne.update( move[ moveCurrentSprite ] )
    } else if ( E == 2 )
    {
        enemyOne.update( standL[ standCurrentSprite ] )
    }
    else if ( E == 3 )
    {
        enemyOne.update( punch[ 1 ] )
    } else if ( E == 4 )
    {
        enemyOne.update( jump[ 4 ] )
    } else if ( E == 5 )
    {
        enemyOne.update( moveL[ moveCurrentSprite ] )
    } else if ( !block && E == 9 )
    {
        enemyOne.update( blockEE )
        enemyOne.health -= 0.1
    }

    if ( block )
    {
        enemyOne.health += regen
        if ( enemyOne.health > 300 )
        {
            enemyOne.health = 300
        }
    }

    if ( P == 0 )
    {
        playerOne.update( standP[ standCurrentSprite ] )
    } else if ( P == 1 )
    {
        playerOne.update( moveR[ moveCurrentSprite ] )
    } else if ( P == 2 )
    {
        playerOne.update( standP_L[ standCurrentSprite ] )
    }
    else if ( P == 3 )
    {
        playerOne.update( punchR[ 2 ] )
    } else if ( P == 4 )
    {
        playerOne.update( jumpR[ 4 ] )
    } else if ( P == 5 )
    {
        playerOne.update( moveR1[ moveCurrentSprite ] )
    } else if ( !blockR && P == 9 )
    {
        playerOne.update( blockPP )
        playerOne.health -= 0.1
    }

    if ( blockR )
    {
        playerOne.health += regen
        if ( playerOne.health > 300 )
        {
            playerOne.health = 300
        }
    }




    if ( playerOne.health <= 0 )
    {
        regen = 0
        gameOver.play()
        deathCurrentSprite += 1
        ctx.drawImage( ded, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT )
        playerOne.update( deathR[ deathCurrentSprite ] )
        setTimeout( () =>
        {

            window.location.reload()
            alert( "YOU LOSE!" )
        }, 6000 )
    }
    if ( enemyOne.health <= 0 )
    {
        regen = 0
        gameOver.play()
        deathCurrentSprite++
        ctx.drawImage( ded, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT )
        playerOne.update( death[ deathCurrentSprite ] )

        setTimeout( () =>
        {
            window.location.reload()
            alert( "YOU LOSE!" )
        }, 6000 )
    }

    p1Hp.style.width = playerOne.health + "px"
    p2Hp.style.width = enemyOne.health + "px"

    requestAnimationFrame( game )
}

if ( playerOne.health <= 0 )
{
    deathCurrentSprite = 0
}

//controls

window.addEventListener( "keydown", event =>
{
    switch ( event.key )
    {
        //player
        case "q":
            P = 9
            blockR = false
            break;
        case "d":
            playerOne.velocity.x = 7
            P = 1
            break;
        case "a":
            playerOne.velocity.x = -7
            P = 5
            break;
        //enemy
        case "0":
            E = 9
            block = false
            break;
        case "ArrowRight":
            enemyOne.velocity.x = 7
            enemyOne.size.w = 100
            E = 5
            break;
        case "ArrowLeft":
            enemyOne.velocity.x = -7
            enemyOne.size.w = 100
            E = 1
            break;
    }
} );

let PJ = false
let EJ = false

window.addEventListener( "keyup", event =>
{
    switch ( event.key )
    {
        //player
        case "q":
            P = 0
            blockR = true
            break;
        case "d":
            playerOne.velocity.x = 0
            P = 0
            break;
        case "a":
            playerOne.velocity.x = 0
            P = 2
            break;
        case "w":
            P = 4
            playerOne.velocity.y = -15
            break;
        case "s":
            punchCurrentSprite = 0
            P = 3
            att = true
            setTimeout( () =>
            {
                P = 0
                att = false
            }, 500 )
            break;
        //enemy
        case "0":
            E = 0
            block = true
            break;
        case "ArrowRight":
            enemyOne.velocity.x = 0
            enemyOne.size.w = 80
            E = 2
            break;
        case "ArrowLeft":
            enemyOne.velocity.x = 0
            enemyOne.size.w = 80
            E = 0
            break;
        case "ArrowUp":
            E = 4
            enemyOne.velocity.y = -15
            break;
        case "ArrowDown":
            E = 3
            punchCurrentSprite = 0
            attE = true
            setTimeout( () =>
            {
                E = 0
                attE = false
            }, 500 )
            break;
    }
} );

//controls (end)
game()
window.onload = function ()
{
    start.play()
}
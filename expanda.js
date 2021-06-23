class Canvas_Piece 
{
	constructor(canvas)
	{
		const cnv = canvas;
		const ctx = cnv.getContext("2d");
		const update_frequency = 100;
		
		
		playing = false;
		
		cnv.addEventListener("keydown", keyin, true);
	}
	create = function() // OVERWRITE!
	{
		// populate entities
		//?		entity_factory
	}
	start = function()
	{
		playing = true;
		play();
	}
	pause = function()
	{
		playing = !playing;
	}
	restart = function()
	{
		// stop playing
		pause();
		// reset 
		reset_elements();
		// repopulate
		create();
		// restart
		start();
	}
		reset_elements = function() // OVERWRITE!
		{
			// elements include background and atmospheric elements; all entities incl player(s) if applicable
			
		}
	update = function() // OVERWRITE!
	{
		// update this background (if applicable)
		// call update() on all entities
	}
	draw = function() // OVERWRITE!
	{
		// ctx
		// 	clear canvas
		ctx.clearRect(0,0,game_canvas.width,game_canvas.height);
		// 	draw this background
		
		// 	call draw() on all entities
	}
	play = function()
	{
		draw();
		update();
		if (playing)
		{
			setTimeout(function()
			{ play() }, update_frequency);
		}
	}
	keyin = function(e)
	{
		// set universal controls 
		if (e.code == "Enter")
		{
			restart();
		}
		if (e.code == "Space")
		{
			pause();
		}
	}
}
class Canvas_Game extends Canvas_Piece // interface probably more appropriate
{
	constructor(canvas)
	{
		super(canvas);
		nextControl;
		enemies = [];
		player;
	}
	
	keyin = function(e) 
	{
		// handle universal canvas controls (pause/restart)
		super(e);
		// handle game controls
		code = e.code;
		// directional controls
		if (code == "KeyW") //! impl or arrow keys
		{
			nextControl = { x :  0, y :  1 };
		}
		if (code == "KeyA")
		{
			nextControl = { x : -1, y :  0 };
		}
		if (code == "KeyS")
		{
			nextControl = { x :  0, y : -1 };
		}
		if (code == "KeyD")
		{
			nextControl = { x :  1, y :  0 };
		}
	}
}

class Expanda extends Canvas_Game
{
	constructor(canvas)
	{
		super(canvas);
		const num_enemies_large = 1;
		const num_enemies_medium = 5;
		const num_enemies_small = 100;
		
		
		
		enemy_size = 0; // starts at zero, increments each level
		
		sprite_factory = new Expanda_Sprite_Factory();
	}
	create = function()
	{
		player = sprite_factory.getPlayer();
		enemies = sprite_factory.getEnemies();
	}
	update = function()
	{
		player
	}
	draw = function()
	{
		
	}
}

class Element_Factory 
{
	constructor()
	{
		
	}
	
}
class Expanda_Sprite_Factory extends Element_Factory
{
	constructor()
	{
		super();
		
	}
}




class Canvas_Element
{ // super for all static and dynamic elements; visual and interactive; automatic and playable
	constructor()
	{
		
	}
	draw = function()
	{
		
	}
}
	class Static_Element extends Canvas_Element
	{ // super for all static visual elements
		constructor()
		{
			super();
		}
		// currently empty
	}
	
		class Static_Background extends Canvas_Element // Static_Element
		{
			constructor()
			{
				super();
			}
		}
		
	class Dynamic_Element extends Canvas_Element
	{
		constructor()
		{
			super();
		}
		update()
		{
			
		}
	}
	
		class Sprite extends Dynamic_Element
		{
			constructor()
			{
				super();
				x;
				y;
			}
			
		}
			class Expanda_Player extends Sprite
			{
				
			}
			class Expanda_Enemy extends Sprite
			{
				
			}

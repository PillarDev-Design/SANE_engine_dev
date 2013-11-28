/*****************************************************************************\
 * sane_project_one.js                                                       *
 * ------------------------------------------------------------------------- *
 * This file contains the JavaScript code for Project 1 - The initialization *
 *  of the canvas element, and a simple sprite animation.                    *
 *                                                                           *
 * FILE CONTENTS                                                             *
 * ------------------------------------------------------------------------- *
 * Declare Variables                                                         *
 *                                                                           *
 * Cross-browser functionality when accessing framerate                      *
 *                                                                           *
 * function internal_init()                                                  *
 *  - At the bottom of the program, this function is called to begin the     *
 *     animation. This is necessary because in the global scope of the       *
 *     program, we are calling Initialize_Project_One(). To actually get it  *
 *     going, we're going to fire the internal_init() at the bottom, after   *
 *     we're done with all our declarations and definitions.                 *
 *                                                                           *
 * function loaded()                                                         *
 *  - This is executed when the PNG is successfully loaded. It begins the    *
 *     setTimeout function to link with the update function.                 *
 *                                                                           *
 * function redraw()                                                         *
 *  - This function draws the correct frame to the canvas.                   *
 *                                                                           *
 * function update()                                                         *
 *  - This function regulates the amount of milliseconds it takes on each    *
 *     frame.                                                                *
 *                                                                           *
 * Execute the program.                                                      *
\*****************************************************************************/
function Initialize_Project_One(){
	// Declare Variables
	var canvas = null,
	    img = null,
	    ctx = null,
	    imageReady = false,
	    frame = 0,
	    lastUpdateTime = Date.now(),
	    acDelta = 0,
	    msPerFrame = 200;
	//-------------------------------------------------------------------\\
	// Cross-browser functionality when accessing framerate
	window.requestAnimFrame = (function(){
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback){
				window.setTimeout(callback, 1000 / 60);
			};
	})();
	//-------------------------------------------------------------------\\
	// internal_init()
	function internal_init(){
		canvas = document.getElementById('sane_project_one_canvas');
		ctx = canvas.getContext("2d");
		img = new Image();
		img.src = '/data/images/project_one_sprite.png';
		img.onload = loaded();

		// NOTE: I'm reassigning these variables because there is
		// 	a possibility that you're not doing this for the
		// 	first time in the program. The FPS gets really
		// 	glitchy if you don't set them to default.
		lastUpdateTime = Date.now();
		acDelta = 0;
		msPerFrame = 200;
		// END NOTE
		
		redraw();
		
		// Quitting functionality
		$('#sane_project_one_canvas').click(function(){
			ctx.fillStyle = '#000000';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			close_div('#sane_project_one');
			open_div('#sane_intro_container');
		});
	};
	//-------------------------------------------------------------------\\
	function loaded(){
		imageReady = true;
		setTimeout(update, 1000 / 60);
	};
	//-------------------------------------------------------------------\\
	function redraw(){
		ctx.fillStyle = '#000000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		if(imageReady){
			// Image
			ctx.drawImage(img,           // image to be drawn
				frame * 18,          // x-coord clipping from source
				0,                   // y-coord clipping from source
				18,                  // width of the clipped image
				26,                  // height of the clipped image
				(canvas.width / 2),  // x-coord on canvas to place
				(canvas.height / 2), // y-coord on canvas to place
				18,                  // width of image (for stretching)
				26);                 // height of image (for stretching)
			// Text
			ctx.fillStyle = "White";
			ctx.fillText("Click to exit",
				(canvas.width / 2 - 18),
				(canvas.height - 30));
		}
	};
	//-------------------------------------------------------------------\\
	function update(){
		requestAnimFrame(update);

		var delta = Date.now() - lastUpdateTime;
		if(acDelta > msPerFrame){
			acDelta = 0;
			redraw();
			frame++;
			if(frame >= 4){ frame = 0; }
		}else{
			acDelta += delta;
		}
		lastUpdateTime = Date.now();
	};
	//-------------------------------------------------------------------\\
	// Execute the program.	
	internal_init();
};

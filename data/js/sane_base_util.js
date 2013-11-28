/*****************************************************************************\
 * sane_base_util.js                                                         *
 * ------------------------------------------------------------------------- *
 * This file contains the JavaScript code for the base landing page.         *
 *                                                                           *
 * FILE CONTENTS                                                             *
 * ------------------------------------------------------------------------- *
 * function main_site_onload()                                               *
 * - Init function that files when the body of the index.html page is loaded *
 *                                                                           *
 * function close_div(divName)                                               *
 *  - A function that utilizes jQuery to removeClass and addClass to a div.  *
 *     The divName should have the # included.                               *
 *     Ex. - close_div('#close_me');                                         *
 *                                                                           *
 * function open_div(divName)                                                *
 *  - Same function as above, but to open divs.                              *
 *     Ex. - open_div('#open_me');                                           *
 *                                                                           *
 * function Add_Events_To_Project(thumbnail_div)                             *
 *  - A function that adds the mouseenter/mouseleave functions, as well as   *
 *    the click function that will load the program.                         *
 *    Ex.-Add_Events_To_Project('#site_content_project_one_thumbnail');      *
\*****************************************************************************/
function main_site_onload(){
	// Add events to the project thumbnails.
	Add_Events_To_Project('#site_content_project_one_thumbnail');
	Add_Events_To_Project('#site_content_project_two_thumbnail');
};
//---------------------------------------------------------------------------\\
function close_div(divName){
	$(divName).removeClass('active_div').addClass('inactive_div');
};
//---------------------------------------------------------------------------\\
function open_div(divName){
	$(divName).removeClass('inactive_div').addClass('active_div');
};
//---------------------------------------------------------------------------\\
function Add_Events_To_Project(thumbnail_div){
	// Declare variables
	var text_placeholder = null,
		project_one = "<div class='project_title'>Project 1</div>" +
			"<div class='project_subtitle'>Initializing Canvas" +
			" and Sprites</div><hr class='modified_hr' />" +
			"<div class='project_thumbnail' id='project_one_" +
			"thumbnail'></div>" +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"This is sample text. This is sample text." +
			"<div class='clear'></div>",
		project_two = "<div class='project_title'>Project 2</div>" +
			"<div class='project_subtitle'>Building Backgroun" +
			"ds and Loading Zones</div><hr class='modified_hr" +
			"' /><div class='project_thumbnail' id='project_t" +
			"wo_thumbnail'></div>" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"This is a different sample text. Derptastic!" +
			"<div class='clear'></div>";

	// Determine description content
	switch(thumbnail_div){
		case '#site_content_project_one_thumbnail':
			text_placeholder = project_one;
			break;
		case '#site_content_project_two_thumbnail':
			text_placeholder = project_two;
			break;
	}

	// Enter
	$(thumbnail_div).mouseenter(function(){
		close_div('#sane_intro_right_text_default');
		if(text_placeholder !== null){
			$('#sane_intro_right_text_new').empty()
				.append(text_placeholder);
		}else{
			$('#sane_intro_right_text_new').empty()
				.append("Error in defining placeholder.");
		}
		open_div('#sane_intro_right_text_new');
	});
	// Leave
	$(thumbnail_div).mouseleave(function(){
		close_div('#sane_intro_right_text_new');
		open_div('#sane_intro_right_text_default');
	});
	// Click
};
//---------------------------------------------------------------------------\\
function Initiate_Project(thumbnail_div){
};

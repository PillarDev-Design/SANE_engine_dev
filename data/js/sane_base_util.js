/*****************************************************************************\
 * sane_base_util.js							     *
 * ------------------------------------------------------------------------- *
 * This file contains the JavaScript code for the base landing page.         *
 *								       	     *
 *									     *
 * FILE CONTENTS							     *
 * ------------------------------------------------------------------------- *
 * function main_site_onload()						     *
 *  - Init function that files when the body of the index.html page	     *
 *     is loaded.						     	     *
 *									     *
 * function close_div(divName)						     *
 *	- A function that utilizes jQuery to removeClass and addClass to a   *
 *	   div. The divName should have the # included.			     *
 *	   Ex. - close_div('#close_me');				     *
 *									     *
 * function open_div(divName)						     *
 *	- Same function as above, but to open divs.			     *
 *		Ex. - open_div('#open_me');				     *
 *									     *
 * function Add_Events_To_Project(thumbnail_div)			     *
 *	- A function that adds the mouseenter/mouseleave functions, as well  *
 *	   as the click function that will load the program.		     *
 *	   Ex.-Add_Events_To_Project('#site_content_project_one_thumbnail'); *
\*****************************************************************************/
function main_site_onload(){
	// Add events to the project thumbnails.
	Add_Events_To_Project('#site_content_project_one_thumbnail');
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
	var text_placeholder,
		project_one = "This is project one's placeholder.<br />" +
			"<br />We can place whatever HTML inside of this " +
			"variable.<br /><hr class='modified_hr' />Test test.";

	// Determine description content
	switch(thumbnail_div){
		case '#site_content_project_one_thumbnail':
			text_placeholder = project_one;
			break;
	}

	// Enter
	$(thumbnail_div).mouseenter(function(){
		close_div('#sane_intro_right_text_default');
		//$('#sane_intro_right_text_new').empty().append(text_placeholder);
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

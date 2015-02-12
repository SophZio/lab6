'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	console.log($.get("/project/" + idNumber, showDetails));
	
   
}
function showDetails (result){
	console.log(result['image']);
	var project = $(this).closest('.project');
	var detail = project.find(".details");
	var projectHTML='<a href="#" class="thumbnail">' 
		+ '<img src= " ' 
		+ result['image']+ 
		' " class= "detailsImage" >'+
		 '<h1>' 
		 + result['title'] 
		 +'</h1>'+
		 '<h1>' +
		  result['date'] +
		  '</h1>'
		   + '<p>' 
		   + result['summary']
		    + ' </p> </a>';
    detail.html(projectHTML);
	$("#project-container").html(projectHTML);
	$("#project-description").html(result['summary'])
	
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}
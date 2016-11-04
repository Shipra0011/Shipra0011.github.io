// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

//$('first').click(function() {
  //var newSrc = $('#first').attr('src'); 

  //$('#bigimage').attr('src', newSrc); }

//$('second').click(function() {
  //var newSrc = $('#second').attr('src'); 

  //$('#bigimage').attr('src', newSrc); 
//}

//$('third').click(function() {
  //var newSrc = $('#third').attr('src'); 

  //$('#bigimage').attr('src', newSrc); 
//})


//$('fourth').click(function() {
  //var newSrc = $('#fourth').attr('src'); 

  //$('#bigimage').attr('src', newSrc);})

$('.thumb').click(function () { 
	var newSrc = $(this).attr('src'); 
	$('#bigimage').attr('src', newSrc); 
})


      


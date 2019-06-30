function portfoliohover()
{
	$("#list li").hover(
	  function () {
		jQuery(this).find('.portfolio_box').stop().fadeTo(4000,10);
	  },
	  function () {
		jQuery('.portfolio_box').css("display","none");
	  }
	);
}
function imagelightbox() {
	$("a.example6").fancybox({
		'titlePosition'		: 'outside',
		'overlayColor'		: '#000',
		'overlayOpacity'	: 0.9
	});
}
jQuery(document).ready(function() {
jQuery(window).load(function() {
 jQuery('.flexslider').flexslider();
});
});

//Create the dropdown bases
	jQuery(document).ready(function(){				
				jQuery("<select />").appendTo(".jqueryslidemenu");
				
				// Create default option "Go to..."
				jQuery("<option />", {
				   "selected": "selected",
				   "value"   : "",
				   "text"    : "Go to..."
				}).appendTo(".jqueryslidemenu select");
							
				// Populate dropdowns with the first menu items
				jQuery(".jqueryslidemenu ul li a").each(function() {
				 	var el = jQuery(this);
				 	jQuery("<option />", {
				     	"value"   : el.attr("href"),
				    	"text"    : el.text()
				 	}).appendTo(".jqueryslidemenu select");

					
				});
				
				//make responsive dropdown menu actually work			
		      	jQuery(".jqueryslidemenu select").change(function() {
		        	window.location = jQuery(this).find("option:selected").val();
					
		      	});
		});
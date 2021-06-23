$(document).ready( function() 
{
	retab(sections, nav_links[0]);
	
	article 	= document.getElementById("main_content");		

	nav 		= document.getElementById("main_nav");
	sections 	= article.getElementsByTagName("section");
	nav_links 	= document.getElementsByTagName("li");

	additional_article 	= document.getElementById("additional_content");
	additional_nav 		= document.getElementById("additional_nav");
	
	additional_sections = additional_article.getElementsByTagName("section");
	additional_links 	= additional_nav.getElementsByTagName("li");


	nav_links[0].addEventListener("click", function(){ retab(sections, nav_links[0]); } );
	nav_links[1].addEventListener("click", function(){ retab(sections, nav_links[1]); } );
	nav_links[2].addEventListener("click", function(){ retab(sections, nav_links[2]); } );
	nav_links[3].addEventListener("click", function(){ 
		retab(sections, nav_links[3]);
		retab(additional_sections, additional_links[2]); });

	additional_links[0].addEventListener("click", function(){ retab(additional_sections, additional_links[0]); } );
	additional_links[1].addEventListener("click", function(){ retab(additional_sections, additional_links[1]); } );
	additional_links[2].addEventListener("click", function(){ retab(additional_sections, additional_links[2]); } );
	additional_links[3].addEventListener("click", function(){ retab(additional_sections, additional_links[3]); } );


	function retab(sections_array, link)
	{
		// hide all sections
		for (i = 0; i < sections_array.length; i++) 
		{
			sections_array[i].style.display = "none";
		}
		// set 
		section_id = link.id.replace("_li", "");
		section = document.getElementById(section_id);
		
		section.style.display = "flex";
		if (section_id == "additional")
		{
	//				retab(additional_links
		}
	}
});
/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/baoxinchen/
*/

window.onload = function(){
	//set name and title
	$("#name_small").html(name);
	$("#mytitle").html(mytitle);
	
	//set emails
	var html_text = '';
	for (i = 0; i < emails.length; i++) {
		html_text = html_text+'<i class="fas fa-envelope" style="font-size:16px"></i> ';
		html_text = html_text+emails[i];
		if (i < emails.length-1)
			html_text = html_text+'; ';
	}
	$("#emails").html(html_text);
	//add publications
	load_publications();
	
	// copyright
	$("#copyright").html(copyright);
}
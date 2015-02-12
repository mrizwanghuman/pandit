$(".business").hide();
$(".lovep").hide();
$(".sexl").hide();
$(".moneyp").hide();
$(".enemyp").hide();
$(".housep").hide();
$(".marriagep").hide();
$(".childless").hide();
	var overlay = $('<div id="overlay"></div>');
	var popup =$(".business");
	var lovep =$(".lovep");
	var sexl = $(".sexl");
	var moneyp = $ (".moneyp");
	var enemyp = $(".enemyp");
	var housep = $(".housep");
	var marriagep = $(".marriagep");
	var childless = $(".childless");
		$("body").append(overlay);
	// overlay.append(popup);
	// overlay.append(lovep);
	
	$("#business").click(function() {
	popup.show();
	overlay.html(popup);
	overlay.show();
	window.scrollTo(0,0);

	// body...
	
});

	$("#lovep").click(function(){
		lovep.show();
		overlay.html(lovep);
		overlay.show();
		window.scrollTo(0,0);
			});
	$("#sexl").click(function(){
		sexl.show();
		overlay.html(sexl);
		overlay.show();
		window.scrollTo(0,0);
			});
	$("#moneyp").click(function(){
		moneyp.show();
		overlay.html(moneyp);
		overlay.show();
		window.scrollTo(0,0);
			});
	$("#enemyp").click(function(){
		enemyp.show();
		overlay.html(enemyp);
		overlay.show();
		window.scrollTo(0,0);
			});
	$("#housep").click(function(){
		housep.show();
		overlay.html(housep);
		overlay.show();
		window.scrollTo(0,0);
			});
	$("#marriagep").click(function(){
		marriagep.show();
		overlay.html(marriagep);
		overlay.show();
		window.scrollTo(0,0);
			});
	$("#childless").click(function(){
		childless.show();
		overlay.html(childless);
		overlay.show();
		window.scrollTo(0,0);
			});
overlay.click(function(){
overlay.toggle();

});
$(".abnavig").hide();
$("#threelinemenu").click(function  () {
	// body...
	$(".abnavig").toggle();
});
function bckanim (){
var x = 0;
var y = 0;
			//catch a reference to the banner
									var banner = $("#bodym");

			// set initial banner background position
									banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

				// scroll up background position every 90 milliseconds
	window.setInterval(function() {
banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
													x++;
													//x--;

													//if you need to scroll image horizontally -
													// uncomment x and comment y

								}, 100);}
									


// // var correct = 0;
// // var question1 = prompt("What language I am learning");
// // if(question1.toUpperCase() === "JAVASCRIPT"){
// //  correct += 1;
// // } 
// // var question2 = prompt("what is name of biggest army in the world");
// // if (question2.toUpperCase() ==="PAKISTAN"){
// //  correct += 1;
// // }
// // var question3 = prompt("Why my luck sucks");
// // if (question3.toUpperCase()==="ALLAH KNOWS BEST"){
// //  correct += 1;
// // }
// // var question4 = prompt("Where Quad-e-Azam was born");
// // if(question4.toUpperCase() === "KARACHI"){
// //  correct +=1;
// // }
// // var question5 = prompt("Where is USA");
// // if(question5.toUpperCase()==="EAST"){
// //  correct+=1;
// // }
// // document.write("<p>You have " + correct + " out 5 answer correct.</p>");

// // if( correct === 5) {
// //  document.write("<strong>You have earned Gold madal</strong>");
// // }else if (correct >= 3) {
// //  document.write("You have earned silver madol");
// // }else if (correct >=2){
// //  document.write("Good luck next time");
// // }
// function
// var colorsName = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#f39c12", "#d35400"]
// var colorChange = 0;
// var i = 0;
// for (var i= 0,i < colorChange.length; i++) {
// 	colorChange ++;
// } if (colorChange >4){
// 	colorChange = 0;
// } 

(function(){
	var colorChange = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#f39c12", "#d35400"];
	var idsn = document.getElementById('telep').style;
	var counter = 1;
	colorName = colorChange.length;
	function auto(){
		idsn.backgroundColor = colorChange[counter = ++counter % colorName];
	}
	setInterval(auto, 700);
})();
$("#sidelist").hide();
$("#sidelist").addClass("sidelist");
// (function(){
// 	var colorChange = ["red","blue", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#f39c12", "#d35400"];
// 	var idsn = document.getElementById('problemsList').style;
// 	var counter = +1;
// 	colorName = colorChange.length;
// 	function auto(){
// 		idsn.backgroundColor = colorChange[counter = ++counter % colorName];
// 	}
// 	setInterval(auto, 200);
// })();
$(".menum").mouseover(function(){
$(this).addClass("addc").removeClass(".menum").mouseleave(function(){
	$(this).removeClass("addc").addClass(".menum");
});
});
$(".menum").click (function(){
$(".sidelist").slideToggle(1000);
});

// function playmp3 (){
 	var idsi = $("#blackMagic");
 	var panditMain = $("#headingId");
var audio1 = document.getElementsByTagName("audio")[0];
panditMain.mouseenter(function(){
audio1.play();
});
panditMain.mouseleave(function(){
	audio1.pause();
});

var audio = document.getElementsByTagName("audio")[1];
idsi.mouseenter(function(){
audio.play();
});
idsi.mouseleave(function(){
	audio.pause();
});


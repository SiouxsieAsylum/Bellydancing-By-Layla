// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Classes.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

	var monthDisplayed = document.getElementById('month').innerHTML;
	var monthCount = months.indexOf(monthDisplayed);

	var beginner = document.getElementById("beginner");
	var intermediate = document.getElementById("intermediate");
	var advanced = document.getElementById("advanced");
	var workshops = document.getElementById("workshops");
	var dayshtml = document.getElementsByTagName("td");
	var days = Array.from(document.getElementsByTagName("td"));

	var classScheduled = document.getElementsByClassName("in-session");
	var hoverFlyer = document.getElementById("hoverFlyer");

	var handle1;
	var handle2;
	var handle3;


	

	function pressBox(){
		monthCount++;
		switchMonths();
	}



	function switchMonths(){
		if ( monthCount < 0 ) {
			monthCount = months.length - 1;
		}

		if ( monthCount == months.length) {
			monthCount =  0;
		}
			document.getElementById('month').innerHTML = "&#10094;  " + months[monthCount] + "  &#10095;";

	}



	function classAssignment(){
		beginner.onclick = function(){
			for(let i = 0; i < days.length; i++){
				removeFlyer();
				days[i].classList.remove("in-session");
				days[i].classList.remove("empty");
					if (days[i].innerHTML == "Tuesday" || days[i].innerHTML == "Thursday") {
					days[i].classList.add("in-session");
					displayFlyer();
				}
			}
		}
		intermediate.onclick = function(){
			for(let i = 0; i < days.length; i++){
				removeFlyer(); 
				days[i].classList.remove("in-session");
				days[i].classList.remove("empty");
				if (days[i].innerHTML == "Friday") {
					days[i].classList.add("in-session");
					displayFlyer();
				}
			}
		}
		advanced.onclick = function(){
			for(let i = 0; i < days.length; i++){
				removeFlyer();
				days[i].classList.remove("in-session");
				if (days[i].innerHTML == "Monday" || days[i].innerHTML == "Thursday") {
					days[i].classList.add("in-session");
					displayFlyer();
				}
			}
		}
		workshops.onclick = function() {
			alert("Sorry, none scheduled. Check back soon!");

			for(let i = 0; i < days.length; i++){
				removeFlyer();
				days[i].classList.remove("in-session");
			}
		}
		
	}
//doesn't work, but it should.
//supposed to remove the "displayFlyer"s eventListener defined in classes.html
function removeFlyer(){
	for(let i = 0; i < dayshtml.length; i++){
		dayshtml[i].removeEventListener("mouseover", handle1);
		dayshtml[i].removeEventListener("mousemove", handle2);
		dayshtml[i].removeEventListener("mouseout", handle3);
	}
}

// adapted from https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click
// does not work externally. Please refer to classes.html

	// $(document).ready(function(){
	// 	$("h2").click(function(){
	// 		var cal = $('#calendar').offset();
	// 		$('html,body').animate({
	// 			scrollTop: cal.top - 60}, 'slow');
	// 	});
	// });


// jquery for displaying a flyer div on hover that will only appear when ".in-sesson"
function displayFlyer(){


 for(let i = 0; i < classScheduled.length; i++){
  classScheduled[i].addEventListener("mouseover", handle1 = function(){
    $("#hoverFlyer").css({
       "display":"block"
  	})
  })
  
	classScheduled[i].addEventListener("mousemove", handle2 = function(e){

    $("#hoverFlyer").css({
       top: e.pageY - 300,
       left: e.pageX + 50
    }) 
  })
  classScheduled[i].addEventListener("mouseout", handle3 = function(){
    $("#hoverFlyer").css({
       "display": "none"
    }) 
  })
 }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Costuming.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NON-FUNCTIONAL UNLESS INTERNAL. Please refer to page for code. 

// Arrays for content are declared here. The "____Title"s  are the headers for each item for sale. The "____Text" is the caption for each. 



// teal, then purple
// var braTitle = ["Teal and Gold Bra and Belt Ensemble", "Purple Sateen Mermaid Skirt Ensemble"]

// var braText = ["Teal bra and belt ensemble, complete with teal tiara encrusted with rhinestones. Shoulder sleeves are embroidered with gold and are not detachable. Belt comes with layers of bright gold fringe. Skirt not included.", "Purple ensemble that comes with bra, skirt and elbow sleeves. Bra is a halter top with silver rhinestotes embroidered onto the straps. Skirt os one piece with a slit 3/4s up the left leg. Beading is silver and various shades of purple. Fabric provides stretch and the skirt is lined. "];
// // teal, purple, rampi
// var skirtTitle = ["Teal Ruffled Full Length Skirt","Purple Ruffled Full Length Skirt","Multi-Colored Full Length Circle Skirt"]

// var skirtText = ["Teal chiffon ruffled skirt. Ruffles are lined with silver sequis and have large silver sequins placed incrementally along the edges. ","Purple chiffon ruffled skirt. Ruffles are edged with purple sequins","Multi-colored full-circle satin skirt in purple, red, and black. Enough fabric to wrap around you twice over. "];
// //gold, then white
// var wingTitle = ["Gold Isis Wings","White Isis Wings with Iridescence"]

// var wingText = ["Gold polyester open back Isis wings. Wingspan of 6.5feet.", "White polyester 360 Isis wings with green and purple iridescence. Wingspan of 6.5 feet."];
// //black, then purple
// var dressTitle = ["Velour Black and Magenta Beledi Dress", "Vintage Purple Striped Beledi Dress"]

// var dressText = ["Velvet black beledi dress with silver beading and magenta appliques. Comes with gauntlets and tiara. ","Vintage! Stitched in the 80's! Purple beledi dress with lilac and darp purple vertical striping. Half-arm bell sleeves. Sequins are indigo and at least a half-inch in diameter. All edges are lined with sequins."];

// // ~~~~~~~~~~ slideshow code for bra-belt section ~~~~~~~~~~~~~~~~~


// // Which item is up right now
// var braDisplayed = document.getElementById("bra-belt").children[0];
// // <p> to insert _____Text
// var braDesc = document.getElementById("bra-caption");
// // array of slides so I can get index of which one is displayed currently
// //conversion of HTMLCollection to array from https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
// var bSlides = Array.from(document.getElementById("bra-belt").children);
// //index of item displayed
// var braIndex = bSlides.indexOf(braDisplayed);
// //<h3> to insert _____Title
// var braTitleVar = document.getElementById("bra-title");


// showBraDivs();

// function plusBraDivs() {
// 	braIndex++;
// 	showBraDivs();
// }


// function showBraDivs(){

// 	if (braIndex < 0) {
// 		braIndex = bSlides.length - 1;
// 	}

// 	if (braIndex == bSlides.length) {
// 		braIndex = 0
// 	}

// 	for (let i = 0; i < bSlides.length; i++){
// 		bSlides[i].style.display="none";
// 	}

// 	// display all current info based on index
// 		bSlides[braIndex].style.display = "block";
// 		braDesc.innerHTML = braText[braIndex];
// 		braTitleVar.innerHTML = braTitle[braIndex];
// }

// // ~~~~~~~~~~~~~~~~~~~~~~~~slideshow code for skirt section~~~~~~~~~~~~~~~~~~~~

// // Which item is up right now
// var skirtDisplayed = document.getElementById("skirt-slides").children[0];
// // array of slides so I can get index of which one is displayed currently
// var skirtDesc = document.getElementById("skirt-caption");
// // array of slides so I can get index of which one is displayed currently
// //conversion of HTMLCollection to array from https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
// var sSlides = Array.from(document.getElementById("skirt-slides").children);
// //index of item displayed
// var skirtIndex = sSlides.indexOf(skirtDisplayed);
// //<h3> to insert _____Title
// var skirtTitleVar = document.getElementById("skirt-title");

// showSkirtDivs();

// function plusSkirtDivs() {
// 	skirtIndex++;
// 	showSkirtDivs();
// }

// function showSkirtDivs(){

// 	if (skirtIndex < 0) {
// 		skirtIndex = sSlides.length - 1;
// 	}

// 	if (skirtIndex == sSlides.length) {
// 		skirtIndex = 0
// 	}

// 	for (let i = 0; i < sSlides.length; i++){
// 		sSlides[i].style.display="none";
// 	}

// 	// display all current info based on index
// 		sSlides[skirtIndex].style.display = "block";
// 		skirtDesc.innerHTML = skirtText[skirtIndex];
// 		skirtTitleVar.innerHTML = skirtTitle[skirtIndex];
// }

// // ~~~~~~~~~~~slideshow code for wing section~~~~~~~~~~~~~~~~~~~~~
// // Which item is up right now
// var wingDisplayed = document.getElementById("wing-slides").children[0];
// // array of slides so I can get index of which one is displayed currently
// var wingDesc = document.getElementById("wing-caption");
// // array of slides so I can get index of which one is displayed currently
// //conversion of HTMLCollection to array from https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
// var wSlides = Array.from(document.getElementById("wing-slides").children);
// //index of item displayed
// var wingIndex = wSlides.indexOf(wingDisplayed);
// //<h3> to insert _____Title
// var wingTitleVar = document.getElementById("wing-title");

// showWingDivs();

// function plusWingDivs() {
// 	wingIndex++;
// 	showWingDivs();
// }

// function showWingDivs(){

// 	if (wingIndex < 0) {
// 		wingIndex = wSlides.length - 1;
// 	}

// 	if (wingIndex == wSlides.length) {
// 		wingIndex = 0
// 	}

// 	for (let i = 0; i < wSlides.length; i++){
// 		wSlides[i].style.display="none";
// 	}

// 	// display all current info based on index
// 		wSlides[wingIndex].style.display = "block";
// 		wingDesc.innerHTML = wingText[wingIndex];
// 		wingTitleVar.innerHTML = wingTitle[wingIndex];
// }

// // ~~~~~~~~~~~~~~~~~~~slideshow code for beledi section ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Which item is up right now
// var dressDisplayed = document.getElementById("beledi-slides").children[0];
// // array of slides so I can get index of which one is displayed currently
// var dressDesc = document.getElementById("beledi-caption");
// // array of slides so I can get index of which one is displayed currently
// //conversion of HTMLCollection to array from https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
// var dSlides = Array.from(document.getElementById("beledi-slides").children);
// //index of item displayed
// var dressIndex = dSlides.indexOf(dressDisplayed);
// //<h3> to insert _____Title
// var dressTitleVar = document.getElementById("beledi-title");

// showDressDivs();

// function plusDressDivs() {
// 	dressIndex++;
// 	showDressDivs();
// }

// function showDressDivs(){

// 	if (dressIndex < 0) {
// 		dressIndex = dSlides.length - 1;
// 	}

// 	if (dressIndex == dSlides.length) {
// 		dressIndex = 0
// 	}

// 	for (let i = 0; i < dSlides.length; i++){
// 		dSlides[i].style.display="none";
// 	}
// 	// display all current info based on index
// 		dSlides[dressIndex].style.display = "block";
// 		dressDesc.innerHTML = dressText[dressIndex];
// 		dressTitleVar.innerHTML = dressTitle[dressIndex];
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~index.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NON-FUNCTIONAL UNLESS INTERNAL. Please refer to page for code. 


 //  var exOut = document.getElementsByClassName("close")[0];
 //  var laylaVideo = document.getElementById("laylaVideo");

 //  var pic = document.getElementById("main-image");
 //  var layla = document.getElementById("main-layla");
 //  var pro = document.getElementById("professional");
 
 // //adapeted from https://stackoverflow.com/questions/7696651/jump-to-a-element-automatically-on-page-load
 // function modalLaunch(){
 //  	document.addEventListener("DOMContentLoaded", function(){
 //  	if(!document.location.hash){
 //  		document.location.hash = "video";

 //  	} else if (document.location.hash = "close"){
 //  		pauseVid();
 //  	}
 //  }
 // }

 //  function pauseVid(){
 //  	laylaVideo.pause();
 //  	pic.style.opacity="1";
 //  	layla.style.opacity="1";
 //  	pro.style.opacity="1";

 //  }

 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~shows.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// NON-FUNCTIONAL UNLESS INTERNAL. Please refer to page for code. 




// var names = Array.from(document.getElementsByClassName("top"));
// var thumbnails = Array.from(document.getElementsByClassName("thumbnail"));
// var dates = Array.from(document.getElementsByClassName("bottom"));

// var hawanimNightsHeading = "Hawanim Nights at BellyDance America, $10";
// var hawanimNightsAddress = "65 W 37th St #203, New York, NY 10018";
// var hawanimNightsText = "Bellydance America presents our bi-weekly Hawanim Nights! Every other Saturday at 8pm. Drinks and refreshments will be available, live music and beautiful student performances. Come support our lovely ladies! ";

// var summerHeading ="5th Year Donna Summer Tribute at Jebon, $15";
// var summerAddress="15 St Marks Pl, New York, NY 10003";
// var summerText="Save the date, my peoples! This year Disco Halloween is serving up a side of Donna! WOOT WOOT and DOUBLE WOOT! This flyer was edited by vivdesigns! A portion of the proceeds of this show will be donated to help the Houston flood victims.";

// var raqsHeading="5th Annual NYC Cairo Raks at the Skyline Hotel, TBD";
// var raqsAddress="725 10th Avenue New York, NY 10018";
// var raqsText="Mohamed Shahin and Bellydance America present the 5th Annual NYC Cairo Raks event! Details soon to follow, but register now!"

// //getting children of a div by classname adapted from https://stackoverflow.com/questions/12166753/how-to-get-child-element-by-class-name



// function dropdownExpand(){
// 	document.addEventListener("DOMContentLoaded", function(){
// 		for(let n = 0; n < names.length; n++) {
// 	// console.log(dates[n].style.width);

// 		names[n].addEventListener("click", function(){

// 				thumbnails[n].classList.toggle("active");
// 				dates[n].classList.toggle("active");

// 				for (let m = 0; m < names.length; m++){
// 					if (n !== m){
// 						names[m].classList.remove("active");
// 						thumbnails[m].classList.remove("active");
// 						dates[m].classList.remove("active");
// 					}
// 				}

// 		});

// 		var i = 0;
// 		var j = 0;
// 		var k = 0;

// 		$("#hawanim").click(function(){
// 			i++;
// 			if (i % 2 != 0){$(this).data("clicked", true);}
// 			else {$(this).data("clicked", false);}
// 		})

// 		$("#summer").click(function(){
// 			j++;
// 			if (j % 2 != 0){$(this).data("clicked", true);}
// 			else {$(this).data("clicked", false);}
// 		})

// 		$("#raks").click(function(){
// 			k++;
// 			if (k % 2 != 0){$(this).data("clicked", true);}
// 			else {$(this).data("clicked", false);}
// 		})

// 		thumbnails[n].addEventListener("click", function(){
// 			$(document).ready(function(){
//             	$("section").slideToggle("slow");

//             		if($("#hawanim").data('clicked')){
// 						$("#title-and-price").html(hawanimNightsHeading);
//             			$("#address").html(hawanimNightsAddress);
//             			$("#text").html(hawanimNightsText);
//             			$("#flyer").attr("src","images/layla-events-hawanim-nights.jpg");
//             		}

//             		if ($("#summer").data('clicked')) {
//             			$("#title-and-price").html(summerHeading);
//             			$("#address").html(summerAddress);
//             			$("#text").html(summerText);
//             			$("#flyer").attr("src","images/layla-events-donna-summer.jpg");
//             		}

//             		if ($("#raks").data('clicked')) {
//             			$("#title-and-price").html(raqsHeading);
//             			$("#address").html(raqsAddress);
//             			$("#text").html(raqsText);
//             			$("#flyer").attr("src","images/layla-events-raq-cairo.jpg");
// 					}
            		

//        		});
 
// 		});
// 		}
  
//   })
// }


 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~the-boss.html~~~~~~~~~~~~~~~~~~~~~~~~~~~
 		function opacity() {
			var arr = [document.getElementById("background"), document.getElementById("rememberance"), document.getElementById("vid")];

			for(let a in arr){
				arr[a].style.opacity = 1;
			}

		}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~contact.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NON-FUNCTIONAL UNLESS INTERNAL. Please refer to page for code. 

	// var name = document.getElementById("name").value;
	// var email = document.getElementById("email");
	// var message = document.getElementById("message");
	// var anchor = document.getElementById("submission");

	// function popAlert() {
	// 	console.log(name);
	// 	if(!name) {
	// 		alert("Please enter your name");
	// 		anchor.href = "contact.html";
	// 	} else if (!email.value.includes("@")){
	// 		alert("Please enter a valid email address");
	// 		anchor.href = "contact.html";
	// 	} else if(message.value=="") {
			
	// 		alert("Please enter a message.");
	// 		anchor.href = "contact.html";
	// 	} else {
	// 		anchor.href = "submission.html";
	// 	}
		
	// }
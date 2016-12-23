"use strict";
let images = {
	"christmas_shopping_scarf": "img/christmas_shopping_scarf.jpg",
	"dorothy_first_dinner": "img/dorothy_first_dinner.jpg",
	"dorothy_selfie": "img/dorothy_selfie.jpg",
	"dorothy_selfie_dark_lips": "img/dorothy_selfie_dark_lips.jpg",
	"dorothy_selfie_kyle": "img/dorothy_selfie_kyle.jpg",
	"dorothy_selfie_makeup": "img/dorothy_selfie_makeup.jpg",
	"dorothy_selfie_no_makeup": "img/dorothy_selfie_no_makeup.jpg",
	"dorothy_selfie_rabbit": "img/dorothy_selfie_rabbit.jpg",
	"first_date": "img/first_date.jpg",
	"first_date_park": "img/first_date_park.jpg",
	"first_date_park_me": "img/first_date_park_me.jpg",
	"first_haircut_chico": "img/first_haircut_chico.jpg",
	"happy_on_couch": "img/happy_on_couch.jpg",
	"hug_stitch": "img/hug_stitch.jpg",
	"ikes": "img/ikes.jpg",
	"ikes_me": "img/ikes_me.jpg",
	"judy_hopps": "img/judy_hopps.jpg",
	"kevin_fro": "img/kevin_fro.jpg",
	"kyle_party_smile": "img/kyle_party_smile.jpg",
	"me_and_bigbear": "img/me_and_bigbear.jpg",
	"me_on_floor_at_rachels": "img/me_on_floor_at_rachels.jpg",
	"me_smiling_couch": "img/me_smiling_couch.jpg",
	"on_couch_faces": "img/on_couch_faces.jpg",
	"reno_going_home": "img/reno_going_home.jpg",
	"reno_mountain": "img/reno_mountain.jpg",
	"reno_snowboard_gear_car": "img/reno_snowboard_gear_car.jpg",
	"reno_trip": "img/reno_trip.jpg",
	"spicy_noodle": "img/spicy_noodle.jpg",
	"together_black_white": "img/together_black_white.jpg",
	"together_kiss_blackwhite": "img/together_kiss_blackwhite.jpg",
	"together_twin_tahoe": "img/together_twin_tahoe.jpg",
	"valley_fair": "img/valley_fair.jpg",
	"wedding_didi": "img/wedding_didi.jpg",
	"wedding_me": "img/wedding_me.jpg"
};


document.addEventListener("DOMContentLoaded", function() {
	let popcorn = Popcorn("#song");

	popcorn
		.volume(.2)
		.code({
		start: 3,
		end: 15,
		onStart: function () {
			$("#left")
				.attr("src", images["valley_fair"])
				.fadeIn(4000)
				.attr("class", "animated slideOutRight")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "8s");

			$("#middle")
				.attr("src", images["together_twin_tahoe"])
				.fadeIn(4000)
				.attr("class", "animated zoomOutDown")
				.css("-webkit-animation-duration", "1s")
				.css("-webkit-animation-delay", "8s");

			$("#right")
				.attr("src", images["christmas_shopping_scarf"])
				.fadeIn(4000)
				.attr("class", "animated slideOutLeft")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "8s");
		},
		onEnd: function () {
			$("#left").fadeOut(2000);
			$("#middle").fadeOut(2000);
			$("#right").fadeOut(2000);
		}
	}).code({//second
		start: 17,
		end: 25,
		onStart: function () {
			$("#right")
				.attr("src", images["dorothy_selfie_dark_lips"])
				.fadeIn(2000)
				.attr("class", "animated bounceInLeft")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "");

			$("#left")
				.attr("src", images["dorothy_selfie_no_makeup"])
				.fadeIn(2000)
				.attr("class", "animated bounceInRight")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "1s");

			$("#middle")
				.attr("src", images["dorothy_selfie_rabbit"])
				.fadeIn(2000)
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "4s");
		},
		onEnd: function() {
			$("#left").attr("class", "animated bounceOutLeft")
				.css("-webkit-animation-duration", "1s")
				.css("-webkit-animation-delay", "")
				.fadeOut(900);
			$("#right").attr("class", "animated bounceOutRight")
				.css("-webkit-animation-duration", "1s")
				.css("-webkit-animation-delay", "")
				.fadeOut(900);
			$("#middle").attr("class", "animated bounceOutDown")
				.css("-webkit-animation-duration", "1s")
				.css("-webkit-animation-delay", "")
				.fadeOut(900);
		}
	}).code({//third
		start: 26,
		end: 33,
		onStart: function () {
			$("#center").fadeIn(2000).attr("src", images["dorothy_selfie"])
				.attr("class", "animated rotateIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.css("width", "35%")
				.css("height", "35%");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated rotateOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//fourth
		start: 35,
		end: 49,
		onStart: function () {
			$("#left")
				.attr("class", "animated rollIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "4s")
				.attr("src", images["ikes_me"])
				.fadeIn(4000);
			$("#right")
				.attr("class", "animated rollIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.attr("src", images["ikes"])
				.fadeIn(4000);

			$("#middle")
				.attr("class", "animated rollIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "7s")
				.attr("src", images["judy_hopps"])
				.fadeIn(4000);
		},
		onEnd: function () {
			$("#left")
				.attr("class", "animated rollOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(1900);

			$("#right")
				.attr("class", "animated rollOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(1900);

			$("#middle")
				.attr("class", "animated rollOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.css("width", "")
				.css("height", "")
				.fadeOut(1900);
		}
	}).code({//fifth
		start: 51,
		end: 64,
		onStart: function () {
			$("#center")
				.attr("src", images["happy_on_couch"])
				.fadeIn(2000)
				.attr("class", "animated zoomIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.delay(2000).queue(function(next) {
					$(this).attr("class", "animated pulse")
					.css("-webkit-animation-duration", "8s");
					next();
				});
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated zoomOut")
				.css("-webkit-animation-duration", "5s")
				.css("-webkit-animation-delay", "")
				.fadeOut(5000);
		}
	}).code({//sixth
		start: 67,
		end: 82,
		onStart: function () {
			$("#center")
				.attr("src", images["dorothy_first_dinner"])
				.attr("class", "animated zoomInUp")
				.css("width", "40%")
				.css("height", "40%")
				.fadeIn(1000)
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "");
			$("#left")
				.attr("src", images["me_smiling_couch"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated zoomInRight")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "6s");
			$("#right")
				.attr("src", images["kevin_fro"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated zoomInRight")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "6s");
			$("#middle")
				.attr("src", images["me_on_floor_at_rachels"])
				.css("width", "40%")
				.css("height", "40%")
				.fadeIn(2000)
				.attr("class", "animated zoomInDown")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "6s");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#left")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#middle")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//seventh
		start: 86,
		end: 102,
		onStart: function () {
			$("#middle")
				.attr("src", images["dorothy_selfie_makeup"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated fadeInUpBig")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "");
			$("#left")
				.attr("src", images["spicy_noodle"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated fadeInRightBig")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "6s");
			$("#right")
				.attr("src", images["on_couch_faces"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated fadeInLeftBig")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "6s");

		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated fadeOutDown")
				.css("-webkit-animation-duration", "5s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#left")
				.attr("class", "animated fadeOutLeft")
				.css("-webkit-animation-duration", "5s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated fadeOutRight")
				.css("-webkit-animation-duration", "5s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//eighth
		start: 104,
		end: 120,
		onStart: function () {
			$("#middle")
				.fadeIn(2000)
				.attr("src", images["first_date"])
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "9s");
			$("#left")
				.fadeIn(2000)
				.attr("src", images["first_date_park"])
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
			$("#right")
				.fadeIn(2000)
				.attr("src", images["first_date_park_me"])
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "5s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated hinge")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#left")
				.attr("class", "animated hinge")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated hinge")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//ninth
		start: 122,
		end: 136,
		onStart: function () {
			$("#middle")
				.attr("src", images["reno_snowboard_gear_car"])
				.fadeIn(2000)
				.attr("class", "animated flipInY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "8s");
			$("#left")
				.attr("src", images["reno_trip"])
				.fadeIn(2000)
				.attr("class", "animated flipInY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
			$("#right")
				.attr("src", images["reno_mountain"])
				.fadeIn(2000)
				.attr("class", "animated flipInY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "4s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated flipOutY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#left")
				.attr("class", "animated flipOutY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated flipOutY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//tenth
		start: 138,
		end: 153,
		onStart: function () {
			$("#middle")
				.attr("src", images["kyle_party_smile"])
				.fadeIn(2000)
				.attr("class", "animated fadeInUp")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("src", images["wedding_didi"])
				.fadeIn(2000)
				.attr("class", "animated lightSpeedIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "6s");
			$("#right")
				.attr("src", images["wedding_me"])
				.fadeIn(2000)
				.attr("class", "animated lightSpeedIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "6s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated lightSpeedOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#left")
				.attr("class", "animated lightSpeedOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated lightSpeedOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//eleventh
		start: 157,
		end: 172,
		onStart: function () {
			$("#middle")
				.attr("src", images["reno_going_home"])
				.fadeIn(2000)
				.attr("class", "animated rotateIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
			$("#left")
				.attr("src", images["me_and_bigbear"])
				.fadeIn(2000)
				.attr("class", "animated rotateInUpLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "5s");
			$("#right")
				.attr("src", images["hug_stitch"])
				.fadeIn(2000)
				.attr("class", "animated rotateInUpRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "9s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated rotateOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#left")
				.attr("class", "animated rotateOutUpLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated rotateOutUpRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//twelfth
		start: 174,
		end: 180,
		onStart: function () {
			$("#left")
				.attr("src", images["first_haircut_chico"])
				.fadeIn(2000)
				.attr("class", "animated rotateInUpLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
			$("#right")
				.attr("src", images["dorothy_selfie_kyle"])
				.fadeIn(2000)
				.attr("class", "animated rotateInUpRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
		},
		onEnd: function () {
			$("#left")
				.attr("class", "animated slideOutRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
			$("#right")
				.attr("class", "animated slideOutLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//thirteenth
		start: 182,
		end: 190,
		onStart: function () {
			$("#center")
				.attr("src", images["together_black_white"])
				.fadeIn(2000)
				.attr("class", "animated zoomIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated zoomOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeOut(2000);
		}
	}).code({//end
		start: 192,
		end: 205,
		onStart: function () {
			$("#center")
				.attr("src", images["together_kiss_blackwhite"])
				.fadeIn(2000)
				.attr("class", "animated zoomIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "");
		},
		onEnd: function () {}
	}).code({
		start: 207,
		end: 212,
		onStart: function () {
			$("#footnote")
				.fadeIn(2000)
				.html("I Love You Dorothy Doan")
				.attr("class", "text-center animated tada")
				.css("-webkit-animation-duration", "3s");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated zoomOut")
				.css("-webkit-animation-duration", "5s")
				.css("-webkit-animation-delay", "")
				.fadeOut(5000);

			$("#footnote")
				.fadeOut(5000)
				.html("")
				.attr("class", "text-center")
		}
	});
}, false);

$(function () {
	$("#left").hide();
	$("#middle").hide();
	$("#right").hide();
	$("#center").hide();
	$("#footnote").hide();
	$("#wrap").addClass("wrap");

	$("#start-button").addClass("animated bounce infinite").on("click", function () {
		$("#song").attr("src", "songs/bruno_mars-just_the_way_you_are.mp3");
		document.getElementById("song").play();
		$(this).fadeOut(1000).delay(216000).fadeIn();
	});//end onclick start-button

});//end document.ready

/*
	18
 Oh, her eyes, her eyes make the stars look like they're not shining
	22
 Her hair, her hair falls perfectly without her trying
	27
 She's so beautiful
	29
 And I tell her everyday.


	34
 Yeah, I know, I know when I compliment her, she won't believe me
	40
 And it's so, it's so sad to think that she doesn't see what I see
	45
 But every time she ask me do I look okay?
	48
 I say

	51
 When I see your face
 	56
 There's not a thing that I would change
  	61 1:01
 'Cause you're amazing
 	1:03
 Just the way you are

	1:09
 And when you smile
	1:13
 The whole world stops and stares for a while
 	1:18
 'Cause girl, you're amazing
	1:21
 Just the way you are

	1:28
 Her lips, her lips, I could kiss them all day if she'd let me
	1:33
 Her laugh her laugh, she hates but I think it's so sexy
	1:37
 She's so beautiful
	1:41
 And I tell her everyday


	1:45
 Oh, you know, you know, you know I'd never ask you to change
 	1:50
 If perfect's what you're searching for, then just stay the same
 	1:54
 So don't even bother asking if you look okay
	1:58
 You know I'll say

	2:02
 When I see your face
 	2:07
 There's not a thing that I would change
	2:11
 'Cause you're amazing
	2:14
 Just the way you are


	2:20
 And when you smile
 	2:24
 The whole world stops and stares for a while
 	2:29
 'Cause girl, you're amazing
 	2:32
 Just the way you are

	2:37
 The way you are
 	2:41
 The way you are
 	2:46
 Girl, you're amazing
 	2:49
 Just the way you are

	2:55
 When I see your face
 	3:00
 There's not a thing that I would change
 	3:04
 'Cause you're amazing
 	3:07
 Just the way you are

	3:13
 And when you smile
 	3:17
 The whole world stops and stares for a while
 	3:21
 'Cause girl, you're amazing
 	3:25
 Just the way you are.
 	3:31
 Yeah

 */
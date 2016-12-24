"use strict";
let images = {
	"christmas_shopping_scarf": "img/christmas-shopping-scarf.jpg",
	"dorothy_first_dinner": "img/dorothy-first-dinner.jpg",
	"dorothy_selfie": "img/dorothy-selfie.jpg",
	"dorothy_selfie_dark_lips": "img/dorothy-selfie-dark-lips.jpg",
	"dorothy_selfie_kyle": "img/dorothy-selfie-kyle.jpg",
	"dorothy_selfie_makeup": "img/dorothy-selfie-makeup.jpg",
	"dorothy_selfie_no_makeup": "img/dorothy-selfie-no-makeup.jpg",
	"dorothy_selfie_rabbit": "img/dorothy-selfie-rabbit.jpg",
	"first_date": "img/first-date.jpg",
	"first_date_park": "img/first-date-park.jpg",
	"first_date_park_me": "img/first-date-park-me.jpg",
	"first_haircut_chico": "img/first-haircut-chico.jpg",
	"happy_on_couch": "img/happy-on-couch.jpg",
	"hug_stitch": "img/hug-stitch.jpg",
	"ikes": "img/ikes.jpg",
	"ikes_me": "img/ikes-me.jpg",
	"judy_hopps": "img/judy-hopps.jpg",
	"kevin_fro": "img/kevin-fro.jpg",
	"kyle_party_smile": "img/kyle-party-smile.jpg",
	"me_and_bigbear": "img/me-and-bigbear.jpg",
	"me_on_floor_at_rachels": "img/me-on-floor-at-rachels.jpg",
	"me_smiling_couch": "img/me-smiling-couch.jpg",
	"on_couch_faces": "img/on-couch-faces.jpg",
	"reno_going_home": "img/reno-going-home.jpg",
	"reno_mountain": "img/reno-mountain.jpg",
	"reno_snowboard_gear_car": "img/reno-snowboard-gear-car.jpg",
	"reno_trip": "img/reno-trip.jpg",
	"spicy_noodle": "img/spicy-noodle.jpg",
	"together_black_white": "img/together-black-white.jpg",
	"together_kiss_blackwhite": "img/together-kiss-blackwhite.jpg",
	"together_twin_tahoe": "img/together-twin-tahoe.jpg",
	"valley_fair": "img/valley-fair.jpg",
	"wedding_didi": "img/wedding-didi.jpg",
	"wedding_me": "img/wedding-me.jpg"
};


document.addEventListener("DOMContentLoaded", function() {
	let popcorn = Popcorn("#song");

	popcorn
		.volume(.5)
		.code({
		start: 3,
		end: 14,
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
		start: 16,
		end: 23,
		onStart: function () {
			$("#right")
				.attr("src", images["dorothy_selfie_dark_lips"])
				.fadeIn(2000)
				.attr("class", "animated bounceInLeft")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "1s");

			$("#left")
				.attr("src", images["dorothy_selfie_no_makeup"])
				.fadeIn(2000)
				.attr("class", "animated bounceInRight")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "2s");

			$("#middle")
				.attr("src", images["dorothy_selfie_rabbit"])
				.fadeIn(2000)
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "5s");
		},
		onEnd: function() {
			$("#left").attr("class", "animated fadeOutLeft")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
			$("#right").attr("class", "animated fadeOutRight")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
			$("#middle").attr("class", "animated fadeOutDown")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//third
		start: 25,
		end: 31,
		onStart: function () {
			$("#left").fadeOut().attr("src", "");
			$("#right").fadeOut().attr("src", "");
			$("#middle").fadeOut().attr("src", "");
			$("#center").fadeIn(2000)
				.attr("src", images["dorothy_selfie"])
				.attr("class", "animated rotateIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.css("width", "35%")
				.css("height", "35%");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated rotateOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(2000);
		}
	}).code({//fourth
		start: 34,
		end: 47,
		onStart: function () {
			$("#left")
				.attr("src", images["ikes_me"])
				.attr("class", "animated rollIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeIn(4000).delay(5000).queue(function (next) {
					$(this).attr("class", "animated swing")
						.css("-webkit-animation-duration", "")
						.css("-webkit-animation-delay", "1s");
					next();
				});
			$("#right")
				.attr("src", images["ikes"])
				.attr("class", "animated rollIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "")
				.fadeIn(4000).delay(5000).queue(function (next) {
				$(this).attr("class", "animated bounce infinite")
					.css("-webkit-animation-duration", "")
					.css("-webkit-animation-delay", "2s");
				next();
			});

			$("#middle")
				.attr("src", images["judy_hopps"])
				.attr("class", "animated rollIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "5s")
				.fadeIn(4000).delay(5000).queue(function (next) {
				$(this).attr("class", "animated bounce infinite")
					.css("-webkit-animation-duration", "")
					.css("-webkit-animation-delay", "2s");
				next();
			});
		},
		onEnd: function () {
			$("#left")
				.attr("class", "animated rollOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(2900);

			$("#right")
				.attr("class", "animated rollOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(2900).queue(function (next) {
					$(this).attr("src", "");
					next();
				});

			$("#middle")
				.attr("class", "animated rollOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.css("width", "")
				.css("height", "")
				.fadeOut(2900);
		}
	}).code({//fifth
		start: 50,
		end: 63,
		onStart: function () {
			$("#center")
				.attr("src", images["happy_on_couch"])
				.fadeIn(2000)
				.attr("class", "animated zoomIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.delay(2000).queue(function(next) {
					$(this).attr("class", "animated pulse")
					.css("-webkit-animation-duration", "8s");
					next();
				});
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated zoomOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(3000);
		}
	}).code({//sixth
		start: 66,
		end: 81,
		onStart: function () {
			$("#center")
				.attr("src", images["dorothy_first_dinner"])
				.attr("class", "animated zoomInUp")
				.css("width", "40%")
				.css("height", "40%")
				.fadeIn(1000)
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("src", images["me_smiling_couch"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated zoomInRight")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "7s");
			$("#right")
				.attr("src", images["kevin_fro"])
				.css("width", "")
				.css("height", "")
				.fadeIn(2000)
				.attr("class", "animated zoomInRight")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "7s");
			$("#middle")
				.attr("src", images["me_on_floor_at_rachels"])
				.css("width", "40%")
				.css("height", "40%")
				.fadeIn(2000)
				.attr("class", "animated zoomInDown")
				.css("-webkit-animation-duration", "4s")
				.css("-webkit-animation-delay", "7s");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(3000);
			$("#left")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#middle")
				.attr("class", "animated flipOutX")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//seventh
		start: 85,
		end: 100,
		onStart: function () {
			$("#middle")
				.attr("src", images["dorothy_selfie_makeup"])
				.css("width", "")
				.css("height", "")
				.attr("class", "animated fadeInUp")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "2s");
			$("#left")
				.attr("src", images["spicy_noodle"])
				.css("width", "")
				.css("height", "")
				.attr("class", "animated fadeInRight")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "7s");
			$("#right")
				.attr("src", images["on_couch_faces"])
				.css("width", "")
				.css("height", "")
				.attr("class", "animated fadeInLeft")
				.css("-webkit-animation-duration", "6s")
				.css("-webkit-animation-delay", "7s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated fadeOutDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("class", "animated fadeOutRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.delay(2500).queue(function (next) {
					$(this).attr("src", "");
					next();
				});
			$("#right")
				.attr("class", "animated fadeOutLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//eighth
		start: 103,
		end: 119,
		onStart: function () {
			$("#middle")
				.attr("src", images["first_date"])
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "10s");
			$("#left")
				.attr("src", images["first_date_park"])
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("src", images["first_date_park_me"])
				.attr("class", "animated bounceInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "6s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated hinge fadeOut")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("class", "animated hinge fadeOut")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("class", "animated hinge fadeOut")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//ninth
		start: 121,
		end: 135,
		onStart: function () {
			$("#middle")
				.attr("src", images["reno_snowboard_gear_car"])
				.attr("class", "animated flipInY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "9s");
			$("#left")
				.attr("src", images["reno_trip"])
				.attr("class", "animated flipInY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("src", images["reno_mountain"])
				.attr("class", "animated flipInY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "5s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated flipOutY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("class", "animated flipOutY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("class", "animated flipOutY")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//tenth
		start: 138,
		end: 152,
		onStart: function () {
			$("#middle")
				.attr("src", images["kyle_party_smile"])
				.attr("class", "animated fadeInUp")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("src", images["wedding_didi"])
				.attr("class", "animated fadeInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "6s");
			$("#right")
				.attr("src", images["wedding_me"])
				.attr("class", "animated fadeInDown")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "6s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated fadeOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("class", "animated fadeOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("class", "animated fadeOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//eleventh
		start: 156,
		end: 170,
		onStart: function () {
			$("#middle")
				.attr("src", images["reno_going_home"])
				.attr("class", "animated rotateIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("src", images["me_and_bigbear"])
				.attr("class", "animated rotateInUpLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "10s");
			$("#right")
				.attr("src", images["hug_stitch"])
				.attr("class", "animated rotateInUpRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "6s");
		},
		onEnd: function () {
			$("#middle")
				.attr("class", "animated rotateOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#left")
				.attr("class", "animated rotateOutUpLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("class", "animated rotateOutUpRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//twelfth
		start: 173,
		end: 179,
		onStart: function () {
			$("#left")
				.attr("src", images["dorothy_selfie_kyle"])
				.attr("class", "animated rotateInUpLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
			$("#right")
				.attr("src", images["first_haircut_chico"])
				.attr("class", "animated rotateInUpRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		},
		onEnd: function () {
			$("#left")
				.attr("class", "animated slideOutRight")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(3000);
			$("#right")
				.attr("class", "animated slideOutLeft")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(3000);
		}
	}).code({//thirteenth
		start: 182,
		end: 189,
		onStart: function () {
			$("#middle").hide();
			$("#center")
				.attr("src", images["together_black_white"])
				.fadeIn(2000)
				.attr("class", "animated zoomIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated zoomOut")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		}
	}).code({//end
		start: 191,
		end: 205,
		onStart: function () {
			$("#center")
				.attr("src", images["together_kiss_blackwhite"])
				.attr("class", "animated zoomIn")
				.css("-webkit-animation-duration", "2s")
				.css("-webkit-animation-delay", "1s");
		},
		onEnd: function () {}
	}).code({
		start: 206,
		end: 211,
		onStart: function () {
			$("#footnote")
				.fadeIn(2000)
				.html("I Love You Dorothy Doan")
				.attr("class", "text-center animated tada")
				.css("-webkit-animation-duration", "3s")
				.css("-webkit-animation-delay", "1s");
		},
		onEnd: function () {
			$("#center")
				.attr("class", "animated zoomOut")
				.css("-webkit-animation-duration", "5s")
				.css("-webkit-animation-delay", "1s")
				.fadeOut(6000);
			$("#footnote")
				.fadeOut(6000)
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
		$("#start-button-song").fadeOut(1000).delay(215000).fadeIn();
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
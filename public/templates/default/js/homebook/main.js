$(window).on("load", function () {
	$(".designerNames a").click(function (w) {
        w.preventDefault();
        w.stopPropagation();
        var clickedDesignerLink = this;
        $("#introScene").fadeOut(function () {

          $("#circleScene").fadeIn(function () {
            var clickedDesignerName = parseInt($(clickedDesignerLink).data("idx"));
            $("svg .bigCircle").eq(clickedDesignerName).click();
          });
        });

      });

	generateCircles();

	


	// CIRCLES 
	$("svg .bigCircle").click(function (e) {
		e.preventDefault();
		e.stopPropagation();

		if ($(this).attr("class").indexOf("active") >= 0){
			return;
		}

		var direction = $("svg .bigCircle.active").index() < $(this).index() ? 1 : -1;

		var timeoutVar = 0;
		if (direction > 0) {
			timeoutStep = 600 / ($(this).index() - $("svg .bigCircle.active").index());
			for (var idx = $("svg .bigCircle.active").index(); idx < $(this).index(); idx++) {
				if(idx == -1)
					continue;
				var element = $("svg circle").eq(idx);

				setTimeout(function (element2) {
					if ($(element2).attr("class").indexOf("bigCircle") < 0)
						$(element2).attr("class", "littleCircle active");
				}, timeoutVar, element);
				timeoutVar += timeoutStep;
			}
		} else {
			timeoutStep = 600 / ($("svg .bigCircle.active").index() - $(this).index());
			for (var idx = $("svg .bigCircle.active").index(); idx >= $(this).index(); idx--) {
				var element = $("svg circle").eq(idx);
				setTimeout(function (element2) {
					if ($(element2).attr("class").indexOf("bigCircle") < 0)
						$(element2).attr("class", "littleCircle");
				}, timeoutVar, element);
				timeoutVar += timeoutStep;
			}
		}


		$("svg .bigCircle").each(function(idx, element){
			if ($(element).attr("class").indexOf("visited") >= 0){
				$(this).attr("class", "bigCircle visited");
			} else{
				$(this).attr("class", "bigCircle");
			}
		});
		$(this).attr("class", "bigCircle active visited");

		var activeDesignerExceptIndex = $("svg .bigCircle").index(this) - 1;
		designerExceptAnimation(activeDesignerExceptIndex);

	});

	$(".arrow.bounce a").click(function (e) {
		e.preventDefault();
			$("section, div").stop().fadeOut(500);
			setTimeout(function () {
				location.href = $('.designerExcept.active').data('href');
			}, 500);
	});

	// 
	$("#circleScene").mousewheel(function (event) {
		var timing = 1000;
		if (event.deltaY < 0) {
			$("section, div").fadeOut(timing);
			setTimeout(function () {
				location.href = $('.designerExcept.active').data('href');
			}, timing);
		}
	});
});


// 
function designerExceptAnimation(index) {
	// $(".designerExcept").addClass("dNone");
	if (index == -1) {
		$(".designerPortraits .designerCanvas").fadeOut(function(){
			$(".designerPortraits .designerCanvas").addClass("dNone");
		});
		$("#circleScene").fadeOut(function () {
			$("#introScene").fadeIn(function () {
			});
		});
		return;
	}

	var activeDesignerExcept = $(".designerExcept.active");
	var activeDesignerExceptIdx = $(".designerExcept").index(activeDesignerExcept);
	if(activeDesignerExceptIdx != -1){
		var activeDesignerImage = $(".designerPortraits .designerCanvas").eq(activeDesignerExceptIdx);
		$(activeDesignerImage).animate({ marginRight: -100, opacity: 0 }, function(){
			$(activeDesignerImage).addClass("dNone");
		});

		$(activeDesignerExcept).find("h1").delay(100).animate({ opacity: 0 });
		$(activeDesignerExcept).find("figure.dtitle").delay(200).animate({ opacity: 0 });
		$(activeDesignerExcept).find("p").delay(300).animate({ opacity: 0 });
		$(activeDesignerExcept).find("div.arrow.bounce").delay(300).animate({ opacity: 0 });
		$(activeDesignerExcept).removeClass("active");
	}
	

	var targetDesignerExcept = $(".designerExcept").eq(index);
	var targetDesignerImage = $(".designerPortraits .designerCanvas").eq(index);

	setTimeout(function () {

		$(targetDesignerExcept).removeClass("dNone");
		$(targetDesignerImage).removeAttr("style");
		$(targetDesignerImage).removeClass("dNone");

		$(targetDesignerImage).css({
			marginRight: -100, opacity: 0
		}).animate({
			marginRight: 0, opacity: 1
		});

		$(targetDesignerExcept).find("h1").css({ opacity: 0 }).delay(100).animate({ opacity: 1 });
		$(targetDesignerExcept).find("figure.dtitle").css({ opacity: 0 }).delay(200).animate({ opacity: 1 });
		$(targetDesignerExcept).find("p").css({ opacity: 0 }).delay(300).animate({ opacity: 1 });
		$(targetDesignerExcept).find("div.arrow.bounce").css({ opacity: 0 }).delay(300).animate({ opacity: 1 });
		$(targetDesignerExcept).addClass("active");

	}, 300);


}


function sinDegrees(angle) { return Math.sin(angle / 180 * Math.PI); };
function cosDegrees(angle) { return Math.cos(angle / 180 * Math.PI); };

function generateCircles() {
	radius1 = window.innerHeight * 0.41;
	$('.designerExcept').width(radius1 * 2 - 200);
	$('.bigCircleContainer').width(radius1 * 2);
	$('.bigCircleContainer').height(radius1 * 2);
	if ($('#drawing svg').length == 0) {
		$.draw = SVG('drawing').size(radius1 * 2, radius1 * 2);
		var idx = 0;
		for (var deg = 90; deg <= 324; deg += 6) {
			var cx = Math.round(radius1 * cosDegrees(deg)) + radius1;
			var cy = Math.round(radius1 * sinDegrees(deg)) + radius1;
			if (idx % 5 == 0)
				$.draw.circle(7, 7).move(cx, cy).addClass("bigCircle");
			else
				$.draw.circle(7, 7).move(cx, cy).addClass("littleCircle");
			idx++;
		}

		$('svg .bigCircle').mouseenter(function () {
			var y = parseInt($(this).attr('cy'));
			var x = parseInt($(this).attr('cx'));
			var idx = $('svg .bigCircle').index(this);

			

			var span = document.createElement('span');
			span.innerHTML = $('.designerExcept').eq(idx - 1).find('h1').text();
			if(idx == 0)
				span.innerHTML = "INTRO";
			$(this).parent().parent().append(span);
			$(span).css({ display: 'block', opacity: 0, fontSize: '1.4rem', color: '#fff', fontWeight: 'bold' });
			$(span).css({ position: 'absolute', left: x, top: y });
			
			var width = $(span).width();
			var height = $(span).height();

			switch(idx){
				case 0: $(span).css({ marginLeft: 20, marginTop: -20 }); break;
				case 1: $(span).css({ marginLeft: 20, marginTop: -20 }); break;
				case 2: $(span).css({ marginLeft: -width - 30, marginTop: -10 }); break;
				case 3: $(span).css({ marginLeft: -width - 30, marginTop: -10 }); break;
				case 4: $(span).css({ marginLeft: -width - 30, marginTop: -10 }); break;
				case 5: $(span).css({ marginLeft: -width - 30, marginTop: -10 }); break;
				case 6: $(span).css({ marginLeft: -width / 2, marginTop: -40 }); break;
				case 7: $(span).css({ marginLeft: -width / 2 + 50, marginTop: -50 }); break;
			}

			$(span).animate({ opacity: 1 });
			$(this).data('span', span);
		});

		$('svg .bigCircle').mouseleave(function () {
			var data = $(this).data('span');
			if(data == null)
				return;
			$(data).remove();
		});



	} else {
		console.log($.draw);
		$.draw.size(radius1 * 2, radius1 * 2);
		var idx = 0;
		for (var deg = 90; deg <= 324; deg += 6) {
			var cx = Math.round(radius1 * cosDegrees(deg)) + radius1;
			var cy = Math.round(radius1 * sinDegrees(deg)) + radius1;

			$('svg circle').eq(idx)[0].instance.move(cx, cy);

			idx++;
		}
	}

}

$(window).resize(function (e) {
	generateCircles();
});

$(window).on("load", function() {
	if($.cookie('cuki') != 'true' ) {
		$.cookie('cuki', 'true' , 10);
		$(".introHomeBookOverlay").css({display:'block'});
		setTimeout(function(){
			$(".introHomeBookOverlay").fadeOut();
		}, 6000);
					
	}
});




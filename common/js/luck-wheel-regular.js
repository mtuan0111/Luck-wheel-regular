$(document).ready(function() {
    var points_array = [1, 30, 5, 20, 1, 5, 50, 1, 20, 200];

    var random_rotate = getRandomIntInclusive(0, 360);
    var point_peace = 0;
    var random_pointer;
    var elem_outside = $("#circle-outside");
    var action_done = false;
    // function wheel_action_outside(point_value) {
    function wheel_action_outside() {

        // var elem = $("#rotate-wheel").stop(true,false).removeClass("auto-wheel");
        var current_deg = get_current_rotate("circle-outside");
        elem_outside.removeClass("auto-wheel-clock");

        // $(document).off('click',"#rotate-wheel");

        //- setting variable


        // console.log(point_peace + " " + (points_array.length - 1));
        // while(point_value !== points_array[point_peace]){
        //   //- console.log(point_value);
        //   point_peace = getRandomIntInclusive(0, points_array.length);
        // }
        // //- console.log(point_peace);
        var loop = getRandomIntInclusive(6, 10);
        random_pointer = getRandomIntInclusive(-16, 16);
        rotate_duration = loop * getRandomIntInclusive(1500, 2000);
        // var deg_rotate = -(loop * 360 + (point_peace) * 36) + random_pointer;
        var deg_rotate = (loop * 360 - (0) * 36) + random_pointer + random_rotate;

        console.log(point_peace);

        // $(window).bind('beforeunload', function(e){
        //   if(out)
        //       {return "Do you really want to leave this page now?"}
        // });

        //- Ending setting variable

        $({
            deg: current_deg
        }).animate({
            deg: deg_rotate
        }, {
            duration: rotate_duration,
            easing: "easeOutCirc",
            specialEasing: "easeOutCirc",
            step: function(now) {
                elem_outside.css({
                    '-webkit-transform': "rotate(" + now + "deg)",
                    '-moz-transform': "rotate(" + now + "deg)",
                    '-ms-transform': "rotate(" + now + "deg)",
                    '-o-transform': "rotate(" + now + "deg)",
                    'transform': "rotate(" + now + "deg)"
                });
                // object.style.transform="rotate(" + now + "deg)"
            },
            done: function() {
                // $(document).on('click', "#rotate-wheel", function() {
                //     wheel_action_outside(200);
                // });
                //- console.log(point_peace);
                // $(".point-result").attr("data-score", points_array[point_peace]);
                //- console.log(get_current_rotate("rotate-wheel"));


                current_deg = get_current_rotate("circle-outside");

                if (action_done) {
                    repointer();
                } else {
                    action_done = true;
                }

            },
        });
    }

    var elem_inside = $("#circle-pointer");

    function wheel_action_inside() {

        // var elem = $("#rotate-wheel").stop(true,false).removeClass("auto-wheel");
        var current_deg = get_current_rotate("circle-pointer");
        elem_inside.removeClass("auto-wheel-clock-rv");
        // $(document).off('click',"#rotate-wheel");

        //- setting variable
        // var point_peace = 0;
        // point_peace = getRandomIntInclusive(0, points_array.length - 1);
        // console.log(point_peace + " " + (points_array.length - 1));
        // while(point_value !== points_array[point_peace]){
        //   //- console.log(point_value);
        //   point_peace = getRandomIntInclusive(0, points_array.length);
        // }
        // //- console.log(point_peace);
        var loop = getRandomIntInclusive(2, 3);
        // var random_pointer = getRandomIntInclusive(-16,16);
        var rotate_duration = loop * getRandomIntInclusive(2500, 3500);
        // var deg_rotate = -(loop * 360 + (point_peace) * 36) + random_pointer + random_rotate;
        // var deg_rotate = -(loop * 360 + (point_peace) * 36) + random_rotate - 135;
        var deg_rotate = -135 - ((loop * 360) - (point_peace * 36)) + random_rotate;

        console.log(point_peace);

        // $(window).bind('beforeunload', function(e){
        //   if(out)
        //       {return "Do you really want to leave this page now?"}
        // });

        //- Ending setting variable

        $({
            deg: current_deg
        }).animate({
            deg: deg_rotate
        }, {
            duration: rotate_duration * 2,
            easing: "easeInOutCubic",
            specialEasing: "easeInOutCubic",
            step: function(now) {
                elem_inside.css({
                    '-webkit-transform': "rotate(" + now + "deg)",
                    '-moz-transform': "rotate(" + now + "deg)",
                    '-ms-transform': "rotate(" + now + "deg)",
                    '-o-transform': "rotate(" + now + "deg)",
                    'transform': "rotate(" + now + "deg)"
                });
                // object.style.transform="rotate(" + now + "deg)"
            },
            done: function() {
                // $(document).on('click', "#rotate-wheel", function() {
                //     wheel_action_inside(200);
                // });
                //- console.log(point_peace);
                // $(".point-result").attr("data-score", points_array[point_peace]);
                //- console.log(get_current_rotate("rotate-wheel"));
                // $(".score-pointer li.selected:not(:nth-child(" + (point_peace + 1) + "))").removeClass("selected");
                // $(".score-pointer li:nth-child(" + (point_peace + 1) + ")").addClass("selected");

                console.log(action_done);


                if (action_done) {
                    repointer();
                } else {
                    action_done = true;
                }
            },
        });
    }

    function repointer() {
        current_deg = get_current_rotate("circle-pointer");
        $({
            deg: current_deg
        }).animate({
            deg: current_deg + random_pointer/2
        }, {
            duration: 1000,
            easing: "easeInOutCubic",
            specialEasing: "easeInOutCubic",
            step: function(now) {
                elem_inside.css({
                    '-webkit-transform': "rotate(" + now + "deg)",
                    '-moz-transform': "rotate(" + now + "deg)",
                    '-ms-transform': "rotate(" + now + "deg)",
                    '-o-transform': "rotate(" + now + "deg)",
                    'transform': "rotate(" + now + "deg)"
                });
                console.log(123);
                // object.style.transform="rotate(" + now + "deg)"
            },
        })

        current_deg = get_current_rotate("circle-outside");
        $({
            deg: current_deg
        }).animate({
            deg: current_deg - random_pointer/2
        }, {
            duration: 1000,
            easing: "easeInOutCubic",
            specialEasing: "easeInOutCubic",
            step: function(now) {
                elem_outside.css({
                    '-webkit-transform': "rotate(" + now + "deg)",
                    '-moz-transform': "rotate(" + now + "deg)",
                    '-ms-transform': "rotate(" + now + "deg)",
                    '-o-transform': "rotate(" + now + "deg)",
                    'transform': "rotate(" + now + "deg)"
                });
                // object.style.transform="rotate(" + now + "deg)"
            },
            done: function(){
                $(".score-pointer li.selected:not(:nth-child(" + (point_peace + 1) + "))").removeClass("selected");
                $(".score-pointer li:nth-child(" + (point_peace + 1) + ")").addClass("selected");
            }
        })
    }

    function get_current_rotate(id) {
        var el = document.getElementById(id);
        var st = window.getComputedStyle(el, null);
        var tr = st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "FAIL";

        // With rotate(30deg)...
        // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
        //- console.log('Matrix: ' + tr);

        // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
        if (tr !== "none") {
            var values = tr.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var c = values[2];
            var d = values[3];

            var scale = Math.sqrt(a * a + b * b);

            //- console.log('Scale: ' + scale);

            // arc sin, convert from radians to degrees, round
            var sin = b / scale;
            // next line works for 30deg but not 130deg (returns 50);
            // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

            //- console.log('Rotate: ' + angle + 'deg');
            return angle;
        } else
            return 0;
    };

    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function load_score() {
        for (i = 0; i < points_array.length; i++) {
            (function(i) {

                var point_value = document.createElement("li"); // Create with DOM
                point_value.setAttribute("data-point-value", points_array[i]);
                point_value.innerHTML = points_array[i];
                $("ul.score-pointer").append(point_value).attr("data-point-value", points_array[i]);
                // alert(points_array[i]);
            }(i));
            // total_delay = 100 * i + delay_time;
        }
    };
    load_score();

    $(document).on("click", "#circle-outside", function() {
        // console.log(get_current_rotate("circle-outside"));
        point_peace = getRandomIntInclusive(0, points_array.length - 1);
        action_done = false;
        setTimeout(function() {
            wheel_action_outside();
            wheel_action_inside();

        }, 100)
    });
})
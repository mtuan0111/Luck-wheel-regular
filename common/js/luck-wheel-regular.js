$(document).ready(function(){
    var points_array = [1,30,5,20,1,5,50,1,20,200];
    function wheel_action(point_value){
        var elem_outside = $("#circle-outside").removeClass("auto-wheel-clock");

        // var elem = $("#rotate-wheel").stop(true,false).removeClass("auto-wheel");
        // var current_deg = get_current_rotate("rotate-wheel");
        // $(document).off('click',"#rotate-wheel");

        // //- setting variable
        // var point_peace = 0;
        // point_peace = getRandomIntInclusive(0, points_array.length);
        // while(point_value !== points_array[point_peace]){
        //   //- console.log(point_value);
        //   point_peace = getRandomIntInclusive(0, points_array.length);
        // }
        // //- console.log(point_peace);
        // var loop = getRandomIntInclusive(4, 6);
        // var random_pointer = getRandomIntInclusive(-16,16);
        // var rotate_duration = getRandomIntInclusive(10000, 12000);
        // var deg_rotate = -(loop * 360 + (point_peace) * 36) + random_pointer;

        // $(window).bind('beforeunload', function(e){
        //   if(out)
        //       {return "Do you really want to leave this page now?"}
        // });

       //- Ending setting variable

        $({deg: current_deg}).animate({deg: deg_rotate}, {
            duration: rotate_duration,
            easing: "easeOutQuart",
            specialEasing: "easeOutQuart",
            step: function(now){
                elem.css({
                    '-webkit-transform': "rotate(" + now + "deg)",
                    '-moz-transform': "rotate(" + now + "deg)",
                    '-ms-transform': "rotate(" + now + "deg)",
                    '-o-transform': "rotate(" + now + "deg)",
                    'transform': "rotate(" + now + "deg)"
                });
                // object.style.transform="rotate(" + now + "deg)"
            },
            done: function(){
              $(document).on('click',"#rotate-wheel",function(){
                wheel_action(200);
              });
              //- console.log(point_peace);
              $(".point-result").attr("data-score", points_array[point_peace]);
              //- console.log(get_current_rotate("rotate-wheel"));
            },
        });
    }

    function get_current_rotate(id){
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
      if(tr !== "none")
        {
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        var scale = Math.sqrt(a*a + b*b);

        //- console.log('Scale: ' + scale);

        // arc sin, convert from radians to degrees, round
        var sin = b/scale;
        // next line works for 30deg but not 130deg (returns 50);
        // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

        //- console.log('Rotate: ' + angle + 'deg');
        return angle;
        }
      else
        return 0;
    };

    $(document).on("click","#circle-outside",function(){
        console.log(get_current_rotate("circle-outside"));
    });
})

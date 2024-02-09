/* import scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#my-scrollbar')); */




$(document).ready(function(){
    AOS.init();
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 4300) {
            $(".p_01").css({
                "position": "absolute",
            });
        } else if (sctop < 4300){
            $(".p_01").css({
                "position": "sticky",
                "top": "0",
            });
        }
    });
});


$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 4300) {
            $(".fixed").css({
                "display": "none",
            });
        } else if (sctop < 4300){
            $(".fixed").css({
                "display": "block",
            });
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 100) {
            $(".logo_svg").css({
                "transform": "scale(1)",
                "transition": "all 0.3s ease",
            });
        } else if (sctop > 100 && sctop <= 300){
            $(".logo_svg").css({
                "transform": "scale(1.5)",
                "transition": "all 0.3s ease",
            });
        } else if (sctop > 300 && sctop <= 500){
            $(".logo_svg").css({
                "transform": "scale(2)",
                "transition": "all 0.3s ease",
            });
        } else if (sctop > 500 && sctop <= 700){
            $(".logo_svg").css({
                "transform": "scale(2.5)",
                "transition": "all 0.3s ease",
            });
        } else if (sctop > 700 && sctop <= 900){
            $(".logo_svg").css({
                "transform": "scale(4.5)",
                "transition": "all 0.3s ease",
            });
        } else if (sctop > 900 && sctop <= 1100){
            $(".logo_svg").css({
                "transform": "scale(6.5)",
                "transition": "all 0.3s ease",
            });
        } else if (sctop > 1100 && sctop <= 1300){
            $(".logo_svg").css({
                "transform": "scale(8.5)",
                "transition": "all 0.1s ease",
            });
        } else if (sctop > 1300 && sctop <= 1400){
            $(".logo_svg").css({
                "transform": "scale(11)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 1400 && sctop <= 1500){
            $(".logo_svg").css({
                "transform": "scale(13)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 1500 && sctop <= 1600){
            $(".logo_svg").css({
                "transform": "scale(15)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 1600 && sctop <= 1700){
            $(".logo_svg").css({
                "transform": "scale(20)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 1700 && sctop <= 1800){
            $(".logo_svg").css({
                "transform": "scale(25)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 1800 && sctop <= 1900){
            $(".logo_svg").css({
                "transform": "scale(30)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 1900 && sctop <= 2000){
            $(".logo_svg").css({
                "transform": "scale(35)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2000 && sctop <= 2100){
            $(".logo_svg").css({
                "transform": "scale(50)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2100 && sctop <= 2200){
            $(".logo_svg").css({
                "transform": "scale(70)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2200 && sctop <= 2300){
            $(".logo_svg").css({
                "transform": "scale(95)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2300 && sctop <= 2400){
            $(".logo_svg").css({
                "transform": "scale(120)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2400 && sctop <= 2500){
            $(".logo_svg").css({
                "transform": "scale(150)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2500 && sctop <= 2600){
            $(".logo_svg").css({
                "transform": "scale(180)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2600 && sctop <= 2700){
            $(".logo_svg").css({
                "transform": "scale(220)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2700 && sctop <= 2800){
            $(".logo_svg").css({
                "transform": "scale(310)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2800 && sctop <= 2900){
            $(".logo_svg").css({
                "transform": "scale(340)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 2900 && sctop <= 3000){
            $(".logo_svg").css({
                "transform": "scale(370)",
                "transition": "all 0.15s ease",
            });
        } else if (sctop > 3000 && sctop <= 4500){
            $(".logo_svg").css({
                "transform": "scale(400)",
                //"transition": "all 0.3s",
            });
        }
    });
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 4300 && sctop <= 4500) {
            $(".clip").css({
                "opacity": "0",
                "transition": "opacity 1s"
            });
        } else {
            $(".clip").css({
                "opacity": "1",
                "transition": "opacity 1s"
            });
        }
    });
});

/* page 2 */

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop < 4300) {
            $(".redefining").css({
                "opacity": "0",
                "transition": "all 1.3s",
            });
        } else if (sctop >= 4300 && sctop <= 4800){
            $(".redefining").css({
                "opacity": "1",
                "transition": "all 4s"
            });
        }
    });
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 4300) {
            $(".p_02 .text_wrap").css({
                "right": "100px",
                "opacity": "1",
            });
        } else if (sctop < 4400){
            $(".p_02 .text_wrap").css({
                "right": "-50px",
                "opacity": "0",
            });
        }
    });
});



$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 0 && sctop < 4800) {
            $(".p_02 .text_wrap").css({
                "position" : "fixed",
            });
        } else {
            $(".p_02 .text_wrap").css({
                "position" : "absolute",
            });
        }
    });
});


/* page 3 */
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 5000) {
            $(".begin").css({
                "transform": "translateY(350px)",
                "opacity": "0", 
                "rotate": "-5deg"
            });
        } else if (sctop > 5000 && sctop <= 5150){
            $(".begin").css({
                "opacity": "0.5",
            });            
        } else if (sctop > 5150){
            $(".begin").css({
                "transform": "translateY(50px)",
                "opacity": "1",
                "rotate": "0deg"
            });
        }
    });
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 5300) {
            $(".p_03 .text_wrap").css({
                "left": "290px",
                "opacity": "0",
            });
        } else if (sctop > 5300 && sctop <= 5400){
            $(".p_03 .text_wrap").css({
                "left": "340px",
                "opacity": "0.2",
            });
        } else if (sctop > 5400){
            $(".p_03 .text_wrap").css({
                "left": "400px",
                "opacity": "1",
            });
        }
        
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 5000) {
            $(".flower_R").css({
                "opacity": "0"  
            });
        } else if (sctop > 5000 && sctop <= 5150){
            $(".begin").css({
                "opacity": "0.5",
            });            
        } else if (sctop > 5150){
            $(".flower_R").css({
                "opacity": "0.9"
            });
        }
    });
});

/* $(document).ready(function () {
    let mainText = document.querySelector(".flower_L")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 5400) {
        mainText.style.animation = "slide 1s ease-out forwards";
    } else {
        mainText.style.animation='disappear 1s ease-out';
    }
});
}); */


/* page 4 */
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 6000) {
            $(".innovation").css({
                "opacity": "0",
                "transform": "translateY(400px) rotate(5deg)",
                "right": "250px"
            });
       /*  } else if (sctop > 6000 && sctop <= 6450){
            $(".innovation").css({
                "opacity": "0.5",
                "transform": "translateY(0px) rotate(0deg)",
                "right": "0px"
            });    */         
        } else if (sctop > 6000){
            $(".innovation").css({
                "opacity": "1",
                "transform": "translateY(0px) rotate(0deg)",
                "right": "0px"
            });
        }
    });
});
/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 6000) {
            $(".innovation").css({
                "opacity": "0",    
            });
        } else if (sctop > 6200 && sctop < 6450){
            $(".innovation").css({
                "opacity": "0.5",
            });            
        } else if (sctop > 6450 && sctop < 7150){
            $(".innovation").css({
                "opacity": "1",
            });
        }
    });
}); */
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 6200) {
            $(".p_04 .text_wrap").css({
                "right": "130px",
                "opacity": "1",
            });
        } else if (sctop < 6500){
            $(".p_04 .text_wrap").css({
                "right": "0px",
                "opacity": "0",
            });
        }
    });
});

/* page 5 */
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 7600) {
            $(".performance").css({
                "opacity": "0",
                "transform": "translateY(-140px) rotate(5deg)",
                "left": "800px"  
            });
        } else if (sctop > 7600 && sctop <= 7700){
            $(".performance").css({
                "opacity": "0.7",
                "transform": "translateY(0px) rotate(0deg)",
                "left": "1000px"
            });            
        } else if (sctop > 7700){
            $(".performance").css({
                "opacity": "1",
                "transform": "translateY(0px) rotate(0deg)",
                "left": "1000px"
            });
        }
    });
});
/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 7400) {
            $(".performance").css({
                "opacity": "0",    
            });
        } else if (sctop > 7400 && sctop <= 7700){
            $(".performance").css({
                "opacity": "0.7",
            });            
        } else if (sctop > 7700 && sctop < 8100){
            $(".performance").css({
                "opacity": "1",
            });
        }
    });
}); */
/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 7400) {
            $(".p_05 .text_wrap").css({
                "opacity": "0",
                "transform": "translateY(-140px) rotate(-5deg)",
                "right": "500px"  
            });
        } else if (sctop > 7400 && sctop <= 7700){
            $(".p_05 .text_wrap").css({
                "opacity": "0.7",
                "transform": "translateY(0px) rotate(0deg)",
                "right": "-1000px"
            });            
        } else if (sctop > 7700){
            $(".p_05 .text_wrap").css({
                "opacity": "1",
            });
        }
    });
}); */
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 7300) {
            $(".p_05 .text_wrap").css({
                "left": "370px",
                "opacity": "1",
            });
        } else {
            $(".p_05 .text_wrap").css({
                "left": "170px",
                "opacity": "0",
            });
        }
    });
});


/* page 6 */
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop < 8600) {
            $(".ingredient_txt").css({
                "opacity": "0",
                "transition": "all 0.8s ease",
                "left" : "133px"
            });
        } else if (sctop >= 8600 && sctop <= 8800){
            $(".ingredient_txt").css({
                "opacity": "1",
                "transition": "all 1.5s ease",
                "left" : "213px"
            });
        }
    });
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop < 8200) {
            $(".ingredient").css({
                "opacity": "0",
                "transition": "all 0.8s ease",
                "left" : "180px"
            });
        } else if (sctop >= 8200 && sctop <= 8600){
            $(".ingredient").css({
                "opacity": "1",
                "transition": "all 1.5s ease",
                "left" : "260px"
            });
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 8500) {
            $(".p_06 .text_wrap").css({
                "right": "-980px",
                "opacity": "1",
            });
        } else {
            $(".p_06 .text_wrap").css({
                "right": "-1050px",
                "opacity": "0",
            });
        }
    });
});


//page 7

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 9100) {
            $(".p_07 h1").css({
                "transform": "translateY(250px)",
                "opacity": "0" 
            });          
        } else {
            $(".p_07 h1").css({
                "transform": "translateY(0px)",
                "opacity": "1" 
            });
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 12700) {
            $(".p_08 .text_wrap").css({
                "transform": "translateX(0px)",
            });          
        } else if (sctop > 12700 && sctop <= 12900){
            $(".p_08 .text_wrap").css({
                "transform": "translateX(400px)",
            });
        } else if (sctop > 12900){
            $(".p_08 .text_wrap").css({
                "transform": "translateX(400px)",
            });
        }
    });
});
/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 9100) {
            $(".p_07").css({
                "opacity": "0"  
            });
        } else if (sctop > 9100 && sctop <= 9500){
            $(".p_07").css({
                "opacity": "0.5",
            });            
        } else if (sctop > 9500){
            $(".p_07").css({
                "opacity": "1"
            });
        }
    });
}); */


//page 8

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 11200) {
            $(".h_01 > .text_wrap > h2").css({
                "transform": "translate(-200px, -150px)",
                "opacity": "0",
                "scale": "1.2"
            });          
        } else {
            $(".h_01 > .text_wrap > h2").css({
                "transform": "translate(0, 0)",
                "opacity": "1",
                "scale": "1"
            });
        }
    });
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 11200) {
            $(".h_01 > .text_wrap > p").css({
                "transform": "translate(-200px, 100px)",
                "opacity": "0",
                "scale": "1.2"
            });          
        } else {
            $(".h_01 > .text_wrap > p").css({
                "transform": "translate(0, 0)",
                "opacity": "1",
                "scale": "1"
            });
        }
    });
});






$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 12500) {
            $(".h_02 .pink3").css({
                "transform": "translate(-100px, 0) rotate(0)",
                "opacity": "0.5"
            });          
        /* } else if (sctop > 12000 && sctop <= 12450) {
            $(".h_02 .pink3").css({
                "transform": "translate(-150px, 0) rotate(0deg)"
            });
        } else if (sctop > 12450 && sctop <= 12900) {
            $(".h_02 .pink3").css({
                "transform": "translate(0px, 0) rotate(0deg)"
            }); */
        } else if (sctop > 12500) {
            $(".h_02 .pink3").css({
                "transform": "translate(0px, 0) rotate(0deg)",
                "opacity": "1"
            });
        }
        
    });
});

/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 13000) {
            $(".h_02 .pink4").css({
                "transform": "translate(20px, 0) rotate(0)"
            });          
        } else if (sctop > 13000 && sctop <= 13500) {
            $(".h_02 .pink4").css({
                "transform": "translate(365px, -600px) rotate(25deg)"
            });
        } else if (sctop > 13500) {
            $(".h_02 .pink4").css({
                "transform": "translate(710px, -1200px) rotate(50deg)"
            });
        }
    });
}); */

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 13600) {
            $(".h_02 .pink4").css({
                "transform": "translate(20px, 0) rotate(0)"
            });          
        } else if (sctop > 13600 && sctop <= 13850) {
            $(".h_02 .pink4").css({
                "transform": "translate(250px, -400px) rotate(10deg)"
            });
        } else if (sctop > 13850 && sctop <= 14100) {
            $(".h_02 .pink4").css({
                "transform": "translate(480px, -800px) rotate(30deg)"
            });
        } else if (sctop > 14100) {
            $(".h_02 .pink4").css({
                "transform": "translate(710px, -1200px) rotate(50deg)"
            });
        }
    });
});


$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 13800) {
            $(".h_02 .pink2").css({
                "transform": "translate(0, 0) rotate(0deg)",
                "scale": "0.2"
            });          
        } else if (sctop > 13800 && sctop <= 13950) {
            $(".h_02 .pink2").css({
                "transform": "translate(200px, -200px) rotate(0deg)",
                "scale": "0.5"
            });
        } else if (sctop > 13950 && sctop <= 14100) {
            $(".h_02 .pink2").css({
                "transform": "translate(400px, -400px) rotate(0deg)",
                "scale": "0.5"
            });
        } else if (sctop > 14100 && sctop <= 14400) {
            $(".h_02 .pink2").css({
                "transform": "translate(6, -600px) rotate(0deg)",
                "scale": "0.6"
            });
        } else if (sctop > 14400 && sctop <= 14700) {
            $(".h_02 .pink2").css({
                "transform": "translate(800px, -800px) rotate(0deg)",
                "scale": "0.7"
            });
        } else if (sctop > 14700 && sctop <= 15000) {
            $(".h_02 .pink2").css({
                "transform": "translate(1000px, -1000px) rotate(1deg)",
                "scale": "0.7"
            });
        } else if (sctop > 15000 && sctop <= 15300) {
            $(".h_02 .pink2").css({
                "transform": "translate(1200px, -1400px) rotate(5deg)",
                "scale": "0.7"
            });
        } else if (sctop > 15300 && sctop <= 15600) {
            $(".h_02 .pink2").css({
                "transform": "translate(1400px, -1800px) rotate(5deg)",
                "scale": "0.7"
            });
        } else if (sctop > 15600 && sctop <= 16100) {
            $(".h_02 .pink2").css({
                "transform": "translate(1400px, -2000px) rotate(5deg)",
                "scale": "0.7"
            });
        }
    });
});



/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 13700 && sctop <= 14900) {
            $(".h_02 .pink_wrap .pink6").css({
                "left": "calc(-13700px + sctop)"
            });
        }
    });
}); */

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 15600) {
            $(".h_02 .pink6").css({
                "transform": "translate(0, -75px) rotate(0deg)",
            });          
        } else if (sctop > 15600 && sctop <= 15750) {
            $(".h_02 .pink6").css({
                "transform": "translate(180px, -415px) rotate(0deg)",
            });
        } else if (sctop > 15750 && sctop <= 15900) {
            $(".h_02 .pink6").css({
                "transform": "translate(360px, -830px) rotate(0deg)",
            });
        } else if (sctop > 15900 && sctop <= 16050) {
            $(".h_02 .pink6").css({
                "transform": "translate(540px, -1245px) rotate(0deg)",
            });
        } else if (sctop > 16050 && sctop <= 16300) {
            $(".h_02 .pink6").css({
                "transform": "translate(720px, -1660px) rotate(0deg)",
            });
        } else if (sctop > 16300 && sctop <= 16450) {
            $(".h_02 .pink6").css({
                "transform": "translate(900px, -2075px) rotate(0deg)",
            });
        } else if (sctop > 16450 && sctop <= 16500) {
            $(".h_02 .pink6").css({
                "transform": "translate(1080px, -2490px) rotate(0deg)",
            });
        } else if (sctop > 16500) {
            $(".h_02 .pink6").css({
                "transform": "translate(1250px, -2900px) rotate(0deg)",
            });
        /* } else if (sctop > 16600) {
            $(".h_02 .pink6").css({
                "transform": "translate(3120px, -2900px) rotate(0deg)",
            }); */
        }
    });
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 14800) {
            $(".h_02 .pink7").css({
                "transform": "translate(-100, 0)",
                "scale": "0.6",
                "rotate": "-10deg"
            });          
        } else if (sctop > 14800 && sctop <= 14900) {
            $(".h_02 .pink7").css({
                "transform": "translate(200px, -500px)",
                "scale": "0.6",
                "rotate": "-7deg"
            });
        } else if (sctop > 14900 && sctop <= 15100) {
            $(".h_02 .pink7").css({
                "transform": "translate(500px, -1000px)",
                "scale": "0.6",
                "rotate": "-4deg"
            });
        } else if (sctop > 15100 && sctop <= 15400) {
            $(".h_02 .pink7").css({
                "transform": "translate(800px, -1500px)",
                "scale": "0.6",
                "rotate": "1deg"
            });
        } else if (sctop > 15400 && sctop <= 15700) {
            $(".h_02 .pink7").css({
                "transform": "translate(1100px, -2000px)",
                "scale": "0.6",
                "rotate": "1deg"
            });
        } else if (sctop > 15700 && sctop <= 16000) {
            $(".h_02 .pink7").css({
                "transform": "translate(1400px, -2500px)",
                "scale": "0.65",
                "rotate": "2deg"
            });
        } else if (sctop > 16000) {
            $(".h_02 .pink7").css({
                "transform": "translate(1700px, -2955px)",
                "scale": "0.7",
                "rotate": "3deg"
            });
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop <= 13600) {
            $(".typo_02").css({
                "transform": "translateX(0px)"
            });          
        } else if (sctop > 13600 && sctop <= 13900) {
            $(".typo_02").css({
                "transform": "translateX(-300px)"
            });
        } else if (sctop > 13900 && sctop <= 14200) {
            $(".typo_02").css({
                "transform": "translateX(-600px)"
            });
        } else if (sctop > 14200 && sctop <= 14500) {
            $(".typo_02").css({
                "transform": "translateX(-900px)"
            });
        } else if (sctop > 14500 && sctop <= 14800) {
            $(".typo_02").css({
                "transform": "translateX(-1200px)"
            });
        } else if (sctop > 14800 && sctop <= 15100) {
            $(".typo_02").css({
                "transform": "translateX(-1500px)"
            });
        } else if (sctop > 15100 && sctop <= 15400) {
            $(".typo_02").css({
                "transform": "translateX(-1800px)"
            });
        } else if (sctop > 15400 && sctop <= 15700) {
            $(".typo_02").css({
                "transform": "translateX(-2100px)"
            });
        } else if (sctop > 15700) {
            $(".typo_02").css({
                "transform": "translateX(-2400px)"
            });
        }
    });
});




/* 서브페이지 구매수량 + - */

$(function(){
    //수량 증가
            $(".plus").click(function(){
                var quantity = $(".amount").text();
                if(quantity < 100){
                    quantity++;
                    $(".amount").text(quantity);
                }		
            })
            //수량 감소
            $(".minus").click(function(){
                var quantity = $(".amount").text();
                if(quantity > 1){ //1이상일 때만 감소 가능
                    quantity--;
                    $(".amount").text(quantity);				
                }
    
            })
    });

/* $(document).ready(function(){
    var i = 2;
    if(i >= 2){
        $('.plus').click(function(){
            $('strong').text(i++);
        });
    }
    if(i >= 2){
        $('.minus').click(function(){
            $('strong').text(i--);
        });
    }
    if(i <= 0){
        $('.minus').click(function(){
            $('strong').text(1);
        });
    }
}); */

/* $(document).ready(function(){
    var i = 2;
    if(i >= 2){
        $('.plus').click(function(){
            $('strong').text(i++);
        });
        $('.minus').click(function(){
            $('strong').text(i--);
        });
    } else if(i <= 1){
        $('.minus').click(function(){
            alert("최소 구매 수량은 '1' 입니다.");
        });
        
    }
});

$(document).ready(function(){
    var i = 2;
    if(i >= 2){
        $('.plus').click(function(){
            $('strong').text(i++);
        });
        $('.minus').click(function(){
            $('strong').text(i--);
        });
    } else if($('strong').text(1)) {
        $('.minus').click(function(){
            alert("최소 구매 수량은 '1' 입니다.");
        });
    }
}); */


/* $(document).ready(function(){
    var i = 2;

    $('.plus').click(function(){
        $('strong').text(i++);
    });


    $('.minus').click(function(){
        $('strong').text(i--);
    });

    if(i <= 0){
        $('.minus').click(function(){
            return false;
        });
    }
}); */



/* $(document).ready(function(){
    var i = 1;
    $('.plus').click(function(){
        $("input").value(
            i++
        );  
    });
    
}); */

/**
 * Created by Administrator on 2017/2/11.
 */
$(function () {
    $('.direct-three-left-bottom-ma').hover(function () {
        $('.direct-three-erweimasmall').show();
    });
    $('.direct-three-left-bottom-ma').mouseleave(function () {
        $('.direct-three-erweimasmall').hide();
    });
    $('.direct-one-personal').hover(function () {
        $('.direct-one-list').slideDown();
    });
    $('.direct-one-personal').mouseleave(function () {
        $('.direct-one-list').slideUp();
    });
    $('.direct-three-left-follow-end > img').click(function () {
        $('.direct-three-left-follow').hide();
    });
    var div2=document.getElementById("div2");
    var div1=document.getElementById("div1");
    div1.onclick=function(){
        div1.className=(div1.className=="close1")?"open1":"close1";
        div2.className=(div2.className=="close2")?"open2":"close2";
    };
    $('.marquee').animate({ left: "-500px" }, 10000);
    $('.img2').eq(0).hover(function () {
        $(this).attr('src','images/direct-three-04.png');
    }).mouseleave(function () {
        $(this).attr('src','images/direct-three-01.png');
    });
    $('.img2').eq(1).hover(function () {
        $(this).attr('src','images/direct-three-05.png');
    }).mouseleave(function () {
        $(this).attr('src','images/direct-three-02.png');
    });
    $('.img2').eq(2).hover(function () {
        $(this).attr('src','images/direct-three-06.png');
    }).mouseleave(function () {
        $(this).attr('src','images/direct-three-03.png');
    });
    $('.direct-two-co2').click(function () {
        $('.direct-three-left-follow').show();
    });
    $('.direct-two-co1').click(function () {
        $(this).text('已关注');
    });
    $('.direct-four-cooperation').eq(0).click(function () {
         $(this).addClass('active').siblings('.direct-four-cooperation').removeClass('active');
         $('.direct-four-words').eq(0).show().siblings('.direct-four-words').hide();
    });
    $('.direct-four-cooperation').eq(1).click(function () {
        $(this).addClass('active').siblings('.direct-four-cooperation').removeClass('active');
        $('.direct-four-words').eq(1).show().siblings('.direct-four-words').hide();
    });
    $('.direct-smal-play').eq(0).hover(function () {
        $('.smal-writing').eq(0).show();
    });
    $('.direct-smal-play').eq(0).mouseleave(function () {
        $('.smal-writing').eq(0).hide();
    });
    $('.direct-smal-play').eq(1).hover(function () {
        $('.smal-writing').eq(1).show();
    });
    $('.direct-smal-play').eq(1).mouseleave(function () {
        $('.smal-writing').eq(1).hide();
    });
    $('.direct-smal-play').eq(2).hover(function () {
        $('.smal-writing').eq(2).show();
    });
    $('.direct-smal-play').eq(2).mouseleave(function () {
        $('.smal-writing').eq(2).hide();
    });
    $('.direct-smal-play').eq(3).hover(function () {
        $('.smal-writing').eq(3).show();
    });
    $('.direct-smal-play').eq(3).mouseleave(function () {
        $('.smal-writing').eq(3).hide();
    });
        

});
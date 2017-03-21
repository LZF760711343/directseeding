/**
 * Created by Administrator on 2017/3/13.
 */
$(function () {
   $('.toggle-gong').click(function () {
       $(this).addClass('active').siblings('.toggle-gong').removeClass('active');
       $('.block-1').eq($('.toggle-gong').index(this)).show().siblings('.block-1').hide();
   });
    $('.set-base').click(function () {
        $(this).addClass('set-base-active').siblings('.set-base').removeClass('set-base-active');
        $('.subtitle-content-two').eq($('.set-base').index(this)).show().siblings('.subtitle-content-two').hide();
    });
    $('.subtitle-block').click(function () {
        $('.bg-layer').show();
        $('body').css('overflow','hidden');
    });
    $('.close-set').click(function () {
        $('.bg-layer').hide();
        $('body').css('overflow','auto');
    });
    $('.close-up').click(function () {
        $('.bg-layer1').hide();
        $('body').css('overflow','auto');
    });
    $('.close-zi').click(function () {
        $('.subtitle-zi,.subtitle-video').hide();
        $('body').css('overflow','auto');
    });
    $('.erweimasmall').mouseover(function () {
        $('.direct-three-erweimasmall').show();
    });
    $('.erweimasmall').mouseout(function () {
        $('.direct-three-erweimasmall').hide();
    });
    $('.line-v1,.add').click(function () {
        $('.bg-layer1').show();
        $('body').css('overflow','hidden');
    });
    $('.drag-block').dblclick(function () {
        $('.subtitle-zi').show();
        $('body').css('overflow','hidden');
    });
    $('.animation').mouseover(function () {
        $('.small-animation').eq($('.animation').index(this)).show();
    });
    $('.animation').mouseout(function () {
        $('.small-animation').eq($('.animation').index(this)).hide();
    });
    $(".drag-seeding-small-img").click(function () {
        $(this).parent().toggleClass('drag-seeding-small-active');
        $(this).next().children('.drag-seeding-ball').toggleClass('active');
    });
    $(".drag-seeding-small-img,.add,.bg-color").mouseover(function () {
        $(this).children('.drag-seeding-small-close').show();
    });
    $(".drag-seeding-small-img,.add,.bg-color").mouseout(function () {
        $(this).children('.drag-seeding-small-close').hide();
    });
    $('.kuan-gong').eq(0).click(function () {
        $(this).addClass('kuan-gong-active').siblings('.kuan-gong').removeClass('kuan-gong-active');
        $('.small-seeding .bg-color .border-all').eq(1).removeClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(2).removeClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(3).removeClass('preview-size-img-c1');
        $('.figure,.figure-two').hide();
    });
    $('.kuan-gong').eq(1).click(function () {
        $(this).addClass('kuan-gong-active').siblings('.kuan-gong').removeClass('kuan-gong-active');
        $('.small-seeding .bg-color .border-all').eq(1).addClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(2).removeClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(3).removeClass('preview-size-img-c1');
        $('.figure').show();
        $('.figure-two,.figure-three').hide();
    });
    $('.kuan-gong').eq(2).click(function () {
        $(this).addClass('kuan-gong-active').siblings('.kuan-gong').removeClass('kuan-gong-active');
        $('.small-seeding .bg-color .border-all').eq(1).addClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(2).addClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(3).removeClass('preview-size-img-c1');
        $('.figure,.figure-three').hide();
        $('.figure-two').show();
    });
    $('.kuan-gong').eq(3).click(function () {
        $(this).addClass('kuan-gong-active').siblings('.kuan-gong').removeClass('kuan-gong-active');
        $('.small-seeding .bg-color .border-all').eq(1).addClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(2).addClass('preview-size-img-c1');
        $('.small-seeding .bg-color .border-all').eq(3).addClass('preview-size-img-c1');
        $('.figure').hide();
        $('.figure-two,.figure-three').show();
    });
    $('.selected').click(function () {
        $('.selected-time').toggleClass('dis-noe');
    });
    $('.unchecked').click(function () {
        $(this).toggleClass('checked')
    });
    $('.drag-seeding-small-close').click(function () {
        $(this).parent('drag-seeding-small').hide();
    });
    $('.add-img-small-in').click(function () {
        $('.subtitle-video1').show();
    });
    $('.close-video').click(function () {
        $('.subtitle-video1').hide();
    });
});
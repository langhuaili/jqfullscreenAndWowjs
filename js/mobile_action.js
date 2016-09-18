/**
* Created by Administrator on 2016/9/13 0013.
*/
console.log(window.devicePixelRatio);
var wow = new WOW(
    { boxClass: 'wow',
        animateClass: 'animated',
        offset: 400,
        mobile: true,
        live: true
    }
).init();

$(function () {
    $('.wrap').fullpage({
        'verticalCentered':true,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
        'slidesNavPosition':'bottom',
        'scrollingSpeed':'500',
        'loopTop':true,
        'loopBottom':true,
        'slidesNavigation':true,
        'slidesNavPosition':'top',
        'controlArrowColor':'#ccc',
        'scrollBar':true,
        'afterLoad':function (name,index) {
           console.log(index);
            console.log(name);
        }
    })
})
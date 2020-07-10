
//<!--/* =========================================================== */-->
//<!--/* ========================= HILITES ========================= */-->
//<!--/* =========================================================== */-->

function loadBanner(thisElem, thisLink, mWdith, mHeight) {
// export function loadBanner(thisElem, thisLink, mWdith, mHeight) {

    console.log("loadBanner(thisElem) = " + thisElem.id);
    console.log("loadBanner(thisLink) = " + thisElem.link);

    // window.location.hash = '#close';
    // setTimeout(removeModalContent, 400);

    // $("#" + thisElem.id + "\").append(\"<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWdith + "\" height=\"" + mHeight + "\"></object>");
    // thisElem.append(<object id="modalObject" type="text/html" data = thisLink  width = mWdith  height = mHeight></object>);
    thisElem.innerHTML = "<object id=\"bannerID\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWdith + "\" height=\"" + mHeight + "\"></object>";
}



//<!--/* ========================= HILITES - FUNCTION: scrollToHilite(thisHilite) ========================= */-->

// function scrollToHilite(thisHilite) {

//     // console.log('PING!!! scrollToHilite(thisHilite) triggered!     thisHilite = ' + thisHilite);

//     $('html, body').stop().animate({ scrollTop: $('#' + thisHilite).position().top - 150 }, 1000);
// }


//<!--/* ========================= HILITES - FUNCTION: hilites_about(thisURL) (SPLASH/INTRO) ========================= */-->

// function hilites_about(thisURL) {

//     console.log('PING! hilites_about triggered!');
//     console.log('thisURL = ' + thisURL);

//     // TweenMax.fromTo([hilitesNavID], 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeOut });

//     //<!--/* ------------------------- TIMELINE: hiiltes_aboutTL ------------------------- */-->

//     //	var hiiltes_aboutTL = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
//     //	var hiiltes_aboutTL = new TimelineMax({delay:2});
//     //	var hiiltes_aboutTL = new TimelineMax({delay:1});
//     var hiiltes_aboutTL = new TimelineLite({ delay: 0.125, onComplete: jump, onCompleteParams: [thisURL] });
//     //	var hiiltes_aboutTL = new TimelineLite({delay:0.25});
//     //	var hiiltes_aboutTL = new TimelineMax({delay:0});

//     hiiltes_aboutTL

//         //==================== SPLASH 01 ====================

//         //		.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

//         .to([bodyHilitesID], 0.75, { autoAlpha:0, ease: Power3.easeOut }, "frame01 +=0")

//         .to([shigeru_logo_afro, shigeru_logo_glasses], 1, { scale: 6.666666666666667, ease: Power3.easeOut }, "frame01 +=0")

//         .to([shigeru_logo_afro], 1, { x: 1455, y: 900, ease: Power3.easeOut }, "frame01 +=0")
//         .to([header_mask_afro_k], 1, { y: -628.75, scaleY: 1.7109375, ease: Power3.easeOut }, "frame01 +=0")
//         .to([header_mask_afro_w], 0.25, { scaleY: 0, ease: Power3.easeOut }, "frame01 +=0")

//         .to([shigeru_logo_glasses], 1, { x: 3100, y: 4040, ease: Power3.easeOut }, "frame01 +=0")
//         .to([header_mask_glasses_k], 0.6875, { y: -628.75, scaleY: 1.7109375, ease: Power1.easeOut }, "frame01 +=0")
//         .to([header_mask_glasses_w], 0.6875, { scaleY: 0, ease: Power1.easeOut }, "frame01 +=0")

//         // .to([header_mask_kanji], 0.5, { y: -370, ease: Power3.easeOut, onComplete: loadAboutArray }, "frame01 +=0")
//         .to([header_mask_kanji], 0.5, { y: -370, ease: Power3.easeOut}, "frame01 +=0")

//         //		.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=1")
//         ;

//     hiiltes_aboutTL.duration(1.5);

//     console.log("hiiltes_aboutTL timing = " + hiiltes_aboutTL.duration() + " secs");


// }

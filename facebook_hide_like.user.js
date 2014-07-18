// ==UserScript==
// @name          Simple Facebook
// @author        khoaxial
// @description   Hides all Like actions on Facebook
// @include       https://www.facebook.com/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @version       0.1
// ==/UserScript==

document.addEventListener("DOMSubtreeModified", function() {
    $("._5pcp._5vsi").remove(); // Like, Comment, Share bar
    $("._52gg._6mp.fsm.fwn.fcg").remove(); // Like, Comment sub-bar
    $(".fbTimelineFeedbackHeader").remove(); // Like, Comment, Promote Share bar
    $("._53d._53q").remove(); // Like, Comment overlay for photo thumbnails
    /* Removing photo buttons breaks the layout on prev/next, so settle for hiding */
    $(".fbPhotosPhotoButtons").hide(); // Share/Send/Like buttons for modal photo
    $(".UFILikeIcon").remove(); // Like button
    $(".likeCommentGroup").remove(); // Like/Comment photo buttons
    // Remove Like links in comments
    var select = $("span:contains('\u00B7') + .UFILikeLink");
    select.prev().remove();
    select.remove();
    // Remove Like, Comment, Share on photo pages
    $(".UIActionLinks > :not(#fbPhotoPageTimestamp)").remove();
    $(".UIActionLinks").contents().filter(function(){ return this.nodeType === 3; }).remove();
}, false);

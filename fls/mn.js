$.ajaxSetup({ cache: false });
$.each($.cookie(), function(key, value) {
    $.removeCookie(key);
});
console.log('tes')
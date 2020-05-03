$(".dropdown-item").click(function (e){
    if($(e.target).hasClass('wislah-active')){
        $(e.target).removeClass("wislah-active");
    } else {
        $(e.target).siblings('.wislah-active').removeClass('wislah-active');
        $(e.target).addClass('wislah-active');
        console.log($(e.target).parent().attr('id'))
    }
})

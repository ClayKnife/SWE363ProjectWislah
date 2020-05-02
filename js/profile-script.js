window.onload = function(){
    if(window.innerWidth <= 991){
        $('#profile-img-holder').removeClass('profile-img-holder');
        $('#profile-img-holder').addClass('profile-img-holder-sp');
        $('#profile-selected-opt-info').removeClass('profile-selected-opt-info');
        $('#profile-selected-opt-info').addClass('profile-selected-opt-info-sp');
        $('#profile-menu').removeClass('profile-menu');
        $('#profile-menu').addClass('profile-menu-sp');
        $('#profile-menu').addClass('d-none');
        $('#profile-content').removeClass('profile-content');
        $('#profile-content').addClass('profile-content-sp');
        $('#menu-toggler-sp').removeClass('d-none');
    }
    else{
        $('#menu-toggler-sp').addClass('d-none');
    }
}

window.onresize = function(){
    if(window.innerWidth <= 991){
        $('#profile-img-holder').removeClass('profile-img-holder');
        $('#profile-img-holder').addClass('profile-img-holder-sp');
        $('#profile-selected-opt-info').removeClass('profile-selected-opt-info');
        $('#profile-selected-opt-info').addClass('profile-selected-opt-info-sp');
        $('#profile-menu').removeClass('profile-menu');
        $('#profile-menu').addClass('profile-menu-sp');
        $('#profile-menu').addClass('d-none');
        $('#profile-content').removeClass('profile-content');
        $('#profile-content').addClass('profile-content-sp');
        $('#menu-toggler-sp').removeClass('d-none');
    }
    else{
        if(!this.menuHidden)
            this.toggleMenu();
        $('#profile-img-holder').removeClass('profile-img-holder-sp');
        $('#profile-img-holder').addClass('profile-img-holder');
        $('#profile-selected-opt-info').removeClass('profile-selected-opt-info-sp');
        $('#profile-selected-opt-info').addClass('profile-selected-opt-info');
        $('#profile-menu').removeClass('profile-menu-sp');
        $('#profile-menu').removeClass('d-none');
        $('#profile-menu').addClass('profile-menu');
        $('#profile-content').removeClass('profile-content-sp');
        $('#profile-content').addClass('profile-content');
        $('#menu-toggler-sp').addClass('d-none');
    }
}

var menuHidden = true;
function toggleMenu(){
    if(menuHidden){
        $('#profile-menu').removeClass('d-none');
        $('#menu-toggler-icon').removeClass('fa-arrow-circle-right');
        $('#menu-toggler-icon').addClass('fa-arrow-circle-left');
        $('#profile-content').removeClass('profile-content-sp');
        $('#profile-content').addClass('profile-compact-content-sp');
        menuHidden = false;
    }
    else{
        $('#profile-menu').addClass('d-none');
        $('#menu-toggler-icon').removeClass('fa-arrow-circle-left');
        $('#menu-toggler-icon').addClass('fa-arrow-circle-right');
        $('#profile-content').removeClass('profile-compact-content-sp');
        $('#profile-content').addClass('profile-content-sp');
        menuHidden = true;
    }
}
window.onload = function(){
    if(window.innerWidth <= 991){
        $('#profile-img-holder').removeClass('profile-img-holder');
        $('#profile-img-holder').addClass('profile-img-holder-sp');
        $('#profile-selected-opt-info').removeClass('profile-selected-opt-info');
        $('#profile-selected-opt-info').addClass('profile-selected-opt-info-sp');
        $('#profile-menu').removeClass('profile-menu');
        $('#profile-menu').addClass('profile-menu-sp');
        if(this.menuHiddenSP)
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
        if(this.menuHiddenSP)
            $('#profile-menu').addClass('d-none');
        $('#profile-content').removeClass('profile-content');
        $('#profile-content').addClass('profile-content-sp');
        $('#menu-toggler-sp').removeClass('d-none');
    }
    else{
        if(!this.menuHiddenSP)
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

var menuHiddenSP = true;
function toggleMenu(){
    if(menuHiddenSP){
        $('#profile-menu').removeClass('d-none');
        $('#menu-toggler-icon').removeClass('fa-arrow-circle-right');
        $('#menu-toggler-icon').addClass('fa-arrow-circle-left');
        document.getElementById('menu-toggler-sp').style.marginRight = "30%";
        document.getElementById('menu-toggler-sp').style.marginLeft = "30%";
        menuHiddenSP = false;
    }
    else{
        $('#profile-menu').addClass('d-none');
        $('#menu-toggler-icon').removeClass('fa-arrow-circle-left');
        $('#menu-toggler-icon').addClass('fa-arrow-circle-right');
        document.getElementById('menu-toggler-sp').style.marginLeft = "0%";
        document.getElementById('menu-toggler-sp').style.marginRight = "78%";
        menuHiddenSP = true;
    }
}

function toggleMenuSelectedP(menuSelected){
    //i is the number of menu items customer can see, most likely fixed to 2 menu items
    for(i=1; i<3; i++)
        $('#menu'+i).removeClass('profile-menu-item-selected');
    $('#'+menuSelected).addClass('profile-menu-item-selected');
    getContentP(menuSelected);
}

function toggleMenuSelectedFP(menuSelected){
    //i needs to be the number of services that freelancer has so figure it out
    for(i=1; i<4; i++)
        $('#menu'+i).removeClass('profile-menu-item-selected');
    $('#'+menuSelected).addClass('profile-menu-item-selected');
    getContentFP(menuSelected);
}

function toggleMenuSelectedPFP(menuSelected){
    //i is the number of menu items freelancer can see, most likely fixed to 3 menu items
    for(i=1; i<4; i++)
        $('#menu'+i).removeClass('profile-menu-item-selected');
    $('#'+menuSelected).addClass('profile-menu-item-selected');
    getContentPFP(menuSelected);
}

function getContentP(menuSelected){
    //lol
}

function getContentFP(menuSelected){
    //lol
}

function getContentPFP(menuSelected){
    //lol
}
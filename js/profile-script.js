var menuHidden = true;
function toggleMenu(){
    if(menuHidden){
        $('#profile-menu-sp').removeClass('d-none');
        $('#menu-toggler-icon').removeClass('fa-arrow-circle-right');
        $('#menu-toggler-icon').addClass('fa-arrow-circle-left');
        $('#profile-content-sp').removeClass('profile-content-sp');
        $('#profile-content-sp').addClass('profile-compact-content-sp');
        menuHidden = false;
    }
    else{
        $('#profile-menu-sp').addClass('d-none');
        $('#menu-toggler-icon').removeClass('fa-arrow-circle-left');
        $('#menu-toggler-icon').addClass('fa-arrow-circle-right');
        $('#profile-content-sp').removeClass('profile-compact-content-sp');
        $('#profile-content-sp').addClass('profile-content-sp');
        menuHidden = true;
    }
}
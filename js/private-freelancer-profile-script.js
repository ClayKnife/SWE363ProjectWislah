var selectedCard = ""; //this variable changes based on which card is selected to change status of, contains element's ID
var menuHiddenSP = true;
var packageCount = 1;

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

function toggleMenuSelectedPFP(menuSelected){
    //i is the number of menu items freelancer can see, most likely fixed to 3 menu items
    for(i=1; i<=3; i++){
        $('#menu'+i).removeClass('profile-menu-item-selected');
        $('#menu'+i+'-content').addClass('d-none');
        $('#menu'+i+'-info').addClass('d-none');
        $('#menu'+i+'-img').addClass('d-none');
    }
    $('#'+menuSelected).addClass('profile-menu-item-selected');
    $('#'+menuSelected+'-content').removeClass('d-none');
    $('#'+menuSelected+'-info').removeClass('d-none');
    $('#'+menuSelected+'-img').removeClass('d-none');
}

function toggleSelectedCard(cardSelected){
    if($('#'+cardSelected).hasClass('service-card-selected')){
        $('#'+cardSelected).removeClass('service-card-selected');
        selectedCard = "";
    }
    else{
        for(i=1; i<=1; i++){
            $('#card'+i).removeClass('service-card-selected');
        }
        $('#'+cardSelected).addClass('service-card-selected');
        selectedCard = ""+cardSelected;
    }
}

function setStatus(status){
    if(selectedCard==""){
        alert("You did not select a card!");
    }
    else{
        //do something with the status variable and selected card variable
    }
}

function addPackage(){
    /*
    id names are as follows (all information that you need)
    package-(number)-name: to get the name of the package
    package-(number)-desc: to get the description of the package
    package-(number)-price: to get the price of the package
    */
    packageCount++;
    let packageHeader='<li class="nav-item"><a class="flex-sm-fill text-sm-center nav-link" id="package-'+packageCount+'-tab" data-toggle="tab" href="#package-'+packageCount+'" role="tab" aria-controls="package-'+packageCount+' aria-selected="false"><input type="text" class="create-service-package-name" name="package-'+packageCount+'-name" id="package-'+packageCount+'-name" value="Standard" required></a></li>';
    $(packageHeader).appendTo('#myTab');
    let packageContent='<div class="tab-pane fade" id="package-'+packageCount+'" role="tabpanel" aria-labelledby="package-'+packageCount+'-tab"><textarea id="package-'+packageCount+'-description" required maxlength="100" rows="3" cols="28"></textarea><div class="input-group mb-2 mr-sm-2" style="width: 120px;"><div class="input-group-prepend"><div class="input-group-text">$</div></div><input type="number" class="form-control" id="package-'+packageCount+'-price" placeholder="Price" required/></div></div>';
    $(packageContent).appendTo('#package-tabs');
}
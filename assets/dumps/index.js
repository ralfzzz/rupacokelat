// $(document).click(function(){
//     alert('jquery ready');
// });

// $('.shop-icon').hide();



// SHOP ICONS
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
    // HIDING ELEMENTS
    $('.shop-icon').hide();
    // $(".gfgpp").hide();
    $("#shop").click(function(event){
        $(".shop-icon").slideToggle('linear');
        if (event.currentTarget.id == "shop") {
            $("#shop").animate({opacity:'0'},'fast').attr("src", "/assets/img/cross.svg").animate({opacity:'1'},'fast').attr("id","shop-cross");
        } else {
            $("#shop-cross").animate({opacity:'0'},'fast').attr("src", "/assets/img/shop.svg").animate({opacity:'1'},'fast').attr("id","shop");
        }
        // console.log('tes');
    });
    
    
    $('.shop-icon.plus').click(function(event){
        $(".shop-icon").slideToggle('linear');
        if (event.currentTarget.id == "shop") {
            $("#shop").animate({opacity:'0'},'fast').attr("src", "/assets/img/cross.svg").animate({opacity:'1'},'fast').attr("id","shop-cross");
        } else {
            $("#shop-cross").animate({opacity:'0'},'fast').attr("src", "/assets/img/shop.svg").animate({opacity:'1'},'fast').attr("id","shop");
        }
    })
} else {
    $("#shop").attr("src", "/assets/img/cross.svg").attr("id","shop-cross");
    $("#shop-cross").click(function(event){
        $(".shop-icon").slideToggle('linear');
        if (event.currentTarget.id == "shop") {
            $("#shop").animate({opacity:'0'},'fast').attr("src", "/assets/img/cross.svg").animate({opacity:'1'},'fast').attr("id","shop-cross");
        } else {
            $("#shop-cross").animate({opacity:'0'},'fast').attr("src", "/assets/img/shop.svg").animate({opacity:'1'},'fast').attr("id","shop");
        }
        // console.log('tes');
    });
    
    
    $('.shop-icon.plus').click(function(event){
        $(".shop-icon").slideToggle('linear');
        if (event.currentTarget.id == "shop") {
            $("#shop").animate({opacity:'0'},'fast').attr("src", "/assets/img/cross.svg").animate({opacity:'1'},'fast').attr("id","shop-cross");
        } else {
            $("#shop-cross").animate({opacity:'0'},'fast').attr("src", "/assets/img/shop.svg").animate({opacity:'1'},'fast').attr("id","shop");
        }
    })
}

// PRODUK MODAL JS
$(".image-toggler").click(function () {
    $(".image-toggle").hide();
    $($(this).attr("data-image-id")).show();
});

$(document).ready(function () {
    $("#hargaButton1").click(function () {
      $("#hargaCollaps").text("Rp.5000");
    });
    $("#hargaButton2").click(function () {
      $("#hargaCollaps").text("Rp.8000");
    });
    $("#hargaButton3").click(function () {
      $("#hargaCollaps").text("Rp.10000");
    });
});



// $("#shop-cross").click(function(){
//     $("#shop-cross").attr("src", "/assets/img/shop.svg").attr("id","shop");
// });
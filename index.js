// $(document).click(function(){
//     alert('jquery ready');
// });
$('.shop-icon').hide();

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
// $("#shop-cross").click(function(){
//     $("#shop-cross").attr("src", "/assets/img/shop.svg").attr("id","shop");
// });
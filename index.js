// $(document).click(function(){
//     alert('jquery ready');
// });
$('.shop-icon').hide();

$("#shop").click(function(event){
    $(".shop-icon").slideToggle('linear');
    if (event.currentTarget.id == "shop") {
        $("#shop").attr("src", "/assets/img/cross.svg").attr("id","shop-cross");
    } else {
        $("#shop-cross").attr("src", "/assets/img/shop.svg").attr("id","shop");
    }
    // console.log('tes');
});

// $("#shop-cross").click(function(){
//     $("#shop-cross").attr("src", "/assets/img/shop.svg").attr("id","shop");
// });
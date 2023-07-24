// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// SHOP ICONS

  $("#shop-cross").click(function(event){
      $(".shop-icon").slideToggle('linear');
      if (event.currentTarget.id == "shop-cross") {
          $("#shop-cross").animate({opacity:'0'},'fast').attr("src", "./images/shop.svg").animate({opacity:'1'},'fast').attr("id","shop");
      } else {
          $("#shop").animate({opacity:'0'},'fast').attr("src", "./images/cross.svg").animate({opacity:'1'},'fast').attr("id","shop-cross");
      }
  });
  
  
  $(".shop-icon.plus").click(function(event){
      $(".shop-icon").slideToggle('linear');
      if (event.currentTarget.id == "shop-cross") {
          $("#shop").animate({opacity:'0'},'fast').attr("src", "./images/cross.svg").animate({opacity:'1'},'fast').attr("id","shop-cross");
      } else {
          $("#shop-cross").animate({opacity:'0'},'fast').attr("src", "./images/shop.svg").animate({opacity:'1'},'fast').attr("id","shop");
      }
  });

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

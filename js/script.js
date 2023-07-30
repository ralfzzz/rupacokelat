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
$(".image-toggler2").click(function () {
  $(".image-toggle2").hide();
  $($(this).attr("data-image-id")).show();
});
$(".image-toggler3").click(function () {
  $(".image-toggle3").hide();
  $($(this).attr("data-image-id")).show();
});


$(document).ready(function () {
  // Modal1
  $("#hargaButton1").click(function () {
    $("#hargaCollaps").text("Rp.5000 | pc");
  });
  // Modal1 Jar
  $("#m1Jmd").click(function () {
    $("#hargaCollaps").text("Rp.41000 | 250g");
  });
  $("#m1Jlg").click(function () {
    $("#hargaCollaps").text("Rp.80000 | 500g");
  });
  $("#m1Jbg").click(function () {
    $("#hargaCollaps").text("Rp.120000 | 800g");
  });
  $("#m1Jfm").click(function () {
    $("#hargaCollaps").text("Rp.140000 | 1kg");
  });
  // Modal1 Zip
  $("#m1Zmd").click(function () {
    $("#hargaCollaps").text("Rp.37000 | 250g");
  });
  $("#m1Zlg").click(function () {
    $("#hargaCollaps").text("Rp.67000 | 500g");
  });
  $("#m1Zpt").click(function () {
    $("#hargaCollaps").text("Rp.112000 | 1kg");
  });
  // Modal2
  $("#hargaButton1md").click(function () {
    $("#hargaCollaps2").text("Rp.5000 | pc");
  });
  // Modal2 Jar
  $("#m2Jmd").click(function () {
    $("#hargaCollaps2").text("Rp.41000 | 250g");
  });
  $("#m2Jlg").click(function () {
    $("#hargaCollaps2").text("Rp.80000 | 500g");
  });
  $("#m2Jbg").click(function () {
    $("#hargaCollaps2").text("Rp.120000 | 800g");
  });
  $("#m2Jfm").click(function () {
    $("#hargaCollaps2").text("Rp.140000 | 1kg");
  });
  // Modal2 Zip
  $("#m2Zmd").click(function () {
    $("#hargaCollaps2").text("Rp.37000 | 250g");
  });
  $("#m2Zlg").click(function () {
    $("#hargaCollaps2").text("Rp.67000 | 500g");
  });
  $("#m2Zpt").click(function () {
    $("#hargaCollaps2").text("Rp.112000 | 1kg");
  });
  // Modal3
  $("#hargaButton1mt").click(function () {
    $("#hargaCollaps3").text("Rp.5000 | pc");
  });
  // Modal3 Jar
  $("#m3Jmd").click(function () {
    $("#hargaCollaps3").text("Rp.41000 | 250g");
  });
  $("#m3Jlg").click(function () {
    $("#hargaCollaps3").text("Rp.80000 | 500g");
  });
  $("#m3Jbg").click(function () {
    $("#hargaCollaps3").text("Rp.120000 | 800g");
  });
  $("#m3Jfm").click(function () {
    $("#hargaCollaps3").text("Rp.140000 | 1kg");
  });
  // Modal3 Zip
  $("#m3Zmd").click(function () {
    $("#hargaCollaps3").text("Rp.37000 | 250g");
  });
  $("#m3Zlg").click(function () {
    $("#hargaCollaps3").text("Rp.67000 | 500g");
  });
  $("#m3Zpt").click(function () {
    $("#hargaCollaps3").text("Rp.112000 | 1kg");
  });
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
      $("#hargaButton1md").click(function () {
        $("#hargaCollapsmd").text("Rp.5000");
      });
      $("#hargaButton2md").click(function () {
        $("#hargaCollapsmd").text("Rp.8000");
      });
      $("#hargaButton3md").click(function () {
        $("#hargaCollapsmd").text("Rp.10000");
      });
      $("#hargaButton1mt").click(function () {
        $("#hargaCollapsmt").text("Rp.5000");
      });
      $("#hargaButton2mt").click(function () {
        $("#hargaCollapsmt").text("Rp.8000");
      });
      $("#hargaButton3mt").click(function () {
        $("#hargaCollapsmt").text("Rp.10000");
      });
      $("#hargaButton1me").click(function () {
        $("#hargaCollapsme").text("Rp.5000");
      });
      $("#hargaButton2me").click(function () {
        $("#hargaCollapsme").text("Rp.8000");
      });
      $("#hargaButton3me").click(function () {
        $("#hargaCollapsme").text("Rp.10000");
      });
    });

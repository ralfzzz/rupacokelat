<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Rupa Cokelat</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<!--Bootstrap local-->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<!--Font-->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
	<!--Icon-->
	<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'>
	<!--Bootstrap cdn-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>	

</head>

<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#xx" style="cursor:pointer" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>    
      </ul>
    </div>
  </div>
</nav>

  <div id="baris" class="row mx-auto mt-3" style="width: 900px; font-family: Ubuntu;">
  	<p class="h3 text-center" style="color: #876445;">Produk</p>
  	<!--<hr style="border: 1px solid #876445">-->
    <div class="col d-flex flex-wrap p-3">
			  <div class="card mx-auto" style="width:180px; height:180px;">
			  	<div class="card-header d-flex align-items-center bg-white" style="height: 137px;">
			  		<img class="mx-auto" src="/img/produk2.png" alt="Card image" style="height:80%; width:auto;"></div>
			    <div class="card-body p-0">
			    	<a href="#" class="btn d-block rounded-0 text-white p-3" data-bs-toggle="modal" data-bs-target="#exModal" style="background-color: #876445;">Selengkapnya</a></div> 
			  </div>
    </div>
    <div class="col d-flex flex-wrap p-3">
			  <div class="card mx-auto" style="width:180px; height:180px;">
			  	<div class="card-header d-flex align-items-center bg-white" style="height: 137px;">
			  		<img class="mx-auto" src="/img/produk2.png" alt="Card image" style="height:80%; width:auto;"></div>
			    <div class="card-body p-0">
			    	<a href="#" class="btn d-block rounded-0 text-white p-3" data-bs-toggle="modal" data-bs-target="#exModal" style="background-color: #876445;">Selengkapnya</a></div> 
			  </div>
    </div>
    <div class="col d-flex flex-wrap p-3">
			  <div class="card mx-auto" style="width:180px; height:180px;">
			  	<div class="card-header d-flex align-items-center bg-white" style="height: 137px;">
			  		<img class="mx-auto" src="/img/produk2.png" alt="Card image" style="height:80%; width:auto;"></div>
			    <div class="card-body p-0">
			    	<a href="#" class="btn d-block rounded-0 text-white p-3" data-bs-toggle="modal" data-bs-target="#exModal" style="background-color: #876445;">Selengkapnya</a></div> 
			  </div>
    </div>
    <div class="col d-flex flex-wrap p-3">
			  <div class="card mx-auto" style="width:180px; height:180px;">
			  	<div class="card-header d-flex align-items-center bg-white" style="height: 137px;">
			  		<img class="mx-auto" src="/img/produk2.png" alt="Card image" style="height:80%; width:auto;"></div>
			    <div class="card-body p-0">
			    	<a href="#" class="btn d-block rounded-0 text-white p-3" data-bs-toggle="modal" data-bs-target="#exModal" style="background-color: #876445;">Selengkapnya</a></div> 
			  </div>
    </div>

  </div>

<!--<div class="container" style="font-family: Ubuntu;">
  <h2>Produk</h2>
  <div class="card" style="width:180px; height:180px;">
  	<div class="card-header d-flex align-items-center bg-white" style="height: 137px;">
  		<img class="mx-auto" src="/img/produk2.png" alt="Card image" style="height:50%; width:auto;"></div>
    <div class="card-body p-0">
    	<a href="#" class="btn d-block rounded-0 text-white p-3" data-bs-toggle="modal" data-bs-target="#exModal" style="background-color: #876445;">Selengkapnya</a></div> 
  </div>

</div>-->

<!-- Modal -->
<div class="modal" id="exModal" style="background-color: rgba(135, 100, 69, 0.5);">
  <div class="modal-dialog modal-dialog-centered modal-lg" >
    <div class="modal-content" style="height:500px">

      <!-- Modal Header -->
      <div class="modal-header border-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body d-flex align-items-center">
          <div class="row" style="font-family: Ubuntu;">
				    <div class="col-md-5 bg d-flex align-items-center">
				    	<img class="mx-auto image-toggle" src="/img/produk2.png" title="image 1" alt="image 1" id="image1" style="height:200px; width:auto;">
				    	<img class="mx-auto image-toggle" src="/img/jar.png" title="image 2" alt="image 2" id="image2" style="display:none; height:200px; width:auto;">
				    	<img class="mx-auto image-toggle" src="/img/zip.png" title="image 3" alt="image 3" id="image3" style="display:none; height:200px; width:auto;">
				    </div>
				    <div class="col-md-7">
				    	<h2 style="color: #876445;">Produk</h2>
				    	<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae venenatis purus, rutrum viverra diam. Quisque ac sapien ultrices, pulvinar lectus sit amet, consectetur nisi. Vivamus id placerat mi. Suspendisse lobortis nec diam nec tincidunt. </h5>
				    	<div id="hargaButton">
					    	<button type="button" class="btn text-white image-toggler primary" data-image-id="#image1" id="hargaButton1" style="background-color: #876445;">Sachet</button>
					    	<button type="button" class="btn text-white image-toggler secondary" data-image-id="#image2" id="hargaButton2" style="background-color: #876445;">Jar</button>
					    	<button type="button" class="btn text-white image-toggler" data-image-id="#image3" id="hargaButton3" style="background-color: #876445;">Ziplock</button>
					      <p class="mt-3 fw-bold" id="hargaCollaps" style="color: #876445;">Rp.5000</p>
					  	</div>
				    </div>
				  </div>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer border-0">

    </div>
  </div>
</div>

<script type="text/javascript" src="js/query-slim.min.js"></script>
<script type="text/javascript" src="js/popper.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<script>
    $('.image-toggler').click(function(){
        $('.image-toggle').hide();
        $($(this).attr('data-image-id')).show();
    })
</script>

<script>
$(document).ready(function(){
  $("#hargaButton1").click(function(){
    $("#hargaCollaps").text("Rp.5000");
  });
  $("#hargaButton2").click(function(){
    $("#hargaCollaps").text("Rp.8000");
  });
  $("#hargaButton3").click(function(){
    $("#hargaCollaps").text("Rp.10000");
  });
});
</script>

</body>
</html>
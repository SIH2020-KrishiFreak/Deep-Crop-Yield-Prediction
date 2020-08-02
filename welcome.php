<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <link rel="stylesheet" href="welcome.css">
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
    <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>

    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Welcome to Deep Crop Yield Prediction</h1>
    </div>
    

    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
	<form name = "form1" action="modified.php" method = "post">    
            <div class = "container">    
                <div class = "form-group row">    
                    <label>Crop Name:</label>    
                    <input type = "text" name = "crop" value = "" required/>    
                </div>    
                <div class = "form_group">    
                    <label>Area:</label>    
                    <input type = "number" name = "area" value = "" required />    
                </div>    
                <div class = "form_group">    
                    <label>Season:</label>    
                    <select id="state" name="state">
                        <option value="rabi">Rabi</option>
                        <option value="kharif">Kharif</option>
                    </select>     
                </div> 
		<div class = "form_group">    
                    <label>State:</label>    
                      <select id="state" name="state">
                        <option value="Bihar">Bihar</option>
                      </select> 
                <div class = "form_group">    
                    <label>District:</label>    
                    <input type = "text" name = "district" value = "" required/>    
                </div> 
                <div class = "form_group">    
                    <label>Pincode:</label>    
                     <input type = "number" name = "area" value = "" required />  
                </div> 

                 <a href="" class="btn">Submit</a>

                 <div class=row>
                    <div id="mapid"></div>
                    <div> 

		      
            </div>    
        </form> 
        </div>
    </div>
</div>
      
        <script type="text/javascript" src="welcome.js"></script> 
<!-- 
        <div class="container">
    <div class="auth-form-body"> -->

      <!--   <form class="form-signin" id="admission-form" action="webapi/student" method="post"
              enctype="multipart/form-data">

            <div class="form-label-group">
                <input type="text" id="firstName" name="firstName" class="form-control"
                       placeholder="First Name" required
                       autofocus>
                <label for="firstName">First Name</label>
            </div>

            <div class="form-label-group">
                <input type="text" id="middleName" name="middleName" class="form-control"
                       placeholder="Middle Name">
                <label for="middleName">Middle Name</label>
            </div>

            <div class="form-label-group">
                <input type="text" id="lastName" name="lastName" class="form-control"
                       placeholder="Last Name">
                <label for="lastName">Last Name</label>
            </div>

            <div class="form-label-group">
                <input type="email" id="emailId" name="emailId" class="form-control"
                       placeholder="Email Address">
                <label for="emailId">Email Address</label>
            </div>

            <div class="form-label-group">
                <select id="domainId" name="domainId" class="form-control">
                    <option value="0" selected disabled>Select Domain</option>
                </select>
            </div>

         
            <br>

            <button class="btn btn-primary btn-block mt-4" type="submit">Register</button>


        </form> -->
    <!-- </div>
</div> -->
</body>
</html>
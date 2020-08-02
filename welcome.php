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
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
   
   
    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }
    </style>
</head>
<body>
  
    <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.php"><b>DEEP CROP YIELD PREDICTION</b></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="welcome.php"><b>HOME</b></a></li>
      <li><a href="reset-password.php"><b>CHANGE PASSWORD?</b></a></li>
      <li ><a href="#"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Hi, <?php echo htmlspecialchars($_SESSION["username"]); ?></b>
      </a></li>
      
      <li><a class="dd" href="logout.php">
    <!--   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
   <b> Sign Out</b></a></li>
    </ul></b>
    <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
    
  </div>
   <img src="main_picture.jpeg" alt="Image missing">
    </nav>
  <div class="page-header">
        <h2>Welcome to Deep Crop Yield Prediction</h2>
    </div>
    <br><br>

    <h3><b>Input</b></h3><br>

  <form name = "form1" action=".predict" method = "post">    
            <div class = "container">    
                <div class="row">

                <div class="form-group col-md-4">
                <input type="text" id="cropName" name="cropName" class="form-control "
                       placeholder="Crop Name" required
                       autofocus>
                </div>

                <div class="form-group col-md-4">
                <input type="number" id="area" name="area" class="form-control "
                       placeholder="Area" required
                       autofocus>
                <!-- <label for="area">Area</label> -->
                </div>

                <div class="form-group col-md-4">
                <select id="season" name="season" class="form-control">
                    <option value="rabi" selected >Rabi</option>
                    <option value="kharif">Kharif</option>
                </select>
                </div>

                <div class="form-group col-md-4">
                <select id="state" name="state" class="form-control">
                    <option value="bihar" selected >Bihar</option>
                </select>
                </div>

                <div class="form-group col-md-4">
                <select id="district" name="district" class="form-control">
                    <option value="patna" selected >Patna</option>
                    <option value="begusarai">Begusarai</option>
                    <option value="darbhanga">Darbhanga</option>
                </select>
                </div>

                <div class="form-group col-md-4">
                <input type="number" id="pincode" name="pincode" class="form-control "
                       placeholder="Pincode" required
                       autofocus>
                </div>

                </div>
                
                 <button class="btn btn-primary  mt-4 " style="font-size:1.5vw" type="submit">Predict</button>

                <br><br><br><br>

                <div id="mapid"></div><br/><br/>
                <div class="row">
                        <h2><b>Crop Yield Prediction Results</b></h2></div><br/><br/>
                            
                          <div class="col-md-3"></div>
        
                         <div class="col-md-3">
                              <img class="row" id="image" src="negative.png" style="width:220px;height:200px;"" alt="Click Submit">
                         </div>

                         <div class="col-md-3">
                          <h2 id="yield"></h2>
                          <h2 id="avgyield"></h2>
                        </div>

                        <div class="col-md-3"></div>
                        
                </div>
                <!-- </div> -->
 
               <!--  <p>
                        <a href="reset-password.php" class="btn btn-warning">Reset Your Password</a>
                        <a href="logout.php" class="btn btn-danger">Sign Out of Your Account</a>
                </p>   -->  
        </form> 
       
        <script type="text/javascript" src="welcome.js"></script> 
        


</body>
</html>
   <?php
		error_reporting(E_ALL);
		ini_set('display_errors', TRUE);
        // Only process the form if $_POST isn't empty
//	  var_dump("dsfasdfsadfasddf");
		if ( $_SERVER['REQUEST_METHOD'] == "POST" && ! empty ($_POST) ) {
//		   var_dump("running");
          // Connect to MySQL
//          $mysqli = new mysqli( 'mysql-pro.vcu.edu', 'mossdj', 'EveningThre3atHaystack', 'anonline_db', '3306' );
		   $mysqli = new mysqli('localhost', 'root', 'root', 'users');

          // Check our connection
          if ( $mysqli->connect_error ) {
            die( 'Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error );
          }

          // Insert our data
            //replace user with database name
          $sql = "INSERT INTO users ( fname, lname, organization, role, email, city, county, state ) VALUES ( '{$mysqli->real_escape_string($_POST['fname'])}', 
          '{$mysqli->real_escape_string($_POST['lname'])}', 
          '{$mysqli->real_escape_string($_POST['organization'])}', 
          '{$mysqli->real_escape_string($_POST['role'])}', 
          '{$mysqli->real_escape_string($_POST['email'])}', 
          '{$mysqli->real_escape_string($_POST['city'])}', 
          '{$mysqli->real_escape_string($_POST['county'])}', 
          '{$mysqli->real_escape_string($_POST['state'])}' 
          )";
          $insert = $mysqli->query($sql);

          // Print response from MySQL
          if ( $insert ) {
//            echo "Success! Row ID: {$mysqli->insert_id}";
						header("Location: http://www.localhost/AbuseNeglectWebinar/registration-complete.html");
//			header("Location: http://wwwmysql-pro.vcu.edu/AbuseNeglectWebinar/registration-complete.html");
			//exit();
			
          } else {
            die("Error: {$mysqli->errno} : {$mysqli->error}");
          }

          // Close our connection
          $mysqli->close();		
        }
    ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Tipping the Scales in Their Favor - Abuse and Neglect Webina11111r</title>

    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="sticky-footer-navbar.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Connecting to the Database -->

    

    <!-- Navigation - Fixed To Top -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">Tipping the Scales in Their Favor</a>
        </div>
      </div>
    </nav>

    <!-- Begin page content -->
    <div class="container">
      <div class="page-header">
        <h1>Registration</h1>
      </div>
    
        <!--Registration Form-->    
		<form id="form" method="post" name="registration-form" class="form-group"  action="">
			<div>
			  <h4>Name:</h4>
			  <div class="col-xs-6">
				 <input type="text" name="fname" class="form-control" placeholder="First Name">
			  </div>

			  <div class="col-xs-6">
				 <input type="text" name="lname" class="form-control" placeholder="Last Name">
			  </div>
			</div>
       
       		<br>
       
			<div>
			  <h4>Contact:</h4>
			  <div class="col-xs-6">
				 <input type="text" name="organization" class="form-control" placeholder="Organization">
			  </div>

			  <div class="col-xs-6">
				 <input type="text" name="role" class="form-control" placeholder="Role">
			  </div>

			  <div class="col-xs-12">
				 <input type="text" name="email" class="form-control" placeholder="Email">
			  </div>

			  <div class="col-xs-4">
				 <input type="text" name="city" class="form-control" placeholder="City">
			  </div>

			  <div class="col-xs-4">
				 <input type="text" name="county" class="form-control" placeholder="County">
			  </div>

			  <div class="col-xs-4">
				 <input type="text" name="state" class="form-control" placeholder="State">
			  </div>
			</div>
			
			<input id="save" class="btn btn-default btn-lg pull-right" role="button" type="submit" value="Submit"></input>  
			</div>

		</form>

    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted"><a href="http://partnership.vcu.edu">Partnership for People with Disabilities</a></p>
      </div>
    </footer>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>

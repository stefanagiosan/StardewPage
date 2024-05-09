<?php
    
    
$uusername = $_POST['username'];
$ppassword = $_POST['password'];
$eemail = $_POST['email'];
$ccountry = $_POST['countrySel'];
$ccity = $_POST['citySel'];
$checkboxAdmin = filter_input(INPUT_POST, "checkbox", FILTER_VALIDATE_BOOL);

$adminRole = "admin";
$registeredUser = "registered User";


$host = "localhost";
$dbname = "project_data";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO registration (username, password, email, country, city, role)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}

if ($checkboxAdmin) {
    mysqli_stmt_bind_param($stmt, "ssssss", $uusername, $ppassword, $eemail, $ccountry, $ccity, $adminRole);
} else {
    mysqli_stmt_bind_param($stmt, "ssssss", $uusername, $ppassword, $eemail, $ccountry, $ccity, $registeredUser);
}



mysqli_stmt_execute($stmt);


$stmt->close();
$conn->close();

header('Location: http://localhost/signIn.html');
?>



<?php
$host = "localhost";
$dbname = "project_data";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

$uusername = $_POST['username'];
$ppassword = $_POST['password'];

$stmt = $conn->prepare("select * from registration where username = ?");
$stmt->bind_param("s", $uusername);
$stmt->execute();
$stmt_result = $stmt->get_result();
if( $stmt_result->num_rows > 0) {
    while($row = $stmt_result->fetch_assoc()) {
        if($row["password"] == $ppassword and $row["username"] == $uusername) {
            header('Location: http://localhost/home2.html');
        } else {
            header('Location: http://localhost/signIn.html');

        };
    };
    
} else {
    header('Location: http://localhost/signIn.html');
};
?>
<?php 
$name = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['subject'];
$formcontent="From: $name \n Phone: $phone \n Message: $message";
$recipient = "svarna@alvit.cz";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
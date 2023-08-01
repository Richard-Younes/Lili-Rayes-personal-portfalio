<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'richoyounes@gmail.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    mail($to, $subject, $body);

    // Redirect to a thank you page
    header('Location: thank-you.html');
    exit();
}
?>
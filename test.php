<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $email_from = "sanskritiinternationalschool.com";
    $email_subject="New form submission";
    $email_body = "name: $name .\n". 
                  "user Email: $visitor_email./n".
                  "user Message: $message./n";
    $to = "admission@sanskritiinternationalschool.com";
    $headers ="From: $email_from\r\n";
    $headers .="Reply-To: $visitor_email\r\n";

    mail($to, $email_subject, $email_body);
    header("Location:contact.html")
?>
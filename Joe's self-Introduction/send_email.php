<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    //get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set the destination email address
    $destination_email = "joechen731jobmail@gmail.com";

    $email_subject = "New Form Submission: $subject";
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message";

    // Attempt to send the email
    if (mail($destination_email, $email_subject, $email_body)) {
        echo "Email sent successfully";
    } else {
        echo "Email sending failed";
    }
} else {
    echo "Form not submitted.";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <link rel="stylesheet" type="text/css">


    <style>
        ul {
            list-style-type: none;
            border-style: groove;
            margin-top: 10px;
            margin-bottom: 10px;
            overflow: hidden;
            background-color: black;
            position: fixed;

        }

        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        li {
            float: left;
            border-right: 100px solid black;
        }



        li a:hover {
            background-color: gray;
        }


        }

        figure {
            text-align: center;

        }

        figcaption {
            font-size: 0.83em;
            color: blue;
        }
    </style>
</head>
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Activites</a></li>
    <li><a href="#">Food</a></li>
    <li><a href="#">Rest</a></li>
    <li><a href="#">People</a></li>
    <li><a href="#">Feedback</a></li>
</ul>

<body>

    <h1>Thanks you for your feedback</h1>



    <figure>
        <img src="../assets/images/download.jpg" alt="Thanks you" style="width:100%" />
        <figcaption>
            <h2>
                Your feedback can help us to improve </h2>
        </figcaption>

    </figure>
    Please do not refresh this page. please selected the page above.

</body>



</html>
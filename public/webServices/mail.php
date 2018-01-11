<?php
        require('PHPMailer/class.phpmailer.php');
        require('PHPMailer/class.smtp.php');

        $mail = new PHPMailer();
        //Tell PHPMailer to use SMTP
        $mail->IsSMTP();
        //Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        $mail->SMTPDebug  = 2;
        //Ask for HTML-friendly debug output
        $mail->Debugoutput = 'html';
        //Set the hostname of the mail server
        $mail->Host       = 'ssl://smtp.gmail.com:465';
        //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
        //$mail->Port       = 587;
        //Set the encryption system to use - ssl (deprecated) or tls
        //$mail->SMTPSecure = 'tls';
        //Whether to use SMTP authentication
        $mail->SMTPAuth   = true;
        //Username to use for SMTP authentication - use full email address for gmail
        $mail->Username   = 'f4aaadecab@gmail.com';
        //Password to use for SMTP authentication
        $mail->Password   = 'P@@@ssw0rd';
        //Set who the message is to be sent from
        $mail->SetFrom('adresse@mail.com', 'First Last');
        //Set an alternative reply-to address
        $mail->AddReplyTo('replyto@example.com','First Last');
        //Set who the message is to be sent to
        $mail->AddAddress('bfdlmdr@gmail.com', 'John Doe');
        //Set the subject line
        //$mail->Subject = 'PHPMailer GMail SMTP test';
        //Read an HTML message body from an external file, convert referenced images to embedded, convert HTML into a basic plain-text alternative body
        //$mail->MsgHTML(file_get_contents('contents.html'), dirname(__FILE__));
        $mail->Body = '????????????????????????';

        //Replace the plain text body with one created manually
        $mail->AltBody = 'This is a plain-text message body';
        //Attach an image file
        //$mail->AddAttachment('images/phpmailer_mini.gif');

        //Send the message, check for errors
        if(!$mail->Send()) {
          echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
          echo 'Message sent!';
        }
?>

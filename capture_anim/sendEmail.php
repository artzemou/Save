<?php

require('PHPMailer/class.phpmailer.php');
require('PHPMailer/class.smtp.php');

if(isset($_POST['g-recaptcha-response'])) {
    $secretKey = '6LeZRiUUAAAAANrmYrOgQMBhpxIdsNseGdJ3lGXC';
    $response = $_POST['g-recaptcha-response'];
    $remoteIp = $_SERVER['REMOTE_ADDR'];


    $reCaptchaValidationUrl = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
    $result = json_decode($reCaptchaValidationUrl, TRUE);

    //get response along side with all results


    if($result['success'] == 1) {
        $mail = new PHPMailer();
        //Tell PHPMailer to use SMTP
        //$mail->IsSMTP();
        //Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        //$mail->SMTPDebug  = 2;
        //Ask for HTML-friendly debug output
        //$mail->Debugoutput = 'html';
        //Set the hostname of the mail server
        //$mail->Host       = 'ssl://smtp.gmail.com:465';
        //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
        //$mail->Port       = 587;
        //Set the encryption system to use - ssl (deprecated) or tls
        //$mail->SMTPSecure = 'tls';
        //Whether to use SMTP authentication
        //$mail->SMTPAuth   = true;
        //Username to use for SMTP authentication - use full email address for gmail
        //$mail->Username   = 'sendnodemail@gmail.com';
        //Password to use for SMTP authentication
        //$mail->Password   = '3Petitspas';

        // Pour le passer en UTF-8 par exemple :
        $mail->CharSet = 'UTF-8';

        // De qui vient le message, e-mail puis nom
        $mail->From = $_POST['email'];
        $mail->FromName = $_POST['prenom'].' '.$_POST['nom'];

        // Définition du sujet/objet
        $mail->Subject = "Besoin d'information Horizon";

        // On définit le corps du message
        if($_POST['solution'] != "undefined"){
          if($_POST['solution'] == 0){
            $mail->Body = 'Solution: First<br>Prénom : '.$_POST['prenom'].'<br>Nom : '.$_POST['nom'].'<br>Société : '.$_POST['societe'].'<br>Téléphone : '.$_POST['tel'].'<br>Email : '.$_POST['email'].'<br>Message : '.$_POST['message'];

          }
          if($_POST['solution'] == 1){
            $mail->Body = 'Solution: First +<br>Prénom : '.$_POST['prenom'].'<br>Nom : '.$_POST['nom'].'<br>Société : '.$_POST['societe'].'<br>Téléphone : '.$_POST['tel'].'<br>Email : '.$_POST['email'].'<br>Message : '.$_POST['message'];

          }
          if($_POST['solution'] == 2){
            $mail->Body = 'Solution: Open<br>Prénom : '.$_POST['prenom'].'<br>Nom : '.$_POST['nom'].'<br>Société : '.$_POST['societe'].'<br>Téléphone : '.$_POST['tel'].'<br>Email : '.$_POST['email'].'<br>Message : '.$_POST['message'];

          }

        }
        else{
          $mail->Body = 'Prénom : '.$_POST['prenom'].'<br>Nom : '.$_POST['nom'].'<br>Société : '.$_POST['societe'].'<br>Téléphone : '.$_POST['tel'].'<br>Email : '.$_POST['email'].'<br>Message : '.$_POST['message'];

        }


        // On pourra définir un message alternatif pour les boîtes de
        // messagerie n'acceptant pas le html
        $mail->AltBody = "Ce message est au format HTML, votre messagerie n'accepte pas ce format.";
        // Il reste encore à ajouter au moins un destinataire
        // (ou plus, par plusieurs appel à cette méthode)
        $mail->AddAddress($_POST["mailto"]);

        // Pour finir, on envoi l'e-mail
        $mail->send();

        echo "send";



    } else {
        //False - What happens when user is not verified
        echo "notSend";
    }

}

<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
  //Receive the RAW post data.
  $content = trim(file_get_contents("php://input"));

  $decoded = json_decode($content, true);

  //If json_decode failed, the JSON is invalid.
  if(! is_array($decoded)) {
	throw new Exception('Received content contained invalid JSON!');
  } else {
	
    // Send error back to user.
		require('PHPMailer/class.phpmailer.php');
        require('PHPMailer/class.smtp.php');
		if(isset($decoded['greCaptchaResponse'])) {
			$secretKey = '6Lf6dSMUAAAAAAahyLduyHQSwFRtGiRgOKlUWCcY';
			$response = $decoded['greCaptchaResponse'];
			$remoteIp = $_SERVER['REMOTE_ADDR'];


			$reCaptchaValidationUrl = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
			$result = json_decode($reCaptchaValidationUrl, TRUE);
			//get response along side with all results


			if($result['success'] == 1) {
				if(isset($decoded['phone'])){
					$message = file_get_contents('mail_templates/demandeInfo.html');
					$message = str_replace('%subject%', $decoded['subject'], $message);
					$message = str_replace('%email%', $decoded['email'], $message); 
					$message = str_replace('%name%', $decoded['name'], $message);
					$message = str_replace('%firstName%', $decoded['firstName'], $message); 
					$message = str_replace('%compagny%', $decoded['compagny'], $message);
					$message = str_replace('%phone%', $decoded['phone'], $message);
					$message = str_replace('%msg%', $decoded['msg'], $message);
				}
				else{
					$message = file_get_contents('mail_templates/inscriptionQuestionnaire.html');
					$message = str_replace('%subject%', $decoded['subject'], $message);
					$message = str_replace('%email%', $decoded['email'], $message); 
					$message = str_replace('%name%', $decoded['name'], $message);
					$message = str_replace('%firstName%', $decoded['firstName'], $message); 
					$message = str_replace('%compagny%', $decoded['compagny'], $message);
				}
		
		

				$mail = new PHPMailer();
				$mail->CharSet = 'UTF-8';
				
				$mail->From = $decoded['email'];
				$mail->FromName = $decoded['firstName'].' '.$decoded['name'];
				$mail->Subject = $decoded['subject'];

				$mail->AddAddress($decoded['mailto'], 'EBP horizon');
				$mail->Body = $message;
				
				//Replace the plain text body with one created manually
				$mail->AltBody = 'Votre messagerie ne supporte pas le html (on est quand même en 2017 ! :)';
				if(!$mail->Send()) {
				   echo "Mailer Error: " . $mail->ErrorInfo;
				 } else {
				   echo "Le message à bien été envoyé";
				 }
				
			}
		}
		
  }
}

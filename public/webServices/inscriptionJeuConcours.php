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
		
		if(isset($decoded['greCaptchaResponse'])) {
			$secretKey = '6Lf6dSMUAAAAAAahyLduyHQSwFRtGiRgOKlUWCcY';
			$response = $decoded['greCaptchaResponse'];
			$remoteIp = $_SERVER['REMOTE_ADDR'];


			$reCaptchaValidationUrl = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
			$result = json_decode($reCaptchaValidationUrl, TRUE);
			//get response along side with all results
echo('???');
			if($result['success'] == 1) {
				echo('!!!!');
				
				$client = new SoapClient("http://www.si.dev.ebp.local/Corporate.asmx?wsdl");
				//http://www.siws.ebp.local/Corporate.asmx
				//http://www.si.dev.ebp.local/Corporate.asmx?wsdl
							
				$paramsAuth = new stdClass();
				$paramsAuth->   ChaineDeControle = "a51c5e6d5ea6d7610c9e6a797ecbf4c35179234806659201837437940658122499c2109dc0762c7b381c1c0241a09cNGa2JGSjNiME0ypNVFkyWXplSHBWhwU2RtSXlZV1kyWmpZRTBNbXdXbFppTVYTgwYmQ2YThmMTUmpOTWpRMFpUZGZSWFdXcz1obU4yTW13VEU0TW1GaUQ4NTYwZTNjZjMxMGNiODAxMTliOT";
				$paramsAuth->   ApplicationID = "ed53d3288c6407dfdc19dfe05fac4fda";
				$paramsAuth->   PaysID = "FR";
				$paramsAuth->   LangueID = "fr";
				$paramsAuth->   Filiale = "France";
						
				$params = new stdClass();
				$params->   Prenom = $decoded['firstName'];
				$params->   CodeForm = "MktStudioInscrJeuxHorizon";
				$params->   CodeEmail = "MktStudioEmailInscrHorizon";
				$params->   CodeEmailClient = "MktStudioEmailInscrHorizonCli";
				$params->   EmailTo = $decoded['mailto'];
				$params->   SaveFormInBdd = true;
				$params->   Nom = $decoded['name'];
				$params->   NomEntreprise = $decoded['compagny'];
				$params->   Email = $decoded['email'];
				$params->   Telephone = '';
				$params->   DateSubmit = date("Y-m-d").'T'.date("H:i:s");
				$params->   DateInscription = date("Y-m-d").'T'.date("H:i:s");
						
				$client->FO_SubmitFormulaire(array('authentification'=>$paramsAuth, 'form'=>$params));
				echo('.....');
				
			}
		}
		
  }
}

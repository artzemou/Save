<?php

		try{
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
				$params->   Prenom = 'firstName';
				$params->   CodeForm = "MktStudioInscrJeuxHorizon";
				$params->   CodeEmail = "MktStudioEmailInscrHorizon";
				$params->   CodeEmailClient = "MktStudioEmailInscrHorizonCli";
				$params->   EmailTo = 'benjamin.frizon@ebp.com';
				$params->   SaveFormInBdd = true;
				$params->   Nom = 'benjamin.frizon@ebp.com';
				$params->   NomEntreprise = 'benjamin.frizon@ebp.com';
				$params->   Email = 'benjamin.frizon@ebp.com';
				$params->   Telephone = '';
				$params->   DateSubmit = date("Y-m-d").'T'.date("H:i:s");
				$params->   DateInscription = date("Y-m-d").'T'.date("H:i:s");
						
				$client->FO_SubmitFormulaire(array('authentification'=>$paramsAuth, 'form'=>$params));

		}
		catch(Exception  $fault) {
			
			trigger_error("SOAP Fault: (faultcode: {$fault->faultcode}, faultstring: {$fault->faultstring})", E_USER_ERROR);
			
		}


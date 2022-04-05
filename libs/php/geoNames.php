<?php

	// Initiates error reporting - remove for production
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

    // URL concatenated with params from data part of AJAX call in script.js
	$url='http://api.geonames.org/countryInfoJSON?formatted=true&country=' . $_REQUEST['currency'] . '&lang=en' . '&username=joecrow00&style=full';

    // Initiates cURL object. Provided by IT career switch - should work in many transferable cases
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);
    // Executes cURL and stores results in the $result var - then, I guess, closes cURL
	$result=curl_exec($ch);
	curl_close($ch);
    // Decode the JSON response so it can be used with $output below
	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

    // JSON decode used here
    $output['data'] = $decode['geonames'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
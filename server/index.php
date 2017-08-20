<?php
require '../vendor/autoload.php';
$uri = 'http://forge.riastudio.fr/issues.json';
$response = \Httpful\Request::get($uri)
->authenticateWith('matthieu.couvreur@riastudio.fr', 'Sm8Gn9Nd')
->send();

var_dump(json_encode($response->body));
exit;
Flight::route('/api/@request', function($request){
    echo json_encode(array('issues' => array($request)));
    exit;
    if (!isset($_SERVER['PHP_AUTH_USER'])) {
        header('WWW-Authenticate: Basic realm="My Realm"');
        header('HTTP/1.0 401 Unauthorized');
        echo 'Text to send if user hits Cancel button';
        exit;
    } else {
        echo "<p>Hello {$_SERVER['PHP_AUTH_USER']}.</p>";
        echo "<p>You entered {$_SERVER['PHP_AUTH_PW']} as your password.</p>";
    }
});



Flight::start();
<?php
if($_SERVER['REQUEST_URI']=='/') {
    $request_uri = 'en';
}else {
    $request_uri = trim($_SERVER['REQUEST_URI'], '/');
}
if(file_exists('index-'.$request_uri.'.php')) {
    require_once 'index-'.$request_uri.'.php';
}else {
    include_once '404.php';
}
?>
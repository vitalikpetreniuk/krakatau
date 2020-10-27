<?php
function startsWith( $haystack, $needle ) {
    $length = strlen( $needle );
    return substr( $haystack, 0, $length ) === $needle;
}
define('SUPPORTED_LANGUAGES', ['en', 'ar', 'ch', 'de', 'fr', 'hi', 'in', 'it', 'jp', 'ko', 'po', 'ru', 'sp', 'vi']);
if($_SERVER['REQUEST_URI']=='/') {
    $request_uri = 'en';
}else {
    $request_uri = trim($_SERVER['REQUEST_URI'], '/');
}
if(is_null($_SERVER['HTTP_REFERER']) || ((strpos($_SERVER['HTTP_REFERER'], 'krakatay.shypelyk.com') == false) && (strpos($_SERVER['HTTP_REFERER'], 'krakatau.pro') == false))) {
    if($_SERVER['REQUEST_URI']=='/' || startsWith($_SERVER['REQUEST_URI'], '/?')) {
        $langs = array();

        if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
            // break up string into pieces (languages and q factors)
            preg_match_all('/([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/i', $_SERVER['HTTP_ACCEPT_LANGUAGE'], $lang_parse);

            if (count($lang_parse[1])) {
                // create a list like "en" => 0.8
                $langs[] =  $lang_parse[1];

                $langsort = [];

                foreach ($langs as $lang) {
                    foreach ($lang as $l) {
                        if(!strpos($l, '-')) $langsort[] = $l;
                    }
                }
            }

            foreach ($langsort as $item) {
                if(in_array($item, SUPPORTED_LANGUAGES)) {
                    $request_uri=$item;
                    echo '<script>window.location.href = "/'.$item.'"</script>';
                }
            }
        }
    }
}
if(file_exists('index-'.$request_uri.'.php')) {
    require_once 'index-'.$request_uri.'.php';
}else {
    include_once '404.php';
}
?>
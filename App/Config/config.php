<?php
/**
 * Created by PhpStorm.
 * User: Vieiras
 * Date: 30/04/2015
 * Time: 02:34
 */

/********************************************************************/
/********************CONFIGURAÇÕES DE INICIAIS ********************/
/********************************************************************/
//bootstrap();

#if (isset($_SERVER['HTTP_HOST']) && in_array($_SERVER['SERVER_ADDR'], array('::1', '127.0.0.1')) || $_SERVER['HTTP_HOST'] == 'mapas.dev:8080') {
$isServerLocal = isset($_SERVER['REMOTE_ADDR']) && preg_match('/^(127.0.0.1|::1)/', $_SERVER['REMOTE_ADDR']) || $_SERVER['HTTP_HOST'] == 'mapas.dev:8080';
/********************************************************************/
/********CONFIGURAR NO MODO DESENVOLVIMENTO OU PRODUÇÃO  ************/
/********************************************************************/
if ($isServerLocal) {

    displayAllErrors();

    # URL BASE
    $caminho_sistema = '';


} else {

    displayAllErrors();

    # URL BASE - Em alguns casos, o $_SERVER['DOCUMENT_ROOT'] retornar o PATH de acordo com a configuração do apache.
    # Nesses casos completa-se o path com essa variável personalizada
    $caminho_sistema = '/';
}

/********************************************************************/
/**************** TRATAMENTO DE CONSTANTES **************************/
/********************************************************************/
# DIRETÓRIO(UNIX) BASE / PATH absoluto do sistema
$diretorio_root = $_SERVER['DOCUMENT_ROOT'] . "/{$caminho_sistema}";

if (file_exists($diretorio_root)) {

    $url_base = "http://{$_SERVER['HTTP_HOST']}/{$caminho_sistema}";

    define('CAMINHO_SITE_ROOT', "http://{$_SERVER['HTTP_HOST']}/{$caminho_sistema}");

    define('CAMINHO_SITE', "http://{$_SERVER['HTTP_HOST']}/{$caminho_sistema}");

    /*CONTANTES DE CAMINHOS ABSOLUTOS*/

    // Retorna exemplo : /var/www/sites/inovuerj/
    define('CAMINHO_ROOT_DIR', $diretorio_root);


// Retorna exemplo : /var/www/sites/inovuerj/app.webroot/
    define('CAMINHO_WEBROOT_DIR', CAMINHO_ROOT_DIR . "app.webroot/");

// Retorna exemplo : http://127.0.0.1:8000/
    define('CAMINHO_ROOT', $diretorio_root);

// Retorna exemplo : http://127.0.0.1:8000/app.webroot/
    define('CAMINHO_WEBROOT', CAMINHO_SITE_ROOT . "app.webroot/");

    define('CAMINHO_APP', $_SERVER['DOCUMENT_ROOT'] . "/{$caminho_sistema}");

    define('CAMINHO_ADMIN', CAMINHO_SITE_ROOT . "admin/");

    define('CAMINHO_VIEW', CAMINHO_ROOT . 'views/');

    define('CAMINHO_CONTROLLER', CAMINHO_ROOT . 'controllers/');

}


/********************************************************************/
/**************** CONFIGURAÇÕES DE BANCO ***************************/
/********************************************************************/
$banco = iniciarBanco($isServerLocal);


/* Bloco de Inicialização do sistema*/
function bootstrap()
{
    # Force Codifications
    header('Content-Type: text/html; charset=utf-8');
    //header("Access-Control-Allow-Origin: *");
    //mb_internal_encoding('UTF-8');
    //mb_http_output('UTF-8');


# Configurando para data/hora mais prox.
    date_default_timezone_set('America/Sao_Paulo');
    $base = preg_replace('/[\w-]+.(php|htm|html|js|css|png|jpg|gif)$/', '', $_SERVER['PHP_SELF']);


    ini_set('display_errors', 'on');
    error_reporting(E_ALL);

    /*Incluir lib password_hash para versões php anteriores a 5.5 */
    /*Compatibility with the password_* functions that ship with PHP 5.5*/
    /*Fonte:https://github.com/ircmaxell/password_compat*/
    if ((int)substr(phpversion(), 0, 1) > 4 && (int)substr(phpversion(), 2, 1) < 5) {
//        require_once "password.php";
    }

}

/**
 * Retorna o NOME do banco [ LOCAL | REMOTO | ETC ]
 * @param $isServerLocal
 * @return string
 */
function iniciarBanco($isServerLocal)
{

    /** Qual arquivo ini chamar **/
    $banco = ($isServerLocal) ? 'my_local_database' : 'my_prod_database';

    /*Testar conexão com o banco */
    $conn = testConnection($banco) ? true : die('banco off');
    return $banco;
}

/**
 * <b>Function</b> que Testa se banco está conectado
 * @param $banco
 * @return bool
 */
function testConnection($banco)
{

    try {
        return \Inovuerj\ADO\TConnection::open($banco);

    } catch (Exception $exception) {
        echo 'Erro de Conexão com o banco de dados : <hr><strong>' . $exception->getMessage() . '</strong>';
        return false;
    }

}

/**
 *  Ativa errors na tela do navegador
 */
function displayAllErrors()
{
    // Display de errors
    ini_set('display_errors', '1');
    error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
    error_reporting(E_ALL);
}

# Debug
function ecoarDados($arg)
{
    print "<pre style='background-color:#38a8e1'>";
    print "<hr/> Print_r";
    print_r($arg);
    var_dump($arg);
    print "</pre>";
}

/**
 * @return string message
 */
function getFlashMessage()
{
    if (isset($_SESSION['flash_message'])):
        $msg = $_SESSION['flash_message'];
        unset($_SESSION['flash_message']);
        return $msg;
    endif;

}

function setFlashMessage($message)
{
    $_SESSION['flash_message'] = $message;
}


function encodeToIso($string)
{

//    return mb_convert_encoding($string, "ISO-8859-1", mb_detect_encoding($string, "UTF-8, ISO-8859-1, ISO-8859-15", true)) || utf8_decode($string);
    return utf8_decode($string);
}

function array_value_recursive($key, array $arr)
{
    $val = array();
    array_walk_recursive($arr, function ($v, $k) use ($key, &$val) {
        if ($k == $key) array_push($val, $v);
    });
    return count($val) > 1 ? $val : array_pop($val);
}

function getUrl()
{
    return parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
}
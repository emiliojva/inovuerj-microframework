<?php
/**
 * Created by PhpStorm.
 * User: emili
 * Date: 02/02/2019
 * Time: 23:01
 */

/***
 *  MICRO FRAMEWORK INOVUERJ - INSPIRADO NO ESTUDO https://github.com/schoolofnetcom/php-do-jeito-certo-criando-microframework
 */
require __DIR__ . '/../vendor/autoload.php';

require __DIR__ . '/../App/Config/config.php';

$app = new Inovuerj\App;

$app->setRender(new \Inovuerj\Renderer\PHPRenderer());

// Arquivos de rotas
require_once __DIR__ . '/../App/config/routes.php';

$app->run();


<?php
/**
 * Arquivos de Rotas
 * User: emili
 * Date: 02/02/2019
 * Time: 21:34
 */


$app->get('/?', 'IndexController@index');


/**Exemplos de rotas com controles **/
//$app->get('/retornarUnidadesPorInstituicao/{instituicao_id:([0-9]+)}', 'InstituicaoController@retornarUnidadesPorInstituicao');
//$app->get('/mapa/retornarCaminhoCidades', 'MapaController@retornarCaminhoCidades');
//$app->get('/visualizarPortfolios/{unidade_id:([0-9]+)}/?{categoria_id:([0-9]+)}?', 'PortfolioController@visualizarPortfolios');

/**Exemplos de rotas com closures**/
//$router->get('/hello/{id:[a-zA-Z]}/{tipo:[0-9]}' , function (){
//$app->get('/hello/{name:([a-zA-Z]+)}', function ($params) {
//    var_dump($params);
//    return 'Hello World,' . $params[1];
//});


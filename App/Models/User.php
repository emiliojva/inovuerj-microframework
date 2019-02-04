<?php
/**
 * Created by PhpStorm.
 * User: emilio
 * Date: 23/11/15
 * Time: 16:52
 */

namespace App\Models;

use Inovuerj\ADO\TCriteria;
use Inovuerj\ADO\TFilter;
use Inovuerj\ADO\TRecord;
use Inovuerj\ADO\TRepository;

class User extends TRecord
{
    const TABLENAME = 'tbl_usuario';

    /**
     * @return string
     */
    public function __toString()
    {
        return "Hello New User";
    }

}










//public function getInstituicao()
//{
//    return new \App\Models\Instituicao($this->instituicao_id);
//
//}
//
//
//public function retornarUnidades()
//{
//
//    $results = array();
//    $criterio = null;
//
//    if (!is_null($this->instituicao_id)) {
//
//        $criterio = new TCriteria();
//        $criterio->add((new TFilter('instituicao_id', '=', $this->instituicao_id)));
//
//    }
//
//    $results = $this->getList($criterio);
//
//    return $results;
//
//}
//
//function getUnidadesPorStringMunicipio($municipio = null)
//{
//
//    $results = array();
//
//    $queryString = addslashes($municipio);
//
//    $criterio = new \TCriteria();
//    $criterio->add((new \TFilter('endereco_municipio', 'like', trim($queryString))));
//    $criterio->setProperty('order', 'descricao');
//
//    $results = $this->getList($criterio);
//
//    return $results;
//
//}


//function retornarMunicipios()
//{
//
//    $results = array();
//
//    $criterio = new TCriteria();
////        $criterio->setProperty('order','descricao');
//    $criterio->setProperty('group', 'endereco_municipio');
//
//    $repository = new TRepository(__CLASS__);
//
//    $columns = "instituicao_id, endereco_municipio";
//
//    $results = $repository->load($criterio, $columns);
//
//    $results = array_filter($results, function ($value) {
//        return $value->endereco_municipio !== '' && !is_null($value->endereco_municipio);
//    });
//
////        \Utilidades::mostrar($results);
//
//    return $results;
//
//}


// $palavrasChave : 'tecnologia de informação'
//function retornarMunicipiosPorPalavrasChave($palavrasChave)
//{
//
////        $keys = explode(" ",$palavrasChave);
//
////        $sql = "SELECT * FROM links WHERE name LIKE '%$palavrasChave%' ";
//
////        foreach($keys as $k){
////            $sql .= " OR name LIKE '%$k%' ";
////        }
//
//
//    $obj_portfolio = new Portfolio();
//    $results_portfolio = $obj_portfolio->getPortfoliosByKeyWords($palavrasChave);
//
//
////        \Utilidades::mostrar($results_portfolio);
//
//
//    $results = array();
//    $array_unidades = array();
//    foreach ($results_portfolio as $active_portfolio) {
//
//        $array_unidades[$active_portfolio->getUnidade()->id] = $active_portfolio->getUnidade();
//
//    }
//
////        \Utilidades::mostrar($array_unidades);
//
//    $results = array_filter($array_unidades, function ($value) {
//        return $value->endereco_municipio !== '' && !is_null($value->endereco_municipio);
//    });
//
//
//    return $results;
//
//}
//
//
//public function retornaEnderecoFormatado()
//{
//
//
//    $dados = $this->toArray();
//
//    $endereco_rua = isset($dados['endereco_rua']) ? "{$dados['endereco_rua']}" : "";
//    $endereco_numero = isset($dados['endereco_numero']) ? ", {$dados['endereco_numero']}" : "";
//    $endereco_bairro = isset($dados['endereco_bairro']) ? " - {$dados['endereco_bairro']}" : "";
//    $endereco_municipio = isset($dados['endereco_municipio']) ? ", {$dados['endereco_municipio']}" : "";
//    $endereco_uf = isset($dados['endereco_uf']) ? " - {$dados['endereco_uf']}" : "";
//    $endereco_cep = isset($dados['endereco_cep']) ? ", {$dados['endereco_cep']}" : "";
//    $endereco_complemento = isset($dados['endereco_complemento']) ? " - {$dados['endereco_complemento']}" : "";
//
////        echo "{$instituicao}{$endereco_rua}{$endereco_numero}{$endereco_bairro}{$endereco_municipio}";
//
//    return "{$endereco_rua}{$endereco_numero}{$endereco_complemento}{$endereco_bairro}{$endereco_municipio}{$endereco_uf}{$endereco_cep}";
//
//
//}
//
//public function getPortfolios(){
//
//    $active_portfolio = new Portfolio();
//
//    $portifolios = $active_portfolio->getPorfolios($this->unidade_id);
//
//    return $portifolios->toArray();
//}


//    public function getUnidadesAdministrativas()
//    {
//        $criterio = new \TCriteria();
//        $criterio->add(new \TFilter('exibir_no_admin', '=', 1));
//        $criterio->setProperty('order', 'descricao');
//
//        return $this->getList($criterio);
//
//    }
//
//
//    public function getUnidadesFilhas()
//    {
//        $criterio = new \TCriteria();
//        $criterio->add(new \TFilter('unidade_pai', '=', $this->id));
//        $criterio->add(new \TFilter('id', '<>', $this->id));
//        return $this->getList($criterio, false, ['descricao']);
//
//    }

<?php
/**
 * Created by PhpStorm.
 * User: emili
 * Date: 03/02/2019
 * Time: 01:44
 */

namespace App\Controllers;

use App\Models\User;
use Inovuerj\Controller\Action;

class IndexController extends Action
{

    public function index()
    {

        $this->view->cars = array("Mustang", "Ferrari", (new User())->__toString());

        return $this->render("index");
    }

}
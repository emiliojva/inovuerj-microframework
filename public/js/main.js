/**
 * Created by emilio on 03/09/16
 */

/**
 * Created by Emílio Vieira on 08/06/2017.
 */
/**
 * Created by emilio on 03/09/16
 * Arranque JS do app Sectids.
 * Scripts comum a todos as ambientes do sistema.
 *
 */
$j = jQuery.noConflict();


/***************************************************************/
// (function(){})();
// window.onload = function () {};
/** Carregamento do DOM - Modelo de Objetos do Documento**/
/**************************************************************/
/* DOM CARREGADO */
/* Fim Scripts  */
/***********-**************/
/** Scripts de arranque **/
/***********-**************/
$j(document).ready(function () {

    /*Diretório BASE do APP*/
    window.URL_BASE = $j('#url_base').val();
    var pagina_requisitada = $j('#pagina_requisitada').val();
    var browerAgent = getBrowser();


    // Limpar sessionStorage com opcoes das categorias
    sessionStorage.clear();

    // redirecting safari page
    if (pagina_requisitada == "home") {

        if (browerAgent == "safari") {

            window.location.href = URL_BASE + '/maine_apple';

        }

    }


    if ($j('pagina_requisida').val() != 'home') {
        $j('#loader-wrapper').hide(1);
    }



    /*********/
    /*Plugins*/
    /********/

    //$j(".rslides").responsiveSlides({
    //    auto: true,             // Boolean: Animate automatically, true or false
    //    speed: 500,             // Integer: Speed of the transition, in milliseconds
    //    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    //    pager: false,           // Boolean: Show pager, true or false
    //    nav: false,             // Boolean: Show navigation, true or false
    //    random: false,          // Boolean: Randomize the order of the slides, true or false
    //    pause: false,           // Boolean: Pause on hover, true or false
    //    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    //    prevText: "Previous",   // String: Text for the "previous" button
    //    nextText: "Next",       // String: Text for the "next" button
    //    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    //    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    //    manualControls: "",     // Selector: Declare custom pager navigation
    //    namespace: "rslides",   // String: Change the default namespace used
    //    before: function () {
    //    },   // Function: Before callback
    //    after: function () {
    //    }     // Function: After callback
    //});

    /*Resposive Slides*/
    //$j('.rslides_portfolio').responsiveSlides({
    //    auto: true,             // Boolean: Animate automatically, true or false
    //    speed: 750,             // Integer: Speed of the transition, in milliseconds
    //    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
    //    pager: true,           // Boolean: Show pager, true or false
    //    nav: false,             // Boolean: Show navigation, true or false
    //    random: false,          // Boolean: Randomize the order of the slides, true or false
    //    pause: false,           // Boolean: Pause on hover, true or false
    //    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    //    prevText: "Previous",   // String: Text for the "previous" button
    //    nextText: "Next",       // String: Text for the "next" button
    //    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    //    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    //    manualControls: "",     // Selector: Declare custom pager navigation
    //    namespace: "rslides",   // String: Change the default namespace used
    //    before: function () {
    //    },   // Function: Before callback
    //    after: function () {
    //    }     // Function: After callback
    //});


    /* Quando o usuário realmente visualizar a página carregada.*/
    Visibility.onVisible(function () {

        var timer = 400;

        setTimeout(function () {
            $j('.introducao h1').addClass("animated fadeInDown");
        }, timer);

        setTimeout(function () {
            $j('.introducao blockquote').addClass("animated fadeInDown");
        }, timer += 400);

        setTimeout(function () {
            $j('.introducao .btn').addClass("animated fadeInDown");
        }, timer += 400);

        setTimeout(function () {
            $j('.animar-interno').addClass("animated fadeInDown");
        }, timer += 400);

        setTimeout(function () {
            $j('.animar').addClass("animated fadeInDown");
        }, timer += 400);

        /*, */
        /*.produtos .produtos_lista*/


    });




    // ScrollBar Styling Plugin Jquery
    $j(".content").mCustomScrollbar({
        autoHideScrollbar: true,
        scrollButtons: {enable: true},
        theme: "light-3"
    });

    /***********-**************/
    /** Scripts de arranque **/
    /***********-**************/
    $j('.mdl-tooltip').addClass('is-active');
    //componentHandler.upgradeElement('MaterialTooltip','mdl-tooltip');
    componentHandler.upgradeDom('MaterialTooltip', 'mdl-tooltip');



});

/*********** *****************/
/** Ao Carregar toda janela **/
/*********** *****************/
$j(window)
    .load(function () {

        /*Reload DOM Material Design*/
        componentHandler.upgradeDom();


    })
    .resize(function () {
        // $j('#loading')
        //     .height($j(window).height())
        //     .width($j(window).width());
    });

/*********** **************/
/**********Funções*********/
/*********** **************/

/****************************************************/
/****************************************************/
/****************************************************/


/*************************************************************************************/
/*********************MATERIAL DESIGN LITE - FUNCTIONS RELOAD DOM*********************/
/*************************************************************************************/
function materializeControls() {
    materializeTextInputs();
    materializeSelects();
    materializeRadioButtons();
    materializeCheckboxes();
    //materializeTables();
    materializeLists();
    materializeButtons();
}

function materializeTextInputs() {
    var label, parentEl;
    document.querySelectorAll('input[type="text"], textarea').forEach(function (control) {
        parentEl = control.parentElement;
        control.classList.add('mdl-textfield__input');
        if (parentEl.tagName !== 'DIV') {
            return;
        }
        parentEl.classList.add('mdl-textfield', 'mdl-js-textfield');
        label = parentEl.querySelector('label');
        if (label) {
            label.setAttribute('for', control.id || control.name)
            label.classList.add('mdl-textfield__label');
        }
    });
}

function materializeSelects() {
    var label, parentEl;
    document.querySelectorAll('select').forEach(function (control) {
        parentEl = control.parentElement;
        control.classList.add('mdl-selectfield__select');
        if (parentEl.tagName !== 'DIV') {
            return;
        }
        parentEl.classList.add('mdl-selectfield', 'mdl-js-selectfield');
        label = parentEl.querySelector('label');
        if (label) {
            label.setAttribute('for', control.id || control.name)
            label.classList.add('mdl-selectfield__label');
        }
    });
}

function materializeRadioButtons() {
    var parentEl;
    document.querySelectorAll('input[type="radio"]').forEach(function (control) {
        parentEl = control.parentElement;
        control.classList.add('mdl-radio__button');
        if (parentEl.tagName == "LABEL") {
            parentEl.setAttribute('for', control.id || control.name)
            parentEl.classList.add('mdl-radio', 'mdl-js-radio', 'mdl-js-ripple-effect');
        }
    });
}

function materializeCheckboxes() {
    var parentEl;
    document.querySelectorAll('input[type="checkbox"]').forEach(function (control) {
        parentEl = control.parentElement;
        control.classList.add('mdl-checkbox__input');
        if (parentEl.tagName == "LABEL") {
            parentEl.setAttribute('for', control.id || control.name)
            parentEl.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
        }
    });
}

function materializeButtons() {
    document.querySelectorAll('button').forEach(function (control) {
        control.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'mdl-js-ripple-effect', 'mdl-button--colored');
    });
}

function materializeTables() {
    document.querySelectorAll('table').forEach(function (table) {
        table.classList.add('mdl-data-table', 'mdl-js-data-table');
        table.querySelectorAll('th,td').forEach(function (cell) {
            cell.classList.add('mdl-data-table__cell--non-numeric');
        });
    });
}

function materializeLists() {
    document.querySelectorAll('ul').forEach(function (ulEl) {
        ulEl.classList.add('mdl-list');
        ulEl.querySelectorAll('li').forEach(function (liEl) {
            liEl.classList.add('mdl-list__item');
            liEl.innerHTML = "<span class='mdl-list__item-primary-content'>" +
                "<i class='material-icons mdl-list__item-icon'>home</i>" +
                liEl.innerText + "</span>";
        });
    });
}


/******************/
/*API CEP CORREIOS*/
/******************/
function limpa_formulario_cep() {
    //Limpa valores do formul�rio de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");

}
function meu_callback(conteudo) {

    if (!("erro" in conteudo)) {


        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);

        $j('#linha_numero').slideDown(1000);
        $j('#numero').removeAttr('disabled');


    } //end if.
    else {
        //CEP n�o Encontrado.
        limpa_formulario_cep();
        alert("CEP n�o encontrado.");
    }
}
function pesquisacep(valor) {

    //Nova vari�vel "cep" somente com d�gitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Express�o regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //$j('#sample3').val('');
            //$j('#sample3').parent().removeClass('is-dirty')


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'http://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conte�do.
            document.body.appendChild(script);


        } //end if.
        else {
            //cep � inv�lido.
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formul�rio.
        limpa_formulario_cep();
    }
};


/* Função Improvisada para pegar tamanho de propriedades de um objec*/
function size(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

/*Adiciona um marcador em um array/lista com infowindow e evento anexado ao click*/




// Checkar se é uma função
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}


// detecting browser safari
function getBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            console.log("chrome", ua);
            return "chrome";
        } else {
            console.log("safari", ua);
            return "safari"
        }
    }

}
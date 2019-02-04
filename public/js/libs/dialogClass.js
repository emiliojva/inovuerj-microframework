/**
 * Created by Emílio Vieira on 16/08/2017.
 */
function DialogCustom(id, title, content) {


    // Memoização de Instancias de Dialogs
    if (!DialogCustom.cache) DialogCustom.cache = {};

    if (DialogCustom.cache[id] != null) {

        console.log(DialogCustom.cache[id]);
        //DialogCustom.cache[id]dialogElementDOM
        return DialogCustom.cache[id];
    }

    // verificando se já existe dialog com mesmo id no body
    var dialogElementDOM = document.getElementById(id);

    // remover dialog , se tentar criar com mesmo objeto com mesmo id
    if (dialogElementDOM) {

        dialogElementDOM.parentNode.removeChild(dialogElementDOM);

        //document.body.removeChild(dialogElementDOM);
    }

    // Criando <dialog>
    var dialog = document.createElement('dialog');

    // Registrando dialog em browsers antigos
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    // Populando objeto
    this.id = id;
    this.title = title !== undefined ? title : "";
    this.content = content !== undefined ? content : "";

    // atributos padrão
    dialog.setAttribute('id', this.id);
    dialog.setAttribute('class', 'mdl-dialog');

    //this.setWidth('40%');
    //dialog.style.minWidth = ;
    //dialog.style.width = 'auto';

    dialog.appendChild(this.createTitleBlock());
    dialog.appendChild(this.createContentBlock());
    dialog.appendChild(this.createActionsBlock());

    // alocar dialog no final do body
    document.body.appendChild(dialog);

    // atualizar elemento do mdl, inseridos após tela renderizada.
    componentHandler.upgradeDom();


    //console.log(this);
    //console.log('asset this constructor', this);

    // methods
    this.getDialog = function () {
        return dialog;
    };


    /**
     * Permite inserir dialog em outro (MSG BOX)
     * @param parent
     */
    this.setParent = function (parent) {

        // Remove do pai anterior
        //dialog.parentNode.removeChild(dialog);

        console.log(parent)

        // deixo no body se não passar param
        if (parent === undefined) {

            document.body.appendChild(dialog);

        } else {

            // Novo Dialog Pai

            var dialogParent = parent.getDialog();

            console.log('dialogParent', dialogParent)

            dialogParent.appendChild(dialog);

        }


    };


    // Armazena novo objeto em cache
    DialogCustom.cache[this.id] = this;


}

/**
 * Set style mode inline. Ex: max-width: 65%;padding: 0px;width: 60%;
 * @param inlineStyle
 */
DialogCustom.prototype.setStyle = function (inlineStyle) {
    this.getDialog().setAttribute('style', inlineStyle);
}

DialogCustom.prototype.setModeMSG = function (bool) {

    if (bool === true) {

        var dialog = this.getDialog();
        dialog.classList.remove('mdl-dialog');
        dialog.classList.add('dialogMSGBOX');
        componentHandler.upgradeDom();

    }

}

DialogCustom.prototype.setView = function (html) {
    var dialog = this.getDialog();

    console.log(dialog);

    dialog.innerHTML = html;
    componentHandler.upgradeDom();
}


DialogCustom.prototype.createTitleBlock = function () {

    var DOMTitle = document.createElement('div');

    DOMTitle.setAttribute('class', 'mdl-dialog__title');

    DOMTitle.innerHTML = this.title;

    return DOMTitle;

}

DialogCustom.prototype.createContentBlock = function () {

    var DOMContent = document.createElement('div');

    DOMContent.setAttribute('class', 'mdl-dialog__content');

    var content = this.content;

    DOMContent.innerHTML = '<div class="mdl-grid"><div class="mdl-cell mdl-cell--12-col">' + content + '</div></div>';

    return DOMContent;
}

DialogCustom.prototype.createActionsBlock = function () {

    var DOMAction = document.createElement('div');
    var dialogInstance = this;

    DOMAction.setAttribute('class', 'mdl-dialog__actions');

    DOMAction.innerHTML = '<button type="button" class="mdl-button close">Fechar</button>';


    DOMAction.querySelector('.close')
        .addEventListener('click', function () {
            dialogInstance.getDialog().close();
        });


    return DOMAction;

}

DialogCustom.prototype.setContent = function (contentHTML) {
    this.getDialog().querySelector('.mdl-dialog__content').innerHTML = contentHTML;
}

DialogCustom.prototype.setTitle = function (contentTitle) {
    console.log(this.getDialog());


    this.getDialog().querySelector('.mdl-dialog__title').innerHTML = contentTitle;
}

DialogCustom.prototype.show = function () {

    var dialog = this.getDialog();

    dialog.showModal();

};

DialogCustom.prototype.close = function () {


    try {
        var dialog = this.getDialog();

        dialog.close();
    } catch (e) {
        console.log(e + " - Dialog não estava aberta")
    }
    ;


};

DialogCustom.prototype.setWidth = function (width) {

    var dialog = this.getDialog();
    dialog.style.width = width;

};

DialogCustom.prototype.addClass = function (className) {

    if (className != undefined) {
        var dialog = this.getDialog();
        dialog.setAttribute('class', dialog.getAttribute('class') + ' ' + className);
    }


};

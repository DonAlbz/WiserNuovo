function selectOrdinamento(stringa)
{
    if (stringa == "nome")
    {
        $("#ordNome").attr("selected", "true");
    }
    if (stringa == "utilizziMax")
    {
        $("#ordUsiMax").attr("selected", "true");
    }
    if (stringa == "utilizziMin")
    {
        $("#ordUsiMin").attr("selected", "true");
    }
    if (stringa == "votoMax")
    {
        $("#ordRatMax").attr("selected", "true");
    }
    if (stringa == "votoMin")
    {
        $("#ordRatMin").attr("selected", "true");
    }
}

function selectTag(stringa)
{
    
    var $tag = "#" + stringa.trim();
    var $ciao;
    $(".a-button").each(function () {
        $ciao = $(this).text().trim();
        if ($ciao === $tag) {
            
            $(this).addClass("a-buttonSel");
        }

    });
}
function selectOrd(filtro, tag, search)
{
    if ($("#sel1").val() == $("#ordUsiMax").val())
    {
        window.alert(key);
        //window.location.replace("ActionServlet?op=getList&filtro = " + filtro + 
        //      "&search=" + search + "&tag="+ tag + "&orderBy =utilizziMax");

    }
}
function confrontaPassword()
{
    var send = true;
    if (($("#username").val() == null) || ($("#username").val() == "") || ($("#username").val() == "null") || ($("#username").val().length > 15))
    {

        send = false;
    }
    if (($("#password").val() == null) || ($("#password").val() == "") || ($("#password").val() == "null"))
    {

        send = false;
    }
    if (($("#password_confirm").val() == null) || ($("#password_confirm").val() == "") || ($("#password_confirm").val() == "null"))
    {

        send = false;
    }
    if (send == true)
    {
        if ($("#form-user").hasClass("has-error"))
        {

            send = false;
        }
    }
    if (send == true)
    {
        if (($("#password").val() !== $("#password_confirm").val()) || (($("#password").val().length <= 3)))
        {
            $("#form-pwd").addClass("has-error");
            $("#form-pwd-confirm").addClass("has-error");
            $("#pwd-confirm-text").html("This is not the same password");
            send = false;
        }
        else
        {
            $("#pwd-confirm-text").html("Password confirmed");
            $("#form-pwd").addClass("has-success");
            $("#form-pwd-confirm").addClass("has-success");
            $("#form-pwd").removeClass("has-error");
            $("#form-pwd-confirm").removeClass("has-error");
        }
    }

    if (send == true)
    {
        $("#daAbilitare").removeClass("disabled");
    }
    else
    {
        $("#daAbilitare").addClass("disabled");
    }
}

$('#centra').on('keyup keypress', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        e.preventDefault();
        return false;
    }
});

function selezionaCategoriaUt(filtro) {
    var $filter = filtro.trim();
    var $ciao;
    $(".categorie").each(function () {
        $ciao = $(this).text().trim();
        if ($ciao === $filter) {

            $(this).css("background", "#286090");
            $(this).css("color", "white");

        }

    });
}
;

function selectMash(nomeMU, idMU)
{

    if ((nomeMU != null) && (nomeMU != "") && (nomeMU != "null"))
    {

        modificaMashUp(nomeMU, idMU);
    }
    else
    {

        $("#idMash").val(-1);
        $("#nomeMash").val("null");

    }
}

function doHref(href)
{
    var nome = $("#nomeMash").val();
    var id = $("#idMash").val();
    href = href + "&idMash=" + id + "&nomeMash=" + nome;
    var toRet = href.toString().replace(/\|\!/gi, "\'");

    window.location.replace(toRet);
}



function selezionaCategoria(filtro) {
    var $filter = filtro.trim();
    var $ciao;
    $(".categorie").each(function () {
        $ciao = $(this).text().trim();
        if ($ciao === $filter) {
            
            $(this).addClass("categoriaSel");
        }

    });
    $(".a-button").each(function () {
        $ciao = $(this).text().trim();
        if ($ciao === $filter) {
            
            $(this).addClass("a-buttonSel");
        }

    });
}
;

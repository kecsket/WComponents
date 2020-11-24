export function setCaretPosition(element, pos)
{
    alert('Vagyok');
    //var ctrl = document.getElementById(inputId);

    if (element.setSelectionRange)
    {
        element.focus();
        element.setSelectionRange(pos, pos);

    }
    else if (ctrl.createTextRange)
    {
        var range = element.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
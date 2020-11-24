export function setCaretPosition(element, pos)
{
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
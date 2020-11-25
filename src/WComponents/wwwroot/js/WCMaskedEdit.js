export function setCaretPosition(element, pos)
{
    if (element.setSelectionRange)
    {
        element.focus();
        element.setSelectionRange(pos, pos);
    }
    console.log('Set caret position: ', pos);
}

export function getCaretPosition(element)
{
    var pos = element.selectionStart;
    var pos1 = element.selectionEnd;
    console.log('Get caret position: ', pos,pos1);
    return pos;
}
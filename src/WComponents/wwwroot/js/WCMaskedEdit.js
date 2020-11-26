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

export function doGetCaretPosition(oField) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return (iCaretPos);
}


/*
**  Sets the caret (cursor) position of the specified text field.
**  Valid positions are 0-oField.length.
*/
export function doSetCaretPosition(oField, iCaretPos) {

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // Create empty selection range
        var oSel = document.selection.createRange();

        // Move selection start and end to 0 position
        oSel.moveStart('character', -oField.value.length);

        // Move selection start and end to desired position
        oSel.moveStart('character', iCaretPos);
        oSel.moveEnd('character', 0);
        oSel.select();
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0') {
        oField.selectionStart = iCaretPos;
        oField.selectionEnd = iCaretPos;
        oField.focus();
    }
}
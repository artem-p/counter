//$("#counter").fitText();
var counter = $("#counter");
var count = counter.html();
var  = count.length;
setFontSize(nSymbol);             


function setFontnSymbolSize(nSymbol) {
    //  Изменяем размер шрифта при изменении количества символов
    var symbolSize = ['8em', '8em', '8em', '6em', '6em', '5em', '4em', '3em', '2em', '1em'];
    //  Размер символов. Индекс массива - количество символов. С увеличением количества уменьшается размер
    var defaultSize = '1em';

    if(0<nSymbol && nSymbol <=symbolSize.length) {
        counter.css("font-size", symbolSize[nSymbol-1]);
    } else {
        counter.css("font-size", defaultSize);
    }

}

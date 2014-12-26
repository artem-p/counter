//$("#counter").fitText();
var m_counter = $("#counter");
var m_count = 0;
var btnIncrease = $("#increaseButton");
var btnClear = $("#btnClear");

updateCounter();

btnIncrease.click(increaseCounter);
btnClear.click(clearCounter)

function updateCounter() {
    var nSymbol = (m_count+"").length;
    setFontSize(nSymbol);
    m_counter.html(m_count);
}

function setFontSize(nSymbol) {
    //  Изменяем размер шрифта при изменении количества символов
    var symbolSize = ['8em', '8em', '8em', '6em', '6em', '5em', '4em', '3em', '2em', '1em'];
    //  Размер символов. Индекс массива - количество символов. С увеличением количества уменьшается размер
    var defaultSize = '1em';

    if(0<nSymbol && nSymbol <=symbolSize.length) {
        m_counter.css("font-size", symbolSize[nSymbol-1]);
    } else {
        m_counter.css("font-size", defaultSize);
    }

}

function increaseCounter() {
    //  Увеличиваем счетчик на 1
    m_count++;
    updateCounter();
}

function clearCounter() {
    //  Сбрасываем счетчик на 0
    m_count = 0;
    updateCounter();
}
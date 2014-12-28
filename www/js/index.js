//$("#counter").fitText();
var m_counter = $("#counter");
var m_count = 0;
var btnIncrease = $("#increaseButton");
var btnDecrease = $("#btnDecrease");
var btnClear = $("#btnClear");

btnIncrease.click(increaseCounter);
btnDecrease.click(decreaseCounter);
btnClear.click(clearCounter)

updateCounter();



function updateCounter() {
    var nSymbol = (m_count+"").length;
    setFontSize(nSymbol);
    m_counter.html(m_count);
}

function setFontSize(nSymbol) {
    //  Изменяем размер шрифта при изменении количества символов
    var symbolSize = ['14em', '14em', '12em', '8em', '7em', '6em', '5em', '4em', '3em', '2em'];
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

function decreaseCounter() {
    //  Уменьшаем счетчик на 1
    m_count--;
    updateCounter();
}

function clearCounter() {
    //  Сбрасываем счетчик на 0
    m_count = 0;
    updateCounter();
}
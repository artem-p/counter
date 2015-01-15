//$("#counter").fitText();
var m_counter = $("#counter");
var m_count = 0;
var RU_LANG = 'ru';
var EN_LANG = 'en';


var btnIncrease = $("#increaseButton");
var btnDecrease = $("#btnDecrease");
var btnClear = $("#btnClear");
var mainHeader = $("#mainHeader");


btnIncrease.click(increaseCounter);
btnDecrease.click(decreaseCounter);
btnClear.click(clearCounter);


//  Устанавливаем значение счетчика, если оно сохранялось ранее
if(localStorage.count) m_count = localStorage.count;

//  Определяем язык
var sLang = window.navigator.language;
if(sLang.indexOf(RU_LANG) != -1 ) {
    g_text = RU_TEXT;
} else {
    g_text = EN_TEXT;
}

//  Устанавливаем текст
mainHeader.text(g_text.header);
btnClear.text(g_text.clear);

updateCounter();



function updateCounter() {
    var nSymbol = (m_count+"").length;
    setFontSize(nSymbol);
    m_counter.html(m_count);
    localStorage.count = m_count;
}

function setFontSize(nSymbol) {
    //  Изменяем размер шрифта при изменении количества символов
    var symbolSize = ['14em', '14em', '11em', '7em', '6em', '5em', '4em', '3em', '2em', '1em'];
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
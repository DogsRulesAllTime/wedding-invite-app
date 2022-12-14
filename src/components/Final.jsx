import React from 'react'
import "./final.css"
export default function Final({sex, final}) {
  const imgClass = sex? "finalImgVictor" : "finalImgAlina"
  const blockStatus = final ? "show" : "hide"
  return (
    <div className={`finalBlock ${blockStatus}`}>
        <div className={imgClass}>
            {/* <img src="../img/1.jpg" alt="12" /> */}
        </div>
        <div className="finalTxt">
        Класс! Мы очень рады! 
Теперь тебе доступна информация, как и где всё будет происходить <br/> 
<b>Место встречи: </b> <br/>
Московская обл., Одинцовский район, село Ромашково ул. Раздоровская д.45.<br/>
<iframe  className="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7881f296287cea350e296c8cee43cbaeb7af2ba276ef2461bf00981aaf8b6c4b&amp;source=constructor" width="500" height="400" frameBorder="0" title="mapFrame"></iframe>

{/* (яндекс карту)  */}
<b>План праздника:</b > <br/>
<div className='time'> 
<b>17:00</b> – время сбора гостей <br />
<b>17:30</b> – торжественная церемония <br />
<b>18:00</b> – начало свадебно-пляжной вечеринки <br />
</div>
<b>Дресс-код:</b> <br /> Доставай с дальних полок свои самые яркие, самые любимые летние вещи. Представь, что ты в Крыму гуляешь вечером по набережной Алушты.<br/> В свой летний костюмчик и удобную обувь ты сможешь переодеться уже на месте проведения праздника <br />
<b>Подарки:</b> <br />Пожалуйста, не дарите нам цветы, мы не успеем насладиться их красотой. Вместо этого мы будем рады бутылочке вина или баночке ред булла)
Вклад в наше свадебное путешествие станет самым приятным подарком <br />
<b>Готовься… Будет жарко!</b>
        </div>
    </div>
  )
}

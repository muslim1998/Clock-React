import React, { useEffect, useState } from "react"
import './clock.css'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    // Связанное с Dom
    // Запросы отправлять
    // Анимация
    // Делать подписку
    useEffect(() => {
        document.title = 'Clock' //С помощью дома изменили название стр.
    }, [time])
    
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)
        
        return () => {
            clearInterval(intervalID) //Тут мы пишем когда уйдем на другую страницу, чтобы эта функ. умерла
            // если это не сделаем сайт будет долго загружаться
    }
    }, [])
    
    
    
    return <div className="container">
        <div className="meta">
            {/* Выводим какой сегодея день */}
            <div>{time.toLocaleString('ru-Ru', { weekday: 'long' })}</div> 
            
            <div className="month">
                
                    <span>{time.toLocaleDateString('ru-Ru', { day: 'numeric' })}</span>
                    <span>{time.toLocaleDateString('ru-Ru', { month: 'long'})}</span>
                
            </div>
            
        </div>
        {/* Выводим какое сейчас время */}
        <h2>{time.toLocaleTimeString('ru-Ru')}</h2>
        
    </div>
}
export default Clock
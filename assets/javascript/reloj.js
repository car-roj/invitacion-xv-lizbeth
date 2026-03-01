function clock_format(n){
    // Este formato asegura que si el número es menor a 10, se vea como "09" en lugar de "9"
    return n < 10 ? '0' + n : n;
}

function update_Countdown(){
    const seconds = 1000;
    const minutes = 60 * seconds;
    const hours = 60 * minutes;
    const days = 24 * hours;

    const now = new Date().getTime();
    // ACTUALIZADO: 30 de abril de 2026 a las 6:30 PM
    const big_day = new Date("April 30, 2026 18:00:00").getTime();
    
    const diff = big_day - now;

    // Si la fecha ya pasó, ponemos todo en cero
    if (diff < 0) {
        document.querySelector("span#seconds").textContent = "00";
        document.querySelector("span#minutes").textContent = "00";
        document.querySelector("span#hours").textContent = "00";
        document.querySelector("span#days").textContent = "00";
        return;
    }

    document.querySelector("span#seconds").textContent = clock_format(Math.floor((diff % minutes) / seconds));
    document.querySelector("span#minutes").textContent = clock_format(Math.floor((diff % hours) / minutes));
    document.querySelector("span#hours").textContent = clock_format(Math.floor((diff % days) / hours));
    document.querySelector("span#days").textContent = clock_format(Math.floor(diff / days));
}
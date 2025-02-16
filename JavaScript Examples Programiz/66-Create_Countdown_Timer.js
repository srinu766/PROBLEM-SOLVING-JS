let countDownDate = Date.now() + 10 * 60 * 1000; // 10 minutes from now

let x = setInterval(() => {
    let timeLeft = countDownDate - Date.now();

    let minutes = Math.floor(timeLeft / (1000 * 60));
    let seconds = Math.floor((timeLeft / 1000) % 60);

    console.log(`${minutes}m ${seconds}s`);

    if (timeLeft <= 0) {
        clearInterval(x);
        console.log('Countdown Finished');
    }
}, 1000); // Runs every second

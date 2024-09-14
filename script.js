const schedule = [
    { time: '08:05:00', label: 'Breakfast Begin @ 8:05 AM' },
    { time: '08:25:00', label: 'Breakfast End/Period 1 Begin @ 8:25 AM' },
    { time: '09:55:00', label: 'Period 1 End @ 9:55 AM' },
    { time: '09:58:00', label: 'Period 2 Begin @ 9:58 AM' },
    { time: '11:28:00', label: 'Period 2 End @ 11:28 AM' },
    { time: '11:31:00', label: 'Lunch/Advisory Block 1 Begin @ 11:31 AM' },
    { time: '11:59:00', label: 'Lunch/Advisory Block 1 End @ 11:59 AM' },
    { time: '12:02:00', label: 'Lunch/Advisory Block 2 Begin @ 12:02 PM' },
    { time: '12:30:00', label: 'Lunch/Advisory Block 2 End @ 12:30 PM' },
    { time: '12:33:00', label: 'Lunch/Advisory Block 3 Begin @ 12:33 PM' },
    { time: '13:01:00', label: 'Lunch/Advisory Block 3 End @ 1:01 PM' },
    { time: '13:04:00', label: 'Period 6 Begin @ 1:04 PM' },
	{ time: '14:21:00', label: 'Period 6 End @ 2:34 PM' },
    { time: '14:22:00', label: 'Period 7 Begin @ 2:37 PM' },
	{ time: '14:23:00', label: 'Period 6 End @ 2:34 PM' },
    { time: '14:24:00', label: 'Period 7 Begin @ 2:37 PM' },
    { time: '14:25:00', label: 'Period 6 End @ 2:34 PM' },
    { time: '14:26:00', label: 'Period 7 Begin @ 2:37 PM' },
    { time: '09:46:00', label: 'Period 7 End @ 4:07 PM' },
    { time: '09:47:00', label: 'HS Staff Dismissed @ 4:22 PM' }
];

const bellSound = new Audio('bell.mp3');


function playBell() {
    bellSound.play();
}

function checkSchedule() {
    const now = new Date();
    const currentTime = now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2);

	console.log(currentTime);
    // Find the schedule entry that matches the current time
    let period = schedule.find(entry => entry.time == currentTime);
    console.log(period);
    if (period) {
        playBell();
        console.log(period.label); // Log the period label to the console
        document.getElementById('periodLabel').innerText = period.label;
    } else {
        document.getElementById('periodLabel').innerText = "Waiting for schedule...";
    }
}

window.onload = function() {
    // This code runs after the page is fully loaded
    const title = document.getElementById('title');
    const text = title.innerText;
    const colors = ['green', 'orange', 'blue', 'lightcoral'];
    let colorIndex = 0;

    title.innerHTML = text.split('').map(letter => {
        if (letter !== ' ') {
            const color = colors[colorIndex % colors.length];
            colorIndex++;
            return `<span style="color:${color}">${letter}</span>`;
        } else {
            return letter;
        }
    }).join('');

    // Start checking the schedule every 200ms after the page loads
    setInterval(checkSchedule, 200);
};

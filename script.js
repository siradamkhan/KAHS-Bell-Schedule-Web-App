// Schedule with times in UTC
const schedule = [
    { label: "Breakfast Begin @ 8:05 AM", time: "2024-09-13T12:05:00Z" },
    { label: "Breakfast End @ 8:25 AM", time: "2024-09-13T12:25:00Z" },
    { label: "Period 1 Begin @ 9:58 AM", time: "2024-09-13T13:58:00Z" },
    { label: "Period 1 End @ 9:55 AM", time: "2024-09-13T13:55:00Z" },
    { label: "Period 2 Begin @ 11:28 AM", time: "2024-09-13T15:28:00Z" },
    { label: "Period 2 End @ 11:28 AM", time: "2024-09-13T15:28:00Z" },
    { label: "Lunch/Advisory Block 1 Begin @ 11:31 AM", time: "2024-09-13T15:31:00Z" },
    { label: "Lunch/Advisory Block 1 End @ 11:59 AM", time: "2024-09-13T15:59:00Z" },
    { label: "Lunch/Advisory Block 2 Begin @ 12:02 PM", time: "2024-09-13T16:02:00Z" },
    { label: "Lunch/Advisory Block 2 End @ 12:30 PM", time: "2024-09-13T16:30:00Z" },
    { label: "Lunch/Advisory Block 3 Begin @ 12:33 PM", time: "2024-09-13T16:33:00Z" },
    { label: "Lunch/Advisory Block 3 End @ 1:01 PM", time: "2024-09-13T17:01:00Z" },
    { label: "Period 6 Begin @ 1:04 PM", time: "2024-09-13T17:04:00Z" },
    { label: "Period 6 End @ 2:34 PM", time: "2024-09-13T18:34:00Z" },
    { label: "Period 7 Begin @ 2:37 PM", time: "2024-09-13T18:37:00Z" },
    { label: "Period 7 End @ 4:07 PM", time: "2024-09-13T20:07:00Z" },
    { label: "HS Staff Dismissed @ 4:22 PM", time: "2024-09-13T20:22:00Z" },
    { label: "TEST PERIOD 1 @ 4:50 PM", time: "2024-09-13T20:50:00Z" },
    { label: "TEST PERIOD 2 @ 4:51 PM", time: "2024-09-13T20:51:00Z" },
    { label: "TEST PERIOD 3 @ 4:52 PM", time: "2024-09-13T20:52:00Z" }
];

function checkSchedule() {
    const now = new Date();
    const nowUTC = now.toISOString();

    schedule.forEach(period => {
        if (nowUTC.startsWith(period.time)) {
            document.getElementById('status').textContent = period.label;
            playBellSound();
        }
    });
}

function playBellSound() {
    const audio = new Audio('bell.mp3');
    audio.play();
}

setInterval(checkSchedule, 1000); // Check every second

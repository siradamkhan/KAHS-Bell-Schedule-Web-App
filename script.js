// Define the schedule with times and labels
const schedule = [
    { label: "Breakfast Begin @ 8:05 AM", hours: 8, minutes: 5, triggered: false },
    { label: "Breakfast End/Period 1 Begin @ 8:25 AM", hours: 8, minutes: 25, triggered: false },
    { label: "Period 1 End @ 9:55 AM", hours: 9, minutes: 55, triggered: false },
    { label: "Period 2 Begin @ 9:58 AM", hours: 9, minutes: 58, triggered: false },
    { label: "Period 2 End @ 11:28 AM", hours: 11, minutes: 28, triggered: false },
    { label: "Lunch/Advisory Block 1 Begin @ 11:31 AM", hours: 11, minutes: 31, triggered: false },
    { label: "Lunch/Advisory Block 1 End @ 11:59 AM", hours: 11, minutes: 59, triggered: false },
    { label: "Lunch/Advisory Block 2 Begin @ 12:02 PM", hours: 12, minutes: 2, triggered: false },
    { label: "Lunch/Advisory Block 2 End @ 12:30 PM", hours: 12, minutes: 30, triggered: false },
    { label: "Lunch/Advisory Block 3 Begin @ 12:33 PM", hours: 12, minutes: 33, triggered: false },
    { label: "Lunch/Advisory Block 3 End @ 1:01 PM", hours: 13, minutes: 1, triggered: false },
    { label: "Period 6 Begin @ 1:04 PM", hours: 13, minutes: 4, triggered: false },
    { label: "Period 6 End @ 2:34 PM", hours: 14, minutes: 34, triggered: false },
    { label: "Period 7 Begin @ 2:37 PM", hours: 14, minutes: 37, triggered: false },
    { label: "Period 7 End @ 4:07 PM", hours: 16, minutes: 7, triggered: false },
    { label: "HS Staff Dismissed @ 4:22 PM", hours: 16, minutes: 22, triggered: false },
    { label: "TEST PERIOD 1 @ 4:55 PM", hours: 16, minutes: 35, triggered: false },
    { label: "TEST PERIOD 2 @ 4:56 PM", hours: 16, minutes: 36, triggered: false },
    { label: "TEST PERIOD 3 @ 4:57 PM", hours: 16, minutes: 37, triggered: false },
];

// Function to format time for display
function formatTime(date) {
    const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${ampm}`;
}

// Function to check current time against schedule
function checkTime() {
    const now = new Date();
    console.log("Current Time:", formatTime(now)); // Log current time
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

    schedule.forEach(item => {
        const scheduledTime = item.hours * 60 + item.minutes; // Convert scheduled time to minutes
        console.log("Checking scheduled time:", item.label, "Scheduled:", scheduledTime, "Current:", currentTime);
        if (currentTime === scheduledTime && !item.triggered) {
            console.log("Triggering:", item.label); // Log which item is triggered
            playBellSound();
            displayLabel(item.label);
            item.triggered = true; // Ensure it only triggers once
        }
    });
}

// Function to play the bell sound
function playBellSound() {
    const bell = new Audio('bell.mp3'); // Ensure correct path
    bell.play().catch(error => {
        console.log("Audio play failed: ", error);
    });
}

// Function to display the label in the browser
function displayLabel(label) {
    document.getElementById('label').textContent = label;
}

// Set interval to check time every 10 seconds
setInterval(checkTime, 10000); // Check every 10 seconds

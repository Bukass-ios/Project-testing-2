// 🔒 Hardcoded tracking data
const trackingData = {
  "FT123456": {
    status: "In Transit",
    origin: "Accra, Ghana",
    destination: "Tamale, Ghana",
    sender: "John Doe",
    receiver: "Abdul Karim",
    progress: [
      "Package received at Accra warehouse",
      "Shipped from Accra",
      "Arrived at Kumasi hub",
      "In transit to Tamale"
    ]
  },
  "FT654321": {
    status: "Delivered",
    origin: "Kumasi, Ghana",
    destination: "Bolgatanga, Ghana",
    sender: "Comfort Yeboah",
    receiver: "Salifu Ibrahim",
    progress: [
      "Package received at Kumasi",
      "Out for delivery",
      "Delivered to receiver"
    ]
  },
  "FT112233": {
    status: "Pending Pickup",
    origin: "Takoradi, Ghana",
    destination: "Ho, Ghana",
    sender: "Ama Serwaa",
    receiver: "Daniel Nketiah",
    progress: [
      "Package registered",
      "Awaiting pickup at Takoradi station"
    ]
  },
  "FT445566": {
    status: "In Transit",
    origin: "Cape Coast, Ghana",
    destination: "Wa, Ghana",
    sender: "Yaw Mensah",
    receiver: "Zeinab Fuseini",
    progress: [
      "Package picked up from Cape Coast",
      "Departed from Cape Coast hub",
      "In transit to Kumasi"
    ]
  }
};

// 🚀 Function to handle form submission (on index.html)
function handleTracking(event) {
  event.preventDefault();
  const trackingNumber = document.getElementById('trackingInput').value.trim();
  localStorage.setItem('trackingNumber', trackingNumber);
  window.location.href = 'tracking.html';
}

// 📄 Load tracking result (on tracking.html)
if (window.location.pathname.includes('tracking.html')) {
  const trackingNumber = localStorage.getItem('trackingNumber');
  const resultDiv = document.getElementById('trackingResult');

  if (trackingData[trackingNumber]) {
    const data = trackingData[trackingNumber];
    const progressHTML = data.progress.map((step, index) => `
      <div class="progress-step">
        <div class="step-number">${index + 1}</div>
        <div class="step-text">${step}</div>
      </div>
    `).join('');

    resultDiv.innerHTML = `
      <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
      <p><strong>Status:</strong> ${data.status}</p>
      <p><strong>From:</strong> ${data.origin}</p>
      <p><strong>To:</strong> ${data.destination}</p>
      <p><strong>Sender:</strong> ${data.sender}</p>
      <p><strong>Receiver:</strong> ${data.receiver}</p>
      <h4>Progress:</h4>
      <div class="progress-bar">${progressHTML}</div>
    `;
  } else {
    resultDiv.innerHTML = `<p>Tracking number not found.</p>`;
  }
}


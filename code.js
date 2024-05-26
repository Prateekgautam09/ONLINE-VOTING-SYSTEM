// Function to start voting
function startVoting() {
    window.location.href = "voting.html";
}

// Function to submit the vote
function submitVote() {
    var selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (!selectedCandidate) {
        document.getElementById("message").innerText = "Please select a candidate!";
        return;
    }

    var candidateId = selectedCandidate.value;
    var userHash = hashCode(getIpAddress()); // Simplified hashing of IP address for demonstration
    
    // Simulate authentication
    if (localStorage.getItem(userHash) === null) {
        localStorage.setItem(userHash, candidateId);
        // You can send this data to the server using AJAX for proper backend handling
        window.location.href = "thankyou.html";
    } else {
        document.getElementById("message").innerText = "You have already voted!";
    }
}

// Function to return to the welcome page
function returnToWelcome() {
    window.location.href = "index.html";
}

// Function to retrieve IP address (simplified for demonstration)
function getIpAddress() {
    // Simplified IP address retrieval for demonstration
    return "192.168.0.1";
}

// Function to generate hash code from a string
function hashCode(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(); // Convert to string
}

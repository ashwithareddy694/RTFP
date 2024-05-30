function addDoctor(event) {
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let specialty = document.querySelector("#specialty").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    if (username === '' || email === '' || phone === '' || specialty === '' || password === '' || confirmPassword === '') {
        alert("Please fill all the fields");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
    } else {
        axios.get('http://localhost:3000/doctors')
            .then(response => {
                const data = response.data;
                const existingDoctor = data.find(doctor => doctor.email === email);
                if (existingDoctor) {
                    alert("Doctor with this email already exists");
                } else {
                    axios.post('http://localhost:3000/doctors', { username, email, phone, specialty, password })
                        .then(response => {
                            alert("Doctor registered successfully");
                            document.getElementById("signupForm").reset();
                        })
                        .catch(error => {
                            console.error("There was an error registering the doctor!", error);
                        });
                }
            })
            .catch(error => {
                console.error("There was an error fetching the doctors data!", error);
            });
    }
}

document.getElementById("doctorsignupForm").addEventListener("submit", addDoctor);


document.getElementById("doctorloginForm").addEventListener("submit", loginDoctor);

function loginDoctor(event) {
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    axios.get('http://localhost:3000/doctors')
        .then(response => {
            const doctors = response.data;
            const doctor = doctors.find(doc => doc.username === username && doc.password === password);
            localStorage.setItem('doctorName', doctor.username);
            if (doctor) {
                alert("Login successful");

                window.location.href = "doctordashboard.html";

            } else {
                alert("Invalid username or password");
            }
        })
        .catch(error => {
            console.error("There was an error fetching the doctors data!", error);
        });
}


document.getElementById("patientsignupForm").addEventListener("submit", addPatient);

function addPatient(event) {
    event.preventDefault();

}




function handleAdminLogin(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === '' || password === '') {
        alert("Please fill all the fields");
        return;
    }

    axios.get('http://localhost:3000/admin')
        .then(response => {
            const admins = response.data.admin;
            console.log("Admins data fetched:", admins); // Debugging log
            const admin = admin.find(admin => admin.username === username && admin.password === password);
            if (admin) {
                alert("Login successful!");
                window.location.href = "admin-dashboard.html"; // Redirect to the dashboard
            } else {
                alert("Invalid username or password");
            }
        })
        .catch(error => {
            console.error("There was an error fetching the admin data!", error);
            alert("Error fetching admin data. Please try again later.");
        });
}

// Attach the handleLogin function to the form's submit event
document.getElementById("adminLoginForm").addEventListener("submit", handleAdminLogin);

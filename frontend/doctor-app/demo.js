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

document.getElementById("signupForm").addEventListener("submit", addDoctor);

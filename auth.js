function login() {
    let user = document.getElementById("username").value;

    if (user === "") {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", user);

    if (user === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "dashboard.html";
    }
}
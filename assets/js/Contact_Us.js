document.querySelector("#Contact_Us").addEventListener("submit", async function(e) {
    e.preventDefault();

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#contact_no");
    let error = document.querySelector("#error_data");

    // Trim values
    name.value = name.value.trim();
    email.value = email.value.trim();
    phone.value = phone.value.trim();

    // NAME VALIDATION
    if (name.value === "") {
        error.innerHTML = "* Please Enter Name.";
        name.style.borderColor = "red";
        name.focus();
        return;
    }
    let alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (!alpha.test(name.value)) {
        error.innerHTML = "* Invalid Name: " + name.value;
        name.style.borderColor = "red";
        name.value = "";
        name.focus();
        return;
    } else {
        name.style.borderColor = "";
    }

    // EMAIL VALIDATION
    if (email.value === "") {
        error.innerHTML = "* Please Enter Email ID.";
        email.style.borderColor = "red";
        email.focus();
        return;
    }
    let emailPattern = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!emailPattern.test(email.value)) {
        error.innerHTML = "* Invalid Email ID: " + email.value;
        email.style.borderColor = "red";
        email.value = "";
        email.focus();
        return;
    } else {
        email.style.borderColor = "";
    }

    // PHONE VALIDATION
    if (phone.value === "") {
        error.innerHTML = "* Please Enter Contact No.";
        phone.style.borderColor = "red";
        phone.focus();
        return;
    }
    let cleaned = phone.value.replace(/\D/g, "");
    let pattern = /^(?!(\d)\1+\b|1234567890)\d{10}$/; // 10 digits only + not sequential
    if (!pattern.test(cleaned)) {
        error.innerHTML = "* Invalid Contact No.: " + phone.value;
        phone.style.borderColor = "red";
        phone.value = "";
        phone.focus();
        return;
    } else {
        phone.style.borderColor = "";
    }

    error.innerHTML = ""; // Clear errors

    // ---- FORM SUBMISSION (Formspree) ----
    let form = e.target;
    let data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        form.innerHTML = "<div class='alert alert-success'>Thank you! Your message has been sent.</div>";
    } else {
        form.innerHTML = "<div class='alert alert-danger'>Sorry! Some Technical issue occurred. Please try again later.</div>";
    }
});
const baseUrl = "http://localhost:3000";
function handleSignup() {
    console.log('fdsf')
    const name = $('#name').val();
    const bday = $('#birthdate').val();
    const isFreelancer = $('freelancer-check').val();
    const phone = $('#phonenum').val();
    const pass = $("#pwd").val();
    const pass2 = $("#pwd2").val();
    const gender = $("input[name='gender']:checked").val();
    const email = $('#email').val();
    const username = $("#username").val();
    const user = {
        username: username,
        firstname: name.split(' ')[0],
        lastname: name.split(' ')[1],
        password: pass,
        phone: phone,
        birthdate: bday,
        email: email,
        gender: parseInt(gender),
        usertype_id:
            isFreelancer ? 1 : 1
    };

    console.log(JSON.stringify(user));

    if (pass !== pass2) {
        alert('pass doesn\'t match')
    }

    $.post({
        url: baseUrl + "/auth" + '/signup',
        data: JSON.stringify(user),
        dataType: "json",
        contentType: "application/json",
        statusCode: {
            422: (data) => {
                console.log(data);
            }
        },
        success: function (response) {
            window.location.replace("index.html");
        }
    });
}

function handleSignin() {
    const password = $("#password").val();
    const username = $("#username").val();

    $.post({
        url: baseUrl + "/auth" + '/signin',
        data: JSON.stringify({ password: password, username: username }),
        dataType: "json",
        contentType: "application/json",
        statusCode: {
            401: (data) => {
                console.log(data);
            }
        },
        success: function (response) {
            console.log(response)
            window.localStorage.setItem('token', response.token);
            window.localStorage.setItem('id', response.id);
            window.localStorage.setItem('usertype_id', response.usertype_id);
            window.localStorage.setItem('expiresIn', response.expiresIn);
        }
    })


}
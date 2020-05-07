
/**
 * All API functions are @async, and they all @return {Promise<object>}.
 * @example Promises are handled by three methods
 * @method then() called after the async call have successfuly finshed
 * @method catch() called after if the async call fails
 * @method finally() called after then or catch
 * 
 * 
 * 
 * @example searchServices('some query').then((data) => {// use data and write your code here})
 * @example searchServices('some query').catch((err) => {// write your error handling code here})
 * @example you can chain these methods searchServices('some query').then((data)=>{}).catch((err) => {})
 */


const baseUrl = 'https://wislah.herokuapp.com/'
const header = { "Authorization": 'bearer ' + token };
/**
 * simple search function
 * this method can also be used to retrieve all services if you pass it an empty query.
 * @async
 * @param {String} query 
 * @returns {Promise<object>}
 */
function searchServices(query) {
    return new Promise((resolve, reject) => {
        $.get(baseUrl + "/services/search", { q: query }, function (data) {
            return resolve(data);
        })
    })
}


/**
 * Sign up a user
 * 
 * @async
 * @param {Integer} gender - male: 0, female: 1
 * @param {String} username - min-length: 3
 * @param {String} password - min-length: 8
 * @param {String} usertype - admin: 1, staff: 2, freelancer: 3, customer: 4 
 * @return {Promise<object>}
 */
function signup(firstname, lastname, gender, phone, birthdate, email, username, password, usertype) {

    const user = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: password,
        phone: phone,
        birthdate: birthdate,
        email: email,
        gender: gender,
        usertype_id: usertype
    };

    console.log(JSON.stringify(user));

    return new Promise((resolve, reject) => {
        $.post({
            url: baseUrl + "/auth" + '/signup',
            data: JSON.stringify(user),
            dataType: "json",
            contentType: "application/json",
            statusCode: {
                422: (data) => {
                    reject(data);
                }
            },
            success: function (data) {
                resolve(data)
            }
        })
    })
}

/**
 * Sign a user in
 * this function also caches the JWT {token, id, usertype_id, expiresIn} 
 * JWT token is the proof of user sign in. So if it was invalidated then the user is signed out
 * 
 * @async
 * @param {String} username - min-length: 3
 * @param {String} password - min-length: 8
 * @returns {Promise<object>}
 */
function signin(username, password) {
    return new Promise((resolve, reject) => {
        $.post({
            url: baseUrl + "/auth" + '/signin',
            data: JSON.stringify({ password: password, username: username }),
            dataType: "json",
            contentType: "application/json",
            statusCode: {
                401: (data) => {
                    reject(data);
                }
            },
            success: function (response) {
                window.localStorage.setItem('token', response.token);
                window.localStorage.setItem('id', response.id);
                window.localStorage.setItem('usertype_id', response.usertype_id);
                window.localStorage.setItem('expiresIn', response.expiresIn);
                resolve(response);
            }
        })
    })
}


/**
 * clears localstorage | it will invalidate the JWT token
 */
function signout(){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('usertype_id')
    window.localStorage.removeItem('expiresIn')
}


/**
 * Gets all statistics that luqman aches for
 * 
 * @assumptions - the user is logged in
 * @assumptions - the user is an admin
 * 
 * @see {@link signin} for token caching
 */
function getReport() {
    const token = window.localStorage.getItem('token');

    return new Promise((resolve, reject) => {
        $.ajax({
            url: baseUrl + '/admin' + '/statistics',
            method: 'GET',
            headers: header,
            success: (data) => resolve(data),
            error: (err) => reject(err)
        })
    })
}

/**
 * @see {@link getReport - Assumptions}
 * 
 * @param {Integer} userId - the user to be banned
 */
function banUser(userId) {

    return new Promise((resolve, reject) => {
        $.ajax({
            url: baseUrl + '/admin' + '/ban',
            method: "POST",
            data: {id: userId},
            contentType: 'application/json',
            header: header,
            success: (data) => resolve(data),
            error: (err) => reject(err)
        })
    })
}


function createOrder(freelancer_id, package_id){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: baseUrl + '/order' + '/create',
            method: 'POST',
            data: {pid: package_id, freelancer_id: freelancer_id},
            contentType: 'application/json',
            header: header,
            success: (data) => resolve(data),
            error: (data) => reject(data)
        })
    });
}

function deleteOrder(order_id){
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: baseUrl + '/order' + '/delete', 
            method: 'POST',
            data: {order_id: order_id},
            contentType: 'application/json',
            header: header,
            success: (data) => resolve(data),
            error: (data) => reject(data)
        })
    });
}

/**
 * @async 
 * 
 *  
 *  
 * @param {*} category_id 
 * @param {Array <object>} packages - this param will contain all the information about the three packages
 * @packageObject : {description: String, price: Double/Number, title: String, service_id: integer} attribute names of package object are to abide by  
 */
function createService(title, description, category_id, packages){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: baseUrl + '/order' + '/create', 
            method: 'POST',
            data: {title: title, description: description, category_id: category_id, packages: packages},
            contentType: 'application/json',
            header: header,
            success: (data) => resolve(data),
            error: (data) => reject(data)
        })
    })

}

function getUsers(){
    return new Promisse((resolve, reject) => {
        $.ajax({
            url: baseUrl,
            method: 'GET',
            header: header,
            success: (data) => resolve(data),
            error: err => reject(err)
        })
    })
}
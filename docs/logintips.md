# Tips for login

Tips create the login, we need to work with the following node js and angular tools

### What to do in server side (NodeJs) side?

* Create login model (login.Schema, login.route, login.model)
* After sending the login info to the server using mongoose, we need to do the followings

* We need to hash the password and send the hashed password to the database through API;
** Validate the hashed and the original password;
** For this purpose, use crypto (advanced) or bcrypt library (basic);

After password hashing is done, we need to generate token as followings

* Generate jsonwebtoken(jwt). The jwt token has three sections as follows,
    a- header section,
    b- payload section,  *Just an important tip, never use your password and confidential data in the payload section
    c- signature (sign) - 

The jwt token is used for user authentication and used as a custom middleware i.e auth.js in the middleware folder here.
 If the user is valid user, then token is appended to the heade of request.

* passport is another important javascript library which is used for authentication purposes. This library is installed
using npm install passport and npm install possport-local. The passport-local is used as a middleware in app.js. 


### What to do in the client side (Angular side)?

* Create two seperate modules, one for login and another for hmis-management (in this case). 
You can have as much modules as you need, based on your need. Example, login, admin, profile ... 
(These modules are lazy loading in order to avoid using unnecessary routes)

** Create a login component using (ng g c login)
** Create an interface for login forms ...
** Create a login model. In this case login.ts to specify type of the fields.
** Create a login service to wire connections between the serverside and client side
    i.e in this case addLogin(loginData: Login){
    return this.http.post('api/login/add', loginData); }  

** Then create and authencation service i.e auth.service to store data to localStorage.
    The token can be set here and can be gotten in interceptor.
** Create an interceptor (here http-client.interceptor.ts) to get the token set
    and to append the token to each and every request made in order to authenticate the request.
** In order to authorize the user, we use "route guard". Guard is used to authorize
    the logged in user to access the given fields.
    



Generally, the main idea for login in the client side is that create the model,
service, guards and interceptor. 
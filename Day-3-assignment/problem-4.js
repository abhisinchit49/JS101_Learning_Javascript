
// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let name = "masai123"
let pass = "996000"

let pemail = "masai123"
let ppass = "996000"

if (pemail == name) {
  if (ppass == pass) {
    console.log("Login")
  } else {
    console.log("Incorrect Email or Incorrect Password")
  }
} 
const bcrypt = require('bcrypt');
const saltRounds = 10; // Quanto maior for esse número, mais complicado de quebrar a senha vai ser
const password = process.argv.slice(2)[0];

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log(hash);
    })
})
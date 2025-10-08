const { authenticate } = require("passport");
const bcrypt = require("bcrypt");

const localStrategy = require("passport-local").Strategy;

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "no user" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Wrong pass" });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new localStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    const user = getUserById(id);
    done(null, user);
  });
}

module.exports = initialize;

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
},
    async (accessToken, refreshToken, profile, done) => {
        const userProfile = {
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value
        };

        return done(null, userProfile);
    }
));

module.exports = passport;
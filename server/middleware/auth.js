exports.validateAuthRouteAccess = (req, res, next) => {
    if (req.user) {
        const { homepageUrl } = req.user;
        if (homepageUrl) {
            res.redirect(homepageUrl);
        } else {
            res.redirect('/create-note');
        }
        return;
    }
    next(new Error({ code: 'UNAUTHORIZED' }));  // TODO: better error codes???
}
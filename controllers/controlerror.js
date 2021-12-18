exports.errorPage = (req,res) => {
    res.render('errorview/error',
        {
            pageTitle:'Error Page',
            path:'producterror'
        }

    )
}
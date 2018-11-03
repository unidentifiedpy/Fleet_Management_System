var router = require( "express" ).Router()
var fs = require( "fs" )
var db = require( "db" )()
var mid = require( "midwares" )

router.use( mid.dispatcher_check )

router.get( "/", ( req, res ) => {
	res.redirect( "/dispatcher/dispatch" )
})

fs.readdir( __dirname + "/subs", ( err, mods ) => {
	if(err) console.err

	mods.forEach( cur => {
		route = cur.split( "." )[0]
		router.use( `/${ route }`, require( `./subs/${ route }` ) )
	})
})

module.exports = router
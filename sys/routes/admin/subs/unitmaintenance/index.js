var router = require( "express" ).Router()
var fs = require( "fs" )


router.get( "/", ( req, res ) => {
	res.render( "UnitMaintenanceSchedule" )
})
fs.readdir( __dirname + "/subs", ( err, mods ) => {
	mods.forEach( cur => {
		route = cur.split( "." )[0]
		router.use( `/${ route }`, require( `./subs/${ route }` ) )
	})
})

module.exports = router
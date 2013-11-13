var User = exports = module.exports = {};
var db = require("./connect");

function map_obj(obj){
	return $.map(obj, function(value, index) {
		return [value];
	});
}

User.find = function (id,callback){
	db.query('SELECT * FROM users where id = ?',id, function(err, rows, fields) {
		if (err) {
			console.log(err);
			throw err;
		}
		if(rows.length==0){
			console.log("No user by the id:"+id);
			throw {err:"user not found",id:id}
		}
		callback(rows[0]);
	}
	)
};

User.fing_by_gid = function(gid,callback){
	db.query('SELECT * FROM users where gid = ?',gid, function(err, rows, fields) {
		if (err) {
			console.log(err);
			throw err;
		}
		if(rows.length==0){
			console.log("No user by the gid:"+gid);
			throw {err:"user not found",gid:gid}
		}
		callback(rows[0]);
	}
	)
};
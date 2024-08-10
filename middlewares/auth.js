const jwt = require('jsonwebtoken');

exports.authenticate = (request, response, next)=>{
	try{
		if(request.rawHeaders[1].split(' ')[1] == null || request.rawHeaders[1].split(' ')[1] == undefined){
			return response.status(401).json({
				message: "Unknown request",
			});
		}else{
			let token = request.rawHeaders[1].split(' ')[1];
			let payload = jwt.verify(token, process.env.SECRET_KEY);
			if(payload != undefined){
				next();
			}
		}
	}catch(error){
		return response.status(401).json({
			message: "Unknown request",
			errorMessage: error
		})
	}
}

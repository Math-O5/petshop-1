
'use strict'
const jwt = require('jsonwebtoken');
const Role = require('../helpers/role');

/** 
    @argument {JSON } data id, email  password of user
    @return { String } the token value which expires in 1 day
*/ 
exports.generateToken = async(data) => {
    const token = await jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
    return token;
}

/**
 * @argument token generate by generateToken()
 * @retrun data
 */
exports.decodeToken = async(token) => {
    let data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

/**
 *  @param { String } req.token : The token of the session user
 *  @param { res }  
 * 
 *  Check if user has permission 
 */ 
exports.authorize = function(role = []) {
    if(typeof role === 'string') {
        role = [role];
    }

    (req, res, next) => {

        // Load token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (role.length && !role.includes(req.user.role)) {
            return res.status(401).json({ 
                        message: 'Não autorizado.' 
                   });
        }

        // Check if token was not given
        if(!token) {
            return res.status(401).json({
                message: 'Acesso Restrito'
            });
        } 
        
        //Validate token
        jwt.verify(token, global.SALT_KEY, function(error, decoded) { 
            if(error) {
                res.status(401).json({
                    message: 'Sessão inválida'
                });
            } else {
                next();
            }
        });

    }
}
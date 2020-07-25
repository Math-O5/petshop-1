
'use strict'
const jwt = require('jsonwebtoken');
const Role = require('../helpers/role');
const User = require('../models/user')

/** 
    @argument {JSON } data id, email  password of user
    @return { String } the token value which expires in 1 day
*/ 
const generateToken = async(data) => {
    const token = await jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
    return token;
}

/**
 * @argument token generate by generateToken()
 * @retrun data
 */
const decodeToken = async(token) => {
    const data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

/**
 *  @param { String } req.token : The token of the session user
 *  @param { 'Admin', ' User' } role
 *  @param { res }  
 * 
 *  Check if user has permission 
 */ 
function authorize(role = []) {
    if (typeof role === 'string') {
        role = [role];
    }

    return [
        async(req, res, next) => {
            
            // Load token
            const token = req.body.token || req.query.token || req.headers['x-access-token'];

            // Check if token was not given
            if(!token) {
                return res.status(401).json({
                    message: 'Acesso Restrito'
                });
            } 
            
            const user = await User.findOne({token: token});
            if(!user) {
                return res.status(401).json({ 
                    message: 'Token inválido' 
                });
            }

            if (role.length && !role.includes(user.role)) {
                return res.status(401).json({ 
                            id: user._id,
                            user: user.role,
                            message: 'Não autorizado' 
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
    ];
}

module.exports = {
    authorize,
    generateToken,
    decodeToken
}

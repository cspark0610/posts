import bcrypt from 'bcryptjs';
//hay que hashear las pass

import jwt from 'jsonwebtoken';
import User from '../models/user.js'

export const signin = async(req,res) =>{
    //dos cosas del fron email y el pass
    const {email, password} = req.body; //siempre viene en req.body
    try {
        const existingUser = await User.findOne({email}) //findOne requiere PASAR siemrpe un objeto!

        console.log('existingUser',existingUser);
        if(!existingUser) res.status(404).json({message : 'user no existe'})
        
        const isPasswordCorrect = await bcrypt.compare(password , existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({message :'invalid credentials'})
        //cuando recien pasan estas dos validaciones de ususario y password correcto seteo el token 
        //que luego voy a mandar al front-end. con el metodo .sign()
        const token = jwt.sign({email: existingUser , id:existingUser._id },'test', {expiresIn :'1h'} )
        res.status(200).json({result : existingUser, token})

    } catch (error) {
        res.status(500).json({message:'something went wrong!!'})        
    }    

}


export const signup = async(req,res) =>{
    const {email, password, confirmPassword , firstName, lastName} = req.body    
    try {
        const existingUser = await User.findOne({email});
        console.log('existingUser',existingUser);
        
        if( existingUser ) res.status(404).json({message : 'user ya existe!!'})
        if(password !== confirmPassword) res.status(404).json({message:'las passwords no coinciden!!'})

        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({email, password:hashedPassword, name: `${firstName} ${lastName}`})
        //una vez que me creo el ususario tengo que crear el token;

        const token = jwt.sign({email : result.email, id:result._id}, 'test', {expiresIn : '1h'})
        res.status(200).json({result, token})

    } catch (error) {
        res.status(500).json({message:'something went wrong'})
    }
}
import jwt from 'jsonwebtoken';

//los middewares deben tener el 3er parametro next
//confirma o rechaza lo que el ususario hace ene l front

const auth = async(req,res,next) =>{
    try {
        //tengo que validar el token que me llega desde el front
        //eso me va a llegar en req.headers.authorization
        //console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1]
        const isCustomAuth = token.length < 500; //es el token de jwt!!
        let decodedData;
        if(token && isCustomAuth){ //token propio USO EL METODO .verify()
            decodedData = jwt.verify(token, 'test') //la palabra secreta debe ser la misma!
            req.userId = decodedData?.id;
        }else{
            //token de google usar metodo .decode()
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub;
            //sub es el id que usa google para diferenciar a cada user
        }
        next();
    } catch (error) {
        console.log(error);
    }
}
//este middleware se usara para las routes de posts!!!

export default auth;
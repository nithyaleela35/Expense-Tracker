import {Router} from "express"; 
import { createUser } from "./user.controller.js";
import {login} from "./user.controller.js";

const userRouter  = Router(); 

//@POST  /api/user/signup
userRouter.post("/signup", createUser);
// Each the roter obj have many crud operation methods 
// each method have conection to the frend and then the backend. 
//front end ---------------->
//backedn the endpoint goes to the logic then to the db (server).

/*work -> the endpoit from fe comes here using the method type it get the req & response from the fe
 and then it goes to the controller where the logic is written and then it goes to the model 
 where the schema is defined and then it goes to the database and then it comes back to the controller and 
 then to the router and then to the fe*/
//@POST /api/user/login
userRouter.post("/login", login);


export default userRouter;
const router = require("express").Router();

const { 
  createRegister, 
  login, 
  getAllUser, 
  findUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

const { validateRegister}  = require("../middlewares/validator")

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *    tags : 
 *      - Users
 *    name : Register
 *    summary : register a user
 *    produces:
 *       - application/json
 *    parameters:
 *       - name: body
 *         in: body
 *         schema : 
 *           $ref: ""
 *           type: object
 *           properties :
 *             name : 
 *               type : string
 *             email :
 *                type : string
 *             password :
 *                type : string
 *    responses : 
 *      '201':
 *        description : success create user
 *      '500':
 *        description : Internal server error
 */
router.post("/", validateRegister, createRegister);
/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *    tags : 
 *      - Users
 *    name : Login
 *    summary : login a user
 *    produces:
 *       - application/json
 *    parameters:
 *       - name: body
 *         in: body
 *         schema : 
 *           $ref: ""
 *           type: object
 *           properties :
 *             email :
 *                type : string
 *             password :
 *                type : string
 *    responses : 
 *      '200':
 *        description : success login
 *      '500':
 *        description : Internal server error
 */
router.post("/login", login);
/**
 * @swagger
 * /api/v1/users/all:
 *   get:
 *    tags : 
 *      - Users
 *    name : Read all users
 *    summary : Read all users
 *    produces:
 *       - application/json
 *    responses : 
 *      '200':
 *        description : read all user
 *      '500':
 *        description : Internal server error
 */
router.get("/all", getAllUser);
/**
 * @swagger
 * /api/v1/users/find/{idUser}:
 *   get:
 *    tags : 
 *      - Users
 *    name : Read single user
 *    summary : Read single user
 *    produces:
 *       - application/json
 *    parameters:
 *       - in: path
 *         name : idUser
 *         schema : 
 *           $ref: ""
 *           type: object
 *           properties :
 *             email :
 *                type : string
 *             password :
 *                type : string
 *    responses : 
 *      '200':
 *        description : success read single user
 *      '404':
 *        description : User not found
 *      '500':
 *        description : Internal server error
 */
router.get("/find/:idUser", findUser);
/**
 * @swagger
 * /api/v1/users/update/{idUser}:
 *   put:
 *    tags : 
 *      - Users
 *    name : Update single user
 *    summary : Update single user
 *    produces:
 *       - application/json
 *    parameters:
 *       - in: path
 *         name : idUser
 *       - name : body
 *         in : body
 *         schema : 
 *           $ref: ""
 *           type: object
 *           properties :
 *             email :
 *                type : string
 *             name :
 *                type : string
 *    responses : 
 *      '200':
 *        description : update user
 *      '404':
 *        description : User not found
 *      '500':
 *        description : Internal server error
 */
router.put("/update/:idUser", updateUser);
/**
 * @swagger
 * /api/v1/users/delete/{idUser}:
 *   delete:
 *    tags : 
 *      - Users
 *    name : Delete single user
 *    summary : Delete single user
 *    produces:
 *       - application/json
 *    parameters:
 *       - in: path
 *         name : idUser
 *         schema : 
 *           $ref: ""
 *           type: object
 *           properties :
 *             email :
 *                type : string
 *             password :
 *                type : string
 *    responses : 
 *      '200':
 *        description : delete user
 *      '404':
 *        description : User not found
 *      '500':
 *        description : Internal server error
 */
router.delete("/delete/:idUser", deleteUser);

module.exports = router;
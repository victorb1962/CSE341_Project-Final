//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE/Login

/**
 * @swagger
 * components:
 *  schemas:
 *    Subscriber:
 *      type: object
 *      required:
 *        -lastName
 *        -firstName
 *        -email
 *        -username
 *        -password
 *      properties:
 *          lastName:
 *              type: string
 *              desc: Subscriber's Last Name
 *          firstName:
 *              type: string
 *              desc: Subscriber's First Name
 *          email:
 *              type: string
 *              desc: Subscriber's email address
 *          username:
 *              type: string
 *              desc: Subscriber's username to login
 *          password:
 *              type: string
 *              desc: Subscriber's password
 *          example:
 *              lastName: Peace
 *              firstName: Warren
 *              email: wpeace@tolstoy.com
 *              username: warrenpeace
 *              password: password
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Login-Subscriber:
 *      type: object
 *      required:
 *        -email
 *        -password
 *      properties:
 *          email:
 *              type: string
 *              desc: Subscriber's email address
 *          password:
 *              type: string
 *              desc: Subscriber's password
 *          example:
 *              email: myname@abcdef.com
 *              password: password
 *
 */

//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *   name: Subscribers
 *   description: Registered subscriber accounts
 */

//POST to create a new subscriber
/**
 * @swagger
 * /subscriber/add-subscriber:
 *   post:
 *     summary: Create a new subscriber account
 *     tags: [Subscribers]
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *                properties:
 *                      callbackUrl: https://localhost:3000/
 *                      type: string
 *                      format: uri
 *                      example: https://myserver.com/send/callback/here
 *                required:
 *                  -callbackUrl
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *       500:
 *          description: Server Error
 */

//GET subscriber by ID
/**
 * @swagger
 * /subscriber/subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by id
 *     tags: [Subscribers]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the subscriber to get
 *        example: 649773e6b8af319c323aef77 (Albert Anderson)
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *       500:
 *          description: Server Error
 */

//PUT subscriber by id
/**
 * @swagger
 * /subscriber/edit-subscriber/{subscriberId}:
 *    put:
 *     security:
 *      - bearerAuth: []
 *     summary: Update a subscriber by id
 *     tags: [Subscribers]
 *     parameters:
 *      - in: path
 *        name: subscriberId
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the subscriber to update
 *        example: 649773e6b8af319c323aef77 (Albert Anderson)
 *      - in: header
 *        name: auth
 *        description: a JWT token header "Bearer -token-"
 *        required: true
 *        schema:
 *          type: string
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *                properties:
 *                      callbackUrl: https://localhost:3000/
 *                      type: string
 *                      format: uri
 *                      example: https://myserver.com/send/callback/here
 *                required:
 *                  -callbackUrl
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *       500:
 *          description: Server Error
 */

//DELETE subscriber by id
/**
 * @swagger
 * /subscriber/delete-subscriber/{subscriberId}:
 *    delete:
 *     summary: Delete subscriber by ID
 *     tags: [Subscribers]
 *     parameters:
 *      - in: path
 *        name: subscriberId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the subscriber to get
 *        example: 649773e6b8af319c323aef77 (Albert Anderson)
 *      - in: header
 *        name: auth
 *        description: a JWT token header "Bearer -token-"
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *       500:
 *          description: Server Error
 */

//POST login subscriber by email password
/**
 * @swagger
 * /subscriber/login:
 *    post:
 *     summary: Logs in existing subscriber
 *     tags: [Subscribers]
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Login-Subscriber'
 *                properties:
 *                      callbackUrl: https://localhost:3000/
 *                      type: string
 *                      format: uri
 *                required:
 *                  -callbackUrl
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscriber'
 *       401:
 *          description: Unable to authenticate
 *
 *       500:
 *          description: Server Error
 *
 */

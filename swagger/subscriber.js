//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE/Login

/**
 * @swagger
 * components:
 *  schemas:
 *    Subscriber:
 *      type: object
 *      required:
 *        -subscriberKey
 *        -lastName
 *        -firstName
 *        -email
 *        -username
 *        -password
 *      properties:
 *          subscriberKey:
 *              type: number
 *              desc: Subscriber alt key
 *          lastName:
 *              type: string
 *              desc: Subscriber last name
 *          firstName:
 *              type: string
 *              desc: Subscriber first name
 *          email:
 *              type: string
 *              desc: Subscriber email address
 *          username:
 *              type: string
 *              desc: Subscriber username for login
 *          password:
 *              type: string
 *              desc: Subscriber password
 *          example:
 *              subscriberKey: 1
 *              lastName: Johnston
 *              firstName: Julie
 *              email: JJohnston@abcdef.com
 *              username: jjohnston
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
 *              desc: Subscriber email address
 *          password:
 *              type: string
 *              desc: Subscriber password
 *          example:
 *              email: JJohnston@abcdef.com
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
 *                      // callbackUrl: https://cse341-final-in8m.onrender.com/
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
 *        example: 64a05d20115b238db3923569 (Julie Johnston)
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
 *        example: 64a05d20115b238db3923569 (Julie Johnston)
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
 *                      // callbackUrl: https://cse341-final-in8m.onrender.com/
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
 *        example: 64a05d20115b238db3923569 (Julie Johnston)
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
 *     summary: Login existing subscriber
 *     tags: [Subscribers]
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Login-Subscriber'
 *                properties:
 *                      callbackUrl: https://localhost:3000/
 *                      // callbackUrl: https://cse341-final-in8m.onrender.com/
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

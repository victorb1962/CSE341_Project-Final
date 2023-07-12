//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    Subscription:
 *      type: object
 *      required:
 *        -startDate
 *        -length
 *      properties:
 *          startDate:
 *              type: number
 *              desc: Start date of subscription
 *          length:
 *              type: string
 *              desc: Length (months) of current subscription
 *          example:
 *              startDate: 2011-03-01T00:00:00.000+00:00
 *              length: 12
 */

//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *    name: Subscription
 *    description: Add subscription
 */

//GET all subscription
/**
 * @swagger
 * /subscription/subscription:
 *   get:
 *     summary: Get all subscription
 *     tags: []
 *     responses:
 *        200:
 *            description: Success message
 *            contents:
 *              application / json:
 *                schema:
 *                  $ref: '#/components/schemas/Subscription'
 *        500:
 *            description: Server Error
 */

//POST to create a new subscription
/**
 * @swagger
 * /subscription/add-subscription:
 *   post:
 *     summary: Create a new subscription
 *     tags: [Subscription]
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscription'
 *                properties:
 *                      // callbackUrl: https://localhost:3000/
 *                      callbackUrl: https://cse341-final-in8m.onrender.com/
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
 *                $ref: '#/components/schemas/Subscription'
 *       500:
 *          description: Server Error
 */

//GET subscription by ID
/**
 * @swagger
 * /subscription/subscription/{subscriptionId}:
 *   get:
 *     summary: Get a subscription by id
 *     tags: [Subscription]
 *     parameters:
 *      - in: path
 *        name: subscriptionId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the subscription to get
 *        example: 6497b4fb7f9c3407251a1e2b
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscription'
 *       500:
 *          description: Server Error
 */

//PUT to update a subscription by id
/**
 * @swagger
 * /subscription/edit-subscription/{subscriptionId}:
 *    put:
 *     summary: Update a subscription by id
 *     tags: [Subscription]
 *     parameters:
 *      - in: path
 *        name: subscriptionId
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the subscription to update
 *        example: 6497b4fb7f9c3407251a1e2b
 *     requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscription'
 *                properties:
 *                      // callbackUrl: https://localhost:3000/
 *                      callbackUrl: https://cse341-final-in8m.onrender.com/
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
 *                $ref: '#/components/schemas/Subscription'
 *       500:
 *          description: Server Error
 */

//DELETE subscription by id
/**
 * @swagger
 * /subscription/delete-subscription/{subscriptionId}:
 *   delete:
 *     summary: Delete a subscription by id
 *     tags: [Subscription]
 *     parameters:
 *      - in: path
 *        name: subscriptionId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the subscription to delete
 *        example: 6497b4fb7f9c3407251a1e2b
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Subscription'
 *       500:
 *          description: Server Error
 */

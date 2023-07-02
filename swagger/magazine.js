//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    Magazine:
 *      type: object
 *      required:
 *          -magazineKey
 *          -title
 *          -price
 *          -publisher
 *          -url
 *      properties:
 *          magazineKey:
 *              type: number
 *              desc: Magazine alt key
 *          title:
 *              type: string
 *              desc: Magazine title
 *          price:
 *              type: number
 *              desc: Magazine price
 *          publisher:
 *              type: string
 *              desc: Magazine publisher
 *          url:
 *              type: string
 *              desc: Magazine URL
 *          subscriberId:
 *              type: Schema.Types.ObjectId
 *              description: Magazine subscriber
 *          example:
 *              magazineKey: 1
 *              title: Fishing in the Mojave
 *              category: Sports, Travel
 *              price: 13.95
 *              publisher: abc-subscription.media
 *              url: abc-subscription.media/fishinginthemojave.com
 *              subscriberId: 64a05d20115b238db392356b
 */

//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *   name: Magazines
 *   description: Magazine Managing API
 */

//GET all magazines
/**
 * @swagger
 * /magazines/magazines:
 *   get:
 *     summary: Get all magazines
 *     tags: [Magazines]
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Magazine'
 *       500:
 *          description: Server Error
 */

//POST to create a new magazine
/**
 * @swagger
 * /magazines/add-magazine:
 *   post:
 *     summary: Create a new magazine
 *     tags: [Magazines]
 *     parameters:
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
 *                $ref: '#/components/schemas/Magazine'
 *                properties:
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
 *                $ref: '#/components/schemas/Magazine'
 *       500:
 *          description: Server Error
 */

//GET magazine by ID
/**
 * @swagger
 * /magazines/magazines/{id}:
 *   get:
 *     summary: Get a magazine by id
 *     tags: [Magazines]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the magazine to get
 *        example: 64a05c66115b238db392355e (Fishing in the Mojave)
 *     responses:
 *       200:
 *          description: Success message
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Magazine'
 *       500:
 *          description: Server Error
 */

//PUT magazine by id
/**
 * @swagger
 * /magazines/edit-magazine/{id}:
 *    put:
 *     summary: Update a magazine by id
 *     tags: [Magazines]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the magazine to update
 *        example: 64a05c66115b238db392355e (Fishing in the Mojave)
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
 *                $ref: '#/components/schemas/Magazine'
 *                properties:
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
 *                $ref: '#/components/schemas/Magazine'
 *       500:
 *          description: Server Error
 */

//DELETE magazine by id
/**
 * @swagger
 * /magazines/delete-magazine/{id}:
 *    delete:
 *     summary: Delete a magazine by id
 *     tags: [Magazines]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the magazine to delete
 *        example: 64a05c66115b238db392355e (Fishing in the Mojave)
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
 *                $ref: '#/components/schemas/Magazine'
 *       500:
 *          description: Server Error
 */

//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    Magazine:
 *      type: object
 *      required:
 *          -title
 *          -category
 *          -price
 *          -url
 *      properties:
 *          title:
 *              type: string
 *              desc: The Magazine Title
 *          category_list:
 *              type: array
 *              desc: The magazine categories
 *              items:
 *                type: string
 *              individual_category:
 *                  category: category
 *          url:
 *              type: string
 *              desc: The magazine URL
 *          example:
 *              title: Car Racing Made Easy
 *              category: Automotive, Sports
 *              price: 15.45
 *              url: abc-subscription.media/carracingmadeeasy.com
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
 *        example: 64977423b8af319c323aef7e (Car Racing Made Easy)
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
 *        example: 64977423b8af319c323aef7e (Car Racing Made Easy)
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
 *        example: 64977423b8af319c323aef7e (Car Racing Made Easy)
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

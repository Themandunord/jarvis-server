/**
 * Created by plesp on 04/05/2017.
 */
const { send, json } = require('micro')

// respond to specific methods by exposing their verbs
module.exports.POST = async function(req, res) {
    // fs-router decorates your req object with param and query hashes
    const body = await json(req);
    send(res, 200, { body: body, params: req.params, query: req.query })
}
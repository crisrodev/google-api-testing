import fs from 'fs';
import path from 'path';
import {Request, Response} from 'express';

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function getToken(req, res){
    if(DEBUG) console.log('get');
}

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function addToken(req, res){
    var code = req.body.code;
    if(DEBUG) console.log(`Add code to file ${code}`);

    if (code){
        fs.writeFileSync("./user_code.txt", code);
    }
    res.send(true);
}

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function updateToken(req, res){
    if( DEBUG ) console.log('update');
}

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function deleteToken (req, res){
    if( DEBUG ) console.log('delete');
}

export default {
    get: getToken,
    add: addToken,
    update: updateToken,
    delete: deleteToken
};
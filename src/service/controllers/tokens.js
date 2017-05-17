import fs from 'fs';
import path from 'path';
import {Request, Response} from 'express';
import GoogleAuth from 'google-auth-library';
import * as CLIENT from '../../../client_secret';

const CLIENT_ID = CLIENT.web.client_id;

const auth = new GoogleAuth();
const client = new auth.OAuth2(CLIENT.web.client_id, "", "");

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function get(req, res){
    if(DEBUG) console.log('get');
}

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function add(req, res){
    var authCode = req.body.code;

    if(!req.header('X-Requested-With')){
        res.end();
    }
    
    if(DEBUG) console.log(`Add code to file ${authCode}`);

    if (authCode){
        fs.writeFileSync("./user_code.txt", authCode);
    }
    res.send(true);
}

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function update(req, res){
    if( DEBUG ) console.log('update');
}

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
* */
export function remove (req, res){
    if( DEBUG ) console.log('delete');
}
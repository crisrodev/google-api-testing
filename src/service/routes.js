import tokens from './controllers/tokens.js'

export default {
    "/tokens": {
        post: tokens.add,
        put: tokens.update
    }
}
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
import { createClient } from '@supabase/supabase-js'
const api = express()
const PORT = 5050

api.listen(PORT, () => {
    console.log('API funcionando en el puerto: ', PORT);
})
api.get('/', (_, res) => {
    res.send('Api funcionando')
})

const supabaseUrl = process.env.SUPABASEURL
const supabaseKey = process.env.SUPABASEKEY
export const supabase = createClient(supabaseUrl, supabaseKey)




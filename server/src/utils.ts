import * as jwt from 'jsonwebtoken'

import { Response, Request } from 'express';
import Hashids from 'hashids';

const hashids = new Hashids('archive', 5);

export interface Context {
    res: Response
    req: Request
}

export function getUserId(ctx: Context) {
    const Authorization = ctx.req.cookies.token
    if (Authorization) {
        const { userId } = jwt.verify(Authorization, process.env.APP_SECRET) as { userId: string }
        return userId
    }

    throw new AuthError()
}

export function performLogin(ctx: Context, userId: String) {
    const token = jwt.sign({ userId }, process.env.APP_SECRET)
    ctx.res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    });
}

export function performLogout(ctx: Context) {
    getUserId(ctx);

    ctx.res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    });
}

export function to(promise: Promise<any>) {
    return promise.then(data => {
        return [null, data];
    })
    .catch(err => [err]);
}

export class AuthError extends Error {
    constructor() {
        super('Not authorized')
    }
}

export function encodeHashId(model: any, id: number) {
    return hashids.encode(model.hashid, id);
}

export function decodeHashId(model: any, id: string) {
    const res = hashids.decode(id);
    if (res.length < 2 || res[0] !== model.hashid) throw new Error('HashID is not valid for this type');
    return res[1]
}

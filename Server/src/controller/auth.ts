import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { IRegister, ILogin } from '../types/app';

dotenv.config();

const prisma = new PrismaClient();

// handler for POST /auth/register
export const register = async(req:Request, res:Response) =>{
    const {name, email, password} = req.body as IRegister;

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    });

    if(user){
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);
    
    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            password: hashedPassword
        }
    });


    return res.status(201).json({
        newUser
    });
}

// handler for POST /auth/login
export const login = async(req:Request, res:Response) =>{
    const {email, password} = req.body as ILogin;

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    });

    console.log(user);

    if(!user){
        return res.status(404).json({
            message: "User not found"
        });
    }

    const isPasswordValid:boolean = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token:string = jwt.sign({id: user.id}, process.env.JWT_SECRET as string, {
        expiresIn: '1d'
    });

    return res.cookie('token', token, {
        httpOnly: true
    }).status(200).json({
        user,
        token,
        expiresIn: 86400,
        tokenType: "Bearer",
        message: "Logged in"
    });
}

export const getUserDetails = async(req:Request, res:Response) =>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Not logged in"
        });
    }

    const decoded:any = jwt.verify(token, process.env.JWT_SECRET as string);

    const user = await prisma.user.findUnique({
        where:{
            id: decoded.id
        }
    });

    return res.status(200).json({
        user
    });
}


// handler for POST /auth/logout
export const logout = async(req:Request, res:Response) =>{
    return res.clearCookie('token').status(200).json({
        message: "Logged out"
    });
}

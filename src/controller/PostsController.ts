import { Request,Response } from "express";
import Posts from "../db/models/Posts";
import axios from "axios";

const GetPosts = async(req:Request, res: Response):Promise<Response> => {
    try {
        const posts = await Posts.findAll({
            order: [['id','ASC' ]],
            limit: 10
        });

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: posts
        });

    } catch (error:any) {
        if (error != null && error instanceof Error){
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            errors: error
        });
    }
}

const CreatePosts = async(req:Request,res: Response):Promise<Response> => {
    try {
        const {title,body,userId} = req.body;

        const create = await axios.post("https://jsonplaceholder.typicode.com/posts",
            JSON.stringify(
            {
                title:title,
                body:body,
                userId:userId
            }),
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }
        );

        return res.status(201).send({
            status: 201,
            message: "Created",
            data: create.data
        });
    } catch (error:any) {
        if (error != null && error instanceof Error){
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            errors: error
        });
    }
}

const PutPosts = async(req:Request,res: Response):Promise<Response> => {
    try {
        const {id} = req.params;
        const {title,body,userId} = req.body;

        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!posts) {
            return res.status(404).send({
                status: 404,
                message: "Not Found",
                data: null
            })
        }

        const put = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,
            JSON.stringify(
            {
                id:id,
                title:title,
                body:body,
                userId:userId
            }),
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }
        );

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: put.data
        });
    } catch (error:any) {
        if (error != null && error instanceof Error){
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            errors: error
        });
    }
}
const PatchPosts = async(req:Request,res: Response):Promise<Response> => {
    try {
        const {id} = req.params;
        const {title} = req.body;

        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!posts) {
            return res.status(404).send({
                status: 404,
                message: "Not Found",
                data: null
            })
        }

        const patch = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            JSON.stringify(
            {
                title:title,
            }),
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }
        ).then(result => result.data);

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: "Data patched"
        });
    } catch (error:any) {
        if (error != null && error instanceof Error){
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            errors: error
        });
    }
}

const DeletePosts = async(req:Request,res: Response):Promise<Response> => {
    try {
        const {id} = req.params;
        const {title,body,userId} = req.body;

        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!posts) {
            return res.status(404).send({
                status: 404,
                message: "Not Found",
                data: null
            })
        }

        const destroy = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return res.status(200).send({
            status: 200,
            message: "Ok",
            data: destroy.data
        });
    } catch (error:any) {
        if (error != null && error instanceof Error){
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            errors: error
        });
    }
}


export default {GetPosts, CreatePosts, PutPosts, PatchPosts, DeletePosts};
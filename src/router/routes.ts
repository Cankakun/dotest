import express from 'express'
import PostsController from '../controller/PostsController';
const router = express.Router();

router.get("/posts",PostsController.GetPosts)
router.post("/posts",PostsController.CreatePosts)
router.put("/posts/:id",PostsController.PutPosts)
router.patch("/posts/:id",PostsController.PatchPosts)
router.delete("/posts/:id",PostsController.DeletePosts)

export default router;
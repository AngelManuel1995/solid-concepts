import { PostService } from './dependency-2';


const postService = new PostService();

const posts = await postService.getPosts();

console.log({ posts })


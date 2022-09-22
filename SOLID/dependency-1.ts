import { PostService } from './dependency-2';
import { JsonDataBaseService, LocalDataBaseService } from './dependency-3';

const start = async () => {
    // const provider = new JsonDataBaseService()
    const provider = new LocalDataBaseService()
    const postService = new PostService(provider);
    const posts = await postService.getPosts();
    console.log({ posts })
}

start()
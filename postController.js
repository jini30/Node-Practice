const posts = [
    {
        id: 1,
        title: 'post 1'
    },
    {
        id: 2,
        title: 'post 2'
    }
];

const getPosts = () => posts;

export function getPostsLength()
{
    return posts.length;
}

export default getPosts;
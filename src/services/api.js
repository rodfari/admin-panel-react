
export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};

export const getPost = async (id) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    const userData = await getUser(data.userId);
    const { name } = userData;
    return { ...data, name };
}

export const getUser = async (id) => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userData = await user.json();
    return userData;
};
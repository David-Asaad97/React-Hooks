import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const FetchComponents = () => {
    const { data, isLoading } = useFetch(url);
    return (
        <div>
            {isLoading ? (
                <h3>Loading....</h3>
            ) : (
                <div>
                    <Post />
                    {data.map((el) => {
                        const { id, name, phone } = el;
                        return (
                            <div key={id} className="users  shadow ">
                                <h3>{name}</h3>
                                <h5>{phone}</h5>
                            </div>
                        );
                    })}
                    
                </div>
            )}
        </div>
    );
};

const Post = () => {
    const { data, isLoading } = useFetch(postUrl);

    return <div>
        {
            isLoading ? <h3>Loading...</h3> : <div>
                {data.map(el => {
                    const { id, title, body}= el;
                    return(
                        <div key={id} className="users p-4 bg-white rounded shadow">
                            <h3>{title}</h3>
                            <article>
                                <cite>
                                    {body}
                                </cite>
                            </article>
                        </div>
                    )
                })}
            </div>
        }
    </div>
}

export default FetchComponents;

import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Sono una About Page</h1>
            <div>

                <button className='btn btn-sucess mt-4' onClick={() => navigate(-1)}>Redirect</button>
            </div>
        </div>
    )
}

export default About;
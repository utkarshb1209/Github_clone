import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { BsGithub } from 'react-icons/bs'

export const Home = () => {

    const [userName, setUserName] = useState("");
    console.log(userName);

    return (
        <>
            <div className='homePage'>
                <div style={{
                    display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',
                    backgroundColor: 'black', padding: '30px', flexWrap: 'wrap'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap: '10px' }}>
                        <BsGithub style={{ fontSize: '40px', color: 'white' }} />
                        <span style={{
                            color: 'white', fontWeight: 'bold', letterSpacing: '2px', fontSize: '30px'
                        }}>Github</span>
                    </div>
                    <form>
                        <input value={userName} type="text" placeholder="Enter your username"
                            onChange={(e) => setUserName(e.target.value)} />
                        <Link to={`/${userName}`}><button>Submit</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}
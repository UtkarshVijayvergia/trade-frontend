import React from 'react'
import './Dashboard.css';
import { useEffect } from 'react'
import { useState } from 'react' // for storing the incoming data of the user after verification
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'


const Dashboard = () => {

    const [users, setUsers] = useState([])
    const getusers = async () => {
        try{
            const response = await fetch('/dashboard')
            setUsers(await response.json());
        }
        catch(error){
            console.log(error);
        }
    } 

    useEffect(() => {
        getusers()
    }, [])









    
    return (
        <div className='container'>
            <center>
                <br />
                <div className="table-responsive-lg">
                    <table className="table table-lg table-borderless">
                        <thead>
                            <tr>
                                <th scope="col"><FontAwesomeIcon icon={faSquare}/></th>
                                <th scope="col">NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">PERCENT</th>
                                <th scope="col">Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(data => { 
                                    return (<>
                                        <tr>
                                            <td scope="row">{(data.percentage > 0)?<FontAwesomeIcon icon={faArrowAltCircleUp} className="icon-cog icon-green " />:<FontAwesomeIcon icon={faArrowAltCircleDown} className="icon-cog icon-red " />}</td>
                                            <td>{data.name}</td>
                                            <td>{data.price}</td>
                                            <td>{data.percentage}</td>
                                            <td><button className='btn btn-success button-padder'>BUY</button><button className='btn btn-danger button-padder'>SELL</button></td>
                                        </tr>
                                    </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
}

export default Dashboard
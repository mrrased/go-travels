import { Container } from '@mui/material';
import React ,{ useEffect , useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Puff } from 'react-loader-spinner';

const SIngleVeiw = () => {

    const [singleData, setSingleData] = useState();
    const [isLoading, setIsLoading] = useState(0);


    const { singleId } = useParams()
    const navigate = useNavigate()
    console.log('user id ',singleData);




    useEffect(()=>{
        // const token = localStorage.getItem('t_id').split('"')[1];
        setIsLoading(1);
        // console.log('work');
        fetch(`http://localhost:5000/singleView/${singleId}`)
        .then(res => res.json())
        .then(data => {

            setSingleData(data)

            fetch('http://localhost:5000/seen',{

                method: 'PUT',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            }).then()
            
        }).finally(()=>{ setIsLoading(0) })
        // .then(res => res.json())
        // .then(data => {
        //     fetch(`http://localhost:5000/remove`,{

        //         method: 'POST',
        //         headers:{
        //             'content-type' : 'application/json'
        //         },
        //         body: JSON.stringify(singleId)
        //     })
        //     .then(res=> res.json())
        //     .then(data => console.log(data))
        // })
        
        
    },[singleId])
// console.log(singleData);

    return (
        <Container maxWidth="lg">
            { isLoading === 1 &&
                <div className='flex justify-center items-center h-screen w-full'>
                    <Puff
                        height="80"
                        width="80"
                        radius={1}
                        color="#57112f"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            }
            <div className='py-20 '>
                <div className='xl:flex xl:justify-center'>
                    <div>
                        <ArrowBackIcon sx={{ fontSize: 40 }} className='p-2 hover:bg-slate-200 cursor-pointer mr-2' onClick={ ()=>navigate('/dashboard/users-message') } /><span>back</span><br />
                        <input  defaultValue={singleData?.name} className='w-full xl:w-[600px] p-4' /><br />
                        <input  defaultValue={singleData?.number} className='w-full xl:w-[600px] p-4' /><br />
                        <input  defaultValue={singleData?.subject} className='w-full xl:w-[600px] p-4' /><br />
                        <textarea rows="14" defaultValue={singleData?.messages} className='w-full xl:w-[600px] p-4 '></textarea><br />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SIngleVeiw;
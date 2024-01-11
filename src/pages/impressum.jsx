export default function Impressum () {

    const API_URL = import.meta.env.VITE_API_URL    


    async function loadCookie()
    {
        const res = await fetch(API_URL+ '/cookie',{
            withCredentials: true,
            credentials: 'include'
            });
    
        const data = await res.json();
        console.log(data)
    
    
    }
    
        loadCookie();




    return (
    <>
    <h1>Hello Impressum</h1>
    </>
    )
    
    }
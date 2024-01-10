


const API_URL = import.meta.env.VITE_API_URL

function Faq()
{
    console.log("FAQ")

    async function loadCookie(){
    const res = await fetch(API_URL+ '/cookie',{
        withCredentials: true,
        credentials: 'include'
});

    const data = await res.json();
    console.log(data)


    }
    loadCookie();

    return <h1>FAQ</h1>


}

export default Faq
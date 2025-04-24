import {client} from "@repo/db/client";

export default async  ()=>{
const user = await client.user.findFirst()

return <>

<h1>
this is DEV branch this is DEV branch this is DEV branch this is DEV branch this is DEV branch 
</h1>

<p>name  2222: {user?.name}</p>
<p>email : {user?.email}</p>
<p>password : {user?.password}</p>

</>

}
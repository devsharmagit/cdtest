import {client} from "@repo/db/client";

export default async  ()=>{
const user = await client.user.findFirst()

return <>

<h1>
  this is going to be the user details page
</h1>

<p>name : {user?.name}</p>
<p>email : {user?.email}</p>
<p>password : {user?.password}</p>

</>

}
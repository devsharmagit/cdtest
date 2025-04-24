import {client} from "@repo/db/client";

export default async  ()=>{
const user = await client.user.findFirst()

return <>

<h1>
  this is dev branch code this is dev branch code
</h1>

<p>name  2222: {user?.name}</p>
<p>email : {user?.email}</p>
<p>password : {user?.password}</p>

</>

}
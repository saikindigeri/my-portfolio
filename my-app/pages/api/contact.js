import { mailOptions, transporter } from "../../config/nodemailer";
const email=process.env.EMAIL;
const pass=process.env.EMAIL_PASS;

const handler=async(req,res)=>{
  if (req.method==="POST"){
    console.log(req.body)
  

    try{
      await transporter.sendMail({
       from:req.body.email,
       to:email,
        text:req.message,
        html:"<h1>TEST TITLE <p>{text}/p></P></h1>"
      });

      return res.status(200).json({success:true});

    }catch(error){
      console.log(error)
      return res.status(400).json({message:error.message})
    }


  }
 
 
  res.status(200).json({name:'DevaSS'})

}


export default handler
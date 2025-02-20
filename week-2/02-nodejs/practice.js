
const z= require("zod");
const express= require("express");

const app=express();

app.use(express.json());

// function validateInput(arr){
//   const schema= zod.array(zod.number());
  
//   const response= schema.safeParse(arr);
//   console.log(response);
// }


// validateInput([1,3,5]);




// console.log(userSchema.parse({name: "Giyan", age: "23"}));

// const result= userSchema.safeParse({name: "Giyan", age: 23, email: "fjoiesnfs@outlook.com"});
// console.log(result);

// const passwordSchema= z.string().min(8, "Password must be 8 digit long");

// console.log(passwordSchema.safeParse("123345"));
// console.log(passwordSchema.safeParse("abkdihoisf"));

function validateInput(obj){
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  });
  return userSchema.safeParse(obj);
}

app.get("/login", function(req, res){
  res.json({
    msg: "connected"
  })
});



app.post("/login", function(req, res){
  const response=validateInput(req.body);
  if(!response.success){
    res.status(400).json({
      msg: "Not valid"
    });
  }else{
    res.status(200).json({
      msg: "login successfully"
    });
  }
})

app.listen(3000);
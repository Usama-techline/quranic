<template>
<div class="wrapper">
 <div class="inner">
 
 <div class="sidenav">
         <div class="login-main-text">
            <h2>Quranic<br> Admin Login</h2>
            <ul style="margin-top:40px;list-style:none">
                <li> is simply dummy text of the printing and typesetting</li>
                <li>make a type specimen book. It has survived not only five centuries</li>
                <li>It is a long established fact that a reader will be distracted by the </li>
                <li>using Lorem Ipsum is that it has a more-or-less normal</li>
                <li>making it look like readable English. Many desktop publishing</li>
                <li>using Lorem Ipsum is that it has a more-or-less normal distributio</li>
              
            </ul>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
         
            <div class="login-form">
                <div v-show="errored">
             <p class="err">Invalid Credentials</p>
           </div>
               <b-form @submit.prevent="onSubmit" >
                  <div class="form-group">
                     <label>Email</label>
                     <input type="email" required class="form-control" placeholder="Email" v-model="email" :state="validation">
                     <b-form-invalid-feedback :state="validation">
                           Email is Required
                          </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" required class="form-control" placeholder="Password" v-model="password" :state="pvalidation">
                      <b-form-invalid-feedback :state="pvalidation">
                           Password is Required
                          </b-form-invalid-feedback>
                  </div>
                  <button  class="btn btn-black" type="submit">Login</button>
                
               </b-form>
            </div>
         </div>
      </div>
    </div>
</div>
</template>

<script>


export default {
  layout:'login',
  data()
  {
    return{
      email:'',
      password:'',
      errored:false
    }
  },
  methods:{
    async onSubmit()
    {
    await this.$axios.post('http://127.0.0.1:8000/api/login',{
       'email':this.email,
       'password':this.password
     })
     .then(response => {
       if(response.data.status=='User Sign In Sucesfully!')
       {
           this.$router.push('/dashboard')
       }
       
      
      })
     .catch(error => {
        console.log(error)
        this.errored = true
      })
    }
  },
  computed:{
    validation()
    {
      return this.email!=''
    },
    pvalidation()
    {
      return this.password!=''
    }
  }
}
</script>

<style scoped>
.err
{
color: red;
    font-size: 15px;
    font-weight: bold;
}
.inner{
 
  height:auto;
  width:50%;
  margin: 0 auto;
 
}
.wrapper
{
  margin-top:100px;
}
.logo{
  width:50%;
  height:auto;
  margin: 0 auto; 
}
.login{
  height:auto;
  width:70%;

}
.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #000;
    
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>

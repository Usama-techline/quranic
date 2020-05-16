<template>
<div>
   <b-container class="dash">
  <b-row>

    <b-col>
           <nuxt-link to="/viewposts"> <div class="icon">
               <img src="../assets/images/posts.png" style="width: 230px;margin-left: 62px;">
            </div>
           </nuxt-link>
            <div class="heading">
                  <h2>Total Posts</h2>
                  <h5>{{totalposts}}</h5>
            </div>
   </b-col>
    <b-col>
       <nuxt-link to="/viewposts">
        <div class="icon">
                 <img src="../assets/images/month.png" style="width: 230px;margin-left: 62px;">
            </div>
            </nuxt-link>
            <div class="heading">
                  <h2>Posts this Month </h2>
                  <h5>{{totalposts}}</h5>
            </div>
    </b-col>
    <b-col>
       <nuxt-link to="/postcat">
        <div class="icon">
               <img src="../assets/images/cat.png" style="width: 230px;margin-left: 62px;">
            </div>
       </nuxt-link>
            <div class="heading">
                  <h2>Posts Categories </h2>
                  <h5>{{totalposts}}</h5>
            </div>
    </b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
export default {
    data()
    {
       return {
          totalposts:0
       }
    },
    created()
    {
       this.fetchdata()
    },
    methods:{
        async  fetchdata()
      {
       await  this.$axios.get('http://127.0.0.1:8000/api/posts')
     .then(response => {
      
        this.posts=response.data.posts.data 
        this.totalposts=this.posts.length
       
     console.log(response.data.posts.data)
    })
     .catch(error => {
        console.log(error)
        this.errored = true
      })
      
      }
    }
}
</script>
<style scoped>
.dash
{
   margin-top:35px;
}
.heading
{

text-align: center;
}
</style>
<template>
    <div  id="top">
        <h3 style="text-align:center;margin-bottom:20px;">Post Categories</h3>
    <div style="margin-bottom:20px;">
     <b-form-select v-model="selected" @change="cat">
       <option v-for="post in posts" :key="post.id">{{post.category}}</option>
     </b-form-select>
     </div>
       <div v-if="isLoaded">
       
         
    
      <b-row align-v="center">
       
         <cardview  v-for="post in fpost" :key="post.id" :title="post.title" :category="post.category" :description="post.description" :image="post.image" :ukey="post.id"></cardview>
    
  </b-row>
 
      </div>
<div v-else>
   <p style="font-size:15px;font-weight:bold;color:red"> Loading Posts...</p>
</div>
    </div>
</template>
<script>
import cardview from '../components/card.vue'
 export default {
   components:{cardview},
    data() {
      return {
        selected: null,
        posts:[],
       fpost:[]
      }
    },
    mounted()
    {
        this.fetchdata();
    },
computed: {
            rolesByCategory() {
                return _.groupBy(this.posts, 'category') 
            }
},
    methods:{
      
      cat(event)
      {
        this.fpost=this.posts.filter((post)=>
        {
          return post['category'].toLowerCase().includes(event.toLowerCase())
        })
      },
    async  fetchdata(){
        await  this.$axios.get('http://127.0.0.1:8000/api/posts')
     .then(response => {
       this.isLoaded = true
        this.posts=response.data.posts.data 
       
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
#top
{
    margin-top:10px;
}
#postdescription
{
margin:30px;
color:black;
}
</style>
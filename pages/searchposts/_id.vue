<template>
    <b-container>
      <h3 id="heading"> View Posts</h3>
     
      <div v-if="isLoaded">
       
         
    
      <b-row align-v="center">
       
         <cardview v-for="post in dposts" :key="post.id" :title="post.title" :category="post.category" :description="post.description" :image="post.image" :ukey="post.id"></cardview>
    
  </b-row>
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
      </div>
<div v-else>
   <p style="font-size:15px;font-weight:bold;color:red"> Loading Posts...</p>
</div>
         
    </b-container>
</template>
<script>
import cardview from '../../components/card.vue'
export default {
  components:{
  cardview
},
  data()
  {
    return{
 isLoaded: false,
   id: this.$route.params.id,
       posts:{},
       dposts:{},
       currentPage:1,
       rows:1,
       perPage:3
    }
       
      
    
  },
  
   
created(){
        this.fetchdata()
       
    },
    beforeMount()
    {
this.filt
    },
    methods:{
      filt()
      {
        this.dpost=this.posts.filter((post)=>
        {
          return post['category'].toLowerCase().includes(this.id.toLowerCase())
        })
      },
      paginate(currentPage)
      {
        const start=(currentPage-1)*this.perPage;
        this.dposts=this.posts.slice(start,start+3);
        console.log(this.dposts)
      },
  async  fetchdata()
      {
       await  this.$axios.get('http://127.0.0.1:8000/api/posts')
     .then(response => {
       this.isLoaded = true
        this.posts=response.data.posts.data 
        this.rows=this.posts.length
        this.dposts=this.posts.slice(0,3)
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

#heading
{
    text-align:center;
    margin-bottom:20px;
}
#postdescription
{
margin:30px;
color:black;

}
.pagination
{
  display: flex !important;
}
</style>
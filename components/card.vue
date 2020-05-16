<template>
    <div style="margin-bottom:20px;">
         <b-col>
            
    <b-card 
    :title="title.slice(0, 15)"
    :img-src="image"
    alt="image"
    img-top
    tag="article"
    style="max-width:20rem"
    class="mb-2"
    id="vposts"
    @click="go(ukey)"
    :footer="category.slice(0,20)"
    >
        <b-card-text>
        {{description.slice(0,20)+'......'}}  
        </b-card-text>
       
    </b-card>
     <b-button variant="primary" @click="update(ukey)">Update</b-button>
          <b-button variant="danger" @click="delet(ukey)">Delete</b-button>
        </b-col>
         
    </div>
</template>
<script>
export default {
    props:['title','category','description','image','ukey'],
    data:
    {
        del:false
    },
    methods:
    {
        update(key)
        {
            const pid=key;
            this.$router.push({ path: `/updpost/${pid}` })
        },
      async  delet(key)
        {
            await  this.$axios.post('http://127.0.0.1:8000/api/post/delete',
             {'id':key})
     .then(response => {
       alert('Post Deleted Succesfully')
        
     
    })
     .catch(error => {
        console.log(error)
        this.errored = true
      })
        }
        ,go(key)
        {
           const pid=key;
           
            this.$router.push({ path: `/specificpost/${pid}` })
        }
    },
    data()
    {
        return{
           
        }
    }
}
</script>
<style scoped>
#vposts
{
  color:black;
  text-align:center;
}
</style>
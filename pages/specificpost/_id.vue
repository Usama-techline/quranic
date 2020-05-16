<template>
    <div>
          <b-card no-body class="overflow-hidden" bg-variant="dark" text-variant="white" style="max-width: 100%" >
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="this.data.image" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="this.data.title">
          <b-card-text>
           {{this.data.description}}
          </b-card-text>
        </b-card-body>
        <b-card-footer>
        <b-button variant="primary" @click="update()">Update</b-button>
          <b-button variant="danger" @click="delet()">Delete</b-button>
        </b-card-footer>
      </b-col>
    </b-row>
  </b-card>
    </div>
</template>
<script>
export default {
    validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data()
  {
      return{
          id: this.$route.params.id,
          data:[],
          isLoaded:false
      }
  },
  mounted()
  {
      this.fetchdata();
  },
  methods:{
     async fetchdata(){
             await  this.$axios.post('http://127.0.0.1:8000/api/post/show',
             {'id':this.id})
     .then(response => {
       this.isLoaded = true
        
     this.data=response.data.posts
    })
     .catch(error => {
        console.log(error)
        this.errored = true
      })
      },
       update()
        {
            const pid=this.id;
            this.$router.push({ path: `/updpost/${pid}` })
        },
      async  delet()
        {
            await  this.$axios.post('http://127.0.0.1:8000/api/post/delete',
             {'id':this.id})
     .then(response => {
       alert('Post Deleted Succesfully')
       this.$router.push('/viewposts')
        
     
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

</style>
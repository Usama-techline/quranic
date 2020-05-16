<template>
    <div style="margin:50px">
   <h3 style="margin-bottom:20px;text-align:center;">Update Post</h3>
   <div>
    <b-form @submit.prevent="onSubmit" >
      <div v-show="postsuccess">
        <p class="success">Post Updated Successfully</p>
      </div>
       <div v-show="errored">
        <p class="err">Post not Created </p>
      </div>
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="title"
          type="text"
          required
          placeholder="Enter Title"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-4"
        label="Caategories:"
        label-for="input-4"
      >
      <b-form-input
          id="input-5"
          v-model="categ"
          type="text"
          required
          placeholder="Enter Category"
        ></b-form-input>
      </b-form-group>
       
 <b-form-group
        id="input-group-2"
        label="Description:"
        label-for="input-2"
      >
        <b-form-textarea
      id="desc"
      v-model="desc"
      placeholder="Enter Description..."
      rows="8"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Picture:"
        label-for="input-3"
      >
        <b-form-file
      v-model="file"
     type="file"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      @change="fileselected"
    ></b-form-file>
      </b-form-group>
     <b-button pill variant="success" type="submit"  style="font-size: 20px;
    width: 120px;">Update</b-button>
    </b-form>
   </div>
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
        return {
             id: this.$route.params.id,
             data:[],
             categ:'',
             title:'',
             desc:'',
             file:null,
             postsuccess:false,
             errored:false
        }
    },
    mounted()
    {
        this.fetchdata();
    },
    methods:
    {
        async fetchdata(){
             await  this.$axios.post('http://127.0.0.1:8000/api/post/show',
             {'id':this.id})
     .then(response => {
       this.isLoaded = true
        
     this.data=response.data.posts
     this.title=this.data.title
     this.desc=this.data.description
     this.categ=this.data.category
     this.file=this.data.image
    })
     .catch(error => {
        console.log(error)
        this.errored = true
      })
      },
       fileselected(event)
      {
          
          this.file=event.target.files[0];
      },
     async onSubmit()
      {
        const fd=new FormData();
        fd.append('id',this.id)
        if(!this.file)
        {
         fd.append('image',this.file,this.file.name)
        }
       
       fd.append('title',this.title)
       fd.append('description',this.desc)
       fd.append('category',this.categ)

          
        console.log(this.file)
         await this.$axios.post('http://127.0.0.1:8000/api/post/update',fd)
     .then(response => {
       if(response.data.status=='Post Updated Sucesfully!')
       {
          this.postsuccess = true
          this.title='',
          this.desc='',
          this.categ='',
          this.file=null

       }
       
      
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
.success
{
 font-size: 20px;
    font-weight: bold;
    color: #0dff2b;
}
.err
{
  font-size:15px;
  font-weight:bold;
  color:red;
}
</style>
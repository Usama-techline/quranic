<template>
  <div >
    <b-navbar toggleable="lg" type="dark" style="background-color:#0f778c;position:sticky;top: 0;width: 100%;overflow: hidden;">
    <b-navbar-brand href="#">Admin Panel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Posts" @input="search" :disabled="searching"></b-form-input>
        
        </b-nav-form> -->

       

         <!-- <b-nav-item href="#" style="float:right;">Name</b-nav-item> -->
          <!-- Using 'button-content' slot -->
          
          
         
          
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <div class="sidebar">
     <div class="logo">
       <img src="../assets/images/logo.png" style="width:100%">
     </div>
  <nuxt-link to="/dashboard"><a class="active"><i class="fa fa-fw fa-home"></i>Dashboard</a></nuxt-link>
  <nuxt-link to="/posts"><a><i class="fa fa-fw fa-envelope"></i>Posts</a></nuxt-link>
  <nuxt-link to="/postcat"><a><i class="fa fa-list-alt" aria-hidden="true"></i>Categories</a></nuxt-link>
  <nuxt-link to="/viewposts"><a><i class="fa fa-newspaper-o" aria-hidden="true"></i>View Posts</a></nuxt-link>
  <nuxt-link to="/profile"><a><i class="fa fa-user"></i>Profile</a></nuxt-link>
  <nuxt-link to="/"><a><i class="fa fa-sign-out"></i>Logout</a></nuxt-link>
 
</div>

<!-- Page content -->
<div class="content">
    <nuxt />
</div>
  
  </div>
</template>
<script>
export default {
  data()
  {
    return{
      searching:false
    }
  },
  methods:{
    
    search(event)
    {
        
       const pid=event;
            this.$router.push({ path: `/searchposts/${pid}` })
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.navbar
{
  margin-bottom:0px !important;
  padding:0px !important;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.sidebar {
  margin: 0;
  padding: 0;
  width: 15%;
  background-color: #162640;
  position: fixed;
  height: 100%;
 
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: blanchedalmond;
  font-size: 20px;
    font-weight: bold;
    padding: 8px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color:#273d61;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  background-color: dimgrey;
  margin-left: 200px;
  color:white;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
  .logo
  {
   margin-bottom:100px;
  }
}
</style>

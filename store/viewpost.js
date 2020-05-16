export const state=()=>({
    posts:[]
})
export const mutations={
    add(state,post)
    {
        state.posts=post;
    }
}
export const actions=
{
    async fetch_data(context)
    {
        
       let response = await this.$axios.$get('http://127.0.0.1:8000/api/posts');
       console.log(response)
    }
}
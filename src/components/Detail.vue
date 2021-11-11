<template>
  <div>
      <h3>상세페이지</h3>
      <h4>{{ blogData[$route.params.id].title }}</h4>
      <p>{{ blogData[$route.params.id].content }}</p>
      <p>{{ blogData[$route.params.id].date }}</p>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props:{
        blogData: Object,
    },
    data(){
        return{
            pageNumber: 0,
        }
    }
}
</script>

<style>

</style>
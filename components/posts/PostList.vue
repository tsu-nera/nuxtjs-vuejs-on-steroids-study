<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      thumbnail="https://picsum.photos/200/300"
      title="Hello there 1!"
      preview-text="This is my first post"
    />
    <PostPreview
      id="1"
      thumbnail="https://picsum.photos/200/300"
      title="Hello there 2!"
      preview-text="This is my second post"
    />
    <PostPreview
      id="1"
      thumbnail="https://picsum.photos/200/300"
      title="Hello there 3!"
      preview-text="This is my third post"
    />
  </section>  
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scope>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInti(vuexContext, context) {
        fetch: {
          // Handling Errors with a Callback
          return new Promise(() => {
            setTimeout(() => {
              vuexContext.commit('setPosts', [
                {
                  id: '1',
                  title: 'First Post',
                  previewText: 'This is our first post!',
                  thumbnail:
                    'https://www.articlesplanet.info/wp-content/uploads/2018/05/Tech-sector.jpg'
                },
                {
                  id: '2',
                  title: 'Second Post',
                  previewText: 'This is our second post!',
                  thumbnail:
                    'https://www.articlesplanet.info/wp-content/uploads/2018/05/Tech-sector.jpg'
                }
              ])
            })
          })
        }
      },
      addPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore

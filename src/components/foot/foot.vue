<template>
    <div class="foot">
            childMsg
            <span>
                {{clide}}
            </span>
    </div>
     </template>

     <script>
      export default {
        name: 'foot',
        data () {
          return {
            childMsg: 'Welcome to Your Vue.js App',
            clide:this.message
          }
        },
        props: ['message']

      }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
          .footer .about, .footer .blog, .footer .follow, .footer .contact {
      width: 32%;
    }
    </style>

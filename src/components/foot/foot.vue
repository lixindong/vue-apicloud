<template>
    <div class="foot">
            childMsg
            <span>
                {{clide}}
            </span>
            <button v-on:click="incrementCounter">{{ counter }}</button>
    </div>
     </template>

     <script>
      export default {
        name: 'foot',
        data () {
          return {
            childMsg: 'Welcome to Your Vue.js App',
            clide:this.message,
            counter:0
          }
        },
        props: ['message'],
        methods: {
         incrementCounter: function () {
           this.counter += 1
           this.$emit('increment')
         }
       },

      }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
          .footer .about, .footer .blog, .footer .follow, .footer .contact {
      width: 32%;
    }
    </style>

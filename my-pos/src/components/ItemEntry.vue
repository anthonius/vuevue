<template>
  <div>
    <router-link to="/dashboard">Back</router-link>


    <div class="form-group">
      <label>Name</label>
      <input type="text" v-model="newItem.name">
    </div>
    <div class="form-group">
      <label>Price</label>
      <input type="number" v-model="newItem.price">
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea v-model="newItem.description"></textarea>
    </div>
    <div class="form-group">
      <a @click="addItem" class="btn btn-primary">Save</a>
    </div>

    <table border="1">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in storageItems">
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.description}}</td>
          </tr>
      </tbody>
    </table>



  </div>
</template>


<script>
import{mapGetters} from 'vuex'
  export default {
    name: 'item-entry',
    data() {
      return {
        newItem: {}
      }
    },
    created () {
      this.$store.dispatch('getStorageItems')
    },
    computed: {
      ...mapGetters(['storageItems'])
    },
    methods: {
      addItem: function() {
        this.$store.dispatch('addStorageItem', this.newItem)
        alert('tem has been added: ' + this.newItem.name)
        this.newItem ={}
      }
    }
  }
</script>

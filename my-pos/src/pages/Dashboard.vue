<template>
  <div>
    <div class="text-center"><h1>Dashboard POS</h1></div>

    <div v-for="(item, index) in menuItems">
      {{item.category}}
      <br />
      <router-link
        v-for="subItem in item.list"
        class="sub-item"
        v-bind:to="subItem.to"
        v-if="!subItem.disabled">
      {{subItem.label}}<br />
      </router-link>
    </div>
    <br /><br />

    <router-link to="/" class="btn btn-primary"> Logout </router-link>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        menuItems: [
          {
            category: 'Master Entry',
            list: [
              {
                label: 'Items',
                to: '/dashboard/items'
              },
              {
                label: 'Stock',
                to: '/dashboard/stocks'
              },
              {
                label: 'Merchant',
                to: '/dashboard/merchant',
                disabled: true
              }
            ]
          },
          {
            category: 'Transaction',
            list: [
              {
                label: 'Orders',
                to: '/dashboard/orders'
              },
              {
                label: 'Payments',
                to: '/dashboard/payments'
              }
            ]
          }
        ]
      }
    }
  }
</script>


<style scoped>
  .sub-item {
    margin-left: 50px;
   }
</style>

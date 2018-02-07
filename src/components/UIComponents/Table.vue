<template>
  <table class="table">
    <thead class="no-border">
      <slot name="columns">
        <th v-for="column in columns">{{column}}</th>
      </slot>
    </thead>
    <tbody>
    <tr v-for="item in data">
      <slot :row="item">
        <td v-for="column in columns" v-if="hasValue(item, column)">
          <span :class="{red: item.change24h.charAt(0)=='-' && column=='Change24h' ,
                         green: item.change24h.charAt(0)!=='-' && column=='Change24h'}">
            <img v-if="column=='Currency'" :src='item.logo'/>

            <img v-if="column=='Change24h' && item.change24h.charAt(0)=='-'" :src='item.down'/>
            <img v-if="column=='Change24h' && item.change24h.charAt(0)!=='-'" :src='item.up'/>

            <img v-if="column=='Signal' && item.signal=='Neutral'" :src='item.neutral'/>
            <img v-if="column=='Signal' && (item.signal=='Buy' || item.signal=='Strought buy')" :src='item.buy'/>
            <img v-if="column=='Signal' && (item.signal=='Sell' || item.signal=='Strought sell')" :src='item.sell'/>

            {{itemValue(item, column)}}

          </span>

          </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }
</script>
<style>
  .red{
    color:#c60606;
  }
  .green{
    color: #02b90a;
  }
  .table tbody td{
    font-family: "PT Mono";
  }
  .no-border{
    border-top: 2px solid transparent;
    background: #f4f4f4;
  }
  .table-striped tbody tr:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0);
  }
  .table-striped tbody tr:nth-child(1){

  }


</style>

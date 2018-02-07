<template>
  <li class="dropdown nav-item"
      :is="tag"
      :class="{show: isOpen}"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="toggleDropDown"
      v-click-outside="closeDropDown">

    <a class="nav-link dropdowne-toggle"
       data-toggle="dropdowne">
      <slot name="title">
        <i :class="icon"></i>
        <span class="no-icon">{{title}}</span>
        <b class="caret"></b>
      </slot>
    </a>
    <div class="dropdown-menu" v-show="isOpen">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'drop-down',
    props: {
      title: String,
      icon: String,
      tag: {
        type: String,
        default: 'li'
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
        this.$emit('change', this.isOpen)
      },
      closeDropDown () {
        this.isOpen = false
        this.$emit('change', this.isOpen)
      }
    }
  }
</script>
<style scoped>

  .navbar .navbar-nav .nav-item .nav-link{
    color: #1b2021;
    padding: 10px 15px;
    position: relative;
    display: inline-flex;
    line-height: 1.2;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
  .navbar .dropdown.nav-item .dropdowne-toggle:after{
    font-size: 18px;
    cursor: pointer;
  }
  .navbar .navbar-nav .dropdowne-toggle:after{
    cursor: pointer;
    margin: auto;
  }
  .dropdowne-toggle::after{
    cursor: pointer;
    margin-left: 0.255em;
    content: "\22C1";
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-black">
    <div class="container-fluid">
      <img src="static/img/Logo.png">
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item nav-link">
            <a class="news" href="#">NEWS</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="login">
              LOGIN
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img src="static/img/moon-icon.png"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      }
    }
  }
</script>
<style scoped>
  .navbar-black{
    height: 78px;
    background: #1b2021;
  }

  .login {
    font-family: "PT Sans";
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 30px;
  }

  .news{
    font-family: "PT Sans";
    margin-left: 30px;
    color: #757575;
    font-weight: 700;
    text-transform: uppercase;
    }

</style>

<template lang="html">
<header>
  <div id="top">
    <div class="menu icon"></div>
    <div class="menu-container">
    <router-link tag="div" class="music icon" to="/music"></router-link>
    <router-link tag="div" class="discover icon" to="/discover"></router-link>
    <router-link tag="div" class="friends icon" to="/friends"></router-link>
    </div>
    <div class="search icon"></div>
  </div>
</header>
</template>

<script>

</script>

<style lang="">
  html,
  body {
    height: 100%;
  }
  header {
    width: 100%;
    height: 1rem;
    background-color: #d33a31;
  }
  #top {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    display: -webkit-box;
    display: -ms-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .icon {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  #top .menu {
    width: 0.44rem;
    height: 0.44rem;
    background-image: url("../../static/images/header/lo.png");
  }
  #top .menu-container {
    width: 3rem;
    height: 100%;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
  }
  #top .menu-container div {
    -webkit-box-flex: 1;
  }
  #top .music {
    background-image: url("../../static/images/header/t_actionbar_music_normal.png");
  }
  #top .discover {
    background-image: url("../../static/images/header/t_actionbar_discover_normal.png");
  }
  #top .friends {
    background-image: url("../../static/images/header/t_actionbar_friends_normal.png");
  }
  #top .search {
    width: 0.44rem;
    height: 0.44rem;
    background-image: url("../../static/images/header/search.png");
  }
</style>
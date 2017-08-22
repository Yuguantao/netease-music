<template>
  <section id="discover">
    <div class="discover-menu">
      <div class="recommend">个性推荐</div>
      <div class="songs">歌单</div>
      <div class="anchor">主播电台</div>
      <div class="chart">排行榜</div>
    </div>
    <div class="discover-content">
      <div class="discover-btn">
        <figure>
          <div><img src="./images/body/t_recommend_icn_fm.png" alt=""></div>
          <figcaption>私人FM</figcaption>
        </figure>
      </div>
      <div class="discover-btn">
        <figure>
          <div>
            <img src="./images/body/t_recommend_icn_daily.png" alt="">
            <span>22</span>
          </div>
          <figcaption>每日歌曲推荐</figcaption>
        </figure>
      </div>
      <div class="discover-btn">
        <figure>
          <div><img src="./images/body/t_recommend_icn_rank.png" alt=""></div>
          <figcaption>云音乐热歌榜</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #discover {
    width: 100%;
  }
  .discover-menu {
    width: 100%;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
  }
  .discover-menu div {
    -webkit-box-flex: 1;
    height: 0.7rem;
    box-sizing: border-box;
    font-size: 0.28rem;
    display: flex;
    disply: -webkit-box;
    display: -ms-flex;
    -webkit-box-pack: justify;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666694;
  }
  .discover-content {
    width: 100%;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    border-bottom: 1px solid #e3e5e6;
  }
  .discover-content div {
    -webkit-box-flex: 1;
    font-size: 0.2rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: center;
    -webkit-box-align: center;
    -ms-box-align: center;
    align-items: center;
  }
  .discover-content .discover-btn img {
    height: 2rem;
  }
  .discover-btn {
    position: relative;
  }
  .discover-btn span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-90%);
    -webkit-transform: translate(-50%) translateY(-52%);
  }
  .discover-btn figcaption {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
  }

</style>

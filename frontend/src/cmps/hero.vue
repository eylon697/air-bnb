<template>
  <section class="hero full" :style="{ backgroundImage: `url(${changeBg})` }">
    <div class="flexible">
      <p>Not sure where to go? Perfect.</p>
      <button @click="goToExplore"><span>I’m flexible</span></button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      interval: null,
      imgUrl: 1,
    };
  },

  methods: {
    goToExplore() {
      this.$router.push(`/stay`);
    },
  },

  computed: {
    changeBg() {
      const imgUrl = require(`@/assets/img/hero/home${this.imgUrl}.png`);
      return imgUrl;
    },
  },
  created() {
    // this.interval = setInterval(() => {
    //   this.imgUrl++;
    //   if (this.imgUrl > 3) this.imgUrl = 1;
    // }, 5000);
  },
  // destroyed() {
  //   clearInterval(this.interval);
  // },
};
</script>

 


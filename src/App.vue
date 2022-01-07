<template>
  <TopNav />
  <HeroTop/>
  <Cards/>
  <FeatureInfoOne/>
  <FeatureInfoTwo/>
  <HeroBottom/>
  <BottomNav />
</template>
<script>
import TopNav from "./components/Nav/TopNav.vue";
import BottomNav from "./components/Nav/BottomNav.vue";
import HeroTop from "./components/Hero/HeroTop.vue";
import Cards from './components/Sections/Cards.vue';
import FeatureInfoOne from './components/Sections/FeatureInfoOne.vue';
import FeatureInfoTwo from './components/Sections/FeatureInfoTwo.vue';
import HeroBottom from "./components/Hero/HeroBottom.vue";
export default {
  name: "App",
  components: {
    TopNav,
    BottomNav,
    HeroTop,
    Cards,
    FeatureInfoOne,
    FeatureInfoTwo,
    HeroBottom
  },
};
</script>

<template>
  <div id="home">
    <NavBar class="home_navBar">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <HomeSwiper :sun_banners = 'banners' class="home_HomeSwiper"/>
    <!--推荐recommend部分就几个图片 -->
    <HomeRecommends :sun_recommends = 'recommend'/>
    <hr class="HomeFeatureTopHr"/>
    <!--流行-->
    <HomeFeature/>
    <!-- 流行-新款-精选 -->
    <TabControl :titles="['流行', '新款', '精选']"/>
    <!-- 详细数据展示 -->

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommends from './childComps/HomeRecommends.vue'
import HomeFeature from './childComps/HomeFeature'

import TabControl from 'components/content/tabControl/TabControl'

import { getHomeMultiData, getHomeGoods } from 'network/home.js'
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
    TabControl
  },
  data () {
    return{
      banners: [],
      recommend: [],
      goods: {
        'pop': {data: [], page: 1}, // 接口page穿0没有数据，第一页默认从1开始
        'new': {data: [], page: 1},
        'sell': {data: [], page: 1},
      }
    }
  },
  created() {
    // 请求轮播图和推荐的数据
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    // 请求详细数据的数据
    this.getFirstHomeGoods()
  },
  methods: {
    /**
     * 第一次请求home的详细数据，请求流行，新款，精选三类的第一页数据
     */
    getFirstHomeGoods() {
      this.getHomeGoods('pop', 1) // 接口page穿0没有数据，第一页默认从1开始
      this.getHomeGoods('new', 1)
      this.getHomeGoods('sell', 1)
    },
    /**
     * 根据类型和页码查询对应home详细数据
     */
    getHomeGoods(type, page) {
      getHomeGoods(type, page).then(res => {
        this.goods[type].data = res.data.list
        this.goods[type].page = ++page
      })
    }
  }
}
</script>

<style scoped>
.home_navBar{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  width: 100%;
}
.home_HomeSwiper{
  padding-top: 44px;
}
.HomeFeatureTopHr{
  background-color: grey;
  height: 15px;
}
</style>

<template>
  <Row :gutter="5">
    <template v-if="processingSortList.length >= 0">
      <Col v-for="(i,index) in processingSortList.slice(0,maxOverflow)" :key="index">
        <AchievementView :id="i.name" :time="i.acquisitionTime" :onlyShow="true">
          <img :src="achievementUtil.getIcon(achievementUtil.getItem(i.name)['iconPath'])" alt="AchievementView"
               :width="size"
               :height="size"/>
          <span slot="content">{{ $t(`profile.achievement.list.${i.name}.name`) }}</span>
        </AchievementView>
      </Col>
      <Col v-if="processingSortList.length > maxOverflow">
        <Poptip trigger="hover" transfer>
          <Badge :count="processingSortList.slice(maxOverflow,processingSortList.length).length" :offset="[-5,-2]">
            <Icon type="md-more" :size="size.replace('px', '')"></Icon>
          </Badge>
          <template v-slot:content>
            <span v-for="(i,index) in processingSortList.slice(maxOverflow,processingSortList.length)" :key="index">
              <AchievementView :id="i.name.toString()" :time="i.acquisitionTime" :onlyShow="true"
                               v-if="achievementUtil.getItem(i.name)['isShowCard']">
                <img :src="achievementUtil.getIcon(achievementUtil.getItem(i.name)['iconPath'])"
                     alt="img"
                     :width="size"
                     :height="size"/>
                <span slot="content">{{ $t(`profile.achievement.list.${i.name}.name`) }}</span>
              </AchievementView>
            </span>
          </template>
        </Poptip>
      </Col>
    </template>
    <template v-else>
      <Empty :notHint="true"></Empty>
    </template>
  </Row>
</template>

<script>
import {achievement as achievementUtil} from "@/assets/js";

import Empty from "@/components/Empty.vue"
import AchievementView from "@/components/AchievementView.vue";

export default {
  data() {
    return {
      achievementUtil,

      processingSortList: [],
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: '20px'
    },
    showAll: {
      type: Boolean,
      default: false
    },
    maxOverflow: {
      type: Number,
      default: 3
    }
  },
  watch: {
    '$route': 'onSort',
    'data': 'onSort',
  },
  components: {Empty, AchievementView},
  created() {
    this.onSort();
  },
  methods: {
    onSort() {
      this.processingSortList = this.data
          .filter((i) => achievementUtil.getItem(i.name)['isShowCard'])
          .sort((a, b) => a.acquisitionTime - b.acquisitionTime);
    },
  },
}
</script>

<style scoped lang="less">

</style>

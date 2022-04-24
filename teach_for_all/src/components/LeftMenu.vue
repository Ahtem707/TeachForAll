<template>
  <div class="LeftMenu">
    <ul class="list">
      <li class="listItem" v-for="item in menuList" :key="item.title">
        <img class="listItemIcon" :src="item.icon" />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import profile from "@/assets/images/profile.png";

class MenuItem {
  icon = "";
  title = "";
  link = "";

  constructor(icon, title, link) {
    this.icon = icon;
    this.title = title;
    this.link = link;
  }
}

export default {
  data() {
    return {
      menuList: [
        new MenuItem(profile, "Все дисциплины", ""),
        new MenuItem(profile, "Мои дисциплины", ""),
        new MenuItem(profile, "Актуальные", ""),
        new MenuItem(profile, "Избранные", ""),
        new MenuItem(profile, "Календарь", ""),
      ],
    };
  }
};
</script>

<style scoped>
.LeftMenu {
  width: 300px;
  height: 300px;
}
.list {
  list-style-type: none;
}
.listItem {
  height: 30px;
}
.listItem:hover {
  background-color: #d2d2d2;
}
.listItemIcon {
  width: 24px;
  height: 24px;
}
</style>
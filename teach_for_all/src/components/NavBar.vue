<template>
  <header
    class="
      MuiPaper-root
      MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary
      jss207
      mui-fixed
      MuiPaper-elevation4
    "
  >
    <div class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters">
      <button
        class="
          MuiButtonBase-root
          MuiIconButton-root
          jss210
          MuiIconButton-colorInherit MuiIconButton-edgeStart
        "
        tabindex="0"
        type="button"
        aria-label="menu"
      >
        <span class="MuiIconButton-label">
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </span>
        <span class="MuiTouchRipple-root"></span>
      </button>
      <h6 class="MuiTypography-root MuiTypography-h6">
        {{ this.screenTitle }}
      </h6>
      <!-- ######## -->
      <div class="jss206">
        <a
          class="jss209"
          v-for="item in this.btns"
          :key="item.icon"
          :title="item.title"
          :href="item.link"
        >
          <button
            class="MuiButtonBase-root MuiIconButton-root"
            tabindex="0"
            type="button"
            aria-haspopup="true"
          >
            <span class="MuiIconButton-label">
              <img class="iconImage" :src="item.icon" alt="" /> </span
            ><span class="MuiTouchRipple-root"></span>
          </button>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import telegram from "@/assets/images/telegram.png";
import profile from "@/assets/images/profile.png";

class Bubble {
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
      screenTitle: "TeachForAll",
      btns: [
        new Bubble(telegram, "One", "link"),
        new Bubble(profile, "Profile", "link"),
      ],
    };
  },
};
</script>

<style scoped>
.iconImage {
  width: 24px;
  height: 24px;
  filter: invert(100%);
}
</style>
<template>
  <header class="AppHeader responsive">
    <div class="Logo responsive" @click="$router.push('/')">
      <img class="Logo__icon responsive" :src="Logotype" alt="#" />
      <div class="Logo__text responsive">Pepelane</div>
    </div>

    <p class="Logo__motto mobile-hidden">World's first affordable airsharing</p>
    <div class="buttons-wrapper">
      <div class="theme-toggle" @click="changeTheme()">
        <img class="theme-toggle__icon responsive" :src="IconTheme" alt="#" />
        <div class="theme-toggle__text mobile-hidden">
          <span v-if="!isDarkTheme">Night mod</span>
          <span v-else>Day mod</span>
        </div>
      </div>

      <div class="notification-icons responsive">
        <img
          class="notification-icon-chat responsive"
          src="~/assets/svgs/chat-icon.svg"
          alt="#"
        />
        <img
          class="notification-icon"
          src="~/assets/svgs/bell-icon.svg"
          alt="#"
        />
      </div>

      <div class="profile">
        <p class="profile__text mobile-hidden">Bessie Cooper</p>
        <img
          class="profile__image responsive"
          src="~/assets/images/profile-image.png"
          alt="#"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/svgs/Logo.svg'
import DarkLogo from '@/assets/svgs/LogoDark.svg'
import Moon from '@/assets/svgs/moon-icon.svg'
import Sun from '@/assets/svgs/sun.svg'

export default {
  computed: {
    isDarkTheme() {
      return this.$store.getters['theme/isDarkTheme']
    },

    Logotype() {
      if (this.isDarkTheme) {
        return DarkLogo
      } else return Logo
    },

    IconTheme() {
      if (this.isDarkTheme) {
        return Sun
      } else return Moon
    },
  },

  methods: {
    changeTheme() {
      this.$store.commit('theme/TOGGLE_THEME')
    },
  },
}
</script>

<style>
header {
  margin: 0 64px 40px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Logo {
  display: flex;
  align-items: center;
  margin-right: 65px;
  cursor: pointer;
}

.Logo .Logo__icon {
  height: 48px;
  width: 48px;
  margin-right: 18px;
}

.Logo .Logo__text {
  font-size: 23px;
  font-weight: bold;
  color: var(--base-500);
}

.Logo__motto {
  color: var(--base-300);
}

.theme-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.theme-toggle .theme-toggle__icon {
  margin-right: 18px;
}

.theme-toggle__text {
  margin-right: 107px;
  color: var(--base-300);
}

.notification-icons .notification-icon-chat {
  margin-right: 29px;
}

.profile {
  display: flex;
  align-items: center;
}

.profile .profile__text {
  margin-right: 16px;
  font-weight: bold;
  color: var(--base-500);
}

.profile .profile__image {
  border-radius: 50%;
  height: 56px;
}

.notification-icons {
  display: flex;
  margin-right: 59px;
}

.AppHeader .buttons-wrapper {
  display: flex;
}
</style>

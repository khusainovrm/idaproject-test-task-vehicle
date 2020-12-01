<template>
  <header class="AppHeader responsive">
    <div class="Logo responsive" @click="$router.push('/')">
      <img class="Logo__icon responsive" :src="Logotype" alt="#" />
      <div class="Logo__text responsive">Pepelane</div>
    </div>

    <p class="Logo__motto mobile-hidden">World's first affordable airsharing</p>
    <div class="buttons-wrapper">
      <div
        class="theme-toggle"
        @click="changeTheme()"
        @mouseover="animateIcon = true"
        @mouseleave="animateIcon = false"
      >
        <img
          :class="{ SpecialAnimation: animateIcon }"
          class="theme-toggle__icon responsive"
          :src="IconTheme"
          alt="#"
        />
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
  data: () => ({ animateIcon: false }),
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
  user-select: none;
}

.theme-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.theme-toggle .theme-toggle__icon {
  margin-right: 18px;
}

.SpecialAnimation {
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
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
  user-select: none;
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
  cursor: pointer;
}

.notification-icon:hover {
  animation: shake 2s infinite;
}
@keyframes shake {
  0%,
  25%,
  83%,
  100% {
    transform: rotatez(0deg);
  }
  32.5%,
  62.5% {
    transform: rotatez(-5deg);
  }
  47.5%,
  75.5% {
    transform: rotatez(5deg);
  }
}

.notification-icon-chat:hover {
  animation: shakeIconChat 2s;
}
@keyframes shakeIconChat {
  0%,
  25%,
  83%,
  100% {
    transform: translateY(0px);
  }
  32.5%,
  62.5% {
    transform: translateY(-3px);
  }
  47.5%,
  75.5% {
    transform: translateY(3px);
  }
}

.AppHeader .buttons-wrapper {
  display: flex;
}
</style>

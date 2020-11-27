<template>
  <header>
    <div class="Logo" @click="$router.push('/')">
      <img class="Logo__icon" src="~/assets/svgs/Logo.svg" alt="#" />
      <img class="Logo__text" src="~/assets/svgs/Pepelane.svg" alt="#" />
    </div>

    <p class="Logo__motto">World's first affordable airsharing</p>

    <div class="theme-toggle">
      <img
        class="theme-toggle__icon"
        src="~/assets/svgs/moon-icon.svg"
        alt="#"
      />
      <p class="theme-toggle__text">Night mood</p>
    </div>

    <div class="notification-icons">
      <img
        class="notification-icon-chat"
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
      <p class="profile__text">Bessie Cooper</p>
      <img
        class="profile__image"
        src="~/assets/images/profile-image.png"
        alt="#"
      />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
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
  width: 104px;
  height: 21px;
}

.Logo__motto {
  color: var(--base-300);
}

.theme-toggle {
  display: flex;
  align-items: center;
}

.theme-toggle .theme-toggle__icon {
  margin-right: 18px;
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
}

.profile .profile__image {
  border-radius: 50%;
}
</style>

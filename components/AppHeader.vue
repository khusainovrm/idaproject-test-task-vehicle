<template>
  <header class="AppHeader responsive">
    <div class="Logo responsive" @click="$router.push('/')">
      <img class="Logo__icon responsive" src="~/assets/svgs/Logo.svg" alt="#" />
      <img
        class="Logo__text resposive"
        src="~/assets/svgs/Pepelane.svg"
        alt="#"
      />
    </div>

    <p class="Logo__motto mobile-hidden">World's first affordable airsharing</p>
    <div class="buttons-wrapper">
      <div class="theme-toggle">
        <img
          class="theme-toggle__icon responsive"
          src="~/assets/svgs/moon-icon.svg"
          alt="#"
        />
        <div class="theme-toggle__text mobile-hidden">Night mood</div>
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
export default {}
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

.theme-toggle__text {
  margin-right: 107px;
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

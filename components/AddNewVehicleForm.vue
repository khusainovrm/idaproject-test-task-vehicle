<template>
  <div>
    <div :class="{ overlay: showForm }" class="overLayBase responsive"></div>

    <div :class="{ showForm: showForm }" class="AddVehicleForm responsive">
      <div class="AddVehicleForm__title responsive">
        <div class="AddVehicleForm__title-text responsive">
          Add new vehicle
          <div class="formCloseButton responsive" @click="$emit('closeForm')">
            &times;
          </div>
        </div>
        <div class="AddVehicleForm__title-button"><button></button></div>
      </div>

      <div class="AddVehicleForm__content">
        <form @submit.prevent="addVehicle">
          <div class="input__wrapper responsive">
            <input
              id="input__file"
              type="file"
              name="image"
              class="photo responsive"
            />
            <label for="input__file" class="input__file-button">
              <span class="input__file-icon-wrapper"
                ><img
                  class="input__file-icon"
                  :src="imageAdd"
                  alt="Выбрать файл"
                  width="25"
              /></span>
            </label>
          </div>

          <div class="input__wrapper-name">
            <input
              id="name"
              v-model.trim="name"
              type="text"
              class="name responsive"
              placeholder="Name"
            />
            <label
              for="name"
              class="input__name-label"
              :class="{ showError: filedErrors.name }"
              >Required filed</label
            >
          </div>

          <div class="input__wrapper-description">
            <input
              id="description"
              v-model.trim="description"
              type="text"
              class="description responsive"
              placeholder="Description"
            />
            <label
              for="description"
              class="input__description-label"
              :class="{ showError: filedErrors.description }"
              >Required filed</label
            >
          </div>

          <div class="input-wrapper responsive">
            <input
              id="rentPrice"
              v-model.trim="rentPrice"
              type="text"
              class="input-wrapper-text"
              placeholder="Rent"
            />
            <span class="input-wrapper-dollars">$/h</span>
            <label
              for="rentPrice"
              class="input__rentPrice-label"
              :class="{ showError: filedErrors.rentPrice }"
              >Required filed</label
            >
          </div>

          <button class="AddVehicle__button responsive" type="submit">
            <span class="AddVehicle__button-text">
              <span>Complete</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import imageAdd from '@/assets/svgs/addImage.svg'

export default {
  name: 'AddNewVehicleForm',

  props: {
    showForm: { type: Boolean, required: true },
  },

  data: () => ({
    photo: '',
    name: '',
    description: '',
    rentPrice: '',
    filedErrors: { name: false, description: false, rentPrice: false },
    imageAdd,
  }),

  watch: {
    rentPrice(str) {
      if (!str.match(/^\d+$/)) {
        this.rentPrice = str.replace(/[\D]+/g, '')
      }
    },
  },

  methods: {
    resetFilesErrors() {
      this.filedErrors.name = false
      this.filedErrors.description = false
      this.filedErrors.rentPrice = false
    },

    addVehicle() {
      this.resetFilesErrors()

      if (!this.name) {
        this.filedErrors.name = true
      } else if (!this.description) {
        this.filedErrors.description = true
      } else if (!this.rentPrice) {
        this.filedErrors.rentPrice = true
      } else {
        const vehicle = {
          description: this.description,
          id: Date.now(),
          image: 'https://loremflickr.com/900/900/airship',
          name: this.name,
          preview:
            'https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0',
          rent: this.rentPrice,
          specifications_text:
            'Consectetur esse ex et sunt. Excepteur irure fugiat adipisicing ipsum reprehenderit laboris aliqua Lorem minim nostrud mollit reprehenderit. Voluptate fugiat pariatur pariatur eu incididunt. Laborum reprehenderit sit laboris magna dolore fugiat officia consectetur officia tempor eiusmod. Exercitation Lorem laboris amet ipsum. Dolor exercitation aute incididunt labore cupidatat eu ipsum laborum occaecat sit Lorem.\n\nEst aliqua culpa dolore occaecat incididunt consectetur aute cupidatat velit sint veniam qui adipisicing. Aliqua consequat labore in eiusmod Lorem cillum irure culpa nisi. Mollit ad ad incididunt fugiat dolore officia commodo occaecat labore. Ut elit consectetur consectetur dolore tempor ad culpa consequat. Qui dolor cillum quis exercitation eiusmod ad nulla aute.',
          team_text:
            'Ex elit qui ullamco quis ex consectetur nulla aliqua adipisicing amet tempor duis. Incididunt cillum reprehenderit dolore enim ea. Minim duis ipsum est ut id sint voluptate. Quis ad laborum amet fugiat nulla deserunt non ad adipisicing excepteur ullamco sint quis. Elit qui sit irure proident quis Lorem et eiusmod do quis.',
          term_text:
            'Ut consectetur dolor labore non velit voluptate sint enim cillum ad labore. Adipisicing minim sunt labore sit anim culpa cillum laboris proident dolor do sint. In esse cupidatat id sit eiusmod culpa quis.\n\nIn ullamco pariatur sit in excepteur ipsum incididunt reprehenderit aliqua minim. Deserunt cillum consectetur ut velit fugiat cupidatat elit ullamco adipisicing pariatur. Aute qui qui magna culpa proident ad labore qui est.\n\nAmet velit nisi ea eiusmod reprehenderit cillum aliqua do ut. Consectetur elit nostrud nulla fugiat laborum aliqua sit. Laboris magna consectetur qui ex. Sunt irure magna quis amet dolore.',
          type: 'custom',
        }

        this.resetFilesErrors()
        this.$emit('closeForm')
        this.$store.commit('vehicles/ADD_VEHICLE', vehicle)
      }
    },
  },
}
</script>

<style>
.AddVehicleForm {
  position: fixed;
  height: 100vh;
  width: 600px;
  right: 0;
  top: 0;
  background: var(--base-0);
  padding: 64px 72px;
  border-bottom-left-radius: 48px;
  border-top-left-radius: 48px;
  display: flex;
  flex-direction: column;
  transform: translate(600px);
  transition: transform 0.6s ease-in-out;
  z-index: 10;
}

.AddVehicleForm.showForm {
  transform: translate(0px);
}

.overLayBase {
  opacity: 0;
  backdrop-filter: blur(32px);
  transition: all 0.4s;
}
.overlay {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(52, 79, 106, 0.32);
  z-index: 9;
  opacity: 1;
}

.AddVehicleForm__title-text {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: var(--base-500);
  margin-bottom: 40px;
  user-select: none;
}

.photo {
  width: 22px;
}

.formCloseButton {
  height: 48px;
  width: 48px;
  background: var(--base-50);
  border-radius: 16px;
  text-align: center;
  color: var(--base-500);
  cursor: pointer;
  font-size: 2rem;
  transition: box-shadow 0.3s;
}
.formCloseButton:hover {
  box-shadow: 0 0 1px 1px var(--base-200);
}

.AddVehicleForm__content {
  flex-grow: 1;
}

input.name,
input.description {
  height: 56px;
  width: 100%;
  padding: 21px 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  background: var(--base-50);
  border: none;

  font-weight: 300;
  line-height: 14px;
  color: var(--base-300);
}

.input-wrapper {
  position: relative;
  height: 56px;
  width: 100%;
  background: var(--base-50);
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 21px 24px;
  font-weight: 300;
  line-height: 14px;
  color: var(--base-300);
}

.input-wrapper input {
  background: var(--base-50);
  border: none;
}
.input-wrapper-text {
  flex-grow: 1;
  font-weight: 300;
  line-height: 14px;
  color: var(--base-300);
}

.input-wrapper-dollars {
  color: var(--base-200);
}

input:focus {
  outline: none;
}

.AddVehicle__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px auto;
  width: 100%;
  height: 48px;
  background: var(--main-400);
  border-radius: 12px;
  transition: background 0.1s ease-out;
}

.AddVehicle__button:hover {
  cursor: pointer;
  background: var(--main-500);
  transition: background 0.2s ease-in;
}

.AddVehicle__button:active {
  cursor: pointer;
  background: var(--main-400);
  filter: opacity(0.9);
  transition: filter 0.1s ease-in;
}

.AddVehicle__button-text {
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  color: #fcfcfc;
}

.input__wrapper {
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 348px;
  border-radius: 24px;
  background: var(--base-50);
  border: none;
  margin-bottom: 24px;
}

.input__file-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.input__file-button {
  cursor: pointer;
  width: 100%;
}

input[type='file'] {
  display: none;
}

.input__wrapper-name,
.input__wrapper-description {
  position: relative;
}

.input__name-label,
.input__description-label,
.input__rentPrice-label {
  position: absolute;
  top: -14px;
  left: 0;
  color: var(--secondary-400);
  opacity: 0;
}

.showError {
  opacity: 1;
  animation: opacityFlash 1s ease-out;
}

@keyframes opacityFlash {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

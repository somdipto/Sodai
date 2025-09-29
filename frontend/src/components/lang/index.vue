<template>
  <div class="lang-container">
    <h3>{{ $t('setting.basic.langTitle') }}</h3>
    <div class="lang-setting-container">
      <!-- <span style="width:30%">{{ $t('setting.basic.languagePreference') }}</span> -->
      <div class="lang-options" style="width: 70%; display:flex;flex-direction:end">
        <a-select v-model:value="selectedLang" style="width: 30%;font-size: 15px" @change="handleLangChange">
          <a-select-option v-for="item in langList" :key="item.id" :value="item.type" style="font-size: 15px">
            <span>{{ item.title }}</span>
          </a-select-option>
        </a-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const langList = ref([
  { id: 1, type: 'en', title: "🇺🇸 English" },
  // { id: 2, type: 'de' },
  // { id: 3, type: 'es' },
  // { id: 4, type: 'fr' },
  // { id: 5, type: 'ja' },
  // { id: 6, type: 'kr' },
  // { id: 7, type: 'tr' },
  // { id: 8, type: 'pt' },
  // { id: 9, type: 'tw' },
  // { id: 10, type: 'vi' }
])

const selectedLang = ref(locale.value || 'en')

const handleLangChange = (value) => {
  locale.value = value
  localStorage.setItem('lang', value)
}

onMounted(() => {
  const savedLang = localStorage.getItem('lang')
  if (savedLang && langList.value.some(lang => lang.type === savedLang)) {
    selectedLang.value = savedLang
    locale.value = savedLang
  }
})
</script>

<style scoped lang="scss">
.lang-container {
  display: flex;
  flex-direction: column;
}

.lang-setting-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

@media screen and (max-width: 768px) {
  h3 {
    margin-bottom: 16px !important;
    margin-top: 0px !important;
  }

  .lang-options {
    width: 100% !important;

    div {
      width: 100% !important;
    }
  }
}
</style>
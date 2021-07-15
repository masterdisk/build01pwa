import { useSharedState } from "@shopware-pwa/composables";
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app }, inject) => {
  const { sharedRef } = useSharedState(app);
  const currentDomainData = sharedRef("sw-current-domain");
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  const i18n = new VueI18n({
    locale:
      currentDomainData.value?.languageLocaleCode ||
      "en-GB",
    fallbackLocale: "en-GB",
    messages: {
      //
      "de-DE": require("sw-plugins/locales/de-DE.json"),
      //
      "en-GB": require("sw-plugins/locales/en-GB.json"),
      //
      "it-IT": require("sw-plugins/locales/it-IT.json"),
      //
      "pl-PL": require("sw-plugins/locales/pl-PL.json"),
      //
    },
  });

  app.i18n = i18n;
  inject("i18n", i18n);
};

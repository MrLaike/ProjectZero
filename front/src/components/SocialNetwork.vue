<template>
  <a :href="social.link" target="_blank" rel="noopener noreferrer" class="m-2">
    <Icon :name="social.iconName" scale="1.3" class="hover:text-red-700" />
  </a>
</template>

<script lang="ts">

import Icon from 'vue-awesome/components/Icon.vue';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class SocialNetworks extends Vue {
  @Prop()
  public social: any;
}
</script>

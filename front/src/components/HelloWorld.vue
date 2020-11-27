<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ ms }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class HelloWorld extends Vue {
  @Prop()
  msg!: string;

  public ms = '2';

  mounted(): void {
    this.ms = 'he';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

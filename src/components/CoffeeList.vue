<template>
  <dl id="array-rendering">
    <div v-for="item in items" v-bind:key="item.id">
      <dt style="color: red">{{ item.title }}</dt>
      <dd>{{ item.description }}</dd>
    </div>
  </dl>
</template>

<script>
import { Vue } from "vue-class-component";

export default class CoffeeList extends Vue {
  data() {
    return {
      items: [{ id: "1", title: "loading", description: "" }],
    };
  }
  mounted() {
    fetch("https://sampleapis.com/coffee/api/hot")
      .then((res) => res.json())
      .then((data) => {
        if (data instanceof Array) {
          this.$data.items = data.map((item, index) => ({
            id: String(index),
            ...item,
          }));
        }
      });
  }
}
</script>
<template>
  <div>
    <div class="template-content">
      <div
        class="template-container"
        v-for="template in templates"
        :key="template.id"
      >
        <p>{{ template.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemplateListing',
  props: {
    templates: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

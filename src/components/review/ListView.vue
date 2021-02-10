<template>
    <li>
        <p>Name -  {{ name }}</p>
        <p>Team  - {{ team }}</p>
        <p>Project - {{ project }}</p>
        <p>Rating -  {{ rating }}</p>
    </li>
</template>
<script>
export default {
    props: ['name', 'project', 'team', 'rating'],

}
</script>


<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
</style>
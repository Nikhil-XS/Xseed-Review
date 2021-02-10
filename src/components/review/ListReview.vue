<template>
  <section>
    <base-card>
      <h2>Submitted Reviews</h2>
      <div>
        <base-button @click="loadReviews()">Load Reviews </base-button>
      </div>

      <ul v-if="reviews.length > 0">
        <list-view
          v-for="review in reviews"
          :key="review.id"
          :name="review.name"
          :project="review.project"
          :team="review.team"
          :rating="review.rating"
        ></list-view>
      </ul>
    </base-card>
  </section>
</template>

<script>
import ListView from './ListView.vue';

export default {
  components:{
    ListView,
  },
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    loadReviews() {
      fetch("https://xseed-review-default-rtdb.firebaseio.com/reviews.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const reviews = [];
          for (const id in data) {
            reviews.push({
              id: id,
              name: data[id].name,
              project: data[id].project,
              team: data[id].team,
              rating: data[id].rating,
            });
          }
          this.reviews = reviews;
        });
    },
  },

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

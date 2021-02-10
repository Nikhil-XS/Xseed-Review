<template>
  <section>
    <base-card>
      <h2>Xseed Review</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <div class="form-control">
          <label for="proj">Your Last Project</label>
          <input type="text" id="proj" name="proj" v-model.trim="enteredProj" />
        </div>
        <h3>Your Team</h3>
    <!--    <div class="form-control">
          <input
            type="radio"
            id="opt"
            value="opt-team"
            name="team"
            v-model="chosenTeam"
          />
          <label for="opt">opt-team</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="QA"
            value="QA-team"
            name="team"
            v-model="chosenTeam"
          />
          <label for="QA">QA-team</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="developer"
            value="developer-team"
            name="team"
            v-model="chosenTeam"
          />
          <label for="developer">developer-team</label>
        </div> -->
        <label for="team">Select team : </label>
        <select id="team" v-model="chosenTeam">
          <option value="opt">opt-team</option>
          <option value="QA">QA-team</option>
          <option value="develope">Developer-team</option>
        </select>
        <h3>Your learning experience with team is...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Good</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredProj: '',
      chosenTeam: null,
      chosenRating: null,
      invalidInput: false,
    };
  },

  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating || !this.chosenTeam ) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      

      fetch('https://xseed-review-default-rtdb.firebaseio.com/reviews.json', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.enteredName,
          project: this.enteredProj,
          team: this.chosenTeam,
          rating: this.chosenRating,
        }),
      });
      this.enteredName = '';
      this.enteredProj = '';
      this.chosenTeam = null;
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
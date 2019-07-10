<template>
  <div class="cc-component">
    <form
      id="validate"
      method="post"
    >

      <p>
        <input
          type="text"
          name="creditCard"
          placeholder="Enter your credit card number here"
          class="cc-input"
          v-model="creditCard"
          v-bind:class="[cardClass]"
        />
      </p>
      <p>
        <input
          type="submit"
          value="Submit"
          v-on:click="submitCreditCard"
          v-bind:disabled="submitDisabled"
        />
      </p>

      <p class="alert alert-danger" role="alert" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
        </ul>
      </p>
    </form>
  </div>
</template>

<script>
import Luhn from 'luhn'

export default {
  name: 'mInput',
  data: function () {
    return {
      errors: [],
      value: '',
      cardClass: '',
      submitDisabled: true
    }
  },
  computed: {
    creditCard: {
      get () {
        return this.value
      },
      set (newVal) {
        this.value = newVal

        this.errors = []

        let isValid = Luhn.validate(this.value)

        let firstChar = this.value.charAt(0)

        switch (firstChar) {
          case '3':
            this.cardClass = 'amex'
            break
          case '4':
            this.cardClass = 'visa'
            break
          case '5':
            this.cardClass = 'mastercard'
            break
          default:
            this.cardClass = ''
        }

        if (!isValid) {
          this.submitDisabled = true
          this.errors.push('Credit card number is invalid.')
        }
        else {
          this.submitDisabled = false
        }
      }
    }
  },
  methods: {
    submitCreditCard(e) {
      e.preventDefault()

      let url = 'https://jsonplaceholder.typicode.com/users/2'

      fetch(url)
        .then(res => {
          return res.json()
        })
        .then(user => {
          this.$store.dispatch("addUser", user);
          this.$router.push("user")
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .cc-component {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form {
      height: 400px;
    }

    .cc-input {
      padding: 5px;
      padding-right: 50px;
      display: inline-block;
      width: 400px;
    }

    .visa {
      background: #fff url('../assets/visa_logo_3.gif') no-repeat right;
    }

    .mastercard {
      background: #fff url('../assets/mastercard_logo_3.gif') no-repeat right;
    }

    .amex {
      background: #fff url('../assets/american_express_logo_3.gif') no-repeat right;
    }
  }
</style>

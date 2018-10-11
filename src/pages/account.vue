<template>
  <q-page class="flex flex-center">

    <q-card inline style="width:500px; padding:30px">
      <q-list separator>
        <q-item>
          <q-item-main>
            <q-input float-label="Username" v-model="form.username" />
            <q-input float-label="First Name" v-model="form.first_name" />
            <q-input float-label="Last Name" v-model="form.last_name" />
            <q-input float-label="Email" v-model="form.email" />
            <q-input hide-underline float-label="Password" v-model="form.password" type='password'/>
          </q-item-main>
        </q-item>
      </q-list>
      <q-card-actions class="float-right">
        <q-btn icon="edit" no-caps color="primary" label="Save" @click='save()' />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      form: {
        first_name: this.$store.state.auth.User.firstName,
        last_name: this.$store.state.auth.User.lastName,
        username: this.$store.state.auth.User.userName,
        email: this.$store.state.auth.User.email,
        password: ''
      }
    }
  },
  methods: {
    save () {
      this.axios.post('/auth/update', this.form)
        .then((response) => {
          this.$q.notify({ message: 'Account updated ', timeout: 2000, color: 'positive' })
        })
        .catch((error) => {
          this.$q.notify({ message: 'Error: ' + error.response.data.error, timeout: 2000, color: 'negative' })
        })
    }
  }
}
</script>

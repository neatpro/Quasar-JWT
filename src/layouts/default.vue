<template>
  <q-layout view="lHh Lpr lFf" v-if="this.$store.state.auth.loggedIn">

    <q-layout-header>
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Quasar Framework
          <div slot="subtitle">JWT Authentication Starter Kit</div>
        </q-toolbar-title>
        <q-tabs>
          <q-route-tab slot="title" to="/" icon="home"/>
          <q-route-tab slot="title" to="account" icon="account_circle"/>
          <q-tab slot="title" v-on:click="logout()" icon="power_settings_new"/>
        </q-tabs>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container style="padding-top:54px">
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapMutations } from 'vuex'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false,
      leftOverlay: false,
      leftBreakpoint: 992
    }
  },
  methods: {
    ...mapMutations('auth', [
      'LOGIN_OK'
    ]),
    openURL,
    logout () {
      this.$auth.logout({
        makeRequest: true,
        redirect: '/login',
        success () {
          console.log('success ')
        },
        error () {
          console.log('error ')
        }
      })
    }
  },
  mounted: function () {
    this.$auth.fetch({})
      .then(response => {
        this.LOGIN_OK(response)
      })
  }
}
</script>

<style>
</style>

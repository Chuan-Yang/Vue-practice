<template>
  <v-container>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Player's name"
        label-for="input-1"
        description="Please enter the name in game."
      >
        <b-form-input id="input-1" v-model="name" required placeholder="Enter Player's name:"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Server:" label-for="input-3">
        <v-select v-model="selectedServer" label="Server" :items="servers" required></v-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      servers: ['na', 'kr'],
      selectedServer: '',
      show: true
    }
  },
  computed: {
    icon () {
      if (this.selectAllServers) return 'mdi-close-box'
      if (this.selectSomeServers) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
    selectText () {
      if (this.selectAllServers) return 'Deselect All'
      if (this.selectSomeServers) return 'Select All'
      return 'Select All'
    }
  },
  methods: {
    onSubmit () {
      console.log(this.selectedServer)
      window.location.href = 'https://' + this.selectedServer + '.op.gg/summoner/userName=' + this.name
    },
    onReset () {
      this.name = ''
      this.selectedServer = ''
      // this.show = false
    }
  }
}
</script>

<style>
</style>

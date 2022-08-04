<template>
  <div>
    <h6> {{ themeText }} </h6>
    <small> {{ themeDescription }} </small>
    <hr />
    <div class="d-flex">
      <div class="form-check form-switch mt-3 me-3">
        <label class="form-check-label ms-3" for="lightSwitch">
         <i :class="ligthClass"></i>
          {{ dataMode }}
        </label>
        <input
          class="form-check-input"
          type="checkbox"
          id="lightSwitch"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
name : "ThemeComponent",
props: {
    mode : null,
},
data() {
    return {
        ligthClass: "bi bi-brightness-high",
        themeText : "Theme",
        dataMode : "Light",
        themeDescription: "Vous pouvez modifier le theme de l'application en passant du light au dark"
    }
},
}
</script>

<style>

</style>
<template>
  <div class="mb-3" id="profile">
    <h6>  {{ headerTitle }} </h6>
    <hr />
    <form  @submit.prevent="handleSubmitProfilData()">
      <div class="form-group mb-3">
        <label for="fullName"> {{ firstNameLabel }} </label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          aria-describedby="firstName"
          placeholder="Entrer votre prenom"
          v-model="firstNameField"
           required
        />
      </div>
      <div class="form-group mb-3">
        <label for="fullName"> {{ lastNameLabel }} </label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          aria-describedby="lastNameHelp"
          placeholder="Entrer votre nom"
          v-model="lastNameField"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="fullName"> {{ countryLabel }} </label>
        <input
          type="text"
          class="form-control"
          id="country"
          aria-describedby="countryHelp"
          placeholder="Entrer votre pays"
     
          v-model="countryField"
        />
      </div>
      <div class="form-group mb-3">
        <label for="fullName"> {{ ageLabel }} </label>
        <input
          type="number"
          class="form-control"
          id="age"
          aria-describedby="ageHelp"
          placeholder="Entrer votre age"
         
          v-model="ageField"
        />
      </div>

      <hr />

      <button type="submit" class="btn btn-primary mr-3">Modifier le profil</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "ProfilComponent",
    props: {firstName : String , lastName: String , country: String , age: Number},
    mounted () {
        this.firstNameField = this.firstName,
        this.lastNameField = this.lastName,
        this.ageField = this.age,
        this.countryField= this.country
    },
    data() {
        return {
            headerTitle : "Les informations de votre profil",
            firstNameField : null,
            lastNameField : null,
            countryField : null,
            ageField  : null,
            firstNameLabel: "Nom",
            lastNameLabel: "Prenom",
            countryLabel: "Pays",
            ageLabel: "Age",
        }
    },
    created () {
        
    },
    methods: {
        handleSubmitProfilData(){
            if (this.lastNameField != null || this.firstNameField != null){
                const data = {
                    "firstName" : this.firstNameField,
                    "lastName": this.lastNameField,
                    "country" : this.countryField,
                    "age" :  this.ageField
                }
                console.log(data);
                this.$emit('updateProfilEvent', data)
            } else {
               this.$toasted.error("Les champs nom & prenom sont obligatoire");
            }
        }
    }
};
</script>

<style></style>

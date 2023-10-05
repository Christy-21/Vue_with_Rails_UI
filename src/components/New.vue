<template>
  <div class="form-container">
    <form enctype="multipart/form-data">
      <div class="form-group">
        <label for="templateName">Template Name:</label>
        <input type="text" id="templateName" v-model="templateName" required />
      </div>

      <div class="form-group">
        <label for="templateDescription">Template Description:</label>
        <textarea id="templateDescription" v-model="templateDescription" required></textarea>
      </div>
   
      <div class="form-group">
        <label for="scannedCopy">Upload Scanned Copy:</label>
        <input type="file" id="scannedCopy" @change="handleFileChange" ref="file"/>
        <p v-if="scannedCopy">{{ scannedCopy.name }}</p>
      </div>

      <button type="submit" @click="saveTemplate">Save</button>
     
    </form>
  </div>
</template>
  <script>
 import axios from 'axios';

  export default {
  name: 'NewTemplate',
  data() {
    return {
      templateName: '',
      templateDescription: '',
      scannedCopy: null,
   
    };
  },
  

  methods: {
    saveTemplate() {
      const formData = new FormData();
      formData.append('file', this.scannedCopy);
      formData.append('templateName', this.templateName);
      formData.append('templateDescription', this.templateDescription);

      const headers = { 'Content-Type': 'multipart/form-data' };

      // Using axios to make a POST request to the Rails backend
      axios.post('/upload_template', formData, { headers })
  .then((res) => {
    console.log(res.data.message);
    console.log(res.data.template);
    this.templateName = '';
    this.templateDescription = '';
    this.scannedCopy = null;

   
    this.$router.push('/home');
  })
  .catch((error) => {
    console.error(error);
  });
    },
    handleFileChange(event) {
      this.scannedCopy = event.target.files[0];
    },
  },
};
</script>
  
  <style scoped>
  .form-container {
    max-width: 504px;
    margin: 160px 460px;
    padding: 46px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  input[type='text'],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
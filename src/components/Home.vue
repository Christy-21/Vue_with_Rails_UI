<template>
  <div>
    <header class="header">
      <h2>Wilco Docx</h2>

      <div class="box" @click="showTemplates">
        <FontAwesomeIcon icon="file-alt" />
        Templates
      </div>
      <div class="box" @click="showForms">
        <FontAwesomeIcon icon="file-signature" />
        Forms
      </div>
      <div class="user-profile" v-if="currentUser">
        <div class="profile-icon" @click="togglePopover">
          <span>&#128100; Profile</span>
          <div class="popover" v-if="showPopover">
            <p>
              Welcome, <span class="username">{{ currentUser.username }}</span
              >!
            </p>
            <p>
              Your Email: <span class="email">{{ currentUser.email }}</span>
            </p>
            <button class="logout-btn" @click="logout">Logout</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Please log in to view this page.</p>
      </div>
    </header>

    <div v-if="showTemplateContent">
      <div class="app-title">
        Template Listing
        <div>
          <div class="fab-title">Add Template</div>
          <div>
            <a href="/templates/new" class>
              <div class="fab-circle bg-secondary">
                <svg width="35" height="35" viewBox="0 0 22 28" fill="#ffffff">
                  <path
                    d="M 22 11.5 v 3 c 0 0.828 -0.672 1.5 -1.5 1.5 h -6.5 v 6.5 c 0 0.828 -0.672 1.5 -1.5 1.5 h -3 c -0.828 0 -1.5 -0.672 -1.5 -1.5 v -6.5 h -6.5 c -0.828 0 -1.5 -0.672 -1.5 -1.5 v -3 c 0 -0.828 0.672 -1.5 1.5 -1.5 h 6.5 v -6.5 c 0 -0.828 0.672 -1.5 1.5 -1.5 h 3 c 0.828 0 1.5 0.672 1.5 1.5 v 6.5 h 6.5 c 0.828 0 1.5 0.672 1.5 1.5 Z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div v-if="showTemplateContent" class="template-wrapper">
  <div v-for="template in templates" :key="template.id" class="template-container">
    <div class="thumbnail-container">
      <div class="thumbnail-overlay" @click="redirectToTemplate(template.id)">
        <span class="thumbnail-label">MAP TEMPLATE</span>
      </div>
      <img :src="template.thumbnail_url" class="thumbnail-img" :alt="template.title" />
    </div>
  </div>
</div>


    <div v-if="showFormsContent" class="formspage-content">
      <div class="formspage-container">
        <h2>Forms</h2>
        <p>This is the forms container.</p>
      </div>
    </div>

  </div>
  </div>

</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileAlt, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import axios from "axios";

library.add(faFileAlt, faFileSignature);

export default {
  name: "HomePage",
  formData: null,
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      showPopover: false,
      showTemplateContent: true,
      showFormsContent: false,
      templates: [],
      
    };
  },
  mounted() {
    axios
      .get("/templates")
      .then((response) => {
        this.templates = response.data;
      })
      .catch((error) => {
        console.error("Error fetching templates:", error);
      });
  },
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    togglePopover() {
      this.showPopover = !this.showPopover;
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/signup");
    },
    showTemplates() {
      this.showTemplateContent = true;
      this.showFormsContent = false;
    },
    showForms() {
      this.showTemplateContent = false;
      this.showFormsContent = true;
    },
    redirectToTemplate(templateId) {
    this.$router.push({
      name: "TemplatePage",
      params: { templateId }, // Make sure templateId is a valid parameter
    });
  },
    
      
     
        
       
  },
};
</script>


<style >
@import '../assets/styles/Home.css';
</style>
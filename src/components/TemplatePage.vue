<template>
    <div>
        <div class="app-title">Train
  <div><div class="fab-title">Upload Form</div> <div><a href="/process/upload" class=""><div class="fab-circle bg-secondary"><svg viewBox="0 0 26 28" height="35" width="35" fill="#ffffff">
  <path d="M20 23c0-0.547-0.453-1-1-1s-1 0.453-1 1 0.453 1 1 1 1-0.453 1-1zM24 23c0-0.547-0.453-1-1-1s-1 0.453-1 1 0.453 1 1 1 1-0.453 1-1zM26 19.5v5c0 0.828-0.672 1.5-1.5 1.5h-23c-0.828 0-1.5-0.672-1.5-1.5v-5c0-0.828 0.672-1.5 1.5-1.5h6.672c0.422 1.156 1.531 2 2.828 2h4c1.297 0 2.406-0.844 2.828-2h6.672c0.828 0 1.5 0.672 1.5 1.5zM20.922 9.375c-0.156 0.375-0.516 0.625-0.922 0.625h-4v7c0 0.547-0.453 1-1 1h-4c-0.547 0-1-0.453-1-1v-7h-4c-0.406 0-0.766-0.25-0.922-0.625-0.156-0.359-0.078-0.797 0.219-1.078l7-7c0.187-0.203 0.453-0.297 0.703-0.297s0.516 0.094 0.703 0.297l7 7c0.297 0.281 0.375 0.719 0.219 1.078z"></path>
  </svg></div></a></div></div></div>

  
  <main data-v-34f4f368="" class="message bg-primary">
    <div data-v-34f4f368="">
        <strong>Train Base Template:</strong> &nbsp; {{ currentTemplateName }}
        <span data-v-34f4f368="" class="badge badge-info mr-4"> New </span> 
        <select data-v-34f4f368="">
            <option data-v-34f4f368="" value="1">
            Version 1
          </option></select> 
          <label data-v-34f4f368="">Enable Auto Correct: </label>
           <label data-v-34f4f368="" class="switch switch-3d switch-success">
            <input type="checkbox" class="switch-input" value="true"> 
            <span class="switch-label"></span> <span class="switch-handle"></span></label> 
            <span data-v-34f4f368="" class="up-dn-btn"><div data-v-34f4f368="" class="btn-group import-export">
                <a data-v-34f4f368="" rel="noopener" :href="downloadUrl"
                target="_blank" class="btn import-export-button btn-secondary">
                <i data-v-34f4f368="" class="fa fa-download"></i>
                </a></div>
                 <div data-v-34f4f368="" class="btn-group import-export">
                    <button data-v-34f4f368="" type="button" class="btn import-export-button btn-secondary">Export</button></div>
                     <div data-v-34f4f368="" class="btn-group import-export">
                        <button data-v-34f4f368="" type="button" class="btn import-export-button btn-secondary"> Import </button>
                        </div></span> 
                        </div></main>

                        <div class="right-side-container">
    <header class="card-header">
      <div class="header-content">
        <i class="fa fa-align-justify"></i>
        <strong>Mappings:</strong>
      </div>
    </header>
    <div class="map-text">
      <p>Mapping:</p>
    </div>
  </div>


    <div class="left">
        <div class="inside-top-container">
        <button type="button" class="icon-button">
          <font-awesome-icon :icon="faSave" />
        </button>
        <button type="button" class="icon-button">
          <font-awesome-icon :icon="faImage" />
        </button>
        <button aria-haspopup="true" aria-expanded="false" type="button" class="icon-button" id="__BVID__230___BV_toggle_"><span data-v-34f4f368="">Theme </span></button>
        <button data-v-34f4f368="" title="" type="button" class="icon-button" data-original-title="Create NPI Group">NPI Group</button>


        <div class="action-bar-row ">
    <button
      title="Go to previous page"
      type="button"
      disabled
      class="icon-button">
      <font-awesome-icon :icon="faArrowLeft" />
    </button>
    <span class="holder">
      <span class="h4">1</span> of 1
    </span>
    <button
      title="Go to next page"
      type="button"
      disabled
      class="icon-button">
      <font-awesome-icon :icon="faArrowRight" />
    </button>
  </div>
  <div class="action-bar-row">
    <div class="btn-group">
        <button
        title="Select (Esc)"
        type="button"
        class="icon-button"
        @click="setDrawMode(false)"
      >
        <font-awesome-icon :icon="faMousePointer" />
      </button>
      <button
        title="Draw"
        type="button"
        class="icon-button"
        @click="setDrawMode(true)"
      >
        <font-awesome-icon :icon="faPencil" />
      </button>
    </div>
    <div class="btn-group">
      <button type="button" class="icon-button">
        <font-awesome-icon :icon="faSearchPlus" />
      </button>
      <button type="button" class="icon-button">
        <font-awesome-icon :icon="faSearchMinus" />
      </button>
    </div>
    <div class="btn-group">
      <button title="Undo (Cmd + z)" type="button" disabled class="icon-button">
        <font-awesome-icon :icon="faUndo" />
      </button>
      <button title="Redo (Cmd + Shift + z)" type="button" disabled class="icon-button">
        <font-awesome-icon :icon="faRedo" />
      </button>
    </div>
    <div class="btn-group">
      <button title="Delete Mapping (Cmd + d)" type="button" disabled class="icon-button">
        <font-awesome-icon :icon="faTrash" />
      </button>
    </div>

  </div>
      </div>
      
      <div class="canvas-container">
      <canvas ref="canvas" style="background: transparent; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></canvas>
      <KonvaCanvas />
    </div>
    </div>
    
</div>

</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSave,
  faImage,
  faArrowLeft,
  faArrowRight,
  faMousePointer,
  faPencil,
  faSearchPlus,
  faSearchMinus,
  faUndo,
  faRedo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import KonvaCanvas from '../components/KonvaCanvas.vue';


export default {
  components: {
    FontAwesomeIcon,
    KonvaCanvas,
  },
  props: {
    selectedImageUrl: String,
  },
  data() {
    return {
      faImage,
      faSave,
      faArrowLeft,
      faArrowRight,
      faMousePointer,
      faPencil,
      faSearchPlus,
      faSearchMinus,
      faUndo,
      faRedo,
      faTrash,
      canvasWidth: 800, // Change to your desired initial width
      canvasHeight: 600,
      currentTemplateName: '',
      downloadUrl: '',
      annotations: [],
      
    };
  },
  async mounted() {
    this.handleImageSelection();
  },
  methods: {
    handleImageSelection() {
      const templateId = this.$route.params.templateId;
      this.fetchImageUrl(templateId).then((imageUrl) => {
        const canvas = this.$refs.canvas;
        const context = canvas.getContext("2d");
        context.fillRect(50, 50, 100, 100); 

        const image = new Image();
        image.onload = () => {
          console.log("Image loaded successfully");
          context.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0);
        };
        image.onerror = () => {
          console.log("Error loading image");
        };
        image.src = imageUrl;
        console.log("Loading image from:", imageUrl);
      });
    },
    fetchImageUrl(templateId) {
  return axios
    .get(`/templates/${templateId}`)
    .then((response) => {
      this.downloadUrl = response.data.downloadUrl; // Set the downloadUrl
      return response.data.imageUrl; // Return the image URL
    });
},
    isImage(url) {
      const imageExtensions = [".jpg", ".jpeg", ".png"];
      const extension = url.substring(url.lastIndexOf(".")).toLowerCase();
      return imageExtensions.includes(extension);
    },
  },
  created() {
    library.add(faSave, faImage);
  },
};
</script>

<style>
@import '../assets/styles/TemplatePage.css';

</style>

<template>
    <div class="konva-canvas">
      <div ref="konvaHolder" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp"></div>
      <RectangleModal ref="rectangleModal" @rectangleSaved="handleRectangleSaved" />
    </div>
  </template>
  
  <script>
  import Konva from 'konva';
  import RectangleModal from '../components/RectangleModal.vue';
  export default {
    components: {
    RectangleModal,
  },
    data() {
      return {
        stage: null,
        layer: null,
        drawing: false,
        startX: 0,
        startY: 0,
        currentRect: null, 
        rectangles: [], 
        stageConfig: {
          width: 795,
          height: 1297,
          drawingCompleted: false
        },
      };
    },
    mounted() {
      this.initializeKonva();
    },
    methods: {
      handleRectangleSaved(rectangleData) {
      this.rectangles.push(rectangleData);
    },
      initializeKonva() {
        this.stage = new Konva.Stage({
          container: this.$refs.konvaHolder,
          width: this.stageConfig.width,
          height: this.stageConfig.height,
        });
  
        this.layer = new Konva.Layer();
        this.stage.add(this.layer);
      },
      handleMouseDown(event) {
        const stageRect = this.$refs.konvaHolder.getBoundingClientRect();
        const mouseX = event.clientX - stageRect.left;
        const mouseY = event.clientY - stageRect.top;
  
        this.startX = mouseX;
        this.startY = mouseY;
  
        // Create a new rectangle shape for drawing
        this.currentRect = new Konva.Rect({
          x: this.startX,
          y: this.startY,
          width: 0,
          height: 0,
          stroke: 'blue',
          strokeWidth: 2,
        });
  
        this.layer.add(this.currentRect);
        this.drawing = true;
      },
      handleMouseMove(event) {
        if (this.drawing) {
          const stageRect = this.$refs.konvaHolder.getBoundingClientRect();
          const mouseX = event.clientX - stageRect.left;
          const mouseY = event.clientY - stageRect.top;
  
          const width = mouseX - this.startX;
          const height = mouseY - this.startY;
  
          if (this.currentRect) {
            this.currentRect.width(width);
            this.currentRect.height(height);
            this.layer.batchDraw();
          }
        }
      },
      handleMouseUp() {
        if (this.drawing && this.currentRect) {
          // Push the rectangle to the list of rectangles
          this.rectangles.push({
            x: this.currentRect.x(),
            y: this.currentRect.y(),
            width: this.currentRect.width(),
            height: this.currentRect.height(),
          });
  
          this.drawing = false;
          this.currentRect = null; 
          this.layer.batchDraw();
          this.$refs.rectangleModal.$el.classList.add('show'); 
        this.$refs.rectangleModal.$el.style.display = 'block'; 
        }
      },
    },
  };
  </script>
  
  <style>
  .konva-canvas {
  position: relative;
  width: 100%;
  height: 100%;
}
  </style>
  
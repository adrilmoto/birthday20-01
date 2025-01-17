<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'leaflet'

const mapContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (mapContainer.value) {
    const L = window.L
    const map = L.map(mapContainer.value).setView([51.505, -0.09], 13)
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)
    
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('Born here ❤️')
      .openPopup()
  }
})
</script>

<template>
  <section class="birthplace-section section">
    <div class="container">
      <h2>Where It All Began</h2>
      <div class="birthplace-content">
        <div class="map-container" ref="mapContainer"></div>
        <div class="description">
          <h3>A Beautiful Beginning</h3>
          <p>
            Born in this charming city, her journey began here. The streets, the people,
            and the culture of this place have shaped her into the amazing person she is today.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.birthplace-section {
  background-color: white;
  
  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
  }
}

.birthplace-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.map-container {
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.description {
  padding: 2rem;
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.8;
  }
}
</style>
<canvas id="myChart"></canvas>

<!-- Chart.svelte -->
<script lang="ts">
  import { onMount } from 'svelte'
  import Chart from 'chart.js/auto'

  let chart: Chart

  onMount(() => {
    const canvas: HTMLElement = document.getElementById('myChart')
    if (canvas instanceof HTMLCanvasElement) {
      const context = canvas.getContext('2d')
      chart = new Chart(context, {
        type: 'bar',
        data: {
          labels: ['February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Profit',
              data: [30, 40, 100, 70, 120, 90],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    }
  })
</script>

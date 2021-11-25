<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(89, 214, 126, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(89, 214, 126, 0.25)");
    this.gradient.addColorStop(1, "rgba(89, 214, 126, 0)");
    this.renderChart(
      {
        labels: [
          "60 min",
          "50 min",
          "40 min",
          "30 min",
          "20 min",
          "10 min",
          "0 min"
        ],
        datasets: [
          {
            label: "Electricity use in mkWh",
            borderColor: "rgb(89, 214, 126)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "black",
            backgroundColor: this.gradient,
            data: [5.7, 4.8, 6.0, 6.0, 6.5, 5.7, 5.6]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
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
          "30 days",
          "25 days",
          "20 days",
          "15 days",
          "10 days",
          "5 days",
          "Yesterday"
        ],
        datasets: [
          {
            label: "Electricity use in kWh",
            borderColor: "rgb(89, 214, 126)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "black",
            backgroundColor: this.gradient,
            data: [8.3, 9, 8.6, 8.4, 8.5, 9, 9.1, 8.7]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
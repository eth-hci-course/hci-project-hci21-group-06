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
          "24 h",
          "20 h",
          "16 h",
          "12 h",
          "8 h",
          "4h",
          "Now"
        ],
        datasets: [
          {
            label: "Electricity use in mkWh",
            borderColor: "rgb(89, 214, 126)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "black",
            backgroundColor: this.gradient,
            data: [300, 298, 312, 320, 325, 305, 310]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
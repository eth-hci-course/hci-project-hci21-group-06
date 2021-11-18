<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
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
          "AC & Heating",
          "Washing Machine",
          "Fridge",
          "Water Heating",
          "Standby devices",
          "Others",
          "Lighting"
        ],
        datasets: [
          {
            label: "Electricity used in Wh",
            borderColor: "rgb(89, 214, 126)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "black",
            backgroundColor: this.gradient,
            data: [225, 180, 150, 120, 93, 36, 24]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false}
    );
  }
};
</script>
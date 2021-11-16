<template>
  <div style="text-align: center">

    <p><font size="7"> Rankings </font></p>
    <br /> 

    <table>
      <tr>
        <th>Rank</th>
        <th>Name</th>
      </tr>

      <tr>
        <td>{{Rank_Top1}}</td>
        <td>{{Name_Top1}}</td>
      </tr>

      <tr>
        <td>{{Rank_Top2}}</td>
        <td>{{Name_Top2}}</td>
      </tr>

      <tr>
        <td>{{Rank_Top3}}</td>
        <td>{{Name_Top3}}</td>
      </tr>
    </table>

    <p><font size="7"> ..... </font></p>
    <br />

    <table>

      <tr>
        <td>{{Rank_Bottom1}}</td>
        <td>{{Name_Bottom1}}</td>
      </tr>

      <tr>
        <td>{{Rank_Bottom2}}</td>
        <td>{{Name_Bottom2}}</td>
      </tr>

      <tr>
        <td>{{Rank_Bottom3}}</td>
        <td>{{Name_Bottom3}}</td>
      </tr>
    </table>

    <component :is="dynamicComponent"></component> 

  </div>

</template>

<script>
  export default{
    name: 'Ranking',
    data: () => ({
      array: [],
      Rank_Top1: "First",
      Rank_Top2: "Second",
      Rank_Top3: "Third",
      Rank_Bottom1: "255th",
      Rank_Bottom2: "256th",
      Rank_Bottom3: "257th",
      Name_Top1: "Beat Astli",
      Name_Top2: "Mike Peters",
      Name_Top3: "Lia DaFranco",
      Name_Bottom1: "Vivianne Lang",
      Name_Bottom2: "Jane Doe",
      Name_Bottom3: "Jacob Neill"
    })
  }
</script>

<style lang="css" scoped>
  .md-switch {
    display: flex;
  }
  table {
    width: 100%;
    table-layout: fixed;
  }
  .md-avatar {
  /* width: 80%; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
</style>
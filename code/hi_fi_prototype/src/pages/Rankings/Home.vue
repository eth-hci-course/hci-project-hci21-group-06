<template>
  <div style="text-align: center">

    <p><font size="7"> Rankings </font></p>
    <br /> 

    <table>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Coins</th>
      </tr>

      <tr>
        <td>{{Rank_Top1}}</td>
        <td>{{Name_Top1}}</td>
        <td>{{Coins_Top1}}</td>
      </tr>

      <tr>
        <td>{{Rank_Top2}}</td>
        <td>{{Name_Top2}}</td>
        <td>{{Coins_Top2}}</td>
      </tr>

      <tr>
        <td>{{Rank_Top3}}</td>
        <td>{{Name_Top3}}</td>
        <td>{{Coins_Top3}}</td>
      </tr>
    </table>

    <p><font size="7"> ..... </font></p>
    <br />
    <table>

      <tr>
        <td>{{Rank_Bottom1}}</td>
        <td>{{Name_Bottom1}}</td>
        <td>{{Coins_Bottom1}}</td>        
      </tr>

      <tr>
        <td>{{Rank_Bottom2}}</td>
        <td>{{Name_Bottom2}}</td>
        <td>{{Coins_Bottom2}}</td>         
      </tr>

      <tr>
        <td>{{Rank_Bottom3}}</td>
        <td>{{Name_Bottom3}}</td>
        <td>{{Coins_Bottom3}}</td>         
      </tr>
    </table>

    <div id="vue-instance">
      <select class="form-control" @change="changeRanking($event)">
        <option>My Friends</option>
        <option>My City</option>
        <option>My Country</option>
        <option>Worldwide</option>
      </select> 
    </div>
  </div>
</template>

<script>
  import {MyFriends,MyCity,MyCountry,Worldwide} from './Components/RankingData.js';
  import { mapState } from 'vuex'

  export default {
    el: '#vue-instance',
    name: 'ranking',
    data: () => ({
      array: MyFriends,
      Rank_Top1: array[1][1],
      Rank_Top2: array[2][1],
      Rank_Top3: array[3][1],
      Rank_Bottom1: array[4][1],
      Rank_Bottom2: array[5][1],
      Rank_Bottom3: array[6][1],
      Name_Top1: array[1][2],
      Name_Top2: array[2][2],
      Name_Top3: array[3][2],
      Name_Bottom1: array[4][2],
      Name_Bottom2: array[5][2],
      Name_Bottom3: array[6][2],
      Coins_Top1: array[1][3],
      Coins_Top2: array[2][3],
      Coins_Top3: array[3][3],
      Coins_Bottom1: array[4][3],
      Coins_Bottom2: array[5][3],
      Coins_Bottom3: array[6][3],
      rankings: [
        { name: 'My Friends' },
        { name: 'My City' },
        { name: 'My Country' },
        { name: 'Worldwide' }
      ],
      selectedRanking: null,
      user: {
    	  address: {
      	  ranking: null
        }
      }
    }),
    methods: {
      changeRanking (event) {
        this.user.address.ranking = event.target.value
        this.selectedRanking = event.target.options[event.target.options.selectedIndex].text
      },
      choose (SelectedValueDropDown) {
        switch(SelectedValueDropDown){
          case 'My Friends':
            array=MyFriends;
          break;

          case "My City":
            array=MyCity;
          break;

          case "My Country":
            array=MyCountry;
          break;

          case "Worldwide":
            array=Worldwide;
          break;

          default:
            array=MyFriends
        }
      }
    },
    computed: mapState({
            ABToggle: state => state.ABTests.ABToggle
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
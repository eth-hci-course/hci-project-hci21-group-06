<template key="MixedShop">
<div>
<md-dialog-confirm :md-active.sync="showEquipDialog"
    md-title="Equip Theme?"
    md-confirm-text="Equip"
    md-cancel-text="Cancel"
    @md-confirm="equipCurrentTheme"
    />
<md-dialog :md-active.sync="showFilterDialog" :md-fullscreen="false">
    <md-dialog-title>Filters</md-dialog-title>
    <md-dialog-content>
    <md-field>
        <label for="PrimaryColor">Primary Color</label>
        <md-select v-model="filters" name="Primary Color" id="PrimaryColor" multiple>
          <md-option v-for="color in colors" :value="'primary:'+color" :key="color">{{color}}</md-option>
        </md-select>
    </md-field>
    <md-field>
        <label for="AccentColor">Accent Color</label>
        <md-select v-model="filters" name="Accent Color" id="AccentColor" multiple>
          <md-option v-for="color in colors" :value="'accent:'+color" :key="color">{{color}}</md-option>
        </md-select>
    </md-field>
    <md-field>
        <label for="Theme">Theme</label>
        <md-select v-model="filters" name="Theme" id="Theme" multiple>
            <md-option value="theme:dark" key="dark">Dark</md-option>
            <md-option value="theme:light" key="light">Light</md-option>
        </md-select>
    </md-field>
    <md-field>
        <label for="Ordering">Ordering</label>
        <md-select v-model="filters" name="Ordering" id="Ordering" multiple>
            <md-option value="order:alphabetical" key="alph">Alphabetical</md-option>
            <md-option value="order:cost" key="cost">Cost</md-option>
        </md-select>
    </md-field>
    </md-dialog-content>
</md-dialog>
<md-card class="card">
      <md-card-content>
        <p> Current: {{availableCurrency}}</p>
        <p> Lifetime: {{totalCurrency}}</p>
      </md-card-content>
</md-card>
<div class="filters">
    <md-button class="md-icon-button" v-on:click="toggleDirection()">
        <md-icon>swap_vert</md-icon>
    </md-button>
    <md-button class="md-icon-button" v-on:click="toggleFilterDialog()">
        <md-icon>filter_alt</md-icon>
    </md-button>
    <md-chip v-for="filter in filters" :key="filter" md-deletable @md-delete="removeFilter(filter)">{{filter}}</md-chip>
</div>
<div class="themeList">
    <div v-for="theme in sortedThemes">
        <md-card v-if="isPurchased(theme)==false" class="themeCard" :md-theme="theme.id">
            <md-card-header>
                <div class="md-title">{{theme.name}} </div>
            </md-card-header>
            <md-card-content>
                <md-avatar class="md-primary"/>
                <md-avatar class="md-accent"/>
            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised md-primary" v-on:click="purchaseTheme(theme)" :disabled="theme.cost > availableCurrency">{{theme.cost}}</md-button>
            </md-card-actions>
        </md-card>
        <md-card v-if="isPurchased(theme)==true" class="themeCard" :md-theme="theme.id">
            <md-card-header>
                <div class="md-title">{{theme.name}} </div>
            </md-card-header>
            <md-card-content>
                <md-avatar class="md-primary"/>
                <md-avatar class="md-accent"/>
            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised md-primary" v-on:click="equipTheme(theme)">Equip</md-button>
            </md-card-actions>
        </md-card>
    </div>
</div>
</div>
</template>


<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
      showEquipDialog: false,
      showFilterDialog: false,
      currentTheme: null,
      filters: [],
      colors: [
          "red", "pink", "purple", "deeppurple", "indigo",
          "blue", "lightblue", "cyan", "teal", "green",
          "lightgreen", "lime", "yellow", "amber", "orange",
          "deeporange", "brown", "grey", "bluegrey", "white", "black"
      ],
      descending: true,
    }),
    computed: {
        ...mapState({
            availableCurrency: state => state.currency.currentCurrency,
            totalCurrency: state => state.currency.lifetimeCurrency,
            purchasedThemes: state => state.themes.purchasedThemes,
            sortedThemes (state) {
                let sortedThemes = [...state.themes.allThemes]
                if (this.filters.includes("order:cost") && this.filters.includes("order:alphabetical")){
                    sortedThemes = sortedThemes.sort((a,b)=>{
                            if(a.cost < b.cost){
                                return -1
                            }
                            if(a.cost > b.cost){
                                return 1
                            }
                            
                            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
                            if (fa < fb) {
                                return -1
                            }
                            if (fa > fb) {
                                return 1
                            }
                        return 0
                        })
                } else if (this.filters.includes("order:cost")) {
                    sortedThemes = sortedThemes.sort((a,b)=>{
                            if(a.cost < b.cost){
                                return -1
                            }
                            if(a.cost > b.cost){
                                return 1
                            }
                        return 0
                        })
                } else if (this.filters.includes("order:alphabetical")){
                    sortedThemes = sortedThemes.sort((a,b)=>{
                            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
                            if (fa < fb) {
                                return -1
                            }
                            if (fa > fb) {
                                return 1
                            }
                        return 0
                        })
                }

                let primaryFilters = this.filters.filter(function (item){
                    return item.split(":")[0] == "primary"
                })
                let accentFilters = this.filters.filter(function (item){
                    return item.split(":")[0] == "accent"
                })
                let themeFilters = this.filters.filter(function (item){
                    return item.split(":")[0] == "theme"
                })

                if (primaryFilters.length > 0 || accentFilters.length > 0 || themeFilters.length > 0){
                    sortedThemes = sortedThemes.filter(function (item) {
                        return (primaryFilters.includes("primary:"+item.primaryCategory) || accentFilters.includes("accent:"+item.accentCategory) || themeFilters.includes("theme:"+item.theme))
                    })
                }

                if(this.descending){
                    return sortedThemes.reverse()
                }
                return sortedThemes
            }
        }),
    },
    methods: {
        purchaseTheme: function (theme) {
            this.$store.dispatch('purchaseTheme', theme)
            this.$store.commit('deductCurrency', theme.cost)
            this.currentTheme = theme
            this.showEquipDialog = true
        },
        equipCurrentTheme: function () {
            this.showEquipDialog = false
            this.$material.theming.theme=this.currentTheme.id
            this.$store.commit('setTheme', this.currentTheme)
        },
        equipTheme: function (theme) {
            this.$material.theming.theme=theme.id
            this.$store.commit('setTheme', this.theme)
        },
        removeFilter: function(filter) {
            const index = this.filters.indexOf(filter)
            if (index > -1){
                this.filters.splice(index, 1)
            } 
            this.$forceUpdate()
        },
        toggleFilterDialog: function() {
            this.showFilterDialog = !this.showFilterDialog
        },
        toggleDirection: function() {
            this.descending = !this.descending
            this.$forceUpdate()
        },
        isPurchased (theme) {
            let bool = false;
            this.purchasedThemes.forEach(function (item) {
                if (item.id == theme.id) bool = true
            })
            return bool
        },
    }
}
</script>

<style scoped>
.themeCard{
    margin: 10px;
}
.themeList{
    display:flex;
    flex-direction:column;
    overflow:auto;
}
.filters {
    margin: 10px;
}
.card {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
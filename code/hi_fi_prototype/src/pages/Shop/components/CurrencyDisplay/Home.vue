<template>
    <md-card class="card">
        <md-card-content>
            <div class="coin-line" >
                Current:
                <div>{{availableCurrency}}
                    <div class="svg-wrapper">
                        <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23.5" :stroke="currentColor" stroke-width="3"/>
                            <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" :fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="coin-line" >
                Lifetime:
                <div>{{totalCurrency}}
                    <div class="svg-wrapper">
                        <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23.5" :stroke="currentColor" stroke-width="3"/>
                            <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" :fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: mapState({
        availableCurrency: state => state.currency.currentCurrency,
        totalCurrency: state => state.currency.lifetimeCurrency,
        currentColor: state => state.themes.currentTheme.accent,
    })
}
</script>

<style>
.card {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
.svg-wrapper {
    display: inline-flex;
    align-self: center;
    top: .125em;
    position: relative;
}
.coin-line{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>


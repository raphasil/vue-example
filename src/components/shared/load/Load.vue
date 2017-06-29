<template>
    <md-dialog md-open-from="#custom" md-click-outside-to-close="false" md-esc-to-close="false" md-close-to="#custom" ref="loading">
        <md-dialog-content>
            <md-spinner :md-size="150" md-indeterminate></md-spinner>
        </md-dialog-content>
    </md-dialog>
</template>

<script>
export default {
    name: 'load',
    data() {
        return {
            msg: 'Loading ...'
        }
    }
}
</script>

<style>

</style>

